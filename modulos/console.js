console.log(`Algo normal`);
console.info(`Algo info`);
console.error(`Algo error`);
console.warn(`Algo warn`);
// console.error(new Error(`Algo error`));

var table = [
    {
        a: 1,
        b: 'Z'
    },{
        a : 2,
        b : '2'
    }
]
console.table(table);


console.group(`Conversacion`)
console.log(`Hola`);
console.log(`BLABLABLABL`);
console.log(`Adios`)
console.groupEnd(`Conversacion`)
console.log(`Esto es fuera`)

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');


