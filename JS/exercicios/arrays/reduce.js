// Some todos os números (Reduce)
// Retorne um Array com os Pares (Filter)
// Retorne um Array com o Dobro dos Valores (Map)



const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let total = numeros.reduce((acumulador, valor, indice, array)=> {
    acumulador += valor;
    return acumulador;
},0)


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 105 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 1000 },
  ];


const pessoaMaisVelha = pessoas.reduce((a,value,i,array)=>{
    if (value.idade > a.idade) a = value
    return a
})


console.log(pessoaMaisVelha)