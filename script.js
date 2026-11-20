// Ano automático no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Animação de entrada: elementos aparecem quando entram na tela
const els = document.querySelectorAll('.card, .courses li, .timeline li, .facts li, .stack > div');
els.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
els.forEach(el => io.observe(el));
