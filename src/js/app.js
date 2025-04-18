// app.js
import { initScrollToTopButton } from './modules/scroll.js';
import { toggleNavMenu } from './modules/navMenu.js';

document.addEventListener('DOMContentLoaded', function () {
    initScrollToTopButton();
    toggleNavMenu();
});

// Importación dinámica para cargar módulos bajo demanda
const page = document.body.getAttribute('data-page'); 

if (page === 'contacto') {
    import('./modules/seleccionarMetodo.js').then(({ seleccionarMetodo }) => {
        setupContactoPage(seleccionarMetodo);
    });
    import('./modules/validation.js').then(({ setupFormValidation }) => {
        setupFormValidation();
    });
}

if (page === 'registro') {
    import('./modules/validation.js').then(({ setupFormValidation }) => {
        setupFormValidation();
    });
}

function setupContactoPage(seleccionarMetodo) {
    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    metodoContacto.forEach(input => input.addEventListener('click', seleccionarMetodo));
}