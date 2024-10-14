document.addEventListener("DOMContentLoaded", function () {
    // Загрузка меню через fetch
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;

            // Привязываем события к загруженному меню
            const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const logo = document.querySelector('img[alt="BioInvest Logo"]'); // Логотип

            if (mobileMenuToggle && mobileMenu) {
                mobileMenuToggle.addEventListener('click', function () {
                    // Переключаем класс "show" для мобильного меню
                    if (mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.remove('hidden');
                        mobileMenu.classList.add('show');
                        document.body.classList.add('show-logo-hidden'); // Добавляем класс для скрытия логотипа
                        document.body.style.overflow = 'hidden'; // Блокируем прокрутку
                    } else {
                        mobileMenu.classList.remove('show');
                        mobileMenu.classList.add('hidden');
                        document.body.classList.remove('show-logo-hidden'); // Убираем класс для показа логотипа
                        document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
                    }
                });
            }

            // Закрываем меню при нажатии на ссылку внутри меню
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('show');
                    mobileMenu.classList.add('hidden');
                    document.body.classList.remove('show-logo-hidden'); // Показываем логотип
                    document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
                });
            });
        })
        .catch(error => console.error('Ошибка при загрузке меню:', error));
});
