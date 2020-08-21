console.log(global);//global es donde estan todos los oobjetos globales guardados
console.log(`asasasas`)
    
let i = 3;
let intervalo = setInterval(()=>{
    console.log(`ESSSS`);
    --i;
    if(i === 0){
        clearInterval(intervalo)
    }
},1000);



setImmediate(()=>{console.log(`Holas jeje`)});


console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVAriable = 'el valor';

console.log(miVAriable);