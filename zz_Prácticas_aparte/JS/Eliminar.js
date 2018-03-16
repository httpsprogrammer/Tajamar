const userMaría=
    {
    nombre :'María',
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

const userAlex=
    {
    nombre :'Alex',
 edad: 12,
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

let user =[userAlex,userMaría]

/*
for (let i = 0; i < user.length; i++) {
    
   if (user[i].edad >18 ) {
       console.log(user[i].nombre+ 'tiene' +user[i].edad )
       i=user.length;
   }

    
}
*/

user.forEach(i => {
    console.log(user[i].nombre+ 'tiene' +user[i].edad )
});











