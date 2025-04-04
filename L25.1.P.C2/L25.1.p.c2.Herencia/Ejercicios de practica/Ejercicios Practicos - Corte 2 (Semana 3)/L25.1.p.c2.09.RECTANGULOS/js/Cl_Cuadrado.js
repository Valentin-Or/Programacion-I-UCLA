import Cl_Rectangulo from "./Cl_Rectangulo.js";

export default class Cl_Cuadrado extends Cl_Rectangulo {
    constructor(base, altura){
        super(base, altura)
        
    }
    area(){
        return this.base * this.altura
    }
    perimetro(){
        return this.base * 2 + this.altura * 2
    }
}