let idade = parseInt(prompt("Qual sua idade?"));
let nome = prompt("Qual seu nome?");
let linguagem = prompt("Qual linguagem você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let resposta_linguagem = parseInt(prompt(`Você gosta de estudar ${linguagem}? Responda com 1 para Sim e 2 para Não`));

if (resposta_linguagem == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
else{
    
    let response = parseInt(prompt("Ahh que pena... Já tentou aprender outras linguagens? Responda com 1 para Sim e 2 para Não"))

    if (response == 1){
        alert("Que ótimo espero que encontre a linguagem que você mais se adapte!")
    }
    else{
        alert("Como sugestão na alura há vários cursos sobre varias linguagens que podem de dar um norte! Quando puder confira!")
    }
}