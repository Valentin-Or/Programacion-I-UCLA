import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Cl_Deportista extends Cl_Estudiante {
    constructor(nombre, notas, materias, edad, tipo){
        super(nombre, notas, materias, edad)
        this.tipo = tipo
       
    }
    admitido(){
        if(this.calcularPromedio() && this.CalcularEdad() === 1)
            return "Juan es admitido en Beisbol"
        else
        if(this.calcularPromedio() && this.CalcularEdad() === 2)
            return "Felix no es admitido en futbol"
        else
        return 0
    }
}