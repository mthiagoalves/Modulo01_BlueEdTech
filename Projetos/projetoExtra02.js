const prompt = require("prompt-sync")();
const { Console } = require("console");
const { Transform } = require("stream");

//PRINCIPAIS VARIAVEIS
let numGame;
let numPlayers;
let choice;
let players = {};
let playerList = [];
const result = [];
let continuar;
let numPlays;

//FUNÇÃO CONSTRUTORA DE OBJETO
function player(name) {
  this.name = name;
  this.score = 0;
}

//ARROW FUNCTION PARA PAUSAR O PROGRAMA
time = (ms) => {
  var contar = new Date().getTime();
  for (var i = 0; i < 3e6; i++) {
    if (new Date().getTime() - contar > ms) {
      break;
    }
  }
};

//ARROW FUNCTION PARA TABELAR UM OBJETO
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


while (continuar != `nao` && continuar != `n`) {

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

    players = new player(prompt(`Digite o nome do ${i + 1}º jogador: `).toUpperCase());

    playerList.push(players);

  }

  console.log(`\nOs jogadores são os: `);

  table(playerList);

  continuar = prompt(`Aperte ENTER para continuar.`);

  console.clear();

  //LAÇO DE REPETIÇÃO PARA CONTAGEM DOS TURNOS
  for (c = 0; c < numGame; c++) {
    
    console.log(`\n${c + 1}º turno vai começar. \n`);

    time(1000);

    //LAÇO DE REPETIÇÃO PARA CONTAGEM DE CADA JOGADA DOS DE CADA JOGADOR.
    for (i = 0; i < numPlayers; i++) {
      
      choice = Math.floor(Math.random() * 6) + 1;

      continuar = prompt(`É a vez do jogador(a) \x1b[31m${playerList[i][`name`]}\x1b[0m, aperte ENTER para girar o dado. `);

      time(1000);

      console.clear();

      playerList[i][`score`] += choice;

      console.log(`\n\x1b[31m${playerList[i][`name`]}\x1b[0m conseguiu o numero \x1b[36m${choice}\x1b[0m ao jogar o dado. Ficando com \x1b[32m${playerList[i][`score`]}\x1b[0m pontos\n`);

    }

    time(1000);

    console.log(`O placar do ${c + 1}º turno ficou em: \n`);

    table(playerList);

    continuar = prompt(`Aperte ENTER para continuar.`);
  }

  time(1500);

  //FUNCTION PARA ORDENAR A PONTUAÇÃO DOS PLAYERS
  playerList.sort(function (a, b) {

    return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;

  });

  console.log(`Placar final ficou: `);

  table(playerList);

  for (x = 0; x < numPlayers; x++) {

    console.log(`${x + 1}º Lugar: ${playerList[x].name} com ${playerList[x].score} vitórias.`);

  }

  console.log(`\nParabéns ${playerList[0].name} você venceu o jogo!\n`);

  //CONDIÇÃO PARA jogar novamente.
  continuar = prompt(`Deseja jogar outra vez? [sim] ou [nao]`).toLowerCase();

  if (continuar != `nao` && continuar != `n`) {

    playerList = [];

    console.log(`Começando a partida novamente. Prepare-se!`);

    time(1500);
    console.log(`.`);
    time(1500);
    console.log(`.`);
    time(1500);
    console.log(`.`);
    time(1500);
    console.clear();
  }
}

console.log(
  `\nObrigado por jogar. Jogo desenvolvido por Thiago Alves. Estudante Fullstack pela BlueEdTech.`
);
