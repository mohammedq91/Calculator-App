const clear = document.getElementById('clear').addEventListener('click', clearBtn)
const numbers = document.getElementsByClassName('number')
const dot = document.getElementsByClassName('dot');
const operators = document.getElementsByClassName('operator')
const display = document.getElementById('display')
const equalsButton = document.querySelector('.equals')

let firstOperand = '';
let secondOperand = '';
let operatorValue = '';




function clearBtn(e){
  e.preventDefault();
  display.value ="0"
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

  function calculate(operators){
    if (operatorValue === '+'){
      return firstOperand + secondOperand
      // return firstOperand + operatorValue + secondOperand;
    };
    
    // if (operatorValue === '-'){
    //   return firstOperand - secondOperand;
    // };
    // if (operatorValue === '/'){
    //   return firstOperand / secondOperand;
    // };
    // if (operatorValue === 'x'){
    //   return firstOperand * secondOperand;
    // };
  };

}




equalsButton.addEventListener('click', ()=>{
  // const result = calculate();
  // console.log(result)
  console.log('equals')
  calculate(firstOperand, secondOperand);
})




