var myForm = document.getElementById("myForm");
var myInput = document.getElementById("myInput");
var myItem = document.getElementById("myItem");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    createItem(myInput.value);
});

function createItem(inputItems) {
    if (inputItems.trim() !== "") {
        var items = `<li><input type="checkbox"> ${inputItems} <button>Delete</button></li>`;
        myItem.insertAdjacentHTML("beforeend", items);
        myInput.value = "";
        myInput.focus();
    } else {
        alert("Please enter a task.");
    }
}

myInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        myForm.submit();
    }
});

myItem.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    } else if (event.target.tagName === "INPUT") {
        event.target.parentElement.classList.toggle("completed");
    }
});