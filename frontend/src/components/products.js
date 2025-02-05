export class Products {

    constructor() {

        this.productsElement = document.getElementById('products');
        this.getProducts()
            .then(products => this.fillProducts(products));
    }

    // Запрос на бэкенд для получения данных продуктов
    async getProducts() {
        const response = await fetch('/api/products');
        return await response.json();
    }

    // Заполнение страницы полученными товарами
    fillProducts(products) {
        if (products && products.length > 0) {
            products.forEach((product) => {

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
                productElement.appendChild(titleElement);
                productElement.appendChild(descriptionElement);
                productElement.appendChild(priceElement);
                this.productsElement.appendChild(productElement);
            })
        }
    }
}