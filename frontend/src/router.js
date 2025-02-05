import {Products} from "./components/products.js";

export class Router {

    constructor() {

        this.routes = [
            {
                route: '#/',
                title: 'Главная',
                view: 'views/index.html',
                load: () => {

                }
            },
            {
                route: '#/about',
                title: 'О нас',
                view: 'views/about.html',
                load: () => {

                }
            },
            {
                route: '#/contact',
                title: 'Контакты',
                view: 'views/contact.html',
                load: () => {

                }
            },
            {
                route: '#/products',
                title: 'Продукты',
                view: 'views/products.html',
                load: () => {
                    new Products();
                }
            },
        ];
    }

    async openRoute() {
        // Нахождение текущей страницы в массиве свойства routes
        const newRoute = this.routes.find(item => {
            const onlyHash = window.location.hash.split('?')[0];
            return onlyHash === item.route;
        });

        // Если страница не найдена, то возврат на главную
        if (!newRoute) {
            window.location.href = '#/';
            return;
        }

        // Задание html элементов конкретной страницы
        document.getElementById('app').innerHTML =
            await fetch(newRoute.view).then(response => response.text());

        // Задание заголовка страницы в ссылке браузера
        document.getElementById('page-title').innerText = newRoute.title;

        // Запуск функции load со скриптами для конкретной страницы
        newRoute.load();
    }
}