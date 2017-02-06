



//Con los conjuntos pasa algo diferente :

let set = new Set([1,1,1]);
set.add(2);//ahora tenemos un conjunto con dos valores diferentes

for (vari of set) {
  console.log(vari);
}//nos devuelve solo 1 ya que no permite la repetición de valores y es por eso que el orden no esta importante
//EL CONJUNTO ES SIMILAR AL ARRAY PERO CON VALORES UNICOS!


//una cosa curiosa es que si borramos un valor que estaba repetido queda totalmente eliminado del CONJUNTO

set.delete(1);
for (vari of set) {
  console.log(vari);
}//2 :O


//El recorrer un conjunto con el método entries() no parece que tenga tanto sentido porque no hay claves "keys" es decir no son parejas ordenadas de clave y de valor.
//PERO POR OTRA PARTE PIENSA EN QUE AL SER UNICOS SU POSICION SIEMPRE PUEDE SER VISTA COMO UNA CLAVE ;) "PUEDEN SER USADOS COMO ID"...


//WeakSet: al igual que el WeakMap solo pueden almacenar objetos que en este caso al ser solo valores deben de ser objetos.
//al igual que el WeakMap no son iterables ya que a js  no le da chance de saber cuantos elementos contiene tu conjunto


let miWeakSet = new WeakSet([{a:1},{b:2},{c:3}]);//SOLO OBJETOS!

for(valor of miWeakSet){
  console.log(valor);//no imprime nos regresa valores.
}


var obj1 = {a:1};
var obj2 = {b:2};


let miWeakSet1 = new WeakSet([obj1, obj2, obj2]);//si en esta parte declararamos los objetos  e intentaramos comprobar si el conjunto tiene el obj 2 daria error
//ya que en los objetos solo hacemos referencia a espacios de memoria por lo tanto estaria declarado 2 veces y el mapa lo tomaria como un valor diff
//let miWeakSet1 = new WeakSet([{a:1},{b:2},{b2}]); Nos diria que no lo contiene.


console.log(miWeakSet1.has(obj1));
console.log(miWeakSet1.has(obj2));
