/*1. EXAMEN
Se desea llevar un control de los estudiantes que
asisten a presentar un examen. Se tiene por cada
participante: nombre, cédula, sexo y nota. Se requiere
de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
valor del examen y el mínimo aprobatorio 

Primeros requerimientos
 Porcentaje de aprobados
 Estudiante con la mejor nota
 Porcentaje de chicas aprobadas 

Datos de inicialización para Cl_examen
  valor: 20,  minAprueba: 9.6 

  Estudiantes de prueba  
  nombre: 'Luis'  cedula: 1111  sexo: 'M'  nota: 12  
  nombre: 'Carla'  cedula: 2222  sexo: 'F'  nota: 16.5  
  nombre: Mery'  cedula: 3333  sexo: 'F'  nota: 8
*/

import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_Examen from "./Cl_Examen.js";

let examen = new Cl_Examen();
let est1 = new Cl_Estudiante('Luis', 1111, 'M', 12);
let est2 = new Cl_Estudiante('Carla', 2222, 'F', 16.5);
let est3 = new Cl_Estudiante('Mery', 3333, 'F', 8);

examen.procesarEstudiante(est1);
examen.procesarEstudiante(est2);
examen.procesarEstudiante(est3);

alert('Porcentaje de aprobados: ${examen.porcentajeAprobados()}');
alert('Estudiante con la mejor nota: ${examen.estudianteMejorNota()}'); 
alert('Porcentaje de chicas aprobadas: ${examen.porcentajeChicasAprobadas()}');