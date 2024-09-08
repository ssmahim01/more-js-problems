// Find the cheapest phone from objects.

const mobiles = [
    { name: 'Apple', price: 85000, color: 'black', camera: '12mp', memory: '128GB'},
    { name: 'Samsung Galaxy', price: 28000, color: 'black', camera: '12mp', memory: '64GB'},
    { name: 'Vivo', price: 25000, color: 'black', camera: '12mp', memory: '64GB'},
    { name: 'xiaomi', price: 30000, color: 'black', camera: '12mp', memory: '128GB'}
]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheapest = getCheapestPhone(mobiles);
console.log('The cheapest phone is:', cheapest);

/* Output => The cheapest phone is: {
    name: 'Vivo',
    price: 25000,
    color: 'black',
    camera: '12mp',
    memory: '64GB'
  } */

// Find the expensive phone from objects.

function getExpensivePhone(phones){
    let expensive = phones[0];
    for(const phone of phones){
        if(phone.price > expensive.price){
            expensive = phone;
        }
    }
    return expensive;
}

const expensivePhone = getExpensivePhone(mobiles);
console.log('The expensive phone is:', expensivePhone);

/* Output => The expensive phone is: {
  name: 'Apple',
  price: 85000,
  color: 'black',
  camera: '12mp',
  memory: '128GB'
} */