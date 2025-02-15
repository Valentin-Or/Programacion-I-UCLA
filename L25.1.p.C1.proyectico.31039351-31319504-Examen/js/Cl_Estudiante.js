export default class Cl_Estudiante {
    constructor(n, cedula, sexo, nota) {
        this.nombre = n;
        this.cedula = cedula;
        this.sexo = sexo;
        this.nota = nota;
    }
    set nombre(n) {
        this.nombre = n;
    }
    set cedula(cedula) {
        this.cedula = cedula;
    }
    set sexo(sexo) {
        this.sexo = sexo;
    }
    set nota(nota) {
        this.nota = nota;
    }

    get nombre() {
        return this.nombre;
    }
    get cedula() {
        return this.cedula;
    }
    get sexo() {
        return this.sexo;
    }
    get nota() {
        return this.nota;
    }
   
    
    }