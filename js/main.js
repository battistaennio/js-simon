// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//creo array per generare 5 numeri casuali
const randomArray = arrayRandomNumbers(1, 50, 5)

//seleziono in pagina il p dove far apparire i numeri casuali
document.querySelector("p").innerText = randomArray;