let infoCurso = {
  titulo: "Aprende Node.js",
  Lenguajes: ["Javascript", "Node.js"],
  esPublico: true,
}

// Formato json a cadena de caracteres
let infoCursoJSON = JSON.stringify(infoCurso)
console.log(infoCursoJSON)
console.log(typeof infoCursoJSON)

// Cadena de caracteres a objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON)
console.log(infoCursoObjeto)
console.log(typeof infoCursoObjeto)
