document.addEventListener('DOMContentLoaded', function() {
  
  let salary = JSON.parse(localStorage.getItem('table')) || [];
  let summ = JSON.parse(localStorage.getItem('summ')) || [];

  const tbody = document.getElementById('tbody');
  const date = document.getElementById('date');
  const product = document.getElementById('product');
  const number = document.getElementById('number');
  const price = document.getElementById('price');
  const result = document.getElementById('result');

  const btnEditCol = document.getElementById('buttClear')

  const addRowButton = document.getElementById('butt');

  createRow(JSON.parse(localStorage.getItem('table')));
  arraySum(JSON.parse(localStorage.getItem('summ')));

  btnEditCol.onclick = function () {
    const numberElem = document.querySelectorAll('input.number');

    let arrNumberEdit = [];

    numberElem.forEach(function(item) {
      if (item.disabled) {
        item.value = '0';
        item.disabled = false;
        btnEditCol.classList.remove('btnEdit');
        btnEditCol.classList.add('btnEditActive');
        btnEditCol.innerHTML = 'Сохранить';
      } else {
        item.disabled = true;
        arrNumberEdit.push(item.value)
        btnEditCol.classList.remove('btnEditActive')
        btnEditCol.classList.add('btnEdit')
        btnEditCol.innerHTML = 'Ред Количество';
      }
    })

    if (btnEditCol.classList[1] === 'btnEdit') {
      console.log('work')
      salary.forEach((arrItem, index) => {
        arrItem.numberObj = arrNumberEdit[index];
        console.log(arrItem.numberObj)
        if(arrItem.numberObj === null) {
          arrItem.totalObj = 1*arrItem.priceObj;
        } else {
          arrItem.totalObj = arrItem.numberObj*arrItem.priceObj;
        }
        salary[index] = arrItem;
        summ[index] = arrItem.totalObj;
        addToStorage(salary,summ);
        createRow(salary);
        arraySum(summ);
      })
    }
  };

  addRowButton.onclick = function() {
    addToArr()
  };

  function addToStorage(arrItem, arrMath) {
    localStorage.setItem('table', JSON.stringify(arrItem));
    localStorage.setItem('summ', JSON.stringify(arrMath));
  };

  function addToArr() {
    let dateObj = date.value;
      if (date.value === '') {
        const thisDate = new Date();
        
        const format = (thisDate) => thisDate < 10 ? `0${thisDate}` : date.toString();

        const getDateString = (timestamp) => {
          const date = new Date(timestamp);
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          return `${year}-${format(month)}-${day}`;
        };

        dateObj = getDateString(thisDate)
      };

    let productObj = product.value;
    let numberObj = number.value;
    let priceObj = price.value;
    let totalObj = number.value*price.value;

    let row = {dateObj,productObj,numberObj,priceObj,totalObj};

    salary = [...salary, row];
    summ = [...summ, totalObj]; 

    createRow(salary);
    arraySum(summ);
    
    addToStorage(salary,summ);

    dateObj.value = '';
    productObj.value = '';
    numberObj.value = '';
    priceObj.value = '';
    totalObj = '';
  };

  function createRow(row) {

    if(localStorage.getItem('table') === null) {
      row = salary
    };

    tbody.innerHTML = '';
    result.innerHTML = '';

    row.forEach((item,index) => {

      const fragment = document.createDocumentFragment();

      const rowtr = document.createElement('tr');

      const data_0 = document.createElement('td');
      const delRow = document.createElement('button');
      data_0.appendChild(delRow)
      delRow.innerHTML = 'Удалить';
      delRow.className = 'buttDel';
      delRow.id = index;

      const data_1 = document.createElement('td');
      data_1.innerHTML = item.dateObj;

      const data_2 = document.createElement('td');
      data_2.innerHTML = item.productObj;

      const data_3 = document.createElement('td');
      const input_1 = document.createElement('input');
      data_3.appendChild(input_1)
      input_1.type = 'number';
      input_1.className = 'number';
      input_1.id = index;
      input_1.disabled = true;
      input_1.value = item.numberObj;
        if(item.numberObj === '') {
          input_1.value = 0;
        }

      const data_4 = document.createElement('td');
      const input_2 = document.createElement('input');
      data_4.appendChild(input_2)
      input_2.type = 'number';
      input_2.className = 'price';
      input_2.id = index;
      input_2.disabled = true;
      input_2.value = item.priceObj;

      const data_5 = document.createElement('td');
      data_5.innerHTML = (item.numberObj*item.priceObj).toFixed(2);

      const addRowEdit = document.createElement('button');
      const data_6 = document.createElement('td');
      data_6.appendChild(addRowEdit)
      addRowEdit.innerHTML = 'Редактировать';
      addRowEdit.className = 'buttEdit';
      addRowEdit.id = index;

      addRowEdit.onclick = function () {
        const rowEdit = salary[index];

        if (input_1.disabled && input_2.disabled) {
          input_1.disabled = false;
          input_2.disabled = false;
          addRowEdit.classList.add('buttSave');
        } else {
          input_1.disabled = true;
          input_2.disabled = true;
          addRowEdit.classList.remove('buttSave');
          rowEdit.numberObj = input_1.value;
          rowEdit.priceObj = input_2.value;
          rowEdit.totalObj = input_1.value*input_2.value;
          createRow(salary)
        }

        salary[index] = rowEdit;
        summ[index] = rowEdit.totalObj;

        arraySum(summ);

        addToStorage(salary,summ);
      };

      delRow.onclick = function () {
        let arrRow = salary;
        let arrSumm = summ;
        arrRow.splice(index,1);
        arrSumm.splice(index,1);
        addToStorage(arrRow,arrSumm);
        createRow(arrRow);
        arraySum(arrSumm);
      };
      
      fragment.appendChild(data_0);
      fragment.appendChild(data_1);
      fragment.appendChild(data_2);
      fragment.appendChild(data_3);
      fragment.appendChild(data_4);
      fragment.appendChild(data_5);
      fragment.appendChild(data_6);

      rowtr.appendChild(fragment);

      tbody.appendChild(rowtr);
    })
  };

  function arraySum(arr) {
    result.innerHTML = '';

    if(localStorage.getItem('summ') === null) {
      arr = summ
    };
    
    let totalSum = arr.reduce(function(sum, current) {
      return sum + current
    }, 0);

    totalValue = totalSum - (totalSum*13/100)

    let total = document. createElement('span')
    total.innerHTML = totalValue.toFixed(2);

    result.appendChild(total);
  };
});

// class Jopa {
//   constructor(param) {
//     this.name = param;
//   }

//   printName() {
//     console.log(this.name);
//     this.test()
//   }

//   test() {
//     console.log('456');
//   }
// }

// const jopa = new Jopa('123');

// jopa.printName()