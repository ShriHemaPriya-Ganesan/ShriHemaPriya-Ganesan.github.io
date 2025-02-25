const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');
const navbarLinks = document.querySelectorAll('.navbar-link');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        }
    });
});
window.onload = function () {
    if (window.location.hash) {
        window.location.href = window.location.pathname;
    }
};
