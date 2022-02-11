const prompt = require("prompt-sync")();
const { Console } = require("console");
const { Transform } = require("stream");

console.log(
  `Em um reino distante, chamado Albion Flame, havia uma vila que era muito abençoada, com terra fértil, água fresca, e muita mata, e chamada Lorencia.
Albion Flame é um reino mágico cheio de criaturas e varios caminhos para ser explorado.\n`
);

// PRINCIPAIS VARIAVEIS E OBJETOs DOs STATUS DOS PERSONAGENS DA HISTORIA

const nomePersonagem = prompt(`Digite o nome do personagem da história: `);
let idadePersonagem;
while (true) {
  idadePersonagem = +prompt(`Digite a idade do seu personagem: `);
  if (
    !isNaN(idadePersonagem) &&
    idadePersonagem > 0 &&
    idadePersonagem % 1 == 0 &&
    idadePersonagem.length != 0
  ) {
    break;
  }
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
}

// OBJETO PRINCIPAL COM TODAS AS VARIAÇÕES DE STATUS DO PERSONAGEM.

const dadosPersonagem = {
  nome: nomePersonagem,
  idade: idadePersonagem,
  vida: 100,
  ataque: 10,
  agilidade: 70,
  defesa: 30,
  energia: 100,

  aumentarStatus: function (status) {
    if (status === `s` || status === `sim` || status) {
      this.ataque += 15;
      this.vida += 15;
      this.agilidade += 11;
      this.defesa += 9;
      this.energia -= 5;
      console.log(
        `\nSeus status aumentaram para:\nVida: ${this.vida}\nAtaque: ${this.ataque}\nAgilidade: ${this.agilidade}\nDefesa: ${this.defesa}\nEnergia: ${this.energia}`
      );
    }
  },

  diminuirStatus: function (status) {
    if (status === `n` || status === `nao` || !status) {
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
      console.log(`O elemento fogo é focado no ataque. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+70)\nAtaque: ${this.ataque} (+150)\nAgilidade: ${this.agilidade} (+84)\nDefesa${this.defesa} (+50)`);
    } else if (elementoEscolhido === `agua`) {
      this.vida += 150;
      this.ataque += 53;
      this.agilidade += 50;
      this.defesa += 88;
      console.log(`O elemento agua é focado na vida. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+150)\nAtaque: ${this.ataque} (+53)\nAgilidade: ${this.agilidade}(+50)\nDefesa: ${this.defesa} (+88)`);
    } else if (elementoEscolhido === `terra`) {
      this.vida += 87;
      this.ataque += 45;
      this.agilidade += 50;
      this.defesa += 150;
      console.log(`O elemento terra é focado na defesa. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+87)\nAtaque: ${this.ataque} (+45)\nAgilidade: ${this.agilidade} (+50)\nDefesa: ${this.defesa} (+150)`);
    } else if (elementoEscolhido === `ar`) {
      this.vida += 50;
      this.ataque += 80;
      this.agilidade += 150;
      this.defesa += 45;
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
      this.vida += 4899;
      this.ataque += 12450;
      this.agilidade += 8754;
      this.defesa += 4205;
      console.log(`Desceu um bola de fogo do alto e envolveu ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+4899)\nAtaque: ${this.ataque} (+12450)
  Agilidade: ${this.agilidade} (+8754)\nDefesa${this.defesa} (+4205)`);
    } else if (elementoEscolhido === `AGUA`) {
      this.vida += 12450;
      this.ataque += 4899;
      this.agilidade += 4205;
      this.defesa += 8754;
      console.log(`A chuva aumentou dratiscamente cercando ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+12450)\nAtaque: ${this.ataque} (+4899)
  Agilidade: ${this.agilidade}(+4205)\nDefesa: ${this.defesa} (+8754)`);
    } else if (elementoEscolhido === `TERRA`) {
      this.vida += 8754;
      this.ataque += 4205;
      this.agilidade += 4899;
      this.defesa += 12450;
      console.log(`A terra começou a se agitar em volta de ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+8754)\nAtaque: ${this.ataque} (+4205)
  Agilidade: ${this.agilidade} (+4899)\nDefesa: ${this.defesa} (+12450)`);
    } else if (elementoEscolhido === `AR`) {
      this.vida += 4899;
      this.ataque += 8754;
      this.agilidade += 12450;
      this.defesa += 4205;
      console.log(`Um furacão se formou em volta de ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+4899)\nAtaque: ${this.ataque} (+8754)
  Agilidade: ${this.agilidade} (+12450)\nDefesa: ${this.defesa} (+4205)`);
    }
  },

  recuperarEnergia: function () {
    const cardapio = [
      ["Arroz", 9],
      ["Feijao", 9],
      ["Carne de boi", 15],
      ["Carne de frango", 13],
      ["Verduras", 7],
      ["Legumes", 8],
      ["Salada", 6],
    ];

    for (const comida of cardapio) {
      let escolhaComida = prompt(
        `Quer adicionar ${comida[0]} no seu prato? `
      ).toLowerCase();
      validacao(escolhaComida);
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
  { Atributo: "Vida", Valor: 1540 },
  { Atributo: "Ataque", Valor: 2850 },
  { Atributo: "Agilidade", Valor: 1985 },
  { Atributo: "Defesa", Valor: 1644 },
  { Atributo: "Elemento", Valor: "Darkness" },
];

// ARROW FUNCTION PARA PAUSAR TEMPO DE EXECUÇÃO

const tempo = (ms) => {
  let contar = new Date().getTime();
  for (let i = 0; i < 5e6; i++) {
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

const validacao = (x) => {
  while (x != `sim` && x != `s` && x != `nao` && x != `não` && x != `n`) {
    x = prompt(`Digite somente "sim" ou "não".`);
  }
};

///////////////// **************************************************** ///////////////////////

console.log(`Criando seu personagem: `);
tempo();
console.log(`.`);
tempo();
console.log(`.`);
tempo();
console.log(`.\n`);
tempo();

console.log(
  `Seu personagem foi criado:
Nome: ${dadosPersonagem.nome}
Vida: ${dadosPersonagem.vida}\nAtaque: ${dadosPersonagem.ataque}
Agilidade: ${dadosPersonagem.agilidade}\nDefesa: ${dadosPersonagem.defesa}
Energia: ${dadosPersonagem.energia}
`
);
tempo();

//ENTRADA E VALIDAÇÃO TEMPORAL DO JOGO.

while (true) {
  if (
    !isNaN(numeroDias) &&
    numeroDias > 0 &&
    numeroDias % 1 === 0 &&
    numeroDias.length != 0
  ) {
    break;
  }
}

for (i = 0; i < numeroDias; i++) {
  console.log(`${i + 1}º dia em Albion Flame. `);
  tempo();

  //INICIO DA HISTORIA, JOGO E AS INTERAÇÕES COM O USUARIO.

  console.log(
    `\nTodo dia pela manhã, ${nomePersonagem} acorda cedo para treinar esgrima com seu professor, mas está um pouco desmotivado por algum motivo.
Ficou se questionando: \n`
  );
  tempo();

  let irTreinar = prompt(`Será que vou treinar hoje? `).toLowerCase();
  tempo();
  dadosPersonagem.aumentarStatus(irTreinar);
  dadosPersonagem.diminuirStatus(irTreinar);
  validacao(irTreinar);
  tempo();

  // PRIMEIRA CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

  if (irTreinar === `sim` || irTreinar === `s`) {
    while (irTreinar === `sim` || irTreinar === `s`) {
      irTreinar = prompt(
        `Você pode continuar treinando se quiser, deseja continuar? `
      ).toLowerCase();

      tempo();

      dadosPersonagem.aumentarStatus(irTreinar);
    }
    tempo();

    console.log(
      `\nLogo apos o treino, ainda de manhã, voltou para casa e logo em seguida foi ajudar no pasto da familia.\n`
    );

    tempo();

    const ajudarPasto = prompt(
      `Seu pai Thors, ja está com idade avançada e precisa de ajuda. Deseja ajudar seu pai? `
    ).toLowerCase();

    tempo();

    if (ajudarPasto === `s` || ajudarPasto === `sim`) {
      dadosPersonagem.energia -= 5;
      console.log(
        `\nPor ter ajudado seu pai a alimentar todo os animais e cuidar do pasto ficou um pouco cansado diminuindo sua energia para ${dadosPersonagem.energia}`
      );

      tempo();

      console.log(`\nEnquanto se arrumava para voltar pra casa, ${nomePersonagem} avistou umas de suas ovelhas do rebanho sendo atacada por um lobo.
${nomePersonagem} pegou sua espada e correu para ajuda-lá.`);

      tempo();

      console.log(
        `\nChegando mais perto ${nomePersonagem} conseguiu verificar os status do lobo e decidiu enfrenta-lo: \n`
      );

      tempo();

      table(lobo);

      tempo();

      //CONDIÇÃO PARA PRIMEIRA LUTA DO PERSONAGEM.

      if (
        lobo[0]["Valor"] < dadosPersonagem.ataque &&
        dadosPersonagem.energia != 0
      ) {
        console.log(
          `Foram necessárias ${Math.ceil(
            (lobo[0]["Valor"] + lobo[3]["Valor"]) /
              (dadosPersonagem.ataque + dadosPersonagem.agilidade)
          )} investidas para conseguir matar o lobo. `
        );
        dadosPersonagem.aumentarStatus();
      } else {
        console.log(
          `Você não conseguiu ajudar a ovelha, e o lobo acabou matando ela.`
        );
      }
    } else if (
      ajudarPasto === `n` ||
      ajudarPasto === `nao` ||
      ajudarPasto === `não`
    ) {
      console.log(
        `\nRealmente ${nomePersonagem} não estava em um bom dia. Ficou a manhã toda na cama.`
      );
    }
    tempo();

    console.log(
      `\nJa no horário do almoço ${dadosPersonagem.nome} voltou para casa para comer, para poder assim, recuperar as energias.\n`
    );

    dadosPersonagem.recuperarEnergia();

    console.log(
      `\nEnergia atual de ${dadosPersonagem.nome}: ${dadosPersonagem.energia}.\n`
    );
    tempo();

    console.log(`Como era de costume, toda tarde ${nomePersonagem} saia para caçar em uma floresta ao sul de Lorencia. 
Porém, naquela tarde em especial havia algo diferente igual quando acordou, ele se sentia um pouco mais forte, mais rapido. E assim se despediu 
de seu pai, e quando foi se despedir de sua mãe, ela entregou um amuleto para ele, e saiu para caçar. \n`);

    tempo();

    //SEGUNDO CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

    const caminho = prompt(
      `É uma longa estrada até a floresta, deseja pegar um atalho? [OBS] O atalho é mais rápido, porém não tão seguro: `
    ).toLowerCase();

    validacao(caminho);

    tempo();

    if (caminho === `sim` || caminho === `s`) {
      dadosPersonagem.energia -= 10;
      console.log(`\n${nomePersonagem} acabou ficando com "${dadosPersonagem.energia}" de energia por ter que andar o caminho todo mesmo sendo o atalho.
Mesmo sabendo que era perigoso e decidiu ir pelo atalho assim mesmo. ${nomePersonagem} acabou dando de frente com um Orc, que não deixou que passasse ou recuasse.`);

      table(orc);

      if (
        dadosPersonagem.ataque < orc[0]["Valor"] &&
        dadosPersonagem.energia != 0
      ) {
        console.log(
          `O orc é muito superior em todos os atributos, ${nomePersonagem} não vai conseguir derrota-lo assim.\n`
        );

        tempo();

        console.log(`Já quase sem forças ${nomePersonagem} vê um brilho de seu amuleto e uma voz que vinha de dentro do seu peito.
Aparece um espirito elementar em sua frente e pergunta para ${nomePersonagem}: \n`);

        tempo();

        dadosPersonagem.poderElemental();

        tempo();

        dadosPersonagem.energia -= 35;
        console.log(
          `\nAgora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
            (orc[0]["Valor"] + orc[3]["Valor"]) /
              (dadosPersonagem.ataque + dadosPersonagem.agilidade)
          )} investidas para eliminar e passar pelo Orc. E sua energia caiu para ${
            dadosPersonagem.energia
          }`
        );

        tempo();

        console.log(`\nCom a derrota do Orc ${nomePersonagem} decidiu voltar para casa quase anoitecendo, enquanto todos estavam preocupados.
Com seu novo poder de invocação, terá que treinar mais para aprimorar suas habilidades.\n`);

        tempo();

        console.log(
          `Chegando em casa já pela noite, muito exausto. ${nomePersonagem} decide comer algo.\n`
        );

        dadosPersonagem.recuperarEnergia();

        console.log(`Energia: ${dadosPersonagem.energia}`);

        console.log(
          `Depois de um dia longo ${nomePersonagem} precisa descansar.`
        );
      } else if (
        dadosPersonagem.ataque > orc[0]["Valor"] &&
        dadosPersonagem.energia != 0
      ) {
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
      }
    } else if (caminho === `nao` || caminho === `não` || caminho === `n`) {
      dadosPersonagem.energia -= 25;

      console.log(
        `\nComo pegou o caminho mais longo ${nomePersonagem} acabou perdendo energia.\nEnergia atual: ${dadosPersonagem.energia}.\n`
      );

      console.log(`\nChegando na floresta, ${nomePersonagem} começou sua caçada, que foi tranquila, e conseguiu levar alguns suprimentos para casa.
No meio do caminho ele encontra um jovem pedindo ajuda.\n`);

      let jovem = prompt(`Deseja ajudar o jovem? `).toLowerCase();

      validacao(jovem);

      //TERCEIRA CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

      if (jovem === `sim` || jovem === `s`) {
        console.log(
          `O jovem falou que a vila dele havia sido atacada por um dragão assustador, e estava acabando com as casas e matando as pessoas da vila.\n`
        );

        dadosPersonagem.energia -= 45;

        console.log(`Chegando na vila do jovem, que era do lado de Lorencia. ${nomePersonagem} avistou o dragão, porém os atributos do dragão eram muitos superiores
ao dele então decidiu voltar para sua vila Lorencia para avisar os moradores. Acabou ficando com ${dadosPersonagem.energia} da energia por causa do longo caminho. 
E ficou espantado com os atributos do dragão: `);

        table(dragao);

        console.log(
          `Ao chegar na sua vila, a mãe de ${nomePersonagem} lhe ensinou a invocar os espiritos. E assim ele fez.`
        );

        dadosPersonagem.poderElemental();

        console.log(`${nomePersonagem} já não tinha muito tempo pois não tinha muito tempo, já que o dragão estava prestes a atacar a vila.
De repende enquanto treinava apareceu uma Quimera no sul da vila atacando os moradores e ${nomePersonagem} corre pra lá com sua espada para enfrenta-lá.
Chegando mais perto ele conseguiu ver os atributos da Quimera: `);

        table(quimera);

        console.log(
          `Para enfrentar a quimera os atributos de ataque de ${nomePersonagem} tem que ser mais alto que o ataque e a agilidade da Quimera. `
        );

        if (
          dadosPersonagem.ataque >
          quimera[1]["Valor"] + quimera[2]["Valor"]
        ) {
          console.log(
            `Com seu poder elemental ${nomePersonagem} preciso aplicar ${
              quimera[0]["Valor"] / dadosPersonagem.ataque
            } para mater a quimera. `
          );

          console.log(
            `Com a derrota da Quimera, Lorencia voltou a viver em paz por um tempo, o dragão tomou outro rumo e ${nomePersonagem}, continua treinando para o dia que ameaça aparecer.`
          );
        } else if (
          dadosPersonagem.ataque <
          quimera[1]["Valor"] + quimera[2]["Valor"]
        ) {
          console.log(
            `${nomePersonagem} não consegue derrotar a Quimera com esses atributos atuais.`
          );
          tempo();

          console.log(
            `Logo ápos ${nomePersonagem} avista o dragão chegando em sua vila. Agora com dois monstros atacando sua vila. O que fazer?\n
Sua mão o chama e fala pra ele pegar um velho pergaminho no porão de sua casa.\n`
          );

          const lerPergaminho = prompt(`Deseja ler o pergaminho? `);

          validacao(lerPergaminho);

          if (lerPergaminho === `sim` || lerPergaminho === `s`) {
            console.log(`Ao abrir o pergaminho, ele lê algumas palavras estranhas e de repente um vento forte envolto dos elementos existentes.
${nomePersonagem} é jogado pra trás e se choca com a parede e aqueles elementos ficaram rodando na frente dele.`);
            console.log(
              `Os elementos o abençoaram, e deixaram ele escolher três dos elementos diferentes, ou potencializar o mesmo. `
            );

            for (i = 0; i <= 3; i++) {
              dadosPersonagem.poderElementalFuria();
            }

            console.log(
              `Agora, as condições para enfrentar os dois será o ataque e agilidade de ${nomePersonagem} contra todos os atributos somados do Dragão e da Quimera`
            );
          }
        }
      } else if (jovem === `nao` || jovem === `não` || jovem === `n`) {
        tempo();
        console.log(`\n${nomePersonagem} fica espantado ao chegar em Lorencia, pois vê um dragão atacando sua vila. Rapidamente saca sua espada, e corre para 
enfrentar o dragão, porém, os atributos do dragão eram muito altos.\n`);

        console.table(dragao);

        let enfrentarDragao = prompt(
          `Vai mesmo enfrentar o dragão? `
        ).toLowerCase();
        validacao(enfrentarDragao);
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
              `\nO dragão é muito forte, está acabando com todas as forças que ${nomePersonagem} tem. Mas não pode desistir, sua vila vai acabar em ruinas...\n`
            );

            tempo();
            console.log(`Tutuh`);
            tempo();
            console.log(`Tutuh`);
            tempo();
            console.log(`Tutuh`);
            tempo();

            console.log(
              `${nomePersonagem} mais uma vez vê seu amuleto brilhar. Porém dessa vez um brilho mais forte e mais intenso.`
            );
            tempo();
            tempo();
            console.log(`Chame por um elemento.`);
            tempo();
            tempo();
            console.log(`${nomePersonagem} escuta de longe alguem falando, procura mas não acha. Vê seu pai sendo levado pelo dragão. 
E ele grita: - Por favor não! Por favor!`);
            tempo();
            tempo();
            console.log(`Chame por um elemento.`);
            tempo();
            console.log(
              `Vendo aquela situação sem saber o que fazer, mais uma vez escuta a mesma voz: `
            );

            dadosPersonagem.poderElementalFuria();

            console.log(
              `${nomePersonagem} recebeu um aumento enerme no seu poder elemental. Agora ele conseguirá derrotar o dragão. `
            );
            dadosPersonagem.energia -= 45;

            console.log(
              `Agora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
                (dragao[0]["Valor"] + dragao[3]["Valor"]) /
                  (dadosPersonagem.ataque + dadosPersonagem.agilidade)
              )} investidas para eliminar o dragao. E sua energia caiu para ${
                dadosPersonagem.energia
              }`
            );
            console.log(
              `Após eliminar o dragão ${nomePersonagem} ficou esgotado. E todos da sua vila parabenizaram ele pelo feito. 
Lorencia agora vive em paz no comando de ${nomePersonagem}.`
            );
          }
        } else if (
          enfrentarDragao == `nao` ||
          enfrentarDragao == `n` ||
          enfrentarDragao == `não`
        ) {
          console.log(`${nomePersonagem} fugiu da vila, muito ferido, porque está muito fraco para enfrentar o dragão. 
Praticamente todos os moradores da vila morreram. Agora ele vai ter que refazer toda sua vida.`);
        }
      }
    }

    tempo();
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

    if (
      suprimentos == `sim` ||
      (suprimentos == `s` && dadosPersonagem.energia != 0)
    ) {
      dadosPersonagem.energia -= 35;

      console.log(
        `${nomePersonagem} conseguiu pegar alguns peixes, porém levou a tarde toda e gastou um pouco da sua energia ficando com: ${dadosPersonagem.energia}`
      );
    } else if (
      suprimentos == `nao` ||
      suprimentos == `não` ||
      suprimentos == `n`
    ) {
      dadosPersonagem.energia -= 20;

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

    console.log(`Assustado. ${nomePersonagem} decide voltar para casa.`);

    console.log(
      `No caminho de volta pra casa ${nomePersonagem} encontra um Elfo que ficou muito elforico ao ver o amuleto que ${nomePersonagem} carregava.`
    );

    // QUARTA CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

    let amuleto = prompt(
      `Deseja saber mais sobre esse amuleto que você carrega? Perguntou o Elfo `
    ).toLowerCase();
    validacao(amuleto);
    if (amuleto == `sim` || amuleto == `s`) {
      console.log(
        `Esse amuleto foi forjado pelos elfos ancestrais, e colocaram nele os espiritos elementais da floresta.
Sendo eles: Fogo, Agua, Terra e Ar.`
      );
      console.log(
        `O elfo falou que poderia ativar os espiritos e fortalecer ${nomePersonagem}.`
      );

      let ativarAmuleto = prompt(
        `Deseja ativar o amuleto para dominar os elementos? `
      ).toLowerCase();
      validacao(ativarAmuleto);

      if (ativarAmuleto == `sim` || ativarAmuleto == `s`) {
        console.log(
          `O Elfo com um simples toque no amuleto o ativou e ele começou a brilhar. Onde saiu um espirito elemental. `
        );
        dadosPersonagem.poderElemental();

        console.log(
          `Com esse novo poder, e os atributos totalmente mudados. ${nomePersonagem} decide voltar para caverna para lidar com o golem.`
        );

        console.log(
          `Chegando na caverna novamente e chegando mais perto do golem, percebe que está acorrentado e e parecia estar sofrendo.
So que fica indagando se solta ou não o golem.`
        );

        let soltarGolem = prompt(`Soltar o golem? `).toLowerCase();

        validacao(soltarGolem);

        if (
          soltarGolem == `sim` ||
          (soltarGolem == `s` && dadosPersonagem.energia != 0)
        ) {
          console.log(
            `O golem foi solto e parte pra cima de ${nomePersonagem} sem constestar que sem querer, terá que lutar contra ele.`
          );
          dadosPersonagem.energia -= 25;
          console.log(
            `Agora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
              (golem[0]["Valor"] + golem[3]["Valor"]) /
                (dadosPersonagem.ataque + dadosPersonagem.agilidade)
            )} investidas para eliminar o golem. E sua energia caiu para ${
              dadosPersonagem.energia
            }`
          );
        } else if (
          soltarGolem == `nao` ||
          soltarGolem == `não` ||
          soltarGolem == `n`
        ) {
          console.log(
            `${nomePersonagem} viu o golem e não o que esperava, voltou para casa frustrado ainda em horário da janta.`
          );
          dadosPersonagem.recuperarEnergia();

          console.log(`Após a janta, simplesmente quis ficar em sem quarto e descansar, esse dia não foi muito bom para ${nomePersonagem}. 
Quem sabe amanhã melhore...`);
        }
      }
    } else if (amuleto == `nao` || amuleto == `não` || amuleto == `n`) {
      console.log(
        `${nomePersonagem} seguiu em frente sem dar bola pro Elfo, chegando em casa para chegar na hora da janta.\n`
      );

      dadosPersonagem.recuperarEnergia();

      console.log(`Quando ${nomePersonagem} se praparava para dormir, escuta um estrondo muito alto, e corre para ver o que é.
Ao chegar na porta vê um forte chama alastrando por toda sua vila, e ao fixar seu olhar, consegue ver um mago necromante e seus exercitos de zumbis.\n`);

      console.log(`Corre para pegar sua espada, e assim que volta seu pai já está no centro da vila enfrentando o necromante. Porém, seu pai já de idade, sofre 
um encanto do necromante e acaba morrendo.`);

      tempo();
      tempo();
      console.log(`grugh`);

      tempo();
      tempo();
      console.log(`grugh`);

      tempo();
      tempo();
      console.log(`${nomePersonagem} ainda imovel, percebe que seu pai está se levantando como um zumbi.\nAo ver isso
${nomePersonagem} se enfurece demais e pensa: `);

      let enfentrarNecro = prompt(`Será que devo enfrentar esse Necromante? `);
      validacao(enfentrarNecro);

      dadosPersonagem.energia -= 40;

      if (
        enfentrarNecro == `sim` ||
        (enfentrarNecro == `s` && dadosPersonagem.energia != 0)
      ) {
        console.log(
          `${nomePersonagem} corre em direção ao necromante sem pensar muito e o exercicito de zumbis que estava ao derredor atacam todos ao mesmo tempo. Ele ainda estava muito fraco.`
        );

        console.log(
          `Caido no chão, e começa chover, e ele pensa: - Podia ter treinado mais cedo... Meu pai não teria morrido, minha vila não teria sido destruida, e eu não estaria aqui prestes a morrer. `
        );
        tempo();
        tempo();
        console.log(`Chame por um elemento.`);
        tempo();
        tempo();
        console.log(`${nomePersonagem} escuta de longe alguem falando, procura mas não acha. Vê um de longe um dos zumbis do necromante indo atacar sua mãe. 
E ele grita: - Por favor não! Por favor!`);
        tempo();
        tempo();
        console.log(`Chame por um elemento.`);
        tempo();
        console.log(
          `Vendo aquela situação sem saber o que fazer, mais uma vez escuta a mesma voz: `
        );

        dadosPersonagem.poderElementalFuria();

        tempo();
        console.log(
          `${nomePersonagem} parte pra cima do necromante com todas as forças`
        );
        console.log(
          `Agora com seu novo poder ${nomePersonagem} parte pra cima do necromante e desfere ${Math.ceil(
            (necromante[0]["Valor"] + necromante[3]["Valor"]) /
              (dadosPersonagem.ataque + dadosPersonagem.agilidade)
          )} golpes, que foi o suficiente para matar o necromante.
        `
        );
        console.log(
          `${nomePersonagem} acaba desmaiando, porém, conseguiu salvar a vila.\n`
        );
      } else {
        console.log(
          `${nomePersonagem} ficou sem energia para enfrentar o necromante, infelizmente, a vila foi destruida. Amanhã talvez o dia seja melhor...`
        );
      }
    }
  }
  tempo();
  tempo();
  console.log(`Carregando outro dia.`);
  tempo();
  console.log(`.`);
  tempo();
  tempo();
  console.log(`..`);
  tempo();
  tempo();
  console.log(`...`);
}
