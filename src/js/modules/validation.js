export function setupFormValidation() {
    const forms = document.querySelectorAll('.contacto-form, .registro-form, .login-form');

    //patrones provisionles
    const patrones = {
        nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        telefono: /^\+?[0-9]{1,3}?[0-9]{7,10}$/,
        usuario: /^[a-zA-Z0-9_-]{3,20}$/,
        password: /^.{8,}$/ 
    };

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');

        // Validación en tiempo real
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                const id = input.id;
                const valor = input.value.trim();
                const regex = patrones[id];

                if (regex && !regex.test(valor)) {
                    input.classList.remove("valid");
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                    input.classList.add("valid");
                }
            });
        });

        // Validación al enviar
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let formIsValid = true;

            inputs.forEach(input => {
                const id = input.id;
                const valor = input.value.trim();
                const regex = patrones[id];

                if (regex && !regex.test(valor)) {
                    input.classList.add("error");
                    input.classList.remove("valid");
                    formIsValid = false;
                } else {
                    input.classList.remove("error");
                    input.classList.add("valid");
                }
            });

            if (formIsValid) {
                console.log('Formulario enviado correctamente');
                // Aquí podrías hacer un submit real o manejar con AJAX
            }
            if (!regex.test(valor)) {
                console.warn(`${id} inválido ->`, valor);
            }

        });
    });
}