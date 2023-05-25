const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("button");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", () => {
    if (input.value == "") {
        alert("Please enter a value");
        input.focus();
    } else {
        displayList(input.value);
        chaptersArray.push(input.value)
        setChapterList();
        input.value = null;
        input.focus();
    }
});


function setChapterList() {
    localStorage.setItem("chatperList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(window.localStorage.getItem("chatperList"));
}

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", () => {
        let chapter = li.textContent.slice(0, li.textContent.length - 1);
        list.removeChild(li);
        deleteChapter(chapter);
        input.focus();
    });
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}