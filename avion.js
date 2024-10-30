var prompt = require('prompt-sync')();

function puedeAterrizar(a, v){
    if ((v < 268 || v > 278) || (a < 150 || a > 300))
        return false;
    return true;
}

let altura = +prompt("Ingrese la altura a la que se encuentra el avión: ");
let velocidad = +prompt("Ingrese la velocidad a la que se encuentra el avión: ");

if(puedeAterrizar(altura, velocidad)){
    console.log("El avión está habilitado a aterrizar.")
}
else{
    console.log("El avión NO está habilitado a aterrizar.")
}