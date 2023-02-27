'use strict';

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

let nomi = [
    'filippo',
    'francesco',
    'roberto',
    'massimo'
];

let cognomi = [
    'bonafini',
    'grassi',
    'buzzoni',
    'frascolla'
];

let num1 = Math.floor(Math.random() * nomi.length);

let num2 = Math.floor(Math.random() * cognomi.length);

for(let i= 0; i < 4; i++){
    console.log (nomi[num1]+' '+cognomi[num2]);
}