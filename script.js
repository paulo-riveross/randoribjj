document.addEventListener('DOMContentLoaded', function() {
    // Burger Menu Toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerNav = document.querySelector('.burger-nav');
    
    burgerIcon.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el evento se propague al document
        burgerMenu.classList.toggle('active');
    });
    
    // Cerrar el menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (burgerMenu.classList.contains('active') && 
            !burgerNav.contains(e.target) && 
            !burgerIcon.contains(e.target)) {
            burgerMenu.classList.remove('active');
        }
    });
    
    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.burger-nav a').forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
        });
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close burger menu if open
            if (burgerMenu.classList.contains('active')) {
                burgerMenu.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
   
    
    // Scroll Animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                const animationClass = element.classList[1];
                element.classList.add(animationClass);
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
});