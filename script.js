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
    
    // Resto del código permanece igual...
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, phone, message });
            
            // Show success message
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
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