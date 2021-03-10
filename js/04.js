// String o Cadenas de texto 
const tweet = "Monitor de 20 Pulgadas";
//const producto2 = String('Monitor 30\"'); // Poco Comun
//const producto3 = new String('Monitor de 50 Pulgadas'); // Poco Comun
const producto2 = 'Monitor HD';


console.log(tweet.length); // Length Conocer la cantidad de letras
console.log(producto2);
//console.log(producto3)

// IndexOf (retorna Posicion)
console.log(tweet.indexOf("Pulgadas")); // Sirve para encontrar un elemento en un String
console.log(producto2.indexOf('Hola')); // Si nos retorna -1 significa que esa palabra no existe en el String

// Include (Retorna tru o false)
console.log(tweet.includes("Pulgadas"));
console.log(producto2.includes('Hola'));

