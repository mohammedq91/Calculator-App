const numbers = document.getElementsByClassName('number')
const dot = document.getElementsByClassName('dot');
const operators = document.getElementsByClassName('operator')
const clear = document.getElementById('clear').addEventListener('click', reset)
const inputDisplay = document.getElementById('inputDisplay')

let firstOperand = '';
let secondOperand = '';
let operatorValue = '';


var sum;

function reset(e){
  e.preventDefault();
  inputDisplay.value ="0"
}

for (let i=0; i < numbers.length; i++){
  const number = numbers[i];
  number.addEventListener('click', function(e) {
    e.preventDefault();

    if (!firstOperand){
      firstOperand = number.textContent;
      console.log('firstOperand: ',firstOperand);
      inputDisplay.value = number.textContent;
    }
    if (firstOperand && operatorValue) {
      secondOperand = number.textContent;
      console.log('secondOperand: ',secondOperand);
      inputDisplay.value = number.textContent;
    }
  });
};

for (let i=0; i < operators.length; i++){
  const operator = operators[i];

  operator.addEventListener('click', function(e){
    e.preventDefault();

    if (firstOperand && !operatorValue){
      operatorValue = operator.textContent;
      console.log('operator: ', operatorValue)
      inputDisplay.value = operator.textContent
    }
  })
}


function calculate(firstOperand, operator, secondOperand){
  const add;
  switch (firstOperand, secondOperand) {
    case add:
      if (operator === add)
      return add = firstOperand + secondOperand;
      console.log(firstOperand+secondOperand)
      inputDisplay.value = add.textContent


  // switch (key) {
  //   case value:
  // }
  };
};
calculate(add)





