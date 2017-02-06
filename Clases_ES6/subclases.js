//Sub-clases nos permiten extender objetos
//para poder generar nuestras propias funciones.

class convertibleArray extends Array {
   convert() {
      let returnArray = [];//Declara un arreglo.
      this.forEach(value => returnArray.push('convirtiendo! ' + value));
      return returnArray;
      /*
       1.-Al extender de la clase Array heredo todos sus metodos y atributos
       2.-Cada instancia de esta clase se puede ver como un Array
       3.-Creamos funcionalidades personalizadas que las clase padre no contienen
      */
   }
}

let numberArray = new convertibleArray();
numberArray.push(1);//convirtiendo! 1
numberArray.push(2);//convirtiendo! 2
numberArray.push(3);//convirtiendo! 3
