/*Consegna
creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/


//Creare una griglia 10x10
const grid = document.getElementById("grid")
const rows = 10;
const columns = 10;
const totalOfCells = rows * columns;


//Creare un ciclo per inserire le celle
for (let i = 0; i < totalOfCells; i++){

  const cell = document.createElement('div');

  cell.classList.add('cell');

  grid.appendChild(cell);

}
