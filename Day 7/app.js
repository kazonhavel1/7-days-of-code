let primeiroNumero;
let segundoNumero;
let operador = '';
let resultado;

do {

    operador = prompt("Digite a operação que deseja, sendo elas: soma,divisao,multiplicacao,subtracao ou digite sair para encerrar o programa");
    if (operador === "sair"){
        alert("Até a próxima!");
        break;
    }
    
    primeiroNumero = parseInt(prompt("Digite o primeiro número"));
    segundoNumero = parseInt(prompt("Digite o segundo número"));

    switch (operador){

        case "soma": 
            resultado = soma(primeiroNumero,segundoNumero);
            alert(`O resultado é: ${resultado}`);
            break;
        case "subtracao":
            resultado = subtracao(primeiroNumero,segundoNumero);
            alert(`O resultado é: ${resultado}`);
            break;
        case "divisao":
            resultado = divisao(primeiroNumero,segundoNumero);
            alert(`O resultado é: ${resultado}`);
            break;
        case "multiplicacao":
            resultado = multiplicacao(primeiroNumero,segundoNumero);
            alert(`O resultado é: ${resultado}`);
            break;
        case "sair":
            alert("Até a próxima!");
            break;
        default:
            alert("Opção não localizada, tente novamente.");
            break;
    }

}
while (operador !== 'sair');

function soma(num1,num2){
   let valor = num1 + num2
   return valor
}

function subtracao(num1,num2){
    let valor = num1 - num2
    return valor
}

function multiplicacao(num1,num2){
    let valor = num1 * num2
    return valor
}

function divisao(num1,num2){
    let valor = num1 / num2
    return valor
}