const path = require('path'); // Импортируем стандартный модуль nodejs для работы с путями файловой системы

class IndexController {
    static getIndex(req, res) {
        res.sendFile(path.resolve(__dirname + '/../views/index.html'));
    }
}

module.exports = IndexController;