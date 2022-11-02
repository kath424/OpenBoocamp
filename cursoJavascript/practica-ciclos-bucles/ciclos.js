let numeroIf = 6;

if (numeroIf > 0) {
  console.log("El numero es positivo");
}
else if (numeroIf < 0) {
  console.log('el numero es negativo');
}
else {
  console.log('El numero es 0');
}

//while 
let numeroWhile = 0;

while (numeroWhile < 3) {
  numeroWhile++;
  console.log("Aqui pasa la ejecucion " + numeroWhile);
}

//Do while
let numeroDoWhile = 0;

do {
  numeroDoWhile++
} while (false);
console.log("Ejecucion Do While " + numeroDoWhile);

//For

for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log("Ejecucion for " + numeroFor);
}

//Switch
let estacion = 'otonio';

switch (estacion) {
  case 'primavera':
    console.log('Es primavera');
    break;
  case 'iniverno':
    console.log('Es invierno');
    break;
  case 'otonio':
    console.log('Es otonio');
    break;
  case 'verano':
    console.log('Es verano');
    break;
  default:
    console.log('No es una estacion');
}