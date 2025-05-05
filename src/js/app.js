import { toggleNavMenu } from './modules/navMenu.js';

document.addEventListener('DOMContentLoaded', function () {
    // Función comun
    toggleNavMenu();

    // Cargar y aplicar ScrollToTopButton solo si el elemento con el id existe
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (scrollToTopButton) {
        import('./modules/scroll.js').then(({ initScrollToTopButton }) => {
            initScrollToTopButton(scrollToTopButton);
        });
    }

    // Cargar partículas solo si es necesario
    if (document.querySelector('.wrap')) {
        import('./modules/particles.js').then(({ initParticles }) => {
            initParticles();
        });
    }
});

// Cargar módulos específicos por página
const page = document.body.getAttribute('data-page');

// Agrupamos las páginas que necesitan 'validation.js'
const pagesWithValidation = ['contacto', 'registro', 'login'];
if (pagesWithValidation.includes(page)) {
    import('./modules/validation.js').then(({ setupFormValidation }) => {
        setupFormValidation();

        // Si es la página de registro, carga también multistep
        if (page === 'registro') {
            import('./modules/multistep.js').then(({ setupMultiStepForm }) => {
                setupMultiStepForm();
            });
        }
        
        if (page === 'contacto') {
            import('./modules/seleccionarMetodo.js').then(({ seleccionarMetodo }) => {
                setupContactoPage(seleccionarMetodo);
            });
        }
    });
}

function setupContactoPage(seleccionarMetodo) {
    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    metodoContacto.forEach(input => input.addEventListener('click', (e) => {
        seleccionarMetodo(e);

        // Reaplicar la validación sobre los nuevos inputs generados
        setTimeout(() => {
            import('./modules/validation.js').then(({ setupFormValidation }) => {
                setupFormValidation();
            });
        }, 50); // Espera breve para asegurar que innerHTML se haya aplicado
    }));
}