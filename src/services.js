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
    let x = 0;
    for(let i = 1; i <= 10; i++)
        x = numero * i;
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
    forEach(letra in palavra)
    {
        for(i = 0; i < palavra; i++)
            i = letra;
    }
}

export function MaiorNumero(){
    let maior = 0;
    forEach( item in arr)
    {
        for( i = 0; i < maior; i++)
            maior = item;
    }
    return maior;
}

