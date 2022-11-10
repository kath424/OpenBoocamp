//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let i = 1;
let factorial1 = 1;

while (true) {
  if (i > 10) break;

  factorial1 = factorial1 * i;
  i++;
}
console.log("Este es el factorial del if  " + factorial1);