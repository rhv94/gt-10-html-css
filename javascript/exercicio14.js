//função que receba um objeto carro
//o objeto contem as propriedades:
//modelo, ano, cor e km
//se o carro for maior que 2020 ou tiver menos que 1000km exibir carro novo
//se não exibir carro usado

const carro = {
    modelo: "Civic",
    ano: 2021,
    cor: "preto",
    km: 800
}

function verificarCarro(carro){
    if(carro.ano > 2020 || carro.km < 1000){
        console.log("Carro novo")
    } else {
        console.log("Carro usado")
    }
}

verificarCarro(carro)