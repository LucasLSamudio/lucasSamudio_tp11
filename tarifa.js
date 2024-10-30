let pagoMes = 100000;
let consumoKWH = 320;
let incrementoPorConsumo = 20;
let nuevaTarifa = 0;
console.log("\n------- Ajuste Tarifario de Energía Eléctrica -------\n");

(consumoKWH) > 300 ? nuevaTarifa = ((pagoMes * incrementoPorConsumo) / 100) + pagoMes : nuevaTarifa = pagoMes;

if (consumoKWH>300){
    console.log("Debido a que su hogar tuvo un consumo de "+consumoKWH+"kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $"+nuevaTarifa)
}
else{
    console.log("Debido a que su hogar tuvo un consumo de "+consumoKWH+"kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que NO se ha ajustado el total a pagar, por lo que seguirá siendo de $"+nuevaTarifa);
}