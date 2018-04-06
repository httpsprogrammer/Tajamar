
function app() {

    //let eParrafo= document.querySelector('#parrafo')
let eAparecer = document.querySelector('span')
eAparecer.addEventListener('click',aparecer)

    function aparecer() {
        eAparecer.classList.toggle('aparecer')
        console.log('asdf')
    }
}

window.addEventListener('load',app)










