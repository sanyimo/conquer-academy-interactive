!function(){function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}(0,("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6d95.register)("cHhC7",function(t,o){function a(e){let t=document.querySelector("#contacto");t.innerHTML="telefono"===e.target.value?`
    <p>
      <label class="label" for="telefono"></label>
      <input
        type="tel"
        id="telefono"
        name="contacto[telefono]"
        placeholder="N\xfamero de tel\xe9fono"  
        required
        class="contacto-form__input"
        autocomplete="tel"
        pattern="^\\+?[0-9]{1,3}?[0-9]{7,10}$"
        title="Introduce un n\xfamero v\xe1lido, con o sin prefijo (+34), sin espacios ni guiones.">
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
  `:`
    <p>
      <label class="label" for="email"></label>
      <input
        type="email"
        id="email"
        name="contacto[email]"
        placeholder="E-mail"
        title="Introduce un email v\xe1lido como correo@ejemplo.com"
        required
        class="contacto-form__input"
        autocomplete="email" >
    </p>
  `,l(t),document.querySelectorAll("#contacto input").forEach(e=>{let t=document.querySelector(`#error-${e.id}`);e.addEventListener("input",()=>{e.checkValidity()?(e.classList.remove("error"),e.classList.add("valid"),e.setAttribute("aria-invalid","false"),t&&(t.textContent=""),t&&t.classList.remove("visible")):(e.classList.add("error"),e.classList.remove("valid"),e.setAttribute("aria-invalid","true"),t&&(t.textContent=e.validationMessage),t&&t.classList.add("visible"))})})}function l(e){e.querySelectorAll("input").forEach(e=>{e.classList.remove("valid","error"),e.removeAttribute("aria-invalid");let t=e.parentElement.querySelector(".error-message");t&&(t.textContent="",t.classList.remove("visible"))})}e(t.exports,"seleccionarMetodo",function(){return a}),e(t.exports,"limpiarValidaciones",function(){return l})})}();
//# sourceMappingURL=seleccionarMetodo.10a18634.js.map
