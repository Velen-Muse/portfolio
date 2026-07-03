// Quick easter egg console log to welcome other developers looking at your source code!
console.log("👋 Welcome to Velen's portfolio source! Built with pure HTML, CSS, and JS.");

// Example of a smooth fade-in reveal effect for elements when scrolling
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Setup styles for dynamic reveal
document.querySelectorAll('.skill-card, .project-card').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});
