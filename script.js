
function revealSections() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        }
    });
}


function scrollToContent() {
    document.getElementById('about').scrollIntoView({ 
        behavior: 'smooth' 
    });
}



function updateBlurOnScroll() {
    const scrolled = window.scrollY;
    
    
    const maxScroll = 800; 
    const maxBlur = 8; 
    
    const blurValue = Math.max(0, maxBlur - (scrolled / maxScroll) * maxBlur);
    
    document.documentElement.style.setProperty('--hero-blur', `${blurValue}px`);
}


function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth <= 768;
}


function initializeBlur() {
    if (isMobileDevice()) {
     
        document.documentElement.style.setProperty('--hero-blur', '3px');
    } else {
    
        document.documentElement.style.setProperty('--hero-blur', '8px');
    }
}


window.addEventListener('scroll', revealSections);
window.addEventListener('scroll', updateBlurOnScroll);
window.addEventListener('load', () => {
    revealSections();
    initializeBlur();
});


window.addEventListener('resize', initializeBlur);