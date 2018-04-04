/**Podemos usar cualquiera de estos formatos para crear una function */
/*
app=function () {}
app =() => {}*/

function app() {
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = 'true'
    let ventana
    let aVentanas = []

    eBtnAbrir.addEventListener('click', btnclick)
    eBtnCerrar.addEventListener('click', btnclick)

    function btnclick(ev) {
        console.log(ev.target.id)
        switch (ev.target.id) {
            case 'btnAbrir':
                ventana = window.open()
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


    function btnAbrir() {
        ventana = window.open()
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
        aVentanas.push(ventana)
        console.log(ventana)
    }
    
    function btnCerrar() {
        aVentanas.forEach(itme => {v.close()})
        aVentanas = []

    }
    /**Se debe poner almuhadilla para que que sepa  */
    function togleButtons() {
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
    }

}



window.addEventListener('load', app)
//Todas nuestras funciones al empezar le pondrémos ('load',app)




