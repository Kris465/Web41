<?php

$name = '';
$email = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Ввод данных пользователя</title>
</head>
<body>
    <?php if ($name && $email): ?>
        <h2>Данные пользователя</h2>
        <p>Имя: <?php echo $name; ?></p>
        <p>Email: <?php echo $email; ?></p>
        <hr>

        <a href="">Ввести заново</a>
    <?php else: ?>
        <h2>Введите свои данные</h2>
        <form method="post" action="">
            <label for="name">Имя:</label><br>
            <input type="text" id="name" name="name" required><br><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>

            <input type="submit" value="Отправить">
        </form>
    <?php endif; ?>
</body>
</html>