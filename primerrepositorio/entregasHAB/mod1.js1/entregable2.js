// Ejercicio 2 - JS1

// Escribe el código necesario para decidir en qué fotografías sale Pablo. 
// Como resultado se debe obtener un array de strings con los nombres de las fotografías.

let fotosP=[];

const photos = [{
    name: 'Cumpleaños de 13',
    people: ['Maria', 'Pablo']
},
{
    name: 'Fiesta en la playa',
    people: ['Pablo', 'Marcos']
},
{
    name: 'Graduación',
    people: ['Maria', 'Lorenzo']
},
];

const fotosPablo = photos.filter((photo) => {
for(let i = 0 ; i <photos.length; i++){
    if(photo.people[i] === 'Pablo'){
        fotosP.push(photo.name)
    }
}
})

console.log("los nombre de las fotografias donde sale Pablo son:",fotosP);











