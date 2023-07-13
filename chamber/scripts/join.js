const timestamp = document.querySelector("#timestamp");
const mobileToggle = document.querySelector("#mobile-toggle");

window.addEventListener("DOMContentLoaded", () => {
    timestamp.value = new Date();
});

mobileToggle.addEventListener("click", () => {
    mobileToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
    mobileToggle.parentElement.querySelector(".contents").classList.toggle("open");
});