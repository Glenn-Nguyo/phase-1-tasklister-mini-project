document.addEventListener("DOMContentLoaded", () => {
  // your code here

  function handleDelete(e){
    e.target.parentNode.remove()
  }
  function taskToDo(todo) {
    let li = document.createElement("li")
    li.textContent = `${todo}`
    let liBtn = document.createElement("button")
    liBtn.addEventListener("click",  handleDelete)
    liBtn.textContent = "x"
    li.appendChild(liBtn)
    document.querySelector("#tasks").appendChild(li)
  }
let form = document.querySelector("#create-task-form")
 form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  taskToDo(document.getElementById("new-task-description").value)
  form.reset()
  })
});
