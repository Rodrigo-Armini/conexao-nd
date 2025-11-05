// Alternador de modo de alto contraste
const btn = document.getElementById('toggle-contrast');
btn.addEventListener('click', function() {
  document.body.classList.toggle('high-contrast');
});