// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.querySelector('i').classList.remove('fa-times');
        menuBtn.querySelector('i').classList.add('fa-bars');
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Also animate sections on scroll
document.querySelectorAll('.section-title').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Typing Effect
const texts = [".NET Developer", "Clean Architecture Enthusiast", "Backend Specialist"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;
let typeSpeed = 100;
const typingElement = document.querySelector('.typing-text');

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
        typeSpeed = 50;
    } else {
        letter = currentText.slice(0, ++index);
        typeSpeed = 150;
    }

    typingElement.textContent = letter;

    if (!isDeleting && letter.length === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(type, typeSpeed);
}

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeBtn.querySelector('i');

// Check for saved user preference
if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

themeBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        disableLightMode();
    } else {
        enableLightMode();
    }
});

function enableLightMode() {
    body.classList.add('light-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
}

function disableLightMode() {
    body.classList.remove('light-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
}

// Scroll Spy
const sections = document.querySelectorAll('section, header');
const navLi = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    // Add offset for fixed header
    const offset = 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - offset)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
// Trigger once on load
document.dispatchEvent(new Event('scroll'));
