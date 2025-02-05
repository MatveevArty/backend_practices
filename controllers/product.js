const ProductModel = require('../models/product');

class ProductController {
    static async getProducts(req, res) {

        const products = await ProductModel.findAll()

        res.render('products', {
            title: 'PRODUCTS',
            products: products
        });
    }
}

module.exports = ProductController;