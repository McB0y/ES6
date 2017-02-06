/*
Desestructuración de objetos y de arreglos:
"Nos permite guardar variables de una manera más fácil".
*/

let dias = ["lunes","martes","miercoles"];

let [dia1,dia2,dia3] = dias;
//dia1= "lunes", dia2="martes", dia3="miercoles"

//Utilizando parámetros por defeco.
let lugares = ["Primero", "Segundo", "Tercero"];
let[a,b,c,d = "Cuarto"] = lugares;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


//Podemos dejar espacios al declarar las variables

let animales = ["Gato", "Perro", "Gallo"];
let refAnimales = [a, ,c] = animales;//Esto sólo nos va a devolver Gato y Gallo.
console.log(a);//Gato
console.log(b);//Error nunca se declaro la variable.
console.log(c);//Gallo



//Podemos utilizar parámetro REST

let dispositivos = ["PC", "Labtop", "Smartphone", "iPad", "SmartWatch", "Raspberrypi"];

let [a, b, c, ...d] = dispositivos;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Desestructuración con objetos.
var Mascota = {
  nombre: "Buck",
  tipo : "perro",
  edad: 4,
  raza: "Bull-Dog Inglés"
};

var {nombre,tipo,edad, raza} = Mascota;

//Ya que con los objetos utilizamos referencias y no posiciones, no podemos
//saltar espacios de la siguiente forma:

let escuela = {
   nombre : "Harvard",
   pais : "U.S.A.",
   nivel : "Superior",
   porra : function() {
      console.log("Go Harvard!");
   }
}

let {nombre,porra} = escuela;

     console.log(nombre);
     console.log(porra());

let {nombre, , porra} = escuela;//ERROR ya que los valores son llamados por refencia.
//podemos utilizar alias
let {nombre,porra: grito} = escuela;
console.log(nombre);
console.log(grito());
