/*SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di n
omi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

// 1 crea una lista di nomi
// rendi il loro ordine casuale
// 2 crea una lista di cognomi
// rendi il loro ordine casuale
// 3 crea una variabile per la lista finale
// 4 crea un ciclo per prendere massimo 3 elementi di ciascuna delle due liste
// 5 abbina gli elementi delle due liste per generare la lista finale

//namelist + randomize
var nameList = ["Mario", "Luca", "Marco", "Giovanni"];
nameList.sort(() => Math.random() - 0.5);

//surnamelist + randomize
var surnameList = ["A", "B", "C", "D"];
surnameList.sort(() => Math.random() - 0.5);

//guestlist
var guestsList = [];

//randomize name + surname
for (i = 0; i < 3 && i < nameList.length && i < surnameList.length; i++) {

    guestsList = nameList[i] + ' ' + surnameList[i];

    console.log(guestsList);
}