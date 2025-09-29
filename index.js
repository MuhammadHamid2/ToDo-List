function addTask() {
    var todoData = document.getElementById("Input")
    var todoValue = todoData.value
    // console.log(todoValue);
    if (todoValue.trim() === "") {
        alert("Please Enter a Task")
    }

    var listItem = document.createElement("li")
    var list = document.createTextNode(todoValue)
    listItem.appendChild(list)

    var todoListData = document.getElementById("todo-list")
    todoListData.appendChild(listItem)
    todoData.value = ""

    // delete button
    var deleteBtn = document.createElement("button")
    var deleteText = document.createTextNode("Delete")
    

    deleteBtn.appendChild(deleteText)
    listItem.appendChild(deleteBtn)
    deleteBtn.setAttribute("class", "deleteBtn")

    deleteBtn.addEventListener("click", function () {
        todoListData.removeChild(listItem)
    })

    // edit data
    var editBtn = document.createElement("button")
    editBtn.setAttribute("class", "edit")
    var editText = document.createTextNode("Edit")
    console.log(listItem.childNodes[0].nodeValue)
    editBtn.addEventListener("click", function () {
        var updateText = prompt(listItem.childNodes[0].nodeValue, todoValue)

        listItem.childNodes[0].nodeValue = updateText
        console.log(updateText)
    })
    editBtn.appendChild(editText)
    listItem.appendChild(editBtn)
}


//delete All
function deleteAll() {
    var deleteAll = document.getElementById("todo-list")
    deleteAll.innerHTML = ""
}