'user stric'
/*
function comprobar(num1){
    let num=num1
let res= num%2
/*Codificar la información se hace con 1, 0, -1 */
/*
if (!res ) {
    console.log('El número '+num+' es '+'par')

}else{
    console.log('El número '+num+' es '+'impar')
}
}

function comprobarHTML(num1){
    document.write(comprobar(num1) +'<br>')
}



comprobar(75)
comprobarHTML(5)
/**Función que comprueba si el argumento es par 
 * o impar devolviendo '0, 1, 0 -1' si el 
 * argumento no es número
 */

function calcularParEnteros(n){
    return isNaN(n/2)? -1: n%2
    return r
} 

function calcularPar(n){
    return isNaN(n/2)? -1: n%2
    if (parseInt(n) != parseFloat(n)) {
        r=-2
    }else{
        r= n%2
    }
    return r
}

function mostrarEsPar(n){
    const aMensajer=[
        `El número ${n} es par`,
        `El número ${n} es impar`,
        `El número ${n} no es un número`,
        `El número ${n} es decimal`
    ]        

                /**'r' peude valer 0, 1, -1 */
               const r=calcularPar(n)
                let  r= (r===-1)?2 : r
console.log(aMensajer[r])
}


function mostrarEsParCasos(n){
// r puede valser 0,1,-2,-3
let r = calcularPar(n)
let message
switch(r){
case 0: message= `El número ${n} es par` 
break
case 1: message=`El número ${n} es impar`
break
case -2 : message= `El número ${n} no es un número`
break
case -3 : message= `El número ${n} es decimal`
break

}
console.log(message)
}

mostrarEsParCasos('Pepe')
mostrarEsParCasos(12)
mostrarEsParCasos(11)
mostrarEsParCasos(12.5)
mostrarEsParCasos(12.41)

