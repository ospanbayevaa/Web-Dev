const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    // Create elements
    const li = document.createElement("li");
    const leftDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    // Setup elements
    leftDiv.className = "task-left";
    checkbox.type = "checkbox";
    span.textContent = taskText;
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete-btn";

    // Events
    checkbox.addEventListener("change", function () {
        li.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Build structure
    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);
    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
