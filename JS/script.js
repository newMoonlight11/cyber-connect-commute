const enlacesConSombra = document.querySelectorAll('.texto-con-sombra');

enlacesConSombra.forEach(enlace => {
    enlace.addEventListener('mouseover', () => {
        enlace.classList.add('con-sombra');
    });

    enlace.addEventListener('mouseout', () => {
        enlace.classList.remove('con-sombra');
    });
});


function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('main').innerHTML = html;
        });
}


document.querySelectorAll('.link').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault(); 
        cargarContenido(this.getAttribute('href'));
    });
});