  
  let user= 'Pepe'
    console.log(user)
{
    let libro={
        titulo:''
        , autor:''
        , editorial:''
        , fecha:0
        , generos: []
           
       }
        libro1 = Object.create(libro)
       //libro2 =Object.create(libro)
       
       libro1.autor='J. R. R. T.'
       libro1.titulo='El señor de los anillos'
       libro1.editorial='Mino'
       //libro1.fecha='1954'
       //libro1.generos=['Fantasía']
       
       console.log(libro1)
       
       
       
}


{
  
    let libro1 = {
        titulo:'El señor de los anillos'
        , autor:'J. R. R. T.'
        , editorial:'Mino'
        , fecha:0
        , generos: ['Fantasía']
           
       }

       let libro2 = {
        titulo:'El señor de los anillos'
        , autor:'J. R. R. T.'
        , editorial:'Mino'
        , fecha:1980,
        primera_edicion:{
            editorial:'Acme',
        fecha:1980
        }
        , generos: ['Fantasía']
           
       }
       
      /* console.log(libro1)
       console.log(`El autor es ${libro2.autor}`)
       console.log(typeof libro2.autor)
       console.log(libro2.fecha)
       console.log(typeof libro2.fecha)
       console.log(typeof libro2.generos[0])
  console.log(libro2.primera_edicion.editorial)
       console.log(libro1)
       console.log(libro1)*/


for (let key in libro1) {
    /**Aquí se recorre todo el obejeto que 
     * va a guardar el título,editorial.. en un 'key'
     * Esto nos muestra las propiedades cuando escribimos 'key'
     * 
     */
    console.log(`La clase ${key} vale `,libro1[key])

        
   }

 }
 
