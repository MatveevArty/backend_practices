const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    // Пример простейшего роутинга с html-строками
    switch (req.url) {
        case '/about':
            res.write('<h1>About page</h1>');
            break;
        case '/contact':
            res.write('<h1>Contact page</h1>');
            break;
        default:
            res.write('<h1>Index page</h1>');
    }
})

// Прослушиватель сервера для запуска
server.listen(process.argv[2], () => {
    console.log('Сервер запущен на порту 3000');
})