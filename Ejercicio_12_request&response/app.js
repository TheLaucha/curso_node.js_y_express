const http = require("http")

const servidor = http.createServer((req, res) => {
  console.log("===> req (solicitud) ")
  console.log(req.url) // Retorna la URL
  console.log(req.method) // Retorna el verbo http (GET, POST, PUT, DELETE)
  console.log(req.headers) // Retorna la cabecera de la solicitud

  console.log("===> res (respuesta) ")
  console.log(res.statusCode) // Retorna el codigo de estado (200,300,404,etc)
  res.setHeader("content-type", "application/json") // Setea la cabecera
  console.log(res.getHeaders()) // Muestra las cabeceras
  res.end("Hola mundo")
})

const PORT = 3000
servidor.listen(PORT, () => {
  console.log(`El servidor esta esuchando en el puerto ${PORT}...`)
})
