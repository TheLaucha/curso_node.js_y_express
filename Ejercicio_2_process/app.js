// node app.js 5 6
// 0    1      2 3
// Una forma de leer los datos ingresados.

console.log(process.argv[2])
console.log(process.argv[3])

for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i])
}

console.log(process.memoryUsage())
