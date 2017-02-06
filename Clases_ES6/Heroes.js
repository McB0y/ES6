/*
   McB0y.
   Uso de clases con la especificación ES6, cabe aclarar que por debajo es una funcion prototipal.
   "Factory Pattern".

   Puedes consultar la siguiente bibliografía para más ejemplos:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.
*/
class	Heroe	{
    constructor(nombre, nivel, vengador, vigente)	{
    this.nombre	=	nombre;
    this.nivel = nivel;
    this.vengador = vengador;
    this.vigente = vigente;
}//ya no se declara el constructor como función.

//Podemos declarar los metodos "sin necesidad de prototipos".

 presentarse(){
   console.log("Su nombre es " + this.nombre);
  }

  pelear(nombre, tipo){
     console.log("Enfretandose contra " + this.nombre + " del tipo " + tipo);
 }

 descripcion(caracteristicas){//recibimos un arreglo
    caracteristicas = caracteristicas.toString();//lo volvemos cadena
    console.log(caracteristicas);//lo mostramos
    var car1 = caracteristicas.split(",");//lo separamos
    car1.sort();//lo acomodamos
    console.log("El es : " + this.nombre + ", Sus habilidades son : " + car1);//lo mostramos en orden
 }


  despedirse(mensaje){
   console.log(mensaje + this.nombre);
   }

   equipo(){
      if(this.vengador === true && this.nivel === 5 && this.vigente === true ){
         console.log("Es un vengador, sigue combatiendo a los malos y es de los más poderosos!");
      }else {
         console.log("Es un villano, no esta vigente y no es una amenaza, gracias Avengers!");
      }
     }

   }


   //Creando las instancias de los objetos

   var heroe1 = new Heroe("Iron Man", 5, true, true);
   var habilidades1 = ["Genio", "Armamento", "Millonario"];

   var heroe2 = new Heroe ("Capitan America", 5, true, true);
   var habilidades2 = ["Super fuerza", "Escudo de Vibranium", "Estratega"];

   var heroe3 = new Heroe("Hulk", 5, true, true);
   var habilidades3 = ["Super fuerza", "Inmunidad"];

   var villano1 = new Heroe("Red Skull", 4, false, false);
   var habilidades4 = ["Super fuerza", "Estratega", "Ejercito Nazi"];

   var villano2 = new Heroe("Abominación", 5, false, false);
   var habilidades5 = ["Super fuerza", "Maldad Extrema", "Factor ganma"];

   var villano3 = new Heroe("Loki", 3, false, false);
   habilidades6 = ["Magia", "Asgardiano", "3er Acto", "Ejercito Chitauri!"];
