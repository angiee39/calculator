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
    let sum = 0;
    if (o == "plus") {
        sum = addition(a,b);
    }
    else if (o == "minus") {
        sum = subtraction(a,b);
    }
    else if (o == "star") {
        sum = multiplication(a,b);
    }
    else if (o == "slash") {
        sum = division(a,b);
    }
    return sum;
}

// Display 
let displayValue = document.getElementById("display").textContent;
let num1 = 0;
let num2 = 0;
let opr = "";

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
const add = document.querySelector('#add');

// Numbers' eventListners
seven.addEventListener('click', () => {
    display.textContent += '7' 
  });

eight.addEventListener('click', () => {
    display.textContent += '8' 
  });

nine.addEventListener('click', () => {
    display.textContent += '9' 
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

one.addEventListener('click', () => {
    display.textContent += '1' 
  });

two.addEventListener('click', () => {
    display.textContent += '2' 
  });

three.addEventListener('click', () => {
    display.textContent += '3' 
  });

decimal.addEventListener('click', () => {
    display.textContent += '.' 
  });

zero.addEventListener('click', () => {
    display.textContent += '0' 
  });


// Clear & deletee's eventListners
clear.addEventListener('click', () => {
    display.textContent = '';
    num1 = 0;
    num2 = 0
    opr = ""
});

deletee.addEventListener('click', () => {
  
});

// Operators' eventListners
divide.addEventListener('click', () => {
    num1 = parseFloat(display.textContent);
    opr = "slash";
    display.textContent = '';
    
});

multiply.addEventListener('click', () => {
    num1 = parseFloat(display.textContent);
    opr = "star";
    display.textContent = '';
});

subtract.addEventListener('click', () => {
    num1 = parseFloat(display.textContent);
    opr = "minus";
    display.textContent = '';
});

equal.addEventListener('click', () => {
    num2 = parseFloat(display.textContent);
    display.textContent = operate(num1,num2,opr);
});

add.addEventListener('click', () => {
    num1 = parseFloat(display.textContent);
    opr = "plus";
    display.textContent = '';
});



