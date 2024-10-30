var prompt = require('prompt-sync')();

const palabraIngresada = prompt("Ingrese la palabra 'perro', 'gato', 'puerta', 'ventana' o 'mesa' para traducirla al inglés: ");
let traduccion = "";
let error = "";
switch(palabraIngresada.toLowerCase()){
    case "perro":
        traduccion = "Dog";
        break;
    case "gato":
        traduccion = "Cat";
        break;
    case "puerta":
        traduccion = "Door";
        break;
    case "ventana":
        traduccion = "Window";
        break;
    case "mesa":
        traduccion = "Table";
        break;
    default:
        error = "\nLa palabra ingresada es incorrecta."
}
if(error == ""){
    console.log("\nLa palabra que usted ingresó fue '"+palabraIngresada.toLowerCase()+"'. \nLa palabra traducida es: '"+traduccion+"'.");
}
else{
    console.log(error);
}