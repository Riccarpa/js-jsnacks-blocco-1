/*SNACK 2: Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo */

// 1 inserire il numero 
// se pari stampalo
// se dispari stampa il numero successivo
// verifica che il numero inserito sia valido

num = 0;

do {
    num = parseInt(prompt('inserisci un numero'));

} while (isNaN(num))


if (num % 2 === 0) {
    console.log(num);
} else {
    console.log(num + 1);
}