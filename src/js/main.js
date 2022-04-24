const todolist = [
    "Belajar CSS",
    "Belajar HTML",
    "Belajar Javascript"
];

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

function addTodolist(index, todo) {
    const tr = document.createElement("tr");
    const tdButton = document.createElement("td");
    const buttonDone = document.createElement("input");

    buttonDone.type = "button";
    buttonDone.value = "Done";
    buttonDone.onclick = function () {
        removeTodolist(index);
    };

    tr.appendChild(tdButton);
    tdButton.appendChild(buttonDone);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;

    tr.appendChild(tdTodo);

    const todolistBody = document.getElementById("todolistBody");
    todolistBody.appendChild(tr);
}

function displayTodolist() {
    clearTodolist();

    for (let index = 0; index < todolist.length; index++) {
        const todo = todolist[index];

        const searchText = document.getElementById("search").value.toLowerCase();
        if(todo.toLowerCase().includes(searchText)) {
            addTodolist(index, todo);
        }
    }
}

document.forms['todoForm'].onsubmit = function (event) {
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;
    todolist.push(todo);

    document.forms['todoForm'].reset();

    // console.info(todolist);
    displayTodolist();
}

const searchInput = document.getElementById("search");
searchInput.onkeyup = function () {
    displayTodolist();
}
searchInput.onkeydown = function () {
    displayTodolist();
}

displayTodolist();