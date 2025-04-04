import Cl_Deportista from "./Cl_Deportista.js";

export default class Cl_index {
    constructor() {
        let deportista1 = new Cl_Deportista("Juan", 132, 8, 1, 21)
        let deportista2 = new Cl_Deportista("Felix", 110, 10, 2, 20)

        let salida = document.getElementById("salida")
        salida.innerHTML = `
       <br>Nombre del estudiante: ${deportista1.nombre}
       <br>Acumulado de notas: ${deportista1.notas}
       <br>Cantidad de materias: ${deportista1.materias}
       <br>Deporte (1=beisbol - 2=fútbol): ${deportista1.CalcularEdad()}
       <br>Edad: ${deportista1.tipo}
       <br>Nota promedio: ${deportista1.calcularPromedio()}
       <br> ${deportista1.admitido()} <br>

       <br>Nombre del estudiante: ${deportista2.nombre}
       <br>Acumulado de notas: ${deportista2.notas}
       <br>Cantidad de materias: ${deportista2.materias}
       <br>Deporte (1=beisbol - 2=fútbol): ${deportista2.CalcularEdad()}
       <br>Edad: ${deportista2.tipo}
       <br>Nota promedio: ${deportista2.calcularPromedio()}
       <br> ${deportista2.admitido()} <br>

        `
    }
}