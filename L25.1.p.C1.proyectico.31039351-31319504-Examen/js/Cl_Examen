export default class Cl_Examen{
    constructor(){
        this.valor = 20;
        this.minAprueba = 9.6;
        this.contHombres = 0;
        this.contMujeres = 0;
        this.contMujeresAprobadas = 0;
        this.auxMayorNota = 0;
        this.auxNombreMayorNota = '';
        this.contAprobados = 0;
    }
    procesarEstudiante(estudiante){
        if(estudiante.nota >= this.minAprueba){
            this.contAprobados++;
        }
        if(estudiante.sexo == 'M'){
            this.contHombres++;
        }else{
            this.contMujeres++;
            if(estudiante.sexo == 'F' && estudiante.nota >= this.minAprueba){
                this.contMujeresAprobadas++;
            }
        }
        if(estudiante.nota > this.auxMayorNota){
            this.auxMayorNota = estudiante.nota;
            this.auxNombreMayorNota = estudiante.nombre;
        }
    } 
    porcentajeAprobados(){
        return (this.contAprobados * 100) / (this.contHombres + this.contMujeres);
    }

    porcentajeMujeresAprobadas(){
        return (this.contMujeresAprobadas * 100) / this.contMujeres;
    }
    


}
