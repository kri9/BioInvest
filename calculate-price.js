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

    let finalPrice;

    // Фиксированные цены для заданных комбинаций
    if (width === 12 && length === 60) {
        finalPrice = 5000000; // 5 млн рублей
    } else if (width === 16.5 && length === 80) {
        finalPrice = 8000000; // 8 млн рублей
    } else if (width === 25 && length === 100) {
        finalPrice = 18000000; // 18 млн рублей
    } else {
        // Базовая стоимость за квадратный метр
        const basePricePerSquareMeter = 5000;
        const area = width * length;

        // Коэффициенты увеличения стоимости в зависимости от ширины
        let widthMultiplier;
        if (width === 12) {
            widthMultiplier = 1; // Базовая стоимость
        } else if (width === 16.5) {
            widthMultiplier = 1.2; // Увеличение на 20%
        } else if (width === 25) {
            widthMultiplier = 1.4; // Увеличение на 40%
        } else {
            widthMultiplier = 1; // По умолчанию (для новых размеров)
        }

        // Расчет стоимости
        finalPrice = area * basePricePerSquareMeter * widthMultiplier;
    }

    const formattedPrice = `${Math.round(finalPrice).toLocaleString('ru-RU')} ₽`;
    document.getElementById('price').textContent = formattedPrice;
}

function callNow() {
    window.location.href = 'tel:+78005553535'; // Номер телефона компании
}
