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

    let pricePerSquareMeter;
    if (width === 12) {
        pricePerSquareMeter = 4166.67; // Цена за м² для ширины 12 м
    } else if (width === 16.5) {
        pricePerSquareMeter = 6060.61; // Цена за м² для ширины 16.5 м
    } else if (width === 25) {
        pricePerSquareMeter = 6000; // Цена за м² для ширины 25 м
    } else {
        pricePerSquareMeter = 5000; // Значение по умолчанию
    }

    const area = width * length;
    const finalPrice = area * pricePerSquareMeter;
    const formattedPrice = Math.round(finalPrice).toLocaleString('ru-RU');
    document.getElementById('price').textContent = `${formattedPrice} ₽`;
}

function callNow() {
    window.location.href = 'tel:+78005553535';  // Номер телефона компании
}
