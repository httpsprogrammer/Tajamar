
/*function calcularParEnteros(n){
    return isNaN(n/2)? -1: n%2
    console.log(r)
    return r
} 

calcularParEnteros

*/








'user stric'

/*  Función que comprueba si el argumento es par o impar
    devolviedo 0, 1, o 
     -2 si el argumento no es un número
     -3 si el argumento contene decimales
*/
function calcularPar(n) {
        let r = 0
        if (isNaN(n/2)) {
            r = -2
        } else if (parseInt(n) != parseFloat(n)) {
            r = -3
        } else {
            r = n%2
        }
        return r
    }


/*  Función que comprueba si el argumento es par o impar
    devolviedo 0, 1, o -1 si el argumento no es un número
*/
function calcParEnteros(n) {
    return isNaN(n/2) ? -1 : parseInt(n)%2
}
 function test(n) {
        console.log(n)
    } 

/*     test(calcularPar())
    test(calcularPar('Pepe'))
    test(calcularPar('12'))
    test(calcularPar(0))
    test(calcularPar(12))
    test(calcularPar(11)) 
    test(calcularPar(12.4))
    test(calcularPar(11.7))
    test(calcPar())
    test(calcPar('Pepe'))
    test(calcPar('12'))
    test(calcPar(0))
    test(calcPar(12))
    test(calcPar(11)) 
*/

function mostrarEsPar (aDatos) {
    for (let i = 0; i < array.length; i++) {

        const aMensajes = [
            `El número ${aDatos} es PAR`,
            `El número ${aDatos} es IMPAR`,
            `El dato ${aDatos} no es un número`,
            `El número ${aDatos} es decimal`
            ]
        // r puede valer 0, 1, -1    
        let r = calcularPar(aDatos)
        // si r es -2 o -3, lo convierto en 2 o 3
        if (r < 0) { r = -r }
        // muestro la posicion r del array
        console.log(aMensajes[r])
    }

}

/*
function mostrarEsParCasos (n) {
      // r puede valer 0, 1, -2, -3    
      let r = calcularPar(n)
      let mensaje
      switch (r) {
          case 0 :
            mensaje =  `El número ${n} es PAR`
            break
          case 1 :
            mensaje = `El número ${n} es IMPAR`
            break
          case -2 :
            mensaje = `El dato ${n} no es un número`
            break
          case -3 :
            mensaje =  `El número ${n} es decimal`
            break
      }
      console.log(mensaje)
}
*/

let aDatos =[23, 54, 75, 45 ]

mostrarEsParCasos(aDatos)














