/* Un alert() espone 5 numeri generati casualmente.


Da li parte un timer di 30 secondi.


Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:

Info:
L'alert non si chiude in automatico. Dovete chiuderla voi a mano cliccando su ok. */

const theNumbers = []

function randomInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

for (let i = 0; i < 5; i++) {
   let number = randomInterval(0, 100)
   theNumbers.push(number)
}

console.log(theNumbers);