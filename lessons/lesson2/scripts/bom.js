const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    if (input.value == "") {
        alert("Please enter a value");
        input.focus();
    } else {
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
        });
        input.focus();
        input.value = null;
    }
});