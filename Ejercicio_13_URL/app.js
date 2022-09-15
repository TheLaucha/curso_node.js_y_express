// URL
// Estructura de la URL
// https://wwww.freecodecamp.org/espanol/

// https  ==> Protocolo
// www    ==> Subdominio ==> Permite a los sitios webs organizar y separar la informacion para distintos propositos.
// freecodecamp ==> dominio ==> Nombre de la pagina, referencia unica a un sitio web en internet
// .org   ==>  dominio de nivel superior
// /espanol ==> Camino/Path ==>
// parametros query ==> ?q=cursos+de+node ==> son parametros usados para obtener contenido dinamico

// MODULO URL
const miURL = new URL("https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1")

console.log(miURL.hostname) // www.ejemplo.org
console.log(miURL.pathname) // /cursos/programacion
console.log(miURL.searchParams) //  { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(miURL.searchParams.get("ordenar"))
console.log(miURL.searchParams.get("nivel"))
