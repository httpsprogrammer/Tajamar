let x //Esta 'x' sería local a la función 'main()'
/*Con 'let ' */
/*Las partes de un 'objeto ' se llaman propiedades */
function main(){

    let num1= 23
    let num2="20"
    let r = num1 - num2 
    
    console.log(r)
    console.log(typeof r)
    console.log(typeof num2)
    
    /*Se puede hacer casting de distintas formas con 'Numb' , +  */
    /* El '+ +' debe ir separado para poder sumar entre 
    números que estén definidos como string*/ 
    r= num1 + +  num2 //43
    let x= 'hola '
    let y= 'adiós'
    console.log(x + y) 
    r = r - 1
    
    console.log(r)
    console.log(typeof r)
    console.log(typeof num2)
    r = num1 - x
    console.log(r)
    console.log(typeof r)

isNaN(r)
console.log(r)
console.log(typeof r)
/*'isNaN': Nos dice que r es un número indefinido*/
console.log(isNaN(r))

if(isNaN(typeof r)){
    console.log('Esto es un NaN')
}else{
    console.log('ERRROOOORR!!!!!!!')
}







}
main()






