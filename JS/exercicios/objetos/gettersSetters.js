function Produto(nome, preco, estoque)
{
    this.nome = nome;
    this.preco = preco,

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a sua chave
        configurable: true, // configuravvél
        get: function () { 
            return estoque;
        },
        set: function (value) {
          p1.estoque =  value 
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque);