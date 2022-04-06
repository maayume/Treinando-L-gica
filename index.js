//  Questão 1
let nomeCompleto = "Mayume Cristine Alves";

console.log(nomeCompleto);

//  Questão 2

let numeroA=1, numeroB=5, resultado;

resultado = numeroA * numeroB;

console.log(resultado)

//  Questão 3

function saudacao(){
    return "Oi, Eu sou o Goku"
}
console.log(saudacao())

//  Questão 4

function multiplica(num1, num2){
    console.log(num1*num2)
}

multiplica(4,7);

//  Questão 5


let idade=15;

podeDirigir(idade);

function podeDirigir(idade){
    if(idade >= 18){
        console.log("Você pode dirigir");
    }
    console.log("Você não pode dirigir");
}

//  Questão 6

let i;

for(i=0; i<=20; i++)
    console.log(i);

//  Questão 7

for(i=0; i<=20; i++){
    if(i%2 != 0)
        console.log(i)
}

//  Questão 8

let numero = 5;

for (i=0; i<=10; i++)
    console.log(i + " * " + numero + "=", i*numero)

//  Questão 9

let converterEmHoras = 20;

resultado = converterEmHoras/60;
console.log(converterEmHoras)








