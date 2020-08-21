const hola = (nombre) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Hola ${nombre}!!`);
            resolve(nombre);
        },1000)
    });
}

const hablar = (nombre) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`bla bla bla bla.......`);
            resolve(nombre)
        },1000)
    });
}

const adios = (nombre) =>{
    return new Promise((resolve,reject)=>{
        
    setTimeout(()=>{
        console.log(`Adios ${nombre}`)
        resolve(nombre);
        },1000)
    });
}

console.log(`Iniciando proceso...`)
hola(`David`)
    .then(hablar)
    .then(adios)
    .then(adios)
    // .then((nombre)=>{
    //     return adios(nombre);
    //     })
    .then((nombre)=>{
        console.log('Terminado el proceso')
        });