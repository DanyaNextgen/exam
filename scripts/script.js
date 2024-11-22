import { todos } from "../components/todos.js"

const todayContainer = document.querySelector(".today"),
    tomorrowContainer = document.querySelector(".tomorrow"),
    laterContainer = document.querySelector(".later");

fetch("http://localhost:3001/tasks") 
    .then((res) => res.json())
    .then((data) => Tasks(data))

function Tasks(tasks) {
    tasks.forEach((task) => {
        const taskElem = todos();
        const checkbox = taskElem.querySelector("input[type='checkbox']")
        const title = taskElem.querySelector(".title")
        const text = taskElem.querySelector(".text")
        const day = taskElem.querySelector(".day")
    
        title.textContent = task.title
        text.textContent = task.desc
        checkbox.checked = task.completed
    
        if (task.left === 0) {
            day.textContent = "today"
            todayContainer.append(taskElem)
        } 
        else if (task.left === 1) {
            day.textContent = "tomorrow"
            tomorrowContainer.append(taskElem)
        } 
        else {
            day.textContent = "later"
            laterContainer.append(taskElem)
        }

        checkbox.onchange = () => {
            localStorage.setItem(task.id, checkbox.checked)
        }

        const saved = localStorage.getItem(task.id)
        if (saved !== null) {
            checkbox.checked = saved === "true"
        }
    })
}

const homepage = document.querySelector("#homepage")
const only_today = document.querySelector("#only_today")

homepage.onclick = () => {
    homepage.classList.add("active")
    only_today.classList.remove("active")
    window.location.href = "index.html"
}

only_today.onclick = () => {
    homepage.classList.remove("active")
    only_today.classList.add("active")
    window.location.href = "todayTodos.html"
}
