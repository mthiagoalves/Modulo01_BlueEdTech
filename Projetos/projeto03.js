var prompt = require("prompt-sync")();

// // PRINCIPAIS VARIAVEIS E OBJETO DO STATUS DOS PERSONAGENS DA HISTORIA

let = nomePersonagem = prompt(`Digite o nome do personagem da história: `);
let = idadePersonagem = prompt(`Digite a idadtrabahoe do seu personagem: `);

const dadosPersonagem = {
  nomePersonagem,
  idadePersonagem,
  vidaPersonagem: 100,
  ataquePersonagem: 10,
  energiaPersonagem: 100,
};

const lobo = {
  vidaLobo: 25,
  ataqueLobo: 70,
};

console.log(`Seu personagem foi criado: `);
console.log(
  `Nome: ${dadosPersonagem.nomePersonagem}.\nIdade: ${dadosPersonagem.idadePersonagem}.
Ataque: ${dadosPersonagem.ataquePersonagem}\nVida: ${dadosPersonagem.vidaPersonagem}.\nEnergia: ${dadosPersonagem.energiaPersonagem}`
);

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
  if (status == `SIM` || status == `s` || status == `sim` || status == `S`) {
    dadosPersonagem.ataquePersonagem += 10;
    dadosPersonagem.vidaPersonagem += 10;
    dadosPersonagem.energiaPersonagem -= 5;
    console.log(
      `Seu ataque aumentou para ${dadosPersonagem.ataquePersonagem} e sua vida aumentou para ${dadosPersonagem.vidaPersonagem}, porém sua energia ficou em ${dadosPersonagem.energiaPersonagem}.`
    );
    return dadosPersonagem.ataquePersonagem;
    return dadosPersonagem.vidaPersonagem;
  } else if (
    status == `NAO` ||
    status == `n` ||
    status == `nao` ||
    status == `N`
  ) {
    dadosPersonagem.ataquePersonagem -= 10;
    dadosPersonagem.vidaPersonagem -= 10;
    console.log(
      `Seu ataque diminiu para ${dadosPersonagem.ataquePersonagem} e sua vida diminiu para ${dadosPersonagem.vidaPersonagem}`
    );
    return dadosPersonagem.vidaPersonagem;
    return dadosPersonagem.ataquePersonagem;
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

aumentoStatus(irTreinar);

if (irTreinar == `sim` || irTreinar == `s`) {
  irTreinar = prompt(
    `Você pode continuar treinando se quiser, deseja continuar? `
  ).toLowerCase();
  aumentoStatus(irTreinar);
} else if (irTreinar == `não` || irTreinar == `nao` || irTreinar == `n`) {
  return;
}

console.log(
  `Logo apos o treino, ainda de manhã, voltou para casa e logo em seguida foi ajudar no pasto da familia.`
);

let ajudarPasto = prompt(
  `Seu pai Thors, ja está com idade avançada e precisa de ajuda. Deseja ajuda seu pai?`
).toLowerCase();

if (ajudarPasto == `s` || ajudarPasto == `sim`) {
  console.log(
    `Por ter ajudado seu pai a alimentar todo os animais e cuidar do pasto ficou um pouco cansado diminuindo sua energia para ${
      dadosPersonagem.energiaPersonagem - 5
    }`
  );
  console.log(`Enquanto se arrumava para voltar pra casa, ${nomePersonagem} avistou umas de suas ovelhas do rebanho sendo atacada por um lobo.
  ${nomePersonagem} pegou sua espada e correu para ajuda-lá.`);

  console.log(
    `Chegando mais perto ${nomePersonagem} conseguiu verificar os status do lobo e decidiu enfrenta-lo: `
  );
  console.log(lobo.ataqueLobo);
  console.log(lobo.vidaLobo);
  console.log(dadosPersonagem.ataquePersonagem);
  console.log(lobo.vidaLobo);
  if (
    dadosPersonagem.ataquePersonagem > lobo.vidaLobo &&
    dadosPersonagem.energiaPersonagem != 0
  ) {
    console.log(
      `Foram necessários ${Math.ceil(
        lobo.vidaLobo / dadosPersonagem.ataquePersonagem
      )} para conseguir matar o lobo. `
    );
  } else {
    console.log(
      `Você não conseguiu ajudar a ovelha, e o lobo acabou matando ela.`
    );
  }
  console.log(
    `Ja no horário do almoço ${nomePersonagem} voltou para casa para comer, para poder assim, recuperar as energias.`
  );

  const cardapio = [
    "arroz",
    "feijao",
    "carne de boi",
    "carne de frango",
    "verduras",
    "legumes",
    "salada",
  ];
  let escolhaAlmoco = [];

  for (i = 0; i < cardapio.length; i++) {
    if (prompt(`Deseja comer ${cardapio[i]}? `).toLowerCase() == "sim") {
      escolhaAlmoco.push(cardapio[i]);
    }
  }
  console.log(escolhaAlmoco);
} else if (ig) {
}
