function aqui(){
    let numeroUm = 1;
    let stringUm = "1";
    let numeroTrinta = 30;
    let stringTrinta = "30";
    let numeroDez = 10;
    let stringDez = '10';

    if (numeroUm == stringUm){
        if (numeroUm === stringUm){
            console.log("As variáveis numeroUm e stringUm possuem o mesmo valor e o mesmo tipo");
        }
        else{
            console.log("As variáveis numeroUm e stringUm possuem o mesmo valor porém não são do mesmo tipo");
        }   
    }
    else{
        console.log("As variáveis numeroUm e stringUm não possuem o mesmo valor");
    }

    if(numeroTrinta == stringTrinta){

        numeroTrinta === stringTrinta ? console.log("As variáveis NumeroTrinta e stringTrinta possuem o mesmo valor e o mesmo tipo") : console.log("As variáveis NumeroTrinta e stringTrinta possuem o mesmo valor porem não são mesmo tipo");

    }
    else{
        console.log("As variáveis numeroTrinta e stringTrinta não possuem o mesmo valor")
    }

    if (numeroDez == stringDez){

        numeroDez === stringDez ? console.log("As variáveis numeroDez e stringDez possuem o mesmo valor e o mesmo tipo") : console.log("As variáveis numeroDez e stringDez possuem o mesmo valor porem não são mesmo tipo");

    }
    else{
        console.log("As variáveis numeroDez e stringDez não possuem o mesmo valor")
    }
}