export default class Inventory{
    constructor(){
        this.productList = [];
    }

    addProduct(newProduct){
        this.productList.push(newProduct); //se agrega un nuevo producto al array productList
    }
    
    searchByCode(code){
        let foundProduct; //se declara una variable del producto encontrado
        for(let i = 0; i <  this.productList.length; i++){ //ciclo para hacerlo finito
            const selectedProduct = this.productList[i]; //se declara una constante que actualice la posición del producto seleccionado
            if(selectedProduct.code == code){
                foundProduct = selectedProduct; //si el código del producto seleccionado es igual al código que se ingresa, entonces el producto seleccionado se asigna al producto encontrado
            }
            
        }
        return foundProduct;// regresas el producto encontrado
    }
}