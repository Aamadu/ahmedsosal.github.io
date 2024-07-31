// scripts.js content
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('nav');
  const hero = document.querySelector('.hero');

  function handleScroll() {
      const heroBottom = hero.getBoundingClientRect().bottom;

      if (heroBottom <= 0) {
          navbar.classList.remove('transparent');
          navbar.classList.add('solid');
      } else {
          navbar.classList.remove('solid');
          navbar.classList.add('transparent');
      }
  }

  window.addEventListener('scroll', handleScroll);

  // Initial check in case the user loads the page not at the top
  handleScroll();
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      this.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
    });
  }
});



document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Simple content preloading
  window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(section);
    });
  });

  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('bg-gray-800', 'shadow');
    } else {
      nav.classList.remove('bg-gray-800', 'shadow');
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScrollAnimation() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      if (isElementInViewport(section)) {
        section.classList.add('loaded');
      }
    });
  }
  
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('load', handleScrollAnimation);
  
  document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky navbar
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Smooth scrolling for all pages
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

function setDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
  }
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  setDarkMode(true);
}

// Add event listener to dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark-mode'));
});

// Apply dark mode on page load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    setDarkMode(true);
  }
});

