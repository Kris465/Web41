<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

$randomNumbers = [];
for ($i = 0; $i < 100; $i++) {
    $randomNumbers[] = rand(1, 1000); 
}


$maxNumber = max($randomNumbers);
$minNumber = min($randomNumbers);


echo "Сгенерированные случайные числа:<br>";
foreach ($randomNumbers as $number) {
    echo $number . ' ';
}

echo "<br><br>Максимальное число: $maxNumber<br>";
echo "Минимальное число: $minNumber<br>";
?>
</body>
</html>