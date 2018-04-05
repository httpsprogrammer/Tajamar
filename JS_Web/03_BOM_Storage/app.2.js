(function () {

    function app() {
        let eNombre = document.querySelector('#inpNombre')
        let eApellido = document.querySelector('#inpApellido')
        let eGuardar = document.querySelector('#btnGuardar')
        let eBorrar = document.querySelector('#btnBorrar')
        let eSaludo = document.querySelector('#outSaludo')

        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar)

        function guardar() {
            let persona = {
                nombre: eNombre.value,
                apellido: eApellido.value
            }
            localStorage.setItem('persona', JSON.stringify( persona) )
            console.log(typeof persona)
            saludar()

        }


        function borrar() {
            localStorage.removeItem('persona')
            eSaludo.innerHTML=``
            eNombre.value=''
            eApellido.value=''
        }
        function saludar() {
            let persona = localStorage.getItem('persona')
            persona = JSON.parse(persona)
            console.log(persona)
            if (persona) { 
                eSaludo.innerHTML =  `Hola ${persona.nombre}  ${persona.apellido} `
                    }
        }
      
    }



    window.addEventListener('load', app)
})()











