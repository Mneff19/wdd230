const directoryMain = document.querySelector("#directoryMain");
const mobileToggle = document.querySelector("#mobile-toggle");
const viewToggleGrid = document.querySelector("#viewToggleGrid");
const viewToggleList = document.querySelector("#viewToggleList");

async function getJSONData(url) {
    const response = await fetch(url);
    const data = await response.json();
    buildDirectory(data);
}
const members = getJSONData("https://mneff19.github.io/wdd230/chamber/data/members.json");

mobileToggle.addEventListener("click", () => {
    mobileToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
    mobileToggle.parentElement.querySelector(".contents").classList.toggle("open");
});

viewToggleGrid.addEventListener("click", () => {
    viewToggleGrid.classList.add("active");
    viewToggleList.classList.remove("active");
});

viewToggleList.addEventListener("click", () => {
    viewToggleGrid.classList.remove("active");
    viewToggleList.classList.add("active");
});

function buildDirectory(data) {
    const ul = document.createElement("ul");
    ul.classList.add("member-list");
    ul.id = "membersList";

    for (let member in data) {
        const li = document.createElement("li");
        li.classList.add("member-list-item");
        li.innerHTML = `
        <img class="logo" src=${data[member].img} height="60">
        <h2 class="name">${data[member].name}</h2>
        <p class="address">${data[member].address}</p>
        <p class="phone">${data[member].phone}</p>
        <a href="${data[member].website}" class="website_link">${data[member].website}</a>
        `;

        ul.appendChild(li);
    }

    directoryMain.appendChild(ul);

    viewToggleGrid.addEventListener("click", () => {
        ul.classList.remove("list-view");
    });

    viewToggleList.addEventListener("click", () => {
        ul.classList.add("list-view");
    });
}