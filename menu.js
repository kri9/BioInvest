// Функция для переключения подменю
function toggleSubmenu(button) {
    var submenu = button.nextElementSibling;
    submenu.classList.toggle('hidden'); // Добавляем или убираем класс hidden для подменю
}

// Открытие и закрытие мобильного меню через делегирование событий
document.addEventListener('click', function (event) {
    const mobileMenuToggle = event.target.closest('#mobile-menu-toggle');
    const closeMenuButton = event.target.closest('#close-menu-button');

    if (mobileMenuToggle) {
        var mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    if (closeMenuButton) {
        var mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    // Автоматическое скрытие подменю при клике вне меню
    if (!event.target.closest('#mobile-menu') && !mobileMenuToggle) {
        var submenus = document.querySelectorAll('#mobile-menu ul');
        submenus.forEach(function (submenu) {
            submenu.classList.add('hidden');
        });
    }
});
