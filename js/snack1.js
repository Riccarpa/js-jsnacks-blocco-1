/*SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

// 1 chiedi all'utente di inserire un numero
// 2 usando prima for e poi while:
// 3 ripeti l'inserimento per 5 volte
// 4 somma i numeri inseriti dall'utente e restituisci il risultato 
// 5 verifica che l'inserimento sia corretto se no richiedi di inserire il numero

var number = 0;
var result = 0;

for (i = 0; i < 5; i++) {
    number = parseInt(prompt('inserisci un numero', '2'));
    if (!isNaN(number)) {
        result += number;
    }
}
i = 0;
while (i < 5) {
    i++;
    var number = parseInt(prompt('inserisci un numero', '2'));
    if (!isNaN(number)) {
        result += number;
    }
}

console.log(result);