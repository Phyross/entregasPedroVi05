
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let eventosCulturales = {      //objeto con todos los eventos
  'conciertos': [],
  'teatro': [],
  'monologo': [],
}

app.get('/eventos', (req, res) => {
  res.json(Object.keys(eventosCulturales));
})
// Añado evento
app.post('/eventos', (req, res) => {
  const nombreEvento = req.body.name;

  if (nombreEvento !== undefined) {
    eventosCulturales[nombreEvento] = [];
    res.send();
  } else {
    res.status(400).send({ error: 'ERROR!!!Parametro Inesperado' });
  }

  if (eventosCulturales[nombreEvento] == undefined && nombreEvento !== undefined) {
    eventosCulturales[nombreEvento] = [];
    res.send();
  } else {
    res.status(409).send({ error: 'ERROR!!! El evento ya existe' });
  }

})

app.post('/eventos/:event', (req, res) => {

  let eventoName = req.params.event;//req.params.event=:event(:teatro o lo que sea)
  let name = req.body.name;                 //mira en el campo name del postman 
  let capacity = req.body.capacity;
  let artist = req.body.artist;
  let description = req.body.description;

  if (name === undefined || capacity === undefined|| artist === undefined )//Descripcion: es opcional ponerla o no
     {

    res.status(404).send({ error: 'ERROR!!! al insertar algun parametro' });
    return
  }

  if (eventoName === undefined) {
    res.status(404).send({ error: 'ERROR!!! Evento no definido' });
    return
  }

  let data = {                                      //creo el objeto Data con todos los campos que seran los que se añadan...>
                                                    //a eventos.teatro(por ejemplo, o conciertos o lo sea)
    nombre: name,                            //podemos poner name que ya declaramos arriba como name=req.body.name                
    aforo: req.body.capacity,
    artista: req.body.artist,
    otros: {
      descripcion: description,  //en los datos.descripcion va directamente el contenido del postman del campo descripcion
    }
  }

  for (let event of eventosCulturales[eventoName]) { //ejeventos.teatro
    if (event.nombre === data.nombre) {//recorre los eventos del objeto teatro(por ejemplo) y lo compara con el objeto teatro a añadir
                                        //comapra los campos y si son iguales da error
      res.status(409).send("El evento YA EXISTE!!!");
      return
    }
  }
  eventosCulturales[eventoName].push(data);
  res.send();
})
app.get('/eventos/:event', (req, res) => {//eventos/teatro (ejemplo)
  let nombreEvento = req.params.event;   
  res.json(eventosCulturales[nombreEvento]);//eventos.teatro json es el objeto
  console.log(eventosCulturales[nombreEvento]);//muestro el evento en la consola
  
})

app.listen(8008);

