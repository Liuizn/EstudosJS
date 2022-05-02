function Produto(nome, preco, estoque)
{
    this.nome = nome;
    this.preco = preco,

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a sua chave
        value: estoque, // valor
        writable: false, // valor manipulável
        configurable: true // configuravvél
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque);

p1.estoque = '4'

console.log(p1.estoque);
