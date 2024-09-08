// The sum of shopping items.

const products = [
    {name: 'Onions', price: 120, quantity: '1kg'},
    {name: 'Oil', price: 850, quantity: '5L'},
    {name: 'Ginger', price: 150, quantity: '1kg'}
]

function getShoppingSum(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }
    return sum;
}

const sum = getShoppingSum(products);
console.log('The sum of shopping items is:', sum);

// Output => The sum of shopping items is: 1120