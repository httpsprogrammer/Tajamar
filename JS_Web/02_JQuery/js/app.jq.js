/*$(function() {
    $('#btnSaludar').on('click', function() {
        let user = $('#inpName').val()
        console.log(user)
        $('#outSaludo').html(`<p>Hola ${user}</p>`)
    }) 
    $('#btnBorrar').on('click', function() {
        $('#inpName').val('')
        $('#outSaludo').html('')
    }) 
})*/
/* $(document).ready(
    function() {
}) */

$(function() {
    let oDom = {
        eBotonSaludar: $('#btnSaludar'),
        eBotonBorrar: $('#btnBorrar'),
        eInputName: $('#inpName'),
        eOutSaludo: $('#outSaludo')
    }

    function saludar () {
        let user = oDom.eInputName.val()
        console.log(user)
        oDom.eOutSaludo.html(`<p>Hola ${user}</p>`)
    }

    function borrar() {
        oDom.eInputName.val('')
        oDom.eOutSaludo.html('')
    }

    oDom.eBotonSaludar.on('click', saludar) 
    oDom.eBotonBorrar.on('click', borrar) 
})