function addition(a,b) {
    let total = a + b;
    return total;
}

function subtraction(a,b) {
    let total = a - b;
    return total;
}

function multiplication(a,b) {
    let total = a * b;
    return total;
}

function division(a,b) {
    let total = a / b;
    return total;
}


function operate(a,b,o) {
    if (o == plus) {
        add(a,b)
    }
    else if (o == minus) {
        subtract(a,b)
    }
    else if (o == star) {
        multiply(a,b);
    }
    else {
        divide(a,b)
    }
}

// All querySelectors
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const deletee = document.querySelector('#deletee');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const divide = document.querySelector('#divide');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const multiply = document.querySelector('#multiply');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const subtract = document.querySelector('#subtract');
const decimal = document.querySelector('#decimal');
const zero = document.querySelector('#zero');
const equal = document.querySelector('#equal');
const plus = document.querySelector('#plus');

// All eventListners
clear.addEventListener('click', () => {
    display.textContent = 'Clear' 
  });

deletee.addEventListener('click', () => {
    
  });

seven.addEventListener('click', () => {
    display.textContent += '7' 
  });

eight.addEventListener('click', () => {
    display.textContent += '8' 
  });

nine.addEventListener('click', () => {
    display.textContent += '9' 
  });

divide.addEventListener('click', () => {
    
  });

four.addEventListener('click', () => {
    display.textContent += '4' 
  });

five.addEventListener('click', () => {
    display.textContent += '5' 
  });

six.addEventListener('click', () => {
    display.textContent += '6' 
  });

multiply.addEventListener('click', () => {
    
  });

one.addEventListener('click', () => {
    display.textContent += '1' 
  });

two.addEventListener('click', () => {
    display.textContent += '2' 
  });

three.addEventListener('click', () => {
    display.textContent += '3' 
  });

subtract.addEventListener('click', () => {
   
  });

decimal.addEventListener('click', () => {
    display.textContent += '.' 
  });

zero.addEventListener('click', () => {
    display.textContent += '0' 
  });

equal.addEventListener('click', () => {
    
  });

plus.addEventListener('click', () => {
     
  });