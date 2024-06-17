// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//creo array per generare 5 numeri casuali
const randomArray = arrayRandomNumbers(1, 50, 5);

//seleziono in pagina il p dove far apparire i numeri casuali
const randNumOutput = document.querySelector("p");
randNumOutput.innerText += randomArray;
console.log(randomArray);

//seleziono dove stampare in pagina il timer
const timerOutput = document.getElementById("timer-seconds");

//seleziono il contenitore degli output
const outputContainer = document.getElementById("output-container");

//seleziono dove stampare il totale delle risposte corrette
const lenghtOutput = document.getElementById("tot-correct-answ");

//seleziono dove stampare i numeri corretti
const correctNums = document.getElementById("arr-correct-answ");

//imposto la durata del timer
let timerDuration = /*30*/ 1;

//dichiaro l'array delle risposte dell'user
const userArrInput = [];

//funzione timer
let countDown = setInterval(
    function () {

        //stampo in pagina il timer
        timerOutput.innerText = timerDuration;

        //se il timer arriva a 0 secondi
        if (timerDuration === 0){

            //fai sparire i numeri
            randNumOutput.classList.add("vanish");

            //interrompi il countdown
            clearInterval(countDown);

            //chiedi per 5 volte il numero da inserire
            for (let i = 0; i < 5; i++){
                let userInput = parseInt(prompt("inserisci i 5 numeri, uno alla volta"));
                //se il numero comunicato da user, corrisponde alla lista dei numeri casuali
                if(randomArray.includes(userInput) && !userArrInput.includes(userInput)){
                    //pusha nell'array delle risposte di User il valore
                    userArrInput.push(userInput);
                }
                
            }
            //comunica quanti numeri ha trovato
            lenghtOutput.innerText = userArrInput.length;
            //comunica quali numeri ha trovato
            correctNums.innerText = userArrInput;
            //rendo visibile il risultato
            outputContainer.classList.remove("vanish");

        } else {   //altrimenti
            //continua a sottrare 1 secondo
            timerDuration--;
        }
        //ogni secondo
    }, 1000)

