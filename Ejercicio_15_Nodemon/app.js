// NODEMON
// Herramienta que reinicia la aplicacion de node cuando detecta algun combio.
const http = require("http")

const servidor = http.createServer((req, res) => {
  res.end("Hola mundo estoy re loco")
})

const PORT = 3000

servidor.listen(3000, () => {
  console.log(`Servidor escuchando en puerto ${PORT}...`)
})
