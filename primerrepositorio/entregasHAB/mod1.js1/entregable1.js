// Ejercicio 1 - JS1

// El objetivo del ejercicio es crear un nuevo array que contenga todos los hashtags del array tweets, 
// pero sin repetir

// Nota: ¡como mucho hay 2 hashtag en cada tweet!

let resultado=[];
let resultadoNoRepeat=[];

tweets = [
    'aprendiendo #javascript en Vigo',
    'empezando el segundo módulo del bootcamp!',
    'hack a boss bootcamp vigo #javascript #codinglive'
]
long_defecto = 10;

for (let tweet of tweets){

firstHashtag= tweet.indexOf('#');
secondHashTag= tweet.indexOf('#', firstHashtag +1); 

if (firstHashtag != -1) {  
    firstHashtag = tweet.slice(firstHashtag, firstHashtag + long_defecto + 1);
    resultado.push(firstHashtag)
}

if (secondHashTag != -1) {
    secondHashTag = tweet.slice(secondHashTag, secondHashTag + long_defecto+ 1);
    resultado.push(secondHashTag)}
}

console.log("Arrays de Hashtag con repeticones:",resultado)

for(i=0;i<resultado.length;i++){    
    found = false;
    for(e=i+1;e<resultado.length;e++){        
        if(resultado[i]===resultado[e]){
            found = true;
        }
    }
    if (found == false) {
        resultadoNoRepeat.push(resultado[i]);
     }
 
}
console.log("Arrays de Hastag sin ningun Hashtag repetido:",resultadoNoRepeat)

