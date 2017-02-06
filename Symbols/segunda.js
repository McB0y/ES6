/*2da forma de Obtener los valores de un símbolo.*/

//Podemos pasar de golpe todo un arreglo o un objeto a nuestro símbolo
//la única diferencia es que si pasasamos un objeto debmos primero
//pasarlo a una cadena para poder recuperar esa información.

var cliente = Symbol(datosCliente);
var cta = JSON.stringify(desCuenta);
var tipoCuenta = Symbol(cta);

var refrescos = Symbol(refrescos);
//Cada uno de estos símbolos tiene como
//descripción un conjunto de información
//única. a continuación lo demuestro:

var otroCliente = Symbol(datosCliente);
var otraCuenta = Symbol(cta);

otroCliente === cliente; //false
otraCuenta ===  tipoCuenta; //false



var desCuenta  = {
   nombre : "Cuenta Maestra",
   iva : "no aplica",
   CAT : 7.8,
   tasaMoratoriaAnual : 60.61,
   tasaMoratoriaMensual : 5.05
}


var refrescos = {
 tipo1 : "Coca-Cola",
 tipo2 : "Sprite",
 tipo3 : "Fanta",
 tipo4 : " Squirt"
}



var datosCliente = ["Pancho Linez Tador",
                     028623278,
                    "Está es sólo una prueba de los domicilios.",
                    "Maestra",
                     25000];


// NOTE: esta es la función que crea los símbolos passando un objeto
var asignaSymbol = (objeto) => {
   var reconoce = typeof objeto;
   if (reconoce === "object") {
      o = JSON.stringify(objeto)
      var nombre = Symbol(o);
      return nombre;
   }else{
      var nombre = Symbol(objeto);
      return nombre;
   }
}

var miS = asignaSymbol(objeto);

// NOTE: Recuperar la información de nuestro símbolo

var recuperaValores = (simbolo) => {
   var datos = simbolo.toString();
   var start = datos.indexOf("(")+1;
   var end = datos.indexOf(")");
   var cadenaFinal = datos.substring(start, end);
   //en la siguiente linea hemos recuperamos el objeto
   cadenaFinal = JSON.parse(cadenaFinal);
   for(i in cadenaFinal){console.log(i + " " + cadenaFinal[i])}
}

recuperaValores(miS);
