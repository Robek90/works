/**
 *  1) в обработчике события click для кнопки, мы заполняем только массив данными из текстового поля
    2) внутри события DOMContentLoaded, создаем функцию createList. 
     функция createList принимает 1 параметр - data, функция должна вызываться сразу после добавления нового элемента в массив (внутри события click для кнопки, сразу после push данных

    3) внутри функции createList, заводим переменную li и создаем новый тэг (createElement)
     далее, нужно написать цикл, который будет перебирать параметр data (наш массив с данными переданный из события click
     добавлять текст внутри цикла, и для созданного нами ранее ul, делать appendChild(li)
 */
     document.addEventListener('DOMContentLoaded', function() {

    
    
        let taskList = [];
    
        const ul = document.getElementById('ul');
        const taskText = document.getElementById('todoInput');
    
        const deleteButton = document.getElementById('deleteAll');
        const addTextButton=document.getElementById('butt');
    
        deleteButton.onclick = function() {
            taskList = [];
            taskList.splice();
            ul.innerHTML = '';
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
            console.log(taskList);
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