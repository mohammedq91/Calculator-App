const numbers = document.getElementsByClassName('number')
const operators = document.getElementsByClassName('operator')
const decimalBtn = document.querySelector('.dot')
const clearBtn = document.getElementById('clearBtn').addEventListener('click', reset)
const display = document.getElementById('display')
const equalsButton = document.querySelector('.equals')
display.value ="0"

let firstOperand = '';
let secondOperand = '';
let operatorValue = '';
let outcome = 0;
let decimalNumber = '.';

function reset(e){
  e.preventDefault();
  display.value ="0"
  firstOperand = '';
  secondOperand = '';
  operatorValue = '';
}

function decimalHandler(operand){
  const numberArray = operand.split('');  // split method converts strings into array
  if (numberArray.indexOf('.') === -1){  //if decimal value does not exist in number Array
    numberArray.push('.');
  };
  return numberArray.join(''); // converts array back into string
}



decimalBtn.addEventListener('click',function(e){
  e.preventDefault();

  if (!operatorValue){
    firstOperand = decimalHandler(firstOperand);
    display.value = firstOperand;
    

    // function decimalRounder (firstOperand){
    //   return Math.ceil(Number(firstOperand*1000)/1000);
    // }
    // decimalRounding(firstOperand);

  } else if (firstOperand && operatorValue){
    secondOperand = decimalHandler(secondOperand);
    display.value = secondOperand;
  };
});
 
for (let i=0; i < numbers.length; i++){
  const number = numbers[i];
  number.addEventListener('click', function(e) {
    e.preventDefault();

    if (display.value.length === 10) return;

    if (!operatorValue){  
    //if there isn't 1st operand 
    //and number button/element was pressed then-->
      firstOperand += number.textContent;
      console.log('firstOperand is: ', firstOperand)
      display.value = firstOperand;

    } else if (firstOperand && operatorValue) {
      secondOperand += number.textContent;
      console.log('secondOperand is:', secondOperand)
      display.value = secondOperand;
    };
  });
};

for (let i=0; i < operators.length; i++){
  const operator = operators[i];

  operator.addEventListener('click', function(e){
    e.preventDefault();

    if (firstOperand && operatorValue && secondOperand){ 
      // continuous functionality/operations.
      //if there were 1st Operand && 2nd Operand && operator
      // and operator button was pressed then -->
      result = calculate(firstOperand,operatorValue, secondOperand);
      display.value = result;
      firstOperand = result;
      operatorValue = operator.textContent;
      secondOperand = ''
      console.log('The operator is :', operatorValue)
      
    } else if (firstOperand){
      //if there was 1st operand and was NOT operator
      // and operator button was pressed then -->
      operatorValue = operator.textContent;
      console.log('The operator is :', operatorValue)
    };
  });
  
};

// function expression
// const decimalRounder = function(outcome){
//   return outcome.toFixed(3);
// };

//function declaration
function decimalRounder(outcome){
  return outcome.toFixed(3)
}
// arrow function 
// const decimalRounder = (outcome) => outcome.toFixed(3);

function calculate(firstOperand,operatorValue, secondOperand){
  if (operatorValue === '+'){
    outcome = Number(firstOperand) + Number(secondOperand);
    console.log('the outcome is: ',outcome)
  } else if (operatorValue === '-'){
    outcome = Number(firstOperand) - Number(secondOperand);
    console.log('the outcome is: ',outcome)
  } else if (operatorValue === '/'){
    outcome = Number(firstOperand) / Number(secondOperand);
    console.log('the outcome is: ',outcome)
  } else if (operatorValue === 'x'){
    outcome = Number(firstOperand) * Number(secondOperand);
    console.log('the outcome is: ',outcome)
  };
  return decimalRounder(outcome);
};

equalsButton.addEventListener('click', ()=>{
  //What condidtions to check before calculating?
  if(firstOperand && operatorValue && secondOperand){
    display.value = calculate(firstOperand,operatorValue, secondOperand);
    firstOperand = outcome;
    secondOperand = ''
  };
});

