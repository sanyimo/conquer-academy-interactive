(0,("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6d95.register)("lJpae",function(e,t){function o(e){document.querySelector("#contacto").innerHTML="telefono"===e.target.value?`
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
  `:`
    <p>
      <label class="label" for="email"></label>
      <input
        type="email"
        id="email"
        name="contacto[email]"
        placeholder="E-mail"
        title="Introduce un email v\xe1lido como correo@ejemplo.com"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
        required
        class="contacto-form__input"
        autocomplete="email"
      >
    </p>
  `}Object.defineProperty(e.exports,"seleccionarMetodo",{get:function(){return o},set:void 0,enumerable:!0,configurable:!0}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("telefono"),t=document.getElementById("email");e&&e.setAttribute("pattern","^\\+?[0-9]{1,3}?[0-9]{7,10}$"),t&&t.setAttribute("pattern","[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}")})});
//# sourceMappingURL=seleccionarMetodo.df1a7442.js.map
