var carro = 'Fusca';

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); //Fusca no console
console.log(carro);// erro, carro is not defined

function mostrarCarro() {
  // carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

// Escopo de função (pai)

//variáveis declaradas no escopo pai de função, conseguem ser acessadas pelas funções

var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca


// escopo de Bloco

// variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

{
  let mes = 'Dezembro';
  console.log(mes);
}

// console.log(mes);

// {} cria um bloco

//chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro2 = 'fusca 2';
  var ano = 2018;
}
console.log(carro); //Carro
console.log(ano); // erro ano is not defined

// For loop

// ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop.

// for(var i = 0; i < 10; i++) {
//   console.log(`número ${i}`);
// }
// console.log(i); //10

const semana = 'Sexta';
console.log(semana)

function semana1 (semana) {
  let semana2 = 'terça';
  console.log(semana2);
}

const data = {
  ano: 2018,
  mes: 'Dezembro',
}

data.ano = 2019;
data.dia = 25;

// Por qual motivo o código abaixo retorna com erros?
const marca = 'Fiat';
let portas = 4;
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

//const e let não saem do escopo, apenas o var.



// Como corrigir o erro abaixo? declarando a variável fora do escopo
let dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
