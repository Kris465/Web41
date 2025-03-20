<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Фигуры на странице</title>
    <style>
        body {
            position: relative;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .square {
            width: 100px;
            height: 100px;
            background-color: red; /* Цвет квадрата */
            position: absolute;
            top: 50px; /* Позиция по вертикали */
            left: 50px; /* Позиция по горизонтали */
        }
        .circle {
            width: 100px;
            height: 100px;
            background-color: blue; /* Цвет круга */
            border-radius: 50%;
            position: absolute;
            top: 200px; /* Позиция по вертикали */
            left: 200px; /* Позиция по горизонтали */
        }
        .triangle {
            width: 0;
            height: 0;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 100px solid green; /* Цвет треугольника */
            position: absolute;
            top: 400px; /* Позиция по вертикали */
            left: 100px; /* Позиция по горизонтали */
        }
    </style>
</head>
<body>
    <div class="square"></div>
    <div class="circle"></div>
    <div class="triangle"></div>
</body>
</html>