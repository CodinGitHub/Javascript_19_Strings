// 3 Formas en las que se puede declarar un string

let nombre1 = "Juan";
let nombre2 = 'Pedro';
let nombre3 = `Maria`;

let declaracion = 'Mi lenguaje favorito es "Javascript".'
console.log(declaracion);

let compras = `Lista de compras:
* Aceite
* Arroz
* Carne
* Frutas`;
console.log(compras);


let compras2 = `Lista de compras:\n* Aceite \n* Arroz \n* Carne \n* Frutas`;
console.log(compras2);

//Largo del string

let saludo = 'Hola Mundo!';
console.log(saludo.length);

//Accediendo a caracteres

console.log(saludo[0]);

//Los string son inmutables

saludo[0]='h';
console.log(saludo[0]);

saludo = "hola Mundo!"
console.log(saludo[0]);

//Cambiando entre mayúsculas y minúsculas
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());

//Subcadenas

let frase = 'HTML es un lenguaje de marcado y Javascript es un lenguaje de programación'
console.log(frase.indexOf('HTML'));
console.log(frase.indexOf('lenguaje'));
console.log(frase.indexOf('es'));

console.log(frase.indexOf('es', 6));
console.log(frase.indexOf('CSS'));

console.log(frase.lastIndexOf('es'));

//includes, startsWith, endsWith

console.log(frase.includes('lenguaje'));
console.log(frase.includes('CSS'));
console.log(frase.startsWith('HTML'));
console.log(frase.endsWith('programación'));
console.log(frase.endsWith('programacion'));

//Obteniendo un substring (substring, substr y slice)

let lenguaje = 'Javascript';
console.log(lenguaje.substring(2,5));
console.log(lenguaje.substr(-5,2));
console.log(lenguaje.slice(-5m));