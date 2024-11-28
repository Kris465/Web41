# Квест: Сайт об одной кофейне.

    Представье ситуацию, ваш первый заказ! Клиент просит написать сайт для своей кофейни. 

## ТЗ 1 (Работа с текстом и структурой html):

Клиент: Мне нужен сайт для кофейни. Сделайте его красивым и привлекательным.

1. Напишите простой сайт-одностраничник с информацией о кофейне.

2. Используйте загаловки, параграфы и выделение текста.

3. Обязательно сделайте стилизацию с помощью каскадных таблиц стилей.

**Подсказка:** теги ```<h1>```, ```<h2>```, ```<p>```, ```<strong>```, ```<em>``` и стилизовать текст с помощью CSS (например, font-family, font-size, line-height)

## TЗ 2 (Работа со списками):

Клиент: Одной страницы мало. Вообще непонятно что куда и как. Добавьте меню и чтобы легко можно было в него попасть!

1. Добавьте главную страницу и на ней навигационное меню сверху.

2. В меню должно быть три раздела: Главная, меню, о кофейне. 

3. В меню должны быть перечислены блюда. 

**Подсказка:** теги ```<ul>```, ```<ol>```, ```<li>``` и могут применять CSS для стилизации списков (например, list-style-type, padding, margin).

## ТЗ 3 (Работа с навигационном меню):

Клиент: Добавьте выпадающее меню! Всего три страницы, а в меню уже потеряться можно! Сделайте выпадающее меню с категориями блюд! Посетители теряются! А еще пусть оно выглядит современно и модно!

1. Сделайте минимум три основные категории для продуктов кафе. Разбейте страницу с меню на группы и сделайте ссылки на каждую из групп из выпадающего меню.

**Подсказка:** теги ```<nav>``` и ```<a>```, а также изучают стилизацию навигационных элементов с помощью CSS (display: flex, justify-content, align-items).

```html
    <nav>
        <ul class="menu">
            <li><a href="#">Главная</a></li>
            <li>
                <a href="#">Услуги</a>
                <ul class="submenu">
                    <li><a href="#">Услуга 1</a></li>
                    <li><a href="#">Услуга 2</a></li>
                    <li><a href="#">Услуга 3</a></li>
                </ul>
            </li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
    </nav>
```

## ТЗ 4 (Работа с картинками и фонами):

Клиент: Меню крайне скучное! У конкурентов на сайте висят к каждому блюду аппетитные картинки! Сделайте картинки к блюдам. А еще на главную добавьте зазывающий текст и фотографию кофейни, а то гости путаются и проходят мимо нас, потому что не узнают.

1. Добавьте уникальные картики, как маркеры к каждому элементу списка.

2. Добавьте картинку в верстку на главной странице и добавьте обтекание ее текстом.

3. В идеале заранее подумайте об адаптивности верстки и сделайте возможность обтекания нескольких картинок текстом на разной ширине экрана.

**Подсказка:** тег ```<img>``` и свойства CSS для изображений (max-width, border-radius) и фонов (background-image, background-color).

## ТЗ 5 (Работа с таблицами):

Клиент: Создайте страницу с акциями, на ней нужно прописать состав бизнес-ланчей и их цены. И показать сколько гость экономит, выбирая один из бизнес-ланчей. И обязательно добавьте акции в меню на главной странице! И сделайте таблицу аккуратной, легкочитаемой и максимально привлекателной! Но с сохранением общего стиля кофейни!

1. Создать новую страницу и с главной в навигационном меню ссылку на нее.

2. Создать три варианта бизнес-ланчей. Каждый оформить в виде таблицы. 3 столбика: список блюд, цена каждого, сколько будет стоить в ланче.

**Подсказка:** теги ```<table>```, ```<tr>```, ```<td>``` и стилизуют таблицы (например, border, padding, text-align)

## TЗ 6 (Работа с формами):

Клиент: Сделайте форму для заказа и кнопку к ней обязательно! Все в стилистике кафе!

1. Добавьте в меню пункт: Сделать заказ.

2. На отдельной странице создайте форму с полями: ввод имени, email, сообщение.

**Подсказка:** теги ```<form>```, ```<input>```, ```<textarea>```, а также применяют CSS для стилизации форм (например, border, padding, margin)

## ТЗ 7 (Адаптивная верстка):

Клиент: Сдейлайте, чтобы сайт красиво выглядел на всех устройствах!

1. Сделайте через медиа-запросы ограничения для устройств с разной шириной экрана.

2. Используйте flex-box и grid.

**Подсказка:** https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries

https://developer.mozilla.org/ru/docs/Web/CSS/grid

https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox