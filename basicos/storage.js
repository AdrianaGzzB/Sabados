// 1. guardar informacion y recuperarla del local storage 
//leer los productos del catalogo json stock.js previamente cargado en el HTML 
// stockProductos.forEach((producto) => { 
//     console.log(producto.nombre); 
// }); 
//crear el storage del catalogo 
//convertir el objeto json a string 
// localStorage.setItem('catalogo', JSON.stringify(stockProductos)); 
 
 
// leer el storage 
// convertir el string a objeto json 
let catalogo; 
if (localStorage.getItem('catalogo')) { 
    catalogo = JSON.parse(localStorage.getItem('catalogo')); 
} 
console.log('lectura del localStorage', catalogo); 
// se guarda como string o texto serializado y se ddebe transforma a objeto par usarlo en