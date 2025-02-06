const fs = require('fs');
const path = require('path');

class ProductModel {
    static path = path.join(__dirname, '../db', 'products.json');

    static async findAll() {
        return new Promise((resolve, reject) => {
           fs.readFile(this.path, 'utf-8', (error, data) => {
               if (error) {
                   reject(error);
               } else {
                   resolve(JSON.parse(data));
               }
           });
        });
    }

    static async find(id) {
        return new Promise((resolve, reject) => {
           fs.readFile(this.path, 'utf-8', (error, data) => {
               if (error) {
                   reject(error);
               } else {
                   try {
                       const products = JSON.parse(data);
                       const product = products.find(item => parseInt(item.id) === parseInt(id));

                       if (product) {
                           resolve(product);
                       } else {
                           reject('Продукт не найден');
                       }
                   } catch (e) {
                       reject('Невозможно обработать данные')
                   }
               }
           });
        });
    }
}

module.exports = ProductModel;