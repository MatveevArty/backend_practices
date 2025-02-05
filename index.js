const http = require('http');
const fs = require('fs'); // Импортируем модуль file system

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    let file = 'index';
    // Пример простейшего роутинга с html-строками
    switch (req.url) {
        case '/about':
            file = 'about';
            break;
        case '/contact':
            file = 'contact';
            break;
    }

    // Используем метод readFile для прочтения файлов из data, а для параметра err ничего не указываем
    fs.readFile('./views/' + file + '.html', 'utf8', (err, data) => {
        res.write(data);
        res.end()
    });
})

// Прослушиватель сервера для запуска
server.listen(process.argv[2], () => {
    console.log('Сервер запущен на порту 3000');
})