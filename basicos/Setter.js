const car = { 
    nombre: 'Ford', 
    modelo: 'Mondeo', 
    color: 'blanco', 
    potencia: 0, 
    produccion: 2014, 
    /* Setter*/ 
    set cambiaPotencia(nuevaPotencia){ 
        if (typeof nuevaPotencia === 'number'){ 
          this.potencia = nuevaPotencia; 
        } else { 
          console.log('Potencia es un numero'); 
        } 
      },     
    /*Getters */ 
    get getPotencia() { 
    if(this.potencia){ 
        return this.potencia; 
    }else { 
        return 'No tenemos informacion.'; 
    } 
    }, 
    /*Metodos*/ 
    calculaAntiguedad() { 
      // con el new instanciamos la clase date, es una copia y asi podemos usarla 
       let year = new Date().getFullYear(); 
       return  year - this.produccion; 
    } 
  }; 
   
  /*Acceder las propiedades un objeto */ 
  console.log(car.nombre); 
  console.log(car['nombre']); 
  /*Cambiar los valores de las propiedades*/ 
  car.nombre = 'Fiat'; 
  console.log(car.nombre); 
  console.log(car.calculaAntiguedad()); 
  /*Usando el setter y el getter*/ 
  car.cambiaPotencia = 500; 
  console.log(car.getPotencia);

 
