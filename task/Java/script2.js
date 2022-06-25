document.addEventListener('DOMContentLoaded', function() {

    
    
    let taskList = [];

    const ul = document.getElementById('ul');
    const taskText = document.getElementById('todoInput');

    const deleteButton = document.getElementById('deleteAll');
    const addTextButton=document.getElementById('butt');

    deleteButton.onclick = function() {
        taskList = [];
        taskList.splice();
        createList(taskList)
    };
    
    addTextButton.onclick = function () {
        
        taskList.push(taskText.value);
        createList(taskList)  
        taskText.value = '';     
    };
    
    // trashButton.onclick = function(event) {
        
    // };
    
    function handleChange(event) {
        // var el = event.target || event.srcElement;

        // if (el && el.type == 'checkbox') {
        //     alert(el.id);
        // }
        console.log(`was checked row ${event.target.value} & array item is: ${taskList[event.target.value]}`);
        taskList.splice(event.target.value,1);
        createList(taskList)
    };
    
    function createList(task) {
        ul.innerHTML = '';
        
        task.forEach((item,index)=>{
            const newTask = document.createElement('li');
            const checkbox = document.createElement('input');
            const trashButton = document.createElement('button');
            const deleteIcon = document.createElement('i');
            
            trashButton.className = 'tbtn';
            deleteIcon.classList.add('fas', 'fa-trash-alt');
            checkbox.className = 'chkbtn';
            checkbox.type = 'checkbox';
            checkbox.name = 'checkTask';
            checkbox.value = index;
            checkbox.addEventListener('change', handleChange);
                
            
            trashButton.appendChild(deleteIcon);
            newTask.appendChild(trashButton);
            newTask.appendChild(checkbox);
            
            const text = document.createTextNode(" "+item);
            newTask.appendChild(text);
            ul.appendChild(newTask);

            


            // checkbox.addEventListener('change', (event)=> {
            //     if (event.currentTarget.cheked) {
            //         alert('cheked');
            //     } else {
            //         alert('not cheked');
            //     }
            // });
        });
    };        
});


