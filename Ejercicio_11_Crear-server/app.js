// ==== Servidor HTTP ====
const http = require("http")

const servidor = http.createServer((req, res) => {
  console.log("Solicitud nueva")
  res.end("Hola Mundo!")
})

const PORT = 3000

servidor.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto ${PORT}`)
})
