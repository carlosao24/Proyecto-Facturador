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
