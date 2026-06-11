// Arreglo de empleados con los cuales podremos realizar las validaciones
let empleados = [
    { idEmpleado: 123 },
    { idEmpleado: 456 },
    { idEmpleado: 789 },
    { idEmpleado: 111 }
]
// Funcion la cual permite validar las credenciales del empleado
// Si la validacion es verdadera, tendra acceso al facturador
function validarEmpleado() {
    let cedula = recuperarInt("idEmpleado") // Obtenemos el valor ingresado en caja
    let elementoEmpleado // Variable donde almacenaremos momentaneamente cada objeto que este dentro de un arreglo
    for (let i = 0; i < empleados.length; i++) { // Recorremos el arreglo empleados
        elementoEmpleado = empleados[i] // le asignamos un objeto momentaneo de los objetos del arreglo empleados
        if (elementoEmpleado.idEmpleado === cedula) { // Validamos si la credencias obtenida en caja es igual a las credenciales designadas
            window.location.href = "../facturacion.html"// Si se cumple la condición el empleado tendra acceso al facturador
        } else {
            mostrarTexto("mensajeError", "ID de usuario inválido") // Caso contrario mostrara un error
        }
    }
}