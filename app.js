import Product from "./models/product.js" //importa la clase Product...

const product1 = new Product(666, 'cucumber', 1, 15); //declaro un nuevo objeto producto y sus propiedades
product1.name = 2;
let v = [];
v.length = 3

//aprendí que los arrays son objetos de la clase array y que sólo se puede modificar un parámetro, no la constante.