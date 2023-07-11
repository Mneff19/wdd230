const baseURL = "https://mneff19.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";
const linksHolder = document.querySelector("#linksHolder");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

const buildLinks = links => {
    const ul = document.createElement("ul");
    ul.classList.add("list");

    Object.keys(links).forEach(week => {
        const li = document.createElement("li");
        li.classList.add("item");

        const weekSpan = document.createElement("span");
        weekSpan.classList.add("sub_text");
        weekSpan.textContent = week;
        li.appendChild(weekSpan);

        Object.keys(links[week]).forEach((linkName, i, arr) => {
            const a = document.createElement("a");
            a.classList.add("sub_link");
            a.setAttribute("href", links[week][linkName]);
            a.textContent = linkName;
            li.appendChild(a);

            if (i < arr.length - 1) {
                const dividerSpan = document.createElement("span");
                dividerSpan.classList.add("divider");
                dividerSpan.textContent = "|";

                li.appendChild(dividerSpan);
            }
        });

        ul.appendChild(li);
    });

    linksHolder.appendChild(ul);
}

getLinks();