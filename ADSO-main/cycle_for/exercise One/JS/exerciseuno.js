/*
	Name exercise: An object with mass moves with acceleration.
	Description: An object with mass moves with acceleration. Use Newton's Second Law to calculate the resultant force.
	Autor: Johan Felipe Repizo Aguirre
	Date: March 16th, 2025
*/

let mass = 43;
let acceleration = 5;
let force;
let number = 5;

for (let counter = 3; counter <= number; counter++) {
    force = mass * acceleration;
    console.log(`iteracion ${counter}: force = ${force}`);
}