// Function Validation.

function divide(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number';
    }
    const divide = num1 / num2;
    return divide;
}

const result = divide(20, 'thirty');
console.log(result);

/* Output => Please provide a number,
If change the second argument then it will show a valid result. */

const array = [20, 30, 55];

function isArray(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please provide an array';
    }
    const getNumber = numbers[2];
    return getNumber;
}

const arrayResult = isArray(array);
console.log(arrayResult);

/* Output => Now: 55, 
If change the index of number 2 and provide another data type which is not an array then the function will return 'Please provide an array' */ 