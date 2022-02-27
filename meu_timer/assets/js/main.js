const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

function mostraHora(seg) { 
    let data = new Date(seg * 1000)

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

let tempo
let segundos = 0

iniciar.addEventListener('click', function () {
    relogio.classList.remove('pausado')
    iniciaRelogio = setInterval(() => {
        segundos++
        relogio.innerText = mostraHora(segundos)
        tempo = relogio.innerHTML
        
    }, 1000)
})

pausar.addEventListener('click', function () {
    
    setTimeout(()=>{
        clearInterval(iniciaRelogio)
        relogio.classList.add('pausado')
    }, 0)

})

zerar.addEventListener('click', function() {
    clearInterval(iniciaRelogio)
    relogio.classList.remove('pausado')
    relogio.innerHTML = '00:00:00'
    segundos = 0
})