// JS para abrir e fechar os tópicos do accordion
document.querySelectorAll('.accordion-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var content = this.nextElementSibling;
      var openContent = document.querySelector('.accordion-content.open');
      if (openContent && openContent !== content) {
        openContent.classList.remove('open');
      }
      content.classList.toggle('open');
    });
  });