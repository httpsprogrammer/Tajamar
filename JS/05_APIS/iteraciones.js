
let aDatos=[ 1,582,55,5 ,65  ,486]
//Esto es un objeto y podemos recorrerlo con un 
//for para obejos
/*
let oDatos={
    alto: 2,
    ancho:5,
    largo:5,
    peso:2,
    color:5,
}

console.log('ARRAY con for')    
   for (let i = 0; i < aDatos.length; i++) {
            const item = aDatos[i];
            console.log(item)
    }
console.log('OBJETO con for in')
for (const key in oDatos) {
 
        const item = oDatos[key];
        console.log(item)
    
}
console.log('ARRAY con for in')

for (const i in aDatos) {
 
    const item = aDatos[i];
    console.log(item)

}
console.log('OBJETO for of')
/**No vale para objetos es como un 'for'
 * ya sabe hasta cuando tiene que incrementar
 */
/*
for (const item of object) {
    console.log(item)
    
}
*/
//Callback : Es una función pasado como parámetro
//aDatos.forEach(function (item) { })
//Esto es un foreach en el 'item' podríamos poner cualquier otro nombre
aDatos.forEach(item => console.log(item));
// 'map': Crea una proyección del orignal 
let aCuadrados = aDatos.map(item => item*item)
console.log(aCuadrados)
//Si se cumple que el módulo de 2 es identico a 0 se guarda en el array si no pues no
let aPares = aDatos.filter(item=>item%2===0)
console.log(aPares)

let aImparesCuadrados = aDatos
.filter(item=>item%2 !==0 )/**El 'filter' filtra de acuerdo a las condiciones 
que le pongamos  */
.map(item => item*item)/**El map siempre nos va a dar los mismos número 
de elementos que el original pero con las condiciones que le pongamos */
console.log(aImparesCuadrados)

let total = aDatos.reduce((prev, item)=> prev += item)/**Reduce el array a un solo valor */
console.log(total)


aDatos.reduceRight()/**Empiza a reducir pero deesde la derecha */
aDatos.every()//Son variantes del bucle foreach
aDatos.some()//Son variantes del bucle foreach

