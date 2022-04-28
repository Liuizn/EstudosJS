
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Dobre os números
const numerosDuplicados = numeros.map( value =>{
    return value * 2
})
// console.log(numerosDuplicados)


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// Retorne apenas uma string com o nome da pessoa
const nomePessoas = pessoas.map( obj =>{
    return obj.nome
})
// console.log(nomePessoas)

// Remova apenas a chave "nome" do objeto
const pessoasSemNome = pessoas.map ( obj =>{
    return {idade : obj.idade}
})
// console.log(pessoasSemNome)

console.log(pessoasSemNome)

// Para cada elemento:
// Adicione uma chave id em cada objeto (id)

const pessoasComId = pessoas.map( (obj, i) =>{
    obj[`id`] = i
    return obj
})

console.log(pessoasComId)