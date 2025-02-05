const express = require('express'); // Импортируем установленный модуль express
const app = express(); // Объявляем переменную app на основе фреймворка express
const path = require('path'); // Импортируем стандартный модуль nodejs для работы с путями файловой системы

const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact');
const productRoutes = require('./routes/product');

// Обработка роутов на статические файлы
app.use(express.static(path.join(__dirname, 'public')));

// Обработка роутов на конкретные страницы
app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.use('/products', productRoutes);

// Прослушиватель сервера для запуска
app.listen(process.argv[2], () => {
    console.log('Сервер запущен на порту 3000');
})