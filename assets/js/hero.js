document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.bubbles-container');
  if (!container) return;

  const count = 5;

  for (let i = 0; i < count; i += 1) {
    const bubble = document.createElement('span');
    bubble.className = 'bubble';

    bubble.style.setProperty('--size', `${22 + Math.random() * 28}px`);
    bubble.style.setProperty('--x', `${Math.random() * 80 + 8}%`);
    bubble.style.setProperty('--y', `${Math.random() * 70 + 12}%`);
    bubble.style.setProperty('--dx', `${(Math.random() - 0.5) * 90}px`);
    bubble.style.setProperty('--dy', `${-(40 + Math.random() * 100)}px`);
    bubble.style.setProperty('--delay', `${(i * -1.4).toFixed(2)}s`);
    bubble.style.setProperty('--duration', `${(7 + Math.random() * 4).toFixed(2)}s`);
    bubble.style.setProperty('--opacity', `${(0.35 + Math.random() * 0.4).toFixed(2)}`);

    container.appendChild(bubble);
  }
});
