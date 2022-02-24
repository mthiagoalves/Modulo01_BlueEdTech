const prompt = require("prompt-sync")();
const { Console } = require("console");
const { Transform } = require("stream");

let vote1 = 0;
let vote2 = 0;
let vote3 = 0;
let voteNull = 0;
let voteBlank = 0;

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
  for (var i = 0; i < 1e7; i++) {
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
    console.log(`${age} você tem ${age} anos, seu voto é opcional.`);
  } else if (
    !isNaN(age) &&
    age >= 18 &&
    age < 70 &&
    age % 1 == 0 &&
    age.length != 0
  ) {
    console.log(`${age} você tem ${age} anos, seu voto é obrigatório.`);
  } else if (!isNaN(age) && age >= 70 && age % 1 == 0 && age.length != 0) {
    console.log(`${age} você tem ${age} anos, seu voto é opcional.`);
  } else {
    console.log(`Você não está apto para votação. `);
  }
  return age;
  console.clear();
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

//ARRAY COM AS ESCOLHAS DO USUARIO.
const candidates = [
  { Opção: 1, Candidato: "Camila" },
  { Opção: 2, Candidato: "Kellbber" },
  { Opção: 3, Candidato: "Thiago" },
  { Opção: 4, Candidato: "Voto Nulo" },
  { Opção: 5, Candidato: "Voto em Branco" },
];

//ENTRADA E VALIDAÇÃO DO NOME DO USUARIO
let userName = prompt(`Digite seu nome: `);
while (!isNaN(userName)) {
  console.clear();
  console.log(`!!!ATENÇÃO!!!`);
  userName = prompt(`Digite um nome válido: `);
  console.clear();
}

//ENTRADA E VALIDAÇÃO DO IDADE DO USUARIO
let userAge;
while (true) {
  console.log(
    `Você precisa ter 16 anos ou mais, para estar apto para votação.`
  );
  userAge = +prompt(`Digite sua idade:  `);
  if (
    !isNaN(userAge) &&
    userAge > 0 &&
    userAge % 1 == 0 &&
    userAge.length != 0
  ) {
    break;
  }
}

ageValidate(userAge);

console.log(`As opções de voto são: `);

table(candidates);

let userVote;

let exit;

while (true) {
  userVote = +prompt(`Digite seu voto de acordo com a opção desejada: `);

  voteCount(userVote);

  console.log();

  exit = prompt(`Deseja continuar a votação? `);

  if (exit == `não` || exit == `n` || exit == `nao`) {
    break;
    console.clear();
  }
  console.clear();
}

displayResult();
