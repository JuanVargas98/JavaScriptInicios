// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];


//const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1, 2, 3]];
//console.table(arreglo);


// Acceder a los valores de un arreglo

//console.log(numeros[0]);
//console.log(numeros[1]);
//console.log(numeros[2]);
//console.log(numeros[3]);
//console.log(numeros[4]);

// Conocer la extension de un arreglo 

// console.log(meses.length);

/*numeros.forEach( function(mes) {

    console.log(mes);
})*/


numeros.push(60, 70, 80); // Agrega al final del arreglo

numeros.unshift(-10, -20, -30); // Agrega al inicio del arreglo


console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//meses.pop(); // Elimina el ultimo elemento del arreglo

//meses.shift(); // Elimina el primer elemento del arreglo

//meses.splice(2, 1); // Recorre el arreglo y llega a la posicion (2) y elimina un elemento (1)

//console.table(meses);

// Rest Operator o Spread Operator

const numeroArreglo = [...meses, 'Junio'];

console.log(numeroArreglo);
