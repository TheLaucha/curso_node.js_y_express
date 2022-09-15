const express = require("express")

const { infoCursos } = require("../datos/cursos.js")
const { matematicas } = infoCursos

const routerMatematicas = express.Router()

// Matematicas
routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(matematicas))
})

routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema
  const resultados = matematicas.filter((curso) => curso.tema === tema)

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}...`)
  }

  res.send(JSON.stringify(resultados))
})

module.exports = { routerMatematicas }
