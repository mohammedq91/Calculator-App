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
  if (operatorValue === '+'){
    //what to return? a number or a string?
    return Number(firstOperand)+Number(secondOperand);
  }; 

  if (operatorValue === '-'){
    return Number(firstOperand)-Number(secondOperand);
  };
  
  if (operatorValue === '/'){
    return Number(firstOperand)/Number(secondOperand);
  };

  if (operatorValue === 'x'){
    return Number(firstOperand)*Number(secondOperand);
  };
};

equalsButton.addEventListener('click', ()=>{
  console.log('Home')
  //what conditions should I check before calculating
  if (!firstOperand && !operatorValue && !secondOperand){
    const result = calculate();
    console.log(result)
    console.log("Hello world!")
  } else if (!operatorValue && !secondOperand){
    const result = calculate();
    console.log(result)
    console.log('You clicked me!!')

  }
  //how to display the result?
  display.value = result.value
  // what to reset?
});




