// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// 1. Genero 5 numeri casuali tra 1 e 20 e li salvo nell'array randomNumbers:
const randomNumbers = [];
// - FINTANTO CHE la lunghezza dell'array (randomNumbers.length) è minore di 5...
while (randomNumbers.length < 3) {
    // - ...genero un numero casuale tra 1 e 20;
    let random = Math.floor(Math.random() * 20 + 1);
    // - PER tutta la sua lunghezza, scorro tutti gli elementi dell'array;
    for (let i = 0; i <= randomNumbers.length; i++) {
        // - SE l'array NON include già il numero generato...
        if (!randomNumbers.includes(random)) {
            // - ...inserisco il numero generato nell'array...
            randomNumbers.push(random);
        // - ALTRIMENTI niente;
        } else {
        }
    }
}
// - mostro i 5 numeri generati automaticamente all'utente.
alert(randomNumbers);


// 2. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt():
// - inizializzo un array vuoto;
let userNumbers = [];
// - imposto delle azioni da eseguire dopo n millisecondi (secondi * 1000);
setTimeout(function() {
    // - FINTANTO CHE la lunghezza dell'array con i numeri inseriti dall'utente (userNumbers.length) è minore della lunghezza dell'array con i numeri generati automaticamente (randomNumbers.length)...
    while (userNumbers.length < randomNumbers.length) {
        // - ...faccio inserire un numero all'utente;
        let userNumb = Number(prompt("Inserisci un numero tra 1 e 20"));
        // - SE l'array include già il numero inserito dall'utente...
        if (userNumbers.includes(userNumb)) {
            // - ...lo avviso...
            alert("Hai già inserito questo numero!");
        // - ALTRIMENTI SE l'utente inserisce un NaN OPPURE un numero minore o uguale a 0 OPPURE un numero maggiore di 20...
        } else if (isNaN(userNumb) || userNumb <= 0 || userNumb > 20) {
            // - ...lo avviso...
            alert("Ho detto di inserire UN NUMERO TRA 1 E 20!!!!");
        // - ALTRIMENTI...
        } else {
            // - ...inserisco il numero inserito dall'utente nel relativo array;
            userNumbers.push(userNumb);
        }
    }
}, (3 * 1000));


// 3. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
