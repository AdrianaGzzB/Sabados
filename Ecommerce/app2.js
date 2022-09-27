const listaCarrito=document.querySelector('#lista-carrito')
const carrito=document.querySelector('#carrito')
let catalogo=JSON.parse(localStorage.getItem('catalogo'))
let articulosCarrito=[];

cargarEvento();
agregarProducto();
function cargarEvento(){
  document.addEventListener('DOMContentLoaded', getLocalStorage)
  listaCarrito.addEventListener('click',agregarProducto)
}
 
function getLocalStorage(){
//   articulosCarrito=JSON.parse(localStorage.getItem('carrito')||[]) 

}
 
function agregarProducto(){
    const productoObj={
        id:'',
        nombre:'',
        tipo:'',
        cantidad:'',
        desc:'',
        precio:'',
        img:''
    }
 if(articulosCarrito.some(producto=>producto.id===productoObj.id)){
    const productos=articulosCarrito.map(producto=>{
        if(producto.id===productoObj.id){
            producto.cantidad++;
        }else{
            return producto;
        }
    })
    articulosCarrito=[...productos];
 } else{articulosCarrito=[...articulosCarrito,productoObj];}

 console.log(articulosCarrito)

 }