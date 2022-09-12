//tipos de datos
var cadena='mi cadena';
var a; //undefine o null
var e,f;
var b=2;//number
e=b;//asignando el valor de b a e
let c=1.25;//numero decimal
let access=true;//booleano
var miArreglo=["John",24, false, 50.20];
//console.log('access:  ' + access + ' y el valor de c es: ' +c);
//console.log(miArreglo[4]);
//------------------------------------------------------//

/*var campista1='Jaime';
var campista1='David';
console.log(campista1);
let campista1='Jaime';
let campista2='David';
console.log(campista2);*/
//---------------------------------------------------------------//
//estamos haciendo una comparacion sencilla entre variables del mismo tipo(numeros)
//console.log(5==5); //true
//console.log(6==5); //false
//estamos haciendo una comparacion sencilla entre variables de tipo diferente
//console.log(9==9); //true
//console.log(9=='9'); //true, estamos comparando un numero con un string
//estamos haciendo una comparacion explicita es decir con los mismos tipos
//console.log(9===9); //true
//console.log(9==="9"); //false porque son de diferente tipo de dato (numero y string)
                        //y la comparacion la estamos haciendo con un triple = que es una igualdad estricta
//--------------------------------------------------------------------------------------------
 //console.log(parseInt('5'));  //estoy convirtiendo un  string 5 a un numero 5  
 //console.log(parseInt('5.20'));  //estoy convirtiendo un  string 5.20 a un numero entero 5   
 //console.log(parseFloat('5.20')); //estoy convirtiendo un  string 5.20 a numero decimal 5.20   
 console.log(parseFloat('Adry'));  
 //console.log('9'==="9");     //true  no puedes parsear una cadena en un numero    
 /* Comentario */
// Documentar mi codigo para saber que se ha hecho en el codigo 
/*Tipos de datos:
• String
• Number 
• Boolean 
• Undefined, null (significa que no se ha asignado un valor a la variable, solo se ha declarado. Nace sin tipo)
• Object
 */
 
 //Ejemplo:
 var a; //declaro la variable, nace como undefined, null, nace sin tipo, tiene un ambito global y local
 var e,f; //var puede definir la variable varias veces pero se tomara la ultima, es sucio
 var b = 2; // declarar la varibale y tambien la inicializa
 e = b; //asignar un valor a la variable
 //let c = 1.25; //declarar una variable flotante, decimal
 //declaro una variable, la mejor recomendacion es usar let, no se puede volver a declarar, si se puede modificar        
var a=5
var a=d //las var se pueden declarar mas de una vez y esto puede generar errrores
//let i=1  las variables let no se pueden declara mas de una vez.
let i=j