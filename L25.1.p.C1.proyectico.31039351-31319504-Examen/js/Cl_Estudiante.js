export default class Cl_Estudiante {
  constructor(n, cedula, sexo, nota) {
    this.nombre = n
    this.cedula = cedula
    this.sexo = sexo
    this.nota = nota
  }
  set nombre(n) {
    this._nombre = n
  }
  set cedula(cedula) {
    this._cedula = +cedula
  }
  set sexo(sexo) {
    this._sexo = sexo
  }
  set nota(nota) {
    this._nota = nota
  }

  get nombre() {
    return this._nombre
  }
  get cedula() {
    return this._cedula
  }
  get sexo() {
    return this._sexo
  }
  get nota() {
    return this._nota
  }
}
