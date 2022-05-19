/*
let myCountry = "India";
let myContinent = "Asia";
let populationCount = "1380.04 million";

// we use let if we want to change the variable
let age = 20;


//we use const so that we dont need to change the variable
const birthYear = 2000;
// birthYear = 1998;
//variable name
console.log(birthYear);
console.log(age); */

/*
let firstName = "Uttam";
let lastName = "Kini";
const currentYear = 2022;
const birthYear = 2000;
let age = currentYear - birthYear;

console.log("Hello my name is " + firstName + lastName + " my age is " + age);
console.log(age, currentYear);
console.log(currentYear >= 2040);
*/

/*
const populationCount = 1380.04;
const halfPopulation = populationCount / 2;
const isLand = false;
let language;

console.log(isLand);
console.log(halfPopulation);

console.log(populationCount + 1);
console.log(populationCount > 6);

const avg =
*/

//Marks data
const markWeight = 95;
const markHeight = 1.88;

//John data
const johnWeight = 85;
const johnHeight = 1.76;

let BMIMark = markWeight / (markHeight * markHeight);
let BMIJohn = johnWeight / (johnHeight * johnHeight);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

