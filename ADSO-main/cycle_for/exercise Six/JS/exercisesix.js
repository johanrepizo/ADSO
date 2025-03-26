/*
	Name exercise: Simulation
	Description: Simulation of an Object on an Inclined Plane
	Autor: Johan Felipe Repizo Aguirre
	Date: march 15th 2025
*/


function calculateParallelForce(mass, gravity = 9.81, angleRange, number) {
    let results = [];

    for (let counter = 0; counter <= number; counter++) {
        let angle = angleRange[counter % angleRange.length]; 
        let parallelForce = mass * gravity * Math.sin(angle * (Math.PI / 180));
        
        results.push(`Iteracion ${counter}: Angulo = ${ angle }, Fuerza Paralela = ${parallelForce.toFixed(2)} N`);
    }

    return results;
}

let mass = 10;  
let gravity = 9.81;  
let angleRange = [10, 20, 30, 40, 50]; 
let number = 5;  

let results = calculateParallelForce(mass, gravity, angleRange, number);


console.log(results.join("\n"));


document.addEventListener("DOMContentLoaded", function () {
    let resultDiv = document.getElementById("resultado");
    if (resultDiv) {
        resultDiv.innerHTML = results.join("<br>");
    }
});