document.addEventListener('DOMContentLoaded', function() {
    const btnVerMas = document.getElementById('btn-ver-mas');
    const serviciosContainer = document.getElementById('servicios-administracion');

    if (btnVerMas && serviciosContainer) {
        btnVerMas.addEventListener('click', function() {
            const isVisible = serviciosContainer.classList.contains('servicios-visibles');

            if (isVisible) {
                serviciosContainer.classList.remove('servicios-visibles');
                btnVerMas.textContent = 'Ver más';
            } else {
                serviciosContainer.classList.add('servicios-visibles');
                btnVerMas.textContent = 'Ocultar';
            }
        });
    }
});


    function openNav(){
        document.getElementById("menu-movil").style.width = "100%"
    }

    function closeNav(){
        document.getElementById("menu-movil").style.width = "0%"
    }
    
    


/*

    window.onload = function(){
        (function(d, script) {
        script = d.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://wa.link/suf4s3';
        d.getElementsByTagName('head')[0].appendChild(script);
        }(document));
        };
*/