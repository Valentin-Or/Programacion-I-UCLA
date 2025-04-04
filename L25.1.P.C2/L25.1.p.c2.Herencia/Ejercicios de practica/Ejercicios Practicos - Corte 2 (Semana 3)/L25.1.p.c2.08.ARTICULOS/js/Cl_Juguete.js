import Cl_articulo from "./Cl_Articulo.js";

export default class Cl_Juguete extends Cl_articulo {
    constructor(nombre, cantidad, precioBase, edad){
        super(nombre, cantidad, precioBase)
        this.edad = edad
    }

    descuento(){
        if(this.edad <= 1)
            return this.montoCompra() * 0.10
        else 
        return 0
    }
    montoPagar(){
        return this.montoCompra() - this.descuento()

    }
}