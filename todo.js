document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let input = document.getElementById("todoInput");
    let task = input.value.trim();

    if (task === "") return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById("todoList");
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task} 
            <button class="delete" onclick="deleteTask(${index})">❌</button>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function loadTasks() {
    renderTasks();
}
