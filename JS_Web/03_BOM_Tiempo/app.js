//'setTimeout':Se ejecuta  una sola vez 
//let idT=  window.setTimeout(algo,1000)/**Esto se una función asincrónica */
//window.clearTimeout(idT) 
/*
let crono=0

//Cada cierto tiempo
let idI= setInterval(function () {
    crono++
},1000)
clearInterval(idI)
*/

(function () {

    function app() {

        let idI
        let crono =0
        let eCrono = document.querySelector('.crono')
       let  aBotones = document.querySelectorAll('button')
        console.log(aBotones)
        aBotones.forEach(item => {
            item.addEventListener('click', btnClick)

        });
        aBotones
        function btnClick(ev) {
          
            let crono=0
            if (ev.target.id === 'btnIniciar')
            {
                 idI= setInterval(function () {
                    crono+=0.01
                    eCrono.innerHTML=crono.toFixed(2)
                    
            },100) }
         
            else if(ev.target.id === 'btnParar'){
                console.log(idI)
        clearInterval(idI)
            }else{
                //btnReset
                 crono =0
                eCrono.innerHTML=crono.toFixed(2)

            }
        }
        
    }
    window.addEventListener('load', app)


})()






