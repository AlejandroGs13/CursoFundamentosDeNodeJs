const http = require('http');


const router = (req,res)=>{

    console.log('nueva peticion');
    console.log(req.url);

    switch(req.url){
        case '/Hola':
            res.write('Hola quetal')
            res.end()
            break;

        default:
            res.write('Errpr 404 no se lo que quieres')
            res.end()
            break;
    }



}
http.createServer(router).listen(3000);
console.log(`Escuchando en el puerto 3000`)