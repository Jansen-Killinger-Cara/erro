var a1
var b1
function soma(a,b){
    b1=b
    a1=a
    return  a + b
}

function subtrai(a,b){
    b1=b
    a1=a
    return a -b
}

function multiplica(a,b){
    b1=b
    a1=a
    return a * b
}

function divide(a,b){
    b1=b
    a1=a
    return a / b
}

var resultado = soma(3,5)
console.log(`A soma dos valores: ${a1} e ${b1} é = ${resultado}`)
var resultado = subtrai(3,5)
console.log(`A subtração dos valores: ${a1} e ${b1} é = ${resultado}`)
var resultado = multiplica(3,5)
console.log(`A multiplicação dos valores: ${a1} e ${b1} é = ${resultado}`)
var resultado = divide(3,5).toFixed(2)
resultado = resultado.replace(".", ",")
console.log(`A divisão dos valores: ${a1} e ${b1} é = ${resultado}`)
