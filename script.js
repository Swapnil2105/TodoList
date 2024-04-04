document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');
    const taskCount = document.getElementById('taskCount');

    addButton.addEventListener('click', function () {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
            updateTaskCount();
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.innerText = text;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            li.remove();
            updateTaskCount();
        });
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });
    }

    function updateTaskCount() {
        taskCount.innerText = todoList.children.length;
    }
});
