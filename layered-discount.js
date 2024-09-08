// Get layered discount.

function layeredDiscount(quantity){
    const firstHundredPrice = 100;
    const secondHundredPrice = 90;
    const aboveTwoHundredPrice = 70;

    if(quantity <= 100){
    const total = quantity * firstHundredPrice;
    return total;
    }
    else if(quantity <= 200){
        const firstHundredTotal = 100 * firstHundredPrice;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * secondHundredPrice;
    const total = firstHundredTotal + remainingTotal;
    return total;
    }
    else{
        const firstHundredTotal = 100 * firstHundredPrice;
        const secondHundredTotal = 100 * secondHundredPrice;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * aboveTwoHundredPrice;
        const total = firstHundredTotal + secondHundredTotal + remainingTotal;
        return total;
    }
}

const layeredDis = layeredDiscount(101);
console.log('Layered Discount is:', layeredDis);

// Output => Layered Discount is: 10090