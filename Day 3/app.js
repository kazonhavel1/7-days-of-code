let area = parseInt(prompt("Qual área você deseja seguir, digite 1 - Front End ou 2 - Back End"));
let linguagem;
let linguagens = [];

if (area == 1){
    linguagem = prompt("Você gostaria de aprender 1 - Vue.Js ou 2 - React?");
    if(linguagem == 1){
        linguagens.push("Vue.Js");
        especializacao("Vue.Js");
        linguagensEscolhidas()
    }
    else if(linguagem == 2){
        linguagens.push("React");
        especializacao("React");
        linguagensEscolhidas()
    }
    else{
        alert("Linguagem inválida! Tente novamente.");
    }
}

else if(area == 2){
    linguagem = prompt("Você gostaria de aprender 1 - C# ou 2 - Java?");
    if(linguagem == 1){
        linguagens.push("C#");
        especializacao("C#");
    }
    else if(linguagem == 2){
        linguagens.push("Java");
        especializacao("Java");
    }
    else{
        alert("Linguagem inválida! Tente novamente.");
    }
}

else{
    alert("A área escolhida é inválida! Tente novamente.");
}

function especializacao(areaescolhida){

    let especializacao = prompt("Deseja seguir somente na área escolhida ou se tornar um FullStack? Digite 1 para Full Stack e 2 para a área que escolheu anteriormente");

    especializacao == 1 ? alert("Você se tornará um Desenvolvedor Full Stack!") : alert(`Você se tornara um Desenvolvedor ${areaescolhida}!`);

    let respose = prompt("Deseja aprender mais alguma tecnologia? 1 - Sim  2 - Não");

    if (respose == 2){
        alert(`${especializacao == 1 ? alert("Você se tornará um Desenvolvedor Full Stack!") : alert(`Você se tornara um Desenvolvedor ${areaescolhida}!`)} Durante esta jornada você aprenderá sobre as seguintes linguagens: ${linguagens.toString()}. Boa sorte em sua jornada como Dev :)`);
    }
    else if (respose == 1 ){
        
        let tecnologia = prompt("Qual tecnologia deseja aprender?");
        linguagens.push(tecnologia);
        alert(`Você inseriu na lista de tecnologias a tecnologia: ${tecnologia}`);
        while (tecnologia != null){
            tecnologia = prompt("Há mais alguma tecnologia que deseja aprender? caso sim digite o nome dela ou pressione cancelar para sair.");
            linguagens.push(tecnologia);
            if (tecnologia == null){
                alert("Ok, inseri todas as linguagens que selecionou :)")
            }
            else{
                alert(`Você inseriu na lista de tecnologias a tecnologia: ${tecnologia}`);
            }
        }
        alert(`${especializacao == 1 ? "Você se tornará um Desenvolvedor Full Stack!" : `Você se tornara um Desenvolvedor ${areaescolhida}!`} Durante esta jornada você aprenderá sobre as seguintes linguagens: ${linguagens.toString()}. Boa sorte em sua jornada como Dev :)`);
    }
    else{
        alert(`Resposta não identificada :(, porém ${especializacao == 1 ? alert("Você se tornará um Desenvolvedor Full Stack!") : alert(`Você se tornara um Desenvolvedor ${areaescolhida}!`)} Durante esta jornada você aprenderá sobre as seguintes linguagens: ${linguagens.toString()}. Boa sorte em sua jornada como Dev :)`);
    }

}

