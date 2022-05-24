//Produto
//Camiseta, Lápis, Caneta

function Produto(nome, preco) 
{
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) 
{ 
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) 
{ 
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
}

Camiseta.prototype = Object.create(Produto.prototype);



const camiseta = new Camiseta('INUCIA', 400);
camiseta.aumento(50)

console.log(camiseta)