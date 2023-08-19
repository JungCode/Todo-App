let input = document.getElementById('floatingInput');
let todoList = document.getElementById('todoList');
input.addEventListener("keypress", function(event) {
    if(event.key == "Enter"){
        addTask(input.value);
        saveData();
    }
});
todoList.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("task-is-done");
        let icon = e.target.querySelector('i');
        if(icon.classList.contains("bi-patch-check")){
            icon.classList.remove("bi-patch-check");
            icon.classList.add("bi-patch-check-fill");
        }else{
            icon.classList.remove("bi-patch-check-fill");
            icon.classList.add("bi-patch-check");
        }
        
    }
    else if(e.target.tagName == "I"){
        e.target.parentElement.parentElement.remove();
    }
    saveData();
});




function addTask(task){
    if(task == ""){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.classList.add("li-todo");
        li.classList.add("shadow-sm");
        li.classList.add("position-relative");
        
        let i = document.createElement("i")
        i.classList.add("me-2");
        i.classList.add("bi");
        i.classList.add("bi-patch-check");
        i.classList.add("icon");

        let p = document.createElement("p");
        p.classList.add("d-inline");
        p.innerHTML = task;
        
        let span = document.createElement("span");
        let i2 = document.createElement("i");
        i2.classList.add("bi")
        i2.classList.add("bi-x-lg")
        i2.classList.add("close-button")
        span.appendChild(i2);

        li.appendChild(i);
        li.appendChild(p);
        li.appendChild(span);
        todoList.appendChild(li);

        input.value = "";
    }
}
function saveData(){
    localStorage.setItem("data",todoList.innerHTML);
}
function showData(){
    todoList.innerHTML = localStorage.getItem("data");
    console.log("alo");
}
showData();

