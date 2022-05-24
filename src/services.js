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

export function tabuada(numero){
    let a = 0;
    for(let i = 0; i <= 10;i++)
    {
        a = numero * i;
    }
    return a;
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
   if(NC == "Brasileira")
        t = 5 * (qtdI + qtdM);
    else  
        t = qtdM * 14.25 + qtdI * 28.5;
    return t;  
}

export function Caracter(palavra, letra){
    let i = 0
    for(let item of palavra)
    {
        if(item == letra)
            i++
    }
    return i;
}


export function MaiorNumero(arr){
    let maior = 0;
    for(let item of arr)
    {
        if(item > maior)
            maior = item
    }
    return maior;
}

