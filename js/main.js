/* ════════════════════════════════════
   main.js — scroll reveal / MV bokeh
════════════════════════════════════ */

/* ── scroll reveal ── */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.05 },
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* ── MV bokeh particles ── */
/* reduced-motion 設定時は生成しない（CSS側でオーロラも静止する） */
(function () {
  const stage = document.getElementById('mvParticles');
  if (!stage) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const colors = ['#F5CCE0', '#F4DAE9', '#ABDAE3', '#A5BBD4'];
  const COUNT = 18;

  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('span');
    p.className = 'mv__particle';
    const size = 10 + Math.random() * 22;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.background = colors[i % colors.length];
    p.style.animationDuration = 9 + Math.random() * 9 + 's';
    p.style.animationDelay = -Math.random() * 18 + 's';
    p.style.setProperty('--sx', Math.random() * 8 - 4 + 'vw');
    stage.appendChild(p);
  }
})();
