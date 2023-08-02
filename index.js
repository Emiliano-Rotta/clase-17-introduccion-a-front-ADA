//Hoy vemos funciones

// alert("Hola Monica!")
// alert("Hola Marisel!")
// alert("Hola Eliana!")
// alert("Hola Natasha!")
// alert("Hola Patricia!")
// alert("Hola Karina!")
// alert("Hola Brigida!")
// alert("Hola Marcela!")


// function saludo(nombre){
//     return alert("Hola " + nombre + "! " + "¿te acordaste de completar tu perfil?")
// }

// saludo("Monica")
// saludo("Marisel")
// saludo("Eliana")

// function despedir(){
//     return console.log("Nos vemos")
// }

// despedir()
// despedir()
// despedir()
// despedir()
// despedir()
// despedir()
// despedir()




// ----
//guardamos todo el body en la variable cuerpo
// var cuerpo = document.querySelector("body")


// //        |->nombre de la funcion   |->parametro
// function colorDeFondo             (color){
//         cuerpo.style.backgroundColor = color
//     //    |-> nombre de la var del body, le cambio el estilo por lo que me pasan por parametro  
// }

// //   |->invoco la funcion
// colorDeFondo("#6d8456")
//             //  |-> Le paso el parametro



// var titulo = document.querySelector("h1")
// var cuerpo = document.querySelector("body")

// function claroOscuro() {
//     cuerpo.style.backgroundColor = "black"
//     cuerpo.style.color = "white"
// }
// claroOscuro()


//una funcion puede recibir muchos parametros.
// var titulo = document.querySelector("h1")
// var cuerpo = document.querySelector("body")

// function saludo(parametroUno, parametroDos ) {
    
//     titulo.innerHTML = "Hola bienvienido " + parametroUno + ", tu edad es " + parametroDos
// }

// saludo("Emiliano", 30)

// var titulo = document.querySelector("h1")
// var cuerpo = document.querySelector("body")


// function saludo(nombre, colorPreferido ) {
    
//     titulo.innerHTML = "Hola bienvienido/a " + nombre
//     cuerpo.style.backgroundColor = colorPreferido
// }

// var nombrePrompt = prompt("Escriba su nombre")
// var colorPrompt = prompt("Escriba su color favorito")

// saludo(nombrePrompt, colorPrompt)



//varios parametros
// function variosParametros (par1, par2, par3) {
//     return console.log(par1 +  par3)
// }                 
// variosParametros(5, 2)


//Darle un valor por defecto                      
// function variosParametros (par1 = 10, par2 = 0, par3 = 7) {
//     return console.log(par1 + par2 + par3)
// }//                     5   +  2   +  7(el 7 es por defecto)

// variosParametros(5, 2)


// function suma(a, b, c){
//         //    3  2  5
//    return console.log(a + b + c)
// }//                   3 + 2 + 5

// suma (3, 2, 5)


// function suma(a, b, c){
//     //        3  2  undefinded (no esta definido)
// return console.log(a + b + c)
// }//                3 + 2 + undefinded

// suma (3, 2)

// function suma(a = 0, b = 0, c = 0){
//     //        3      2      5
// return console.log(a + b + c)
// }//                3 + 2 + 5

// suma (3, 2, 5)

// function suma(a = 0, b = 0, c = 0){
//     //        3      2      0
// return console.log(a + b + c)
// }//                3 + 2 + 0

// suma (3, 2)


//Tomense un recreo
//Hacer los ejercicios (lo mas que puedan) menos el par o impar y nos volvemos a ver 12.15


// function sumaUno (a, b){
//     alert(a + b)
// }

// sumaUno(2, 5)

// function sumaDos (a, b){
//     return a + b
// }

// sumaDos(2, 5)




//// RESPUESTA A LOS EJERCICIOS DE CLASE:

//1) - 4) Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

// function sumar (a, b) {
//     alert(a + b)
// }
// sumar(2, 3) // 5
// sumar(1.2, 3.4) // 4.6
// sumar(3, -5) // -2

// function restar (a, b){
//     alert(a - b)
// }

// restar(3, 2) // 1
// restar(10, 5.5) // 4.5
// restar(3, 5) // -2

// function multiplicar (a, b){
//     alert(a * b)
// }
// multiplicar(2, 3) // 6
// multiplicar(4, 0.5) // 2

// function dividir (a, b){
//     alert (a / b)
// }
// dividir(12, 3) // 4
// dividir(8, 4) // 2
// dividir(30, 6) // 5

// es par y es impar no lo vamos a ver todavia.



// calcularAreaTriangulo(base, altura)

// function calcularAreaTriangulo(base, altura){
//     alert(base * altura / 2)
// }

// calcularAreaTriangulo(3, 4) // 6
// calcularAreaTriangulo(5, 16) // 40
// calcularAreaTriangulo(5, 6) // 40 --> esta mal es 15


//base por altura divido 2

// function calcularAreaTriangulo (base, altura){
//     alert(base*altura/2)
// }

// calcularAreaTriangulo(3, 4) // 6

//gritar(str)

// function gritar(str){
//     alert("¡" + str + "!")
// }

// gritar('hola') // ¡hola!
// gritar('aaaaaa') // ¡aaaaaa!

//obtenerNombreCompleto(nombre, apellido)

// function obtenerNombreCompleto(nombre, apellido){
//     alert(nombre + " " + apellido)
// }
// obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace'

//saludar(nombre)
// function saludar(nombre){
//     alert("hola " + nombre + ", un gusto conocerte")
// }

// saludar('Ada') // 'Hola Ada, un gusto conocerte'

//saludarGritando(nombre, apellido)
// function saludarGritando(nombre, apellido){
//     alert("¡hola " + nombre + " " + apellido +", un gusto conocerte!")
// }

// saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!


