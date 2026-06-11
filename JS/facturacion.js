// Arreglo de datos de clientes afiliados que cuentan con beneficios de descuento
let clienteAfiliado = [
    { nombreCliente: "Ariel", idCliente: 222 },
    { nombreCliente: "Alfredo", idCliente: 333 }
];

// Arreglo maestro con el catálogo de servicios ofrecidos y su costo base por unidad
let servicios = [
    { nombre: "tramitesAduana", costo: 55 },
    { nombre: "corteDeGuia", costo: 80 },
    { nombre: "reembolsoGastos", costo: 25 }
];

// Arreglo dinámico que guardará los objetos de los clientes procesados en el sistema
let datosCliente = [];

/**
* Recupera los datos del formulario de cliente, ejecuta validaciones de consistencia
* y empaqueta la información en un objeto para almacenarla en el arreglo global.
*/
function guardarDatosCliente() {
    // Recupera el valor del campo cédula usando la función auxiliar
    let cedula = recuperaraTexto("cedula");

    // Valida que la cédula cumpla estrictamente con la longitud requerida de 10 dígitos
    if (cedula.length < 10 || cedula.length > 10 || cedula.length == null) {
        mostrarTexto("mensajeCedula", "La cedula debe tener 10 digitos");
        return; // Interrumpe la ejecución si la validación falla
    }

    // Recupera el valor ingresado en el campo nombre
    let nombre = recuperaraTexto("nombre");

    // Valida que el nombre no esté vacío, no contenga solo espacios y no sea un número directo
    if (nombre === null || nombre.trim() === "" || !isNaN(nombre)) {
        mostrarTexto("mensajeNombre", "Ingrese un nombre correcto");
        return; // Interrumpe la ejecución si la validación falla
    }

    // Recupera el valor del campo de teléfono
    let telefono = recuperaraTexto("telefono");

    // Valida que el número telefónico contenga exactamente 10 dígitos
    if (telefono.length < 10 || telefono.length > 10 || telefono === null) {
        mostrarTexto("mensajeTelefono", "El numero debe tener 10 digitos");
        return; // Interrumpe la ejecución si la validación falla
    }


    // Inicializa un objeto vacío para estructurar los atributos del nuevo cliente procesado
    let nuevoCliente = {};
    nuevoCliente.cedula = cedula;       // Asigna la cédula validada al atributo del objeto
    nuevoCliente.nombre = nombre;       // Asigna el nombre validado al atributo del objeto
    nuevoCliente.telefono = telefono;   // Asigna el teléfono validado al atributo del objeto

    // Inserta el objeto estructurado al final del historial de arreglos del cliente
    datosCliente.push(nuevoCliente);

    // Notifica visualmente en la interfaz que el registro fue guardado con éxito
    mostrarTexto("estadoCliente", "Cliente Guardado");
}
