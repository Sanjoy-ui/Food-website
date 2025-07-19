// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
  
    menuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav__links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // ScrollReveal animations
  ScrollReveal().reveal('.header__content', { delay: 200, origin: 'bottom', distance: '50px' });
  ScrollReveal().reveal('.banner__card', { delay: 300, origin: 'bottom', distance: '50px', interval: 200 });
  ScrollReveal().reveal('.order__card', { delay: 200, origin: 'bottom', distance: '50px', interval: 200 });
  ScrollReveal().reveal('.event__details', { delay: 300, origin: 'right', distance: '50px' });
  ScrollReveal().reveal('.reservation__container', { delay: 200, origin: 'bottom', distance: '50px' });
  ScrollReveal().reveal('.footer__content', { delay: 200, origin: 'top', distance: '50px' });