//aDatos es una instancia de Array
let aDatos =[45,2,5]
let aDatos2 = new Array(5)
console.log(aDatos2.lenght)
console.log(aDatos2)

let aDatos3 = new Array(5,2,5,41)
console.log(aDatos3)

let oDatos={}
//new Object()


let  dni 
let code = parseInt( dni%23)
let aLetras=['T','R','W','A','G','M','Y']

console.log(aLetras.length)


//Métodos de Arrays
//Inmutables
//Mutables
//console.log( aLetras.Join('') ) 
//console.log(aLetras)
aLetrasOriginal = aLetras.slice(0,aLetras.length-1)
console.log(aLetras.sort())
console.log(aLetrasOriginal)

//Mutable 
/**Aquí decides cuantos quieres guardar */
let aNuevo = aLetras.slice(0,5,"X","Z")
console.log(aNuevo)

//Todos mutables 
aLetras.push("")//Añadir al final
aLetras.unshift("")//Inserta al principio
aLetras.pop()//Quita el último
aLetras.shift()//Quita el primero









