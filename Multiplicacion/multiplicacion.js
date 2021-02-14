const fs = require('fs'); // aqui importamos el paquete de manipulacion de archivos.

let crearArchivo = (base) =>{
    return new Promise((resolve, reject) =>{
       let tabla = '';

       if (!Number(base)){
        reject('Favor de insertar un numero valido');
        return;

       }



       for(let i = 1; i <= 10; i++){
        tabla += `${base} X ${i} = ${base * i} \n`; 
       
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) =>{
            if(err) { 
                reject(err)
            }else{
            resolve(`tabla-${base}.txt`);
            }
        });
     });
};

module.exports = {
     crearArchivo
};