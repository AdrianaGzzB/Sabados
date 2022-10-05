/*logica de la pagina principal
paso1: cargar todo el HTML estatico
paso2: cargar los scripts(script app.js y modal)
 -vamos a crear el contenido dinamico de catalogos
 -pregunto si hay contenido en el localStorage del carrito, si hay lo cargo del carrito
 -vamos a crear las funciones del carrito: agregarProducto, eliminar producto, actualizar carrito
 -vaciar el carrito
 -guardar en el local storage el contenido del carrito
 
*/
/*definimos las variables principales*/
const contenedorProductos=document.getElementById('contenedor-productos')//es un objeto
let carrito=[];
//antes de cargar cualquier funcion esto lo carga a memoria DOM
document.addEventListener('DOMContentLoaded',() => {
     if(localStorage.getItem('carrito')){
         carrito=JSON.parse(localStorage.getItem('carrito')) 
         alert(carrito) 
     }
})
//llenar el contenedro de productos con cada producto del stock.js 
stockProductos.forEach((prducto)=>{
    //vamos a crear un contenido dinamico de un objeto
  /*1.-crear un div
    2.-se le va asociar una clase(CSS o sea le vamos a dar estilo) al div
    3.-Crear todo el contenido del div con la informacion del producto, y agregarle un boton de compra 
    4.-Anidar el nuevo producto al contenedor de productos*/
    const div=document.createElement('div')//primero se crea el hijo y luego se le agrega al padre
    div.classList.add('producto')
    div.insertAdjacentElement('beforeend','<img src='+ prducto.img+'>')//estamos pegando un nodo(hijo) al final y en este caso estamos peagndo la imagen
    div.insertAdjacentElement('beforeend','<h3>'+ prducto.nombre+'</h3>')//creamos el nombre y se lo pegamos como un nodo
    contenedorProductos.appendChild(div)
})

