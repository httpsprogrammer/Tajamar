

function Libro(autor, titulo, editorial, fecha, generos )  {
    this.titulo=titulo
    , this.autor=autor  
    , this.editorial=editorial
    , this.fecha= fecha
    , this.generos= generos
      this.mostrarReferencia = function ()
      {
          let ref = this.autor + '.'
           ref +='"'+this.titulo + '"'+'.'
           ref +=this.editorial + ` `
           ref +=this.fecha.getFullYear() + '.'
           return(ref)
          } 
   }

   

let libro1 =new Libro('El señor de los anillos','J. R','Minotauro',new Date('1954'), ['Fantasía'])
let libro2 =new Libro('El señor de los anillos','J. R','Minotauro',new Date('1954'), ['Fantasía'])
 libro2.propietario ='Pepe'
//console.log(  libro2)
 console.log(libro1.mostrarReferencia)
 console.log(libro1.mostrarReferencia)

//console.log( typeof libro1) 
//console.log( typeof libro2.constructos) 

//Libro()
 //Todos los objetos deben pertenecer a una clase








