/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    - input o prompt per il recupero dei kilometri e per l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    • il prezzo del biglietto è definito in base ai km (0.21 € al km)
    • va applicato uno sconto del 20% per i minorenni
    • va applicato uno sconto del 40% per gli over 65
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/



function myFunction(){
    let kmTravel = document.getElementById('kilometres').value;

    let Minors = document.getElementById('minors').checked;
    let Adult = document.getElementById('adult').checked;
    let Over = document.getElementById('over65').checked;
    const kmPrice = 0.21;
    let fullPrice = kmTravel * kmPrice;

    console.log(kmTravel, Minors, Adult, Over, fullPrice);

    if(Minors == true){
        let realPrice = (fullPrice * 0.80).toFixed(2);
        console.log(realPrice);
        document.getElementById('price').innerHTML = `<span>${realPrice}</span>`
    } else if (Over == true){
        let realPrice = (fullPrice * 0.60).toFixed(2);
        console.log(realPrice);
        document.getElementById('price').innerHTML = `<span>${realPrice}</span>`
    } else{
        let realPrice = (fullPrice).toFixed(2);
        console.log(realPrice);
        document.getElementById('price').innerHTML = `<span>${realPrice}</span>`
    }
}
