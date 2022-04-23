const todolist = [];

function displayTodolist() {
    for (let index = 0; index < todolist.length; index++) {
        const todo = todolist[index];

        const tr = document.createElement("tr");
        const tdButton = document.createElement("td");
        const buttonDone = document.createElement("input");
        
        buttonDone.type = "button";
        buttonDone.value = "Done";

        tr.appendChild(tdButton);
        tdButton.appendChild(buttonDone);

        const tdTodo = document.createElement("td");
        tdTodo.textContent = todo;

        tr.appendChild(tdTodo);

        const todolistBody = document.getElementById("todolistBody");
        todolistBody.appendChild(tr);


    }
}

document.forms['todoForm'].onsubmit = function (event) {
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;
    todolist.push(todo);

    document.forms['todoForm'].reset();

    console.info(todolist);
    displayTodolist();
    
}