const btn = document.querySelector("btn")
const input = document.querySelector("input")
const btnDel = document.querySelector("#btnDel")
const form = document.querySelector("#form")
const taskWrapper = document.querySelector("#tasks")

form.addEventListener("click", addTask)
form.addEventListener("click", deleteTask)

function addTask(e) {
    e.preventDefault()
    const correctBtn = e.target.dataset.btn
    const htmlTask = `
    <li class="task">
        <p class="task__text">${input.value}</p>
        <button data-del="del" class="btnDel" id="btnDelete">Delete Task</button>
    </li>`
    if(correctBtn) {
        if(input.value) {
            taskWrapper.insertAdjacentHTML("beforeend", htmlTask)
            console.log(true)
            clearInput()
            input.focus()
        } else {
            alert("Пустое поле!")
        }
    }
}
function deleteTask(e) {
    e.preventDefault()
    const btn = e.target
    const correctBtnDel = e.target.dataset.del;
    const task = btn.parentNode;
    if(correctBtnDel) {
        task.remove()
    }
}
function clearInput() {
    input.value = "";
}