const sum = require("./js/sum.js");
const chat = require("./js/chat.js");
const studentAverage = require("./js/studentAverage.js");
const car = require('./js/car.js');
// //įprasta funkcija

// function suma(a, b) {
//     return a + b
// }

// console.log(suma(7, 5));


// //anoniminė funkcija priskirta kintamajam
// const atimtis = function(a, b) {
//     return a - b
// }
// console.log(atimtis(5, 3));


// //ARROW funkcija
// const daugyba = (a, b) => {
//     return a * b
// }
// console.log(daugyba(5, 3));


// //ARROW funkcija - jeigu tik 1 SĄLYGA, galima ignoruoti {} ir "return"
// const dalyba = (a, b) => a / b
// console.log(dalyba(5, 3));

// //ARROW funkcija - jeigu tik 1 parametras, galima ignoruoti ()
// const kvadratu = a => a * a
// console.log(kvadratu(5));

for (let i = 0; i < 77 && i > 5; i++) {
    const n = Math.random() * 100;
    const nf = Math.floor(n);
    console.log(nf);
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(49, 77)
    // console.log(rndInt)




const pirmas = 7;
const antras = 5;
const r = sum(pirmas, antras);

const petrasLabas = chat('Petras', 'labas');

const m = studentAverage('Ona', [10, 2, 8, 4]);

const volvo = car('Volvo XC90', 60, 6, 7, 8);
/* Volvo XC90 su 60l baku, gali nuvaziuoti 1000km (magistralej, 
kai sanaudos yra 6l/100km), 857km (vidutiniskai, kai sanaudos yra 7l/100km) 
ir 750km (mieste, kai sanaudos yra 8l/100km).*/

console.log(volvo)