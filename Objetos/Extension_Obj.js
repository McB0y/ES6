/*
Extensiones en Objetos.
*/

let pais = "Rusia";
let ciudad = "TTRR";

let obj ={
   pais,//Rusia
   ciudad//TTRR,
   //Estos valores extienden de las variables de arriba.
}

//podemos inicializar desde el objeto y agregar funciones de la siguiente forma

let obj2 ={
   pais,//Rusia
   ciudad,//TTRR
   localizar(){
      console.log(this.pais, this.ciudad);
   }
}

//Podemos inicializar con notacion string:
let obj2 ={
   "pais" : "Japan",//Rusia
   ciudad,//TTRR
   "localizar"(){
      console.log(this.pais, this.ciudad);
   }
};

//Y mandar a llamar así :

obj2["localizar"]();



let seccion ="Distrito";

let obj2 ={
   "pais" : "Japan",//Rusia
   ciudad,//TTRR
   [seccion] : "Cuarto",//Sin este valor daria ERROR
   "localizar"(){
      console.log(this.pais, this.ciudad);
   }
};

/*Podemos extender con propiedades variables, propiedades con  notación de cadena, y variables de bloque*/
let asesora = true;
let lema = ()=>"Esfuerzate hoy!";
const ESCUELA = "UNAM";
const ASIGNATURA = "Matemáticas";

let profesora = {
 [ESCUELA] : "Facultad de Ing.",
 [ASIGNATURA] : "Cálculo",
 "Docente" : "Tiempo completo",
 "Horas" : 40,
  lema
}


//Esto representa una desventaja ya que podemos volver a setear
//las propiedades del objeto incluso aunque sean constantes
//es por esto que los símbolos son muy utiles al utilizar objetos.
