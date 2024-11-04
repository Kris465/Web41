# Картинки в HTML и CSS

## Картинки и их свойства

▎1. Изображения на странице. Тег ```<img>```

Тег ```<img>``` используется для вставки изображений на веб-страницу. Он является самозакрывающимся тегом и требует указания атрибута src, который указывает путь к изображению.

Пример:
```html
<img src="image.jpg" alt="Описание изображения">
```

▎2. Атрибуты тега ```<img>```

• src: путь к изображению.

• alt: текстовое описание изображения для доступности и SEO.

• width и height: задают размеры изображения.

• title: всплывающая подсказка при наведении.

▎3. CSS-свойства для изображений

CSS позволяет управлять стилем изображений:

• width и height: изменяют размеры.

• border: добавляет рамку.

• border-radius: закругляет углы.

• opacity: изменяет прозрачность.

▎4. Форматы графических файлов в Web

Наиболее распространенные форматы изображений:

• JPEG: хорош для фотографий, поддерживает сжатие.

• PNG: поддерживает прозрачность, лучше для графики.

• GIF: поддерживает анимацию, но ограничен в цветах.

• SVG: векторный формат, масштабируемый без потери качества.

Проверить какие изображения поддерживаются какими браузерами: https://caniuse.com/?search=png

Ссылки по теме:

- https://developer.mozilla.org/en-US/docs/Web/SVG
- https://en.wikipedia.org/wiki/PNG
- https://en.wikipedia.org/wiki/GIF
- https://en.wikipedia.org/wiki/JPEG
- https://en.wikipedia.org/wiki/Scalable_Vector_Graphics
- http://www.patrickhansen.com/2011/02/04/png-8-24-32

▎5. Верстка статьи с изображениями

Включает использование тегов ```<img>```, ```<figure>``` и ```<figcaption>``` для структурирования контента. Это позволяет сочетать текст и изображения, создавая более информативные статьи.

**Теги ```<figure>``` и ```<figcaption>```**

Тег ```<figure>``` используется для группировки изображения с его подписью, которая задается через ```<figcaption>```. Это улучшает семантику документа.

Пример:
```html
<figure>
    <img src="image.jpg" alt="Описание">
    <figcaption>Подпись к изображению</figcaption>
</figure>
```

▎6. Свойства группы background

Свойства фона позволяют управлять фоновыми изображениями и цветами элемента. Основные свойства:

• background-color: задает цвет фона.

• background-image: добавляет фоновое изображение.

**Свойство background-position**

Определяет положение фонового изображения. Можно использовать значения, такие как top, bottom, left, right, или координаты (например, 50% 50%).

**Свойство background-size**

Управляет размерами фонового изображения. Значения могут быть:

• cover: изображение масштабируется так, чтобы покрыть весь элемент.

• contain: изображение масштабируется так, чтобы полностью поместиться в элемент.

**Свойство background-attachment**

Определяет поведение фонового изображения при прокрутке:

• scroll (по умолчанию): фон прокручивается вместе с содержимым.

• fixed: фон фиксирован относительно окна браузера.

**Свойство background-origin**

Устанавливает область, из которой начинается позиционирование фонового изображения. Значения:

• border-box: фон начинается от границы элемента.

• padding-box: фон начинается от области заполнения.

• content-box: фон начинается от области содержимого.

**Свойство background-clip**

Определяет область, в которой виден фон:

• border-box

• padding-box

• content-box

**Обобщенное свойство background**

Позволяет задать все свойства фона одновременно. Пример использования:
```css
background: url('image.jpg') no-repeat center/cover;
```

**Множественные фоны**

CSS позволяет использовать несколько фоновых изображений на одном элементе, разделяя их запятыми:
background-image: url('image1.jpg'), url('image2.jpg');

### 1. Изображения на странице. Тег ```<img>```

▎Основные атрибуты тега ```<img>```:

1. src: Указывает путь к изображению.

2. alt: Предоставляет текстовое описание изображения для доступности и SEO.

3. width и height: Задают размеры изображения в пикселях.

4. title: Показывает всплывающее сообщение при наведении курсора.

▎Примеры использования:

**Пример 1: Простое изображение**
```html
<img src="image.jpg" alt="Описание изображения">
```
В этом примере изображение загружается из файла image.jpg, а текст "Описание изображения" будет показан, если изображение не удастся загрузить.

**Пример 2: Изображение с заданными размерами**
```html
<img src="image.jpg" alt="Описание изображения" width="300" height="200">
```
Здесь изображение будет отображаться с шириной 300 пикселей и высотой 200 пикселей, независимо от его оригинальных размеров.

**Пример 3: Изображение с всплывающей подсказкой**
```html
<img src="image.jpg" alt="Описание изображения" title="Это всплывающая подсказка">
```
При наведении курсора на изображение появится всплывающее сообщение "Это всплывающая подсказка".

**Пример 4: Использование CSS для стилизации**
```html
<img src="image.jpg" alt="Описание изображения" style="border: 2px solid black; border-radius: 10px;">
```
В этом примере к изображению применяется CSS-стилизация: черная рамка и закругленные углы.

**Пример 5: Изображение в контексте текста**
```html
<p>Вот изображение кота:</p>
<img src="cat.jpg" alt="Кот" width="300" height="200">
<p>Коты — замечательные животные!</p>
```
Здесь изображение кота вставлено между текстовыми абзацами, что создает связный контент.

**Альтернативный текст (alt)**

Атрибут alt важен для доступности. Он помогает людям с нарушениями зрения понять, что изображено на картинке. Также этот текст отображается, если изображение не может быть загружено.

### 2. Атрибуты тега ```<img>```

1. src

Описание: Указывает путь к изображению. Это обязательный атрибут.

Пример:
```html
<img src="https://example.com/image.jpg" alt="Пример изображения">
```
В этом примере изображение загружается с указанного URL.

2. alt

Описание: Предоставляет альтернативный текст для изображения. Этот текст отображается, если изображение не может быть загружено, и помогает пользователям с нарушениями зрения.

Пример:
```html
<img src="cat.jpg" alt="Кот сидит на окне">
```
Если изображение не загрузится, пользователи увидят текст "Кот сидит на окне".

3. width и height

Описание: Задают размеры изображения в пикселях. Эти атрибуты помогают избежать "скачков" при загрузке, так как браузер заранее знает размеры изображения.

Пример:
```html
<img src="image.jpg" alt="Описание изображения" width="400" height="300">
```
Это изображение будет отображаться с шириной 400 пикселей и высотой 300 пикселей.

4. title

Описание: Показывает всплывающее сообщение при наведении курсора на изображение. Это дополнительная информация о содержимом изображения.

Пример:
```html
<img src="logo.png" alt="Логотип компании" title="Логотип нашей компании">
```
При наведении на изображение пользователи увидят текст "Логотип нашей компании".

5. style

Описание: Позволяет применять встроенные CSS-стили к изображению.

Пример:
```html
<img src="image.jpg" alt="Описание изображения" style="border: 2px solid black; border-radius: 10px;">
```
Это изображение будет иметь черную рамку и закругленные углы.

6. class и id

Описание: Используются для применения CSS-стилей и JavaScript к изображению.

Пример:
```html
<img src="image.jpg" alt="Описание изображения" class="responsive" id="main-image">
```
Здесь изображение имеет класс responsive, который может быть использован для стилизации, и уникальный идентификатор main-image.

7. loading

Описание: Указывает, как браузер должен загружать изображение. Может принимать значения lazy (ленивая загрузка) или eager (обычная загрузка).

Пример:
```html
<img src="large-image.jpg" alt="Большое изображение" loading="lazy">
```
Это изображение будет загружаться только тогда, когда оно станет видимым на экране, что улучшает производительность страницы.

8. usemap

Описание: Связывает изображение с картой изображений (тег ```<map>```), позволяя создавать кликабельные области на изображении.

Пример:
```html
<img src="planets.jpg" alt="Планеты" usemap="#planetmap">

<map name="planetmap">
    <area shape="rect" coords="34,44,270,350" href="earth.html" alt="Земля">
    <area shape="circle" coords="337,300,44" href="mars.html" alt="Марс">
</map>
```
В этом примере области на изображении связаны с различными страницами.

9. srcset

Описание: Позволяет указать несколько версий изображения для разных экранов и разрешений. Это полезно для адаптивного дизайна.

Пример:
```html
<img src="small.jpg" alt="Описание изображения"
     srcset="medium.jpg 600w, large.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 50vw">
```
Браузер выберет подходящее изображение в зависимости от размера экрана пользователя.

10. decoding

Описание: Указывает, как браузер должен декодировать изображение (может принимать значения sync (синхронно), async (асинхронно) или auto(автоматически)).

Пример:
```html
<img src="image.jpg" alt="Описание изображения" decoding="async">
```
Это может помочь улучшить производительность страницы, особенно если у вас много изображений.

### 3. CSS-свойства для изображений

1. width и height

Описание: Эти свойства устанавливают ширину и высоту изображения. Их можно задавать как в пикселях, так и в процентах.

Пример:
```html
<img src="image.jpg" alt="Пример изображения" class="responsive-image">

<style>
.responsive-image {
    width: 100%; /* Изображение будет занимать 100% ширины родительского элемента */
    height: auto; /* Высота будет автоматически подстраиваться */
}
</style>
```
или если писать в отдельных файлах:
```html
<img src="image.jpg" alt="Пример изображения" class="responsive-image">
```
```css
.responsive-image {
    width: 100%; /* Изображение будет занимать 100% ширины родительского элемента */
    height: auto; /* Высота будет автоматически подстраиваться */
}
```
2. border

Описание: Позволяет добавлять рамки к изображениям.

Пример:
```html
<img src="image.jpg" alt="Пример изображения" class="bordered-image">

<style>
.bordered-image {
    border: 5px solid black; /* Черная рамка толщиной 5 пикселей */
}
</style>
```
отдельно:
```html
<img src="image.jpg" alt="Пример изображения" class="bordered-image">
```
```css
.bordered-image {
    border: 5px solid black; /* Черная рамка толщиной 5 пикселей */
}
```

3. border-radius

Описание: Используется для создания закругленных углов у изображений.

Пример:
```html
<img src="image.jpg" alt="Пример изображения" class="rounded-image">
```
```css
.rounded-image {
    border-radius: 15px; /* Закругление углов на 15 пикселей */
}
```

4. box-shadow

Описание: Добавляет тень к изображению, создавая эффект объема.

Пример:
```html
<img src="image.jpg" alt="Пример изображения" class="shadow-image">
```
```css
.shadow-image {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5); /* Тень с размерами и прозрачностью */
}
```
5. opacity

Описание: Устанавливает уровень прозрачности изображения. Значение варьируется от 0 (полностью прозрачное) до 1 (полностью непрозрачное).

Пример:
```html
<img src="image.jpg" alt="Пример изображения" class="transparent-image">
```
```css
.transparent-image {
    opacity: 0.7; /* Полупрозрачное изображение */
}
```

6. object-fit

Описание: Определяет, как содержимое изображения должно вписываться в заданные размеры. Особенно полезно для изображений с фиксированными размерами.

Пример:
```html
<img src="large-image.jpg" alt="Пример изображения" class="fit-image">
```
```css
.fit-image {
    width: 300px;
    height: 200px;
    object-fit: cover; /* Изображение будет обрезано, чтобы заполнить контейнер */
}
```
7. filter

Описание: Применяет графические эффекты к изображению, такие как размытие, яркость и контрастность.

Пример:
```html
<img src="image.jpg" alt="Пример изображения" class="filter-image">
```
```css
.filter-image {
    filter: grayscale(100%); /* Применяет черно-белый эффект к изображению */
}
```

8. cursor

Описание: Меняет вид курсора при наведении на изображение.

Пример:
```html
<img src="image.jpg" alt="Пример изображения" class="clickable-image">
```
```css
.clickable-image {
    cursor: pointer; /* Курсор будет выглядеть как указатель при наведении */
}
```

9. transform

Описание: Позволяет поворачивать, масштабировать или наклонять изображение.

Пример:
```html
<img src="image.jpg" alt="Пример изображения" class="rotate-image">
```
```css
.rotate-image {
    transform: rotate(15deg); /* Поворачивает изображение на 15 градусов */
}
```

10. position

Описание: Позволяет управлять положением изображения на странице.

Пример:
```html
<div style="position: relative;">
    <img src="image.jpg" alt="Пример изображения" class="absolute-image">
</div>
```
```css
.absolute-image {
    position: absolute; /* Позволяет позиционировать изображение относительно родителя */
    top: 20px;
    left: 30px;
}
```
### 4. Верстка текста с изображениями.

**Верстка статьи с изображениями**

Когда вы создаете статью, важно правильно структурировать контент, чтобы сделать его более читабельным и привлекательным. Использование тегов ```<img>```, ```<figure>``` и ```<figcaption>``` помогает организовать текст и изображения, создавая более информативные и визуально привлекательные страницы.

**Пример использования тегов**
```html
<article>
    <h1>Путешествие по горам</h1>
    <p>Недавно я посетил удивительные горы. Вот несколько фотографий, которые я сделал во время путешествия.</p>

    <figure>
        <img src="mountains.jpg" alt="Горы на закате" />
        <figcaption>Горы на закате. Это было потрясающее зрелище!</figcaption>
    </figure>

    <p>Путешествие было полным приключений и новых открытий. Я встретил много интересных людей.</p>

    <figure>
        <img src="hiking.jpg" alt="Поход по тропе" />
        <figcaption>Поход по живописной тропе.</figcaption>
    </figure>

    <p>Я обязательно вернусь сюда снова!</p>
</article>
```

**Подробнее о тегах ```<figure>``` и ```<figcaption>```**

```<figure>```

Описание: Этот тег используется для группировки изображения и его подписи. Он позволяет связать изображение с текстом, который его описывает или комментирует.

Преимущества: Использование ```<figure>``` помогает улучшить семантику документа, делая его более понятным для поисковых систем и доступными для людей с ограниченными возможностями.

```<figcaption>```

Описание: Этот тег используется внутри ```<figure>``` для добавления подписи к изображению. Подпись может содержать дополнительную информацию или контекст о изображении.

Преимущества: Подписи помогают читателям лучше понять, что изображено на картинке, и добавляют ценность к визуальному контенту.

**Пример с CSS**

Чтобы улучшить внешний вид вашего контента, вы можете добавить немного CSS:
```css
figure {
    text-align: center; /* Центрируем содержимое */
    margin: 20px 0; /* Отступы сверху и снизу */
}

img {
    max-width: 100%; /* Адаптивное изображение */
    height: auto; /* Сохраняем пропорции */
}

figcaption {
    font-style: italic; /* Курсив для подписи */
    color: #555; /* Цвет текста подписи */
}
```
### 5. Основные свойства фона

▎1.1. background-color

Описание: Задает цвет фона элемента. Цвет может быть задан как именем цвета, HEX-кодом или RGB/RGBA значением.

Пример:
```css
.box {
    background-color: lightblue; /* Используем цвет по имени */
}
```
```html
<div class="box">Это блок с голубым фоном.</div>
```

▎1.2. background-image

Описание: Добавляет фоновое изображение к элементу.

Пример:
```css
.box {
    background-image: url('background.jpg'); /* Указываем путь к изображению */
}
```
```html
<div class="box">Это блок с фоновым изображением.</div>
```

▎2. Свойство background-position

Описание: Определяет положение фонового изображения. Можно использовать относительные значения (top, bottom, left, right) или координаты в процентах.

Пример:
```css
.box {
    background-image: url('image.jpg');
    background-position: center; /* Центрируем изображение */
}
```
```html
<div class="box">Изображение расположено по центру.</div>
```

▎3. Свойство background-size

Описание: Управляет размерами фонового изображения.

• cover: Изображение масштабируется так, чтобы покрыть весь элемент.

• contain: Изображение масштабируется так, чтобы полностью поместиться в элемент.

Пример:
```css
.box {
    background-image: url('image.jpg');
    background-size: cover; /* Изображение полностью покрывает элемент */
}
```
```html
<div class="box">Фоновое изображение масштабировано до cover.</div>
```

▎4. Свойство background-attachment

Описание: Определяет поведение фонового изображения при прокрутке.

• scroll (по умолчанию): Фон прокручивается вместе с содержимым.

• fixed: Фон фиксирован относительно окна браузера.

Пример:
```css
.box {
    background-image: url('image.jpg');
    background-attachment: fixed; /* Фон фиксирован */
}
```
```html
<div class="box">Фоновое изображение фиксировано при прокрутке.</div>
```

▎5. Свойство background-origin

Описание: Устанавливает область, из которой начинается позиционирование фонового изображения.

• border-box: Фон начинается от границы элемента.

• padding-box: Фон начинается от области заполнения.

• content-box: Фон начинается от области содержимого.

Пример:
```css
.box {
    background-image: url('image.jpg');
    background-origin: padding-box; /* Фон начинается от области заполнения */
}
```

▎6. Свойство background-clip

Описание: Определяет область, в которой виден фон.
- border-box

Фон (или граница) начинается от границы элемента, включая ширину границы и внутренние отступы (padding). То есть, размеры элемента включают в себя ширину и высоту самого элемента, а также его границы и отступы.

- padding-box

Фон начинается от области заполнения элемента, исключая границу. Это означает, что фон будет виден только внутри отступов, но не за их пределами.

- content-box

Фон начинается от области содержимого элемента, полностью исключая границы и отступы. Это значит, что фон будет виден только в области, где находится текст или другие элементы внутри контейнера.

Пример:
```css
.box {
    background-image: url('image.jpg');
    background-clip: content-box; /* Фон виден только в области содержимого */
}
```

▎7. Обобщенное свойство background

Описание: Позволяет задать все свойства фона одновременно.

Пример:
```css
.box {
    background: url('image.jpg') no-repeat center/cover; /* Все свойства заданы в одной строке */
}
```

▎8. Множественные фоны

CSS позволяет использовать несколько фоновых изображений на одном элементе, разделяя их запятыми.

Пример:
```css
.box {
    background-image: url('image1.jpg'), url('image2.jpg'); /* Два фоновых изображения */
    background-position: left top, right bottom; /* Позиции для каждого изображения */
    background-size: cover, contain; /* Размеры для каждого изображения */
}
```
```html
<div class="box">Блок с несколькими фоновыми изображениями.</div>
```