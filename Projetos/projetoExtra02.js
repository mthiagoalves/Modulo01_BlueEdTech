const prompt = require("prompt-sync")();

let numGame;
let numPlayers;
let choice; 
let players = {};
const playerList = [];
const result = [];
let continuar;
let numPlays;

//FUNÇÃO CONSTRUTORA DE OBJETO
function player (name) {
  this.name = name;
  this.score = 0;

}

//ARROW FUNCTION PARA PAUSAR A PALAVRA "JO-KEN-PO"
tempo = (ms) => {
  var contar = new Date().getTime();
  for (var i = 0; i < 3e6; i++) {
    if (new Date().getTime() - contar > ms) {
      break;
    }
  }
};


while (true) {

  numPlayers = +prompt(`Digite o número de jogadores vão jogar: `);

  if (
    !isNaN(numPlayers) &&
    numPlayers > 0 &&
    numPlayers % 1 == 0 &&
    numPlayers.length != 0
  ) {
    break;
  }
}

while (true) {

  numGame = +prompt(`Digite o número de rodadas você deseja jogar: `);

  if (
    !isNaN(numGame) &&
    numGame > 0 &&
    numGame % 1 == 0 &&
    numGame.length != 0
  ) {
    break;
  }
}

// continuar = prompt (`Aperte ENTER para continuar.\n`);


for (i = 0; i < numPlayers; i++) {

  players = new player (prompt(`Digite o nome do ${i+1}º jogador: `));
  
  playerList.push(players);

}

for (c = 0; c < numGame; c++) {

  console.log(`\n${c+1}º turno vai começar. \n`);

  for (i = 0; i < numPlayers; i++) {
  
  choice = Math.floor(Math.random() * 6) + 1;

  continuar = prompt (`\n${playerList[i][`name`]}, aperte ENTER para girar o dado. \n`);

  playerList [i][`score`] = choice;
  
  console.log(`\n${playerList[i][`name`]} conseguiu o numero ${choice} ao jogar o dado\n`);
 
  }

}

console.log(result)

console.log(result.length)

