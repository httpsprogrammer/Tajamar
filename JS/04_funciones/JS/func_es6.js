//Función 'clásica' signada a varible
let calcularCubo=function (a)
{
    
    return a = a * a * a 
}

//En el (Escript6) E6 función "arrow"(equivale a 'exrpeciones lambdas') asignada a variable
// =>(fatarrow) ->
//Formato extenso
let calcularCuboES6Ext = (a)=> {return a = a * a * a }

//Abreviado
let calcularCuboES6Semi = a=>  a = a * a * a 
let a = 12
setTimeout(console.log(calcularCuboES6,2000))

setTimeout(function ()
{console.log( a = a * a * a) },3000)
setTimeout( ()=>
{console.log( a = a * a * a) },3000)

setTimeout(a=>  a = a * a * a , 3000)
