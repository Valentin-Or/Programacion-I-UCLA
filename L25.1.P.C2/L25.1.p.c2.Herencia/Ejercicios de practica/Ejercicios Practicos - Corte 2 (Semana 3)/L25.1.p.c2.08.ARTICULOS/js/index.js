/*ARTÍCULOS
Sea la información de un artículo:
nombre, cantidad y precio base. Se
espera que los artículos tengan un
descuento, pero eso dependerá de
cada departamento.
export default class Cl_articulo{
constructor(nombre, cantidad, precioBase){
this.nombre=nombre
this.cantidad=cantidad
this.precioBase=precioBase
}
/// Agregue acá los métodos de acceso necesarios
descuento(){
return 0
}
aPagar(){
return this.cantidad * this.precioBase - this.descuento()
}
}
El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para
edad de 1 año.
Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y
el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva
clase sólo amerita edad y descuento().
Realice un programa que lea los datos de un juguete y reporte el monto a pagar.
Ejemplos de la corrida:
*/

import Cl_juguete from "./Cl_Juguete.js";

export default class Cl_index{
    constructor(){
    let juguete1 = new Cl_juguete("Carrito", 2, 10, 2);
    let juguete2 = new Cl_juguete("Peluche", 3, 20, 1);
    
    let salida = document.getElementById("salida")

    salida.innerHTML = `
<br>Nombre del juguete: ${juguete1.nombre}
<br>Cantidad: ${juguete1.cantidad}
<br>Precio base: ${juguete1.precioBase}$
<br>Edad recomendada: ${juguete1.edad}
<br>Monto a pagar por el carrito: ${juguete1.montoPagar()}$<br>
<br>Nombre del juguete: ${juguete2.nombre} 
<br>Cantidad: ${juguete2.cantidad}
<br>Precio base: ${juguete2.precioBase}$
<br>Edad recomendada: ${juguete2.edad}
<br>Monto a pagar por el peluche: ${juguete2.montoPagar()}$
    `
 }
}