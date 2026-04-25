// Simple interactions for Athletix Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjusting for sticky navbar height
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add sticky class on scroll for extra shadow effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)';
        }
    });

    // Simple interaction for the mockup card to show it's "alive"
    const mockupCard = document.querySelector('.mockup-card');
    mockupCard.addEventListener('mouseenter', () => {
        mockupCard.style.animationPlayState = 'paused';
    });
    mockupCard.addEventListener('mouseleave', () => {
        mockupCard.style.animationPlayState = 'running';
    });
});
