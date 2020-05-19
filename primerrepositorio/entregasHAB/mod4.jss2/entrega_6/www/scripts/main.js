console.log('akkiii estamooooos')

const botons = document.querySelectorAll('.book')

const list= document.getElementById('list')




const botEliminar=document.querySelector('.eliminar')
const listaMatter=document.getElementById('listaMatter')


const enviarMensaje= e =>{
    e.preventDefault()
    const rutaArticulo=e.target.parentElement.parentElement 
    const nombreHotel=rutaArticulo.querySelector('h2').innerText    
    const imagenHotel=rutaArticulo.querySelector('img').src
    const precioHotel=rutaArticulo.querySelector('h3').innerText  

   console.log(imagenHotel)
    
   
    console.log(rutaArticulo)
    console.log(list)
    const li = document.createElement('li')
    const nombre=document.createElement('h4')
    nombre.textContent=nombreHotel
    const precio = document.createElement('h2')
    precio.textContent=precioHotel

    const imagen=document.createElement('img')
    imagen.src=imagenHotel
    imagen.classList = 'tarjet'
    
    //imagen.src="/images/damenlou.jp.g"
    //nombreHotel=imagenHotel



    
    list.appendChild(li)
    li.appendChild(nombre)
    li.appendChild(imagen)
    li.appendChild(precio)
    const button = document.createElement('button')
    button.classList = 'delete'
    button.textContent = 'Eliminar'
    li.appendChild(button)

}

const borraElemento = e => {
   if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove()
      
      
 } }

 const Eliminar = e => {
     console.log('Elkiminar')
     while (list.firstChild) {
        //The list is LIVE so it will re-index each call
        list.removeChild(list.firstChild);
    }
     
   
     

 }




botons.forEach(boton=> {boton.addEventListener('click',enviarMensaje)})



list.addEventListener('click', borraElemento)
botEliminar.addEventListener('click',Eliminar)


//const borraElemento = e => {
 //   if (e.target.classList.contains('book')) {
   //    console.log(e.target.parentElement)
    //}
//}


