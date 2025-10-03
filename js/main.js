document.addEventListener('DOMContentLoaded', function () {
    /**
     * Configura la funcionalidad de "Ver más / Ocultar" para una sección.
     * @param {string} idBoton - El ID del elemento botón.
     * @param {string} idContenedor - El ID del contenedor de contenido a mostrar/ocultar.
     * @param {string} idFlecha - El ID del elemento flecha indicador.
     */
    function configurarBotonVerMas(idBoton, idContenedor, idFlecha) {
        const boton = document.getElementById(idBoton);
        const contenedor = document.getElementById(idContenedor);
        const flecha = document.getElementById(idFlecha);

        if (!boton || !contenedor) {
            console.warn(`No se encontraron los elementos para configurar el botón "Ver más": ${idBoton}, ${idContenedor}`);
            return;
        }

        boton.addEventListener('click', function () {
            const esVisible = contenedor.classList.toggle('servicios-visibles');

            boton.textContent = esVisible ? 'Ocultar' : 'Ver más';

            if (flecha) {
                flecha.classList.toggle('up', esVisible);
                flecha.classList.toggle('arrow-hidden', esVisible);
            }
        });
    }

    // Configuración para la sección de Administración
    configurarBotonVerMas('btn-ver-mas-administracion', 'servicios-administracion', 'arrow-indicator-administracion');

    // Configuración para la sección de Inversiones
    configurarBotonVerMas('btn-ver-mas-inversiones', 'servicios-inversiones', 'arrow-indicator-inversiones');
});

// Funciones para el menú de navegación móvil
function openNav() {
    document.getElementById("menu-movil").style.width = "100%";
}

function closeNav() {
    document.getElementById("menu-movil").style.width = "0%";
}