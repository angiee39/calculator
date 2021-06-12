function add(a,b) {
    let total = a + b;
    return total;
}

function subtract(a,b) {
    let total = a - b;
    return total;
}

function multiply(a,b) {
    let total = a * b;
    return total;
}

function divide(a,b) {
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