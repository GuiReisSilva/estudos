// var numero = 20;
// var numero2 = 10;

// numero += numero2;
// console.log(numero);
// console.log(numero2);

// //operador ternário

// //abreviação de condicionais com if e else

// var idade = 19;
// var naoPossuiDiabetes = true;

// var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
// console.log(podeBeber)

// // condição ? true : false


// //if abreviado

// //não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

// var possuiFaculdade = true;
// if(possuiFaculdade) console.log('Possui faculdade');
// else console.log('Não possui faculdade');

// // ou
// if(possuiFaculdade)
//   console.log('Possui faculdade');
// else
//   console.log('Não possui faculdade');

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
darCredito = (possuiCarro && possuiCasa) ? 'Dar crédito ao cliente' : 'Negar crédito';
console.log(darCredito);