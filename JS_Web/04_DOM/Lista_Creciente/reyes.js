/**Isabel
 * Fernando
 * Carlos
 * Felipe
 * Juana
 * Luis
 * Alfonso
 * Juan Carlos
 * Amadeo
 * Jose
 */

function app() {
    let eRey = document.querySelector('#txtRey')
    let eComprobar = document.querySelector('#btnComprobar')
    let eBM = document.querySelector('#pBM')
 
    eComprobar.addEventListener('click', Comprobar)

    function Comprobar() {
        if ( eRey.value == 'Isabel' | 'Fernando' /*|
        'Carlos'|
        'Felipe'|
        'Juana'|
         'Luis'|
        'Alfonso'|
        'Juan  Carlos'|
        'Amadeo'|
    'Jose'*/) {
            console.log(eRey.value)
            eBM.innerHTML = `Bien ${eRey.value}`
        } else {
            console.log('No :(')
            eBM.innerHTML = 'Mal'
        }

    }


}

window.addEventListener('load', app)






















