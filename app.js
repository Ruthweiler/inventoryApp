import Product from "./models/product.js" //importa la clase Product...
import Inventory from "./models/inventory.js";

const inventory = new Inventory();
const product1 = new Product(666, 'cucumber', 1, 15); //declaro un nuevo objeto producto y sus propiedades
const product2 = new Product(667, 'cucumber', 1, 15); //declaro un nuevo objeto producto y sus propiedades

console.log(inventory.productList)// imprimo la lista de productos del inventario

inventory.addProduct(product1); //agrego producto
inventory.addProduct(product2); //agrego producto

console.log(inventory.productList); // imprimo la lista de productos del inventario

console.log(inventory.searchByCode(666)); //busco el producto 666
console.log(inventory.searchByCode(667));//busco el producto 667
console.log(inventory.searchByCode(668));//busco el producto 668

//aprendí a acceder a métodos de una clase, asignar valores a una variable, a comparar valores entre variables, no es bueno hacer un return en el ciclo for

//aprendí que los arrays son objetos de la clase array y que sólo se puede modificar un parámetro, no la constante.

