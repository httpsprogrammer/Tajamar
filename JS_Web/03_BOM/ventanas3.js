/**Podemos usar cualquiera de estos formatos para crear una function */
/*
app=function () {}
app =() => {}*/

function app() {
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    let eBtnGoogle = document.querySelector('#btnGoogle')
    let eBtnImagen = document.querySelector('#btnImagen')


    eBtnCerrar.disabled = 'true'
    let ventana
    let aVentanas = []

    eBtnAbrir.addEventListener('click', btnclick)
    eBtnCerrar.addEventListener('click', btnclick)
    eBtnGoogle.addEventListener('click', btnclick)
    eBtnImagen.addEventListener('click', btnclick)


    function btnclick(ev) {
        console.log(ev.target.id)
        switch (ev.target.id) {
            case 'btnAbrir':
                ventana = window.open()
                aVentanas.push(ventana)
                togleButtons()
                break;
            case 'btnGoogle':
            ventana = window.open('https://www.google.es/')
            aVentanas.push(ventana)
            togleButtons()
                break;
            case 'btnCerrar':
                aVentanas.forEach(v => { v.close() });
                togleButtons()
                aVentanas = []
                break;

        }
    }

function btnImagen() {
    ventana = window.open('/05_Rusia/imagenes/montain_nieve.jpg')
    aVentanas.push(ventana)
}
    function btnAbrir() {
        ventana = window.open()
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
        aVentanas.push(ventana)
        console.log(ventana)
    }

    function btnCerrar() {
        aVentanas.forEach(itme => { v.close() })
        aVentanas = []

    }
    function btnGoogle() {
        ventana = window.open('https://www.google.es/', 'self')
        aVentanas.push(ventana)


    }
    /**Se debe poner almuhadilla para que que sepa  */
    function togleButtons() {
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
    }

}



window.addEventListener('load', app)
//Todas nuestras funciones al empezar le pondrémos ('load',app)




