/* 
** ### PRIMERIO DESAFIO ### 
** Script que recebe um valor de entrada, verifica se é um numero par, e calcula a postencia do numero inserido
*/


//let lines = gets().split('\n');
//var N = parseInt(lines.shift());

/*var N = parseInt(20); // valor de entrada

for (let i = 1; i <= N; i++) {

//TODO: Teste ok, deu certo!

	if (i % 2 === 0 )
    //print(`${i}^2 = ${   N   }`)
    console.log(`${i}^2 = ${   i ** 2 }` );
}


/* 
** ### SEGUNDO DESAFIO ### 
** Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.
*/

//let lines = gets().split('\n');
//let N = parseInt(lines.shift());

/*let N = parseInt(13);
for ( let i = 1; i < 10000; i++) {

//TODO: Teste ok, deu certo!

	//if (i  N==2) print(  );
    if (i % N==2) console.log(i);
}*/

/* 
** ### TERCEIRO DESAFIO ### 
** A entrada consiste de uma linha com quatro números inteiros T1, T2, T3, T4, indicando o número de tomadas de cada uma das quatro réguas (2 ≤ Ti ≤ 6).
** Seu programa deve produzir uma única linha contendo um único número inteiro, indicando o número máximo de aparelhos que podem ser conectados à energia num mesmo instante.
*/
//let lines = gets().split("\n");
//let line = lines.shift().split(' ');
/*let line = [2,2,2,2]
let soma = 0

//TODO: Teste ok, deu certo!

for(i=0;i< line.length;i++){
  let transfor = parseInt(line[i])
  soma = soma + transfor
  //console.log(line[i])
}
//print(soma-3)
console.log(soma-3)
*/


/* 
** ### QUARTO DESAFIO ### 
** Leia dois valores inteiros identificados como variáveis A e B. Calcule a soma entre elas e chame essa variável de SOMA.
** A seguir escreva o valor desta variável.
*/
/*let A = parseInt(gets());
let B = parseInt(gets());
//TODO: Complete os espaços em branco com uma possível solução para o desafio
let SOMA =           ;               
print("SOMA = "+ SOMA );*/

/*let A = parseInt(4);
let B = parseInt(2);

//TODO: Teste ok, deu certo!

let SOMA =  A + B;         ;               
console.log("SOMA = "+ SOMA );*/


/* 
** ### DESAFIO - 5  ### 
** Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, 
** em inglês, com a primeira letra maiúscula.
*/

/*
let lines = gets().split('\n');
let month = lines.shift();
let months = {
  "1": "January",
  "2": "February",

//TODO: Complete os espaços em branco com uma possível solução para o desafio

};

print(       );
*/

/*let lines = [12];
let month = lines.shift();

let months = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December"
};


let value = month - 1;
if (month in months){
  
  console.log(Object.values(months)[value]);  
  
}else{
  console.log('nao'); 
}
//TODO: Teste ok, deu certo!
*/

/* 
** ### DESAFIO - 6  ### 
** Papai Noel está brincando com seus duendes para entretê-los durante a véspera do Natal. 
** A brincadeira consiste nos elfos escreverem números em pedaços de papel e colocarem no gorro do Papai Noel. 
** Após todos terminarem de colocar os números Noel sorteia um papel e aquele número representa quantos "Ho" o Noel deve falar. 
** Seu trabalho é ajudar o Papai Noel montando um problema que mostre todos os "Ho" que ele deve falar dado o número sorteado.
*/
/*
let lines = gets().split("\n");

let N = parseInt(lines.shift());
for (                         ) {
    if (           ) frase +=      ;
    else frase +=        ;
}
print(frase);
*/

let lines = [5];

let N = parseInt(lines.shift());
let F = 'Ho ';
let frase = '';
for (let i = 0; i <= lines.length; i++) {

  if (N > 0){
    frase += F.repeat(N);
  }
}
frase = frase.substring(0, frase.length - 1)+'!';
console.log(frase);
//TODO: Teste ok, deu certo!
