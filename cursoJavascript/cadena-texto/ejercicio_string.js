//Ejercicio
//Cadena de texto con tu nombre
let nombre = "   Katerine";
console.log(nombre);

let apellido = "Acosta";
console.log(apellido);

//Cadena de texto que se llame "estudiante"
let estudiante = nombre + " " + apellido;
console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus"
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//Una cadena de texto que se llame "estudianteMinus
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//Una variable que contenga el número de letras de la cadena "estudiante"
let numeroLetras = estudiante.length;
console.log(numeroLetras);

//Una variable que contenga la primera letra del Nombre
let primeraLetraNombre = nombre.charAt();
console.log(primeraLetraNombre);

//Otra variable que contenga la última letra del Apellido
let ultimaLetraApellido = apellido.charAt(apellido.length - 1);
console.log(ultimaLetraApellido);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let eliminaEspacio = estudiante.trim().length;
console.log(eliminaEspacio);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let vrificaNombre = estudiante;
console.log(estudiante.includes("Katerine"));
