//Metodos de cadena de texto(parte3)
//Buscar de expresiones regulares
//https://regex.com
let texto_largo =
  "Tito no es un mono cualquiera. A tito no le gusta trepar los albolres y odia comer platano. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles.";

console.log(texto_largo.match(/no/g));

//Existe la palabra dentro del texto?
console.log(texto_largo.includes("terremoto"));

//Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito no es un mono"));

//Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("arboles."));
