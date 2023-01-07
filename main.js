const btn = document.querySelector("btn")
const input = document.querySelector("input")
const btnDel = document.querySelector("#btnDel")
const form = document.querySelector("#form")
const taskWrapper = document.querySelector("#tasks")

form.addEventListener("click", addTask)

function addTask(e) {
    e.preventDefault()
    const correctBtn = e.target.dataset.btn
    const htmlTask = `
    <li class="task">
        <p class="task__text">${input.value}</p>
        <button class="btnDel" id="btnDelete">Delete Task</button>
    </li>`
    if(correctBtn) {
        if(input.value) {
            taskWrapper.insertAdjacentHTML("beforeend", htmlTask)
            console.log(true)
            clearInput()
            input.focus()
        }
        else {
            console.log(false)
        }
    }
}
function clearInput() {
    input.value = "";
}