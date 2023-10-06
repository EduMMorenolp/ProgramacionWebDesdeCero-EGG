// Array con diferentes títulos
var titulosPrincipales = [
    "Blog de Cocina y Recetas",
    "Cocina Creativa en tu Hogar",
    "Deliciosas Experiencias Culinarias",
    "Sabores que Enamoran"
];

// Función para cambiar el título de manera aleatori
function cambiarTituloPrincipal() {
    var tituloPrincipalAleatorio = titulosPrincipales[Math.floor(Math.random() * titulosPrincipales.length)];
    document.getElementById('tituloprincipal').textContent = tituloPrincipalAleatorio;
}

// Cambia el título cada 5 segundos (5000 milisegundos)
setInterval(function() {
    cambiarTituloPrincipal();
    cambiarTitulo();
}, 5000);