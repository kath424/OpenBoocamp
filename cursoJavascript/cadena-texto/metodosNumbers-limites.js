//Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

//Suma(+)
console.log(a + b);
//Resta(-)
console.log(a - b);
//Multiplicacion(*)
console.log(a * b);
//Division(/)
console.log(a / b);
//Representacion de los numeros en cadena de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

//Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);

//.toFixed(x) - limitar el numero de decimales al valor x
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let e = 1839.123456789;
let f = 2213556153218;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

//.toPrecision(x) - Limitar el numero de cifras significatuvamente
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(3));
