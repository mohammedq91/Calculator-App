var nonOperationalBtns = document.getElementsByClassName('nonOperationalButtons')
const operationalsButtons = document.getElementById('operationalButtons')
const clear = document.getElementById('clearButton')
const digitsDisplay = document.getElementById('digitsDisplay')


nonOperationalBtns.addEventListener('click',function(e){
  e.preventDefault();
  console.log('you click me!')
  // digitsDisplay.display = nonOperationalBtns.value

});





