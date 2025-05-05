export function initParticles() {
    const wrap = document.querySelector('.wrap');
    if (!wrap) return;

    const total = parseInt(wrap.getAttribute('data-particles')) || 300;
    const baseHue = parseFloat(getComputedStyle(wrap).getPropertyValue('--base-hue')) || 180;

    wrap.innerHTML = '';

    for (let i = 0; i < total; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');

        const z = Math.floor(Math.random() * 360);
        const y = Math.floor(Math.random() * 360);
        const hue = baseHue  + (40 / total) * i;
        const delay = Math.floor(Math.random() * 8000);

        // Set custom properties
        p.style.setProperty('--z', z);
        p.style.setProperty('--y', y);
        p.style.setProperty('animation-delay', `${delay}ms`);
        p.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

        wrap.appendChild(p);
    }

    wrap.style.animation = `rotate 14s infinite linear`;
}
