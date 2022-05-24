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
    let a = 0;
    for(item of palavra)
    {
        if(item == letra)
            a++;
    }
    return a;
}

export function Caracters(palavra, letra){
    let a = 0;
    for(let i = 0; i <= palavra.length; i++)
    {
        if(letra == "a")
        {
            a++
        }
    }
    return a;
}

export function MaiorNumero(arr){
    let maior = 0;
    for(item of arr)
    {
        let i = 0;
        while(i < maior)
            maior = item
    }
    return maior;
}

