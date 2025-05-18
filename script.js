// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        navLinks.classList.remove('active');
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Add click event to project cards for interactivity
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.project-title').textContent;
        alert(`You clicked on: ${title}`);
        // Replace alert with actual functionality, e.g., navigating to project details
    });
});

// Smooth scroll for View All Projects button (if linked to a section)
document.querySelector('.view-all-button').addEventListener('click', (e) => {
    e.preventDefault();
    // Example: Scroll to projects grid
    document.querySelector('.projects-grid').scrollIntoView({ behavior: 'smooth' });
});