/*
   McB0y.
   Uso de clases con la especificación ES6, cabe aclarar que por debajo es una función prototipal.
   "Factory Pattern".

   Puedes consultar la siguiente bibliografía para más ejemplos:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.
*/


class Persona {
   constructor(nombre, apPaterno, apMaterno, edad, sexo, nacionalidad) {
      this.nombre = nombre;
      this.apPaterno = apPaterno;
      this.apMaterno = apMaterno;
      this.edad = edad;
      this.sexo = sexo;
      this.nacionalidad = nacionalidad;
   }

   presentarse(){
      console.log("Hola mucho gusto mi nombre es :" + this.nombre + " " + this.apMaterno + " soy " + this.nacionalidad);
   }

   despedirse(){
      console.log("Un placer peero debo irme... ");
   }

}//Termina la clase Persona

class Estudiante extends Persona {//todos son estudiantes mexicanos.
   constructor(nombre, apPaterno, apMaterno, edad, sexo, nacionalidad,deporte, actividad) {
      //Pongo aquí porqué es cuando se crea la instancia.
     //Y no deben de pasar al padre ya que no existen y marcaria error
     //ademas siempre van despues de instanciar al padre los "this"
      super(nombre, apPaterno, apMaterno, edad, sexo, nacionalidad);//invocando al constructor padre.
      this.deporte = deporte;
      this.actividad = actividad;
   }

   estudiar(){
      console.log(this.nombre + " está estudiando mucho!");
   }

   descansar(){
      console.log(this.nombre + " dice: 'ok basta de estudiar es hora de descansar'");
   }

   entrenar(){
      console.log(this.nombre + " Entrena diariamente " + this.deporte);
   }
}//termina la clase estudiante



class futuroIngeniero extends Estudiante{
   constructor(nombre, apPaterno, apMaterno, edad, sexo, nacionalidad, habilidad1, habilidad2, habilidad3) {//Se necesitan pasar los  agumentos al constructor
      super(nombre, apPaterno, apMaterno, edad, sexo, nacionalidad);
      //O dara estos por defecto con el mismo número de argumentos que el padre.
      //ademas si no se definen propiedades del padre en este contexto seran undefinied.

      this.habilidad1 = habilidad1;
      this.habilidad2 = habilidad2;
      this.habilidad3 = habilidad3;
   }
   /

   programar(lenguaje){
      console.log("Puedo programar en muchos lenguajes por ejemplo :" + lenguaje);
   }

   diseniar(disenio1, disenio2){
      //NO SE NECESITA tener "this"
      console.log("No te preocupes el diseño se me da bastante bien entre lo mejor la "+ disenio1+ " y la " +disenio2);
   }

};//termino futuroIngeniero
