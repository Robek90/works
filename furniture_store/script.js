document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('.cartInputs .cartInput');

  inputs.forEach(item => {
    const dbtn = item.querySelectorAll(".decrease")
    const ibtn = item.querySelectorAll(".increase")
    const inputBtn = item.querySelector(".inputNumber")

    dbtn[0].addEventListener('click', () => {
      decreaseValue(inputBtn.value, inputBtn)
    });
    ibtn[0].addEventListener('click', () => {
      increaseValue(inputBtn.value, inputBtn)
    });
  });
});

function increaseValue(data,input) {
  let value = parseInt(data);

  value = isNaN(value) ? 1 : value;
  value++;

  input.value = value;
}

function decreaseValue(data,input) {
  let value = parseInt(data);

  value = isNaN(value) ? 1 : value;
  value < 2 ? value = 2 : '';
  value--;
  
  input.value = value;
}