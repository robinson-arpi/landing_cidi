    // Obtener todas las imágenes popup
    var popups = document.querySelectorAll('.popup');

    // Verificar el tamaño de la pantalla y ocultar imágenes adicionales si es necesario
    function ocultarImagenesAdicionales() {
        var screenWidth = window.innerWidth;
        if (screenWidth <= 768) { // Pantallas pequeñas
            for (var i = 2; i < popups.length; i++) { // Empezando desde el tercer elemento
                popups[i].style.display = 'none'; // Ocultar las imágenes adicionales
            }
        } else {
            for (var i = 2; i < popups.length; i++) { // Empezando desde el tercer elemento
                popups[i].style.display = ''; // Restaurar la visualización de las imágenes adicionales
            }
        }
    }

    // Llamar a la función para ocultar las imágenes adicionales al cargar la página
    ocultarImagenesAdicionales();

    // Volver a verificar el tamaño de la pantalla al cambiar el tamaño de la ventana
    window.addEventListener('resize', ocultarImagenesAdicionales);