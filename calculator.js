const clearBtn = document.getElementById('clearBtn').addEventListener('click', reset)
const numbers = document.getElementsByClassName('number')
const dot = document.getElementsByClassName('dot');
const operators = document.getElementsByClassName('operator')
const display = document.getElementById('display')
const equalsButton = document.querySelector('.equals')
display.value ="0"

let firstOperand = '';
let secondOperand = '';
let operatorValue = '';

function reset(e){
  e.preventDefault();
  display.value ="0"
  firstOperand = '';
  secondOperand = '';
  operatorValue = '';
}

for (let i=0; i < numbers.length; i++){
  const number = numbers[i];
  number.addEventListener('click', function(e) {
    e.preventDefault();

    if (!firstOperand){
      firstOperand = number.textContent;
    }
    if (firstOperand && operatorValue) {
      secondOperand = number.textContent;
    }
    console.log('firstOperand: ',firstOperand);
    console.log('secondOperand: ',secondOperand);
    display.value = number.textContent;


  });
};

for (let i=0; i < operators.length; i++){
  const operator = operators[i];

  operator.addEventListener('click', function(e){
    e.preventDefault();

    if (firstOperand && !operatorValue){
      operatorValue = operator.textContent;
    }
    console.log('operator type: ', operatorValue)
    display.value = operator.textContent
  })
}


function calculate(){
  let outcome;
  if (operatorValue === '+'){
    //what to return? a number or a string?
    outcome = Number(firstOperand) + Number(secondOperand);
    display.value = outcome;
  }; 

  if (operatorValue === '-'){
    outcome = Number(firstOperand) - Number(secondOperand);
    display.value = outcome
  };
  
  if (operatorValue === '/'){
    outcome = Number(firstOperand) / Number(secondOperand);
    display.value = outcome
  };

  if (operatorValue === 'x'){
    outcome = Number(firstOperand) * Number(secondOperand);
    display.value = outcome
  };
};

equalsButton.addEventListener('click', ()=>{
  calculate();
});

