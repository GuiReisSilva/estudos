// function areaQuadrado(lado) {
//   return lado * lado;
// }

// console.log(areaQuadrado(20));


// function pi() {
//   return 3.14;
// }

// var total = 5 * pi();
// console.log(pi());

// function imc (peso,altura) {
//   var imc = peso / (altura * altura);
//   return imc
// }
// console.log(imc(80, 1.80));
// imc(80,1.80);
// imc(60);

// function corFavorita(cor) {
//   if(cor === 'azul'){
//     return 'Eu gosto do céu'
//   } else if (cor === 'verde') {
//     return 'Eu gosto de mato'
//   } else {
//     return 'Eu não gosto de cores'
//   }
// }

// console.log(corFavorita('verde'));

// function teste() {
//   console.log('Clicou')
// }

// addEventListener('click', teste);


// function imc2 (peso, altura) {
//   const imc = peso / (altura ** 2);
//   console.log(imc);
//   return
// }

// imc2(80, 1.8);

// console.log(imc2(80, 1.90));


// function terceiraIdade(idade) {
//   console.log(typeof idade);
//   if(typeof idade !== 'number') {
//     return 'Por favor preenche um número'
//   } else if(idade >= 60) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(terceiraIdade('oi'))

// function faltaVisita(paisesVisitados) {
//   var totalPaises = 193;
//   return `Falta visitar ${totalPaises - paisesVisitados} países`
// }

// var profissao = 'Designer'

// function dados () {
//   var nome = 'Guilherme';
//   var idade = 28;
//   function outrosDados() {
//     var endereco = 'Rio de Janeiro'
//     var idade = 29;
//     return `${nome}, ${idade}, ${endereco}, ${profissao}`
//   }
//   return outrosDados();
// }

// console.log(dados());




// Crie uma função para verificar se um valor é Truthy


function validador (valida){
  return !!valida;
}


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par

function par(numero) {
   var modulo = numero % 2;
    if(modulo === 0){
    return 'É par'
  } else {
    return 'É impar'
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function() {
  console.log('Guilherme :)')
})

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesJaIdos) {
  var totalPaises = 100;
  return `Já visitei ${paisesJaIdos} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
