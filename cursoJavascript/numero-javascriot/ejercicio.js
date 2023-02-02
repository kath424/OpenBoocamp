//Una variable que contenga tu altura en centimetros(entero)
let altura = 160;
console.log("Tu altura es: " + altura);

//Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMetros = 1.6;
console.log("Tu altura en metros es: " + alturaMetros);

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 55.7;
console.log("Tu peso es: " + peso);

//Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaMetroArriba = Math.ceil(alturaMetros);
console.log(alturaMetroArriba);
//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoAbajo = Math.floor(peso);
console.log(pesoAbajo);
//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(sonIguales);
