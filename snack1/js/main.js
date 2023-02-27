'use strict';

//  JSsnack2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

const numberoUtente = document.getElementById("input");
const buttone = document.getElementById("okButton");
const result = document.getElementById("result");


buttone.addEventListener('click',
    function(){
        if(Number(numberoUtente.value) % 2 === 0){
            result.innerHTML= numberoUtente.value;
        } else{
            result.innerHTML= Number(numberoUtente.value) + 1;
        }
    }
)