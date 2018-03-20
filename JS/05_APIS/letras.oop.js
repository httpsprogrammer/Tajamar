(function () {
   
app = {
    cadena : '',   
    aMensajes:['La frase mezcla mayúsculas y minúsculas',
    'Todas las letras son mayúsculas',
    'La frase son todas minúsculas'],
    ComprobarM: function  ()
    {
        let r = 0
       
        //Esto transforma todo en mayúsculas
     if (this.cadena.toUpperCase() ===this.cadena) {
        console.log(r)
            //Si toda la cadena transformada en mayúsculas es igual a cadena
         //todo estaba en mayúsculas
         r = 1
         
        //Esto transforma todo en minúsculas
     }else if (this.cadena.toLowerCase() === this.cadena) {
         //Si toda la cadena transformada en minúculas es igual a cadena
         //todo estaba en minúsculas
         r = 2
     }else{
         r = 0
     }   
    
    return r
    },
    mostrar: function ()
    {
         let sMensajes = `En la frase ${this.cadena}
         ${this.aMensajes[this.ComprobarM(this.cadena)]} `
        console.log(sMensajes)
    }
    
    
}
/*
console.log(MostrarComMay ('hola pepe'))
console.log( MostrarComMay('Hola Pepe'))
console.log(MostrarComMay ('HOLA PEPE'))
*/
 
})(
app.cadena ='hola pepe',
app.cadena ='Hola Pepe',
app.cadena ='HOLA PEPE'

)
aCadenas = []
