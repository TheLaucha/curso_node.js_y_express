// ROUTING
// Manejar las solicitudes del cliente en base a ciertos criterios
// GET, POST, PUT, DELETE, OTROS

const http = require("http")
const cursos = require("./cursos")

const servidor = http.createServer((req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      return manejarSolicitudGET(req, res)
    case "POST":
      return manejarSolicitudPOST(req, res)
    default:
      res.statusCode = 501
      res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`)
  }
})

function manejarSolicitudGET(req, res) {
  const path = req.url

  console.log(res.statusCode)

  if (path === "/") {
    res.writeHead(200, { "Content-Type": "application/json" }) // Cambiamos el content-type --> Solo un ejemplo
    res.statusCode = 200
    return res.end("Bienvenidos a mi primer servidor y API creados con Node.js")
  } else if (path === "/cursos") {
    res.statusCode = 200
    return res.end(JSON.stringify(cursos.infoCursos))
  } else if (path === "/cursos/programacion") {
    res.statusCode = 200
    return res.end(JSON.stringify(cursos.infoCursos.programacion))
  } else if (path === "/cursos/matematicas") {
    res.statusCode = 200
    return res.end(JSON.stringify(cursos.infoCursos.matematicas))
  }

  res.statusCode = 404
  return res.end("El recurso solicitado no existe")
}

function manejarSolicitudPOST(req, res) {
  const path = req.url
  if (path === "/cursos/programacion") {
    let cuerpo = ""

    req.on("data", (contenido) => {
      cuerpo += contenido.toString()
    })

    req.on("end", () => {
      console.log(cuerpo)
      console.log(typeof cuerpo)
      cuerpo = JSON.parse(cuerpo)
      console.log(typeof cuerpo)
      console.log(cuerpo.titulo)
      res.end("El servidor recibio una solicitud POST para /cursos/programacion")
    })

    // return res.end("El servidor recibio una solicitud POST para /cursos/programacion")
  }
}

const PORT = 3000
servidor.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto ${PORT}...`)
})
