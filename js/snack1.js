/*SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

var result = 0;

for (i = 0; i < 5; i++) {
    var number = parseInt(prompt('inserisci un numero', '2'));
    if (!isNaN(number)) {
        result += number;
    }
}
// i = 0;
// while (i < 5) {
//     i++;
//     var number = parseInt(prompt('inserisci un numero', '2'));
//     if (!isNaN(number)) {
//         result += number;
//     }
// }

// console.log(result);