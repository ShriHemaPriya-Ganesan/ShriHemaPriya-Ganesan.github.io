
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

window.onload = function () {
    if (window.location.hash) {
        window.location.href = window.location.pathname;
    }
};
