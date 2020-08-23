const fs = require('fs');

const leer = (ruta,cb) =>{
    fs.readFile(ruta, (error, data)=>{
        cb(data.toString());
    });
}
const escribir = (ruta,contenido,cb) =>{
    fs.writeFile(ruta,contenido,(error)=>{
        if(error){
            console.error(`No se pudro escribir el archivo ${error}`);
        }else{
            console.error(`Archivo escrito`);
        }
    });
}

const borrar = (ruta,cb) =>{
    fs.unlink(ruta,cb);
}
// leer(`${__dirname}/archivo.txt`,console.log);
// escribir(`${__dirname}/archivo.txt1`,`Soy un archivo nuevo`,console.log);
borrar(`${__dirname}/archivo.txt1`,console.log);