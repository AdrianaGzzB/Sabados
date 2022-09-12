const users = [  
    { name: 'John', age: 34, addres:'Morelos 20', color:'amarillo' },  
    { name: 'Amy', age: 20, addres:'Juarez 30', color:'azul'},  
    { name: 'camperCat', age: 10, addres:'Moras 18', color:'rojo'}  
  ]; 
 
  const edades=users.map(user=>user.age); 
  console.log(edades); 
  console.log(users); 
   
  const colores=users.map(color=>color.color); //aqui estoy mapeando los colores en un nuevo arreglo que se llama colores 
  console.log(colores);
 // const edades = users.map(user => user.age);
//  console.log(edades); 
console.log(users);

//const colores = users.map(color => color.color); //Aqui estoy mapeando los colores en un nuevo arreglo que se llama colores 
//  console.log(colores);


const direcciones = users.map(dir => dir.addres);
//    console.log(direcciones);
const usersUnders30 = users.filter(user => user.age > 30);//Aqui filtro los registros con edades mayores a 30.Al filter se l
//console.log(usersUnders30);
const colorAmarillo= users.filter(color => color.color=='amarillo');//Aqui filtro los registros con color amarillo.Al filter
//console.log(colorAmarillo);

const sumaDeEdades = users.reduce((sum,e)=>sum+e.age,10);//Aqui realizo la suma de edades, un "reduce" me regresa un valor.
console.log(sumaDeEdades);