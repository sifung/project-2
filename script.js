// Project filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const moonIcon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    if (isDarkMode) {
        moonIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        moonIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    moonIcon.classList.replace('fa-moon', 'fa-sun');
}

// Animate sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {threshold: 0.1});

sections.forEach(section => {
    observer.observe(section);
});

// Typewriter effect for header
const typewriterText = "Hiramoni Brahma";
const headerTitle = document.querySelector('header h1');
let i = 0;

function typeWriter() {
    if (i < typewriterText.length) {
        headerTitle.textContent += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start animation when page loads
window.addEventListener('load', () => {
    typeWriter();
});
