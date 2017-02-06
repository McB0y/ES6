/*

Promesas: Tenemos disponible el uso de promesas en ES6 de manera nativa
bastante útil para realizar tareas en segundo plano de forma no bloqueante,
también nos ayuda a estilizar el código y evitar el "callback hell".

*/


var promesa = new Promise(function(resolve, reject) {
   //1.-Todo lo que se quiera ejecutar va aquí;
    var frutas = ["manzana", "pera", "uva"];
    var contador = 0;

    for (let element of frutas) {
        contador++;
    }

    if (contador > 2) {
        resolve("¡El ciclo terminó!");//método que llamamos si todo va bien.
    } else {
        reject(Error("Algo salió mal..."));//si todo salio mal!
    }
});

promesa.then(
   function(resultado) {
    console.log(resultado);
},
   function(error) {
    console.log(error);
}
            );

promesa.catch(function(err) {
   console.log("que pedo tuve un errorazo! " + err);
});




/*Otro ejemplo de promesas :*/

function	division	(num1, num2) {
   var promise	=	new Promise(function	resolver(resolve,	reject){
      if	(num2	==	0)	{
         reject(new	Error("Dividir	entre	cero	es	Infinito"));
      }else{
         resolve(num1 /	num2);
      }
   });

   promise.then(function(resultado) {
    console.log(resultado);
},
   function(error) {
    console.log(error);
}
      );

promesa.catch(function(err) {
   console.log("que pedo tuve un errorazo! " + err);
});
return promise;
}
