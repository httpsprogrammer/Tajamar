import { CURSOS } from './cursos.js'

export class Formulario {

    constructor() {
        this.datos = {}
      this.radioCurso = document.querySelectorAll('[name="curso"]')
        document.querySelector('#formulario').
            addEventListener('submit', this.enviar.bind(this), false)

        this.crearfecha()
       this.radioCurso.forEach(item =>{
           item.addEventListener('change',this.selecTopics.bind(this))
       })
    }


    selecTopics() {
      
        let aTopics = CURSOS[i].asignaturas
        this.mostrarTopics(aTopics)
    }

    checkRadio(aRadio){
        console.log('Estoy en select')
        let i =this.checkRadio(this.radioCurso)
        for (i = 0; i <  this.radioCurso.length; i++) {
            if(this.radioCurso[i].checked){
                
                break;
            } 
        }
        return i

    }

    mostrarTopics(ev) {
        
        let template = ''
        //Aquí vamos a recorrer nuestrar materias para poder visualizarlas
        aTopics.forEach(item => {
            template +=
                `<option>${item}</option>`
        })
        document.querySelector('#mostrar_Cursos').innerHTML = template

    }

    enviar(ev) {
        console.log(ev)
document.querySelector('#resultados')
this.mostrarDatos()
    }
    mostrarDatos(){
        let tempalte = 
         `<li>email: ${this.datos.email} </li> 
         <li></li> 
         <li></li> 
         <li></li> 
         <li></li> 
         <li></li> 
         <li></li> 
         <li></li> 
         `


    }

    recogerDatos() {
        this.datos.email.document.querySelector('#email').value
        //El 'i' me indica la posición de cada opción
        let i = this.selectCurso.selectIndex
        this.datos.Curso = this.selectCurso.options[i].textContent
        console.dir(this.selectCurso)

    }

    
    crearfecha() {

        const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agoste', 'Septiembre')
        const diasemana = new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado')
        let fecha = new Date()
        let fechaString = diasemana[fecha.getDay()]
        fechaString += ' de  ' + meses[fecha.getMonth()]
        fechaString += ' del año ' + [fecha.getFullYear()]

        let tempalte = `Hoy es ${fechaString}`
        document.querySelector('#divComentario').innerHTML = `${tempalte}`

    }

}
