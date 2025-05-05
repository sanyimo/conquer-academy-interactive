/* navMenu.js*/
export const toggleNavMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerPod = document.querySelector('.header-pod');

    // Agrega un listener de clic
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

        // Alterna la clase activa para abrir/cerrar la cápsula
        menuToggle.classList.toggle('active');

        // Cambia el estado de accesibilidad
        menuToggle.setAttribute('aria-expanded', !isExpanded);

        // Alterna la visibilidad del menú
        headerPod.classList.toggle('active');
    });
};