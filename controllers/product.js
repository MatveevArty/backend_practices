const path = require('path'); // Импортируем стандартный модуль nodejs для работы с путями файловой системы

class ProductController {
    static getProducts(req, res) {
        res.sendFile(path.resolve(__dirname + '/../views/products.html'));
    }
}

module.exports = ProductController;