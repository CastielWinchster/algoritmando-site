document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-btn');

  function openMenu() {
    mobileOverlay.classList.add('active');
    hamburger.classList.add('hidden'); // esconde o ícone do hambúrguer
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    mobileOverlay.classList.remove('active');
    hamburger.classList.remove('hidden'); // mostra o ícone novamente
    document.body.classList.remove('no-scroll');
  }

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      openMenu();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // fecha ao clicar fora do menu (no overlay)
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', (e) => {
      if (e.target === mobileOverlay) closeMenu();
    });
  }

  // opcional: fecha quando clica em um link dentro do menu
  const links = document.querySelectorAll('.mobile-menu-links a');
  links.forEach(a => a.addEventListener('click', closeMenu));
});