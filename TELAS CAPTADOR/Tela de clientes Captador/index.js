const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//mostrar sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//fechar sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//escolher tema
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
})

