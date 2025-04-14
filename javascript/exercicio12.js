// uma função que receba os dias e km rodados
// o valor por dia é 250
// o valor por km é 0.50
// se tiver rodado mais de 1000 km o valor por km fica 0.25
function calcularAluguel(dias, km){
    if(km > 1000){
        const valorPorDia = 250
        const valorRodado = km * 0.25
        const calculo = (dias * 250) + valorRodado
        console.log(calculo)
    } else { 
        const valorRodado = km * 0.50
        const calculo = (dias * 250) + valorRodado
        console.log(calculo)

    }

}

calcularAluguel(10, 1500)

// calculo do prof

function calcularTotal(dias, kms){
if(kms > 1000){
const valorPorKm = 0.25
const calculoDiaria = dias * valorPorDia
const valorKm = kms * valorPorKm

const total = calculoDiaria + valorPorKm
console.log(total)
} else {
const valorPorKm = 0.50
const calculoDiaria = dias * valorPorDia
const valorKm = kms * valorPorKm

const total = calculoDiaria + valorPorKm
console.log(total)

}
}

calcularTotal(5, 100)