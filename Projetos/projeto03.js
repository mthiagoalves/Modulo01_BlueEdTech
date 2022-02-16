const prompt = require("prompt-sync")();
const { Console } = require("console");
const { Transform } = require("stream");

// ARROW FUNCTION PARA PAUSAR TEMPO DE EXECUÇÃO

const tempo = (ms) => {
  let contar = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
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

//ARROW FUNCTION PARA VALIDAÇÃO DA RESPOSTA DO USUARIO

let validacao = (x) => {
  while (x != `sim` && x != `s` && x != `nao` && x != `não` && x != `n`) {
    console.log(`!!! ATENÇÃO !!!`);
    x = prompt(`Responda somente com [sim] ou [não]: `).toLowerCase();
  }
  return x;
};

//AVISO PARA CASO O PERSONAGEM FIQUE SEM ENERGIA

let semEnergia = () => {
  console.log(
    `\n${nomePersonagem} está totalmente sem energia não consegue continuar. Melhor descansar por hoje e continuar a rotina amanhã.\n`
  );
  dadosPersonagem.energia += 100;
};

console.log(`Bem-vindo a Albion Flame, um jogo onde você pode criar um personagem e determinar o dia do personagem no reino. O jogo consiste em determinar as escolhas
do personagem. Escolha com sabedoria e explore varios caminhos.\nLembre-se seus status de um dia pro outro são acumulativos.\n`);

tempo(2200);
console.log(`.`);
tempo(2200);
console.log(`.`);
tempo(2200);
console.log(`.\n`);
tempo(2200);
console.clear();
tempo(6500);

console.log(
  `Em um reino distante, chamado Albion Flame, havia uma vila que era muito abençoada, com terra fértil, água fresca, e muita mata, e chamada Lorencia.
Albion Flame é um reino mágico cheio de criaturas e varios caminhos para ser explorado.\n`
);

// PRINCIPAIS VARIAVEIS E OBJETOs DOS STATUS DOS PERSONAGENS DA HISTORIA

let nomePersonagem;

nomePersonagem = prompt(
  `Digite o nome que deseja para seu personagem na história: `
);

while (!isNaN(nomePersonagem)) {
  console.clear();
  console.log(`!!!ATENÇÃO!!!`);
  nomePersonagem = prompt(`Digite um nome válido para seu personagem: `);
  console.clear();
}

let idadePersonagem;

while (true) {
  console.log(`Seu personagem deve ter entre 9 e 70 anos.`);
  idadePersonagem = +prompt(`Digite a idade do seu personagem: `);
  if (
    !isNaN(idadePersonagem) &&
    idadePersonagem > 8 &&
    idadePersonagem % 1 == 0 &&
    idadePersonagem.length != 0
  ) {
    break;
  }
  console.clear();
}

let elementoEscolhido;

let numeroDias;
while (true) {
  numeroDias = +prompt(`Quantos dias jogar? `);
  if (
    !isNaN(numeroDias) &&
    numeroDias > 0 &&
    numeroDias % 1 == 0 &&
    numeroDias.length != 0
  ) {
    break;
  }
  console.clear();
}

// OBJETO PRINCIPAL COM TODAS AS VARIAÇÕES DE STATUS DO PERSONAGEM.

const dadosPersonagem = {
  nome: nomePersonagem,
  idade: idadePersonagem,
  vida: ``,
  ataque: ``,
  agilidade: ``,
  defesa: ``,
  energia: 100,

  aumentarStatus: function (status) {
    if (status === `s` || status === `sim` || status == true) {
      this.ataque += 15;
      this.vida += 15;
      this.agilidade += 11;
      this.defesa += 9;
      this.energia -= 30;
      console.log(
        `\nSeus status aumentaram para:\nVida: ${this.vida}\nAtaque: ${this.ataque}\nAgilidade: ${this.agilidade}\nDefesa: ${this.defesa}\nEnergia: ${this.energia}`
      );
    }
  },

  diminuirStatus: function (status) {
    if (status === `n` || status === `nao` || status == false) {
      this.ataque -= 10;
      this.vida -= 10;
      this.agilidade -= 8;
      this.defesa -= 8;
      console.log(
        `\nSua vida diminiu para ${this.vida}, ataque diminiu para ${this.ataque}.\n`
      );
    }
  },

  poderElemental: function () {
    const elementos = ["fogo", "agua", "terra", "ar"];

    let elementoEscolhido;
    do {
      elementoEscolhido = prompt(
        `${nomePersonagem}, sou um espirito elementar da natureza, qual elemento você deseja invocar? [${elementos}] : `
      ).toLowerCase();
    } while (!elementos.includes(elementoEscolhido));

    console.log(`\nVocê invocoou o elemento "${elementoEscolhido}".\n`);

    if (elementoEscolhido === `fogo`) {
      this.vida += 70;
      this.ataque += 150;
      this.agilidade += 84;
      this.defesa += 50;
      tempo();
      console.log(`O elemento fogo é focado no ataque. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+70)\nAtaque: ${this.ataque} (+150)\nAgilidade: ${this.agilidade} (+84)\nDefesa${this.defesa} (+50)`);
    } else if (elementoEscolhido === `agua`) {
      this.vida += 150;
      this.ataque += 53;
      this.agilidade += 50;
      this.defesa += 88;
      tempo();
      console.log(`O elemento agua é focado na vida. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+150)\nAtaque: ${this.ataque} (+53)\nAgilidade: ${this.agilidade}(+50)\nDefesa: ${this.defesa} (+88)`);
    } else if (elementoEscolhido === `terra`) {
      this.vida += 87;
      this.ataque += 45;
      this.agilidade += 50;
      this.defesa += 150;
      tempo();
      console.log(`O elemento terra é focado na defesa. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+87)\nAtaque: ${this.ataque} (+45)\nAgilidade: ${this.agilidade} (+50)\nDefesa: ${this.defesa} (+150)`);
    } else if (elementoEscolhido === `ar`) {
      this.vida += 50;
      this.ataque += 80;
      this.agilidade += 150;
      this.defesa += 45;
      tempo();
      console.log(`O elemento agua é focado na agilidade. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+50)\nAtaque: ${this.ataque} (+80)\nAgilidade: ${this.agilidade} (+150)\nDefesa: ${this.defesa} (+45)`);
    }
  },

  poderElementalFuria: function () {
    const elementos = ["FOGO", "AGUA", "TERRA", "AR"];

    do {
      elementoEscolhido = prompt(
        `${nomePersonagem}, chame por um elemento: `
      ).toUpperCase();
    } while (!elementos.includes(elementoEscolhido));

    console.log(`\n${elementoEscolhido}!!! Gritou ${nomePersonagem}.\n`);

    if (elementoEscolhido === `FOGO`) {
      this.vida += 2664;
      this.ataque += 6544;
      this.agilidade += 4233;
      this.defesa += 2155;
      tempo();
      console.log(`Desceu um bola de fogo do alto e envolveu ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+2664)\nAtaque: ${this.ataque} (+6544)
  Agilidade: ${this.agilidade} (+4233)\nDefesa${this.defesa} (+2155)`);
    } else if (elementoEscolhido === `AGUA`) {
      this.vida += 6544;
      this.ataque += 2664;
      this.agilidade += 2155;
      this.defesa += 4233;
      tempo();
      console.log(`A chuva aumentou dratiscamente cercando ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+6544)\nAtaque: ${this.ataque} (+2664)
  Agilidade: ${this.agilidade}(+2155)\nDefesa: ${this.defesa} (+4233)`);
    } else if (elementoEscolhido === `TERRA`) {
      this.vida += 4233;
      this.ataque += 2155;
      this.agilidade += 2664;
      this.defesa += 6544;
      tempo();
      console.log(`A terra começou a se agitar em volta de ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+4233)\nAtaque: ${this.ataque} (+2155)
  Agilidade: ${this.agilidade} (+2664)\nDefesa: ${this.defesa} (+6544)`);
    } else if (elementoEscolhido === `AR`) {
      this.vida += 2664;
      this.ataque += 4233;
      this.agilidade += 6544;
      this.defesa += 2155;
      tempo();
      console.log(`Um furacão se formou em volta de ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+2664)\nAtaque: ${this.ataque} (+4233)
  Agilidade: ${this.agilidade} (+6544)\nDefesa: ${this.defesa} (+2155)`);
    }
  },

  recuperarEnergia: function () {
    const cardapio = [
      ["Arroz", 9],
      ["Feijao", 9],
      ["Carne bovina", 15],
      ["Carne de ave", 13],
      ["Verduras", 7],
      ["Legumes", 8],
      ["Salada", 6],
    ];

    for (const comida of cardapio) {
      let escolhaComida = prompt(
        `Quer adicionar ${comida[0]} no seu prato? `
      ).toLowerCase();
      escolhaComida = validacao(escolhaComida);
      if (escolhaComida === "sim" || escolhaComida === `s`) {
        dadosPersonagem.energia += comida[1];
      }
    }
  },
};

//ARRAY OBJETOS COM OS STATUS DOS MOSNTROS

const lobo = [
  { Atributo: "Vida", Valor: 35 },
  { Atributo: "Ataque", Valor: 70 },
  { Atributo: "Agilidade", Valor: 30 },
  { Atributo: "Defesa", Valor: 30 },
  { Atributo: "Elemento", Valor: "Neutro" },
];

const orc = [
  { Atributo: "Vida", Valor: 150 },
  { Atributo: "Ataque", Valor: 130 },
  { Atributo: "Agilidade", Valor: 100 },
  { Atributo: "Defesa", Valor: 70 },
  { Atributo: "Elemento", Valor: "Ar" },
];

const dragao = [
  { Atributo: "Vida", Valor: 550 },
  { Atributo: "Ataque", Valor: 1350 },
  { Atributo: "Agilidade", Valor: 350 },
  { Atributo: "Defesa", Valor: 145 },
  { Atributo: "Elemento", Valor: "Fogo" },
];

const golem = [
  { Atributo: "Vida", Valor: 200 },
  { Atributo: "Ataque", Valor: 120 },
  { Atributo: "Agilidade", Valor: 20 },
  { Atributo: "Defesa", Valor: 500 },
  { Atributo: "Elemento", Valor: "Terra" },
];

const quimera = [
  { Atributo: "Vida", Valor: 788 },
  { Atributo: "Ataque", Valor: 130 },
  { Atributo: "Agilidade", Valor: 100 },
  { Atributo: "Defesa", Valor: 70 },
  { Atributo: "Elemento", Valor: `Agua` },
];

const necromante = [
  { Atributo: "Vida", Valor: 5478 },
  { Atributo: "Ataque", Valor: 8750 },
  { Atributo: "Agilidade", Valor: 7555 },
  { Atributo: "Defesa", Valor: 2759 },
  { Atributo: "Elemento", Valor: "Darkness" },
];

///////////////// **************************************************** ///////////////////////

console.log(`\nCriando seu personagem: `);
tempo(2200);
console.log(`.`);
tempo(2200);
console.log(`.`);
tempo(2200);
console.log(`.\n`);
tempo(2200);

console.log(`Seu personagem foi criado:`);

tempo(2200);

//CONDIÇÃO QUE DETERMINA O STATUS DO PERSONAGEM DE ACORDO COM A IDADE.

if (idadePersonagem >= 9 && idadePersonagem < 18) {
  console.log(`\nSeu personagem ainda é novo. Vai precisar de bastante treino`);
  dadosPersonagem.vida = 100;
  dadosPersonagem.ataque = 10;
  dadosPersonagem.agilidade = 70;
  dadosPersonagem.defesa = 30;
} else if (idadePersonagem >= 18 && idadePersonagem <= 30) {
  console.log(
    `\nSeu personagem está em uma ótima forma, treine para aprimorar seus status.`
  );
  dadosPersonagem.vida = 140;
  dadosPersonagem.ataque = 35;
  dadosPersonagem.agilidade = 80;
  dadosPersonagem.defesa = 45;
} else if (idadePersonagem >= 31 && idadePersonagem <= 43) {
  console.log(
    `\nSeu personagem está no ápice da experiencia, combine experiencia e treino e torne-se um guerreiro formidável.`
  );
  dadosPersonagem.vida = 145;
  dadosPersonagem.ataque = 24;
  dadosPersonagem.agilidade = 60;
  dadosPersonagem.defesa = 44;
} else if (idadePersonagem >= 44 && idadePersonagem <= 70) {
  console.log(
    `\nSeu personagem é bem experiente, porém seu corpo já não responde como na sua juventude.`
  );
  dadosPersonagem.vida = 90;
  dadosPersonagem.ataque = 12;
  dadosPersonagem.agilidade = 30;
  dadosPersonagem.defesa = 140;
}

console.log(`
Nome: ${dadosPersonagem.nome}
Vida: ${dadosPersonagem.vida}\nAtaque: ${dadosPersonagem.ataque}
Agilidade: ${dadosPersonagem.agilidade}\nDefesa: ${dadosPersonagem.defesa}
Energia: ${dadosPersonagem.energia}
`);
tempo(5000);

//ENTRADA TEMPORAL DO JOGO.

for (i = 0; i < numeroDias; i++) {
  console.log(`${i + 1}º dia em Albion Flame. `);

  tempo(2200);

  //INICIO DA HISTORIA, JOGO E AS INTERAÇÕES COM O USUARIO.

  console.log(
    `\nTodo dia pela manhã, ${nomePersonagem} acorda cedo para treinar esgrima com seu professor, mas está um pouco desmotivado por algum motivo.
Ficou se questionando: \n`
  );

  let irTreinar = prompt(`Será que vou treinar hoje? `).toLowerCase();
  tempo(2200);
  irTreinar = validacao(irTreinar);
  console.clear();

  dadosPersonagem.aumentarStatus(irTreinar);
  dadosPersonagem.diminuirStatus(irTreinar);

  tempo(2200);

  // PRIMEIRA CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

  if (irTreinar === `sim` || irTreinar === `s`) {
    while (
      irTreinar === `sim` ||
      (irTreinar === `s` && dadosPersonagem.energia >= 1)
    ) {
      irTreinar = prompt(
        `Você pode continuar treinando se quiser, deseja continuar? `
      ).toLowerCase();
      irTreinar = validacao(irTreinar);
      console.clear();
      tempo(2200);
      dadosPersonagem.aumentarStatus(irTreinar);
    }
    tempo(2200);

    if (dadosPersonagem.energia >= 5) {
      console.log(
        `\nApós o treino, ${nomePersonagem} volou para casa pois precisava ajudar sua família.`
      );
      tempo();

      console.log(
        `\nSeu pai Thors já está com idade avançada e tem dificuldades em realizar as tarefas no pasto.\n`
      );

      tempo(2200);

      let ajudarPasto = prompt(`Deseja ajudar seu pai? `).toLowerCase();

      ajudarPasto = validacao(ajudarPasto);
      console.clear();
      tempo(2200);

      if (ajudarPasto === `s` || ajudarPasto === `sim`) {
        dadosPersonagem.energia -= 5;

        console.log(
          `\nSua família tem muitos animais e ajudar seu pai não foi uma tarefa muito fácil. Você acabou ficando um pouco cansado.\nIsto diminuiu sua energia para ${dadosPersonagem.energia}`
        );
        tempo(2200);

        console.log(`\nTrabalho concluído... é hora de voltar para casa.`);
        tempo(2200);

        console.log(
          `\nEnquanto arrumava suas coisas, ${nomePersonagem} avistou umas de suas ovelhas do rebanho sendo atacada por um lobo.\n${nomePersonagem} pegou sua espada e correu para salva-la.`
        );
        tempo(2200);

        console.log(
          `\nChegando mais perto ${nomePersonagem} conseguiu verificar os status do lobo e decidiu enfrenta-lo: \n`
        );
        tempo(2200);

        table(lobo);

        tempo(4000);

        //CONDIÇÃO PARA LUTA DO PERSONAGEM.

        if (
          lobo[0]["Valor"] < dadosPersonagem.ataque &&
          dadosPersonagem.energia != 0
        ) {
          console.log(
            `Foram necessárias ${Math.ceil(
              (lobo[0]["Valor"] + lobo[3]["Valor"]) /
                (dadosPersonagem.ataque + dadosPersonagem.agilidade)
            )} investidas para conseguir matar o lobo. A ovelha foi salva! `
          );
          dadosPersonagem.aumentarStatus();
        } else {
          console.log(
            `Você não estava forte o suficiente para enfrentar o lobo e a ovelha acabou morrendo.`
          );
        }
      } else {
        console.clear();
        console.log(
          `\nComo ${nomePersonagem} não estava em um bom dia...\nNão ajudar no pasto pode poupar energias para uma futura ocasião.`
        );
      }

      tempo(2200);

      console.log(
        `\nA manhã se foi e é hora de almoçar para repor suas energias que estão em '${dadosPersonagem.energia}'.\n`
      );
      console.log(`${nomePersonagem} precisa escolher o cardápio.\n`);

      dadosPersonagem.recuperarEnergia();

      console.clear();

      console.log(
        `\nApós a refeição, a energia de ${dadosPersonagem.nome} aumentou para: ${dadosPersonagem.energia}.\n`
      );
      tempo(2200);

      console.log(`Como era de costume, toda tarde ${nomePersonagem} saia para caçar em uma floresta ao sul de Lorência.
Porém, naquela tarde em especial ele sentiu algo diferente, semelhante de quando acordou. Se sentia um pouco mais forte e rápido.
Então se despediu de seu pai e ao se despedir de sua mãe, ela entregou a ele um amuleto para protege-lo durante a caçada.\n`);

      tempo(3000);

      //SEGUNDO CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

      console.log(
        `A floresta fica muito distante de sua casa, e você deve decidir entre pegar um atalho ou permanecer no caminho padrão.\n`
      );
      tempo(2200);

      let caminho = prompt(
        `É uma longa estrada até a floresta, deseja pegar um atalho? [OBS] O atalho é mais rápido, porém não tão seguro: `
      ).toLowerCase();

      console.clear();

      tempo(2200);
      if (dadosPersonagem.energia >= 10) {
        if (
          caminho === `sim` ||
          (caminho === `s` && dadosPersonagem.energia != 0)
        ) {
          dadosPersonagem.energia -= 10;

          console.log(
            `\nMesmo pegando um atalho, o trajeto foi difícil e ${nomePersonagem} perdendo energia.`
          );
          tempo(2200);

          console.log(
            `Seu novo valor de energia é '${dadosPersonagem.energia}'`
          );
          tempo(2200);

          console.log(
            `Enquanto passava pelo atalho, ${nomePersonagem} avistou de longe um Orc.\nChegando perto, o monstro o cercou. Impedindo ${nomePersonagem} de passar adiante ou recuar.`
          );
          tempo(2200);

          console.log(
            `Então, ${nomePersonagem} manteve distância e constatou os dados do Orc: `
          );
          tempo(2200);

          table(orc);

          tempo(3500);

          console.log(
            `\nComo não havia escapatória, a única opção de ${nomePersonagem} foi enfrentar o monstro. `
          );

          //CONDIÇÃO PARA LUTA DO PERSONAGEM

          if (dadosPersonagem.energia >= 10) {
            if (
              dadosPersonagem.ataque < orc[0]["Valor"] &&
              dadosPersonagem.energia != 0
            ) {
              console.log(
                `O Orc, que é muito superior em todos os atributos, começou a dar uma sequencia de golpes.\n${nomePersonagem} não vai conseguir derrota-lo assim...\n`
              );

              tempo(2200);

              console.log(
                `...até que quase sem forças, ${nomePersonagem} vê um brilho saindo de seu amuleto e uma voz que vinha de dentro do seu peito.\n`
              );
              tempo(2200);

              console.log(
                `De repente, aparece um espirito elementar em sua frente dizendo as seguintes palavras: \n`
              );

              tempo(2200);

              dadosPersonagem.poderElemental();

              tempo(2200);

              dadosPersonagem.energia -= 35;

              console.log(
                `\nAgora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
                  (orc[0]["Valor"] + orc[3]["Valor"]) /
                    (dadosPersonagem.ataque + dadosPersonagem.agilidade)
                )} investidas para eliminar e passar pelo Orc. E sua energia caiu para ${
                  dadosPersonagem.energia
                }`
              );

              tempo(2200);

              console.log(
                `\nDerrotar o Orc levou um bom tempo e o dia estava anoitecendo. Então, ${nomePersonagem} resolveu desistir da caçada e voltar para casa.`
              );
              console.log(
                `Agora que conquistou seu novo poder de invocação, ${nomePersonagem} terá de treinar ainda mais para aprimorar suas habilidades.\n`
              );

              tempo(2200);

              console.log(
                `Chegando em casa já pela noite e muito exausto pela batalha, ${nomePersonagem} decide comer algo... \n`
              );

              dadosPersonagem.recuperarEnergia();
              console.clear();

              console.log(
                `Com a ultima refeição, sua energia subiu para: ${dadosPersonagem.energia}\n`
              );
              console.log(
                `Depois de um dia longo ${nomePersonagem} precisa descansar.\n`
              );
            } else if (
              dadosPersonagem.ataque > orc[0]["Valor"] &&
              dadosPersonagem.energia != 0
            ) {
              if (dadosPersonagem.energia >= 35) {
                dadosPersonagem.energia -= 35;

                console.log(
                  `Você consegue derrotar o Orc fácilmente com seus atributos.`
                );

                console.log(
                  `Foram necessárias ${Math.ceil(
                    (orc[0]["Valor"] + orc[3]["Valor"]) /
                      (dadosPersonagem.ataque + dadosPersonagem.agilidade)
                  )} investidas para conseguir matar o Orc. E sua energia caiu para ${
                    dadosPersonagem.energia
                  }. `
                );
                dadosPersonagem.aumentarStatus();

                console.log(
                  `\nDerrotar o Orc levou um bom tempo e o dia estava anoitecendo. Então, ${nomePersonagem} resolveu desistir da caçada e voltar para casa.`
                );
                console.log(
                  `Agora que conquistou seu novo poder de invocação, ${nomePersonagem} terá de treinar ainda mais para aprimorar suas habilidades.\n`
                );

                tempo(2200);

                console.log(
                  `Chegando em casa já pela noite e muito exausto pela batalha, ${nomePersonagem} decide comer algo... `
                );
                tempo(2200);

                dadosPersonagem.recuperarEnergia();
                console.clear();

                console.log(
                  `Com a ultima refeição, sua energia subiu para: ${dadosPersonagem.energia}`
                );
                tempo(2200);
                console.log(
                  `Depois de um dia longo ${nomePersonagem} precisa descansar.`
                );
                tempo(4000);
              } else {
                console.log(
                  `${nomePersonagem} não conseguirá enfrentar o Orc `
                );
                semEnergia();
                tempo(4000);
              }
            }
          } else {
            console.log(`${nomePersonagem} não conseguirá enfrentar o Orc `);
            semEnergia();
            tempo(4000);
          }
        } else if (caminho === `nao` || caminho === `não` || caminho === `n`) {
          if (dadosPersonagem.energia >= 25) {
            dadosPersonagem.energia -= 25;

            console.log(
              `Como pegou o caminho mais longo ${nomePersonagem} acabou perdendo energia.\n\nEnergia atual: ${dadosPersonagem.energia}.\n`
            );
            tempo(2200);
            console.log(
              `Chegando na floresta, ${nomePersonagem} realizou sua caçada sem nenhum problema e acumulou suprimentos para levar para casa.\nEis que na volta, ${nomePersonagem} encontra um jovem pedindo ajuda.`
            );
            tempo(2200);
            console.log(
              `O jovem falou que a vila dele havia sido atacada por um dragão assustador, que estava acabando com as casas e também matando as pessoas.\n`
            );
            tempo(2200);

            let jovem = prompt(`Deseja ajudar o jovem? `).toLowerCase();
            jovem = validacao(jovem);
            console.clear();

            //TERCEIRA CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

            if (jovem === `sim` || jovem === `s`) {
              if (dadosPersonagem.energia >= 45) {
                dadosPersonagem.energia -= 45;

                console.log(
                  `\nA vila do jovem ficava próxima a Lorência.\nChegando lá, ${nomePersonagem} avistou o dragão e de longe conseguiu constatar seus atributos:`
                );
                tempo(2200);

                table(dragao);

                tempo(4000);

                console.log(
                  `Como os atributos do dragão eram muitos maiores que o de ${nomePersonagem}, ele decidiu voltar para sua vila e avisar aos moradores.`
                );
                tempo(2200);
                console.log(
                  `Essa viagem lhe cansou um pouco. Agora restam ${dadosPersonagem.energia} de energia. `
                );
                tempo(2200);
                console.log(
                  `\nAo chegar na sua vila, a mãe de ${nomePersonagem} lhe ensinou a invocar os espiritos. E assim ele fez.\n`
                );
                tempo(2200);

                dadosPersonagem.poderElemental();

                console.log(`\n${nomePersonagem} já não tinha muito tempo pois não tinha muito tempo, já que o dragão estava prestes a atacar a vila.
De repende enquanto treinava apareceu uma Quimera no sul da vila atacando os moradores e ${nomePersonagem} corre pra lá com sua espada para enfrenta-lá.
Chegando mais perto ele conseguiu ver os atributos da Quimera: `);
                tempo(2200);

                table(quimera);

                tempo(4000);

                console.log(
                  `Para enfrentar a quimera os atributos de ataque de ${nomePersonagem} tem que ser mais alto que o ataque e a agilidade da Quimera. `
                );

                tempo(2200);

                if (
                  dadosPersonagem.ataque >
                  quimera[1]["Valor"] + quimera[2]["Valor"]
                ) {
                  console.log(
                    `Com seu poder elemental ${nomePersonagem} preciso aplicar ${math.ceil(
                      quimera[0]["Valor"] / dadosPersonagem.ataque
                    )} para mater a quimera. `
                  );
                  tempo(2200);

                  console.log(
                    `Com a derrota da Quimera, Lorencia voltou a viver em paz por um tempo, o dragão tomou outro rumo e ${nomePersonagem}, continua treinando para o dia que ameaça aparecer.`
                  );
                  tempo(2200);
                } else if (
                  dadosPersonagem.ataque <
                  quimera[1]["Valor"] + quimera[2]["Valor"]
                ) {
                  console.log(
                    `${nomePersonagem} não consegue derrotar a Quimera com esses atributos atuais.`
                  );
                  tempo(2200);

                  console.log(
                    `Logo ápos ${nomePersonagem} avista o dragão chegando em sua vila. Agora com dois monstros atacando sua vila. O que fazer?\n
Sua mão o chama e fala pra ele pegar um velho pergaminho no porão de sua casa.\n`
                  );
                  tempo(2200);

                  let lerPergaminho = prompt(`Deseja ler o pergaminho? `);

                  lerPergaminho = validacao(lerPergaminho);
                  console.clear();

                  if (lerPergaminho === `sim` || lerPergaminho === `s`) {
                    console.log(`Ao abrir o pergaminho, ele lê algumas palavras estranhas e de repente um vento forte envolto dos elementos existentes.
${nomePersonagem} é jogado pra trás e se choca com a parede e aqueles elementos ficaram rodando na frente dele.`);

                    tempo(2200);

                    console.log(
                      `Os elementos o abençoaram, e deixaram ele escolher três dos elementos diferentes, ou potencializar o mesmo.\n`
                    );

                    tempo(2200);

                    for (i = 0; i <= 2; i++) {
                      dadosPersonagem.poderElementalFuria();
                    }

                    console.log(
                      `Agora, as condições para enfrentar os dois será o ataque e agilidade de ${nomePersonagem} contra todos os atributos somados do Dragão e da Quimera`
                    );
                    tempo(2200);

                    if (
                      dadosPersonagem.ataque + dadosPersonagem.agilidade >
                      dragao[1]["Valor"] + dragao[2]["Valor"]
                    ) {
                      console.log(
                        `O atributos de ${nomePersonagem} somados ficaram em: ${
                          dadosPersonagem.ataque + dadosPersonagem.agilidade
                        }\n`
                      );
                      tempo(2200);

                      console.log(
                        `Os atributos do Dragão e da Quimera ficaram: ${
                          dragao[0]["Valor"] +
                          dragao[1]["Valor"] +
                          dragao[2]["Valor"] +
                          dragao[3]["Valor"] +
                          quimera[0]["Valor"] +
                          quimera[1]["Valor"] +
                          quimera[2]["Valor"] +
                          quimera[3]["Valor"]
                        } `
                      );
                      tempo(2200);

                      console.log(
                        `Mesmo com os atributos superiores. ${nomePersonagem} teve muita dificuldades para derrotar os dois juntos, e precisou de ${
                          (dadosPersonagem.ataque + dadosPersonagem.agilidade) /
                          (dragao[0]["Valor"] +
                            dragao[1]["Valor"] +
                            dragao[2]["Valor"] +
                            dragao[3]["Valor"] +
                            quimera[0]["Valor"] +
                            quimera[1]["Valor"] +
                            quimera[2]["Valor"] +
                            quimera[3]["Valor"])
                        } envestidas para conseguir acabar com os dois.`
                      );
                      tempo(2200);

                      console.log(
                        `Depois da luta, ${nomePersonagem} ficou esgotado, e acabou desmaiando, porém, como grande herói...`
                      );
                      tempo(2200);
                    }
                  } else {
                    console.log(
                      `Com o ataque dos mostros, a vila não tinha ninguem que pudesse para-los, todos da vila se foram, enquanto ${nomePersonagem} estava no porão escondido.`
                    );
                    tempo(2200);
                    console.log(
                      `Quem sabe, ele decida se vingar pela sua vila outro dia...`
                    );
                    tempo(4000);
                  }
                }
              } else {
                semEnergia();
                tempo(4000);
              }
            } else if (jovem === `nao` || jovem === `não` || jovem === `n`) {
              tempo(2200);
              console.log(`\nChegando em Lorência,\n${nomePersonagem} fica espantado ao se deparar com um dragão atacando a vila.\nRapidamente ${nomePersonagem} saca sua espada, e corre para 
enfrentar o dragão. No entanto, os atributos do dragão eram muito maiores.\n`);

              tempo(2200);

              table(dragao);

              tempo(4000);

              let enfrentarDragao = prompt(
                `Deseja enfrentar o dragão mesmo assim? `
              ).toLowerCase();
              enfrentarDragao = validacao(enfrentarDragao);
              console.clear();
              if (
                enfrentarDragao === `sim` ||
                (enfrentarDragao === `s` && dadosPersonagem.energia != 0)
              ) {
                let resultadoLuta1 =
                  (dadosPersonagem.vida + dadosPersonagem.defesa) %
                  (dragao[1]["Valor"] + dragao[2]["Valor"]);
                let resultadoLuta2 =
                  (dragao[0]["Valor"] + dragao[3]["Valor"]) %
                  (dadosPersonagem.ataque + dadosPersonagem.agilidade);

                if (resultadoLuta1 > resultadoLuta2) {
                  console.log(
                    `\nO dragão é muito forte e está acabando com todas as forças de ${nomePersonagem}.\nPorém desistir não é uma opção! Caso o faça, sua vila acabara em ruinas...\n`
                  );

                  tempo(3000);
                  console.log(`Tutuh`);
                  tempo(3000);
                  console.log(`Tutuh`);
                  tempo(3000);
                  console.log(`Tutuh`);
                  tempo(3000);

                  console.log(
                    `Derepente, o amuleto de ${nomePersonagem} brilha mais uma vez... Porém desta vez o brilho esta mais forte e mais intenso.`
                  );
                  tempo(5000);

                  console.log(`Chame por um elemento...`);
                  tempo(5000);

                  console.log(
                    `${nomePersonagem} escuta uma voz de sorroco, mas não sabe de onde vem. É o seu pai sendo levado pelo dragão.`
                  );
                  tempo(2200);

                  console.log(`E ele grita: - Por favor, não! Por favor!!!`);
                  tempo(5000);

                  console.log(`Chame por um elemento...`);
                  tempo(5000);

                  console.log(
                    `Vendo toda aquela situação e sem saber o que fazer, mais uma vez ${nomePersonagem} escuta a mesma voz: `
                  );
                  tempo(3000);

                  dadosPersonagem.poderElementalFuria();

                  console.log(
                    `${nomePersonagem} recebeu um aumento enorme em seu poder elemental, dando a ele o que faltava derrotar o dragão. `
                  );

                  if (dadosPersonagem.energia <= 25) {
                    dadosPersonagem.energia -= 25;

                    console.log(
                      `Agora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
                        (dragao[0]["Valor"] + dragao[3]["Valor"]) /
                          (dadosPersonagem.ataque + dadosPersonagem.agilidade)
                      )} investidas para eliminar o dragao. E sua energia caiu para ${
                        dadosPersonagem.energia
                      }`
                    );
                    tempo(2200);

                    console.log(
                      `Após eliminar o dragão ${nomePersonagem} ficou esgotado. E todos da sua vila ficaram eufóricos e o ovacionaram pelo feito.`
                    );
                    tempo(2200);
                    console.log(
                      `A partir de agora, Lorência vive em paz no comando de ${nomePersonagem}!`
                    );
                    tempo(2200);
                  }
                  semEnergia();
                  tempo(4000);
                }
              } else {
                console.log(
                  `Não tendo chances, ${nomePersonagem} desistiu de enfrentar o dragão e fugiu da vila.\n`
                );
                tempo(2200);
                console.log(
                  `Infelizmente o ataque foi trágico e praticamente todos os moradores morreram.\nAgora, ${nomePersonagem} terá de refazer toda sua vida.\n`
                );
                tempo(4000);
              }
            }
          } else {
            semEnergia();
            tempo(3000);
          }
        }
      } else {
        console.log(`Impossivel seguir o caminho sem energia.\n`);
        semEnergia();
        tempo(3000);
      }
    } else {
      console.log(
        `${nomePersonagem} acabou treinando demais, decidiu descansar para recuperar as energias e continuar amanhã.\n`
      );
      semEnergia();
      tempo(3000);
    }
    tempo(3000);
  } else {
    tempo(2200);
    console.log(
      `Como ${nomePersonagem} não quis treinar, ele decidiu sair para explorar uma caverna ao sul da vila.`
    );
    tempo2200();
    console.log(
      `Por más línguas, lá vivia um Golem. Porém ninguém nunca havia o visto.`
    );
    tempo(2200);
    console.log(
      `Por não ter treinado, antes que saísse de casa sua mãe lhe abençoou com uma proteção e lhe deu um amuleto.\n`
    );
    tempo(2200);
    console.log(
      `Durante o caminho, ${nomePersonagem} passou pelo mar e ficou pensando em levar alguns suprimentos para casa.\n`
    );
    tempo(2200);

    let suprimentos = prompt(
      `Deseja pescar algo para levar pra casa? `
    ).toLowerCase();
    tempo(2200);
    suprimentos = validacao(suprimentos);
    console.clear();
    if (
      suprimentos == `sim` ||
      (suprimentos == `s` && dadosPersonagem.energia != 0)
    ) {
      dadosPersonagem.energia -= 30;

      console.log(
        `\n${nomePersonagem} é um ótimo pescador e conseguiu pegar alguns peixes.`
      );
      tempo(2200);
      console.log(
        `Porém isso levou a tarde toda e consumiu um pouco da sua energia, ficando com: ${dadosPersonagem.energia}`
      );
      tempo(2200);
      console.log(
        `\nEntão, ${nomePersonagem} guarda os suprimentos e segue seu caminho.\n`
      );
      tempo(2200);
    } else {
      dadosPersonagem.energia -= 15;
      console.log(
        `\n${nomePersonagem} decidiu seguir seu caminho e não se preocupar com suprimentos no momento.\n`
      );
    }

    console.log(
      `Chegando a caverna ${nomePersonagem} ficou apreensivo, pois não sabia o que havia dentro. Mesmo assim, ele decidiu entrar.`
    );
    tempo(2200);
    console.log(
      `Assim que entrou, ${nomePersonagem} percebeu um barulho enstranho e foi caminhando devagar em direção a ele.\nEis que avistou o tal Golem, que possuia os seguintes atributos: \n`
    );
    tempo(3500);

    table(golem);

    tempo(3500);

    console.log(
      `Como o Golem era muito forte, ${nomePersonagem} prefiriu não enfrenta-lo no momento e ir para casa.`
    );
    tempo(2200);
    console.log(
      `\nNo caminho de volta, ${nomePersonagem} encontrou um Elfo que ficou muito eufórico ao ver o amuleto que ele carregava.\n`
    );
    tempo(2200);

    // QUARTA CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

    let amuleto = prompt(
      `Deseja saber mais sobre esse amuleto que carrega? Perguntou o Elfo. `
    ).toLowerCase();
    amuleto = validacao(amuleto);
    console.clear();
    tempo(2200);
    if (amuleto == `sim` || amuleto == `s`) {
      console.log(
        `\nEntão o Elfo disse:\n- Esse amuleto foi forjado pelos elfos ancestrais, que colocaram nele os espiritos elementais da floresta.\n`
      );
      tempo(2200);
      console.log(`- Sendo eles: Fogo, Agua, Terra e Ar.\n`);

      tempo(2200);
      console.log(
        `- Se permitir, posso ativar os espiritos elementares do amuleto, fazendo você se fortalecer!\n`
      );
      tempo(2200);

      let ativarAmuleto = prompt(
        `Deseja ativar o amuleto para dominar os elementos? `
      ).toLowerCase();
      ativarAmuleto = validacao(ativarAmuleto);
      console.clear();
      tempo(2200);

      if (ativarAmuleto == `sim` || ativarAmuleto == `s`) {
        console.log(
          `\nO Elfo ativou o amuleto com um simples toque ele começou a brilhar. E então, dele saiu um espirito elemental. \n`
        );
        tempo(2200);

        dadosPersonagem.poderElemental();

        tempo(2200);
        console.log(
          `\nCom seu novo poder, e os atributos totalmente mudados. ${nomePersonagem} decide voltar para caverna para lidar com o Golem.\n`
        );
        tempo(2200);
        console.log(
          `Voltando a caverna, ${nomePersonagem} se depara novamente com o Golem e percebe que desta vez ele está acorrentado e sofrendo.\n`
        );
        console.log(
          `No entando, ${nomePersonagem} fica recioso em libertar ou não o monstro daquela situação.\n`
        );

        tempo(2200);

        let soltarGolem = prompt(
          `Soltar o Golem é uma boa opção? `
        ).toLowerCase();

        soltarGolem = validacao(soltarGolem);
        console.clear();

        if (
          soltarGolem == `sim` ||
          (soltarGolem == `s` && dadosPersonagem.energia != 0)
        ) {
          console.log(
            `\nO Golem que estava muito enfurecido e agora liberto, foi para cima de ${nomePersonagem}.\n`
          );
          tempo(2200);
          dadosPersonagem.energia -= 25;

          console.log(
            `O monstro lhe acerta um golpe que lhe tira 25 de energia. Restando apenas: ${dadosPersonagem.energia}\n`
          );
          tempo(2200);
          console.log(
            `Agora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
              (golem[0]["Valor"] + golem[3]["Valor"]) /
                (dadosPersonagem.ataque + dadosPersonagem.agilidade)
            )} investidas para eliminar o golem.\n`
          );
          tempo(2200);
          console.log(
            `A luta com o Golem deixou ${nomePersonagem} cansado, achou melhor voltar para casa e descansar. Amanhã será um dia melhor...\n\n`
          );
        } else {
          console.log(
            `${nomePersonagem} não gostou do que viu e resolver voltar para casa... frustrado e na esperança de chegar a tempo para janta.\n`
          );
          tempo(2200);
          dadosPersonagem.recuperarEnergia();
          console.clear();

          console.log(
            `Após a janta, ${nomePersonagem} não se sentiu bem e quis ficar em seu quarto para descansar.\n Nada como um dia após o outro...\n`
          );
          tempo(3000);
        }
      } else {
        console.log(
          `Não tinha muito o que fazer, voltou para casa porém pensando muito no que o Elfo tinha falado pra ele.\nTalvez amanhã ${nomePersonagem} volte e queira ativar o amuleto...\n`
        );
        tempo(3000);
      }
    } else {
      console.log(
        `${nomePersonagem} não deu bola ao Elfo, e foi direto para casa afim de chegar a tempo para a janta.\n`
      );
      tempo(3000);

      dadosPersonagem.recuperarEnergia();
      console.clear();

      console.log(
        `\nEnquanto ${nomePersonagem} se praparava para dormir, da janela veiop um estrondo muito alto. Então ele foi correndo ver o que era.\n`
      );
      tempo(2200);
      console.log(
        `Ao sair de casa, ele se deparou com uma forte chama que alastrava por toda vila.\n`
      );
      tempo(2200);
      console.log(
        `E olhando adiante, ${nomePersonagem} conseguiu ver um mago Necromante e seu exercito de zumbis.\n`
      );
      tempo(2200);
      console.log(
        `Eis que ${nomePersonagem} corre para pegar sua espada e ao voltar, seu pai já está no centro da vila enfrentando o Necromante.\n`
      );
      tempo(2200);
      console.log(
        `Infelizmente, seu pai que é uma pessoa de idade, acabou sofrendo um encanto do Necromante e morrendo.\n`
      );
      tempo(2200);
      console.log(
        `Vendo isto, ${nomePersonagem} ficou parado sem saber o que fazer.\n`
      );

      tempo(5500);
      console.log(`grugh`);

      tempo(5500);
      console.log(`grugh\n`);

      tempo(4000);
      console.log(
        `Ainda imovel, ${nomePersonagem} percebe que seu pai está se levantando como um zumbi.\n`
      );
      tempo(2200);
      console.log(
        `Ao ver isso ${nomePersonagem} se enfurece ainda mais e tem o seguinte pensamento: \n`
      );
      tempo(2200);

      let enfrentarNecro = prompt(
        `- Será que devo enfrentar esse Necromante? `
      );

      enfrentarNecro = validacao(enfrentarNecro);
      console.clear();
      dadosPersonagem.energia -= 40;

      if (
        enfrentarNecro == `sim` ||
        (enfrentarNecro == `s` && dadosPersonagem.energia != 0)
      ) {
        console.log(
          `\n${nomePersonagem} corre com todas as forças em direção ao Necromante e seu exercito de zumbis e começa uma grande luta.\n`
        );
        tempo(2200);
        console.log(
          `\nA batalha é intensa. Inimigos vinham de todos os lados...\n`
        );
        tempo(2200);
        console.log(
          `\b...até que ${nomePersonagem} não aguenta lidar com tantos inimigos e começa a perder suas forças.\n`
        );
        tempo(2200);
        console.log(
          `\nPrestes a ser derrotado, ${nomePersonagem} se lamenta e pensa: \n`
        );
        tempo(2200);
        console.log(
          `\n- Devia ter treinado mais... Meu pai não teria morrido, minha vila não teria sido destruida, e eu não estaria aqui prestes a morrer... \n`
        );

        tempo(5500);
        console.log(`Chame por um elemento.\n`);

        tempo(5500);
        console.log(
          `${nomePersonagem} escuta uma voz ao fundo, mas não sabe de onde vem. Até que de longe, avista um dos zumbis do Necromante indo atacar sua mãe.\n`
        );
        tempo(5500);
        console.log(`E ele grita: - Por favor, não! Por favor!!!\n`);

        tempo(5500);
        console.log(`Chame por um elemento.\n`);

        tempo(5500);
        console.log(
          `Vendo toda aquela situação e sem saber o que fazer, mais uma vez ${nomePersonagem} escuta a mesma voz: \n`
        );
        tempo();

        dadosPersonagem.poderElementalFuria();

        tempo(2200);

        console.log(
          `\nMais uma vez ${nomePersonagem} vai para cima do Necromante.\n`
        );
        tempo(2200);
        console.log(
          `Porém, com seu novo poder a luta é muito mais disputada, e ${nomePersonagem} desfere ${Math.ceil(
            (necromante[0]["Valor"] + necromante[3]["Valor"]) /
              (dadosPersonagem.ataque + dadosPersonagem.agilidade)
          )} golpes, suficientes para matar-lo.\n`
        );
        tempo(2200);
        console.log(
          `Ao final, ${nomePersonagem} acaba desmaiando de tanto esforço... no entanto ficou feliz por salvar sua mãe e a vila.\n`
        );
        tempo(3500);
      } else {
        console.log(
          `${nomePersonagem} não quis enfrentar o Necromante e fuigiu. Infelizmente sua vila foi compeltamente destruida.\nAmanhã talvez seja um dia melhor...\n`
        );
        tempo(2200);
      }
    }
  }
  dadosPersonagem.energia += 100;

  tempo(2200);
  console.log(`Carregando outro dia.`);
  tempo(2200);
  console.log(`.`);
  tempo(2200);
  console.log(`..`);
  tempo(2200);
  console.log(`...\n`);
  tempo(2200);
}

console.log(
  `Obrigado por jogar ALbion Flame. Projeto feito por João, Elieldo e Thiago.`
);
