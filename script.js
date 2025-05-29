function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    scrollToSection(link.getAttribute('href'));
  });
});

// Animação de rolagem apenas para as seções que não são a inicial
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona apenas os conteúdos das seções que não são a inicial
  const contents = document.querySelectorAll('.section:not(#inicio) .content');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.5
  });

  contents.forEach(content => {
    observer.observe(content);
  });
});