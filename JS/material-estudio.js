// Función para calcular el precio total multiplicando precio por cantidad
function calcularPrecioTotal(){
    // Guardamos los valores que el usuario escribió en los cuadros de texto
    let precioUnitario = recuperarInt("precioUnitario");
    let cantidad = recuperarInt("cantidad");

    // Hacemos la operación matemática
    let precioTotal = precioUnitario * cantidad;

    // Mostramos el resultado en la pantalla dentro del espacio con id 'mensaje1'
    document.getElementById("mensajeAritmetica").innerHTML = "precioTotal: " + precioTotal;
}