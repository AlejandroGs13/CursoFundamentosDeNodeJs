const hola = (nombre,callback) =>{
    setTimeout(()=>{
        console.log(`Hola ${nombre}!!`);
        callback(nombre);
    },1000)
}

const hablar = (callbackHablar) =>{
    setTimeout(()=>{
        console.log(`bla bla bla bla.......`);
        callbackHablar();
    },1000)
}

const adios = (nombre,callback) =>{
    setTimeout(()=>{
        console.log(`Adios ${nombre}`)
        callback();
    },1000)
}
const conversacion = (nombre, veces, callback) =>{
    if(veces >0){
        hablar(()=>{
            conversacion(nombre,--veces,callback)
        });
    }else{
        adios(nombre,callback);
    }
}

console.log(`Iniciando proceso`);
hola('David',(nombre)=>{
    conversacion(nombre,3,()=>{
        console.log(`Proceso terminado`);
    });
});
// hola(`David`,()=>{
//     hablar(()=>{
//         hablar(()=>{
//             hablar(()=>{
//                 hablar(()=>{
//                     hablar(()=>{
//                         adios(`David`, ()=>{console.log(`Terminando proceso`)});
//                     });
//                 });
//             });
//         });
//     });
// });
