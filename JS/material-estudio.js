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

// Función para calcular los impuestos y totales finales de la factura
function calcularIVA(){
    let iva = 15; // El porcentaje del iva normal es 15%
    let subTotal = recuperarFloat("idSubTotal");
    let ivaSubTotal;
    let total;
    // Si es un cliente común, el iva se calcula con el 15% original
    ivaSubTotal = (subTotal * iva) / 100;
    total = subTotal + ivaSubTotal;
    document.getElementById("mensajeIVA").innerHTML = "El iva es de: " + ivaSubTotal.toFixed(2);
    document.getElementById("mensajeTotal").innerHTML = "El total es de: " + total.toFixed(2);
}