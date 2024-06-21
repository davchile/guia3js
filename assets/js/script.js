// que se muestra en la consola?
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

//Función con múltiples parametros
// function agregarBorde(id, color, width) { //declaro 3 parametros en memoria
//     const element = document.querySelector(id) //registro el cambio en id
//     element.style.border = width + 'px solid ' + color //utilizo un espacio para concatenar variables con este método
// }
//*border: 1px solid #000 *// sintaxis de css
// agregarBorde("#imagen-1", "red", 5) //llamo a la funcion e ingreso el valor de los 3 parámetros
// agregarBorde("#imagen-2", "blue", 3)
// agregarBorde("#imagen-3", "green", 5)

//Función con valores por defecto
// function agregarBorde(id, color = "black", width = 5) { //declaro 3 parametros en memoria con algunos valores por defecto
//     const element = document.querySelector(id) //registro el cambio en id
//     element.style.border = width + 'px solid ' + color //utilizo un espacio para concatenar variables con este método
// }
// //*border: 1px solid #000 *// sintaxis de css
// agregarBorde("#imagen-1", "red") //llamo a la funcion e ingreso el valor de los 3 parámetros
// agregarBorde("#imagen-2")
// agregarBorde("#imagen-3", "green", 10)

//Callback--Función que es usada como argumento para otra función
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

//Funciones con multiples parametros con el evento click
// const addBorder = (id, color)=> {
//     const element = document.querySelector(id)
//     element.style.border = "3px solid " + color //utilizo un espacio para concatenar
// }

// const img1 =document.querySelector("#imagen-1")
// const img2 =document.querySelector("#imagen-2")
// const img3 =document.querySelector("#imagen-3")

// img1.addEventListener("click", ()=> {
//     addBorder("#imagen-1", "red")
// })
// img2.addEventListener("click", ()=> {
//     addBorder("#imagen-2", "blue")
// })
// img3.addEventListener("click", ()=> {
//     addBorder("#imagen-3", "black")
// })

//Return de las funciones (sirve para guardar el resultado de una operacion y usarlo despues)
const sum = (a, b)=> { //declaro los parametros
    return a+b //retorno la operacion algebraica o logica
}
const result = sum(1, 5) //declaro los valores y asigno la operacion algebraica o logica

if (result === 3) { //uso la constante para someterla a una condición
    alert("El resultado es 3")
} else {
    alert("No es 3")
}
