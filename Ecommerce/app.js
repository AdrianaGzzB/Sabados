/* Logica de la pagina principal
Paso 1: cargar todo el HTML estatico
Paso 2: cargar los scripts (script app.js y modal) 
    * vamos a crear el contenido dinamico del catalogo de productos (sangria-identado)
    * Pregunto si hay contendio del local Storage del carrito, si lo hay, lo cargo del carrito
    * vamos a crear las funciones del carrito: agregar producto, eliminar producto, actualizar carrito
    * vaciar carrito
    * guardar en el local Storage el contenido del carrito
*/

//Definimos las variables principales
const contenedorProductos = document.getElementById('contenedor-productos')
let carrito = []

// Pregunto si hay contendio del local Storage del carrito, si lo hay, lo cargo del carrito. Lo hacemos con el DOM
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        alert(carrito) //dira si existe
    }
})
//llenar el contenedor de productos con cada producto del catalogo del stock.js
/* stockProductos.forEach((producto) => {
    /*Vamos a crear el contenido dinamico de un objeto:
        1.-Crear un div
        2.-Asociar una clase (css) al div 
        3.-Crear todo el contendio del div con la informacion del producto, y agregarle un boton de compra
        4.-Anidar el nuevo producto al contenedor de productos
     
    const div = document.createElement('div')
    div.classList.add('producto')
    div.insertAdjacentHTML('beforeend', '<img src=' + producto.img + '>') //le estamos pegando un nodo al div que creamos, antes de que termine
    div.insertAdjacentHTML('beforeend', '<h3> ' + producto.nombre + '</h3>')
    div.insertAdjacentHTML('beforeend', '<p> ' + producto.desc + '</p>')
    div.insertAdjacentHTML('beforeend', "<p class='precioProducto'> Precio:  " + producto.precio + '</p>')
    
    
    //CREAMOS UN BOTON
    div.insertAdjacentHTML('beforeend', '<button id=agregar' + producto.id + "class='boton-agregar'> Agregar <i class='fas fa-shopping-cart'></i></button>")
    contenedorProductos.appendChild(div)
    
    const boton=document.getElementById('agregar'+ producto.id)//creamos la referencia para ir por el
    boton.addEventListener('click', () => {
        alert(producto.id);
    });
})
*/

//---------------
stockProductos.forEach((producto) => {
    //1.    crear un div y pegarle la clase css 
    //2.    crear el contenido del div, toda la info de cada producto 
    //3.    anidar el nuevo elemento al contenedor de productos 
    //4.    crear el boton de cada producto 
    //5.    generar el evento click al boton creado y asociarlo a la funcion agregar carrito   
    // ---------------------------------------------------------------------------------------------------------- 
    const div = document.createElement('div');
    div.classList.add('producto');
    div.insertAdjacentHTML("beforeend", "<img src=" + producto.img + ">");
    div.insertAdjacentHTML("beforeend", "<h3>" + producto.nombre + "</h3>");
    div.insertAdjacentHTML("beforeend", "<p>" + producto.desc + "</p>");
    div.insertAdjacentHTML("beforeend", "<p class='precioProducto'>Precio: $" + producto.precio + "</p>");
    div.insertAdjacentHTML("beforeend", "<button id=agregar" + producto.id + " class='boton-agregar'>Agregar<i class='fas fa-shopping-cart'></i></button>");
    contenedorProductos.appendChild(div);
    const boton = document.getElementById("agregar" + producto.id);
    boton.addEventListener('click', () => {
        AgregarCarrito(producto.id)

    });
});

//crear funcion
const AgregarCarrito = (prodid) => {
    const existe = carrito.some(prod => prod.id === prodid) //buscar elemento por id
     alert(existe)
    ///se pregunta si existe el producto en nuestro carrito para cuando exista solo se modifica la cantidad del producto.
    //condicionales implicitas
    //voy a modidficar todo el carrito con un solo elemento, se hace con un .map
    if (existe) { //si existe en el carrito
        carrito.map(prod => { //el map me esta haciendo un nuevo arreglo de carrito para poder trabajar sobre el y actualizar el original.
            if (prod.id === prodid) {
                prod.cantidad++ //me incrementa la cantidad del producto cuando ya existe el producto en mi carrito.
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodid); 
        carrito.push(item); 
        
    }
    console.log(carrito)

  //llama a la funcion actualizar carrito
  ActulizarCarrito() 
}

const ActulizarCarrito= () => {
    const contadorCarrito=document.getElementById('contadorCarrito')
    contadorCarrito.innerText=carrito.length   //cambioandole el valor que esta dentro
}
 
//crear el HTML


//--------------------




