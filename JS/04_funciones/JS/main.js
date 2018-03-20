





function main() {
    function calcularCubo(a)
{
a = a * a * a 
return a
}
let n = 6

    let mostrarResultado2= function () {
        console.log(calcularCubo(n))
    }
    console.log(typeof n)
    console.log(typeof mostrarResultado2)
    mostrarResultado2()
return calcularCubo
}
main()
console.log(main()(2))
let f = main()
console.log(typeof f)
console.log(f(4))
console.log(main(4))

