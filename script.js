'use strict'

const distance = 1500;
const budget = 175;
const gas = 3;

const res55PerHour =30/gas;
const res60PerHour =28/gas;
const res75PerHour =23/gas;

//Gallons per Entire distance


const entire55 =(distance/55)*30;
const entire60 =(distance/60)*28;
const entire75 =(distance/75)*23;


//Entire Price of trip

const totalFor55= entire55/gas;
const totalFor60= entire60/gas;
const totalFor75= entire75/gas;

//Entire distance finished in hours

const hoursTravel55= distance/55;
const hoursTravel60= distance/60;
const hoursTravel75= distance/75;

console.log(`Average for trip going 55mph cost ${Math.floor(totalFor55)}$ and is going to take ${Math.floor(hoursTravel55)}hrs` );
console.log(`Average for trip going 60mph cost ${Math.floor(totalFor60)}$ and is going to take ${Math.floor(hoursTravel60)}hrs` );
console.log(`Average for trip going 75mph cost ${Math.floor(totalFor75)}$ and is going to take ${Math.floor(hoursTravel75)}hrs` );



// let newGallonForEntireTrip=[];


// function gallonForEntireTrip(milesPerHour,milesPerGallon){
//     let newGallons=(distance/milesPerHour)*milesPerGallon;
//     newGallonForEntireTrip.push(newGallons)
// }
// gallonForEntireTrip(75,23)
// console.log(newGallonForEntireTrip);

// const totalForTrip=(resPerHour)=>{
//     return newGallonForEntireTrip/resPerHour;
// };
// console.log(totalForTrip(res75PerHour));
