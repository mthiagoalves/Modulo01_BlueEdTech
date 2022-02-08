const prompt = require("prompt-sync")();

//PRINCIPAIS VARIAVEIS

// // PRINCIPAIS VARIAVEIS E OBJETO DO STATUS DOS PERSONAGENS DA HISTORIA

let = nomePersonagem = prompt(`Digite o nome do personagem da história: `);
let = idadePersonagem = prompt(`Digite a idade do seu personagem: `);

const dadosPersonagem = {
  nome: nomePersonagem,
  idade: idadePersonagem,
  vida: 100,
  ataque: 10,
  energia: 100,
};

const lobo = {
  vida: 25,
  ataque: 70,
};

const golem = {
  vida: 200,
  ataque: 120,
  agilidade: 20,
  defesa: 500,
};

console.log(`Seu personagem foi criado: `);
console.table(dadosPersonagem);

// // ARROW FUNCTION PARA PAUSAR TEMPO DE EXECUÇÃO

tempo = (ms) => {
  var contar = new Date().getTime();
  for (var i = 0; i < 3e6; i++) {
    if (new Date().getTime() - contar > ms) {
      break;
    }
  }
};

// //ARROW FUNCTION PARA AUMENTAR/DIMINUIR O STATUS DO PERSONAGEM CONFORME ELE EVOLUI NA HISTORIA

aumentoStatus = (status) => {
  if (status == `s` || status == `sim` || status == true) {
    dadosPersonagem.ataque += 10;
    dadosPersonagem.vida += 10;
    dadosPersonagem.energia -= 5;
    console.log(
      `Seu ataque aumentou para ${dadosPersonagem.ataque} e sua vida aumentou para ${dadosPersonagem.vida}, porém sua energia ficou em ${dadosPersonagem.energia}.`
    );
    return dadosPersonagem.ataque;
    return dadosPersonagem.vida;
  } else if (
    status == `NAO` ||
    status == `n` ||
    status == `nao` ||
    status == `N`
  ) {
    dadosPersonagem.ataque -= 10;
    dadosPersonagem.vida -= 10;
    console.log(
      `Seu ataque diminiu para ${dadosPersonagem.ataque} e sua vida diminiu para ${dadosPersonagem.vida}`
    );
    return dadosPersonagem.vida;
    return dadosPersonagem.ataque;
  }
};

validacao = (x) => {
  while (x != `sim` && x != `s` && x != `nao` && x != `não` && x != `n`) {
    x = prompt(`Digite somente "sim" ou "não".`);
  }
};

// // //INICIO DA HISTORIA, JOGO E AS INTERAÇÕES COM O USUARIO.

console.log(
  `Em um reino distante, chamado Albion Flame, havia uma cidade que era muito abençoada, com terra fértil, água fresca, e muita mata, e chamada de Lorencia.
  E nessa cidade vivia ${nomePersonagem}, um jovem aspirante a cavaleiro da cidade, muito orgulhoso e talentoso por sinal.`
);

console.log(
  `Todo dia pela manhã, ${nomePersonagem} acorda para treinar esgrima com seu professor, mas está um pouco desmotivado por algum motivo.`
);

let irTreinar = prompt(
  `${nomePersonagem}, deseja ir treinar hoje? `
).toLowerCase();
validacao(irTreinar);

aumentoStatus(irTreinar);

if (irTreinar == `sim` || irTreinar == `s`) {
  irTreinar = prompt(
    `Você pode continuar treinando se quiser, deseja continuar? `
  ).toLowerCase();
  aumentoStatus(irTreinar);

  console.log(
    `Logo apos o treino, ainda de manhã, voltou para casa e logo em seguida foi ajudar no pasto da familia.`
  );

  let ajudarPasto = prompt(
    `Seu pai Thors, ja está com idade avançada e precisa de ajuda. Deseja ajuda seu pai?`
  ).toLowerCase();

  if (ajudarPasto == `s` || ajudarPasto == `sim`) {
    console.log(
      `Por ter ajudado seu pai a alimentar todo os animais e cuidar do pasto ficou um pouco cansado diminuindo sua energia para ${
        dadosPersonagem.energia - 5
      }`
    );
    console.log(`Enquanto se arrumava para voltar pra casa, ${nomePersonagem} avistou umas de suas ovelhas do rebanho sendo atacada por um lobo.
    ${nomePersonagem} pegou sua espada e correu para ajuda-lá.`);

    console.log(
      `Chegando mais perto ${nomePersonagem} conseguiu verificar os status do lobo e decidiu enfrenta-lo: `
    );
    console.table(lobo);

    if (dadosPersonagem.ataque > lobo.vida && dadosPersonagem.energia != 0) {
      console.log(
        `Foram necessários ${Math.ceil(
          lobo.vida / dadosPersonagem.ataque
        )} para conseguir matar o lobo. `
      );
    } else {
      console.log(
        `Você não conseguiu ajudar a ovelha, e o lobo acabou matando ela.`
      );
    }
    console.log(
      `\nJa no horário do almoço ${nomePersonagem} voltou para casa para comer, para poder assim, recuperar as energias.\n`
    );

    const cardapio = [
      ["arroz", 3],
      ["feijao", 3],
      ["carne de boi", 5],
      ["carne de frango", 5],
      ["verduras", 3],
      ["legumes", 3],
      ["salada", 3],
    ];

    for (let comida of cardapio) {
      let escolhaComida = prompt(`Deseja comer ${comida[0]}? `).toLowerCase();
      if (escolhaComida == "sim" || escolhaComida == `s`) {
        dadosPersonagem.energia += comida[1];
      }
    }

    console.log(
      `\nEnergia atual de ${dadosPersonagem.nomePersonagem} este em: ${dadosPersonagem.energia}.\n`
    );
  }
} else if (irTreinar == `não` || irTreinar == `nao` || irTreinar == `n`) {
  console.log(`Como ${nomePersonagem} não quis treinar, decidiu sair para explorar uma caverna ao sul da vila que por más linguas vivia um golem
porém, ninguem nunca tinha visto. Como não tinha treinado, sua mãe lhe abençoou com uma proteção e lhe deu um amuleto.\n`);
  console.log(
    `No caminho do caminho ${nomePersonagem} passou pelo mar, e ficou pensando em levar suprimentos para casa.`
  );

  let suprimentos = prompt(
    `Deseja pescar algo para levar pra casa? `
  ).toLowerCase();
  validacao(suprimentos);
  if (suprimentos == `sim` || suprimentos == `s`) {
    dadosPersonagem.energia -= 15;
    console.log(
      `${nomePersonagem} conseguiu pegar alguns peixes, porém levou a tarde toda e gastou um pouco da sua energia ficando com: ${dadosPersonagem.energia}`
    );
  } else if (
    suprimentos == `nao` ||
    suprimentos == `não` ||
    suprimentos == `n`
  ) {
    console.log(`${nomePersonagem} Foi direto em direção a caverna.`);
  }
  console.log(
    `Chegando a caverna ${nomePersonagem} começa a ficar apreensivo pois não sabia o que tinha dentro e mesmo assim decidiu entrar.`
  );
  console.log(
    `Ao entrar na caverna ${nomePersonagem} percebeu um barulho e foi caminhando em direção a ele, até que conseguiu avistar o tal Golem.
Com os atributos: `
  );
  console.table(golem);
  console.log(``);
  // let matarGolen = prompt(`Deseja enfrentar o golem mesmo estando fraco? `);
  // validacao(matarGolen);
  // if (matarGolen == `sim` || matarGolen == `s`) {
  //   console.log(
  //     `Você não tem atributos suficientes para enfrentar o golem. Volte depois que estiver mais forte.`
  //   );
  // } else if (matarGolen == `nao` || matarGolen == `não` || matarGolen == `n`) {
  //   console.log(
  //     `${nomePersonagem} viu que não conseguiria lutar com o golem, e retornou para casa.`
  //   );
  // }
}
