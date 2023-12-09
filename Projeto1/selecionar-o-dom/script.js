// ID getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID

//const animais = document.getElementById('animais');
//console.log(animais);
// Retorna null caso não exista

// const animais = document.getElementById('animaisasdas')
// console.log(animais)

// Classe e Tag

//getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ele será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection

//const gridSection = document.getElementsByClassName('grid-section');
//const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
// const ul = document.getElementsByTagName('ul');

// //Retorna o primeiro elemento
// //console.log(gridSection[1])

// //Seletor Geral Único

// // querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('#contato');
// const ultimoItem = document.querySelector('.animais-lista li:last-child');
// const linkCSS = document.querySelector('[href^="https://"]');
// const primeiroUl = document.querySelector('ul');

// // Busca dentro do Ul apenas
// //const navItem = primeiroUl.querySelector('li');

// const primeiroLi = document.querySelector('li');

// const linksInternos = document.querySelector('[href^="#"]');
// console.log(linksInternos.href);

// // querySlectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

// const gridSection = document.querySelectorAll('.grid-section');
// const listas = document.querySelectorAll('ul');
// const titulos = document.querySelectorAll('.titulo');
// const fotosAnimais = document.querySelectorAll('.animais-lista img')
// const animaisImg = document.querySelectorAll('.animais img');
// // Retorna o segundo elemento
// console.log(animaisImg[1]);

// HTMLCollection vs NodeList

// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com QuerySelectorAll é estática

// const titulo = document.querySelector('.titulo');
// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// titulo.classList.add('grid-section');

// console.log(gridSectionHTML); // 4 itens
// console.log(gridSectionNode); // 3 itens

// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// const primeiraUl = document.querySelector('ul');

// primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML);
// console.log(gridSectionNode);


// ARRAY-LIKE
// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

// gridSectionNode.forEach(function(item, index){
//   console.log(item);
// })

// const arrayGrid = Array.from(gridSectionHTML);

// arrayGrid.forEach(function(item){
//   console.log(item);
// })


// Retorne no console todas as imagens do site

const imagemSite = document.querySelectorAll('img');
console.log(imagemSite)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensAnimais = document.querySelectorAll('.animais-lista img');
const teste = document.querySelectorAll('.animais-lista img')
console.log(teste)

// Selecione todos os links internos (onde o href começa com #) '[href^="#"]'

const linksTeste = document.querySelectorAll('[href^="#"]');
console.log(linksTeste)

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
const ultimo = paragrafos
console.log(paragrafos[--paragrafos.length])

//querySelector busca o elemento, apenas 1 elemento, o primeiro que ele encontra

//querySelectorAll ele busca toda a lista em array

