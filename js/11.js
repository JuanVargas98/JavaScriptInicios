
const producto = {
    nombreProdcuto : "Monitos 20 Pulgadas",
    precio : 300,
    disponible : true

}

//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(precioProducto);
//console.log(nombreProducto);

// Destructuring 

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);

