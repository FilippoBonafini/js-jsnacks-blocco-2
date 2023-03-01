'use strict';


const numberoUtente1 = document.getElementById("input1");
const numberoUtente2= document.getElementById("input2");
const numberoUtente3 = document.getElementById("input3");
const numberoUtente4 = document.getElementById("input4");
const numberoUtente5 = document.getElementById("input5");
const buttone = document.getElementById("okButton");
const result = document.getElementById("result");


buttone.addEventListener('click',
function(){
    result.innerHTML=(Number(numberoUtente1.value) + Number(numberoUtente2.value) + Number(numberoUtente3.value) + Number(numberoUtente4.value) + Number(numberoUtente5.value));
})



let sum = 0;

let count = 1;
while(count <= 5){

    const input = Number(prompt('Inserisci il numero '+count));
    console.log(input);

    if(!isNaN(input)){
        sum+=input;
        count++;
    }
}

alert(sum)