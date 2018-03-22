/**
 * Información de la empresa:N_empresa,direccion,telefono,NIF
 * Información del cliente:N_cliente,
 * Lista de elementos
 * Información básica:
 */
//Esto es un constructor de la empresa 
function Empresa(N_empresa, direccion, telefono, NIF) {
    this.N_empresa = N_empresa
    this.direccion = direccion
    this.telefono = telefono
    this.NIF = NIF
}

function Elemento(descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}

function Factura(empresa, cliente, elementos, impor_total, tipo_iva, tipo_pago) {
    this.empresa = ''
    this.cliente = ''
    this.list_elementos = elementos
    this.impor_total = impor_total
    this.tipo_iva = tipo_iva
    this.tipo_pago = tipo_pago
    this.mostrar = function () {
        //Solo basta con poner this para realizar la ejecución de la factura
        console.log(this)
    }
}
    

let fact1 = new Factura(
    new Empresa(
        N_empresa='',
        direccion='',
        telefono='',
        NIF=''

    ),/*
    new Cliente(
    ),*/
    [new Elemento(
        descripcion='4',
        precio='2',
        cantidad='3'
    ), new Elemento()]

)

fact1.mostrar()






