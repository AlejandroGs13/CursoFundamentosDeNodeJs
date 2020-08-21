const hola = async (nombre) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Hola ${nombre}!!`);
            resolve(nombre);
        },1000)
    });
}

const hablar = async (nombre) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`bla bla bla bla.......`);
            resolve(nombre)
        },1000)
    });
}

const adios = async (nombre) =>{
    return new Promise((resolve,reject)=>{
        
    setTimeout(()=>{
        console.log(`Adios ${nombre}`)
        resolve(nombre);
        },1000)
    });
}

const main = async()=>{
    let nombre = await hola('David');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log(`termina el proceso.....`);
}

console.log(`empezamos el proceso.....`);
main();

