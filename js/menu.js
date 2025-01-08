<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글
    const mobileMenuButtons = document.querySelectorAll('.mobile-menu-button');
    mobileMenuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('show');
        });
    });

    // 데스크톱에서 hover 이벤트 처리
    if (window.innerWidth > 768) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                item.addEventListener('mouseenter', () => {
                    submenu.style.display = 'block';
                });
                item.addEventListener('mouseleave', () => {
                    submenu.style.display = 'none';
                });
            }
        });
    }
=======
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글
    const mobileMenuButtons = document.querySelectorAll('.mobile-menu-button');
    mobileMenuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('show');
        });
    });

    // 데스크톱에서 hover 이벤트 처리
    if (window.innerWidth > 768) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                item.addEventListener('mouseenter', () => {
                    submenu.style.display = 'block';
                });
                item.addEventListener('mouseleave', () => {
                    submenu.style.display = 'none';
                });
            }
        });
    }
>>>>>>> fe9e6ceecd64f20fe517ede450e4d744dba8caaf
}); 