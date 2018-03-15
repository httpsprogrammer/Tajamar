

//ES existen let y cons con ámbito
function mostrar(){
const x=2
console.log("2 ",x  )
x=124
{
    const x=43
}    
x=124
console.log(x)
}

function  calcular_circu(radio){
    return 2 * Math.PI * radio
    console.log("2 ",x  )
}

const x=5

function mostrar_circu(r){
    let cir= calcular_circu(radio)
    console.log( `
    La circunferencia de radio ${radio}
        tiene longitud ${cir} `)
}

const r=5
calcular_circu(5)
mostrar_circu(5)