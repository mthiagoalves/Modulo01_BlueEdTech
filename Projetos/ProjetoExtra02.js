const prompt = require ('prompt-sync')();

let numGame;
let numPlayers;
const choice = [1, 2, 3, 4, 5, 6];
const players = [];
let choiseRandom;
let resultRandon;

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

  for (i = 0; i < numGame; i++) {

    choiseRandom = [Math.floor(Math.random() * choice.length)];
    resultRandon = choice[choiseRandom];
    console.log(resultRandon)
  }

 