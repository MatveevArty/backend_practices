const fs = require('fs'); // Стандартный модуль file system

// Асинхронная функция для прочтения файла
fs.readFile('./text.txt', (error, data) => {
    console.log(data.toString());
})