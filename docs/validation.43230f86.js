(0,("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6d95.register)("4OyvD",function(e,o){function t(){let e=document.querySelectorAll(".contacto-form, .registro-form, .login-form"),o={nombre:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/,email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,telefono:/^\+?[0-9]{1,3}?[0-9]{7,10}$/,usuario:/^[a-zA-Z0-9_-]{3,20}$/,password:/^.{8,}$/};e.forEach(e=>{let t=e.querySelectorAll("input, textarea");t.forEach(e=>{e.addEventListener("input",()=>{let t=e.id,r=e.value.trim(),a=o[t];a&&!a.test(r)?(e.classList.remove("valid"),e.classList.add("error")):(e.classList.remove("error"),e.classList.add("valid"))})}),e.addEventListener("submit",function(e){e.preventDefault();let r=!0;t.forEach(e=>{let t=e.id,a=e.value.trim(),l=o[t];l&&!l.test(a)?(e.classList.add("error"),e.classList.remove("valid"),r=!1):(e.classList.remove("error"),e.classList.add("valid"))}),r&&console.log("Formulario enviado correctamente"),regex.test(valor)||console.warn(`${id} inv\xe1lido ->`,valor)})})}Object.defineProperty(e.exports,"setupFormValidation",{get:function(){return t},set:void 0,enumerable:!0,configurable:!0})});
//# sourceMappingURL=validation.43230f86.js.map
