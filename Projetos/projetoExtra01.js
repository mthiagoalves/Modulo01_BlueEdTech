const prompt = require("prompt-sync")();
const { Console } = require("console");
const { Transform } = require("stream");

//PRINCIPAIS VARIAVEIS

let userName;
let userAge;
let cpf;
let userVote;
let sair;
let vote1 = 0;
let vote2 = 0;
let vote3 = 0;
let voteNull = 0;
let voteBlank = 0;
let sum;
let rest;
let confirmar;

//ARROW FUNCTION PARA CONTAGEM DOS VOTOS E EXIBIÇÃO DO RESULTADO
displayResult = () => {
  console.log(
    `\nO candidato \x1b[33m${candidates[0]["Candidato"]}\x1b[0m teve \x1b[31m${vote1}\x1b[0m votos.`
  );
  console.log(
    `O candidato \x1b[32m${candidates[1]["Candidato"]}\x1b[0m teve \x1b[31m${vote2}\x1b[0m votos.`
  );
  console.log(
    `O candidato \x1b[34m${candidates[2]["Candidato"]}\x1b[0m teve \x1b[31m${vote3}\x1b[0m votos.`
  );
  console.log(
    `O candidato ${candidates[3]["Candidato"]} teve \x1b[31m${voteNull}\x1b[0m votos.`
  );
  console.log(
    `O candidato ${candidates[4]["Candidato"]} teve \x1b[31m${voteBlank}\x1b[0m votos.`
  );

  if (vote1 > vote2 && vote1 > vote3) {
    console.log(
      `\nO candidato \x1b[33m${candidates[0]["Candidato"]}\x1b[0m ganhou a eleição.`
    );
  } else if (vote2 > vote1 && vote2 > vote3) {
    console.log(
      `\nO candidato \x1b[32m${candidates[1]["Candidato"]}\x1b[0m ganhou a eleição.`
    );
  } else if (vote3 > vote1 && vote3 > vote2) {
    console.log(
      `\nO candidato \x1b[34m${candidates[2]["Candidato"]}\x1b[0m ganhou a eleição.`
    );
  } else {
    console.log(`\nNão teve ganhadores nessa eleição.`);
  }
};

//ARROW FUNCTION PARA CONTAR TEMPO DENTRO DO PROGRAMA
time = (ms) => {
  let contar = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - contar > ms) {
      break;
    }
  }
};

//ARROW FUNCTION PARA PERSONALIZAR E TABELAR UM OBJETO
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

//ARROW FUNCTION PARA VALIDAÇÃO SE O USUARIO ESTÁ APTO PARA VOTAÇÃO.
ageValidate = (age) => {
  if (!isNaN(age) && age >= 16 && age < 18 && age % 1 == 0 && age.length != 0) {
    console.log(`\n${userName} você tem ${age} anos, seu voto é opcional.\n`);
  } else if (
    !isNaN(age) &&
    age >= 18 &&
    age < 70 &&
    age % 1 == 0 &&
    age.length != 0
  ) {
    console.log(
      `\n${userName} você tem ${age} anos, seu voto é obrigatório.\n`
    );
  } else if (!isNaN(age) && age >= 70 && age % 1 == 0 && age.length != 0) {
    console.log(`\n${userName} você tem ${age} anos, seu voto é opcional.\n`);
  } else {
    console.log(`\nVocê não está apto para votação.\n`);
  }
  return age;
};

//ARROW FUNCTION PARA CONTAGEM DOS VOTOS
voteCount = (userVote) => {
  if (userVote == `1`) {
    console.log(
      `O candidato escolhido foi a \x1b[33m${candidates[0]["Candidato"]}\x1b[0m.`
    );
    vote1++;
  } else if (userVote == `2`) {
    vote2++;
    console.log(
      `O candidato escolhido foi o \x1b[32m${candidates[1]["Candidato"]}\x1b[0m. `
    );
  } else if (userVote == `3`) {
    vote3++;
    console.log(
      `O candidato escolhido foi o \x1b[34m${candidates[2]["Candidato"]}\x1b[0m`
    );
  } else if (userVote == `4`) {
    voteNull++;
    console.log(`Seu voto foi computado ${candidates[3]["Candidato"]} `);
  } else if (userVote == `5`) {
    voteBlank++;
    console.log(`Seu voto foi em ${candidates[4]["Candidato"]}`);
  } else {
    console.log(`Numero inválido para votação. Escolha de 1 à 5.`);
  }
};

//ARROW FUNCTION PARA VALIDAÇÃO DO CPF DO USUARIO.

testCpf = (cpf) => {
  sum = 0;
  if (cpf == "00000000000") return `CPF invalido`;

  for (i = 1; i <= 9; i++) sum = sum + cpf.substring(i - 1, i) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != cpf.substring(9, 10)) return `CPF invalido`;

  sum = 0;
  for (i = 1; i <= 10; i++) sum = sum + cpf.substring(i - 1, i) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != cpf.substring(10, 11)) return `CPF invalido`;
  return `CPF validado`;
};

//ARRAY COM AS ESCOLHAS DO USUARIO.
const candidates = [
  { Opção: 1, Candidato: "Camila" },
  { Opção: 2, Candidato: "Kellbber" },
  { Opção: 3, Candidato: "Thiago" },
  { Opção: 4, Candidato: "Voto Nulo" },
  { Opção: 5, Candidato: "Voto em Branco" },
];

//*************************************** INICIO ***************************************
console.log(`As votações iniciaram de acordo com a idade digitada. Caso a idade for menor que 16, 
o usuário não estará apto para voto. Escolha com sabedoria seu voto. O futuro do pais depende de você!\n`);

//ENTRADA DO CPF DO USUARIO VALIDANDO COM A ARROW FUNCTION
do {
  cpf = prompt(`Digite seu CPF: `);
  console.log(`Consultando CPF. Aguarde.`);
  time(1000);
  console.log(`.`);
  time(1500);
  console.log(`.`);
  time(1500);
  console.log(`.`);
  time(1500);
  console.log(testCpf(cpf));
  time(1700);
  console.clear();
} while (testCpf(cpf) == `CPF invalido`);

//ENTRADA E VALIDAÇÃO DO NOME DO USUARIO
userName = prompt(`Digite seu nome: `);
while (!isNaN(userName)) {
  console.clear();
  console.log(`!!!ATENÇÃO!!!`);
  userName = prompt(`Digite um nome válido: `);
  console.clear();
}

//ENTRADA E VALIDAÇÃO DO IDADE DO USUARIO
while (true) {
  userAge = +prompt(`Digite sua idade:  `);
  if (
    !isNaN(userAge) &&
    userAge > 0 &&
    userAge % 1 == 0 &&
    userAge.length != 0
  ) {
    break;
  }
  console.clear();
  console.log(`Digite uma idade válida.`);
}

ageValidate(userAge);

if ((userAge > 15 && userAge < 18) || userAge > 70) {
  confirmar = prompt(`Seu voto é opcional, deseja continuar? `).toLowerCase();

  console.log(confirmar);

  console.clear();

  if (confirmar == "sim" || confirmar == "s") {
    console.log(`As opções de voto são: `);

    table(candidates);

    //CONTAGEM E VALIDAÇÃO DOS VOTOS
    do {
      userVote = +prompt(`Digite seu voto de acordo com a opção desejada: `);

      voteCount(userVote);

      console.log();

      //CONDIÇÃO PARA CONTINUAR A VOTAÇÃO
      sair = prompt(`Deseja continuar a votação? `).toLowerCase;
    } while (sair != `sim` || sair != `s`);

    console.clear();

    displayResult();
  }

  //CASO O USUARIO SEJA MENOR QUE 16 ANOS. AUTOMÁTICAMENTE REPROVA-O.
  else {
    console.log(`Volte quando sua idade for maior ou igual 16 para votar.`);
  }
  console.log(`Obrigado por participar da eleição.`);
} else if (userAge >= 18 && userAge < 70) {
  console.log(`As opções de voto são: `);

  table(candidates);

  //CONTAGEM E VALIDAÇÃO DOS VOTOS
  do {
    userVote = +prompt(`Digite seu voto de acordo com a opção desejada: `);

    voteCount(userVote);

    console.log();

    //CONDIÇÃO PARA CONTINUAR A VOTAÇÃO
    sair = prompt(`Deseja continuar a votação? `).toLowerCase;

    console.clear();
  } while (sair == `nao` || sair == `n`);

  console.clear();

  displayResult();
}
