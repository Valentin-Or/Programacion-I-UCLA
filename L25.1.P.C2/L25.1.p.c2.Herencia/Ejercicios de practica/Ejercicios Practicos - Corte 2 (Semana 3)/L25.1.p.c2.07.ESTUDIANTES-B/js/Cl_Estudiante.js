export default class Cl_Estudiante {
    constructor(nombre, notas, materias, edad) {
        this.nombre = nombre
        this.notas = notas
        this.materias = materias
        this.edad = edad

    }
    calcularPromedio() {
        return this.notas / this.materias
    }
    CalcularEdad(){
        if(this.edad >= 21)
            return this.edad
        else
        if(this.edad < 19)
            return this.edad
        else
        return 0
    }
}