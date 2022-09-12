// resuelve un problema donde imprimas los multiplos de 5 en un rango del 1 al 100 
 
for (var i = 1; i <= 100; i++) { 
    let resto = i % 5; 
    if(resto === 0){ 
        console.log(i); 
    } 
     
}