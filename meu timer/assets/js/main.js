const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

function mostraHora() { 
    let data = new Date()

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    })
}


iniciar.addEventListener('click', ()=>{
    setInterval(() => {
        console.log(mostraHora())
    }, 8000);
})