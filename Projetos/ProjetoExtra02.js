const prompt = require("prompt-sync")();

let numGame;
let numPlayers;
let choice; 
let players = {};
const playerList = [];
// let choiseRandom;
// let resultRandon;
let continuar;

//FUNÇÃO CONSTRUTORA DE OBJETO
function player (name) {
  this.name = name;
  this.score = 0;

}

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

continuar = prompt (`Aperte ENTER para continuar.\n`);


for (i = 0; i < numPlayers; i++) {

  players = new player (prompt(`Digite o nome do ${i+1}º jogador: `));
  
  playerList.push(players);

  }


for (i = 0; i < numGame; i++) {

  choice = Math.floor(Math.random() * 6) + 1;

  continuar = prompt (`Aperte ENTER para girar o dado. `);

  playerList [i][`score`] = choice;

  console.log(playerList);
 
}




















// choiseRandom = [Math.floor(Math.random() * choice.length)];
// resultRandon = choice[choiseRandom];
// playerList[0][`score`] = resultRandon