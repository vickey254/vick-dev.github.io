// ===== Mobile menu toggle =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

// ===== Typing effect for hero subtitle =====
const typedEl = document.querySelector('.typed');
const words = ['Web Developer', 'Problem Solver', 'Lifelong Learner', 'Creator'];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const word = words[wordIndex];
    typedEl.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex < word.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else if (!deleting) {
        deleting = true;
        setTimeout(type, 1500); // pause at full word
    } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
    }
}
type();

// ===== Scroll reveal animation =====
const sections = document.querySelectorAll('.section, .hero-content');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

sections.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ===== Contact form =====
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = "✅ Message sent! I'll get back to you soon.";
    form.reset();
    setTimeout(() => formStatus.textContent = '', 4000);
});