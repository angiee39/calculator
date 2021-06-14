function addition(a, b) {
  let total = a + b;
  return total;
}

function subtraction(a, b) {
  let total = a - b;
  return total;
}

function multiplication(a, b) {
  let total = a * b;
  return total;
}

function division(a, b) {
  if (b == 0) {
    display.textContent = "No you don't!";  
  }
  else {
    let total = a / b;
    return total;
  }
}

function operate(a,b,o) {
  let sum = 0;
  if (o == "plus") {
    sum = addition(a,b);
  } else if (o == "minus") {
    sum = subtraction(a,b);
  } else if (o == "star") {
    sum = multiplication(a,b);
  } else if (o == "slash") {
    sum = division(a,b);
  }
  return Number((sum).toFixed(6));
}

// Default operate variables 
let num1 = undefined;
let num2 = undefined;
let opr = '';

// Booleans
let eql = false; // =
let dec = false; // .
let op = false; // +,-,*,/


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

// Clear & deletee's eventListners
clear.addEventListener('click', () => {
  display.textContent = 0;
  num1 = undefined;
  num2 = undefined;
  opr = '';
  eql = false;
  dec = false;
  op = false;
});

deletee.addEventListener('click', () => {

});


// Numbers' eventListners
nine.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 9;
  }
  else if (op == true || eql == true) {
    display.textContent = 9;
    op = false;
    eql = false;
  }
  else {
    display.textContent += 9;
  }});

eight.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 8;
  }
  else if (op == true || eql == true) {
    display.textContent = 8;
    op = false;
    eql = false;
  }
  else {
    display.textContent += 8;
  }});

seven.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 7;
  } 
  else if (op == true || eql == true) {
    display.textContent = 7;
    op = false;
    eql = false;
  }
  else {
    display.textContent += 7;
  }});

six.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 6;
  }
  else if (op == true || eql == true) {
    display.textContent = 6;
    op = false;
    eql = false;
  }
  else {
    display.textContent += 6;
  }});

five.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 5;
  }   
  else if (op == true || eql == true) {
    display.textContent = 5;
    op = false;
    eql = false;
  }
  else {
    display.textContent += 5;
  }});

four.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 4;
  }   
  else if (op == true || eql == true) {
    display.textContent = 4;
    op = false;
    eql = false;
  }
  else {
    display.textContent += 4;
  }});

three.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 3;
  }   
  else if (op == true || eql == true) {
    display.textContent = 3;
    op = false;
    eql = false;
  }
  else {
    display.textContent += 3;
  }});

two.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 2;
  }   
  else if (op == true || eql == true) {
    display.textContent = 2;
    op = false;
    eql = false;
  }
  else {
    display.textContent += 2;
  }
});

one.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 1;
  }   
  else if (op == true || eql == true) {
    display.textContent = 1;
    op = false;
    eql = false;
  }
  else {
    display.textContent += 1;
  }
});

zero.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 0;
  }  
  else if (op == true || eql == true) {
    display.textContent = 0;
    op = false;
    eql = false;
  }
  else {
    display.textContent += 0;
  } 
});

decimal.addEventListener('click', () => {
  // if (dec == false) {
  //   display.textContent += '.'
  //   dec = true;
  // }  
});

// Operators' eventListners
divide.addEventListener('click', () => {
  if (num1 == undefined) {
    num1 = parseFloat(display.textContent);
  } else {
    num2 = parseFloat(display.textContent);
    num1 = display.textContent = operate(num1,num2,opr);   
  }
  opr = "slash";
  dec = false;
  op = true;   
});

multiply.addEventListener('click', () => {
  if (num1 == undefined) {
    num1 = parseFloat(display.textContent);
  } else {
    num2 = parseFloat(display.textContent);
    num1 = display.textContent = operate(num1,num2,opr);   
  }
  opr = "star";
  dec = false;
  op = true; 
});

subtract.addEventListener('click', () => {
  if (num1 == undefined) {
    num1 = parseFloat(display.textContent);
  } else {
    num2 = parseFloat(display.textContent);
    num1 = display.textContent = operate(num1,num2,opr);   
  }
  opr = "minus";
  dec = false;
  op = true; 
});

equal.addEventListener('click', () => {
  if (num1 == undefined) {
    display.textContent = 0
  }
  else {
    num2 = parseFloat(display.textContent);
    display.textContent = operate(num1,num2,opr);
    num1 = undefined;
    num2 = undefined;
    opr = '';
    eql = true;
    dec = false;
  }

});

add.addEventListener('click', () => {
  if (num1 == undefined) {
    num1 = parseFloat(display.textContent);
  } else {
    num2 = parseFloat(display.textContent);
    num1 = display.textContent = operate(num1,num2,opr);   
  }
  opr = "plus";
  dec = false;
  op = true;
});


