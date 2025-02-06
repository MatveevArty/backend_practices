const ProductModel = require('../models/product');

class ProductController {
    static async getProducts(req, res) {

        const products = await ProductModel.findAll()
        res.send(products); // Отправляем продукты в ответ запроса
    }

    static async getProduct(req, res) {

        const {id} = req.params;
        const product = await ProductModel.find(id)
        res.send(product); // Отправляем продукты в ответ запроса
    }

    static async addProduct(req, res) {

        const product = await ProductModel.create(req.body);
        res.send(product); // Отправляем продукты в ответ запроса
    }

    static async changeProduct(req, res) {

        const {id} = req.params;
        const product = await ProductModel.change(id, req.body);
        res.send(product); // Отправляем продукты в ответ запроса
    }
}

module.exports = ProductController;