// var idade = 23;
// var soma = 100 + 50;
// var subtracao = 100 - 50;
// var multiplicacao = 100 * 2;
// var divisao = 100 / 2;
// var expoente = 2 ** 4
// var modulo = 14 % 5;

// console.log(multiplicacao);

// var testeNan = '100' / 2;
// console.log(isNaN(testeNan));

//A ordem importa

//Começa por multiplicação e divisão, depois por soma e subtração

// var total1 = 20 + 5 * 2; //30
// var total2 = (20+5) * 2; //50
// var total3 = 20 / 2 * 5; //50
// var total4 = 10 + 10 * 2 + 20 / 2; //40

// console.log(total4);

// //Operadores Aritméticos Unários

// // var incremento = 5;
// // console.log(incremento++); //5
// // console.log(incremento); //6

// // var incremento2 = 5;
// // console.log(++incremento2); //6
// // console.log(incremento2); //6


// // var frase = 'Isso é um teste';
// // +frase; // NaN
// // -frase; // NaN

// // var idade = '28';
// // +idade; // 28 (número)
// // -idade; // -28 (número)
// // console.log(+idade + 5); // 33 

// // var possuiFaculdade = true;
// // console.log(+possuiFaculdade); // 1

// // var idade = +'28';
// // var somaIdade = 5;
// // console.log(idade);

// // Qual o resultado da seguinte expressão ?
// var total = 10 + 5 * 2 / 2 + 20; //35

// // Crie duas expressões que retornem NaN
// var nan1 = "200tao" * 100;
// var nan2 = "300tao" / 200;
// console.log(nan1, nan2);

// // Somar a String '200' com o número 50 e retornar 250
// var soma = +'200' + 50;
// console.log(soma);

// //Incremente o número 5 e retorne o seu valor incrementado

// var incremento = 5;
// console.log(incremento);
// console.log(++incremento)

// // como dividir o peso por 2 ?

// var numero = '80'; //ou +'80' / 2
// var unidade = 'kg';
// var peso = numero + unidade; // '80kg'
// var pesoPorDois = +numero / 2 + 'kg'; // NaN

// console.log(pesoPorDois);


// Boolean - True/False

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuigraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}