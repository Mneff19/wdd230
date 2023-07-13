const mobileToggle = document.querySelector("#mobile-toggle");
const weatherTemp = document.querySelector("#weatherTemp");
const weatherDescription = document.querySelector("#weatherDescription");
const forecast = document.querySelector("#forecast");

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.53183096915482&lon=-112.30080357417363&appid=84fd1805bbdfc8774858391be52c31e4&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data.list);
            displayResults(data.list);
        } else {
            throw Error(await response.text());
        }
    } catch (e) {
        console.log(e);
    }
}

function displayResults(data) {
    const desc = data[0].weather[0].description;
    weatherTemp.innerHTML = `${data[0].main.temp}&deg;F`;
    weatherDescription.textContent = desc;

    const ul = document.createElement("ul");
    ul.classList.add("days");

    let loadedDays = [];

    for (dataPoint in data) {
        const date = new Date(data[dataPoint].dt * 1000);
        const day = date.toLocaleDateString("en-US", { weekday: "long" });

        if (loadedDays.indexOf(day) == -1) {
            loadedDays.push(day);

            if (loadedDays.length > 1 && loadedDays.length < 5) {
                const li = document.createElement("li");
                li.classList.add("day");

                li.innerHTML = `
                <img src="https://openweathermap.org/img/wn/${data[dataPoint].weather[0].icon}.png" alt="${data[dataPoint].weather[0].description}" width="24" height="24">
                <div class="info">
                    <p class="temp">${data[dataPoint].main.temp}&deg;F</p>
                    <p class="condition">${data[dataPoint].weather[0].description}</p>
                </div>
                <p class="weekday">${day}</p>
                `;

                ul.appendChild(li);
            }
        }
    }

    forecast.appendChild(ul);
}

// apiFetch();

mobileToggle.addEventListener("click", () => {
    mobileToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
    mobileToggle.parentElement.querySelector(".contents").classList.toggle("open");
});