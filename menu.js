fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-placeholder').innerHTML = data;

        // Привязываем обработчики событий для мобильного меню после загрузки меню
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenuButton = document.getElementById('close-menu-button');

        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', function () {
                if (mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Блокируем прокрутку
                } else {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
                }
            });
        }

        if (closeMenuButton && mobileMenu) {
            closeMenuButton.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
            });
        }

        // Закрытие мобильного меню при клике на любой пункт меню
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
            });
        });
    })
    .catch(error => console.error('Ошибка при загрузке меню:', error));
