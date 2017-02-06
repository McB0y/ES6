/*
Párametros REST:
*/

//Contrario a los paramtros SPREAD en este caso tendremos un número,
//indeterminado de parámetros.

function sumarElementos(...elementos){
   console.log(elementos); //Nos regresa un array con los valores de la lista.
  var suma = 0;
  for(let i= 0; i <elementos.length; i++){
    suma += elementos[i];
  }
  return suma;
}

console.log(sumarElementos(1,2,3,4));


//Hay formas de pasar parametros SPREAD Y RECIBIR A LA VEZ PARAMETROS REST:
let arreglo = ["Valor1", "valor2", "valor3"];

let recibeSpread = (a, b, c, ...otra) => { //hace match con el SPREAD y convierte el REST
   console.log(a + " " + b + " " + c);
   console.log(otra);
}

recibeSpread(...arreglo, 5, 6, 7, 8, 9, 10);//Mandamos un Spread y una lista
