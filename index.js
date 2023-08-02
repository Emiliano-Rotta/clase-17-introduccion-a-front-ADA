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


