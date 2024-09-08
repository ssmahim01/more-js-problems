// Find the tallest (max) person.

const heights = [52, 63, 76, 77, 65, 54, 45];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const showResult = getMax(heights);
console.log('The height of tallest person is', showResult);

// Output => The height of tallest person is 77

// Find the smallest (min) person.

const heights2 = [55, 67, 57, 45, 35, 58, 48];

function getMin(numbers){
    let min = numbers[0];

    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const showResult2 = getMin(heights2);
console.log('The height of smallest person is', showResult2);

// Output => The height of smallest person is 35