/*
$(document).ready(
    function () {
        
    })
*/

$(function () {
    let oDom =
    {
        eBotonSaludar: document.querySelector('#btnSaludar'),//Este se usa en la forma actualizada
        eBotonBorrar: document.querySelector('#btnBorrar'),//Este se usa en la forma actualizada
        eInputName: document.querySelector('#npName'),
        eOutSaludo: document.querySelector('#outSaludo'),
    }
    function saludar() {
        let user =  oDom.eInputName.val()
        console.log(user)
        oDom.eOutSaludo.html(  ` <p>Hola ${user} </p> `) 
    }
    function borrar() {
        oDom.eInputName.val('')
        oDom.eOutSaludo.html()
    }
    oDom.eBotonSaludar.addEventListener("click",saludo())
    oDom.eBotonBorrar.addEventListener('click',borrar())
    
     
})


