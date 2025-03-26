/*
	Name exercise: Object on Different Planets
	Description: Calculating the Weight of an Object on Different Planets
	Author: Johan Felipe Repizo Aguirre 
	Date: March 15th, 2025
*/

	let mass, gravity, weight;
	let planets = [
    	{ name: "Tierra", gravity: 9.81 },
    	{ name: "Marte", gravity: 3.71 },
    	{ name: "Júpiter", gravity: 24.79 },
];


	mass = 70; // kg


	for (let counter = 0; counter < planets.length; counter++) {
    	gravity = planets[counter].gravity;
    	weight = mass * gravity;
    		console.log("El peso en $ {planets[counter].name} es: ${weight.toFixed(2)}" + "N");
}

