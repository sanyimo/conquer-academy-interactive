export function seleccionarMetodo(e) {
    const contactoDiv = document.querySelector('#contacto');
    contactoDiv.innerHTML = e.target.value === 'telefono'
        ? generarCamposTelefono()
        : generarCampoEmail();
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

      <p>Elige la fecha y la hora que mejor te convenga para que te llamemos</p>

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
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
        required
        class="contacto-form__input"
        autocomplete="email"
      >
    </p>
  `;
}

// Aquí vamos a agregar un evento que ajusta dinámicamente el atributo pattern para el teléfono después de que se haya insertado el campo.
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el campo de teléfono
  const telefonoInput = document.getElementById('telefono');
  const emailInput = document.getElementById('email');

  // Establecemos los patrones para los inputs si existen en el DOM
  if (telefonoInput) {
    telefonoInput.setAttribute('pattern', '^\\+?[0-9]{1,3}?[0-9]{7,10}$');
  }

  if (emailInput) {
    emailInput.setAttribute('pattern', '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}');
  }
});