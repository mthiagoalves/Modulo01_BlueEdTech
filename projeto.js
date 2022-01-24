var prompt = require ('prompt-sync')();

console.log(`****Essa história será sobre o personagem que você criar!****\n`)


let name = prompt (`Qual seu nome? `)
    console.log (`\nBem vindo ${name}`);    

    console.log(`\nEm uma vila distante chamada Vinland Sun, vivia uma criança chamada ${name}, 
filhoª de Thors "O espadachim indomável" e Eldora uma maga especialista em magia elemental.\n
Frequentemente a vila recebia invasões de demonios que comiam as pessoas, e o pai de ${name} era o chefe
da guarda da cidade e também era muito forte.\nCerto dia, em treinamento que ${name} fazia todos os dias junto de seu pai, 
um estranho comerciante passou e contou uma história sobre "As respirações", e falou o nome de um velho que 
morava no pé da montanha, perto de onde morava e que ele sabia mais sobre esse assunto.
\nComo ${name} era muito empanhado nos treinamento, decidiu partir em busca do velho para poder aprender
sobre as respirações.\n`)
    

let yes = 0;
let life_boss = 0;

let sensei = ``;
    while (sensei != `sim` && sensei != `nao`){
        sensei.toLocaleLowerCase = prompt(`Você conseguiu encontrar o velho? `);
        if (sensei == `sim`) {
            console.log (`Ao encontrar o velho que se chama Izui. Ele pediu para ${name} fazer um teste, se 
        passasse no teste, Izui o treinaria.\n.\n.\n.`);
            console.log(`Depois de 2 anos de treinamento, para poder foratalecer o corpo, espirito e as habilidades. ${name}
        retorna a sua vila, e seu pai a sua espera, está um pouco debilitado pela idade. Pergunta para ele se pode tomar o 
        posto de guarda da cidade, e fez a seguinte pergunta:\n`)
        } else {
            console.log(`\nComo ${name} não encontrou o velho, teve que pesquisar e treinar sozinho.
        Demorou para se fortalecer evoltou para casa, não tão diferente de quando saiu, e foi a uma conversa com seu velho pai.\n`);
        }
}   
/*
console.log(`Depois de 2 anos de treinamento, para poder foratalecer o corpo, espirito e as habilidades. ${name}
retorna a sua vila, e seu pai a sua espera, está um pouco debilitado pela idade. Pergunta para ele se pode tomar o 
posto de guarda da cidade, e fez a seguinte pergunta:\n`)
*/
let body = ``;
    while (body != `sim` || body != `nao`){
        body.toLocaleLowerCase = prompt(`Digite "sim" ou "não". Você conseguiu se fortalecer? `);
    } if(body == `sim`) {
        console.log (`\nJá que ${name} estava bem fortalecido, Thors seu pai, mandou ele em busca de um velho amigo,
um ferreiro, para poder fazer uma espada com um ferro especial, para poder acabar com as ameaças da cidade.`);
} else{
    console.log (`\nComo ${name} não conseguiu se fortalecer, a cidade foi invadida por demonios na noite seguinte,
e sem sem pai, e ninguem a altura para proteger a cidade, todos morreram.`);
    } 
        
    
let blacksmith = prompt (`Você encontrou um ferreiro para fazer sua espada? `);
let breathing = prompt (`Você conseguiu dominar as respirações? `);
let strangh = prompt (`Conseguiu acumuluar forças caçando demônios? `);
/*
//PARTE DE VERIFICAÇÃO PARA AVANÇAR NA HISTÓRIA 

if (body.toLocaleLowerCase() == `sim`){
    yes++
}
if (sensei.toLocaleLowerCase() == `sim`){
    yes++
} 
if (blacksmith.toLocaleLowerCase() == `sim`){
    yes++
} 
if (breathing.toLocaleLowerCase() == `sim`){
    yes++
} 
if (strangh.toLocaleLowerCase() == `sim`){
    yes++

//CASO ESTEJA  VALIDO PASSAR 

if (yes == 1) {
    console.log(`${name}, você precisa treinar muito mais.`);
    } else if (yes < 3) {
        console.log (`${name}, treine mais, lhe falta ódio!`);
    } else if (yes <= 3) {
        console.log (`${name}, está quase lá, o boss irá quebrar sua espada nesse nivel. Mas vamos lá.`);
    } else if (yes <= 4) {
        console.log (`Com esse nível vocÊ vai conseguir derrota-lo com algum esforço.`);
    } else if (yes <= 5) {
        console.log (`${name}, conseguiu chegar no ápice da sua força!!`);
    }


console.log (`${name}, para conseguir retornar para casa, você vai precisar enfrentar o ultimo boss`);

//VIDA DO BOSS VARIA DE ACORDO COM O NUMERO DE "SIM" QUE O JOGADOR DIGITAR 

if (yes == 1) {
    life_boss = 1000000000000;
    } else if (yes < 3) {
        life_boss = 500000000;
    } else if (yes <= 3) {
        life_boss = 100500;
    } else if (yes <= 4) {
        life_boss = 50000;
    } else if (yes <= 5) {
        life_boss = 1000;
    }
}

//CONDIÇÃO QUE VAI VARIAR A VIDA DO BOSS DE ACORDO COM AS RESPOSTAR DO USUARIO

if (life_boss == 1000000000000) {
    console.log (`Você quis continuar mesmo fraco, não é páreo para o Bahamut`);
    } else if (life_boss == 500000000) {
        console.log(`Não teve chance, e acaborá morrendo, treine um pouco mais.`);
    } else if (life_boss == 100500) {
        console.log(`Você irá quase morrer e se ferir muito, mas também, não conseguirá derrotá-lo.`);
    } else if (life_boss == 50000) {
        console.log (`Irá se ferir bastante, mas com paciencia vai conseguir derrotá-lo e retornar para casa.`);
    } else if (life_boss == 1000) {
        console.log(`Um guerreiro lendário como você não terá muitos esforços para derrotá-lo, ${name} retorne com glória para casa!!!`);
    }   


//REPETIDOR E CONTADOR DE GOLPES 

let value_dmg = +prompt (`${name}, digite seu dmg por golpe: `);

while (value_dmg < 50 || value_dmg >500){
    value_dmg = +prompt (`Tenha um entre 50 e 500 AD para enfrentar o Boss. Digite novamente depois de ter treinado: `);
    }
        console.log(`Você tem ${value_dmg}AD`);

    console.log (`Você vai precisar aplicar ${Math.ceil(life_boss / value_dmg)} golpes no boss.`);

//CONDIÇÃO FINAL PARA RETORNAR OU VOLTAR AO INICIO;

if (life_boss == 50000 || life_boss == 1000) {
    console.log(`final da historia`);
} else{
    console.log(`Você morreu, volte ao inicio, treine, derrete o Bahamut e retorne pra casa.`);            
    }
   



*/

