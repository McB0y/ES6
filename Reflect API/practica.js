//Algunos ejercicios con Reflect API.
var Niño = {
   nombre: "",
   sexo : ""
   }

Reflect.getPrototypeOf(niño); //Object{}
Niño.constructor //function Object() { [native code] }


//La siguiente instrucción no nos permite instanciar apartir de este obj.
//ya que no es un cosntructor.

var carlitos = new Niño();//TypeError: Niño is not a constructor.

//Por medio de una fn Niño si podria crear al objeto carlitos.
//ya que si es un cosntructor.

function Niño(nombre, sexo){
   this.nombre= nombre;
   this.sexo = sexo;
}
var carlitos = new Niño();
carlitos.nombre = "Carlitos";
carlitos.sexo = "Hombre";
//entonces tendriamos esto
Niño {nombre: "Carlitos", sexo: "Hombre"}
carlitos instanceof Niño;//Object
carlitos instanceof Object;//Object

//Ahora checaremos con el Objeto Reflect un par de cosas

Reflect.getPrototypeOf(Niño)//function () {}
Reflect.getPrototypeOf(carlitos)//Object {}

carlitos.constructor//regresaria toda la estructura de la función.
//carlitos.constructor() nos regresara los valores con Undefined

Reflect.getPrototypeOf(carlitos);//Object{}

//conseguiremos directamente el valor de las keys.

Reflect.get(carlitos, "nombre");
Reflect.set(carlitos, "grado", "6to");


function TipoAlumno() {
   this.premios = "Mención honorifica";
}

var Particular = {
   estado : "neutro",
   cambio : "positivo",
   reversa : "negativo",
   define(){
      console.log("Soy particular positivo por defecto.");
   },
   cambia(){
      console.log(`Cambie de estado a ${this.reversa}`);
   }
};


//1.-Cambiamos a nuestro prototipo para poder usar los métodos.
Reflect.setPrototypeOf(carlitos, Particular);//true
//2.- aplicamos la ejecucion de las funciones ya que esta vez carlitos
//tienen como prototipo Particular.



Reflect.apply(carlitos.cambia, null, []);//Habra un problema ya  que no hagarra el contexto
// seria su salida: Cambie de estado a undefined
Reflect.apply(carlitos.cambia, Particular, [])//;
//Cambie de estado a negativo


/*De esta forma tengan en cuenta que en la misma instrucción
creamos la instancia, y ademas cambiamos el constructor.
y de esta manera nos estamos ahorando un par de lineas de código

var otro = new Niño("el nombre", "el sexo");
Reflect.setPrototypeOf(otro, TipoAlumno.prototype)

*/


Reflect.apply(, [arguments])

Reflect.construct(Niño, ["Karol", "Mujer"] TipoAlumno);


var Alumno = {
   edad : "",
   grado : ""
}

Reflect.getPrototypeOf(Alumno);//Object {}
Alumno.constructor //function Object() { [native code] }
