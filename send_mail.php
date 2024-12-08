<?php

function verifyRecaptcha($token, $secretKey)
{
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = [
        'secret' => $secretKey,
        'response' => $token
    ];

    // Отправляем запрос на проверку
    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $result = json_decode($response, true);

    // Проверка ответа
    if (!$result['success']) {
        die('Ошибка: reCAPTCHA не пройдена. Причины: ' . implode(', ', $result['error-codes'] ?? []));
    }

    if ($result['score'] < 0.5) {
        die('Ошибка: Низкий уровень доверия (' . $result['score'] . ').');
    }

    return true;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['recaptcha-token'];
    $secretKey = "6Lc8aZQqAAAAAGx-0ycCJ6_w7l8zAOkJRj_oID1q"; // Ваш секретный ключ

    // Проверка reCAPTCHA
    if (!verifyRecaptcha($token, $secretKey)) {
        die('Ошибка: reCAPTCHA проверка не пройдена.');
    }

    // Получаем данные из формы
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        die('Ошибка: Все поля обязательны для заполнения.');
    }

    // Настраиваем параметры письма
    $to = "bio-invest@ya.ru"; // Укажите ваш email
    $subject = "Новое сообщение с формы обратной связи";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $emailMessage = "Имя: $name\n";
    $emailMessage .= "Email: $email\n";
    $emailMessage .= "Телефон: $phone\n";
    $emailMessage .= "Сообщение:\n$message\n";

    // Отправляем письмо
    if (mail($to, $subject, $emailMessage, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка отправки сообщения.";
    }
} else {
    echo "Неверный метод запроса.";
}
?>
