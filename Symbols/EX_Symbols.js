

var matricula = Symbol('matricula');//Symbol Único.
var campus = Symbol.for("escuela");//Symbols Compartidos



var alumno = {
   nombre : "Sin asignar",
   apellidos : "Sin asignar",
   promedio : 0,
   setearValores(nombre, apellidos, promedio){
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.promedio = promedio;
   }
}


function asignarMattricula(alumno ,numeroMatricula){
   /*La "matricula" en esta función ahora es intocable
     ya que no se podra acceder desde "matricula" símbolo declarada anteriormente
     lo que nos asegura que este valor sera único.
   */
   let matricula = Symbol("matricula");// es unico y diferente al externo
   alumno[matricula] = numeroMatricula;
}

function asignarCampus(alumno, escuela){
/*
   En este caso si nos regresara el valor al acceder al campus por medio
   del símbolo "campus", debido a que este se comparte con un simbolo llamado
   "campus" que tiene el mismo identificador.
*/
   let campus = Symbol.for("escuela");
   alumno[campus] = escuela;
}


console.log(alumno[matricula]);//Undefined
alumno[matricula] = 20101029;
//la linea 41 seteara una propiedad symbol con el número '20101029'
// que es diferente de la matricula asignada por el método.


console.log(alumno[campus]);
//Nos regresa el campus seteado por el
//método ya que su identificador es el mismo.

alumno[campus] = "Otro campus"//si reescribe el valor que pasamos pr la función.
