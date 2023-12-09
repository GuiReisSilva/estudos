// CLASSLIST
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

// const menu = document.querySelector('.menu');

// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); // duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); // adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false
// menu.classList.replace('ativo', 'inativo');

// const menu = document.querySelector('.menu');
// menu.classList.add('azul', 'teste');

// if(menu.classList.contains('azul')){
//   menu.classList.add('possui-azul');
// } else {
//   menu.classList.add('nao-possui-azul');
// };

// console.log(menu.className)


// menu.className = 'ativo teste azul'

// menu.className += ' vermelho'

// console.log(menu.className);
// console.log(menu.classList);


// attributes

// Retorna uma array-like com os atributos do elemento.

// const animais = document.querySelector('.animais');

// console.log(animais.attributes['data-texto']);


// GETATTRIBUTE E SETATTRIBUTE
// Métodos que retornam ou definem de acordo com o atributo selecionado

// const img = document.querySelector('img');

// img.getAttribute('src'); // valor do src
// img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
// img.hasAttribute('id'); // true / false
// img.removeAttribute('alt'); // remove o alt

// img.hasAttributes(); // true / false se tem algum atributo
// COPIAR
// É muito comum métodos de get e set;

// const img = document.querySelector('img');

// const scrImg = img.getAttribute('scr');

// img.setAttribute('alt', 'É uma raposa');

// const possuiAlt = img.hasAttribute('alt');
// console.log(possuiAlt)


// console.log(img);


// READ ONLY VS WRITABLE
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

// const animais = document.querySelector('.animais');

// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only
// COPIAR
// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

// const carro = {
//   portas: 4,
//   andar: function(km) {
//     console.log(`Andou ${km}`)
//   }
// }


//EXERCÍCIO
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const img = document.querySelectorAll('img');
// const temImg = img.hastributte('alt');

img.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(img, possuiAtributo)
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://www.google.com/');

console.log(link)