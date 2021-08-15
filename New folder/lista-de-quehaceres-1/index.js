// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");

// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// functions
function addTodo(event) {
	// prevent form from submitting
	event.preventDefault();
	// todo div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	//create li element
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	//check-mark button
	const completeBtn = document.createElement("button");
	completeBtn.innerHTML = `<ion-icon name="checkbox-outline"></ion-icon>`;
	completeBtn.classList.add("complete-btn");
	todoDiv.appendChild(completeBtn);

	//check-mark button
	const trashBtn = document.createElement("button");
	trashBtn.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
	trashBtn.classList.add("trash-btn");
	todoDiv.appendChild(trashBtn);

	// append to list
	todoList.appendChild(todoDiv);

	// clear todo input value
	todoInput.value = "";
}

// delete check function
function deleteCheck(e) {
	const item = e.target;

	// delete
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		// animation
		todo.classList.add("slide");
		todo.addEventListener("transitionend", () => {
			todo.remove();
		});
	}

	// checkmark
	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

// function to filter todos
function filterTodo(e) {
	const todos = todoList.childNodes;
	todos.forEach((todo) => {
		switch (e.target.value) {
			case "all":
				todo.style.display = "flex";
				break;
			case "completed":
				if (todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;
			case "pending":
				if (!todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;
		}
	});
}
