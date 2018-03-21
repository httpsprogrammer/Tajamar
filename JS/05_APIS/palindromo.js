//reverse()
//array
/*
function verificar_pal(frase)
{ 
    let array=[]
    let j=1

for (let i = 0; i < frase.length; i++) {
array[i]= frase.substring(i,j)
j++
console.log( array[i] )  
}
    
    for (let i = 0; i < array.length; i++) {
        if (array[i]=" ") {
            array[i]=""
            console.log(array[i])

        }else{
            array[i]=array[i]
            console.log(array[i])

        }        
    }

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    
}


}

var frase= 'amad a la dama'
verificar_pal(frase)
*/


/*split sirve para crear un array donde ('aqui se debe poner lo que
 va a serparar la cadena')
*/

function verificar_pal(frase1)
{ 
    frase = frase1.toLowerCase()
 let cad1= frase.split(" ").join("")
let cad2= frase.split(" ").reverse().join("")
console.log(cad1)
console.log(cad2)

if (cad1!=cad2) {
    console.log('Esto es un palíndromo')
}else{
    console.log('Esto NO es un palíndromo')

}

}
frase1='Amad a la dama'
verificar_pal(frase1)

