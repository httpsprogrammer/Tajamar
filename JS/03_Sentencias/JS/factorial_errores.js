

function fact(num){
    if (typeof num === 'undefined') { throw 0}
     else if (isNaN(num/2)) {throw 1} 
    else if (parseInt(num != parseFloat(num))) {throw 2}
     else if (num <= 0) {throw 3}
     else if (num >170) {throw 5}
     else
     {
        let resul= num
        let aux =num-1
        for (let i = 0; i < num-1; i++) {
              //  console.log(resul +'*' +aux)
             // resul= resul*(aux) esto es lo mismo que esto resul *= aux
            resul *=(aux)
       // console.log(resul)
        aux=aux-1

     }
     // TODO  Comprobar rendimiento 
     if (resu === 1/0) {throw 4}
     else{   return resul}
  
    }
        
    


}

function mostrar(resul){
    const meserror='No puedo calcular el factorial de '
    let aErrores =['No has introducido datos','un número con decimales',
    'es mejor que 0',
    'es infinity '
]
   
    try {
        console.log(`El factorial de ${resul} es:  `+ fact(num) )
    } catch (error) {
        console.log(meserror+ aErrore[error])
    }
}

mostrar(1)
mostrar(2)
mostrar(3)
mostrar(4)
mostrar(171)


