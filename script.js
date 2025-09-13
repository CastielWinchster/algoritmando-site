// Animação no botão
document.querySelector(".btn-grad").addEventListener("mouseover", () => {
  console.log("Hover no botão!");
});

// Função de Busca
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('searchInput');
  const clearIcon = document.querySelector('.clear-icon');

  function toggleClearIcon() {
    if (input.value.length > 0) {
      clearIcon.style.display = 'block';
    } else {
      clearIcon.style.display = 'none';
    }
  }

  clearIcon.addEventListener('click', function () {
    input.value = '';
    input.focus();
    toggleClearIcon();
  });

  input.addEventListener('input', toggleClearIcon);

  // Inicializa o estado do ícone
  toggleClearIcon();
});

// Loading Screen
document.addEventListener('DOMContentLoaded', function () {
  // ...existing code...

  // Loading screen
  const loadingScreen = document.getElementById('loading-screen');
  window.onload = function () {
    setTimeout(function () {
      loadingScreen.classList.add('hide');
    }, 5000); // tempo em ms (1.2s)
  };
});

// Menu hamburguer responsivo
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
