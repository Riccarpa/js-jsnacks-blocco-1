/*  SNACK 4:  Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

// 1 crea 2 array di dimensioni diverse
// 2 genera numeri casuali
// 3 inserisci i numeri casuali nell ?array più corto
// fai "3" FINCHE' array1 != array2



var numberList = ["1", "2", "3"];

var letterList = ["A", "B", "C", "D", "E"];


while (numberList.length !== letterList.length) {

    var randomNumber = (Math.floor(Math.random() * 100) + 1);

    if (numberList < letterList) {
        numberList.push(randomNumber);
    } else {
        letterList.push(randomNumber);
    }
}
console.log(numberList);