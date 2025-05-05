/* seleccionarMetodo.js */
export function seleccionarMetodo(e) {
    const contactoDiv = document.querySelector('#contacto');
    contactoDiv.innerHTML = e.target.value === 'telefono'
        ? generarCamposTelefono()
        : generarCampoEmail();

    limpiarValidaciones(contactoDiv);
    aplicarValidacionDinamica();
}

function generarCamposTelefono() {
    return `
    <p>
      <label class="label" for="telefono"></label>
      <input
        type="tel"
        id="telefono"
        name="contacto[telefono]"
        placeholder="Número de teléfono"  
        required
        class="contacto-form__input"
        autocomplete="tel"
        pattern="^\\+?[0-9]{1,3}?[0-9]{7,10}$"
        title="Introduce un número válido, con o sin prefijo (+34), sin espacios ni guiones.">
    </p>
    
    <p>Elige la fecha y la hora que mejor te convenga para que te llamemos</p>

    <p>
      <label class="label" for="fecha">Fecha:</label>
      <input
        type="date"
        id="fecha"
        name="contacto[fecha]"
        required
        class="contacto-form__input">

      <label class="label" for="hora">Hora (9-18h):</label>
      <input
        type="time"
        id="hora"
        name="contacto[hora]"
        min="09:00"
        max="18:00"
        required
        class="contacto-form__input">
    </p>
  `;
}

function generarCampoEmail() {
    return `
    <p>
      <label class="label" for="email"></label>
      <input
        type="email"
        id="email"
        name="contacto[email]"
        placeholder="E-mail"
        title="Introduce un email válido como correo@ejemplo.com"
        required
        class="contacto-form__input"
        autocomplete="email" >
    </p>
  `;
}

export function limpiarValidaciones(contactoDiv) {
  // Limpiar clases de error y mensajes previos
  const inputs = contactoDiv.querySelectorAll('input');
  inputs.forEach(input => {
    input.classList.remove("valid", "error");
    input.removeAttribute("aria-invalid");
    // Limpiar los mensajes de error
    const errorMessage = input.parentElement.querySelector(".error-message");
    if (errorMessage) {
      errorMessage.textContent = '';
      errorMessage.classList.remove('visible');
    }
  });
}

function aplicarValidacionDinamica() {
  const nuevosInputs = document.querySelectorAll('#contacto input');

  nuevosInputs.forEach(input => {
    const errorSpan = document.querySelector(`#error-${input.id}`);

    input.addEventListener('input', () => {
      if (input.checkValidity()) {
        input.classList.remove('error');
        input.classList.add('valid');
        input.setAttribute('aria-invalid', 'false');
        if (errorSpan) errorSpan.textContent = '';
        if (errorSpan) errorSpan.classList.remove('visible');
      } else {
        input.classList.add('error');
        input.classList.remove('valid');
        input.setAttribute('aria-invalid', 'true');
        if (errorSpan) errorSpan.textContent = input.validationMessage;
        if (errorSpan) errorSpan.classList.add('visible');
      }
    });
  });
}