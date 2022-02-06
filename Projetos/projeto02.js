const prompt = require("prompt-sync")();

console.log(`Bem vindo ao Jokenpo, divirta-se.\n`);
console.log(`Caso você não saiba, jokenpô é um jogo em que as pessoas jogam com as mãos, 
que no nosso jogo será uma escolha, escolhendo entre pedra, papel e tesoura. 
E funciona assim: a tesoura corta o papel, mas quebra com a pedra; o papel embrulha a pedra, 
mas é cortado pela tesoura e a pedra quebra a tesoura e é embrulhada pelo papel.\n`);
console.log(`Então vamos começar! \n`);

// REPETIÇÃO PARA O JOGADOR ESCOLHER SE QUER OU NÃO JOGAR DE NOVO.

while (true) {
  // VARIAVEIS PRINCIPAIS
  const escolha = ["pedra", "papel", "tesoura"];
  let escolhaAleatoria;
  let placar = 0;
  let placarPc = 0;
  let numRodadas;

  //VALIDAÇÃO DO USUARIO NA ESCOLHA DO NUMERO DE RODADAS

  while (true) {
    numRodadas = +prompt(`Digite o número de rodadas você deseja jogar: `);
    if (
      !isNaN(numRodadas) &&
      numRodadas > 0 &&
      numRodadas % 1 == 0 &&
      numRodadas.length != 0
    ) {
      break;
    }
  }

  console.log();

  console.log(
    `Sua partida terá ${numRodadas} rodadas. Esteja pronto para vitória.\n`
  );

  // ESCOLHA E VALIDAÇÃO DA ENTRADA DO USUÁRIO

  for (i = 0; i < numRodadas; i++) {
    let escolhaUsuario = prompt(
      `${i + 1}º rodada - Escolha entre pedra, papel e tesoura: `
    ).toLowerCase();

    while (
      escolhaUsuario != "pedra" &&
      escolhaUsuario != "papel" &&
      escolhaUsuario != "tesoura"
    ) {
      escolhaUsuario = prompt(
        `Por favor digite a sua escolha entre "pedra", "papel" e "tesoura": `
      ).toLowerCase();
    }

    // RANDOMIZAÇÃO E ESCOLHA DO COMPUTADOR

    let resultadoComputador;

    escolhaAleatoria = [Math.floor(Math.random() * escolha.length)];
    resultadoComputador = escolha[escolhaAleatoria];

    //ARROW FUNCTION PARA PAUSAR A PALAVRA "JO-KEN-PO"

    tempo = (ms) => {
      var contar = new Date().getTime();
      for (var i = 0; i < 3e6; i++) {
        if (new Date().getTime() - contar > ms) {
          break;
        }
      }
    };

    console.log(`\nVamos lá!!\n`);

    tempo();

    console.log(`JO!!!`);

    tempo();

    console.log(`KEN!!!`);

    tempo();

    console.log(`PO!!!\n`);

    tempo();

    // CONDIÇÕES PARA VER OS RESULTADOS

    if (resultadoComputador == escolhaUsuario) {
      console.log(
        `O jogo deu EMPATE. O computador também escolheu ${resultadoComputador}.\n`
      );
    } else if (
      (resultadoComputador == "pedra" && escolhaUsuario == "papel") ||
      (resultadoComputador == "tesoura" && escolhaUsuario == "pedra") ||
      (resultadoComputador == "papel" && escolhaUsuario == "tesoura")
    ) {
      console.log(
        `Você GANHOU está rodada. O computador escolheu ${resultadoComputador}.\n`
      );
      placar++;
    } else {
      console.log(
        `Você PERDEU, a escolha do computador foi ${resultadoComputador}.\n`
      );
      placarPc++;
    }
  }

  // CONDIÇÃO PARA EXIBIÇÃO DO PLACAR.

  if (placar > placarPc) {
    console.log(
      `VOCÊ GANHOU !!!! Você fez"${placar}" pontos e a maquina fez "${placarPc}" pontos.\n`
    );
  } else if (placar < placarPc) {
    console.log(
      `Você perdeu. A sua pontuação foi "${placar}" e o da maquina foi "${placarPc}".\n`
    );
  } else if (placar == placarPc) {
    console.log(
      `O jogo empatou, você teve ${placar} pontos e o computador ${placarPc} pontos.\n`
    );
  }

  let jogarNovamente = prompt(`Deseja jogar novamente? `).toLowerCase();
  console.log();

  if (jogarNovamente == "sim" || jogarNovamente == "s") {
  } else {
    console.log(`Volte semprem que quiser. Obrigado por jogar.`);
    break;
  }
  console.clear();
}

// TRABALHO FEITO COM MUITO CARINHO, AMOR E TEMPO POR THIAGO.
