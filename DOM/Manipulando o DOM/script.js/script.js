// // Document Object Model (DOM)

// // é uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

// console.log(window);
// // window é o objeto global do browser
// // possui diferentes métodos e propriedades

// window.innerHeight; //retorna a altura do browser

// window.alert('Salveee');

// const href = window.location.href;

// console.log(href);

// if(href === 'http://127.0.0.1:5500/Manipulando%20o%20DOM/script.js/index.html') {
//   console.log('É igual')
// }

// // Window e Document são os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

// // window.alert('Isso é um alerta');
// // alert('Isso é um alerta'); // Funciona

// // document.querySelector('h1'); // Seleciona o primeiro h1
// // document.body; // Retorna o body

// //window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

// const h1Selecionado = document.querySelector('h1');
// const h1Classes = h1Selecionado.classList;


// // NODE

// // Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

// function callbackh1() {
//   console.log('Clicou em ', h1Selecionado.innerText)
// }

// h1Selecionado.addEventListener('click', callbackh1)

// Retorne o url da página atual utilizando o objeto window
const url = window.location.href
console.log(url)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroElemento = document.querySelector('h1');
console.log(primeiroElemento);

// Retorne a linguagem do navegador

const linguagemNavegador = navigator.language;
console.log(linguagemNavegador);

// Retorne a largura da janela 

const larguraJanela = window.innerWidth;
console.log(larguraJanela);
