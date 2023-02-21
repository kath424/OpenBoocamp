// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Tomate", "Cebolla", "Aguacate", "Agua", "Huevos"];
//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);
//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);
//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [
  {
    titulo: "Diario de una pasion",
    director: "Nick Cassavetes",
    fecha: new Date(2007, 1, 14),
  },
  {
    titulo: "Chappie",
    director: "Neill Blomkamp",
    fecha: new Date(2015, 7, 9),
  },
  {
    titulo: "District 9",
    director: "Neill Blomkamp",
    fecha: new Date(2010, 4, 10),
  },
];
console.log(listaPeliculas);
//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const nuevalista = listaPeliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);
console.log(nuevalista);
//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const nuevaListaDirectores = listaPeliculas.map(
  (pelicula) => pelicula.director
);
console.log(nuevaListaDirectores);
//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const nuevaListaTitulos = listaPeliculas.map((pelicula) => pelicula.titulo);
console.log(nuevaListaTitulos);
//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaDirectoresTitulos = nuevaListaDirectores.concat(nuevaListaTitulos);
console.log(listaDirectoresTitulos);
//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaDirectoresTitulos2 = [...nuevaListaDirectores, ...nuevaListaTitulos];
console.log(listaDirectoresTitulos2);
