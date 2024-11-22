import { todos } from "../components/todos.js"

const todayContainer = document.querySelector(".todos-container");

fetch("http://localhost:3001/tasks") 
    .then((res) => res.json())
    .then((data) => {
        const todayTasks = data.filter(task => task.left === 0)
        
        todayTasks.forEach((task) => {
            const taskElem = todos(); 
            const checkbox = taskElem.querySelector("input[type='checkbox']")
            const title = taskElem.querySelector(".title")
            const text = taskElem.querySelector(".text")
            const day = taskElem.querySelector(".day")

            title.textContent = task.title
            text.textContent = task.desc
            checkbox.checked = task.completed

            day.textContent = "Today";
            todayContainer.append(taskElem);
            checkbox.onchange = () => {
                localStorage.setItem(task.id, checkbox.checked);
            }

            const saved = localStorage.getItem(task.id)
            if (saved !== null) {
                checkbox.checked = saved === "true"
            }
            if (checkbox.checked) {
                taskElem.classList.add("completed");
            }
        })
})

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
}
