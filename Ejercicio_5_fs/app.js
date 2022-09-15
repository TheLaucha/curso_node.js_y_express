// Modulo fs (File System)
// Todos los metodos de este modulo son asincronos.
// Pero podes agregar sincronismo utilizando sync en su nombre.
// fs.rename() || fs.renameSync()

const fs = require("fs")

// Leer el contenido de un archivo
fs.readFile("index.html", "utf-8", (err, contenido) => {
  if (err) {
    console.log(err)
  } else {
    console.log(contenido)
  }
})

// Cambiar el nombre de un archivo
fs.rename("index.html", "main2.html", (err) => {
  if (err) {
    throw err
  }
  console.log("El archivo se cambio correctamente")
})

// Agregar contenido al final de un archivo.
fs.appendFile("index.html", "<p>Esto es nuevo</p>", (err) => {
  if (err) {
    throw err
  }
  console.log("Archivo actualizado")
})

// Reemplazar todo el contenido de un archivo
fs.writeFile("index.html", "<p>Cotenido nuevo</p>", (err) => {
  if (err) {
    throw err
  }
  console.log("Contenido actualizado")
})

// Eliminar un archivo
fs.unlink("main.html", (err) => {
  if (err) {
    throw err
  }
  console.log("Archivo eliminado")
})
