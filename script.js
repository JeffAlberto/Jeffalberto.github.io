<meta name='viewport' content='width=device-width, initial-scale=1'/><script>const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.background = '#2d3748';
    navLinks.style.width = '100%';
    navLinks.style.padding = '1rem 5%';
});</script>