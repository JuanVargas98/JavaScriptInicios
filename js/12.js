// "use strict"; // Correr JS en modo estricto

const producto = {
    nombreProdcuto : "Monitos 20 Pulgadas",
    precio : 300,
    disponible : true

}

Object.freeze(producto); // .seal si deja modificar las propiedades existentes -- .freeze no te deja modiicar propiedades 

producto.imagen = 'imagen.jpg';

console.log(producto);