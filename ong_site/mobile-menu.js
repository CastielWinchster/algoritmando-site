// Lógica para abrir e fechar o menu responsivo de tela cheia

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-btn');

  hamburger.addEventListener('click', function () {
    mobileMenu.classList.add('active');
    hamburger.classList.add('active');
  });

  closeBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });

  // Opcional: fechar o menu ao clicar em um link
  const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
});