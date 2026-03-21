/* =============================================
   NAUFAL RAKHADETO — PORTFOLIO
   JavaScript/script.js
   ============================================= */

/* --- CUSTOM CURSOR --- */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

/* Cursor hover effect on interactive elements */
document.querySelectorAll('a, button, .skill-tag').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width      = '20px';
    cursor.style.height     = '20px';
    cursor.style.background = 'var(--magenta)';
    ring.style.width        = '50px';
    ring.style.height       = '50px';
    ring.style.borderColor  = 'rgba(255,0,200,0.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width      = '12px';
    cursor.style.height     = '12px';
    cursor.style.background = 'var(--cyan)';
    ring.style.width        = '36px';
    ring.style.height       = '36px';
    ring.style.borderColor  = 'rgba(0,255,231,0.5)';
  });
});

/* --- SCROLL REVEAL --- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity   = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.project-card, .skill-cat, .focus-item, .contact-item'
).forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, border-color 0.25s, box-shadow 0.25s';
  observer.observe(el);
});
