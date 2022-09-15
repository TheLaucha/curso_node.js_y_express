const express = require("express")

const { infoCursos } = require("../datos/cursos.js")
const { programacion } = infoCursos

const routerProgramacion = express.Router()
// Middleware
routerProgramacion.use(express.json()) // Procesa el cuerpo de una solicitud en formato json

// Programacion
routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(programacion))
})

// Parametros URL --> Podemos extraerlos del request para filtrar o buscar mas especificamente
routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje
  const resultados = programacion.filter((curso) => curso.lenguaje === lenguaje)

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}...`)
  }

  // Parametros query --> Mas formas de filtrar, ordenar, etc.
  if (req.query.ordenar === "vistas") {
    return res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)))
  }
  res.send(JSON.stringify(resultados))
})

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  const { lenguaje, nivel } = req.params

  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  )

  if (!resultados.length) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}... de nivel ${nivel}`)
  }

  res.send(JSON.stringify(resultados))
})

routerProgramacion.post("/", (req, res) => {
  let nuevoCurso = req.body
  programacion.push(nuevoCurso)
  res.send(JSON.stringify(programacion))
})

routerProgramacion.put("/:id", (req, res) => {
  let id = req.params.id
  let cursoActualizado = req.body

  const indice = programacion.findIndex((curso) => curso.id == id)

  if (indice >= 0) {
    programacion[indice] = cursoActualizado
  }

  res.send(JSON.stringify(programacion))
})

routerProgramacion.patch("/:id", (req, res) => {
  let id = req.params.id
  const infoActualizada = req.body

  const indice = programacion.findIndex((curso) => curso.id == id)

  if (indice >= 0) {
    const cursoAModificar = programacion[indice]
    Object.assign(cursoAModificar, infoActualizada)
  }

  res.send(JSON.stringify(programacion))
})

routerProgramacion.delete("/:id", (req, res) => {
  let id = req.params.id

  let indice = programacion.findIndex((curso) => curso.id == id)

  if (indice >= 0) {
    programacion.splice(indice, 1)
  }

  res.send(JSON.stringify(programacion))
})

module.exports = { routerProgramacion }
