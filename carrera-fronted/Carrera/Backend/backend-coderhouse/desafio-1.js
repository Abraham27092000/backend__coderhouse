import { promises as fs } from 'fs'

class ProductManager {
    constructor(path) {
        this.path = path
        this.products = []
    }

    async addProduct(product) {
        if (this.products.find(producto => producto.code == product.code)) {
            return "Producto existente"
        } else {
            //Consultar el array del txt
            this.products.push(product)
            //Guardar en el txt
            //Producto con este code no existe
        }
    }

    async getProducts() {
        const products = await fs.readFile(this.path, 'utf-8')
        const prods = JSON.parse(products)
        console.log(prods)
    }

    async getProductById(id) {
        const product = this.products.find(producto => producto.id == id)

        if (product) { //Objeto o undefined
            return product
        }

        return "Not Found"
    }

    async updateProduct() {

    }

    async deleteProduct() {

    }


}

class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0) { //Si no ingresan un valor string vacío
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementID()
    }

    static incrementID() { //Valores de la clase no presentes en objetos
        if (this.idIncrement) { //Si existe la propiedad incrementa
            this.idIncrement++
        } else { // Si no existe la propiedad se asigna con el valor 1
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const product1 = new Product("Consola", "Consola", 300, "", "C1", 5) //String vacío pero sigue existiendo
const product2 = new Product("Videojuegos", "Videojuegos", 65, "", "V2", 9) // *
const product3 = new Product("Periféricos", "Periféricos", 80, "", "P3", 12) // *

const productManager = new ProductManager('./info.txt')
/*productManager.addProduct(product1)
productManager.addProduct(product2)
console.log(productManager.addProduct(product1))
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(5))
*/
await productManager.getProducts()