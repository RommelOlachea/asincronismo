//variable que es una instacia de xmlhttprequest, para esto debimos
//instalar la dependencia xmlhttprequest con npm install xmlhttprequest --save
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//funcion que permite traer la informacion desde la API
const fetchData = (url_api)=> {
    // console.log(url_api);
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET',url_api,true);//GET, es una peticion http. nota el tercer parametro, indica si se manejara de manera asincrona, por default es true
        xhttp.onreadystatechange = (() => {    //existen diferentes estados, desde el 0 al 4, se sondean los estados
            if(xhttp.readyState===4) {         //el 4 es que se completo la operacion, nota, no sabemos si lo hizo correctamente todavia
                (xhttp.status===200)          //el estado 200 es que encontro algo, hay diferentes estados, como el 500 que no encontro nada
                 ? resolve(JSON.parse(xhttp.responseText))
                 : reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
    });
}

module.exports = fetchData;    //se utiliza el export, porque node todavia lo utiliza common.js 



