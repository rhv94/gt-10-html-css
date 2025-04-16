// armazenar valores valor dos inputs altura e peso
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
// armazenar valor do botão por id
var btn = document.getElementById("btn")
//armazenar valor da div fim
var fim = document.getElementById("fim") 

//função para calcular o imc
function calcularImc(){
    //armazenar apenas o valor do input
    const valorAltura = altura.value
    const valorPeso = peso.value

    //calcular imc
    const imc = valorPeso / (valorAltura * valorAltura)

    return imc

}

//função de clique

function calcular(){
    //chama a função de calcularimc e armazenar o valor
    const imc = calcularImc()
    var mensagem = ""

    if(imc < 18.5){
        mensagem = "Você está abaixo do peso"
    }

    if(imc >= 18.6 && imc <= 24.9){
        mensagem = "Você está no peso normal"
    }

    if(imc >= 25 && imc <= 29.9){
        mensagem = "Você está sobrepeso"
    }

    if(imc >= 30 && imc <= 34.9){
        mensagem = "Você está com obesidade grau I"
    }

    if(imc >= 35 && imc <= 39.9){
        mensagem = "Você está com obesidade grau II"
    }

    if(imc >= 40){
        mensagem = "Você está com obesidade grau III"
    }
    //renderizar o resultado na div fim
    fim.innerHTML = `
    <div class="linha"></div>
        <div class="resultado">
            <div class="esquerda">
                <h2>${imc.toFixed(2)}</h2>
                <p>Seu IMC</p>
            </div>
            <div class="direita">
            <p>${mensagem}</p>
            </div>
        </div>
        <div class="linha"></div>
    `


}

//adicionar evento de click no botão
btn.addEventListener("click", calcular)