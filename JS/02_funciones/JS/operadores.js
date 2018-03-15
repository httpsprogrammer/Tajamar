/*Es una expresión de asignación */
let x=25
//instruccion -> side effect
/*Esto es un operador unario */
x++
console.log(x) 


//El '++x' se incrementa antes de que defina la varible 
let z = 1 + ++x
console.log(z)

x = 27 
/*Aquí como no existen el término de números enteros y números decimales
secribimos el parseint  de esta manera recoderá un resultado 
entero y no decimales
 */
y = parseInt(x/5)//5
console.log(y)
let r=x%5
console.log(r)

//Operadodes de asignación aritmética
x = 12
x += 4
console.log(x)

//Operadores relacionales

x=12
y='12'
//'=='Comprueba si son iguales o "parecidos" 
console.log(x==y)
/*'==='Comprueba si los datos son identicos en este caso* no* porque 
el primer dato es 'num' y el segundo es 'string'*/
console.log(x===y)
console.log(x!=y)//No igual
console.log(x!==y)//No identico

if (x) 
{
    console.log('Estoy dentro del X')
}

console.log(!!x)// Con dobles lo convierte en booleano 

x = 'axc' 
y= 'aef'
console.log(x > y)//Compara el orden alfabético de el string
console.log(x.lenght )
// expresion ? true : false
let edad = 45
console.log(edad > 30)
console.log(edad > 30? 'Buenos días':'Hola chaval')// Esto es como un 'if' simplificado de una sola línea





















