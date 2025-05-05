export function setupMultiStepForm() {
    const form = document.querySelector('.registro-form');
    if (!form) return;

    const radios = form.querySelectorAll('input[type="radio"].page-radio');
    const pages = form.querySelectorAll('.page');
    const progressFill = document.querySelector('.progress-fill');
    let currentIndex = 0;

    const totalSteps = pages.length;

    // Inicializamos la primera página
    pages.forEach(page => {
        page.style.display = "none"; // Ocultamos todas las páginas
    });
    pages[0].style.display = "block"; // Solo mostramos la primera página

    // Iniciamos la barra de progreso con 25% en la primera página
    if (progressFill) {
        progressFill.style.width = '25%';
        const progressBarContainer = document.querySelector('.progress-bar-container');
        if (progressBarContainer) {
            progressBarContainer.setAttribute('aria-valuenow', '25');
        }
    }

    radios.forEach((radio, index) => {
        radio.addEventListener("change", () => {
            const currentPage = pages[currentIndex];
            const nextPage = pages[index];

            // Solo validamos si vamos hacia adelante
            if (index > currentIndex) {
                const visibleInputs = currentPage.querySelectorAll('input, textarea');
                let stepValid = true;

                visibleInputs.forEach(input => {
                    const isValid = input.checkValidity();
                    input.classList.toggle("valid", isValid);
                    input.classList.toggle("error", !isValid);
                    input.setAttribute('aria-invalid', !isValid);
                    if (!isValid) stepValid = false;
                });

                if (!stepValid) {
                    radio.checked = false;
                    alert("Por favor, completa correctamente los campos antes de continuar.");
                    return;
                }
            }

            // Cambio de página permitido
            currentPage.style.display = "none";
            nextPage.style.display = "block";
            currentIndex = index;

            // Actualizar barra de progreso
            if (progressFill) {
                // Calculamos el porcentaje de progreso
                let progressPercent = ((currentIndex + 1) / totalSteps) * 100;

                // Si estamos en la primera página, mostramos 25%
                if (currentIndex === 0) {
                    progressPercent = 25;
                }

                // Actualizamos el ancho de la barra de progreso
                progressFill.style.width = `${progressPercent}%`;

                // Actualizamos los atributos de la barra de progreso para accesibilidad
                const progressBarContainer = document.querySelector('.progress-bar-container');
                if (progressBarContainer) {
                    progressBarContainer.setAttribute('aria-valuenow', progressPercent.toFixed(0)); // El valor accesible del progreso
                    progressBarContainer.setAttribute('role', 'progressbar');
                    progressBarContainer.setAttribute('aria-valuemin', '0');
                    progressBarContainer.setAttribute('aria-valuemax', '100');
                }
            }
        });
    });
}