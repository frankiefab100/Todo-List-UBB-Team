const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", () => {
  displayInputField();

  let todoItem = document.createElement("li");
  todoList.appendChild(todoItem);
  todoList.innerHTML += `<li>
  <label for="todoItem" class="execute"
    ><input type="checkbox" name="todoItem" id="todoItem" />
    <p class="text">${todoInput.value}</p>
    <span></span>
    <i class="fas fa-trash-alt"></i>
  </label>
</li>`;

  const completedButton = document.querySelector(".execute");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.addEventListener("click", () => {
    completedButton.classList.toggle("executed");
  });

  const deleteButton = document.querySelector(".fa-trash-alt");
  deleteButton.innerHTML = '<i class="fas fa-delete"></i>';
  deleteButton.addEventListener("click", () => {
    deleteButton.removeChild(todoItem);
  });
});

function displayInputField() {
  todoButton.classList.add("hide");
  todoInput.classList.remove("hide");
}
