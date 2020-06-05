
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1

// a) Generar contador de mensajes por usario
// b) Generar una lista con la siguiente estructura:
/*[
    {
        userId: <userId>,
        posts: [
            {
                title: <title>
                body: <body>     // hay que obtenerlo de la segunda petición
            },
            {
                title: <title>
                body: <body>
            },
        ]
    }
]
*/
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
.then( response => {
    
    const usuarios=response.data;
    let NuevoUsuario=2;
     
    let postsId=[
            {
            userId:1,
            posts:
                [{
                 title:'titulo',
                 body:'mensages'
                }],
            }
        ];
     let ListPosts=[];    
     
     function añadirUsuario(){
                postsId.push({userId:NuevoUsuario,posts:[{title:'',body:''}]});
                NuevoUsuario++;
     }   

     function mostrarTodos(){  
        while(usuarioID<11){
         const llamarUsuario=GetTitlePost(usuarios,usuarioID,postId);
         postId++;
         usuarioID++;
         añadirUsuario();
        }
        }          
     
     function IntroducirBody(Datos1,Datos2,npost){      //(usuarios,DatosUsus,0)
        let contInt=1;
        for(usuario of Datos1){
            for(dato of Datos2){
                if(usuario.title===dato.title){                        
                    postsId[npost].posts[contInt].body=`${usuario.body}`;                                                                             
                    contInt++;                                                                  
                }            
               }
        }
        console.log(postsId[npost]);
    }
 
    function GetTitlePost(data,idRef,npost){//(usuarios,1,0) colocaria en el post 

        let usuariosOrden=[];
        let cont=0;
        let contMens=0;
        let DatosUsus=[];        

     for(let usuario of usuarios ){
        if(usuario.userId == idRef){
 
        cont++;
        contMens++;                  

       usuariosOrden.push(axios.get(`https://jsonplaceholder.typicode.com/posts/${usuario.id}`));   

       postsId[npost].posts.push({title:`${usuario.title}`});     
        }    
        else{cont++}
        }
        Promise.all(usuariosOrden)
        .then(datos=>{
            for(i=0;i<contMens;i++){
                const usu=datos[i].data;
                DatosUsus.push(usu);
            }       
        IntroducirBody(usuarios,DatosUsus,npost);           
         
          return(DatosUsus);                       
        });
        console.log(`Usuario ${idRef}:${contMens} mensages`);                  
    }    
    let usuarioID=1;
    let postId=0;

    mostrarTodos();    
      
} );

