function saludar(elNombre) {
  const nombre = elNombre()
  const saludar = 'hola '
  const saludoCompleto = saludar + nombre
  return `Hola ${nombre}`;
}

function nombre() {
  let nombre = 'Luna'
  return nombre
}

const saludarAmigo = saludar(nombre);
console.log(saludarAmigo);