// Smooth scroll for navigation links
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 60, // offset for fixed nav
        behavior: 'smooth'
      });
    }

    // close menu on mobile
    const menu = document.querySelector('.nav-menu');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    }
  });
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});

// Contact form (example: just prevent default and alert)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for your message! I will get back to you soon.');
  e.target.reset();
});
