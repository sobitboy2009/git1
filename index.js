function addTask() {
    let input = document.getElementById("taskInput");
    let ul = document.getElementById("taskList");
    if (input.value !== "") {
        let li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = "";
    }
}