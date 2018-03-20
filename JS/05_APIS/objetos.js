

/**Un objeto es un conjunto de propiedades o variables */

let libro1 = {
    titulo:'El señor de los anillos'
    , autor:'J. R. R. T.'
    , editorial:'Minotauro'
    , fecha:1954
    , generos: ['Fantasía']
      ,mostrarReferencia: function (obj)
      {
          let ref = this.autor + '.'
           ref +='"'+this.titulo + '"'+'.'
           ref +=this.editorial + ` `
           ref +=this.fecha + '.'
           console.log(ref)
          } 
   }
/*
libro1.mostrarReferencia =function() {
    let ref = this.autor + '.'
    ref +='"'+this.titulo + '"'+'.'
    ref +=this.editorial + ` `
    ref +=this.fecha + '.'
    console.log(ref)
   }
*/
//mostrarReferencia(libro1)
libro1.mostrarReferencia()


let x = `Pepe` 
console.log( isNaN(x)) 
//Wrapper objects 
console.log( x.toUpperCase())
let sFrase='Un anillo para controlarlos a todos '
let aDatos = sFrase.split(' ')
console.log(aDatos)
let nuevaFrase = aDatos.join()

console.log(nuevaFrase)




