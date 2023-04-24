const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task-btn");

addTaskBtn.addEventListener("click", () => {
  const newTaskInput = document.getElementById("new-task");
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = `${newTaskText} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(newTask);
    newTaskInput.value = "";
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentNode.remove();
  }
});
