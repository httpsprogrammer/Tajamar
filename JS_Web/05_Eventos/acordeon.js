/*$('.main').on("click", "h2", function () {
    if ($(this).attr('class') != "iconoClose") {
        // si no tiene el icono de cerrar: esta cerrado y hay que abrirlo
        $(this).trigger("desplegar")
    }
    else { // si esta abierto, se deja como está
        return;
    }		                
}); // fin de la funcion click()
$('.main').on("desplegar", "h2", function () {
    $(".main div").fadeOut();
    $('.main h2').removeClass('iconoClose')
    $(this).next('.answer').slideDown();
    $(this).addClass('iconoClose');
}) // fin de la función desplegar
*/
function main() {
let aRespuestas = document.querySelector('main.answer')
aPreguntas = document.querySelector('main h2')
document.querySelector('.main h2:first-of-type')
.classList.add('iconoClose')
// background-image: url(images/close.png);

aPreguntas.forEach(item => {
    item.addEventListener('click',elegirPregunta,false)
});

aRespuestas.forEach(item => {
    rv.target.classList.toggle
    item.addEventListener()
});
function elegirPregunta(ev) {
    
}

}

window.addEventListener('load', main)