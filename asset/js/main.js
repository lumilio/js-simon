/* Un alert() espone 5 numeri generati casualmente.


Da li parte un timer di 30 secondi.


Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:

*/



const numberBox = document.getElementById('container-game')
const playButton = document.getElementById('button-game')
const timerBox = document.getElementById('container-timer')
const fineButton = document.getElementById('fine-game')

const theNumbers = []
const trueNumbers = []

let seconds = 5;
let clock;




//funzioni utility
function randomInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function removeDuplicate(params) {
    return params.filter((value, index) => params.indexOf(value) === index)
}

function incrementSeconds() {
    seconds --;
    console.log(seconds);
    timerBox.innerHTML = seconds;
}




let number='';
for (let i = 0; i < 5; i++) {
   let input = randomInterval(0, 100)
   theNumbers.push(input)
   number=`<div class='number-box'>${input}</div>`
   numberBox.innerHTML += number   
}
console.log(theNumbers);




playButton.addEventListener('click', function () {
    playButton.classList.add('d-none')
    timerBox.classList.remove('d-none')
    clock = setInterval(incrementSeconds, 1000);
    if (seconds == 0) {
        clearInterval(clock)
        for (let i = 0; i < theNumbers.length; i++) {
            const input = Number(prompt('inserisci un numero che hai visto'));
            if(theNumbers.includes(input)){
                trueNumbers.push(input);
            }
        }
    }
})
    







console.log(removeDuplicate(trueNumbers));







