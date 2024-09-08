// Make a calculator.

function add(num1, num2){
    const add = num1 + num2;
    return add;
}
function sub(num1, num2){
    const sub = num1 - num2;
    return sub;
}
function multiply(num1, num2){
    const multiply = num1 * num2;
    return multiply;
}
function divide(num1, num2){
    const divide = num1 / num2;
    return divide;
}


function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'sub'){
        const result = sub(a, b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if(operation === 'divide'){
        const result = divide(a, b);
        return result;
    }
    else{
        return `Only 'add', 'subtract', 'multiply', 'divide' can work`;
    }
}

const calculatorResult = calculator(10, 5, 'multiply');
console.log(calculatorResult);

// Output => now: 50, If change the arguments then output will be changing.