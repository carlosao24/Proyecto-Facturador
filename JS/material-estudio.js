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

// Función para calcular el IVA 
function calcularIVA() {
    let iva = 15; // El porcentaje del iva normal es 15%
    let subTotal = recuperarFloat("idSubTotal"); // Extraigo el valor ingresado en caja
    let ivaSubTotal;
    ivaSubTotal = (subTotal * iva) / 100; // Realizo la operacion
    document.getElementById("mensajeIVA").innerHTML = "El iva es de: " + ivaSubTotal.toFixed(2); // Muestro el resultado
}

// Funcion para calcular el total sumando el subtotal y el iva
function calcularTotal() {
    let iva = 15; // El porcentaje del iva normal es 15%
    let subTotal = recuperarFloat("idSumaTotal"); // Extraigo el valor ingresado en caja
    let ivaSubTotal;
    ivaSubTotal = (subTotal * iva) / 100; // Realizo la operacion
    let total = subTotal + ivaSubTotal; // Sumo el subtotal y el iva para obtener el total
    document.getElementById("mensajeTotal").innerHTML = "El total es de: " + total.toFixed(2); // Muestro el resultado
}