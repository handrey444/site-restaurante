const menu = document.getElementById('menu-mobile');
function togglemenu(){
    const header = document.getElementById('header');
    menu.classList.toggle('chekado')
    header.classList.toggle('active');
}

menu.addEventListener('click',togglemenu);
ScrollReveal().reveal('.main-section', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.pratos', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});