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

// Función para mostrar el formulario correspondiente según el servicio seleccionado
function mostrarFormulario() {
    // Ocultar todos los formularios
    document.getElementById("formulario-domicilios").classList.add("hidden");
    document.getElementById("formulario-transporte").classList.add("hidden");
    document.getElementById("formulario-emergencias").classList.add("hidden");
    document.getElementById("formulario-alquiler").classList.add("hidden");

    const servicio = document.getElementById("servicio").value;

    // Mostrar el formulario adecuado según el servicio seleccionado
    if (servicio === "domicilios") {
        document.getElementById("formulario-domicilios").classList.remove("hidden");
    } else if (servicio === "transporte") {
        document.getElementById("formulario-transporte").classList.remove("hidden");
    } else if (servicio === "emergencias") {
        document.getElementById("formulario-emergencias").classList.remove("hidden");
    } else if (servicio === "alquiler") {
        document.getElementById("formulario-alquiler").classList.remove("hidden");
    }
}



// Función para calcular el precio del servicio de domicilios
function calcularPrecio() {
    const peso = document.getElementById("peso-paquete").value;
    let precio = 0;

    if (peso > 0 && peso <= 1) {
        precio = 10000; // Precio base
    } else if (peso > 1 && peso <= 5) {
        precio = 20000; // Precio intermedio
    } else if (peso > 5) {
        precio = 30000; // Precio más alto
    }

    document.getElementById("precio").value = `COP ${precio.toFixed(0)}`;
}

function calcularPrecioRide() {
    // Calcular precios aleatorios entre 1000 COP y 2000 COP
    const minPrice = 5000;
    const maxPrice = 10000;

    // Genera un precio aleatorio dentro del rango dado
    function precioAleatorio() {
        return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    }

    // Asigna precios a cada plataforma
    document.getElementById("precio-didi").textContent = `Precio: COP ${precioAleatorio()}`;
    document.getElementById("precio-uber").textContent = `Precio: COP ${precioAleatorio()}`;
    document.getElementById("precio-indrive").textContent = `Precio: COP ${precioAleatorio()}`;
}

