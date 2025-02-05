const express = require('express'); // Импортируем установленный модуль express
const app = express(); // Объявляем переменную app на основе фреймворка express

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
})
app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
})
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/views/contact.html');
})

// Прослушиватель сервера для запуска
app.listen(process.argv[2], () => {
    console.log('Сервер запущен на порту 3000');
})