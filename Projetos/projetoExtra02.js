const prompt = require("prompt-sync")();
const { Console } = require("console");
const { Transform } = require("stream");

//PRINCIPAIS VARIAVEIS
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
time = (ms) => {
  var contar = new Date().getTime();
  for (var i = 0; i < 3e6; i++) {
    if (new Date().getTime() - contar > ms) {
      break;
    }
  }
};

//ARROW FUNCTION PARA PERSONALIZAR O TEXTO INDEX DO CONSOLE.TABLE
table = (input) => {
  const ts = new Transform({
    transform(chunk, enc, cb) {
      cb(null, chunk);
    },
  });
  const logger = new Console({ stdout: ts });
  logger.table(input);
  const table = (ts.read() || "").toString();
  let result = "";
  for (let row of table.split(/[\r\n]+/)) {
    let r = row.replace(/[^┬]*┬/, "┌");
    r = r.replace(/^├─*┼/, "├");
    r = r.replace(/│[^│]*/, "");
    r = r.replace(/^└─*┴/, "└");
    r = r.replace(/'/g, " ");
    result += `${r}\n`;
  }
  console.log(result);
};

//COMEÇO DO JOGO DOS DADOS.
console.log(`Bem-vindo ao jogo do dado. O jogo é bem simples, consiste em girar o dado, e o jogador que tirar o maior número ganha o turno. 
os pontos são acumulados e no final somados e o jogador que tiver mais pontos ganha o jogo. Divirta-se!\n`);

//ENTRADA E VALIDAÇÃO DOS NÚMEROS DE JOGADORES
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

console.log();

//ENTRADA E VALIDAÇÃO DO NÚMERO DE RODADAS 
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

console.log();

//LAÇO DE REPETIÇÃO PARA ADICIONAR OS JOGADORES QUE IRAM JOGAR. 
for (i = 0; i < numPlayers; i++) {

  players = new player (prompt(`Digite o nome do ${i+1}º jogador: `));
  
  playerList.push(players);

}

console.log(`\nOs jogadores são os: `);

table(playerList);

continuar = prompt (`Aperte ENTER para continuar.`);

console.clear();

//LAÇO DE REPETIÇÃO PARA CONTAGEM DOS TURNOS 
for (c = 0; c < numGame; c++) {

  console.log(`\n${c+1}º turno vai começar. \n`);

  //LAÇO DE REPETIÇÃO PARA CONTAGEM DE CADA JOGADA DOS DE CADA JOGADOR.
  for (i = 0; i < numPlayers; i++) {
  
  choice = Math.floor(Math.random() * 6) + 1;

  continuar = prompt (`\nÉ o turno do jogador ${playerList[i][`name`]}, aperte ENTER para girar o dado. \n`);

  console.clear();

  playerList [i][`score`] += choice;
  
  console.log(`\n${playerList[i][`name`]} conseguiu o numero ${choice} ao jogar o dado. Ficando com ${playerList [i][`score`]} pontos\n`);
  }

  time(1000);

  console.log(`O placar do ${c+1}º turno ficou em: \n`);

  table(playerList);
}

time(1500);

//FUNCTION PARA ORDENAR A PONTUAÇÃO DOS PLAYERS
playerList.sort(function(a,b) {

  return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;

});

console.log(`Placar final ficou: `);

table(playerList);

for (x = 0; x < numPlayers; x++){
  
  console.log(`${x+1}º Lugar: ${playerList[x].name} com ${playerList[x].score} vitórias.`);
}

