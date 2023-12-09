// var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// // var ultimoItem = videoGames.pop();

// for (var numero = 1; numero <= 4; numero++) {
//   console.log(numero) //var numero = 0 (inicio) / numero <= 10 (condição) e numero++ (incremento).
// }

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// var videoGames = ['Switch', 'XBOX', 'PS4', '3DS']

// for(var item = 0; item < videoGames.length; item++) {
//   console.log(videoGames[item])
// }

// var videoGames = ['Switch', 'Xbox', 'PS4', '3DS'];

// for(var item = 0; item < videoGames.length; item++) {
//   console.log(videoGames[item])
//   if(videoGames[item] === 'PS4') {
//     break
//   }};

//   //forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

//   var videoGames = ['Switch', 'Xbox', 'PS4', '3DS'];

//   videoGames.forEach(function(item) {

//   })

  // Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilGanhou = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < brasilGanhou.length; i++) {
  console.log(`O brasil ganhou a copa de ${brasilGanhou[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] == 'Pera') {
    break;
  }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];