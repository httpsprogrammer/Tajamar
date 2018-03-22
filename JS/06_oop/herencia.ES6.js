class Persona {
    constructor(nombre,fechaN,altura) {
        this.nombre=nombre
        this.fechaN=fechaN
        this.altura=altura
    }
    _calcularAños(){
        let hoy= new Date()
       
return  (parseInt(hoy -this.fechaN)/(1000*60*60*24*365))
    }
    //Por convenio con la'_' raya baja se indica que es una propiedad privada
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this._calcularAños()}  `)
    }

}

Persona1 = new Persona(  "Pepe", new Date(1996,3,3),1.60)


Persona1.saludar()
//'Extends' Esto indica que es una extensión de la clase persona de la cuál se podrá usar  
class Alumno extends Persona{
    constructor( nombre,fechaN,altura,aula,equipo){
        //''super' siempre tiene que estar en la primera línea y hace la llamada a su padre
        super( nombre,fechaN,altura,aula,equipo)
        this.aula= aula
        this.equipo=equipo
    }

    saludar(){
        super().saludar()
        console.log(`soy del equipo ${this.equipo}`)
    }
    
}

let alumno1 = new Alumno('Juan',new Date(1995,3,3),1.60,'T22')
alumno1.saludar()