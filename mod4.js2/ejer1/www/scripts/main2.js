
import {form, enviarMensaje,list,borrarElemento} from './utils'

//listeners

form.addEventListener('submit',enviarMensaje)
list.addEventListener('click',borrarElemento)