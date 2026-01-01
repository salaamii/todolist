const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

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
    }
})

        //CREATE A DELETE ICON WHEN THE LI IS CREATED

        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-trash"></i>';
        li.appendChild(span);    


//delete the task when the button gets clicked
span.addEventListener("click", (e) => {
    li.remove();
     e.stopPropagation();
})

    }

    input.value = '';
   
}