/*

Conjuntos:Son objetos que contienen uno o mas elementos,
separados por coma, estos objetos al igual que los mapas,
podemos manipularlos con métodos, y no podemos acceder a sus valores
o a propiedades sin el uso de esos métodos. Es decir como lo hariamos
con un objeto simple.

*/

var frutas = new Set();

frutas.add("Manzana");
frutas.add("Pera");
frutas.add("Piña").add("Banana").add("Papaya").add("Fresa");

console.log(frutas.has("Banana"));//devuelve un true.

console.log(frutas.size);//6

frutas.delete("Fresa");

console.log(frutas.size);//5

frutas.forEach(
	(fruta) => console.log(fruta)
);
