const ProductModel = require('../models/product');

class ProductController {
    static async getProducts(req, res) {

        const products = await ProductModel.findAll()
        res.send(products); // Отправляем продукты в ответ запроса
    }
}

module.exports = ProductController;