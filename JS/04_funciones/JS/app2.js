function calcular(a)
{
a *= a
return a
}
//Los parámetros elementales pasan por valor´
/**Los prámetros referncia pasan como 
 * si fueran referencia 
 * 
 */
function calcubo(params) {
    params .valor = params.valor *params.valor
    return params.valor
}

//Aquí se intenta clonar 
//Es habitual pasar un clon del objeto
let a = 5 
let params ={valor:5}



let  oUser ={nombre:'Pepe',apellido:'Perez'}

console.log(calcular(params))
console.log(params)
console.log(calcubo(params))
//calcular(3)

//Transformar objeto en striong JSON
let sUser = JSON.stringify(oUser)
let oUser2 = JSON.parse(sUser)
console.log(oUser2)



















