let firstOperand = '';
let secondOperand = '';
let operatorValue = '';

document.querySelector('.dot')
  .addEventListener('click',function(e){
    e.preventDefault();

    if (!operatorValue){
      if(!isFloat(firstOperand)){
        firstOperand += '.';
        setDisplay(firstOperand);
      } ;
    } else if (firstOperand && operatorValue){
      if (!isFloat(secondOperand)){
        secondOperand += '.'
        setDisplay(secondOperand);
      }
    };
  });

document.querySelectorAll('.number')
  .forEach(numberBtn => {
    numberBtn.addEventListener('click', function(e) {
      if (display.value.length === 10) return; //limiting input/digit to 10.
      if (!operatorValue){  
        firstOperand += numberBtn.textContent;
        setDisplay(firstOperand);
        return;
      }
      if (operatorValue) {
        secondOperand += numberBtn.textContent;
        setDisplay(secondOperand);
      };
    });
});

document.querySelectorAll('.operator')
  .forEach( operatorBtn => {
    operatorBtn.addEventListener('click', function(e){
      if (secondOperand){ 
        result = calculate();
        setDisplay(result);
        firstOperand = result;
        operatorValue = operatorBtn.textContent;
        secondOperand = ''
        return;
      } 
      if (firstOperand){
        operatorValue = operatorBtn.textContent;
      };
    });
  })

function decimalRounder(outcome){
  return outcome.toFixed(3)
}
function calculate(){
  if (operatorValue === '+'){
    return decimalRounder(Number(firstOperand) + Number(secondOperand));
  }
  if (operatorValue === '-'){
    return decimalRounder(Number(firstOperand) - Number(secondOperand));
  }
  if (operatorValue === '/'){
    return decimalRounder(Number(firstOperand) / Number(secondOperand));
  }
  if (operatorValue === 'x'){
    return decimalRounder(Number(firstOperand) * Number(secondOperand));
  };
};

document.querySelector('.equals')
  .addEventListener('click', () => {
    if(secondOperand){
      result = calculate();
      setDisplay(result);
      firstOperand = result;
      operatorValue = '';
      secondOperand = ''
      return;
    };
  });

document.getElementById('clearBtn')
  .addEventListener('click', reset)

function reset(e){
  e.preventDefault();
  display.value ="0"
  firstOperand = '';
  secondOperand = '';
  operatorValue = '';
}

function isFloat(operand){
  return operand.indexOf('.') > -1
}

function setDisplay(value){
  const display = document.getElementById('display')
  display.value = value;
}