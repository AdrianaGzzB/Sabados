// modal del carrito 
/*const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]; 
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]; 
const botonAbrir = document.getElementById('boton-carrito'); 
const botonCerrar = document.getElementById('carritoCerrar')
//crear ventana emergente y pintar cosas
//funciona como una ventana alert pero con mas estilo
//primero vamos por el primer elemento que exista por eso va por el [0]
//crear el comportamiento del modal
botonAbrir.addEventListener('clicK', () => {
    contenedorModal.classList.toggle('modal-active')//el contenedor modal tiene una clase
})
botonCerrar.addEventListener('clicK', () => {
    contenedorModal.classList.toggle('modal-active')//el contenedor modal tiene una clase
})*/
// modal del carrito
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0];
const modalCarrito = document.getElementsByClassName('modal-carrito')[0];
const botonAbrir = document.getElementById('boton-carrito');
const botonCerrar = document.getElementById('carritoCerrar')
botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active');
});
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
});
