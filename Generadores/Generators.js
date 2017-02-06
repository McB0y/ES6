/*

Los generadores son parecidas a las funciones,
con y podemos tener el control de ciclos dentro de ellos,
mediante la palabra reservada yield.
"En cada iteración nos devuelve un objeto con el estado del generador."

*/
function *Contador(){
  var i = 0;
  while(1<2) {
  	  yield i;
  	  yield "hola";
  	  yield "...";
  	  yield "bye"
      i++;
  }
}

var contador = Contador();

console.log(contador.next()); // {value: 0, done:false}
miContador.next().value; //te devuelve la propiedad
miContador.next().value;  //te devuelve el estado;si no ha terminado false o en caso contrario true
console.log(contador.next()); // {value: 1, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}

//Cuando corremos un Genrador este nos devuelve un Iterador.
//Tendremos un objeto atraves del cual podemos iterar.


'use strict'

function *selected(){
  yield 'House';
  yield 'Garage';
}

let it = selected();

console.log(it.next())
console.log(it.next())
console.log(it.next())



//Se vuelve bastante útil esto al combinar iteradores y generadores.
//Nos permitiria por ejemplo generar tareas asincronas y
//producir esos resultados administrandolos de manera fácil.
//paso a paso (como un fetch a un servidor).
'use strict'

let obj ={
   [Symbol.iterator]:gen
};

function *gen() {
   yield 1;
   yield 2;
}

for(let el of obj){
   console.log(el);
}



//Podemos usar los métodos con los que vienen disponibles los generadores.


function *miGenerador(valor) {
   for (var i = 0; i < valor; i++) {
      try {
         yield i;
      } catch (e) {
         console.log("Nuestro erro!");
      } finally {

      }
   }
}

let it = miGenerador(4);
console.log(it.next());
console.log(it.throw('Hey un error ha ocurrido!'));
//Ahora es claro que tenemos un mejor control de lo que se ejecuta!
console.log(it.return('Hey un error ha ocurrido!'));//Por el momento solo lo soporta FF.
