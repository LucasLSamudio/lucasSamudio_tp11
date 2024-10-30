var prompt = require('prompt-sync')();

console.log("---------- Bienvenido a mi primera calculadora -----------------")

console.log("La calculadora tiene las siguientes funciones:\nSUMAR = 1\nRESTAR = 2\nMULTIPLICAR = 3\nDIVIDIR = 4\n");
let opElegida = +prompt("Seleccione la operación que desea con el número especificado: ");

// while(opElegida < 1 || opElegida > 4){
//     opElegida = +prompt("Número inválido. Por favor, elija un número entre el 1 y el 4: ");
// }

const n1 = +prompt("Ingrese primer número: ")
const n2 = +prompt("Ingrese segundo número: ")

let resultado;


switch(opElegida){
    case 1:
        resultado = n1 + n2;
        console.log("El resultado de la suma entre "+n1+" y "+n2+" es: "+resultado)
        break;
    case 2:
        resultado = n1 - n2;
        console.log("El resultado de la resta entre "+n1+" y "+n2+" es: "+resultado)
        break;
    case 3:
        resultado = n1 * n2;
        console.log("El resultado de la multiplicación entre "+n1+" y "+n2+" es: "+resultado)
        break;
    case 4:
        resultado = n1 / n2;
        console.log("El resultado de la división entre "+n1+" y "+n2+" es: "+resultado)
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar- multiplicar- dividir.");
        break;
}