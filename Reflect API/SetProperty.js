//Seteando propiedades para algun objeto.
//Esto de alguna manera mediante ES5 nos
//permitia agregar una propiedades
//y configurar esa propiedad mediante Object.


class Profesor {
   constructor(asignatura, escuela) {
      this.asignatura = asignatura;
      this.escuela = escuela;
   }
   get asignatura(){
      return this.asignatura;
   }
   set asignatura(valor){
      this.asignatura = valor;
   }
}


var jirafales = new Profesor("Matematicas", "Primaria 123");

Reflect.defineProperty(jirafales, 'grupos', {
   writable : true,
   value: ["1A", "3C", "5A", "5B", "6D"],
   configurable : true
}


console.log(jirafales.grupos);//["1A", "3C", "5A", "5B", "6D"]
jirafales.grupos = ["Sin grupos"];
console.log(jirafales.grupos);//["Sin grupos"


//Pero si empezamos a quitar las keys de este objeto
Reflect.defineProperty(jirafales, 'grupos', {
   value: ["1A", "3C", "5A", "5B", "6D"],
}


delete jirafales.grupos;
console.log(jirafales.grupos);//undefined


jirafales.grupos = ["Sin grupos"];
console.log(jirafales.grupos);//["1A", "3C", "5A", "5B", "6D"]

Reflect.deleteProperty(jirafales, 'escuela');
console.log(jirafales.escuela);




//De as cosasmás interesantes es que podemos prevenir el acceso
//o la configuración del objeto que estamos configurando con 2 métodos del API

let nuevoProfe = new Profesor("Geografia", "Secundaria");

console.log(Reflect.isExtensible(nuevoProfe));//true

Reflect.preventExtension(nuevoProfe);//Poniendo un seguro al objeto.

console.log(Reflect.isExtensible(nuevoProfe));//false.

Reflect.defineProperty(nuevoProfe, "labores", {
   values : ["Lunes", "Miércoles", "Viernes"];
});

console.log(nuevoProfe.labores);
