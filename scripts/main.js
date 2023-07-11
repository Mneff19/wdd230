const themeToggle = document.querySelector("#theme-toggle");
const mobileToggle = document.querySelector("#mobile-toggle");
const visitsCounter = document.querySelector("#visit_counter");
const weatherText = document.querySelector('#weatherText');
const weatherIcon = document.querySelector('#weatherIcon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=48.85792197297915&lon=2.353898423790552&appid=84fd1805bbdfc8774858391be52c31e4&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (e) {
        console.log(e);
    }
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherText.innerHTML = `${data.main.temp}&deg;F, ${desc}`;
}

apiFetch();

themeToggle.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("t-dark");
    themeToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
});

mobileToggle.addEventListener("click", () => {
    mobileToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
    mobileToggle.parentElement.querySelector(".contents").classList.toggle("open");
});

let totalVisits = Number(window.localStorage.getItem("totalVisits")) || 0;

if (totalVisits !== 0) {
    visitsCounter.textContent = totalVisits;
} else {
    visitsCounter.textContent = `You're the first! 🥳 Welcome!`;
}

totalVisits++;

localStorage.setItem("totalVisits", totalVisits);