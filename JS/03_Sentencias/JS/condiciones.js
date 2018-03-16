//Tipos de condiciones
const userAlex=
    {
    nombre :'Alex',
 edad: 19,
 direccion:{
     /*Se debe poner corchetes para definir otro 'objeto'  */
     calle:'',
     ciudad:'',
     c_postal:''
    },
    humano:true,
    isCasado:false,
    genero:'M'
}

const userMaría=
{ 
    nombre :'María',
 edad: 19,
 direccion:{/*Se debe poner corchetes para definir otro 'objeto'  */
     calle:'',
     ciudad:'',
     c_postal:''
    },
    humano:true,
    isCasado:true,
    genero:'F'
}

const M_edad=18

  function crearSaludo(user){
      let mensaje ='Hola '
      if (user.edad >= M_edad && user.genero=='M') {
          mensaje +='D'
      }else if (user.edad >= M_edad && user.genero=='F') {
          mensaje += 'Dña'
      }
      mensaje += user.nombre
      if (user.isCasado) {
          if (user.genero=='M') {
              mensaje += '. Saludos a tu mujer'
          }else {
              mensaje += 'Saludos a tu marido'
          }
      }
return mensaje
  }

function saludar(usuario){
console.log(crearSaludo(usuario))
}


function saludarHtml(usuario){
    document.write(crearSaludo(usuario) +'<br>')
}

saludar(userAlex)
saludar(userMaría)
saludarHtml(userAlex)
saludarHtml(userMaría)








