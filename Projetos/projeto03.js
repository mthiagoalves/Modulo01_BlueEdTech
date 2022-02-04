var prompt = require("prompt-sync")();

// PRINCIPAIS VARIAVEIS E OBJETO DO STATUS DO PERSONAGEM

let = nomePersonagem = prompt(`Digite o nome do personagem da história: `);
let = idadePersonagem = prompt(`Digite a idade do seu personagem: `);
let = vidaPersonagem = 100;
let = ataquePersonagem = 10;

const dadosPersonagem = {
  nomePersonagem,
  idadePersonagem,
  vidaPersonagem,
  ataquePersonagem,
};

console.log(`Seu personagem foi criado: `);
console.log(
  `Nome: ${dadosPersonagem.nomePersonagem}.\nIdade: ${dadosPersonagem.idadePersonagem}.\nAtaque: ${dadosPersonagem.ataquePersonagem}\nVida: ${dadosPersonagem.vidaPersonagem}.\n`
);

// ARROW FUNCTION PARA PAUSAR TEMPO DE EXECUÇÃO

// tempo = (ms) => {
//   var contar = new Date().getTime();
//   for (var i = 0; i < 3e6; i++) {
//     if (new Date().getTime() - contar > ms) {
//       break;
//     }
//   }
// };

// //INICIO DA HISTORIA, JOGO E AS INTERAÇÕES COM O USUARIO.

// console.log(
//   `Em um reino distante, chamado Albion Flame, havia uma cidade que era muito abençoada, com terra fértil, água fresca, e muita mata, e chamada de Lorencia.
//   E nessa cidade vivia ${nomePersonagem}, um jovem aspirante a cavaleiro da cidade, muito orgulhoso e talentoso por sinal.`
// );

// console.log(
//   `Todo dia pela manhã, ${nomePersonagem} acorda para treinar esgrima com seu professor, mas está um pouco desanimado por algum motivo.`
// );

// aumentoStatus = () => {
//   if (x == `SIM` || x == `s` || x == `sim` || x == `S`) {
//     ataquePersonagem + 10;
//     vidaPersonagem + 10;
//     console.log(
//       `Seu ataque aumentou para ${ataquePersonagem} e sua vida aumentou para ${vidaPersonagem}`
//     );
//   } else if (x == `NAO` || x == `n` || x == `nao` || x == `N`) {
//     ataquePersonagem + 10;
//     vidaPersonagem + 10;
//     console.log(
//       `Seu ataque diminiu para ${ataquePersonagem} e sua vida diminiu para ${vidaPersonagem}`
//     );
//   }
// };

// console.log(
//   `Conforme foi caminhando acabou achando um mostro um pouco fraco, mas que não queria deixar ${nomePersonagem} passar.`
// );
