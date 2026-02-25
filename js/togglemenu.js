const toggleMenu = document.querySelector('.toggle_menu');
const headerNav = document.querySelector('.header__nav');
console.log('IM HERE!');
toggleMenu.addEventListener('click',()=>{
    console.log("IM HERE!");
    toggleMenu.classList.toggle('open');
    headerNav.classList.toggle('open');
})