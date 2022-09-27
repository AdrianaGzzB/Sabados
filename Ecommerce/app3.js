//variables
localStorage.setItem('catalogo',JSON.stringify(stockProductos))
const idInp=document.querySelector('id')
let catalogo=JSON.parse(localStorage.getItem('catalogo'))

const carrito=[]; 
/*const carritoObj={
    id:'',
    nombre:'',
    tipo:'',
    cantidad:'',
    desc:'',
    precio:'',
    img:''
}*/

//eventos
//clases
//instancias
//funciones

function agragarProducto(id){
    let id=prod.id;
    stockProductos.forEach((id)=>{

    //  console.log(producto.desc)
    })   

    //el find me busca del catalogo
    
    let item=catalogo.find((prod) => prod.id===3) //declaramos una variable y buscamos por el id
    carrito.push(item)//este nuevo elemento lo metemos al carrito con el push
    //let item3=catalogo.find((prod) => prod.id===id) 
    //carrito.push(item3)
    //console.log('Carrito:',carrito)
    //agregar elementos al carrito
    //let item2=catalogo.find((prod) => prod.id===3)
    //carrito.push(item2)
    //preguntar si existe un producto en el carrito con el .some me valida si esta o no y me regresa un valor booleano.
    //const existe=carrito.some(prod => prod.id===2) //buscar elemento por id
    //console.log(existe)
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
    console.log('Cantidad de productos', contadorCarrito)
    //calcular el precio del carrito
    const precioTotal=carrito.reduce((acc, prod)=>acc+prod.cantidad*prod.precio, 0) //con el 0 estamos inicializando el acumulador
    //guardar el objeto carrito en el local storage, pero se tiene que guardar como string, dentro de JSON solo nos permite guardar como string y dentro de JS si lo podemos guardar como objeto.
    localStorage.setItem("Carrito",JSON.stringify(carrito))
    console.log("Carrito del Local Storage", localStorage.getItem('carrito'))
    console.log('Total del carrito',precioTotal)
    //funcionalidad de agregar el carrito 

