document.addEventListener('DOMContentLoaded', () => {
    // Инициализация значения цены при загрузке страницы
    const initialWidth = 12; // Начальное значение ширины 12 м
    const initialLength = document.getElementById('length').value;
    calculatePrice(initialWidth, initialLength);
    document.getElementById('widthValue').textContent = initialWidth;
});

function updateWidthValue(value) {
    let width;
    if (value == 1) {
        width = 12;
    } else if (value == 2) {
        width = 16.5;
    } else if (value == 3) {
        width = 25;
    }

    document.getElementById('widthValue').textContent = width;
    calculatePrice(width, document.getElementById('length').value);
}

function updateLengthValue(value) {
    document.getElementById('lengthValue').textContent = value;
    calculatePrice(document.getElementById('widthValue').textContent, value);
}

function calculatePrice(width, length) {
    width = parseFloat(width);
    length = parseInt(length);

    const basePrice = 3000000; // Базовая цена 3 000 000 рублей

    let widthMultiplier;
    if (width === 12) {
        widthMultiplier = 1;
    } else if (width === 16.5) {
        widthMultiplier = 1.5;
    } else if (width === 25) {
        widthMultiplier = 2;
    } else {
        widthMultiplier = 1; // По умолчанию
    }

    const lengthMultiplier = length / 60;

    const finalPrice = basePrice * widthMultiplier * lengthMultiplier;
    const formattedPrice = finalPrice.toLocaleString('ru-RU');
    document.getElementById('price').textContent = `${formattedPrice} ₽`;
}

function callNow() {
    window.location.href = 'tel:+78005553535';  // Номер телефона компании
}
