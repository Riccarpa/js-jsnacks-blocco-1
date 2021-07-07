/*SNACK 2: Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo */


do {
    var num = parseInt(prompt('inserisci un numero'));

} while (isNaN(num))


if (num % 2 === 0) {
    console.log(num);
} else {
    console.log(num + 1);
}