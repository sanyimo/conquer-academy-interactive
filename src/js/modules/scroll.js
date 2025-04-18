export function initScrollToTopButton() {
    const scrollToTopButton = document.getElementById('scrollToTop');

    if (!scrollToTopButton) return;

    // Asegurarse de que el botón esté oculto al inicio
    scrollToTopButton.style.display = "none"; // Ocultamos el botón por defecto

    // Mostrar el botón cuando te desplaces hacia abajo 300px
    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopButton.style.display = "block"; // Muestra el botón
        } else {
            scrollToTopButton.style.display = "none"; // Lo oculta de nuevo
        }
    };

    // Desplazar hacia arriba cuando se haga clic en el botón
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
