<?php
// Создаем массив фигур
$shapes = [
    ['name' => 'Квадрат', 'coordinates' => [50, 50], 'color' => 'red'],
    ['name' => 'Круг', 'coordinates' => [150, 50], 'color' => 'blue'],
    ['name' => 'Треугольник', 'coordinates' => [250, 50], 'color' => 'green'],
    ['name' => 'Прямоугольник', 'coordinates' => [350, 50], 'color' => 'orange'],
    ['name' => 'Эллипс', 'coordinates' => [450, 50], 'color' => 'purple'],
];
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Фигуры на странице</title>
    <style>
        body {
            position: relative; /* Устанавливаем относительное позиционирование для body */
            height: 200px; /* Устанавливаем высоту для видимости фигур */
            background-color: #f0f0f0; /* Фоновый цвет для лучшей видимости фигур */
        }
        .shape {
            position: absolute;
        }
        .square {
            width: 50px;
            height: 50px;
            background-color: inherit; /* Устанавливаем цвет фона из стиля */
        }
        .circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: inherit; /* Устанавливаем цвет фона из стиля */
        }
        .triangle {
            width: 0;
            height: 0;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-bottom: 50px solid; /* Цвет задается через границу */
        }
        .rectangle {
            width: 100px;
            height: 50px;
            background-color: inherit; /* Устанавливаем цвет фона из стиля */
        }
        .ellipse {
            width: 100px;
            height: 50px;
            border-radius: 50%;
            background-color: inherit; /* Устанавливаем цвет фона из стиля */
        }
    </style>
</head>
<body>

<h1>Фигуры на странице</h1>

<?php
// Отображаем фигуры на странице
foreach ($shapes as $shape) {
    $x = $shape['coordinates'][0];
    $y = $shape['coordinates'][1];
    $color = $shape['color'];
    $name = strtolower($shape['name']); // Приводим название фигуры к нижнему регистру для использования в классе

    if ($name === 'triangle') {
        // Для треугольника устанавливаем цвет через границу
        echo "<div class='shape $name' style='left: {$x}px; top: {$y}px; border-bottom-color: $color;'></div>";
    } else {
        // Для остальных фигур устанавливаем цвет фона
        echo "<div class='shape $name' style='left: {$x}px; top: {$y}px; background-color: $color;'></div>";
    }
}
?>

</body>
</html>
