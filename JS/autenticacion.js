// Arreglo de empleados con los cuales podremos realizar las validaciones
let empleados = [
    { idEmpleado: 123 , nombre: "Pepe"},
    { idEmpleado: 456 , nombre: "Julio"},
    { idEmpleado: 789 , nombre: "Erika"},
    { idEmpleado: 111 , nombre: "Emily"}
]
// Funcion la cual permite validar las credenciales del empleado
// Si la validacion es verdadera, tendra acceso al facturador
function validarEmpleado() {
    let cedula = recuperarInt("idEmpleado"); 
    let elementoEmpleado; 

    for (let i = 0; i < empleados.length; i++) { 
        elementoEmpleado = empleados[i]; 
        
        if (elementoEmpleado.idEmpleado === cedula) { 
            // Tema nuevo, no se domina: Guardamos los datos en la memoria del navegador con un local Storage para usarlos en la factura
            localStorage.setItem("idEmpleadoFactura", elementoEmpleado.idEmpleado); // Guardamos el ID del empleado
            localStorage.setItem("nombreEmpleadoFactura", elementoEmpleado.nombre); // Guardamos el nombre del empleado

            // Redireccionamos al facturador
            window.location.href = "../facturacion.html";
            return; // Rompe la función porque ya encontramos al empleado
        } 
    }
    
    // Si terminó el ciclo y no encontró a nadie, recién ahí muestra el error
    mostrarTexto("mensajeError", "ID de usuario inválido"); 
}