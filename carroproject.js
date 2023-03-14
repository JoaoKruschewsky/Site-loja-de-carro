
//Recebe os valores da pessoa
var desconto1 = 0.12
var desconto2 = 0.07
var desconto = 0
var valorfinal = 0
var div = document.getElementById("resultado")

//button pra chamar o switch 
function Continuacao() {
    var escolha = parseInt(document.getElementById("input1").value)
    var valor = parseInt(document.getElementById("input2").value)
    var ano = parseInt(document.getElementById("input3").value)

    // Aqui o switch ira escolher o carro que a pessoa escolheu
    switch (escolha) {
        case 1:
            if (ano >= 2000) {
                //Operacoes 
                desconto = valor * desconto1
                valorfinal = valor - desconto
                div.innerHTML = "Carros do ano 2000 pra cima recebe 0.12 de desconto logo o desconto fica: " + desconto.toFixed(2) + " valor total do carro é " + valorfinal.toFixed(2)
            } else {
                desconto = valor * desconto2
                valorfinal = valor - desconto
                div.innerHTML = "Carros antes do ano 2000 recebe 0.07 de desconto logo o desconto fica: " + desconto.toFixed(2) + " valor total do carro é " + valorfinal.toFixed(2)
            }
            break;

        case 2:
            if (ano >= 2000) {
                desconto = valor * desconto1
                valorfinal = valor - desconto
                div.innerHTML = "Carros do ano 2000 pra cima recebe 0.12 de desconto logo o desconto fica: " + desconto.toFixed(2) + " valor total do carro é " + valorfinal.toFixed(2)
            }
            else {
                desconto = valor * desconto2
                valorfinal = valor - desconto
                div.innerHTML = "Carros antes do ano 2000 recebe 0.07 de desconto logo o desconto fica: " + desconto.toFixed(2) + " valor total do carro é " + valorfinal.toFixed(2)

            }
            break;

        case 3:
            if (ano >= 2000) {
                desconto = valor * desconto1
                valorfinal = valor - desconto
                div.innerHTML = "Carros do ano 2000 pra cima recebe 0.12 de desconto logo o desconto fica: " + desconto.toFixed(2) + " valor total do carro é " + valorfinal.toFixed(2)
            } else {
                desconto = valor * desconto2
                valorfinal = valor - desconto
                div.innerHTML = "Carros antes do ano 2000 recebe 0.07 de desconto logo o desconto fica: " + desconto.toFixed(2) + " valor total do carro é " + valorfinal.toFixed(2)
            }
            break;
        case 4:
            if (ano >= 2000) {
                desconto = valor * desconto1
                valorfinal = valor - desconto
                div.innerHTML = "Carros do ano 2000 pra cima recebe 0.12 de desconto logo o desconto fica: " + desconto.toFixed(2) + " valor total do carro é " + valorfinal.toFixed(2)
            } else {
                desconto = valor * desconto2
                valorfinal = valor - desconto
                div.innerHTML = "Carros antes do ano 2000 recebe 0.07 de desconto logo o desconto fica: " + desconto.toFixed(2) + " valor total do carro é " + valorfinal.toFixed(2)
            }
            break;
        case 5:
            if (ano >= 2000) {
                let desconto = valor * desconto1
                valorfinal = valor - desconto
                div.innerHTML = "Carros do ano 2000 pra cima recebe 0.12 de desconto logo o desconto fica: " + desconto.toFixed(2) + " valor total do carro é " + valorfinal.toFixed(2)
            } else {
                let desconto = valor * desconto2
                valorfinal = valor - desconto
                div.innerHTML = "Carros antes do ano 2000 recebe 0.07 de desconto logo o desconto fica: " + desconto.toFixed(2) + " valor total do carro é " + valorfinal.toFixed(2)
            }
            break;

        default:
            break;
    }

}