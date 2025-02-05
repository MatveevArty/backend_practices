const express = require('express'); // Импортируем установленный модуль express
const app = express(); // Объявляем переменную app на основе фреймворка express
const path = require('path'); // Импортируем стандартный модуль nodejs для работы с путями файловой системы
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
})
app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
})
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/views/contact.html');
})
app.get('/products', function (req, res) {
    res.sendFile(__dirname + '/views/products.html');
})

// Прослушиватель сервера для запуска
app.listen(process.argv[2], () => {
    console.log('Сервер запущен на порту 3000');
})