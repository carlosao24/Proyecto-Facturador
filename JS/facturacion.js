// Arreglo de datos de clientes afiliados que cuentan con beneficios de descuento
let clienteAfiliado = [
    { cedula: "0932748948", nombre: "Ariel",   telefono: "0999888776"},
    { cedula: "1208397266", nombre: "Alfredo", telefono: "0964928267"}
];

// Arreglo del catálogo de servicios ofrecidos y su costo base por unidad
let servicios = [
    { nombre: "tramitesAduana",  costo: 55 },
    { nombre: "corteDeGuia",     costo: 80 },
    { nombre: "reembolsoGastos", costo: 25 }
];

// Arreglo dinámico que guardará los objetos de los clientes procesados en el sistema
let datosCliente = [
    { cedula: "1725849301", nombre: "Miguel",  telefono: "0998765432"},
    { cedula: "0928374615", nombre: "Ana",     telefono: "0984321098"},
    { cedula: "1850639274", nombre: "Fatima",  telefono: "0976543210"},
    { cedula: "0932748948", nombre: "Ariel",   telefono: "0999888776"},
    { cedula: "1208397266", nombre: "Alfredo", telefono: "0964928267"}
];

let elementoDatoCliente; // Variable global para almacenar temporalmente el objeto cliente encontrado durante la verificación
let productosFactura = []; // Arreglo dinámico para almacenar los productos agregados a la factura actual

function ocultarSeccion() {
  let componente = document.getElementById("idSeccionClientes");
  let listaClass = componente.classList;
  listaClass.remove("activa");

  let componente2 = document.getElementById("registroFactura");
  let listaClass2 = componente2.classList;
  listaClass2.remove("activa");

  let componente3 = document.getElementById("factura");
  let listaClass3 = componente3.classList;
  listaClass3.remove("activa");
}

function mostrarSeccion(id) {
  // 1. Escondemos todas primero
  ocultarSeccion();

  // 2. Mostramos solo la que el usuario presionó
  let componente = document.getElementById(id);
  let listaClass = componente.classList;
  listaClass.add("activa");
}

/**
* Recupera los datos del formulario de cliente, ejecuta validaciones de consistencia
* y empaqueta la información en un objeto para almacenarla en el arreglo global.
*/
function guardarDatosCliente() {
    // Recupera el valor del campo cédula usando la función auxiliar
    let cedula = recuperaraTexto("cedula");

    let clienteExistente = VerificarCliente(cedula);
    if (clienteExistente) { // Si el cliente ya existe, muestra sus datos en la interfaz y notifica que ya está registrado
        mostrarDatosCliente(clienteExistente); // Muestra los datos del cliente encontrado en los campos correspondientes
        mostrarTexto("estadoCliente", "El cliente ya existe en el sistema"); // Devuelve un mensaje indicando que el cliente ya está registrado
        return;
    }

    // Valida que la cédula cumpla estrictamente con la longitud requerida de 10 dígitos
    if (!cedula || cedula.length !== 10) {
        mostrarTexto("mensajeCedula", "La cédula debe tener 10 dígitos");
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
    if (!telefono || telefono.length !== 10) {
        mostrarTexto("mensajeTelefono", "El número debe tener 10 dígitos");
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
    mostrarTablaClientes()
}

//Funcion para verificar si el cliente ya existe en el sistema.
function VerificarCliente(dato) { // Le paso el dato a verificar, en este caso la cédula
    for (let i = 0; i < datosCliente.length; i++) { // Recorre el arreglos de los clientes registrados
        elementoDatoCliente = datosCliente[i]; // Obtiene el objeto cliente
        if (dato === elementoDatoCliente.cedula) { // Verifica si el dato ingresado coincide con la cédula de algún cliente registrado
            return elementoDatoCliente; // Si encuentra una coincidencia, devuelve el objeto del cliente encontrado
        }
    }
    return null; // Caso contrario retorna null en caso de no encontar al cliente en el sistema
}

// Funcion para mostrar los datos del cliente encontrado en el sistema.
function mostrarDatosCliente(cliente) { 
    if (cliente == null) { // Verifica si el cliente fue encontrado, si no rompe la ejecución de la función
        return;
    }
    // Caso contrario, muestra los datos del cliente encontrado en los campos correspondientes
    mostrarTextoEnCaja("cedula", cliente.cedula);
    mostrarTextoEnCaja("nombre", cliente.nombre);
    mostrarTextoEnCaja("telefono", cliente.telefono);
}

// Función para mostrar el contenido del arreglo de clientes registrados en una tabla HTML
function mostrarTablaClientes(){
    let tabla = document.getElementById("tablaClientes") // Obtiene el id desde el html
    let contenidoTabla = " " 
    for(let i = 0; i < datosCliente.length; i++){ // Recorre el arreglo de clientes registrados
        let elementoCliente = datosCliente[i]
        contenidoTabla += `
        <tr>
            <td>${elementoCliente.cedula}</td>
            <td>${elementoCliente.nombre}</td>
            <td>${elementoCliente.telefono}</td>
        </tr>
        `
    }
    tabla.innerHTML = contenidoTabla;
}

// Funcion para iniciar ciertas acciones al cargar la pagina
function iniciar(){
    mostrarTablaClientes()
    ocultarSeccion()
}

// Funcion la cual me permite guardar los servicios solicitados
function agregarServicio() {
    let nomServicio = recuperaraTexto("servicio").trim(); // Obtenemos el dato ingresado en caja
    if (!nomServicio) { // Validamos que el campo no esté vacío
        mostrarTexto("mensajeServicio", "Campo obligatorio");
        return;
    }

    let nomCantidad = recuperarInt("cantidad"); // Obtenemos el dato ingresado en caja
    if (nomCantidad === null || isNaN(nomCantidad) || nomCantidad <= 0) { // Validamos la cantidad
        mostrarTexto("mensajeCantidad", "Debe ingresar una cantidad válida.");
        return;
    }

    let servicioEncontrado = compararServicios(nomServicio); // Comparamos el servicio ingresado con el catálogo
    if (servicioEncontrado === null) {
        mostrarTexto("mensajeServicio", "El servicio ingresado no se encuentra en el catálogo.");
        return;
    }

    let servicioAgregado = {
        nombre: servicioEncontrado.nombre,
        cantidad: nomCantidad,
        costo: servicioEncontrado.costo
    };

    productosFactura.push(servicioAgregado); // Agregamos el producto válido al arreglo de la factura
    mostrarTablaProductos(); // Mostramos la tabla actualizada
}

// Funcion para comparar el servicio ingresado con los servicios que se ofrecen
function compararServicios(servicio) {
    for (let i = 0; i < servicios.length; i++) { // Recorremos el arreglo de servicios ofrecidos
        let elementoServicio = servicios[i]; // Obtenemos el objeto del servicio
        if (servicio === elementoServicio.nombre) { // Verificamos si el servicio ingresado coincide con el nombre de algún servicio ofrecido
            return elementoServicio; // Si encuentra una coincidencia, devuelve el objeto del servicio encontrado
        }
    }
    return null; // Si no encuentra una coincidencia, devuelve null
}

function mostrarTablaProductos() {
    let elementoTabla = document.getElementById("tablaServicios");
    let contenidoTabla = "";
    let totalFactura = 0;

    for (let i = 0; i < productosFactura.length; i++) {
        let elementoServicio = productosFactura[i];
        let totalProducto = elementoServicio.costo * elementoServicio.cantidad; // calculamos el total de cada producto
        totalFactura += totalProducto;

        contenidoTabla += `<tr>
            <td>${elementoServicio.cantidad}</td>
            <td>${elementoServicio.nombre}</td>
            <td>${elementoServicio.costo}</td>
            <td>${totalProducto}</td>
        </tr>`;
    }

    if (productosFactura.length > 0) {
        contenidoTabla += `<tr>
            <td colspan="3"><strong>Total Factura</strong></td>
            <td><strong>${totalFactura}</strong></td>
        </tr>`;
    }

    elementoTabla.innerHTML = contenidoTabla;
}

function calcularTotalFactura(cantidadPorProducto) {
    return cantidadPorProducto; // Esta función ya no se usa en la sumatoria interna
}