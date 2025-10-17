 function toggleMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        }
   
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');

  themeToggleMobile.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
});
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';

    document.body.classList.add('fade-in');
})