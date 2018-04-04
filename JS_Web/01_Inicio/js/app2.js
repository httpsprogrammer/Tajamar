
(function () {//Esto es un 'closure'

    function app() {

        let oDom =
            {
                eBotonSaludar: document.querySelector('#btnSaludar'),//Este se usa en la forma actualizada
                eBotonBorrar: document.querySelector('#btnBorrar'),//Este se usa en la forma actualizada
                eInputName: document.querySelector('#npName'),
                eOutSaludo: document.querySelector('#outSaludo'),
            }
            
            let saludar = () =>//Esto hace que si no te pasan nada te dará por defecto ''
            {
                let user =  oDom.eInputName.value
            console.log(user)
            oDom.eOutSaludo.innerHTML = ` <p>Hola ${user} </p> `
    
        }
let borrar = ()=>{
    oDom.eInputName.value=''
    oDom.eOutSaludo.innerHTML=''
}
   
        oDom.eBotonSaludar.addEventListener("click",saludo())
        oDom.eBotonBorrar.addEventListener('click',borrar())

    }

    window.addEventListener('load', app)


})()




