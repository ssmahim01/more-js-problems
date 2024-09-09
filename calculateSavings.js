// Calculate the monthly savings of a staff.

function aStaffSavings(income){
    const houseRent = 5000;
    const foodCost = 3000;
    const selfCost = 2000;
    const totalCost = houseRent + foodCost + selfCost;

    if(totalCost > income){
        return 'Earn More';
    }

    const savingsMoney = income - totalCost;
    return savingsMoney;
}

const savings = aStaffSavings(12000);
console.log(savings); // Output => 2000