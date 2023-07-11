const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    const cardHolder = document.querySelector("#cards");

    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        card.classList.add("card");
        card.innerHTML = `
        <h2 class="name">${prophet.name} ${prophet.lastname}</h2>
        <p class="birthplace">Born in ${prophet.birthplace}</p>
        <p class="birthdate">${prophet.birthdate}</p>
        <img class="portrait" src="${prophet.imageurl}" alt="Portrait of ${prophet.name} ${prophet.lastname}" width="150" height="186" loading="lazy">
        `;
        cardHolder.appendChild(card);
    });
}

getProphetData();