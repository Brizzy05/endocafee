function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    if (!navbar.contains(e.target)) {
        document.getElementById('navLinks').classList.remove('active');
    }
});

// Pause hero videos on mobile to improve page speed
function handleHeroVideos() {
    const videos = document.querySelectorAll('.hero-video');
    if (window.innerWidth <= 768) {
        videos.forEach(v => { v.pause(); v.removeAttribute('autoplay'); });
    } else {
        videos.forEach(v => { v.play(); });
    }
}
handleHeroVideos();
window.addEventListener('resize', handleHeroVideos);

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(245, 240, 232, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = 'none';
    }
});