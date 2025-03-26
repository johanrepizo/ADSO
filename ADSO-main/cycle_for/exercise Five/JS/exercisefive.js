/*
Name exercise: weighted of three grades
Description: weighted of three grades
Autor: Johan Felipe Repizo Aguirre
Date: march 16th 2025
*/


function calculateStrain(mass, gravity = 9.81, number) {
    let results = [];

    for (let counter = 0; counter <= number; counter++) {
        let strain = mass * gravity;
        results.push(`Iteracion ${counter}: Strain = ${strain.toFixed(2)} N`);
    }

    return results;
}


let mass = 10; 
let number = 5; 

let results = calculateStrain(mass, 9.81, number);


console.log(results.join("\n"));



