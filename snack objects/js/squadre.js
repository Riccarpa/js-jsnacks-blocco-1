/* 
SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "name", "city" "points";
Stampiamo le squadre in pagina, all'interno di una tabella HTML 
*/
let tabella = document.getElementById('tabella')

const squadre = [{
    nome: 'Roma',
    city: 'RM',
    points: 22
}, {
    nome: 'Lazio',
    city: 'RM',
    points: 2
}, {
    nome: 'Napoli',
    city: 'NP',
    points: 10
}]

TeamTable = '<tr>';
for (i = 0; i < squadre.length; i++) {
    let actualTeam = squadre[i];

    for (var key in actualTeam) {

        TeamTable += '<td>' + actualTeam[key]
        '</td>';

    }

    TeamTable += '</tr>'

}

tabella.innerHTML = TeamTable;