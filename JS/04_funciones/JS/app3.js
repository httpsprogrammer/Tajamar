
function calcularCuadrado(a)
{
a *= a
return a
}
function calcularCubo(a)
{
a = a * a * a 
return a
}


function MostrarCalc(n, f){
    console.log(`El resultado es ${f(n)}`)
    }

function calcular(n, f){
return f(n)
}
let mostrarResultado2= function () {
    console.log(calcularCubo(n))
}
let n=5 
console.log(   calcular(n,calcularCuadrado) )
console.log(   calcular(n,calcularCubo) )
/**Aquí estamos creando una funciuón anónima 
 * para que 
 */

console.log(   calcular(n,function(){return n * 2 }) )
MostrarCalc(n,calcularCuadrado)
MostrarCalc(n,calcularCubo)
//MostrarCalc(n,function(){return n * 2 }

setTimeout( MostrarCalc,1000)
setTimeout(  function (){
   console.log(calcularCubo(n)) },2000 )
   for (let i = 0; i < array.length; i++) {
       c
       
   }


let nuevaFuncion =MostrarCalc


let y = {nombre:'Pepe'}
//console.log(typeof)

