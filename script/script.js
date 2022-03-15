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


//Creare una griglia
const grid = document.getElementById("grid")
let rows;
let columns;


//Bonus ---- Difficoltà

const difficoltà = prompt ("Scegli il livello: facile - medio - difficile").toLowerCase();

if(difficoltà === "facile"){
  rows = 10;
  columns = 10;
    }else if(difficoltà === "medio"){
    rows = 9;
    columns = 9;
      }else if(difficoltà === "difficile"){
        rows = 7;
        columns = 7;
      };

      console.log(rows);
      console.log(columns);

//crea griglia
const totalOfCells = rows * columns;

//Creare una cella e un ciclo per inserirle
for (let i = 0; i < totalOfCells; i++){

  const cell = createCell();

  //inserisco i numeri
  cell.innerText = (i +1);

  //funzione per colorare la cella al click
  cell.addEventListener('click', function(){
    cell.classList.toggle('bg-blue');
  })


  grid.appendChild(cell);

}


//Funzione per creare la cella
function createCell(){

  const item = document.createElement('div');

  item.classList.add('cell');

  return item;
}