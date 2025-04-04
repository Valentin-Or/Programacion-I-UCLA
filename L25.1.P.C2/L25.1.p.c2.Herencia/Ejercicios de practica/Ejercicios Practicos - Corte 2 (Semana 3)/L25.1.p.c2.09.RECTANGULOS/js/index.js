import Cl_Cuadrado from "./Cl_Cuadrado.js";

export default class Cl_index{
    constructor(){
    let cuadrado1 = new Cl_Cuadrado(4, 2);
    let cuadrado2 = new Cl_Cuadrado(3, 5);
    
    let salida = document.getElementById("salida")

    salida.innerHTML = `
<br> Base del rectángulo: ${cuadrado1.base}
<br>Altura: ${cuadrado1.altura}
<br>Área resultante: ${cuadrado1.area()}
<br>Perímetro: ${cuadrado1.perimetro()} <br> 

<br> Base del rectángulo: ${cuadrado2.base}
<br>Altura: ${cuadrado2.altura}
<br>Área resultante: ${cuadrado2.area()}
<br>Perímetro: ${cuadrado2.perimetro()} 
    `
 }
}