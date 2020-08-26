process.on('beforeExit',()=>{
    console.log('Ale, el proceso va a terminar');
});

process.on('exit',()=>{
    console.log('Ale, el proceso acabo');
});

process.on('uncaughtException',(error, origin)=>{
    console.error(`Error ${error} en ${origin}`)
})


functionQWEwqe();