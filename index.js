var numero = 0

function atualizar(){
    document.querySelector('.valor').innerHTML = numero
}

function mais(){
    numero = numero + 1
    atualizar()
}

function menos(){
    numero = numero - 1
    atualizar()
}

function reset(){
    numero = 0 
    atualizar()
}
