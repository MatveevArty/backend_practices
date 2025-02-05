const express = require('express'); // Импортируем установленный модуль express
const app = express(); // Объявляем переменную app на основе фреймворка express
const routes = require('./routes/index');

// Задаём использование json-формата для всего приложения
app.use(express.json());
app.use(express.urlencoded({extended: false})); // настраиваем специальную кодировку для параметров

// Главный роутер для бэкенд-приложения
app.use('/api', routes); // используем именно приставку /api, чтобы все обрабатываемые url бэкенд-приложением, а далее шли конкретнные сущности

// Прослушиватель сервера для запуска
app.listen(process.argv[2], () => {
    console.log('Сервер запущен на порту 3000');
})