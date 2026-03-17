const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menuIcon');

// Force image reload and reset state on page load
function resetMenuState() {
    menu.classList.remove('show');
    // Force image reload by resetting the src
    const currentSrc = menuIcon.src;
    menuIcon.src = '';
    menuIcon.src = currentSrc;
}

// Reset state when page is loaded/restored from cache
window.addEventListener('pageshow', function(event) {
    resetMenuState();
});

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('show');
    menuIcon.src = menu.classList.contains('show') 
        ? '/assets/icons/close-x.svg' 
        : '/assets/icons/hamburger-menu.svg';
});

// Close menu when clicking a link
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
        menu.classList.remove('show');
        menuIcon.src = '/assets/icons/hamburger-menu.svg';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
        menu.classList.remove('show');
        menuIcon.src = '/assets/icons/hamburger-menu.svg';
    }
});