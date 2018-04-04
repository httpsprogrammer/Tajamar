/**Podemos usar cualquiera de estos formatos para crear una function */
/*
app=function () {}
app =() => {}*/

function app() {
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar= document.querySelector('#btnCerrar')
    let ventana
    let aVentanas=[]
    
    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnCerrar.addEventListener('click', btnCerrar)
    
    function btnAbrir()
    {
        ventana=window.open()
        aVentanas.push(ventana)
        togleButtons()
        /**'push': Añade elementos en el orden en el que llegan */
        console.log(ventana)
    }
    function btnCerrar()
    {
        aVentanas.forEach(item=>close())
        togleButtons()
        /**El 'foreach' recorre el 'array'  */

        aVentanas.forEach(v => { v.close()  }); 
            window.close()
    }
    /**Se debe poner almuhadilla para que que sepa  */
     function togleButtons() {
        eBtnCerrar.disabled=!eBtnCerrar.disabled
        eBtnCerrar.disabled=!eBtnCerrar.disabled
     }

}



window.addEventListener('load', app)
//Todas nuestras funciones al empezar le pondrémos ('load',app)




