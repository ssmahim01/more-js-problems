// Get total cart of products.

const products = [
    { name: 'Shirt', price: 450, quantity: 2},
    { name: 'Pant', price: 500, quantity: 1},
    { name: 'Belt', price: 300, quantity: 3},
    { name: 'Shoe', price: 950, quantity: 4}
]

function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log('Cart total is:', shoppingCost);

// Output => Cart total is: 6100