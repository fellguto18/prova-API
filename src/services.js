export function somar(a, b){
    return a + b;
}

export function dobro(n){
    return n * 2;
}
export function febre(temp){
    let t = true;
    if(temp >= 37.5)
        t = true;
    else
       t = false;
    return t;
}

export function media(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

export function cor(a){
    let t = true;
    if(a == "amarelo" || a == "azul" || a == "vermelho")
        t = true;
    else
        t = false;

    return t;
}

export function IngressoCinema(qtdM, qtdI, DS, NC){
    let t = 0;
    if(DS == "Quarta")
        t = 14.25 * (qtdI + qtdM);
    else if(NC == "Brasileira")
        t = 5 * (qtdI + qtdM);
    else  
        t = qtdM * 14.25 + qtdI * 28.5;
    return t;  
}

export function Caracter(palavra){
    for(i = 0; i < palavra; i++)
    {
        
    }
}