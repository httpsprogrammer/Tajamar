

/* 'const': sirve para que una varible sea de un solo tipo  */
//Objeto literal
const user={
    nombre :'Alex',
 edad: 19,
 direccion:{/*Se debe poner corchetes para definir otro 'objeto'  */
     calle:'',
     ciudad:'',
     c_postal:''
    },
    humano:true
}

user.direccion.calle='Las Rozas'
/*El 'typeof': nos indica el tipo de dato de la variable */
console.log(typeof user)
console.log(user)


//Otros tipos de Objetos

//Array
let aDatos =[12,23,45,127,456,786]
let aDatosaDatos =[12,'pepe',true,null,undefined]
console.log(aDatos)
console.log(aDatos[1])
aDatos[15]=30
console.log(aDatos)

console.log(aDatosaDatos)

let aUsuarios=[

    {
    nombre :'Ester',
 edad: 19,
 direccion:{
     calle:'',
     ciudad:'',
     c_postal:''
    },
 humano:true
    }
    /*, 
     {
         nombre :'Ines',
     edad: 19,
     direccion:{
         calle:'',
         ciudad:'',
         c_postal:''
        },
        humano:true
     }*/
]


Console.log(typeof aUsuarios)

/* */
let fecha =  new Date()
/*Expresiones regulares*/
let exp = new RegExp()
let error = new Error()
/*'Math.': Para poder usar las opciones de math así como seno,cos etc.. */
Math
/*'JSON.' Para saber lo que se puede usar en JSON  */
JSON


