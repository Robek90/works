let nodes = document.querySelectorAll('span');

const ul = document.createElement('ul');

const buttonArr = document.getElementById('wantArray');
const buttonObj = document.getElementById('wantObject');
const textArea = document.getElementById("needObject");
const form = document.getElementById('formArea');

nodes.forEach((item,index) => {
    item.addEventListener('click',function(){
        item.classList.add('highlightArea');
        
        document.querySelectorAll('input').item(index).focus();
    });
});
    
const handleChange = function(event) {
    const defaultValue = event.target.defaultValue;
    
    nodes.forEach((item, index) => {
        if (item.innerText === defaultValue) {
            document.querySelectorAll('span').item(index).innerText = event.target.value;
        }
    });
}

const handleFocus = function(event) {
    const value = event.target.value;

    nodes.forEach((item) => {
        if (item.innerText === value) {
            if (item.classList.contains('highlight')) {
                item.classList.add('highlightArea');
            } else {
                item.classList.add('highlight');
            }
        }
    });
}

const handleBlur = function(event) {
    const value = event.target.value;

    nodes.forEach((item) => {
        if (item.innerText === value) {
            item.classList.remove('highlight', 'highlightArea');
        }
    });
}

buttonArr.addEventListener('click', function() {
    const arr = [];

    nodes.forEach((item,index) => {
        arr.push({
            [`word_${index}`]: item.textContent
        });
    }); 
    // трансформирую массив с объектами в строку для текстАреа
    textArea.textContent = JSON.stringify(arr, null, 2);
});

buttonObj.addEventListener('click', function() {
    let obj = {}; // добавляю информацию в пустой объект
    
    nodes.forEach((item,index) => {
        obj[`word_${index}`] = {
            value:item.textContent
        }
    });

    textArea.textContent = JSON.stringify(obj, null, 2)
});

nodes.forEach(function(item) {
    const li = document.createElement('li');
    
    const area = document.createElement('input');
    area.setAttribute('type', 'text')
    area.setAttribute('value', item.innerText);
    area.addEventListener('change', handleChange);
    area.addEventListener('focus', handleFocus);
    area.addEventListener('blur', handleBlur);
    
    li.appendChild(area)
    ul.appendChild(li)
    form.appendChild(ul);
});

// area.onfocus = function() {
//     if(this.value===item.textContent) {
//         item.classList.remove('highlightArea')
//         item.classList.add('highlight');
//     }
// };

// area.onblur = function() {
//     item.classList.remove('highlight');
//     item.classList.remove('highlightArea');
// };

// area.onchange = function(){
//     var x=item.textContent
//     var y=this.value
//     if(x===item.textContent) {
//         item.textContent=y
//     }
// };

// item.onclick = function() {
//     if(this.value=area.value){
//         area.focus()
//         item.classList.remove('highlight')
//         item.classList.add('highlightArea')
//     }
// }