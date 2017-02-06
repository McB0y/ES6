/*RECUPERANDO INFORMACIÓN DEL REGISTRO GLOBAL DE SIMBOLOS*/






var globalSym = Symbol.for('foo'); // create a new global symbol
Symbol.keyFor(globalSym); // "foo"
globalSym.valueOf();

var localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// well-known symbols are not symbols registered
// in the global symbol registry
Symbol.keyFor(Symbol.iterator) // undefined




// NOTE: El código anterior es la muestra de MDN. Para más infoconsulte en la página.


// NOTE: solo funciona con claves compartidas y
//es para obtener el valor de las claves



// NOTE: esto podria ser útil si queremos pasar
//un objeto o un arreglo como identificador, y
//quisieramos recuperar de nuevo la estructura.



//1.- El objeto que sera identificador desde ahorita.
var desCuenta  = {
   nombre : "Cuenta Maestra",
   iva : "no aplica",
   CAT : 7.8,
   tasaMoratoriaAnual : 60.61,
   tasaMoratoriaMensual : 5.05
}

//2.- Si es un objeto, debemos convertirlo a cadena



var aCadena = JSON.stringify(desCuenta);


var simbolo = Symbol.for(aCadena);


// NOTE:Symbol("obj") --> de esta manera no se podra recuperar
// NOTE: debe ser compartido .for(); de lo contrario regresa "undefined".
// NOTE: no importa si es arreglo u obj


Symbol.keyFor(simbolo);//RECUPERAMOS NUESTRA OBJETO-CADENA.



/*
// NOTE: La salida:
"{"nombre":"Cuenta Maestra","iva":"no aplica","CAT":7.8,"tasaMoratoriaAnual":60.61,"tasaMoratoriaMensual":5.05}"
*/




/*
Con respecto a los arrays NO IMPORTA si lo convertimos a cadena antes
ya que el método .keyFor() nos regresa esa cadena que necesitamos.
*/


var datosCliente = ["Pancho Linez Tador",
                     028623278,
                    "Está es sólo una prueba de los domicilios.",
                    "Maestra",
                     25000];


//Símbolo compatido del que se puede recuperar su identificador.
var simbolo2 = Symbol.for(datosCliente);


Symbol.keyFor(simbolo2);//NOS REGRESA UNA CADENA CON LA INF EL ARRAY.

// NOTE: la salida
//"Pancho Linez Tador,28623278,Está es sólo una prueba de los domicilios.,Maestra,25000"


var arrCadena = Symbol.keyFor(simbolo2);

var arrFinal = arrCadena.split(",");//tenemos un array de strings.

// NOTE: SUPER IMPORTANTE! si hay valores numericos en la cadena que se
// NOTE: genera con el método split(",") nuestro array sera "UNA CADENA"
// NOTE: por tanto si se desea trabajar con los valores numericos
// NOTE: podemos ocupar metodos o expresiones reg. y recuperar tal cual el array.


/*
SINO SE QUISIERA TODO ESTE ROLLO PORQUÉ SE QUIERE UN SÍMBOLO ÚNICO
PODEMOS HACER LO SIGUIENTE :
*/

var f = Symbol(datosCliente);

var simboloCadena = f.toString();//Nos regresa todo el símbolo como una cadena.

var inicio = simboloCadena.indexOf("(") + 1;
var final = simboloCadena.indexOf(")");


var resul = simboloCadena.substring(inicio, final);
var array = resul.split(",");

// NOTE: Y lo mismo se usarian otros métodos si lo que se quiere
// NOTE: es trabajar con los valores del array que son completamente cadenas
