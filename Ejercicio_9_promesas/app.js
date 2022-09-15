const promesaCumplida = false

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa cumplida!")
    } else {
      reject("Promesa rechazada...")
    }
  }, 3000)
})

// Una forma
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)

const manejarPromesaCumplida = (valor) => {
  console.log(valor)
}

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo)
}

// Otra forma
miPromesa
  .then((valor) => {
    console.log(valor)
  })
  .catch((error) => {
    console.log(error)
  })
