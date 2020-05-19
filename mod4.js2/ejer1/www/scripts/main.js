/// Variables
const form = document.querySelector('form')
const list = document.getElementById('list')


// Funciones
const addElemento = elemento => {
    list.appendChild(elemento)
}
const borraElemento = e => {
    if (e.target.classList.contains('delete')) {
       e.target.parentElement.remove()
    }
}
const crearElemento = mensaje => {
    const li = document.createElement('li')
    li.textContent = mensaje
    const button = document.createElement('button')
    button.classList = 'delete'
    button.textContent = 'X'
    li.appendChild(button)
    addElemento(li)
}
const enviarMensaje = e => {
    e.preventDefault()
    crearElemento(e.target.messageTextarea.value)
    console.log(e.target.parentElement)
}

// Listeners
form.addEventListener('submit', enviarMensaje)
list.addEventListener('click', borraElemento)


