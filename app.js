const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", () => {
  displayInputField();
});

function displayInputField() {
  todoButton.classList.add("hide");
  todoInput.classList.remove("hide");
}

function addNewItem() {
  todoInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      let todo = ` <li><label for="todoItem" class="execute">
    <input type="checkbox" name="todoItem" id="todoItem" />
    <p class="text">${todoInput.value}</p>
    <span></span>
    <i class="fas fa-trash-alt"></i>
    </label></li>`;

      todoList.insertAdjacentHTML("beforeend", todo);
      todoList.appendChild(todo);
    }
    todoInput.value = "";

    const deleteButton = document.querySelector(".fa-trash-alt");
    deleteButton.addEventListener("click", () => {
      deleteButton.parentNode.parentNode.remove(todoItem);
    });

    const completedButton = document.querySelector(".execute");
    let enterItem = document.querySelector(".text");
    enterItem.addEventListener("click", () => {
      enterItem.classList.toggle("executed");
    });
  });
}

addNewItem();
