const newTask = document.querySelector(".todo-button");

newTask.addEventListener("click", (event)=>{
    
    const newTask = document.querySelector(".task-input-1");

    if(newTask.value === ""){
        alert("Please enter a new TASK!");
    }   else {

        document.querySelector(".items").innerHTML += `

            <label class = "list-item">
            
            <input type="checkbox" name="todoItem" id="todoItem" />
                <p>
                
                ${
                    document.querySelector('.task-input-1').value
                }
                
                </p>
                
                <span></span>

                <i class="fas fa-trash-alt"></i>
            
            </label>
        
        `;

    }
})