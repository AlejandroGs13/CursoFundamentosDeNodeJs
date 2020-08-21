

const hola = (nombre,callback) =>{
    setTimeout(()=>{
        console.log(`Hola ${nombre}!!`);
        callback();
    },1500)
}

const adios = (nombre,callback) =>{
    setTimeout(()=>{
        console.log(`Adios ${nombre}`)
        callback();
    },100)
}

console.log('Iniciando proceso');
hola('David',()=>{
    adios('David', ()=>{console.log(`Terminando proceso`)})
});
