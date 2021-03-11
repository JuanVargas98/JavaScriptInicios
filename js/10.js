// Objetos

const producto = {
    nombreProdcuto : "Monitos 20 Pulgadas",
    precio : 300,
    disponible : true

}

console.log(producto);

//console.log(producto.precio);
//console.log(producto.nombreProducto);
//console.log(producto.disponible);
//onsole.log(producto["precio"]);

// Agregar Propiedades
producto.imagen = 'imagen.jpg';

// Elimiar Propiedades 
delete producto.disponible;

console.log(producto);
