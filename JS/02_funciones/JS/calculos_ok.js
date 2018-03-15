'use strict'
function sumar(a, b){
    var c = a + b 
    return c
}

function restar(a, b){
    var c = a - b 
    return c

}

function mostrar(r){
    console.log("El resultado es ", r);
    
}

var x=123
var y=34
var r= sumar(x,y)
mostrar(r)
mostrar(sumar(123,34))
mostrar(sumar(123,4))
mostrar(sumar(1,3))