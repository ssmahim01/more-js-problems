// Get quantity of wood.

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

        const chairTotalWood = chairQuantity * perChairWood;
        const tableTotalWood = tableQuantity * perTableWood;
        const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuantity(0, 1, 1);
console.log('Wood needed', wood);

// Output => Wood needed 60