export default class Cl_Articulo {
    constructor(nombre, cantidad, precioBase){
        this.nombre = nombre
        this.cantidad = cantidad
        this.precioBase = precioBase
    }
    montoCompra(){
        return this.cantidad * this.precioBase
    }
    
}