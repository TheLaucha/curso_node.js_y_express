function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`)
}

function sumar(a, b) {
  console.log(a + b)
}

// setTimeOut() ==> Ejecuta codigo luego de un tiempo especifico
setTimeout(mostrarTema, 1000, "Node.js") // Return Node.js
setTimeout(sumar, 2000, 5, 4) // Return 9

// setImmediate() ==> Ejecuta codigo asincrono en la proxima iteracion del ciclo de eventos (lo mas pronto posible), despues del codigo sincronico.
console.log("Antes de setImmediate")
setImmediate(sumar, 5, 10) // Return 15 despues del codigo sincronico.
console.log("Despues de setImmediate")

// setInterval() ==> Ejecuta codigo un numero infinito de veces con un retraso especifico.
setInterval(mostrarTema, 1500, "Javascript") //Return javascript cada 1500ms
