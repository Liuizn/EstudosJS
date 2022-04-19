function Carro(modelo,ano)
{
    this.modelo = modelo
    this.ano = ano

    this.ronco = function()
    {
        console.log(`vrummmmmmm`)
    }
} 

const p1 = new Carro(`honda civic`, 2022)
const p2 = new Carro(`honda civic`, 2008)

p1.ronco()