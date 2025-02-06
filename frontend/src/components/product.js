import {UrlManager} from "../utils/url-manager.js";

export class Product {

    constructor() {

        this.productElement = document.getElementById('product');

        this.id = UrlManager.getQueryParams()['id'];

        this.getProduct(this.id)
            .then(product => this.fillProduct(product));
    }

    // Запрос на бэкенд для получения данных продуктов
    async getProduct(id) {
        const response = await fetch('http://localhost:3000/api/products' + id);
        return await response.json();
    }

    // Заполнение страницы полученными товарами
    fillProduct(product) {
        if (product) {
            // Создаём основной div с классом product
            const productElement = document.createElement('div');
            productElement.className = 'product';

            // Создаём заголовок с классом title
            const titleElement = document.createElement('div');
            titleElement.className = 'title';
            titleElement.innerText = product.title;

            // Создаём блок с классом description
            const descriptionElement = document.createElement('div');
            descriptionElement.className = 'description';
            descriptionElement.innerText = product.description;

            // Создаём блок с классом price
            const priceElement = document.createElement('div');
            priceElement.className = 'price';
            priceElement.innerText = product.price + ' $';

            // Вкладываем каждый дочерний элемент в основной div с классом product, а его - в массив productsElement
            this.productElement.appendChild(titleElement);
            this.productElement.appendChild(descriptionElement);
            this.productElement.appendChild(priceElement);
        }
    }
}
