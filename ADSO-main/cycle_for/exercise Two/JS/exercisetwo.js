/*
  Name exercise: net force
   Description: It is said that if the net force (F) on an object is zero, it will remain at rest or in uniform motion.
    Author: Johan Felipe Repizo Aguirre
    Date: March 16th, 2025
*/

let netForce = 6;
let number = 10;
let counter = 0;


    for (let counter = 1; counter <= number; counter++) {
        if (netForce !== 0) {
            console.log("Reposo");
        } else {
            console.log("Movimiento Uniforme");
            resultElement.innerText = "Movimiento Uniforme";
        }
    }


