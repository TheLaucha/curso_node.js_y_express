function ordernarProduto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp.`)
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza con el logo de freeCodeCamp...")
      } else {
        reject("Este producto no esta disponible actualmente.")
      }
    }, 2000)
  })
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log("Procesando respuesta")
    console.log(`La respuesta fue: "${respuesta}"`)
    setTimeout(() => {
      resolve("Gracias por tu compra. Disfruta tu producto de freeCodeCamp")
    }, 4000)
  })
}

// ==== Usando then ====
// ordernarProduto("lapiz")
//   .then((respuesta) => {
//     console.log("Respuesta recibida")
//     console.log(respuesta)
//     return procesarPedido(respuesta)
//   })
//   .then((respuestaProcesada) => {
//     console.log(respuestaProcesada)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// ==== Usando async y await ====
async function realizarPedido(producto) {
  try {
    const respuesta = await ordernarProduto(producto)
    console.log("Respuesta recibida")
    const respuestaProcesada = await procesarPedido(respuesta)
    console.log(respuestaProcesada)
  } catch (error) {
    console.log(error)
  }
}

realizarPedido("lapiz")
