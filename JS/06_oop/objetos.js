//Esto es un objeto de tipo objeto 'let oDatos = new Object()={}' ESTO NO ESTÁ BIEN ! Esto sería lo mismo que el libro1
//new permite instanciar 'objetos'    
//let oDatos = new Object()={}


let libro1 = {
    titulo:'El señor de los anillos'
    , autor:'J. R. R. T.'
    , editorial:'Minotauro'
    , fecha: new Date('1954')
    , generos: ['Fantasía']
      ,mostrarReferencia: function (obj)
      {
          let ref = this.autor + '.'
           ref +='"'+this.titulo + '"'+'.'
           ref +=this.editorial + ` `
           ref +=this.fecha.getFullYear() + '.'
           console.log(ref)
          } 
   }

libro1.mostrarReferencia ()

let mifuncion = function()
{   
    console.log('Soy una función ')
  //  console.log(this)

}
mifuncion()

let o =  {head:"Soy un objeto",
metodo:mifuncion
}
//o.metodo()
let oNuevoObjeto =  new mifuncion ()

 let obj =  {head:"Soy un objeto"}
mifuncion.call(obj)
