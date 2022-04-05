function AdicionarTarefas(){
    const novaTarefa = document.getElementsByClassName('nova_tarefa')[0].value
    if (novaTarefa === ''){return}
    const $ul = document.getElementsByTagName('ul')[0]
    const $li = document.createElement('li')
    const $div = document.createElement('div')
    $div.className += 'checkbox'
    const $label = document.createElement('label')
    const $input = document.createElement('input')
    $input.className += 'itens'
    $input.setAttribute('type', 'checkbox')
    $input.setAttribute('name', 'tarefas')          
    $input.addEventListener('click', remover)
    $label.appendChild($input)
    $label.appendChild(document.createTextNode(novaTarefa))
    $div.appendChild($label)
    $li.appendChild($div)
    $ul.appendChild($li)
    document.getElementsByClassName('nova_tarefa')[0].value = ''
}

function remover(e){
    const $li = e.currentTarget.closest('li')
    $li.classList.toggle('removed')
}

function mudarTitulo() {
    const titulo = document.getElementsByTagName('h2')[0]
    const novoTitulo = document.getElementsByClassName('mudarTitulo')[0].value
    titulo.innerHTML = novoTitulo
}

document.getElementsByClassName('novaTarefa')[0].addEventListener('click',AdicionarTarefas)

const tarefa = document.getElementsByClassName('itens')
Array.from(tarefa).forEach(tarefa => tarefa.addEventListener('click', remover)) 

document.getElementsByClassName('mudarTitulo')[0].addEventListener('keyup', mudarTitulo)