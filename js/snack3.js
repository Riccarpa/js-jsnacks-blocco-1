/*SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di n
omi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

//namelist + randomize
var nameList = ["Mario", "Luca", "Marco"];
nameList.sort(() => Math.random() - 0.5);

//surnamelist + randomize
var surnameList = ["A", "B", "C"];
surnameList.sort(() => Math.random() - 0.5);

//guestlist
var guestsList = [];

//randomize name + surname
for (i = 0; i < nameList.length && surnameList; i++) {

    guestsList = nameList[i] + ' ' + surnameList[i];

    console.log(guestsList);
}