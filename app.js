let todoInput = document.querySelector(".todo-input");
let submitTodo = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");

// Event listeners

submitTodo.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)


// function



// let addTodo = (e) =>
function addTodo(e) {
    e.preventDefault()

    if (todoInput.value === "") {
        todoInput.value = ""
    } else {
        let todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")

        let newTodo = document.createElement("li")

        newTodo.innerText = todoInput.value
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo)

        todoInput.value = ""

        let checkBtn = document.createElement("button")
        checkBtn.innerHTML = `<i class="fas fa-check"></i>`
        checkBtn.classList.add("complete")
        todoDiv.appendChild(checkBtn)


        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`
        deleteBtn.classList.add("trash")
        todoDiv.appendChild(deleteBtn)

        todoList.appendChild(todoDiv)
    }
}


function deleteCheck (e){
    let item = e.target
    if(item.classList[0] === "trash"){
        let delee = item.parentElement
        delee.classList.add("fall");

        delee.addEventListener("transitionend", e => {
            delee.remove();
          });
    }
    if(item.classList[0] === "complete"){
        let stroke = item.parentElement;
        stroke.classList.toggle("completed")
        console.log(stroke)
    }
}

