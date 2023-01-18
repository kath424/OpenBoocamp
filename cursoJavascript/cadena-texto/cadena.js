//Metodos mas utilizados con cadenas de caracteres
//Como obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);

//Obtener partes de cadenas de carcateres
//slice() substring() substr()
let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

//Reemplazar partes del contenido de una cadena de texto
let cadena = "Hola mi nobre es Gorka";
console.log(cadena);

//Al utilizar string solo reemplaza la primera instancia
console.log(cadena.replace("Gorka", "Miguel"));

let texto_largo =
  "Tito no es un mono cualquiera. A tito nolles guasta trepar por los arboles y odia comer platano. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de lo arboles";

//Al utilizar string solo reemplaza la primera instancia
console.log(texto_largo.replace("los", "cinco"));

//Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, "cinco"));
