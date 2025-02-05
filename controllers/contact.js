const path = require('path'); // Импортируем стандартный модуль nodejs для работы с путями файловой системы

class ContactController {
    static getContact(req, res) {
        res.sendFile(path.resolve(__dirname + '/../views/contact.html'));
    }
}

module.exports = ContactController;