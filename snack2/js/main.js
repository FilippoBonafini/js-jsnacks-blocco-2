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

const fullNameList =[];

for(let i= 0; i < 3; i++){

    const num1 = Math.floor(Math.random() * nomi.length);
    const num2 = Math.floor(Math.random() * cognomi.length);

    const newName = `${nomi[num1]} ${cognomi[num2]}`;
    
    fullNameList.push(newName);
}

console.log(fullNameList);