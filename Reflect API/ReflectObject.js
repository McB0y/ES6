/*
McB0y : El Reflect API que se basa en metaprogramación.
        Lo que significa que nos permite manipular el comportamiento
        que en el que pordefecto esta construido nuestro lenguaje,
        muchas de sus funcionalidades estaban disponibles anteriormente
        en el Object Object ahora estandolo en el Reflect Object.
        Su principal meta del API fue tener disponibles todos estos
        objetos y metodos en un solo lugar para poder mejorar los proyectos
        JavaScrip.
*/


// NOTE: No se ocupa la palabra "new" para instanciar a los objectos.


//Si queremos saber el prototipo de la clase
//Person.prototype
//desde una instancia seria
//var memo = new Person() --> memo.__prototype__
//para saber quien es el constructor de la clase:
//Person.constructor  --> Regresa una función nativa
//si se quiere saber el constructor de nuestra instanciar
//memo.constructor  --> Llo que nos regresa la clase que la creo.




class Person {
      constructor(name){
      this.name = name;
      }
}

function TipeObj() {
   this.age = 24;
}

//queremos reescribir el prototipo

let person = Reflect.construct(Person, ["Memo"]);//Es otra forma de instanciar objetos

console.log(peroson instanceof Person);//antes de asignar el 3 paramentro

let person = Reflect.construct(Person, ["Memo"], TipeObj);
console.log(person.__proto__ == Person.prototype);//false

console.log(person.__proto__ == TipeObj.prototype);//true







//Cosntrucción de prototipos
let config = {
      greet() {
         console.log('Hello there!');
        }
}
let person = Reflect.construct(Person, []);

//nos permite setear el prototipo delobjeto
Reflect.setPrototypeOf(person, config);


//Tenemos métodos para declarar propiedades.

/*
(defineProperty()),
(deleteProperty()),
(get()) y (set())
*/


//Podemos ejecutarfunciones:


class Cowboy {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   talk(prefix){
      console.log(prefix + "Hello I'am here and I have " + this.age);
   }
}

let Boby = Reflect.construct(Cowboy, ['Boby', 25]);
// los parámetros son : Que funcion queremos ejecutar, a que objeto apunta this, que parametros recibe la fn
Reflect.apply(Boby.talk, Boby, ['...']);



//La forma más optima de encontrar el prototipo
//de un objeto es utilizando el método de la API Reflect getPrototypeOf();

//ejemplo:

let Karina = new Person("Karina");
//Que es más fácil que escribir esto : Karina.__proto__
console.log(Reflect.getPrototypeOf(Karina));//Object{}
console.log(Reflect.getPrototypeOf(Karina) == Person.prototype);//true


Person.prototype.age = 27;//seteamos la propiedades
Person.prototype.profesion = "Ingeniero";
console.log(Karina.age);
console.log(Karina.profesion);


//Igual podriamos cambiar el prototipo seteando el prototipo nuevo.

let Gabriela = {
   age : 29,
   profesion : "Relaciones p.",
   greet(){
      console.log("Hello everyone!");
   }
}


Reflect.setPrototypeOf(Karina, Gabriela);//cambiamos los prototypos
console.log(Reflect.getPrototypeOf(Karina));//Tendra los atributos de Gabriela


//podemos usar el método de Gabriela greet() ya que es prototipo de ella.
//el argumento null es por qué this no se esta ocupando
//y el tercer argumento es por que no se estan pasando parárametros.
Reflect.apply(karina.greet, null, []);
