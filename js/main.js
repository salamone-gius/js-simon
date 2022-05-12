// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// 1. genero 5 numeri casuali tra 1 e 20 e li salvo nell'array randomNumbers
const randomNumbers = [];

// FINTANTO CHE la lunghezza dell'array (randomNumbers.length) è minore di 5...
while (randomNumbers.length < 5) {
    // ...genero un numero casuale tra 1 e 20;
    let random = Math.floor(Math.random() * 20 + 1);
    // PER tutta la sua lunghezza, scorro tutti gli elementi dell'array;
    for (let i = 0; i <= randomNumbers.length; i++) {
        // SE l'array NON include già il numero generato...
        if (!randomNumbers.includes(random)) {
            // ...inserisco in numero generato nell'array...
            randomNumbers.push(random);
            // ALTRIMENTI niente;
        } else {
        }
    }
}

// mostro i 5 numeri generati all'utente.
alert(randomNumbers);


