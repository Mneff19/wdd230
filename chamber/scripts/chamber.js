const mobileToggle = document.querySelector("#mobile-toggle");

mobileToggle.addEventListener("click", () => {
    mobileToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
    mobileToggle.parentElement.querySelector(".contents").classList.toggle("open");
});