// Count last cost after vehicles takes all seat and returns how much the cost of rickshaw.

function rickshawCost(peoples){
    const busSeats = 50;
    const microSeats = 15;
    const rickshawCost = 20;

    const afterBusBooked = peoples % busSeats;
    const afterMicroBooked = afterBusBooked % microSeats;
    const totalRickshawCost = afterMicroBooked * rickshawCost;

    return totalRickshawCost;
}

const totalRickshawCost = rickshawCost(240);
console.log(totalRickshawCost); // Output => 200