// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.getElementById('quoteForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.phone || !data.email || !data.service) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
        alert('Please enter a valid phone number.');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your quote request! We will contact you within 24 hours.');
    this.reset();
});

// Add loading animation to buttons on click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.type === 'submit') {
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 2000);
        }
    });
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add transition to header
if (header) {
    header.style.transition = 'transform 0.3s ease-in-out';
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .feature-card, .stat-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Add click tracking for analytics (placeholder)
document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function() {
        // Track contact interactions
        console.log('Contact interaction:', this.href);
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Feature card hover effects
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Auto-format phone number input
document.getElementById('phone')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length >= 2) {
        if (value.startsWith('61')) {
            // Australian format
            value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, '+$1 $2 $3 $4');
        } else if (value.startsWith('04')) {
            // Australian mobile without country code
            value = value.replace(/^(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
        }
    }
    
    e.target.value = value;
});

// Add smooth reveal animation on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Initialize page
document.body.style.opacity = '0';