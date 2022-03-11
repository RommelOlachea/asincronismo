const fetchData =  require('../utils/fetchData');     //importamos la funcion fetchData
const API = 'https://rickandmortyapi.com/api/character/';  //url de la api



fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`); //EL RETURNO NOS PERMITE ENLAZAR CON EL SIGUIENTE THEN
    })
    .then (data => {
        console.log(data.name);
        return fetchData(data.origin.url); //EL RETURNO NOS PERMITE ENLAZAR CON EL SIGUIENTE THEN
    })
    .then (data=> {
        console.log(data.dimension);
    })
    .catch(err=> console.error(err));




