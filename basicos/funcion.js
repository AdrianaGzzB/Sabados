//patron de una funcion declarada o simple 
// function nombreDeLaFuncion (argumento:parametro1,parametro2,.....){ todo adentro es el cuerpo de la funcion} 
//consumo o invoco o llamo a la funcion: nombreDeLaFuncion(parametro1,parametro2); 
//forma 1 
// function retornarMinimo(x, y) { 
//     if (x < y) { 
//         return x; 
//     } else { 
//         return y; 
//     } 
//   } 
 
// Con el operador ternario 
function retornarMinimo(x, y) { 
    return x < y ? x : y; 
  } 
   
 
  console.log(retornarMinimo(8, 7));


let resultado=0; 
//formas posibles de declarar una funcion 
//funcion simple 
function add2(x, y) {  return x + y; }; 
//----------------------------------------------------------------------- 
// funcion anonima asignada a una variable 
// cuando asignas una funcion a una variable, esta se vuelve de tipo funcion 
let add1 = function(x, y) {  return x + y; }; 
//----------------------------------------------------------------------- 
// funcion arrow asignada a una variable 
let add3 = (x, y) => { return x + y }; // una funcion anonima o arrow function 
//----------------------------------------------------------------------- 
// funcion arrow simplificada asignada a una variable 
// la uso cuando hago una sola operacion dentro de la funcion 
let add4 = (x, y) => x + y; 
//----------------------------------------------------------------------- 
//console.log(add1(add2(1,1),2)); // concatenacion o anidacion de funciones una dentro de otra 
console.log(add2(2,2)); 
console.log(add4(3,3));