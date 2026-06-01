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


// 1. Creamos una variable para llevar la cuenta de las respuestas correctas
function calificarTest() {
    let nota = 0;

    // 2. Obtenemos el estado de los checkboxes correctos por su ID
    let pregunta1 = document.getElementById("pregunta1-respuesta2").checked; // Cantidad x Precio Unitario
    let pregunta2 = document.getElementById("pregunta2-respuesta2").checked; // 1 Cliente puede tener N Facturas
    let pregunta3 = document.getElementById("pregunta3-respuesta3").checked; // Formato XML
    let pregunta4 = document.getElementById("pregunta4-respuesta1").checked; // Valor bruto antes de impuestos
    let pregunta5 = document.getElementById("pregunta5-respuesta3").checked; // Subtotal + IVA - Descuentos


    // NOTA DE JAVASCRIPT (.checked):
    // La propiedad '.checked' sirve para saber si un checkbox está marcado o no.
    // - Si el usuario selecciono el correcto, devuelve: true
    // - Si el usuario selecciono el incorrecto, devuelve: false
    // 3. Evaluamos cada respuesta con condicionales simples
    if (pregunta1 === true) {
        nota = nota + 2;
    }
    if (pregunta2 === true) {
        nota = nota + 2;
    }
    if (pregunta3 === true) {
        nota = nota + 2;
    }
    if (pregunta4 === true) {
        nota = nota + 2;
    }
    if (pregunta5 === true) {
        nota = nota + 2;
    }

    // 4. Mostramos el resultado final dentro del span de calificación (Base 10)
    document.getElementById("calificacion").innerHTML = nota + " / 10";
}