/* VELS STUDIO — interactivity */

// Reveal-on-scroll
document.querySelectorAll('.reveal, .service-card, .process-card, .port-card, .timeline-col > div')
  .forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Portfolio filters
const filters = document.querySelectorAll('.filter');
const cards   = document.querySelectorAll('#portfolioGrid .port-card');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    cards.forEach(c => {
      const match = cat === 'All' || c.dataset.cat === cat;
      c.classList.toggle('hidden', !match);
    });
  });
});

// Testimonials carousel
const reviews = document.querySelectorAll('.review');
let rIdx = 0;
const setReview = (i) => {
  rIdx = (i + reviews.length) % reviews.length;
  reviews.forEach((r, k) => r.classList.toggle('active', k === rIdx));
};
document.getElementById('prevReview')?.addEventListener('click', () => setReview(rIdx - 1));
document.getElementById('nextReview')?.addEventListener('click', () => setReview(rIdx + 1));

// Contact form
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.innerHTML = "Thanks — I'll be in touch! <i class='icon arrow'></i>";
});
