const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(input.value === '') {
        alert("Please enter a task");
    }
    else{
        // create an li and add to ul when the add button is clicked

        let li = document.createElement("li");
        li.textContent = input.value;
        listContainer.appendChild(li);

        //CREATE A DELETE ICON WHEN THE LI IS CREATED

        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-trash"></i>';
        li.appendChild(span);

        

        //add event listener to mark the task as completed and uncompleted

        li. addEventListener("click", () => {
    li.classList.toggle("checked");
})

span.addEventListener("click", (e) => {
    li.remove();
     e.stopPropagation();
})
    }

    input.value = '';
   
}


