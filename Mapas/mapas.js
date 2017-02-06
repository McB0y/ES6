/**
Mapas: Objetos que permiten la definición de "Elementos => Valor",
tenemos disponibles ciertos métodos como son:
-set
-get
-has
-delete
-keys
-values
-entries-->devuelve un objeto de arreglos
-clear

y la propiedad "size" que nos da el tamaño actual del Map.
 **/

let equipo = new Map();

equipo.set("monitor", "OLED");
equipo.set("memoria RAM", "8 GB");
equipo.set("HDD", "1 TB");
equipo.set("tarjeta madre", "American threads");
equipo.set("procesador", "Intel i5");


//tambien podemos concatenar:
equipo.set("monitor", "OLED").set("memoria RAM", "8 GB").set("HDD", "1 TB");





//manda 2 arrys y los pasa como argumento
let custom = (objeto, prop1, prop2) => {//prop1 y prop2 son arrays
   let long1 = prop1.length;
   let long2 = prop2.length;
   if(long1 === long2){
      var contador =0, i = 0, j = 0;
      while(contador < long1){
        objeto.set(prop1[i], prop2[j]);
         i++;
         j++;
         contador++;
      }
      return objeto;
   }else{
      console.log(`revise la cantidad de valores que introduce
         y que todas ellas tengan un respectivo valor...`);
   }
};


//Si se quiere tener el valor de una propiedad en específico,
//se utiliza el método 'get' con la propiedad como parámetro.

equipo.get("monitor");
equipo.get("memoria RAM");
equipo.get("HDD");
equipo.get("tarjeta madre");
equipo.get("procesador");

//Podemos saber si el objeto contiene cierta propiedad, devolviendo un boolean.

equipo.has("HDD");//true
equipo.has("tarjeta madre");//true
equipo.has("procesador");//true



//Podemos borrar las propieades y su valor del objeto con el método "delete"
equipo.delete("HDD");
equipo.has("HDD");//false
equipo.delete("tarjeta madre");
equipo.has("tarjeta madre");//false
equipo.delete("procesador");
equipo.has("procesador");//false


// los métodos keys, values y entries ---> regresan un MapIterator.


/*
Cabe aclarar que las propedades del mapa no son accesibles,
con el operador punto, o de la forma objeto["propiedad"]
como lo serian en un objeto, tampoco se pueden setear valores si no se utiliza
el método set().
*/
