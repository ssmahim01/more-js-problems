const result = getMarks(80, 70, 60);

function getMarks(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log('My dream is bigger than yours');
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        console.log('His dream is bigger than me');
        return num2;
    }
    else{
        console.log('You are won');
        return num3
    }
}

console.log(result);

// Output => My dream is bigger than yours
// 80