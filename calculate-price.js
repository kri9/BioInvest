function updateWidthValue(value) {
    document.getElementById('widthValue').textContent = value;
    calculatePrice();
}

function updateLengthValue(value) {
    document.getElementById('lengthValue').textContent = value;
    calculatePrice();
}

function calculatePrice() {
    const width = document.getElementById('width').value;
    const length = document.getElementById('length').value;
    const rawPrice = width * length * 1000;

    // Форматируем цену с пробелами каждые три цифры
    const formattedPrice = rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    document.getElementById('price').textContent = `${formattedPrice} ₽`;
}

function callNow() {
    window.location.href = 'tel:+78005553535';  // Номер телефона компании
}
