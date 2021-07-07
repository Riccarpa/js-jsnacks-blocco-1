/*  SNACK 4:  Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

var numberList = ["1", "2", "3"];

var letterList = ["A", "B", "C", "D", "E"];


while (numberList.length !== letterList.length) {

    numberList.push(Math.floor(Math.random() * 100) + 1);
}
console.log(numberList);