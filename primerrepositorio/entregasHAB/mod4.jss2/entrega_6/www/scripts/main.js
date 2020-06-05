console.log('akkiii estamooooos')

const botons = document.querySelectorAll('.book')

const list= document.getElementById('list')

const botEliminar=document.querySelector('.eliminar')

const li = document.createElement('li')
 list.appendChild(li)

const imprimirTarjeta= HotelCard=>{
 
    const card=document.createElement('div')
    card.id = 'cart-card-'
    card.className = 'cart-card'
    card.innerHTML=`
      <img src="${HotelCard.imagenH}"  imagen">
      <section>
        <h4>${HotelCard.nombreH}</h4>
        </section>` 
   
    li.appendChild(card)

    const button = document.createElement('button')
    button.classList = 'delete'
    button.textContent = 'Eliminar'
    card.appendChild(button)
      
}


const imprimirTarjetat= HotelCard=>{
    const div=document.createElement('div')
    div.classList='divTarjeta'
    list.appendChild(div)
    const imagen=document.createElement('img')
    imagen.src=HotelCard.imagenH
    imagen.classList = 'tarjet'
    const section=document.createElement('section')
    section.classList='divTarjeta'
    const nombre= document.createElement('h4')
    nombre.textContent=HotelCard.nombreH

    div.appendChild(imagen)
    div.appendChild(section)
    section.appendChild(nombre)
}
    

const CrearTarjeta= rutaArticulo=>{
    const HotelCard={
        nombreH:rutaArticulo.querySelector('h2').innerText,
        imagenH:rutaArticulo.querySelector('img').src,
        precioH:rutaArticulo.querySelector('h3').innerText  
    }
    console.log(HotelCard)
    imprimirTarjeta(HotelCard)
0
}

const enviarMensaje= e =>{
    e.preventDefault()
    const rutaArticulo=e.target.parentElement.parentElement 
    const nombreHotel=rutaArticulo.querySelector('h2').innerText    
    const imagenHotel=rutaArticulo.querySelector('img').src
    const precioHotel=rutaArticulo.querySelector('h3').innerText  

    CrearTarjeta(rutaArticulo)

   console.log(imagenHotel)   
   
    console.log(rutaArticulo)
    console.log(list)

}
    /*const li = document.createElement('li')
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

}*/

const borraElemento = e => {
   if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove()
      
      
 } }

 const Eliminar = e => {
     console.log('Elkiminar')
     while (li.firstChild) {
        //The list is LIVE so it will re-index each call
        li.removeChild(li.firstChild);
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


