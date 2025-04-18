/* navMenu.js*/
export const toggleNavMenu = () => {
    const capsuleTrigger = document.querySelector('.capsule-trigger');
    const headerPod = document.querySelector('.header-pod');

    // Agrega un listener de clic
    capsuleTrigger.addEventListener('click', () => {
        const isExpanded = capsuleTrigger.getAttribute('aria-expanded') === 'true';

        // Alterna la clase activa para abrir/cerrar la cápsula
        capsuleTrigger.classList.toggle('active');

        // Cambia el estado de accesibilidad
        capsuleTrigger.setAttribute('aria-expanded', !isExpanded);

        // Alterna la visibilidad del menú
        headerPod.classList.toggle('active');
    });
};