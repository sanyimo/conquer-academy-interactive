import { limpiarValidaciones } from './seleccionarMetodo.js';

export function setupFormValidation() {
    const forms = document.querySelectorAll('.contacto-form, .registro-form, .login-form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');
        const password = form.querySelector('#password');
        const password2 = form.querySelector('#password2');

        const processInput = (input) => {
            input.value = sanitizeInput(input);

            if (password && password2 && (input === password || input === password2)) {
                validatePasswords(password, password2);
            }

            const isValid = input.checkValidity();
            input.classList.toggle("valid", isValid);
            input.classList.toggle("error", !isValid);
            input.setAttribute('aria-invalid', !isValid);

            // Gestión del mensaje visual de error
            let errorMessage = input.parentElement.querySelector(".error-message");

            if (!errorMessage) {
                errorMessage = document.createElement("div");
                errorMessage.classList.add("error-message");
                errorMessage.setAttribute("aria-live", "polite");
                input.parentElement.appendChild(errorMessage); // Usa el contenedor padre del input
            }

            if (!isValid) {
                errorMessage.textContent = input.validationMessage;
                errorMessage.classList.add('visible');
            } else {
                errorMessage.textContent = '';
                errorMessage.classList.remove('visible');
            }
            
            return isValid;
        };

        // Validación al escribir
        inputs.forEach(input => {
            input.addEventListener("input", () => processInput(input));
        });

        // Validación al enviar
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let formIsValid = true;

            inputs.forEach(input => {
                if (!processInput(input)) formIsValid = false;
            });


            if (formIsValid) {
                submitForm();
                showModalMessage();
                form.reset();

                // Forzamos la eliminación de las clases de validación y de los estados de aria-invalid después del reset
                setTimeout(() => {
                    inputs.forEach(input => {
                        input.classList.remove("valid", "error");
                        input.removeAttribute('aria-invalid');
                        input.removeAttribute("aria-live");

                        // Limpiar cualquier mensaje de error
                        const errorMessage = input.parentElement.querySelector(".error-message");
                        if (errorMessage) {
                            errorMessage.textContent = '';
                            errorMessage.classList.remove('visible');
                        }
                    });
                    //  Limpiar los inputs generados dinámicamente en #contacto
                    const contactoDiv = document.querySelector('#contacto');
                    if (contactoDiv) {
                        limpiarValidaciones(contactoDiv);
                        contactoDiv.innerHTML = '';
                    }
                }, 0);
            }
        });
        function submitForm() {
            // Aquí iría la lógica para enviar el formulario
            console.log('Formulario enviado con éxito!');
        }
    });
}

function sanitizeInput(input) {
    let value = input.value.trim();
    if (input.type === "email") value = value.toLowerCase();
    return value;
}

function validatePasswords(pass1, pass2) {
    if (pass1.value !== pass2.value) {
        pass2.setCustomValidity("Las contraseñas no coinciden.");
    } else {
        pass2.setCustomValidity("");
    }
}
function showModalMessage() {
    // Crear el modal con la pipa animada y el mensaje
    const modal = document.createElement('div');
    modal.classList.add('form-modal');
    modal.innerHTML = `
        <div class="form-modal__content">
            <div class="circle"></div>
            <svg class="checkmark" viewBox="0 0 52 52">
                <path class="checkmark__path" fill="none" stroke="#00ffe0" stroke-width="5" d="M14 27 l10 10 l20 -20"/>
            </svg>
            <p class="modal-text">Formulario enviado correctamente</p>
        </div>
    `;

    // Añadir el modal al body
    document.body.appendChild(modal);

    // Animación de aparición
    modal.classList.add('show');

    // Desaparecer el modal después de 3 segundos
    setTimeout(() => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 500); // Tiempo de transición para desaparecer
    }, 3000);
}
