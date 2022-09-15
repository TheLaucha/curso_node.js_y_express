const estatusPedido = () => {
  const estatus = Math.random() < 0.8
  console.log(estatus)
  return estatus
}

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Se realizo un pedido exitoso")
    } else {
      reject("Hubo un error en el pedido")
    }
  }, 3000)
})

miPedidoDePizza
  .then((message) => {
    console.log(message)
  })
  .catch((err) => {
    console.log(err)
  })
