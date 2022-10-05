// 1.	guardar informacion y recuperarla del local storage
// leer los productos del catalogo (stock.js),previamente cargando en HTML
stockProductos.forEach((producto)=>{
//  console.log(producto.desc)

})
//crear el storage del catalogo
//convertir el objeto JSON a string
localStorage.setItem('catalogo',JSON.stringify(stockProductos))
//remover o quitar del local storage el catalogo
//localStorage.removeItem('catalogo')
//leer del local storag
let catalogo=JSON.parse(localStorage.getItem('catalogo')) 
//console.log(catalogo.) 
//para imrpimir solo lo del primer elemento
//estamos parseando la variable catalogo del local storage y se la estamos asignando al const catalogo, o sea que la esta convirtiendo en un objeto 
//buscar un producto por el id, arrow function:(elemento) => {} 
let producto=catalogo.find ((producto) => producto.nombre === "Moño 1") //el find me busca del catalogo
//console.log(producto)
//voy a recorrecr de catalogo cada producto y de cada producto
//--------------------------------------

const carrito=[]; //declaracion de un arreglo
let item=catalogo.find((prod) => prod.id===2) //declaramos una variable y buscamos por el id
carrito.push(item)//este nuevo elemento lo metemos al carrito con el push

console.log('Carrito:',carrito)
//agregar elementos al carrito
let item2=catalogo.find((prod) => prod.id===3)
carrito.push(item2)
let item3=catalogo.find((prod) => prod.id===5)
carrito.push(item3)
//console.log('Carrito:',carrito)
//preguntar si existe un producto en el carrito con el .some me valida si esta o no y me regresa un valor booleano.
const existe=carrito.some(prod => prod.id===2) //buscar elemento por id
console.log(existe)
///se pregunta si existe el producto en nuestro carrito para cuando exista solo se modifica la cantidad del producto.
//condicionales implicitas
//voy a modidficar todo el carrito con un solo elemento, se hace con un .map
if (existe){ //si existe en el carrito
 carrito.map(prod => { //el map me esta haciendo un nuevo arreglo de carrito para poder trabajar sobre el y actualizar el original.
    if(prod.id === 2){
        prod.cantidad ++ //me incrementa la cantidad del producto cuando ya existe el producto en mi carrito.
    }
 })
}

console.log("Carrito Actualizado",carrito)

//-------------------------------------------------
//contador de los productos que tengo en mi carrito
const contadorCarrito=carrito.length
console.log('Total de productos', contadorCarrito)
//calcular el precio del carrito
//con math si tenemos el resultado pero nos da como resultado otro arreglo
//con el reduce obtenemos solo un nuemero
const precioTotal=carrito.reduce((acc, prod)=>acc+prod.cantidad*prod.precio, 0) //con el 0 estamos inicializando el acumulador
//guardar el objeto carrito en el local storage, pero se tiene que guardar como string, dentro de JSON solo nos permite guardar como string y dentro de JS si lo podemos guardar como objeto.
localStorage.setItem("Carrito",JSON.stringify(carrito))
console.log("Carrito del Local Storage", localStorage.getItem('carrito'))
console.log('Total',precioTotal)
//funcionalidad de agregar el carrito 
 //si esta el producto  modificar la cantidad, si no se agrega 
/*1.-pasar el id como parametro
2.-validar si el carrito existe en el local Storage
3.-si no existe el carrito en el local storage declaramos el objeto
4.-si existe el objeto carrito en el local storage lo vamos a leer como string y parseamos a JSON(como objeto)
5.-validar si el producto existe en el carrito
6.-si existe modificamos la cantidad (con el map)
7.-si no existe lo agregamos al carrito (con el push)
8.-guardamos en el local storage si no existe
9.-si existe en el local storage actualizamos el carrito(variable carrito que se encuentra en el lS)*/

// 2.	obtener un elemento del html y anidarle otro elemento
// 3.	obtener el numero de productos del carrito
// 4.	validar si existe un producto en el carrito
// 5.	si el producto existe aumentar la cantidad
// 6.	agregar producto al carrito por Id
// 7.	eliminar producto del carrito por Id
// 8.	contador de productos
// 9.	calcular el precio del carrito
// 10.	crear todos los elementos del contenedor de productos
// 11.	crear todos los elementos del carrito de productos
//crear mi proyecto