/*RECORRER LOS ARRAYS*/ 
 
const carros = ['honda accord', 'ford mustang', 'toyota corolla', 'fiat 500']; 
 
/* METODO #1 */ 
for (let i = 0; i < carros.length; i++) { 
    // console.log(carros[i]); 
} 
 
/*METODO 2*/ 
for (let carro of carros) { 
    // console.log(carro); 
} 
 
/*METODO 3 forEach*/ 
carros.forEach ((carro) => { 
  console.log(carro.toUpperCase());     
});
/*METODO 3 forEach*/ 
// declaro antes el arreglo 
// sobre el arreglo declaro un arrow function a una variable: carro, ojo esta no existe antes, de declara al vuelo y solo vive dentro de la funcion 
carros.forEach ((carro) => { 
    console.log(carro.toUpperCase());    
    console.log('hola '+ carro);  
    console.log('hola '+ carro.toLocaleLowerCase());  
  } 
  );
  //const carros = ['honda accord', 'ford mustang', 'toyota corolla', 'fiat 500']; 
console.log(carros); 
/*pop() saca el ultimo elemento*/ 
// console.log(carros.pop()); 
// console.log(carros); 
/* shift() saca el primer elemento*/ 
// console.log(carros.shift()); 
// console.log(carros); 
/* push() agrega un elemento al final*/ 
//  carros.push('Ford Explorer'); 
//  console.log(carros); 
 
// /*unshift() agrega un elemento al principio de la matriz*/ 
// carros.unshift('camaro'); 
// console.log(carros); 
 
/*splice() borra o agrega un elemento de acuerdo con el indice especificado*/ 
 
carros.splice(3, 0, 'ford focus'); 
console.log(carros);