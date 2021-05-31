const numbers = document.getElementsByClassName('number')
const operators = document.getElementsByClassName('operator')
const decimal = document.getElementsByClassName('dot')
const clearBtn = document.getElementById('clearBtn').addEventListener('click', reset)
const display = document.getElementById('display')
const equalsButton = document.querySelector('.equals')
display.value ="0"

let firstOperand = '';
let secondOperand = '';
let operatorValue = '';
let outcome;
let decimalNumber = '.';

function reset(e){
  e.preventDefault();
  display.value ="0"
  firstOperand = '';
  secondOperand = '';
  operatorValue = '';
}

for (i=0; i < decimal.length; i++){
  const decimalNum = decimal[i];
  decimalNum.addEventListener('click',function(e){
    e.preventDefault();

    if (!decimalNumber){
      
    }

    if (!firstOperand){
      firstOperand = 0. + Number(firstOperand);
      console.log('firstOperand is: ', firstOperand)
    }; 

    if (firstOperand && operatorValue){
      secondOperand = 0. + Number(secondOperand);
      console.log('secondOperand is:', secondOperand)
    };

  });
};


for (let i=0; i < numbers.length; i++){
  const number = numbers[i];
  number.addEventListener('click', function(e) {
    e.preventDefault();

    if (!firstOperand){  
    //if there isn't 1st operand 
    //and number button/element was pressed then-->
      firstOperand = number.textContent;
      console.log('firstOperand is: ', firstOperand)

    }
    if (firstOperand && operatorValue) {
      secondOperand = number.textContent;
      console.log('secondOperand is:', secondOperand)
    };
    display.value = number.textContent;

  });
};

for (let i=0; i < operators.length; i++){
  const operator = operators[i];

  operator.addEventListener('click', function(e){
    e.preventDefault();

    if (firstOperand && !operatorValue){
      //if there was 1st operand and was NOT operator
      // and operator button was pressed then -->
      operatorValue = operator.textContent;
    };

    if (firstOperand && operatorValue && secondOperand){ 
      // continuous functionality/operations.
      //if there were 1st Operand && 2nd Operand && operator
      // and operator button was pressed then -->
      outcome = calculate();
      display.value = outcome;
      firstOperand = outcome;
      secondOperand = ''
    };
  });
  
};


function calculate(){
  if (operatorValue === '+'){
    outcome = Number(firstOperand) + Number(secondOperand);
    console.log('the outcome is: ',outcome)
    return outcome;
  }; 

  if (operatorValue === '-'){
    outcome = Number(firstOperand) - Number(secondOperand);
    return outcome
  };
  
  if (operatorValue === '/'){
    outcome = Number(firstOperand) / Number(secondOperand);
    return outcome
  };

  if (operatorValue === 'x'){
    outcome = Number(firstOperand) * Number(secondOperand);
    return outcome
  };
};

equalsButton.addEventListener('click', ()=>{
  //What condidtions to check before calculating?
  if(firstOperand && operatorValue && secondOperand){
    display.value = calculate();
    firstOperand = outcome;
    secondOperand = ''
  };
});

