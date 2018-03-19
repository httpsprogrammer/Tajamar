

/**Aquí estoy caculando si es par o no */
function calcularPar(n) {
    let r = 0
    if (isNaN(n/2)) {
        r = -2
        
    } else if (parseInt(n) != parseFloat(n)) {
        /**Aquí generamos un if{} para saber si tenemos 
         * un número decimal o si es uno entero */
        r = -3
    } else {
        /**Aquí entraría nuestro número entero */
        r = n%2
    }
    return r
}
    


function sumarPares (aDatos) {

    let total = 0
    for (let i = 0; i < aDatos.length; i++) {
        if (!calcularPar(aDatos[i])) {
            total += aDatos[i]
            console.log(`El parcial es ${total}`)
        }
    }
    return total
}

function verSumaPares(aDatos) {
    let oResultados= sumarPares(aDatos)
    /**En este 'for' vamos a pasar por cada uno de los elementos del parciales para mostrar 
     * todos los números parciales.
     */
    for (let i = 0; i < oResultados.parciales.length; i++) {
        console.log(`El parcial es ${total}`)
    }
    oResultados.parciales
    console.log('El resultado de la suma de los pares es',
               oResultados.total    )
}

let aDatos = [23, 54, 65, 34, 78, 67, 57, 89]
verSumaPares(aDatos)

