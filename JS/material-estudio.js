// Función para calcular el subtotal multiplicando precio por cantidad
function calcularSubtotal() {
    // Guardamos los valores que el usuario escribió en los cuadros de texto
    let precioUnitario = recuperarFloat("precioUnitario");
    let cantidad = recuperarInt("cantidad");

    // Hacemos la operación matemática
    let subtotal = precioUnitario * cantidad;

    // Mostramos el resultado en la pantalla dentro del espacio con id 'mensajeSubtotal'
    document.getElementById("mensajeSubtotal").innerHTML = "Subtotal: " + subtotal.toFixed(2);
}

