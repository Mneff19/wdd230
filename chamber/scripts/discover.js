const mobileToggle = document.querySelector("#mobile-toggle");
const lastVisitEl = document.querySelector("#last_visit");
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
let lastVisitDate = localStorage.getItem("lastVisit") || null;
let today = Date.now();
let visitGap = Math.floor((today - lastVisitDate) / msToDays);

mobileToggle.addEventListener("click", () => {
    mobileToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
    mobileToggle.parentElement.querySelector(".contents").classList.toggle("open");
});

if (!lastVisitDate) {
    lastVisitEl.textContent = "Welcome! Let us know if you have any questions.";
} else if (visitGap < 1) {
    lastVisitEl.textContent = "Back so soon! Awesome!";
} else {
    lastVisitEl.textContent = `You last visited ${visitGap} day${visitGap > 1 ? "s" : ""} ago.`;
}

localStorage.setItem("lastVisit", today)