const navExpandMore = document.querySelector('.nav-expand-more');
const mobileMenu = document.querySelector('.mobile-menu');

let isMenuOpen = false;

navExpandMore.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        mobileMenu.classList.add('open');
    } else {
        mobileMenu.classList.remove('open');
    }
});
