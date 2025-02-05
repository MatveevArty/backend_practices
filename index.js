const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Привет! 你好! Hello!');
})

// Прослушиватель сервера для запуска
server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
})