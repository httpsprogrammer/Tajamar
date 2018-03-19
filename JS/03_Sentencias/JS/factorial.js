

function fact(num){
    let resul= num
    let aux =num-1
    for (let i = 0; i < num-1; i++) {
          //  console.log(resul +'*' +aux)
         // resul= resul*(aux) esto es lo mismo que esto resul *= aux
        resul *=(aux)
   // console.log(resul)
    aux=aux-1

}
return resul
}

function mostrar(resul){
    console.log(`El factorial de ${resul} es:  `+ fact(resul )) 
}

mostrar(1)
mostrar(2)
mostrar(3)
mostrar(4)
mostrar(171)












