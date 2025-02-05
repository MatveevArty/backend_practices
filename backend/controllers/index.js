const path = require('path'); // Импортируем стандартный модуль nodejs для работы с путями файловой системы

class IndexController {
    static getIndex(req, res) {
        res.render('index', {
            title: 'INDEX'
        });
    }
}

module.exports = IndexController;