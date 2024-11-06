function updateWidthValue(value) {
    // Программно ограничиваем значение до ближайшего из трех допустимых значений
    let width;
    if (value < 14.25) {
        width = 12;
    } else if (value < 20.75) {
        width = 16.5;
    } else {
        width = 25;
    }

    // Устанавливаем значение ширины в интерфейсе
    document.getElementById('widthValue').textContent = width;
    document.getElementById('width').value = width; // Обновляем фактическое значение слайдера
    calculatePrice(width, document.getElementById('length').value);
}

function updateLengthValue(value) {
    document.getElementById('lengthValue').textContent = value;
    calculatePrice(document.getElementById('widthValue').textContent, value);
}

function calculatePrice(width, length) {
    width = parseFloat(width);
    length = parseInt(length);

    const baseWidth = 12;     // Базовая ширина 12 м
    const baseLength = 60;    // Базовая длина 60 м
    const basePrice = 300000; // Базовая цена 300 000 рублей для 12м x 60м

    // Рассчитываем множители для ширины и длины
    let widthMultiplier;
    if (width === 12) {
        widthMultiplier = 1; // для 12 м
    } else if (width === 16.5) {
        widthMultiplier = 1.5; // для 16.5 м
    } else if (width === 25) {
        widthMultiplier = 2; // для 25 м
    }

    const lengthMultiplier = length / baseLength; // Множитель для длины

    // Итоговая стоимость
    const finalPrice = basePrice * widthMultiplier * lengthMultiplier;

    // Форматируем цену для отображения с пробелами
    const formattedPrice = finalPrice.toLocaleString('ru-RU');
    document.getElementById('price').textContent = `${formattedPrice} ₽`;
}

function callNow() {
    window.location.href = 'tel:+78005553535';  // Номер телефона компании
}
