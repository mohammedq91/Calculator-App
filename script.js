const numbers = document.getElementsByClassName('number')
const dot = document.getElementsByClassName('dot');
const operators = document.getElementsByClassName('operator')
const clear = document.getElementById('clear').addEventListener('click', reset)
const inputDisplay = document.getElementById('inputDisplay')

function reset(e){
  e.preventDefault();
  inputDisplay.value ="0"
  console.log('Hello')
}

for (let i=0; i < numbers.length; i++){
  const button = numbers[i];
  button.addEventListener('click', function(e) {
    e.preventDefault();
    inputDisplay.value = button.textContent;
  });

  function add(){
    inputDisplay.value= button.textContent 
  }    
  add();

};

for (let i=0; i< operators.length; i++){
  const operator = operators[i];

  operator.addEventListener('click', function(e){
    e.preventDefault();
    console.log('you clicked me!')
    inputDisplay.value = operator.textContent
  })
}




