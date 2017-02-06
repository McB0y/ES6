/*
Iteradores y Generadores

   Un Iterador es un objeto a través del que se puede iterar,
   que sabe como acceder a las colecciones de datos contenidas en el.
   Un Generador es una función que no necesariamente corre al final,
   cuando la ejecutamos.
   "Yield" ---> Produce. (Para poder controlar la siguiente instrucción)

*/

'use strict'

let array = ["Ramón", "Iron Man", "Tony"];
console.log(array);
console.log(typeof array[Symbol.iterator]);
//el arreglo u objeto contiene este 'Symbolo.iterator' que lo define
//y es de tipo function.
let it = array[Symbol.iterator]();//it es ina funcion "Un objeto"
//que solo dispone de un método.
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());


//¿Po qué son tan utiles los iteradores.?
//1.-"Cualquier objeto puede ser visto como un iterador,
//lo unico que debe de hacer es implementar el Symbolo como en el caso de it para el array."
//2.-"Podemos reescribir el comportamiento por defecto de nuestro iterator"

'use strict'

let array = ["Ramón", "Iron Man", "Tony"];

array[Symbol.iterator] = function(){
  //Esta función es el core de todos los iteradores
  //pues nos permite reescribir el comportamiento de nuestros objetos
  let nextValue = 10;
  return {
    next : function(){
      nextValue++;//incrementamos el valor que por defecto seteamos.
      return {
        done : nextValue > 15 ? true : false,
        value : nextValue
      };
    }
  };
}

console.log(array);

let it = array[Symbol.iterator]();

console.log(it.next());

//Ahora iteramos en el objeto.

for(let element of array){
  console.log(element);
}



/*
La estructura básica de cualquier iterator es la siguiente:
regresar un obj con un único método "next" que asu vez regresa un objeto
array[Symbol.iterator] = function(){
  return {
    next : function(){
      return {
       done : "reescribimos"
       value : "rescribimos"
      }
    }
  };
}
*/

//Construcción de nuestro iterador

"use strict"

let person = {
  name : "McB0y",
  hobbies : ["Programar", "Escuchar música", "Patinar", "Electrónica"],
  [Symbol.iterator]:function(){
    let i = 0;
    let hobbies = this.hobbies;
    return {
        next : function(){
        let value = hobbies[i];
        i++;
        return {
          done: i > hobbies.length ? true : false,
          value : value
        };
      }
    };
  }
};

for(let hobby of person){
  console.log(hobby);
}



//Cuando corremos un Generador este nos devuelve un Iterador.
//Tendremos un objeto atraves del cual podemos iterar.
