//variable que es una instacia de xmlhttprequest, para esto debimos
//instalar la dependencia xmlhttprequest con npm install xmlhttprequest --save
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';


//funcion que permite traer la informacion desde la API
function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api,true); //GET, es una peticion http. nota el tercer parametro, indica si se manejara de manera asincrona, por default es true
    xhttp.onreadystatechange = function(event){ //existen diferentes estados, desde el 0 al 4, se sondean los estados
        if(xhttp.readyState===4){ //el 4 es que se completo la operacion, nota, no sabemos si lo hizo correctamente todavia
            if(xhttp.status === 200){ //el estado 200 es que encontro algo, hay diferentes estados, como el 500 que no encontro nada
                callback(null, JSON.parse(xhttp.responseText)); //el primero valor de este callback por convension es el error en caso de ocurrir, pero en este ejemplo no hay error

            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }            
        }
    }
    xhttp.send();
}
              //aqui esta definida, la funcion de callback, en el llamado de fetchData
fetchData(API,function(error1,data1){
    console.log(API);
    if(error1) return console.log(error1); //validamos que la funcion no nos haya dado un error.       
    fetchData(API + data1.results[0].id, function(error2, data2){
        console.log(API + data1.results[0].id);
        if(error2) return console.log(error2);
   
        
        fetchData(data2.origin.url, function(error3,data3){   
            console.log(data2.origin.url);
            if(error3) return console.log(error3);

            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});

