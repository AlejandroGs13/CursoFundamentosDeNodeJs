const asincrona = (callback) =>{
    setTimeout(()=>{
        try{
            let a = 3+z;
            callback(null,a);
        }catch(error){
            callback(error,null)
        }

    },3000);
}

asincrona((error,data)=>{
    if(error) {console.error(new Error(error)); return false;}

    console.log('Todo chidorris');
});
