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

let seconds = 0;





function randomInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


let number='';
for (let i = 0; i < 5; i++) {
   let input = randomInterval(0, 100)
   theNumbers.push(input)
   number=`<div class='number-box'>${input}</div>`
   numberBox.innerHTML += number   
}

console.log(theNumbers);




for (let i = 0; i < theNumbers.length; i++) {
    const input = Number(prompt('inserisci un numero che hai visto'));
    if(theNumbers.includes(input)){
        trueNumbers.push(input);
    }  
}

console.log(trueNumbers);


/* playButton.addEventListener('click', startGame )

function startGame() {
    playButton.classList.add('d-none')
    numberBox.classList.add('d-none')
    for (let i = 0; i < theNumbers.length; i++) {
        const aswer = prompt('inserisci un numero che hai visto');
        
    }
} */




  

/* setTimeout(myFunction, 30000) */