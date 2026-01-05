const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const filters = document.getElementById("filters");


// save tasks for localStorage
function saveTasks() {
let tasks = [];

document.querySelectorAll("#list-container li").forEach(li => {
    tasks.push({
        text: li.firstChild.textContent,
        completed: li.classList.contains("checked")
    });
});

localStorage.setItem("tasks", JSON.stringify(tasks));

}


//FUNCTION TO ADD TASKS TO THE LIST

function addTask(){
    if(input.value.trim() === '') {
        alert("Please enter a task");
    }
    else{

        // create an li and add to ul when the add button is clicked

        let li = document.createElement("li");
        li.textContent = input.value;
        listContainer.appendChild(li);

        //add event listener to mark the task as completed and uncompleted

        li. addEventListener("click", () => {
    li.classList.toggle("checked");
    saveTasks();
})



    // edit the task when the edit button gets clicked

let editSpan = document.createElement("span");
editSpan.innerHTML = '<i class="fas fa-pen"></i>';
li.appendChild(editSpan);
editSpan.id = "edit-btn";

editSpan.addEventListener("click", (e) => {
    e.stopPropagation();

    let currentText = li.firstChild.textContent;
    let newText = prompt("Edit task:", currentText);

    if (newText !== null && newText.trim() !== "") {
        li.firstChild.textContent = newText;
        saveTasks();
    }
})



        //create a delete icon when the task is created

        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-trash"></i>';
        li.appendChild(span);   
        
        
//delete the task when the delete icon gets clicked
span.addEventListener("click", (e) => {
    li.remove();
    saveTasks();
     e.stopPropagation();
})

    saveTasks();

    }

    input.value = '';
}



//function to load the tasks when the pages load

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (!savedTasks) return;

    //load the tasks from the array

    const tasks = JSON.parse(savedTasks);

    //clear the ul to avoid duplications;
    listContainer.innerHTML = "";

    //rebuild the tasks list

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("checked");

        }

       
         //CREATE A DELETE ICON WHEN THE LI IS CREATED

        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-trash"></i>';
        li.appendChild(span);   
        
        
//delete the task when the button gets clicked
span.addEventListener("click", (e) => {
    li.remove();
    saveTasks();
     e.stopPropagation();
})

        //rebuild the edit button

        let editSpan = document.createElement("span");
        editSpan.innerHTML = '<i class="fas fa-pen"></i>';
        li.appendChild(editSpan);
        editSpan.id = "edit-btn";

        //listener for the edit button

        editSpan.addEventListener("click", (e) => {
        e.stopPropagation();
        let currentText = li.firstChild.textContent;
    let newText = prompt("Edit task:", currentText);

    if (newText !== null && newText.trim() !== "") {
        li.firstChild.textContent = newText;
        saveTasks();
    }
    });

    //listener for check as completed

     li.addEventListener("click", () => {
        li.classList.toggle("checked");
        saveTasks();
    });

        listContainer.appendChild(li);
    });


}

loadTasks();

//FILTER BUTTONS

filters.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    Array.from(filters.children).forEach(btn => btn.classList.remove("active-filter"));

    e.target.classList.add("active-filter");

    const filter = e.target.dataset.filter;

    document.querySelectorAll ("#list-container li").forEach(li => {
        if (filter === "all") {
            li.style.display = "list-item";
        }

        else if (filter === "completed") {
            li.style.display = li.classList.contains("checked") ? "list-item" : "none";
        }

        else if (filter === "uncompleted") {
            li.style.display = !li.classList.contains("checked") ? "list-item" : "none";
        }
    });
});