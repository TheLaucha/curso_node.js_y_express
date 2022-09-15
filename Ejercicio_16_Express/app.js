// Express
// Framework web mas popular de node
// Nos ayuda a desarrollar aplicaciones de node.js

// CRUD
// Operaciones basicas que se pueden realizar con la informacion almacenada en una base de datos
// Create Read Update Delete

// API (Application Programming Interface)
// Es un tipo de interfaz de software que permite que dos o mas programas se comuniquen entre si
// Son usadas por el programador que usa la API para implementar su programa.
// Es la conexion entre el cliente y el servidor
// En un restaurant la API seria el MENU, el cliente no sabe nada de lo que ocurre en la cocina, y la cocina no sabe nada sobre el cliente, solo se comunican a traves del menu.

// REST
// Estilo de arquitectura de software para sistemas hipermedia

// IMPORTAR
const express = require("express")
const app = express()
const { infoCursos } = require("./datos/cursos.js")
const { routerMatematicas } = require("./routers/matematicas.js")
const { routerProgramacion } = require("./routers/programacion.js")

// ========== ROUTERS ==========
app.use("/api/cursos/programacion", routerProgramacion)

app.use("/api/cursos/matematicas", routerMatematicas)

// ========== ROUTING ==========
app.get("/", (req, res) => {
  res.send("Mi primer servidor con Express. Cursos.")
})

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

// Inicio de servidor

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto ${PORT}...`)
})
