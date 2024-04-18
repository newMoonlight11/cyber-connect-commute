// Selecciona todos los enlaces con la clase 'texto-con-sombra'
const enlacesConSombra = document.querySelectorAll('.texto-con-sombra');

// Itera sobre cada enlace y agrega event listeners
enlacesConSombra.forEach(enlace => {
    // Agrega un event listener para el evento 'mouseover'
    enlace.addEventListener('mouseover', () => {
        // Agrega la clase 'con-sombra' cuando el mouse está encima
        enlace.classList.add('con-sombra');
    });

    // Agrega un event listener para el evento 'mouseout'
    enlace.addEventListener('mouseout', () => {
        // Remueve la clase 'con-sombra' cuando el mouse sale
        enlace.classList.remove('con-sombra');
    });
});

// Función para cargar el contenido de la página cuando se hace clic en un enlace del menú
function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('main').innerHTML = html;
        });
}

// Event listener para los enlaces del menú
document.querySelectorAll('.link').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar que el navegador cargue la página
        cargarContenido(this.getAttribute('href'));
    });
});

