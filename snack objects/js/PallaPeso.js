/* 
SNACK: /
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione
*/

//link to html
let display = document.getElementById('palla');
let button = document.getElementById('button');
let pesoChoice = document.getElementById('peso-choice')

// creo oggetto palla
const palla = {
    nome: 'palla',
    peso: 10
};

// stampo l'oggetto
let pallaKeys = '';
for (var key in palla) {
    pallaKeys += '<span class = "block">' + key + ': ' + palla[key] + '</span>';
}
pallaPrint(palla, display);

// modificare il peso
/* SNACK : Invece di modificare il peso con un prompt, proviamo a farlo con un input. Avremo bisogno di un bottone...*/

button.addEventListener('click', function() {

    NewPeso = pesoChoice.value;

    palla.peso = NewPeso;
    // do {
    //     palla.peso = prompt('inserisci il nuovo peso');
    // } while (!palla.peso || isNaN(palla.peso))


    pallaPrint(palla, display);

})

//funzione***********************************************************
function pallaPrint(object, htmlItem) {

    htmlItem.innerHTML = '<span class = "block">' +
        'nome: ' + object.nome + '</span>' +
        'peso: ' + object.peso;

}