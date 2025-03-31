import Cl_Estudiante from './Cl_Estudiante.js'
export default class Cl_Becado extends Cl_Estudiante {
  constructor(nombre, notas, materias,edad,deportej) {
    super(nombre, notas, materias)
    this.edad = edad
    this.deportej = deportej
  }

  
  admicion() {
    if (this.promedioNotas() >= 14 && this.edad > 21 ) {
      return `${this.nombre} es admitido en : ` + 30
    } else if (this.promedioNotas() >= 12 && this.edad > 18 ) {
      return `${this.nombre} es admitido en : ` + 15
    } else {
      return `${this.nombre} no es admitido en el deporte`
    }
  }
}
