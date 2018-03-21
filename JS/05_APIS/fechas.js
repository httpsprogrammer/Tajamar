//Nos da la hora 'Date' respecto al meridiano de greenwich
let cumple = new Date(1998,8,17,00,00,00)
let hoy= new Date()
console.log(hoy)
console.log(hoy.getDay())
console.log(hoy.getFullYear())
let res = parseInt(hoy.getFullYear - cumple.getFullYear)
console.log(res)

