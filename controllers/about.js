const path = require('path'); // Импортируем стандартный модуль nodejs для работы с путями файловой системы

class AboutController {
    static getAbout(req, res) {
        res.sendFile(path.resolve(__dirname + '/../views/about.html'));
    }
}

module.exports = AboutController;