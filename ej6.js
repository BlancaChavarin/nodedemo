/*const fs=require ('fs');

fs.readFile('./archivo1.txt', (error,datos) => {
    if(error)
        console.log(error);
    else
        console.log(datos.toString());
});
console.log('ultima linea del programa');*/

//Modificación eliminando la función anónima e implementando una función con un nombre explícito:

const fs=require('fs');

function leer(error,datos){
    if(error)
        console.log(error);
    else
        console.log(datos.toString());
}

fs.readFile('./archivo1.txt',leer);

console.log('ultima linea del programa');