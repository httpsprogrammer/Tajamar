//window.alert('Adiós mundos') //El alert no se debe usar no es muy profesional

(function () {//Esto es un 'closure'

    function app() {

        let oDom =
            {
                eBotonSaludar: document.querySelector('#btnSaludar')//Este se usa en la forma actualizada

            }
        let saludo = (oE, user = '') =>//Esto hace que si no te pasan nada te dará por defecto ''
        {
            console.log(`Hola ¿Qué tal las vacaciones ${user}?`)
            console.log(oE)
        }

        /*function saludo(oE, user='')//Esto hace que si no te pasan nada te dará por defecto ''
        {
            console.log(`Hola ¿Qué tal las vacaciones ${user}?`)
        }*/

        //Cuando  onclick en button "saludo('pepe')"
        //document.getElementById()//Esto es de la forma antigÜa
        //console.log(eBotonSaludar)
        //console.dir(eBotonSaludar)//'.dir : Nos da las direcciones que tenemos.'
        //eBotonSaludar.onclick = saludo
        
        //oDom.eBotonSaludar.onclick = saludo
        //oDom.eBotonSaludar.onclick = ()=>{saludo(event, 'Alex')
        oDom.eBotonSaludar.addEventListener('click', () => saludo(event, 'Alex'))
        //  oDom.eBotonSaludar.removeEventListener('click')//Esto quita un evento 
    }

window.addEventListener('load', app)
/*Esto sirve para que nuestro script
sirva para en el head de nuestras aplicación porque nos permite cargar la página primero
Es recomendable hacerlo de esta manera*/
//document.addEventListener('DOMContenntLoaded', app)

})()




