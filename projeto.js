const prompt = require ('prompt-sync')();

console.log(`****Essa história será sobre o personagem que você criar!****\n`);

let name = prompt(`Qual seu nome? `);
console.log(`\nBem vindo ${name}`);

console.log(`\nEm uma vila distante chamada Vinland Sun, vivia uma criança chamada ${name}, 
filhoª de Thors "O espadachim indomável" e Eldora uma maga especialista em magia elemental.\n
Frequentemente a vila recebia invasões de demonios que comiam as pessoas, e o pai de ${name} era o chefe
da guarda da cidade e também era muito forte.\nCerto dia, em treinamento que ${name} fazia todos os dias junto de seu pai, 
um estranho comerciante passou e contou uma história sobre "As respirações", e falou o nome de um velho que 
morava no pé da montanha, perto de onde morava e que ele sabia mais sobre esse assunto.
\nComo ${name} era muito empanhado nos treinamento, decidiu partir em busca do velho para poder aprender
sobre as respirações.\n`);

let cont = 0;
let yes = 0;
let lifeBoss = 0;

console.log(`Digite "sim" ou "nao", para responder as perguntas!\n`);

let sensei = prompt(`Você conseguiu encontar o velho da montanha? `).toLowerCase();

while (sensei !== `sim` && sensei !== `nao`) {
    console.log("\nDigite entre sim e não: \n");
    sensei = prompt(`Conseguiu encontrar o velho?`).toLowerCase();
}

cont++;

if (sensei === `sim`) {
    console.log(`\nAo encontrar o velho que se chama Izui. Ele pediu para ${name} fazer um teste, se 
passasse no teste, Izui o treinaria.\n.\n.\n.`);

    console.log(`Depois de 2 anos de treinamento de respiração, para poder fortalecer o corpo, espirito e as habilidades. ${name}
retorna a sua vila, e seu pai, que está sua espera e já um pouco debilitado pela idade. Pergunta para ele se pode tomar o 
posto de guarda da cidade, e fez a seguinte pergunta: \n`);
} else if (sensei === `nao`) {
    console.log(`\nComo ${name} não encontrou o velho, teve que pesquisar e treinar sozinho.
Demorou para se fortalecer e voltou para casa, não tão diferente de quando saiu, e foi ter uma conversa com seu velho pai.
E ele perguntou para ${name}: \n`);
}

let body = prompt(`Você conseguiu se fortalecer seu corpo? `).toLowerCase();

while (body !== `sim` && body !== `nao`) {
    console.log("\nDigite entre sim e não: \n");
    body = prompt(`Você conseguiu se fortalecer? `).toLowerCase();
}

if (body === `sim`) {
    console.log(`\nJá que ${name} estava bem fortalecido, Thors seu pai, mandou ele em busca de um velho amigo,
um ferreiro, para poder fazer uma espada com um ferro especial, para poder acabar com as ameaças da cidade.\n`);
} else if (body === `nao`) {
    console.log(`\nComo ${name} não conseguiu se fortalecer, a cidade foi invadida por demonios na noite seguinte,
e sem sem pai, e ninguem a altura para proteger a cidade, e ${name} teve que partir em busca de vingança.
Lendo as anotações de seu pai, descobriu sobre um velho amigo ferreiro que vivia isolado. E ${name} parte para acha-lo.`);
}

console.log(`\nAo chegar em uma cidadezinha no meio da floresta, ${name} procura pelo amigo de seu pai para poder fazer 
sua espada.\n`);

console.log(
    `\nApós encontrar o ferreiro, que se chamava Akusa, conversaram por um tempo. E Akusa perguntou para ${name}: \n`,
);

const elementos = ["fogo", "agua", "terra", "raio", "nevoa", "vento"];
const cores = ["vermelha", "azul", "marsala", "amarela", "cinza", "verde"];

let elementoEscolhido;

do {
    elementoEscolhido = prompt(
        `${name}, tenho esses elementos disponivel pra você: ${elementos}. Qual você deseja colocar em sua espada? `,
    ).toLowerCase();
} while (!elementos.includes(elementoEscolhido));

const elementoS = elementos.indexOf(elementoEscolhido);
const cor = cores[elementoS];

console.log(
    `\nSua espada ficou com a cor ${cor} devido ter escolhido o elemento "${elementoEscolhido}".`,
);

console.log(
    `\nAo fazer sua espada no elemento ${elementoEscolhido}, ${name} teve que partir em busca de um outro treinamento.`,
);

console.log(`\nE como sua mãe era uma maga, apresentou ele ao Sishui, que era mestre no elemente ${elementoEscolhido}. E assim começaram
o treinamento de dominio angular ${elementoEscolhido}.\n`);


let training = prompt(
    `Conseguiu dominar todos os 76 passos do dominio angular ${elementoEscolhido}? `,
).toLowerCase();

while (training !== `sim` && training !== `nao`) {
    console.log("\nDigite entre sim e não: \n");
    training = prompt(`Você conseguiu dominar os 76 passos? `).toLowerCase();
}

cont++;

if (training === `sim`) {
    console.log(
        `\nAgora, dominando todos os 76 passos, ${name} pode retornar a sua vila, e herdar o lugar de Thors, seu pai.\n`,
    );

    console.log(
        `\nA caminho de casa, ${name} vê um enorme dragão demonio, Bahamut, indo em direção a sua vila e ele começa a se apressar para chegar em casa.\n`,
    );
} else if (training === `nao`) {
    console.log(
        `\nMesmo sem ter dominado todos os passos. ${name} retorna para casa, pois já estava muito tempo fora.\n.\n.\n.`,
    );

    console.log(
        `\nA caminho de casa, ${name} vê um enorme dragão demonio, Bahamut, indo em direção a sua vila e ele começa a se apressar para chegar em casa.\n`,
    );
}

console.log(`\nNo caminho ele encontrou muitos demonios com teve que lutar, e assim demorando ainda mais para chegar em casa.
Mas acabou servindo de um belo treinamento para refinar ainda mais o dominio angular. E no meio da confusão tinha uma jovem sendo atacada.\n`);

let save = prompt(`Deseja salvar a jovem? `);

while (save !== `sim` && save !== `nao`) {
    console.log("\nDigite entre sim e não: \n");
    save = prompt(`Quer salvar a jovem? `).toLowerCase();
}

cont++;

if (save === `sim`) {
    console.log(
        `A jovem moça simplesmente foi embora sem ao menos agradecer, ${name} ficou indigado.`,
    );
} else if (save === `nao`) {
    console.log(`${name} deixou a jovem morrer sem ter piedade.`);
}

console.log(`\nChegando perto da vila, viu que o dragão que tinha visto antes estava prestes a atacar a vila dele. 
Como ele teve que derrotar vários demonios ao caminho. Ele acumulou forças para derrotar o dragão Bahamut.\n`);

let strength = prompt(`Conseguiu acumuluar forças caçando demônios? `);

while (strength !== `sim` && strength !== `nao`) {
    console.log("\nDigite entre sim e não: \n");
    strength = prompt(`Conseguiu acumular forçar? `).toLowerCase();
}

cont++;

if (strength === `sim`) {
    console.log(
        `\nCom toda a força acumulada, agora precisa derrotar o dragão Bahamut!!!\n`,
    );
} else if (strength === `nao`) {
    console.log(
        `Mesmo não estando tão forte ainda, você precisa tentar derrotar o dragão para salvar sua vila.`,
    );
}

// VALIDAÇÃO DE QUANTOS SIM O USUÁRIO DIGITAR 

if (body === `sim`) {
    yes++;
}

if (sensei === `sim`) {
    yes++;
}

if (save === `sim`) {
    yes++;
}

if (training === `sim`) {
    yes++;
}

if (strength === `sim`) {
    yes++;
}

// RESPOSTA DE ACORDO COM A VALIDAÇÃO

if (yes === 1) {
    console.log(
        `\n${name}, você precisa treinar muito mais. Com esse nível você merrerá!\n`,
    );
} else if (yes === 2) {
    console.log(`\n${name}, treine mais, lhe falta ódio!\n`);
} else if (yes === 3) {
    console.log(
        `\n${name}, está quase lá, o boss irá quebrar sua espada nesse nivel. Mas vamos lá.\n`,
    );
} else if (yes === 4) {
    console.log(
        `\nCom esse nível vocÊ vai conseguir derrota-lo com algum esforço.\n`,
    );
} else if (yes === 5) {
    console.log(`\n${name}, conseguiu chegar no ápice da sua força!!\n`);
}

console.log(
    `\n${name}, para salvar sua vila, você vai precisar enfrentar o dragão Bahamut.\n`,
);

// VIDA DO BOSS VARIA DE ACORDO COM O NUMERO DE "SIM" QUE O JOGADOR DIGITAR

if (yes === 1) {
    lifeBoss = 1000000000000;
} else if (yes < 3) {
    lifeBoss = 500000000;
} else if (yes <= 3) {
    lifeBoss = 100500;
} else if (yes <= 4) {
    lifeBoss = 50000;
} else if (yes <= 5) {
    lifeBoss = 1000;
}

// CONDIÇÃO QUE VAI VARIAR A VIDA DO BOSS DE ACORDO COM AS RESPOSTAR DO USUARIO

if (lifeBoss === 1000000000000) {
    console.log(
        `\nVocê quis continuar mesmo fraco, não é páreo para o Bahamut\n`,
    );
} else if (lifeBoss === 500000000) {
    console.log(
        `\nNão terá chance, e acaborá morrendo, treine um pouco mais.\n`,
    );
} else if (lifeBoss === 100500) {
    console.log(
        `\nVocê irá quase morrer e se ferir muito, mas também, não conseguirá derrotá-lo.\n`,
    );
} else if (lifeBoss === 50000) {
    console.log(
        `\nIrá se ferir bastante, mas com paciencia vai conseguir derrotá-lo e retornar para casa.\n`,
    );
} else if (lifeBoss === 1000) {
    console.log(
        `\nUm guerreiro lendário como você não terá muitos esforços para derrotá-lo, ${name} retorne com glória para casa!!!\n`,
    );
}

// REPETIDOR E CONTADOR DE GOLPES

let valueDmg = +prompt(`${name}, digite seu dmg por golpe: `);

while (valueDmg < 50 || valueDmg > 500) {
    valueDmg = +prompt(
        `Tenha um entre 50 e 500 AD para enfrentar o Boss. Digite novamente depois de ter treinado: `,
    );
}

console.log(
    `\nVocê vai ter que aplicar ${Math.ceil(
        lifeBoss / valueDmg,
    )} golpes no boss.\n`,
);

// CONDIÇÃO FINAL PARA RETORNAR OU VOLTAR AO INICIO;

if (lifeBoss === 50000 || lifeBoss === 1000) {
    console.log(`\nApos ${name} ter derrotado o dragão Bahamut, uma era de paz começou a reinar sobre Vinland Sun.
${name} com a derrota do dragão foi nomeado a lider da vila, e assim foram pelas proximas 3 gerações. Até uma proxima ameaça aparecer...\n\n\n\n[FIM]`);
} else {
    console.log(
        `Você morreu. Bahamut era muito forte. volte ao inicio, treine, derrete o Bahamut e retorne pra casa.`,
    );
}