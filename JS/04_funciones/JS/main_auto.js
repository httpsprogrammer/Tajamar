

//Closure
//patrón IIFE (Inmediatlity-invoked function expression)


/**Esto es una función auto_ejecución o auto_invocación */
(function (n) {
function calcularCubo(a){
a = a * a * a 
return a
}



    let mostrarResultado2= function () {
        console.log(calcularCubo(n))
    }

    mostrarResultado2()
})(6)




