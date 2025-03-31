/*7.
ESTUDIANTE-B
El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
Un estudiante deportista es admitido en el equipo universitario de beisbol si su promedio de
notas es superior a 14 y tiene más de 21 años; para el equipo de fútbol ingresa con 19 años y
promedio mínimo de 12 (1=beisbol - 2=fútbol).
Diseñe las clases Cl_estudiante y Cl_deportista, usando herencia, de manera que procese un
estudiante y reporte si es admitido en el equipo que solicita.*/





import Cl_Deportista from './Cl_Deportista.js'

let deportista1 = new Cl_Deportista('Mary', 132, 8)
let deportista2 = new Cl_Deportista('Alirio', 315, 35)

let salida = document.getElementById('salida')

let mostrarEstudiante = (estudiante) => {
  return `
      <tr>
        <td>${estudiante.nombre}</td>
        <td>${estudiante.notas}</td>
        <td>${estudiante.materias}
        <td>${estudiante.promedioNotas()}</td>
        <td>${estudiante.becado()}</td>
      </tr>
      `
}

salida.innerHTML = `
  <table>
      <tr>
          <th>Nombre</th>
          <th>Notas</th>
          <th>Materias</th>
          <th>Promedio Notas</th>
          <th>Beca</th>
      </tr>
      ${mostrarEstudiante(deportista1)}
      ${mostrarEstudiante(deportista2)}
  </table>
  `
