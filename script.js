// script.js

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const isVisible = elementTop < windowHeight - 100;
    if (isVisible) {
      el.classList.add('visible');
    }
  });
}

// Função para animar o nome com letras caindo
function animateName() {
  const nameContainer = document.querySelector('.header h1');
  const fullName = 'Lucas Rocha de Almeida';

  // Limpa o conteúdo atual
  nameContainer.innerHTML = '';

  // Cria as letras com delay individual
  [...fullName].forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char; // espaço preservado
    span.style.animationDelay = `${index * 0.1}s`;
    nameContainer.appendChild(span);
  });
}

// Verifica se o header está visível para disparar a animação
function checkHeaderInView() {
  const header = document.querySelector('.header');
  const rect = header.getBoundingClientRect();
  const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

  if (inView) {
    animateName();
  }
}

window.addEventListener('scroll', () => {
  revealOnScroll();
  checkHeaderInView();
});

window.addEventListener('load', () => {
  revealOnScroll();
  animateName();
});
