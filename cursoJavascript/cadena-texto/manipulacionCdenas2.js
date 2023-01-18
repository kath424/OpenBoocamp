//Metodos de cadenas de texto (parte2)
let input = "ESCORpio";
let db = "escorpio";

//toLowerCase() - toUpperCase()
console.log(input.toLocaleLowerCase());
console.log(input.toUpperCase());
console.log(input.toLocaleLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

//Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena";
let str_2 = "Y yo soy la segunda cadena.";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

//Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final.   ";
console.log(str_3.length);
//Trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

//Obtener el caracter que hay en cierta poscion
let str_4 = "Hola soy el string numero 4"; //["H", "o", "l", "a"....]

console.log(str_4.charAt(5));
console.log(str_4[5]);

//Obtener la posicion de una palabra denro de una cadena de caracteres
let str_5 =
  "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apelido Villas";
console.log(str_5.indexOf("Gorka"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Gorka"));
