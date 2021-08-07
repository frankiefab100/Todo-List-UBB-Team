const newTask = document.querySelector(".todo-button");

newTask.addEventListener("click", (event)=>{
    
    const newTask = document.querySelector(".task-input-1");
    // input field Validation
    if(newTask.value === ""){
        alert("Please enter a new TASK!");
    }  

    // Adding a New Task

     else {

        document.getElementById('myUL').innerHTML += `

        <li class = "items">
            <label class = "list-item">
            
            <input type="checkbox" name="todoItem" id="todoItem" />
                <p>
                
                ${
                    document.querySelector('.task-input-1').value
                }
                
                </p>
                
                <span></span>

                <button class = "delete">

                <i class="fas fa-trash-alt delete"></i>

                </button>
            
            </label>
        
        </li>

        `;

    }
})




