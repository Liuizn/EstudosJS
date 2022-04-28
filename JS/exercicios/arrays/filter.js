// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos.

// Retorne os números maiores que 10
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosMaioresQue10 = new Array();


//Minha Solução
numeros.forEach(element => {
    if (element > 10) numerosMaioresQue10.push(element)
});

function callBackFiltro(valor) 
{
    return valor > 10
}

//O Método Filter ele espera receber um booleano de retorno
// True == vai inserir aquele valor no novo array
// False == não vai inserir aquele valor no novo array

//Passando variáveis
const numerosFiltrados = numeros.filter(callBackFiltro);

//Passando por função anônima
const numerosFiltrados2 = numeros.filter((e)=>{
    return e > 20
})

const numerosFiltrados3 = numeros.filter(e => e > 30);

// console.log(numerosFiltrados)
// console.log(numerosFiltrados2)
// console.log(numerosFiltrados3)



const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];


// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoas5letras = pessoas.filter((value)=>{
    return value.nome.length >= 5 
})
// console.log(pessoas5letras)


// Retorne as pessoas com mais de 50 anos
const pessoas50anos = pessoas.filter((value)=>{
    return value.idade > 50
})
// console.log(pessoas50anos)


// Retorne as pessoas cujo nome termina com a
const pessoasTerminaComA = pessoas.filter((value,i)=>{  

    //Com método slice
    // return value.nome.slice(-1) == 'a'
    
    //Com método endsWith
    return value.nome.endsWith(`a`)
})

console.log(pessoasTerminaComA)