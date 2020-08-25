const {exec, spawn} = require('child_process');
const { stdout } = require('process');


// exec('node modulos/console.js',(err,stdout,sterr)=>{
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });



let processo = spawn('ls',['-la']);

console.log(processo.pid);
console.log(processo.connected);

processo.stdout.on('data',(data)=>{console.log(data.toString())})

processo.on('exit',()=>{console.log('el proceso termino')})