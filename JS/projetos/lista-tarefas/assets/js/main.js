//Selecao do input, lista de tarefas e botão de inserção
const inputTarefa = document.querySelector('#input-tarefa')
const adicionarTarefa = document.querySelector('#btn-tarefa')
const listaTarefas = document.querySelector('#tarefas')

if(localStorage.getItem('lista') !== null) {

    let lista = JSON.parse(localStorage.getItem('lista'))

    for (const itens of lista) {
        listaTarefas.appendChild(montaTarefa(itens))
    }
    
}

//Função com o propósito de montar o <li> com o item inserido e o <button> de exclusão
function montaTarefa(valueInput) {
    const li = document.createElement('li')
    li.innerText = valueInput + '  '
    const botaoExlcuir = document.createElement('button')
    botaoExlcuir.innerText = 'Excluir'
    botaoExlcuir.setAttribute('id','excluir')
    li.appendChild(botaoExlcuir)
    return li
}

//Chamada de criação
function criaTarefa(tarefa) {
    const li = montaTarefa(tarefa)
    listaTarefas.appendChild(li)
}

//limpa input
function limpaInputs() { 
    inputTarefa.value = ''
}

// evento de click do botão de registro
adicionarTarefa.addEventListener('click', () => {
    
    if(inputTarefa.value === '') return false

    criaTarefa(inputTarefa.value)
    armazenaTarefa()
    limpaInputs()
})

//evento de click do botão de exclusão do registro específico
document.addEventListener('click', (info)=>{
    if(info.target.id !== 'excluir') return false

    //Capturando a referência da tag <li> correspondente ao botão pressionado.
    let li = info.target.parentNode

    //tratando a informação da tag
    let texto = li.innerText.replace('Excluir', '').trim()

    //capturando nossa coleção de tarefas e transformando em um array
    let lista = JSON.parse(localStorage.getItem('lista'))

    
    for (const value of lista) {
        if(value === texto) {
            let i = lista.indexOf(value)
            lista.splice(i, 1)
        }
    }

    lista = JSON.stringify(lista)
    localStorage.setItem('lista', lista)

    listaTarefas.removeChild(li)
    
})

//Armazenando os valores dos itens dentro do Web Storage
function armazenaTarefa() {
    const itensLista = document.querySelectorAll('li')
    let arrayLista = new Array()

    for (const texto of itensLista) {
        text = texto.innerText
        text = text.replace('Excluir', '').trim()
        arrayLista.push(text)
    }
    
    arrayLista = JSON.stringify(arrayLista)
    localStorage.setItem('lista', arrayLista)

}