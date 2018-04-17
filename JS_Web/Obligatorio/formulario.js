import { CURSOS } from './cursos.js'

export class Formulario {

    constructor() {
        this.datos = {}
       // this.selectCurso = document.querySelector('#curso')
      this.radioCurso = document.querySelectorAll([name='curso'])
        document.querySelector('#formulario').
            addEventListener('submit', this.enviar.bind(this), false)

        this.crearfecha()
        //'change' para saber cuando ha cambiado de materia 
       this.radioCurso.forEach(item =>{
           item.addEventListener('checked',this.selecTopics.bind(this))
       })
        //this.selectCurso.addEventListener('change', this.selecTopics.bind(this))
    }


    selecTopics() {
        console.log('asdf')
        let i
        for (i = 0; i <  this.radioCurso.length; i++) {
            if(this.radioCurso[i].checked){
                
                break;
            } 
            
        }

        this.radioCurso.forEach(item =>{
            item.checked
        })
        
   
        
        /*//'selectIndex' para recoger el puntero
        let i = this.selectCurso.selectIndex
        // Llamamos a nuetros array
        let aTopics = CURSOS[i].asignaturas
        this.mostrarTopics(aTopics)*/


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