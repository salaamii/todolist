const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(input.value === '') {
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.textContent = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        li. addEventListener("click", () => {
    li.classList.toggle("checked");
})

span.addEventListener("click", () => {
    li.remove();
     e.stopPropagation();
})
    }

    input.value = '';
}

