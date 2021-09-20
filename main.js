// Formas en las que se puede declarar un string

let nombre1 = "Juan";
let nombre2 = 'Pedro';
let nombre3 = `Maria`;

//

// let frase = `Lista de compras:
// * Aceite
// * Arroz
// * Carne
// * Frutas`;

// let frase = `Lista de compras:\n* Aceite \n* Arroz \n* Carne \n* Frutas`;

let saludo = 'Hola Mundo!';
// console.log(saludo[0]);
// for(let i=0; i<saludo.length; i++){
//    console.log(saludo[i]);
// }

// for(let iterador of 'Hola Mundo!'){
//   console.log(iterador);
// }

saludo[0]='h';
console.log(saludo[0]);

//Cambiando mayúsculas a minúsculas
console.log(saludo.toLowerCase());
.
console.log(saludo[0].toLowerCase());

let frase = 'Mi lenguaje favorito es "Javascript".'
// console.log(frase.indexOf('Mi'));
// console.log(frase.indexOf('lenguaje'));
// console.log(frase.indexOf('favorito'));
console.log(frase.indexOf('es'));
// console.log(frase.indexOf('Javascript'));