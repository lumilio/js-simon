/* Un alert() espone 5 numeri generati casualmente.


Da li parte un timer di 30 secondi.


Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:

*/



const numberBox = document.getElementById('container-game')
const playButton = document.getElementById('button-game')
const timerBox = document.getElementById('container-timer')
const fineMessage = document.getElementById('container-text')
const fineButton = document.getElementById('fine-game')


const theNumbers = []
const trueNumbers = []

let seconds = 5;
let number = '';
let results = '';
let clock;


//funzioni utility
function randomInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function removeDuplicate(params) {
    return params.filter((value, index) => params.indexOf(value) === index)
}



//genero 5 numeri casuali e li inserisco in un div
for (let i = 0; i < 5; i++) {
   let input = randomInterval(0, 100)
   theNumbers.push(input)
   number=`<div class='number-box'>${input}</div>`
   numberBox.innerHTML += number   
}




// funzione per incrementare il counter
function incrementSeconds() {
    seconds --;
    timerBox.innerHTML = seconds;
    if (seconds <= 0) {
        clearInterval(clock);
        for (let i = 0; i < theNumbers.length; i++) {
            const input = Number(prompt('inserisci un numero che hai visto'));
            if(theNumbers.includes(input)){
                trueNumbers.push(input);
            }
        }
        results = `<div class='text-box'> hai indovinato ${trueNumbers.length} numeri</div>`
        fineMessage.innerHTML= results;
        fineMessage.classList.remove('d-none')
        console.log(theNumbers);
        console.log(removeDuplicate(trueNumbers));  
    }
}



//aggiungo interattività al pulsante 
playButton.addEventListener('click', function () {
    numberBox.classList.add('d-none')
    playButton.classList.add('d-none')
    timerBox.classList.remove('d-none')
    clock = setInterval(incrementSeconds, 1000) ;
})









