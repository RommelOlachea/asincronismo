//PROMESAS

const somethingWillHappens = () => {
    return new Promise((resolve,reject)=>{
        if (true){
            resolve('yeah!!! resolvio');
        } else {            
            reject('damn!!! rechazada');
        }        
    });
}

const somethingWillHappens2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('Yeah!!! resolvio 2')
            }, 2000);
        } else {
            const error = new Error('Whoops paso un error!!');
            reject(error);
        }        
    });
}
somethingWillHappens()
    .then (response => console.log(response))
    .catch(err => console.log(err));

somethingWillHappens2()
    .then(response=>console.log(response))
    .catch(error => console.error(error));

//correr varias promesas encadenadas.
Promise.all([somethingWillHappens(),somethingWillHappens2()])
        .then(response => {
            console.log('Arreglo de resultados', response)
        })
        .catch(err => {
            console.error(err);
        });
        