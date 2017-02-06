/*
 PARAMETROS SPREAD:
*/

let array = new Array("Mamifero", "Anfibio", "Ave", "Reptil");

let arreglo = [1,2,3,4,5,6];

let spread = function(a,b,c,d){
    console.log (a + " " + b + " " + c + " " + d);
}

spread(...array);

let spread1 = function(a,b,c,d){
   return (d+b+c)*a;
}

spread1(...arreglo)//Sólo tomara los primeros 4 valores ya que es el número de parámetros definidos

//Puede presentarse que queremos saber el numero mayor de un array sin iterar sobre el usando un ciclo

let valores = [23,15,0,40,36,34];

console.log(Math.max(valores));//Esto no se podria por que Math.max() funciona
                              //sólo en una lista de valores no en un arreglo
                              //devolveria NaN

console.log(Math.max(...valores));//Le pasamos una lista y esto actua cómo un call

console.log(...valores);//Toma los valores itera sobre ellos y aplica split
                        //REST por el contrario toma los valores y los vuelve arreglos.
