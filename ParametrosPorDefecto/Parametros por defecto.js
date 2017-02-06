/*
Parametros por defecto
*/

//Podemos pasar a las funciones parámetros por defecto.
function compara(valor1 = 3 , valor2 = 3) {
   console.log(valor1);//8
   console.log(valor2);//8
   //ya que sólo va a tomar los valores por defecto si no se le pasan otros valores.
   return valor1 == valor2;//true
}

compara(8,8);


//Se toman los valores que se pasan cómo argumento en orden

function compara(valor1 = 3 , valor2) {
   console.log(valor1);//8
   console.log(valor2);//undefined
   //ya que solo va a tomar los valores por defecto si no se le pasan otros valores.
   return valor1 == valor2;//false
}

compara(8);

//Pueden pasarse parámetrosque esten realizando alguna operación
function compara(valor1 = 2*5 , valor2 = 3/3) {
   console.log(valor1);//10
   console.log(valor2);//1
   //ya que solo va a tomar los valores por defecto si no se le pasan otros valores.
   return valor1 == valor2;//false
}

compara();


//se pueden igualar los parámetros.


function compara(valor1, valor2 = valor1) {
   console.log(valor1);//8
   console.log(valor2);//8
   //ya que solo va a tomar los valores por defecto si no se le pasan otros valores.
   return valor1 == valor2;//true
}
console.log(compara(8));


// El siguiente código nos mostraría un "ERROR"
//ya que los parametros por defecto
//sólo de izquierda a derecha podria igualar.
function compara(valor1 = valor2, valor2 =10) {
   console.log(valor1);
   console.log(valor2);
   return valor1 == valor2;
}
console.log(compara());
