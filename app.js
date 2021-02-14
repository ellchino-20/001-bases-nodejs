const multplicar = require('./Multiplicacion/multiplicacion');


multplicar

.crearArchivo(3)
.then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))
.catch(error => console.log(`Ocurrio un error ${archivo} `));