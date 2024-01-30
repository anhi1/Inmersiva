AFRAME.registerComponent('cursor-listener1', {
    init: function () {
        var el = this.el;

        // Añadir evento click al botón
        el.addEventListener('click', function () {
            // Obtener el elemento de texto
            var texto = document.getElementById('miTexto1');

            // Obtener el elemento del botón
            var boton = document.getElementById('miBoton1');

            // Toggle para mostrar/ocultar el texto
            if (texto.getAttribute('visible')) {
                texto.setAttribute('visible', false);
                boton.setAttribute('color', '#4d66bf'); // Cambiar color del botón
            } else {
                texto.setAttribute('visible', true);
                boton.setAttribute('color', '#28bacc'); // Cambiar color del botón
            }
        });
    }
});


AFRAME.registerComponent('cursor-listener2', {
    init: function () {
        var el = this.el;

        // Añadir evento click al botón
        el.addEventListener('click', function () {
            // Obtener el elemento de texto
            var texto = document.getElementById('miTexto2');

            // Obtener el elemento del botón
            var boton = document.getElementById('miBoton2');

            // Toggle para mostrar/ocultar el texto
            if (texto.getAttribute('visible')) {
                texto.setAttribute('visible', false);
                boton.setAttribute('color', '#4d66bf'); // Cambiar color del botón
            } else {
                texto.setAttribute('visible', true);
                boton.setAttribute('color', '#28bacc'); // Cambiar color del botón
            }
        });
    }
});


AFRAME.registerComponent('cursor-listener3', {
    init: function () {
        var el = this.el;

        // Añadir evento click al botón
        el.addEventListener('click', function () {
            // Obtener el elemento de texto
            var texto = document.getElementById('miTexto3');

            // Obtener el elemento del botón
            var boton = document.getElementById('miBoton3');

            // Toggle para mostrar/ocultar el texto
            if (texto.getAttribute('visible')) {
                texto.setAttribute('visible', false);
                boton.setAttribute('color', '#4d66bf'); // Cambiar color del botón
            } else {
                texto.setAttribute('visible', true);
                boton.setAttribute('color', '#28bacc'); // Cambiar color del botón
            }
        });
    }
});