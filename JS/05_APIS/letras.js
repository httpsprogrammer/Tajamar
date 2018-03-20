/**@function : Comprobar si la cadena es: 
 *  -Todo mayúsculas (1)
 * -Todo minúsculas (2)
 * -Todo mayúsculas y  minúsculas (0)
 * @param : string 
 *@returns:  number
 */
//Si no se le pasa ningun valor a cadena por defecto va a valer '' es por
//eso que está el =
function ComprobarM (cadena='')
{
    let r = 0
   
    //Esto transforma todo en mayúsculas
 if (cadena.toUpperCase() ===cadena) {
     
   
    console.log(r)
        //Si toda la cadena transformada en mayúsculas es igual a cadena
     //todo estaba en mayúsculas
     r = 1
     
    //Esto transforma todo en minúsculas
 }else if (cadena.toLowerCase() === cadena) {
     //Si toda la cadena transformada en minúculas es igual a cadena
     //todo estaba en minúsculas
     r = 2
 }else{
     r = 0
 }   

return r
}
function MostrarComMay(cadena)
{
    let aMensajes=['La frase mezcla mayúsculas y minúsculas',
    'Todas las letras son mayúsculas',
    'La frase son todas minúsculas']
     let sMensajes = `En la frase ${cadena}
     ${aMensajes[ComprobarM(cadena)]} `
    console.log(sMensajes)
}



console.log(MostrarComMay ('hola pepe'))
console.log( MostrarComMay('Hola Pepe'))
console.log(MostrarComMay ('HOLA PEPE'))





