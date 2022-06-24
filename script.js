const bar = document.querySelector('.nav-bar i');
const navMenu = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');
bar.addEventListener('click', () => {
    logo.remove();
    bar.classList.toggle("show");
    navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-menu li a").forEach(n => n.addEventListener('click', function () {
    bar.classList.remove('show');
    navMenu.classList.remove('show');
}));
