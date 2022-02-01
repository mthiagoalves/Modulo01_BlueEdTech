const prompt = require ('prompt-sync')();

while (true) {

const escolha = ["pedra" , "papel" , "tesoura"];
let escolhaAleatoria;
let placar = 0;
let placarPc = 0;
let numRodadas = +prompt (`Escolha o numero de rodadas que deseja jogar: `);

console.log();

for(i = 0; i < numRodadas; i++){

let escolhaUsuario = prompt (`${i+1}º rodada - Escolha entre pedra, papel e tesoura: `);

while (escolhaUsuario != 'pedra' && escolhaUsuario != 'papel' && escolhaUsuario != 'tesoura'){
    escolhaUsuario = prompt (`Por favor digite a opção entre "pedra", "papel" e "tesoura":`);
}


let resultadoComputador;
escolhaAleatoria = [Math.floor((Math.random()*escolha.length))];


resultadoComputador = escolha[escolhaAleatoria];    

if(resultadoComputador == escolhaUsuario){
        console.log(`O jogo deu EMPATE. O computador também escolheu ${resultadoComputador}.\n`);
} 

else if(resultadoComputador == 'pedra' && escolhaUsuario == 'papel' || resultadoComputador == 'tesoura' 
&& escolhaUsuario == 'pedra' || resultadoComputador == 'papel' && escolhaUsuario == 'tesoura'){
    console.log(`Você GANHOU está rodada. O computador escolheu ${resultadoComputador}.\n`);
    placar++;
} 

else{
    console.log(`Você PERDEU, a escolha do computador foi ${resultadoComputador}.\n`);
    placarPc++;
} 
}

if(placar > placarPc){
        console.log(`VOCÊ GANHOU !!!! A sua pontuação foi "${placar}" e o da maquina foi "${placarPc}".`);
    }
     else if (placar < placarPc){
        console.log(`Você perdeu. A sua pontuação foi "${placar}" e o da maquina foi "${placarPc}".`);
    } 

console.log();

  let jogarNovamente = prompt(`Deseja jogar novamente? `);

  if (jogarNovamente == 'sim') {
  } 
  
  else{
      console.log(`Volte semprem quando quiser. Obrigado por jogar.`);
      break;
  }
}