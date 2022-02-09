let prompt = require("prompt-sync")();

// PRINCIPAIS VARIAVEIS E OBJETOs DOs STATUS DOS PERSONAGENS DA HISTORIA

let nomePersonagem = prompt(`Digite o nome do personagem da história: `);
let idadePersonagem = prompt(`Digite a idade do seu personagem: `);
let elementoEscolhido;

const dadosPersonagem = {
  nome: nomePersonagem,
  idade: idadePersonagem,
  vida: 100,
  ataque: 10,
  agilidade: 70,
  defesa: 30,
  energia: 100,
};

const lobo = {
  vida: 25,
  ataque: 70,
  agilidade: 30,
  defesa: 30,
  elemento: `neutro`,
};

const orc = {
  vida: 150,
  ataque: 130,
  defesa: 100,
  agilidade: 70,
  elemento: `ar`,
};

const dragao = {
  vida: 550,
  ataque: 1350,
  defesa: 350,
  agilidade: 145,
  elemento: `fogo`,
};
const golem = {
  vida: 200,
  ataque: 120,
  agilidade: 20,
  defesa: 500,
};

// ARROW FUNCTION PARA PAUSAR TEMPO DE EXECUÇÃO

tempo = (ms) => {
  var contar = new Date().getTime();
  for (var i = 0; i < 3e6; i++) {
    if (new Date().getTime() - contar > ms) {
      break;
    }
  }
};

//ARROW FUNCTION PARA AUMENTAR/DIMINUIR O STATUS DO PERSONAGEM CONFORME ELE EVOLUI NA HISTORIA

aumentoStatus = (status) => {
  if (status == `s` || status == `sim` || status == true) {
    dadosPersonagem.ataque += 10;
    dadosPersonagem.vida += 10;
    dadosPersonagem.agilidade += 8;
    dadosPersonagem.defesa += 8;
    dadosPersonagem.energia -= 5;
    console.log(
      `\nSeus status aumentaram para:\nVida: ${dadosPersonagem.vida}\nAtaque: ${dadosPersonagem.ataque}\nAgilidade: ${dadosPersonagem.agilidade}\nDefesa: ${dadosPersonagem.defesa}
Energia: ${dadosPersonagem.energia}`
    );
    return dadosPersonagem.ataque;
    return dadosPersonagem.vida;
    return dadosPersonagem.agilidade;
    return dadosPersonagem.defesa;
    return dadosPersonagem.energia;
  }
};

diminuirStatus = (status) => {
  if (status == `n` || status == `nao` || status == false) {
    dadosPersonagem.ataque -= 10;
    dadosPersonagem.vida -= 10;
    dadosPersonagem.agilidade -= 8;
    dadosPersonagem.defesa -= 8;
    console.log(
      `\nSua vida diminiu para ${dadosPersonagem.vida}, ataque diminiu para ${dadosPersonagem.ataque}.\n`
    );
    return dadosPersonagem.vida;
    return dadosPersonagem.ataque;
    return dadosPersonagem.agilidade;
    return dadosPersonagem.defesa;
  }
};

poderElemental = () => {
  const elementos = ["fogo", "agua", "terra", "ar"];

  do {
    elementoEscolhido = prompt(
      `${nomePersonagem}, sou um espirito elementar da natureza, qual elemento você deseja invocar? ${elementos} `
    ).toLowerCase();
  } while (!elementos.includes(elementoEscolhido));

  console.log(`\nVOcê invocoou o elemento "${elementoEscolhido}".\n`);

  if (elementoEscolhido == `fogo`) {
    dadosPersonagem.vida += 70;
    dadosPersonagem.ataque += 150;
    dadosPersonagem.agilidade += 84;
    dadosPersonagem.defesa += 50;
    console.log(`O elemento fogo é focado no ataque. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+70)\nAtaque: ${dadosPersonagem.ataque} (+150)
Agilidade: ${dadosPersonagem.agilidade} (+84)\nDefesa${dadosPersonagem.defesa} (+50)`);
  } else if (elementoEscolhido == `agua`) {
    dadosPersonagem.vida += 150;
    dadosPersonagem.ataque += 53;
    dadosPersonagem.agilidade += 50;
    dadosPersonagem.defesa += 88;
    console.log(`O elemento agua é focado na vida. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+150)\nAtaque: ${dadosPersonagem.ataque} (+53)
Agilidade: ${dadosPersonagem.agilidade}(+50)\nDefesa: ${dadosPersonagem.defesa} (+88)`);
  } else if (elementoEscolhido == `terra`) {
    dadosPersonagem.vida += 87;
    dadosPersonagem.ataque += 45;
    dadosPersonagem.agilidade += 50;
    dadosPersonagem.defesa += 150;
    console.log(`O elemento terra é focado na defesa. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+87)\nAtaque: ${dadosPersonagem.ataque} (+45)
Agilidade: ${dadosPersonagem.agilidade} (+50)\nDefesa: ${dadosPersonagem.defesa} (+150)`);
  } else if (elementoEscolhido == `ar`) {
    dadosPersonagem.vida += 50;
    dadosPersonagem.ataque += 80;
    dadosPersonagem.agilidade += 150;
    dadosPersonagem.defesa += 45;
    console.log(`O elemento agua é focado na agilidade. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+50)\nAtaque: ${dadosPersonagem.ataque} (+80)
Agilidade: ${dadosPersonagem.agilidade} (+150)\nDefesa: ${dadosPersonagem.defesa} (+45)`);
  }
};

poderElementalFuria = () => {
  const elementos = ["fogo", "agua", "terra", "ar"];

  do {
    elementoEscolhido = prompt(
      `${nomePersonagem}, chame por um elemento: `
    ).toUpperCase();
  } while (!elementos.includes(elementoEscolhido));

  console.log(`\n${elementoEscolhido}!!! Gritou ${nomePersonagem}.\n`);

  if (elementoEscolhido == `fogo`) {
    dadosPersonagem.vida += 4899;
    dadosPersonagem.ataque += 12450;
    dadosPersonagem.agilidade += 8754;
    dadosPersonagem.defesa += 4205;
    console.log(`Desceu um bola de fogo do alto e envolveu ${nomePersonagem}. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+4899)\nAtaque: ${dadosPersonagem.ataque} (+12450)
Agilidade: ${dadosPersonagem.agilidade} (+8754)\nDefesa${dadosPersonagem.defesa} (+4205)`);
  } else if (elementoEscolhido == `agua`) {
    dadosPersonagem.vida += 12450;
    dadosPersonagem.ataque += 4899;
    dadosPersonagem.agilidade += 4205;
    dadosPersonagem.defesa += 8754;
    console.log(`A chuva aumentou dratiscamente cercando ${nomePersonagem}. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+12450)\nAtaque: ${dadosPersonagem.ataque} (+4899)
Agilidade: ${dadosPersonagem.agilidade}(+4205)\nDefesa: ${dadosPersonagem.defesa} (+8754)`);
  } else if (elementoEscolhido == `terra`) {
    dadosPersonagem.vida += 8754;
    dadosPersonagem.ataque += 4205;
    dadosPersonagem.agilidade += 4899;
    dadosPersonagem.defesa += 12450;
    console.log(`A terra começou a se agitar em volta de ${nomePersonagem}. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+8754)\nAtaque: ${dadosPersonagem.ataque} (+4205)
Agilidade: ${dadosPersonagem.agilidade} (+4899)\nDefesa: ${dadosPersonagem.defesa} (+12450)`);
  } else if (elementoEscolhido == `ar`) {
    dadosPersonagem.vida += 4899;
    dadosPersonagem.ataque += 8754;
    dadosPersonagem.agilidade += 12450;
    dadosPersonagem.defesa += 4205;
    console.log(`Um furacão se formou em volta de ${nomePersonagem}. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+4899)\nAtaque: ${dadosPersonagem.ataque} (+8754)
Agilidade: ${dadosPersonagem.agilidade} (+12450)\nDefesa: ${dadosPersonagem.defesa} (+4205)`);
  }
};

recuperarEnergia = () => {
  const cardapio = [
    ["arroz", 8],
    ["feijao", 10],
    ["carne de boi", 16],
    ["carne de frango", 13],
    ["verduras", 11],
    ["legumes", 9],
    ["salada", 6],
  ];

  for (let comida of cardapio) {
    let escolhaComida = prompt(`Deseja comer ${comida[0]}? `).toLowerCase();
    validacao(escolhaComida);
    if (escolhaComida == "sim" || escolhaComida == `s`) {
      dadosPersonagem.energia += comida[1];
    }
  }
};

//ARROW FUNCTION PARA VALIDAÇÃO DA RESPOSTA DO USUARIO

validacao = (x) => {
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
console.log(`.`);

console.log(
  `Seu personagem foi criado:
Nome: ${dadosPersonagem.nome}
Vida: ${dadosPersonagem.vida}\nAtaque: ${dadosPersonagem.ataque}
Agilidade: ${dadosPersonagem.agilidade}\nDefesa: ${dadosPersonagem.defesa}
Energia: ${dadosPersonagem.energia}
`
);
tempo();
tempo();
tempo();

//INICIO DA HISTORIA, JOGO E AS INTERAÇÕES COM O USUARIO.

console.log(
  `\nEm um reino distante, chamado Albion Flame, havia uma cidade que era muito abençoada, com terra fértil, água fresca, e muita mata, e chamada de Lorencia.
E nessa cidade vivia ${nomePersonagem}, um jovem aspirante a cavaleiro da cidade, muito orgulhoso e talentoso por sinal.`
);

console.log(
  `\nTodo dia pela manhã, ${nomePersonagem} acorda para treinar esgrima com seu professor, mas está um pouco desmotivado por algum motivo.\n`
);

// ONDE O PERSONAGEM VAI TOMAR O PRIMEIRO RUMO DA HISTORIA

let irTreinar = prompt(
  `${nomePersonagem}, deseja ir treinar hoje? `
).toLowerCase();
tempo();
aumentoStatus(irTreinar);
diminuirStatus(irTreinar);
validacao(irTreinar);
tempo();

// PRIMEIRA CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

if (irTreinar == `sim` || irTreinar == `s`) {
  while (irTreinar == `sim` || irTreinar == `s`) {
    irTreinar = prompt(
      `Você pode continuar treinando se quiser, deseja continuar? `
    ).toLowerCase();
    tempo();
    aumentoStatus(irTreinar);
  }
  console.log(
    `Logo apos o treino, ainda de manhã, voltou para casa e logo em seguida foi ajudar no pasto da familia.\n`
  );

  let ajudarPasto = prompt(
    `Seu pai Thors, ja está com idade avançada e precisa de ajuda. Deseja ajudar seu pai? `
  ).toLowerCase();

  if (ajudarPasto == `s` || ajudarPasto == `sim`) {
    dadosPersonagem.energia -= 5;
    console.log(
      `\nPor ter ajudado seu pai a alimentar todo os animais e cuidar do pasto ficou um pouco cansado diminuindo sua energia para ${dadosPersonagem.energia}`
    );
    tempo();

    // CONDIÇÃO PARA LUTA DO PERSONAGEM

    console.log(`\nEnquanto se arrumava para voltar pra casa, ${nomePersonagem} avistou umas de suas ovelhas do rebanho sendo atacada por um lobo.
        ${nomePersonagem} pegou sua espada e correu para ajuda-lá.`);
    tempo();
    console.log(
      `\nChegando mais perto ${nomePersonagem} conseguiu verificar os status do lobo e decidiu enfrenta-lo: \n`
    );
    tempo();
    console.log(`Ataque do lobo: ${lobo.ataque}\nVida do lobo: ${lobo.vida}`);

    let matarLobo;
    if (
      (matarLobo =
        dadosPersonagem.ataque > lobo.vida && dadosPersonagem.energia != 0)
    ) {
      console.log(
        `Foram necessárias ${Math.ceil(
          lobo.vida / dadosPersonagem.ataque
        )} investidas para conseguir matar o lobo. `
      );
      aumentoStatus(matarLobo);
    } else {
      console.log(
        `Você não conseguiu ajudar a ovelha, e o lobo acabou matando ela.`
      );
    }
  } else if (
    ajudarPasto == `n` ||
    ajudarPasto == `nao` ||
    ajudarPasto == `não`
  ) {
    console.log(`Realmente ${nomePersonagem} não estava em um bom dia.`);
  }

  console.log(
    `\nJa no horário do almoço ${dadosPersonagem.nome} voltou para casa para comer, para poder assim, recuperar as energias.\n`
  );

  recuperarEnergia();

  console.log(
    `\nEnergia atual de ${dadosPersonagem.nome}: ${dadosPersonagem.energia}.\n`
  );
  tempo();

  console.log(`Como era de costume, toda tarde ${nomePersonagem} saia para caçar em uma floresta ao sul de Lorencia. 
    Porém, naquela tarde em especial havia algo diferente igual quando acordou, ele se sentia um pouco mais forte, mais rapido. E assim se despediu 
    de seu pai, e quando foi se despedir de sua mãe, ela entregou um amuleto para ele, e saiu para caçar. \n`);

  tempo();

  //VALIDAÇÃO E CONDIÇÃO DEPENDENDO DO CAMINHO DO CAMINHO QUE O PERSONAGEM TOMAR.

  let caminho = prompt(
    `É uma longa estrada até a floresta, deseja pegar um atalho? [OBS] O atalho é mais rápido, porém não tão seguro: `
  ).toLowerCase();
  validacao(caminho);

  if (caminho == `sim` || caminho == `s`) {
    dadosPersonagem.energia -= 10;
    console.log(`\n${nomePersonagem} acabou ficando com "${dadosPersonagem.energia}" de energia por ter que andar o caminho todo mesmo sendo o atalho.
    Mesmo sabendo que era perigoso e decidiu ir pelo atalho assim mesmo. ${nomePersonagem} acabou dando de frente com um Orc, que não deixou que passasse ou recuasse.`);

    console.table(orc);

    console.log(
      `\nVida do Orc: ${orc.vida}\nAtaque do Orc: ${orc.ataque}\nElemento: ${orc.elemento}\n`
    );

    if (dadosPersonagem.ataque < orc.vida && dadosPersonagem.energia != 0) {
      console.log(
        `O orc é muito superior em todos os atributos, ${nomePersonagem} não vai conseguir derrota-lo assim.\n`
      );
      tempo();
      console.log(`Já quase sem forças ${nomePersonagem} vê um brilho de seu amuleto e uma voz que vinha de dentro do seu peito.\n
        Aparece um espirito elementar em sua frente e pergunta para ${nomePersonagem}: \n`);
      tempo();

      poderElemental();

      tempo();

      dadosPersonagem.energia -= 35;
      console.log(
        `Agora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
          (orc.vida + orc.defesa) /
            (dadosPersonagem.ataque + dadosPersonagem.agilidade)
        )} investidas para eliminar e passar pelo Orc. E sua energia caiu para ${
          dadosPersonagem.energia
        }`
      );

      tempo();

      console.log(`Com a derrota do Orc ${nomePersonagem} decidiu voltar para casa quase anoitecendo, enquanto todos estavam preocupados.
Com seu novo poder de invocação, terá que treinar mais para aprimorar suas habilidades.\n`);

      tempo();

      console.log(
        `Chegando em casa já pela noite, muito exausto. ${nomePersonagem} decide comer algo. `
      );

      recuperarEnergia();

      console.log(`Energia: ${dadosPersonagem.energia}`);

      console.log(
        `Depois de um dia longo ${nomePersonagem} precisa descansar.`
      );
    } else if (
      dadosPersonagem.ataque > orc.vida &&
      dadosPersonagem.energia != 0
    ) {
      dadosPersonagem.energia -= 35;
      console.log(
        `Foram necessárias ${Math.ceil(
          (orc.vida + orc.defesa) /
            (dadosPersonagem.ataque + dadosPersonagem.agilidade)
        )} investidas para conseguir matar o Orc. E sua energia caiu para ${
          dadosPersonagem.energia
        }. `
      );
      aumentoStatus(matarOrc);
    }
  } else if (caminho == `nao` || caminho == `não` || caminho == `n`) {
    dadosPersonagem.energia -= 25;
    console.log(
      `Como pegou o caminho mais longo ${nomePersonagem} acabou perdendo energia.\nEnergia atual: ${dadosPersonagem.energia}.\n`
    );
    console.log(`Chegando na floresta, ${nomePersonagem} começou sua caçada, que foi tranquila, e conseguiu levar alguns suprimentos para casa.
    No meio do caminho ele encontra um jovem pedindo ajuda.`);

    let jovem = prompt(`Deseja ajudar o jovem? `).toLowerCase();
    validacao(jovem);

    if (jovem == `sim` || jovem == `s`) {
      console.log(
        `O jovem falou que a vila dele havia sido atacada por um dragão assustador, e estava acabando com as casas e matando as pessoas da vila.\n`
      );

      dadosPersonagem.energia -= 20;

      console.log(`Chegando na vila do jovem, que era do lado de Lorencia. ${nomePersonagem} avistou o dragão, porém os atributos do dragão eram muitos superiores
    ao dele então decidiu voltar para sua vila Lorencia para avisar os moradores. Acabou ficando com ${dadosPersonagem.energia} da energia. E ficou espantado com os atributos do dragão: `);

      console.table(dragao);

      console.log(
        `Ao chegar na sua vila, a mãe de ${nomePersonagem} lhe ensinou a invocar os espiritos. E assim ele fez.`
      );
      // PRECISO CONTINUAR A HISTORIA AQUI
      poderElemental();
    } else if (jovem == `nao` || jovem == `não` || jovem == `n`) {
      console.log(`${nomePersonagem} fica espantado ao chegar em Lorencia, pois vê um dragão atacando sua vila. Rapidamente saca sua espada, e corre para 
enfrentar o dragão, porém, os atributos do dragão eram muito altos`);
      console.table(dragao);

      let enfrentarDragao = prompt(
        `Vai mesmo enfrentar o dragão? `
      ).toLowerCase();
      validacao(enfrentarDragao);
      if (enfrentarDragao == `sim` || enfrentarDragao == `s`) {
        let resultadoLuta1 =
          (dadosPersonagem.vida + dadosPersonagem.defesa) %
          (dragao.ataque + dragao.agilidade);
        let resultadoLuta2 =
          (dragao.vida + dragao.defesa) %
          (dadosPersonagem.ataque + dadosPersonagem.agilidade);
        if (resultadoLuta1 > resultadoLuta2) {
          console.log(
            `O dragão é muito forte, está acabando com todas as forças que ${nomePersonagem} tem. Mas não pode desistir, sua vila vai acabar em ruinas...`
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
          poderElementalFuria();

          console.log(
            `${nomePersonagem} recebeu um aumento enerme no seu poder elemental. Agora ele conseguirá derrotar o dragão. `
          );
          dadosPersonagem.energia -= 45;
          console.log(
            `Agora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
              (dragao.vida + dragao.defesa) /
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
  if (suprimentos == `sim` || suprimentos == `s`) {
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
      poderElemental();

      console.log(
        `Com esse novo poder, e os atributos totalmente mudados. ${nomePersonagem} decide voltar para caverna para lidar com o golem.`
      );

      console.log(
        `Chegando na caverna novamente e chegando mais perto do golem, percebe que está acorrentado e e parecia estar sofrendo.
So que fica indagando se solta ou não o golem.`
      );

      let soltarGolem = prompt(`Soltar o golem? `).toLowerCase();
      validacao(soltarGolem);

      if (soltarGolem == `sim` || soltarGolem == `s`) {
        console.log(
          `O golem foi solto e parte pra cima de ${nomePersonagem} sem constestar que sem querer, terá que lutar contra ele.`
        );
        dadosPersonagem.energia -= 25;
        console.log(
          `Agora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
            (golem.vida + golem.defesa) /
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
        recuperarEnergia();

        console.log(`Após a janta, simplesmente quis ficar em sem quarto e descansar, esse dia não foi muito bom para ${nomePersonagem}. 
Quem sabe amanhã melhore...`);
      }
    }
  } else if (amuleto == `nao` || amuleto == `não` || amuleto == `n`) {
    console.log(
      `${nomePersonagem} seguiu em frente sem dar bola pro Elfo, chegando em casa para chegar na hora da janta.\n`
    );

    recuperarEnergia();

    console.log(`Quando ${nomePersonagem} se praparava para dormir, escuta um estrondo muito alto, e corre para ver o que é.
Ao chegar na porta vê um forte chama alastrando por toda sua vila, e ao fixar seu olhar, consegue ver um mago necromante e seus exercitos de zumbis.\n`);

    console.log(`Corre para pegar sua espada, e assim que volta seu pai já está no centro da vila enfrentando o necromante. Porém, seu pai já de idade, sofre 
um encanto do necromante e acaba morrendo.`);

    tempo();

    console.log(`grugh`);

    tempo();

    console.log(`grugh`);

    tempo();

    console.log(`${nomePersonagem} ainda imovel, percebe que seu pai está se levantando como um zumbi.\nAo ver isso
${nomePersonagem} se enfurece demais e pensa: `);

    let enfentrarNecro = prompt(`Será que devo enfrentar esse Necromante? `);
    validacao(enfentrarNecro);
    if (enfentrarNecro == `sim` || enfentrarNecro == `s`) {
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

      poderElementalFuria();

      console.log(
        `${nomePersonagem} parte pra cima do necromante com todas as forças`
      );
      console.log(
        `Agora com seu novo poder ${nomePersonagem} parte pra cima do necromante e desfere ${Math.ceil(
          (golem.vida + golem.defesa) /
            (dadosPersonagem.ataque + dadosPersonagem.agilidade)
        )} golpes, que foi o suficiente para matar o necromante.
        }`
      );
      console.log(
        `${nomePersonagem} acaba desmaiando, porém, conseguiu salvar a vila.`
      );
    }
  }
}

tempo();
tempo();
