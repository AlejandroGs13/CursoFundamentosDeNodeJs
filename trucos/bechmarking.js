//truco para saber el tiempo de las funciones
let suma = 0;

console.time('bucle');
for(let i= 0;i<1000000000;i++){
    suma+=1;
}
console.timeEnd('bucle');

const asincrona = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('termina mi funcion asincrona');
            resolve();
        },1000);
    });
}

console.time('async');
asincrona().then(()=>{console.timeEnd('async')});


let suma2 = 0;

console.time('bucle2');
for(let j= 0;j<1000000000;j++){
    suma2+=1;
}
console.timeEnd('bucle2');