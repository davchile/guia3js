//-------------Clase----------------//
// **que se muestra en la consola?
// function MultiplesParametros(par1, par2, par3)
// {
// console.log(par3) //muestra el parámetro definido al invocar la funcion, en este caso el "2"
// }
// MultiplesParametros(3, 2, 1)
// function MultiplesParametros(par1, par2 = 2, par3 = 2)
// {
// console.log(par2 + par3) //suma los valores de los parametros 2 y 3
// }
// MultiplesParametros(3) //asigna el "3" al parametro 1 

//**Función con múltiples parametros
// function agregarBorde(id, color, width) { //declaro 3 parametros en memoria
//     const element = document.querySelector(id) //registro el cambio en id
//     element.style.border = width + 'px solid ' + color //utilizo un espacio para concatenar variables con este método
// }
// // *border: 1px solid #000 *// sintaxis de css
// agregarBorde("#imagen-1", "red", 5) //llamo a la funcion e ingreso el valor de los 3 parámetros
// agregarBorde("#imagen-2", "blue", 3)
// agregarBorde("#imagen-3", "green", 5)

// Función con valores por defecto
// function agregarBorde(id, color = "black", width = 5) { //declaro 3 parametros en memoria con algunos valores por defecto
//     const element = document.querySelector(id) //registro el cambio en id
//     element.style.border = width + 'px solid ' + color //utilizo un espacio para concatenar variables con este método
// }
// //*border: 1px solid #000 *// sintaxis de css
// agregarBorde("#imagen-1", "red") //llamo a la funcion e ingreso el valor de los 3 parámetros
// agregarBorde("#imagen-2")
// agregarBorde("#imagen-3", "green", 10)

//**Callback--Función que es usada como argumento para otra función
// const img = document.querySelector("#imagen-1")
// const saludar = ()=> { //creamos una función
//     alert("Hola")   
// }
// img.addEventListener("click", saludar) // la usamos dentro de otra función, la condición es el click
// //Callback--Con función anónima
// const img = document.querySelector("#imagen-1")
// const saludar = (msg)=> { //creamos una función
//     alert(msg)   
// }
// img.addEventListener("click", () => { //creamos una función anónima y usamos msg como argumento con el valor
//     saludar("Hola")
// })

//**Funciones con multiples parametros con el evento click
const addBorder = (id, color)=> {
    const element = document.querySelector(id)
    element.style.border = "3px solid " + color //utilizo un espacio para concatenar
}

const img1 =document.querySelector("#imagen-1")
const img2 =document.querySelector("#imagen-2")
const img3 =document.querySelector("#imagen-3")

img1.addEventListener("click", ()=> {
    addBorder("#imagen-1", "red")
})
img2.addEventListener("click", ()=> {
    addBorder("#imagen-2", "blue")
})
img3.addEventListener("click", ()=> {
    addBorder("#imagen-3", "black")
})

//**Return de las funciones (sirve para guardar el resultado de una operacion y usarlo despues)
// const sum = (a, b)=> { //declaro los parametros
//     return a+b //retorno la operacion algebraica o logica
// }
// const result = sum(1, 5) //declaro los valores y asigno la operacion algebraica o logica

// if (result === 3) { //uso la constante para someterla a una condición
//     alert("El resultado es 3")
// } else {
//     alert("No es 3")
// }

//**Return de un elemento css */
// const bgColor = (id) => {  //declaro la funcion en base al id
//     const element = document.querySelector(id) //escogo el elemento id
//     return element.style.background //retorno el estilo
// }

// const color = bgColor("#box-1")
// alert(color)

//**Return con input y alert, incluye condición */
// const btn = document.querySelector("#btn")  //1.- rescato el botón
// const getValue = (id, param)=> { //4.- la función rescata el id y el parámetro genérico. También se puede declara un valor por defecto
//     const value = document.querySelector(id).value // 5.- rescato el valor del parámetro

//     if (Number(value) > param) { // comparo el parámetro y devuelvo un valor
//         return "Mucho"
//     } else if (Number(value) === param){
//         return "Exacto"
//     } else {
//         return "Muy poco"
//     }
// }
//     btn.addEventListener("click", ()=> { //2.- escucho al botón que hace una operación
//         const result = getValue("#input", 3) //3.- la operación declara una función que toma una id y declara un parámetro. También se puede omitir el parámetro si hemos declarado un valor por defecto en la función
//         alert(result)
//     })

//**Utilizando return en un formulario */
// const sendData = (names, lastnames)=> {
//     const message = "Hola " + names + " " + lastnames + ". Your data has been sent."
//     alert(message)
// }

// const form = document.querySelector("#form")
// form.addEventListener("submit", (event)=> {
//     event.preventDefault()

//     const names = document.querySelector("#name").value
//     const lastnames = document.querySelector("#lastname").value

//     if (!names) {
//         alert("Your name is mandatory")
//         return
//     }
//     if (!lastnames) {
//         alert("Your lastname is mandatory")
//         return
//     }

//     sendData(names, lastnames)
// })

//**Como hacer referencia a un elemento ¿para que sirve? */
// const btn = document.querySelector("#btn")
// btn.addEventListener("click", (event)=> {
//     event.target.style.background = "white"
// })

//**Es lo mismo (regalo para el desafío)*/
// const sum = (a, b)=> {
//     return a + b
// }
// const sum = (a, b)=> a + b
// const result = sum(1, 2)
// alert(result)

//------------Guía---------------//
//**Funcion basica */
// function pintar_negro() {
//     elemento = document.querySelector("body")
//     elemento.style.backgroundColor = "black"
// }
// pintar_negro() //invocamos la funcion con el "parámetro" black

//**Funcion con parametros */
// function pintar_negro(color) {
//     elemento = document.querySelector("body")
//     elemento.style.backgroundColor = "black"
// }
// pintar_negro("black") //invocamos la funcion e ingresamos el "argumento" black

//**Pintando con botones */
// function paint(color) {
//     element = document.querySelector("body")
//     element.style.backgroundColor = color
// }

// const btn1 = document.querySelector("#pintar1") 
// const btn2 = document.querySelector("#pintar2") 
// const btn3 = document.querySelector("#pintar3")

// btn1.addEventListener("click", ()=> {
//     paint("black")
// })
// btn2.addEventListener("click", ()=> {
//     paint("blue")
// })
// btn3.addEventListener("click", ()=> {
//     paint("green")
// })
