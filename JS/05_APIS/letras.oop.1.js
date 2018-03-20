
app = {
    cadena : '', 
    codigo:0,  
    aCadenas=['HOLA PEPE','Hola Pepe','hola pepe'],
    aMensajes:['La frase mezcla mayúsculas y minúsculas',
    'Todas las letras son mayúsculas',
    'La frase son todas minúsculas'],
    ComprobarM: function  ()
    {
        let r = 0
       
        //Esto transforma todo en mayúsculas
     if (this.cadena.toUpperCase() ===this.cadena) {
        console.log( this.codigo)
            //Si toda la cadena transformada en mayúsculas es igual a cadena
         //todo estaba en mayúsculas
         this.codigo = 1
         
        //Esto transforma todo en minúsculas
     }else if (this.cadena.toLowerCase() === this.cadena) {
         //Si toda la cadena transformada en minúculas es igual a cadena
         //todo estaba en minúsculas
         this.codigo = 2
     }else{
         this.codigo = 0
     }
    return this.codigo
    },
    mostrar: function ()
    {
         let sMensajes = `En la frase ${this.cadena}
         ${this.aMensajes[this.ComprobarM(this.cadena)]} `
        console.log(sMensajes)
    },
    probar:function(){
        for (let i = 0; i < this.cadena.length; i++) {
            this.cadena =this.aCadenas[i];
            this.mostrar()    
    }
   
        
    }
    
}


app.probar()
app.cadena='Un anillo'

