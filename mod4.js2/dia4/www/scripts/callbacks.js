const ciudades=['lugo','ourense','pontevedra']

const callback =ciudad => console.log(ciudad)

ciudades.forEach(callback)

let paises=['Francia','Espain','Portu']

const mostrarPaises =()=>{
    setTimeout(() =>{
        let html=''
        paises.forEach(pais =>{
            html+= `<li>${pais}</li>`
                })
        document.getElementById('list').innerHTML=html
    },3000)
}

mostrarPaises()

const nuevoPais =(pais,callback)=>{
    setTimeout(() =>{
        paises=[...paises,pais]
        callback()
    },5000)
    
}

nuevoPais('Alemania',mostrarPaises)