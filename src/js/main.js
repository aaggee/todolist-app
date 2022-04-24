const todolist = [
    "Belajar CSS",
    "Belajar HTML",
    "Belajar Javascript"
];

function addTodolist(index, todo) {
    const todolistBody = document.getElementById("todolistBody");

    const item = document.createElement("div");
    item.setAttribute("class", "todolist-item");

    const itemButton = document.createElement("div");
    itemButton.setAttribute("class", "todolist-item__button");

    const buttonDone = document.createElement("input");
    buttonDone.setAttribute("class", "button");
    buttonDone.type = "button";
    buttonDone.value = "Done";
    buttonDone.onclick = function () {
        removeTodolist(index);
    }

    const itemContent = document.createElement("div");
    itemContent.setAttribute("class", "todolist-item__content");
    itemContent.textContent = todo;

    item.appendChild(itemButton);
    itemButton.appendChild(buttonDone);
    item.appendChild(itemContent);

    todolistBody.appendChild(item);
}

function clearTodolist() {
    const todolistBody = document.getElementById("todolistBody");
    while (todolistBody.firstChild) {
        todolistBody.removeChild(todolistBody.firstChild);
    }
}

function removeTodolist(index) {
    todolist.splice(index, 1);
    displayTodolist();
}

// search
const searchInput = document.getElementById("search");
searchInput.onkeyup = function () {
    displayTodolist();
}
searchInput.onkeydown = function () {
    displayTodolist();
}

function displayTodolist() {
    clearTodolist();
    for (let i = 0; i < todolist.length; i++) {
        const todo = todolist[i];
        const searchText = document.getElementById("search").value.toLowerCase();
        
        if(todo.toLowerCase().includes(searchText)) {
            addTodolist(i, todo);
        }
    }
}

document.forms['todoForm'].onsubmit = function (event) {
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;
    todolist.push(todo);

    document.forms['todoForm'].reset();
    displayTodolist();
}

displayTodolist();