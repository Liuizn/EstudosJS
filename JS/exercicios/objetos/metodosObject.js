/*
... (spread)
Object.assign(des, any)
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
Object.getOwnPropertyDescriptor(o, 'prop') // Visualiza o estado das propiedades da chave
*/

const produto = { nome : 'Caneca', preco : 1.8 };

const produtoClone = { ...produto , material : 'Aço' }; //Com spread

const produtoClone2 = Object.assign({},produto, {cor : 'verde'}); //Com assign

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))


g