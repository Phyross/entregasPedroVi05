console.log('estamos trabajando en ellooooo')

// Eventos
const botonBuscador = document.getElementById('boton-buscador')
// botonBuscador.addEventListener('click', () => alert('buscando...')) // cuando haces click se realiza un evento

// despues de el alert por defecto un formulario ejecuta el action
// en este caso hace que de un error para evitar esto usaremos preventDefault
// este metodo hace que el navegador no ejecute su accion por defecto

// botonBuscador.addEventListener('click', e => {
//     alert('buscando...')
// })

const ejecutaBoton = e => {
    e.preventDefault()
    let elemento
    elemento = e // consola aparece MouseEvent y mucha info lo mas importante es target
    elemento = e.target // aparece el elemento que tienen el listener
    elemento = e.target.id // tendríamos el id
    elemento = e.target.innerText // texto
    console.log(elemento)

}
botonBuscador.addEventListener('click', ejecutaBoton)

const titulo = document.querySelector('#titulo') 
// los h1 no tienen eventos por defecto no me hace falta preventDefault
titulo.addEventListener('click', e => e.target.innerText = 'Cambio de título')


// tipos de eventos

const subtitulo = document.getElementById('subtitulo')

const obtenerEvento = e => {
    console.log(`Evento: ${e.type}`)
}

// subtitulo.addEventListener('click', obtenerEvento) // Evento: click
// subtitulo.addEventListener('dblclick', obtenerEvento) // Evento: dblclick
// subtitulo.addEventListener('mouseenter', obtenerEvento) // Evento: mouseenter
// subtitulo.addEventListener('mouseleave', obtenerEvento) // Evento: mouseleave
// subtitulo.addEventListener('mouseover', obtenerEvento) // Evento: mouseover
// subtitulo.addEventListener('mouseout', obtenerEvento) // Evento: mouseout
subtitulo.addEventListener('mousedown', obtenerEvento) // Evento: mousedown al presionar el boton
subtitulo.addEventListener('mouseup', obtenerEvento) // Evento: mouseup al soltar el boton

const buscador = document.querySelector('#buscador')
let obtenerBusqueda = e => {
    console.log(`Evento: ${e.type} ---->`, buscador.value )
}
// buscador.addEventListener('keydown', obtenerBusqueda) // Evento: keydown
// buscador.addEventListener('keyup', obtenerBusqueda) // Evento: keyup

// buscador.addEventListener('focus', obtenerBusqueda) // cuando obtiene el foco
// buscador.addEventListener('blur', obtenerBusqueda) // cuando pierde el foco

// buscador.addEventListener('cut', obtenerBusqueda) // cuando se corta un texto
// buscador.addEventListener('copy', obtenerBusqueda) // cuando se copia un texto
// buscador.addEventListener('paste', obtenerBusqueda) // cuando se pega un texto

obtenerBusqueda = e => {
    titulo.innerText = buscador.value
}

buscador.addEventListener('input', obtenerBusqueda) // evento que unifica los anteriores


// Bubbling

const card = document.querySelector('.card')
const info = document.querySelector('.info') 
const eliminar = document.querySelector('.eliminar')

// card.addEventListener('click', () => console.log('click en la card'))
// info.addEventListener('click', () => console.log('click en info'))
// eliminar.addEventListener('click', () => console.log('click en el botón'))

card.addEventListener('click', () => console.log('click en la card'))
info.addEventListener('click', e => {
    console.log('click en info')
    e.stopPropagation()
})
eliminar.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en el botón')
})


// Delegation

const eliminarElemento = e => {
    e.preventDefault()
    console.log('click')
    console.log(e.target.classList)
    // if (e.target.classList.contains('enlace')){
    //     console.log('Siiii')
    // } else {
    //     console.log('Nooo')
    // }
    if (e.target.classList.contains('eliminar')) {
        e.target.parentElement.parentElement.remove()
    }
}

// document.body.addEventListener('click', eliminarElemento)

const main = document.querySelector('main')
main.addEventListener('click', eliminarElemento)
