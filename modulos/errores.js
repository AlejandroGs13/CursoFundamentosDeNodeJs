const otraFunction = () =>{
    seRompe();
}

const seRompe = () =>{
    return 3 + z;    
}

const seRompoAscincrona = (cb) =>{
    setTimeout(()=>{
        try{
        return 3 + z;    
        }catch(err){
            console.error(`Error en la funcion asincrona`);
            cb(err);
        }
    },1000);
}
try{
    seRompoAscincrona(()=>{
        console.log(`hay error`);
    });
}catch(err){
    console.error(`Vaya algo se a roto: ${err}`);
}



console.log(`Esto va al final`)