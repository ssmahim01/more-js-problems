/* Pass the object input which is takes some information of a person,
Then returns job select or not. */

const person = {
    name: 'Mahim',
    honors: 45,
    hsc: 42,
    isFreeFFamily: false
}

const person2 = {
    name: 'Afjal',
    honors: 32,
    hsc: 43,
    isFreeFFamily: true
}

const person3 = {
    name: 'Mizanur',
    honors: 30,
    hsc: 35,
    isFreeFFamily: true
}

function jobSelection(info){
    if(typeof info !== 'object'){
        return 'Invalid Object'
    }

    let totalMarks = info.honors + info.hsc;

    if(info.isFreeFFamily){
        totalMarks = totalMarks + (totalMarks * 0.2);
    }
    
    if(info.isFreeFFamily && totalMarks >= 80){
        return 'Amazing! respect for got this job';
    }
    else if(info.isFreeFFamily && totalMarks < 80){
        return 'You failed';
    }
    else if(!info.isFreeFFamily && totalMarks >= 80){
        return 'Welcome, You got the job';
    }
}

const selectPerson = jobSelection(person);
console.log(selectPerson); // Output => Welcome, You got the job

const selectPerson2 = jobSelection(person2);
console.log(selectPerson2); // Output => Amazing! respect for got this job

const selectPerson3 = jobSelection(person3);
console.log(selectPerson3); // Output => You failed

const selectPerson4 = jobSelection('person4');
console.log(selectPerson4); // Output => Invalid Object