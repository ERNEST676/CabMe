

// Mobile Navbar Toggle
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Dropdown Menu Toggle
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const menu = btn.nextElementSibling;
        menu.classList.toggle('active');
    });
});
