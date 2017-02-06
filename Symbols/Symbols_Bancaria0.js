/*Datos personales de cliente-cta utilizando simbolos.*/


/*
De la UI obtuvimos los siguiemtes valores
var nombre = "Pancho Linez Tador";
var cuenta = 028623278;
var domicilio = "Está es sólo una prueba de los domicilios.";
var tipo de cuenta = "Maestra";
var saldoActual = 25000;
*/


// NOTE: Un simbolo puede recibir cualquier tipo de objeto primitivo como
//identificador ({}), (289), ([]), (""),


var clienteCuenta = {};
var aS;
var ln1;
var ln2;
var size;

var datosCliente = ["Pancho Linez Tador",
                     028623278,
                    "Está es sólo una prueba de los domicilios.",
                    "Maestra",
                     25000];


// NOTE: Función para crear nuestro objto único.
var unico = (array) => {
   size = array.length;
   //llenamos nuestro Obj con los simbolos
   for (var i = 0; i < size; i++) {
      //llenamos nuestro obj.
      clienteCuenta[Symbol(array[i])] = array[i];
   }
}
unico(datosCliente);//de alguna forma le hacemos llegar los datos.


// NOTE: Ya que no podemos concatenar símbolos y cadenas necesito esta función.


var dameCad = (arr) => {
   var cadena = arr.map(function(valor) {
      var cadena = [];
      cadena = valor.toString();
      return cadena;
   });
   return cadena;
}


// NOTE: Función para desplegar la información.
var despliega = (obj, array) => {
   aS = Object.getOwnPropertySymbols(obj);
   //Nos devuelve un arreglo con los symbolos.
   //"CONVIERTO A CADENAS Y REGRESO LOS VALORES!"
   aS = dameCad(aS);
   ln1 = aS.length;
   ln2 = array.length;
   if (ln1 === ln2) {
      for (var i = 0; i < ln1; i++) {
         console.log(`${aS[i]} --> ${array[i]}`);//aS es un array[]
      }
   }else{
      console.log("Algo ocurrio.");
   }
}

//mandamos a llamar...

despliega(clienteCuenta, datosCliente);
