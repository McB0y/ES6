//Mapas

var cardAce ={
  name : 'Ace of Spades'
};

var cardKing = {
  name : 'King of Clubs'
};

let deck = new Map();//de forma alterna se podrian asignar los valores en el constructor.[['as', cardAce], ['ck', cardKing]]
deck.set('as', cardAce);
deck.set('ck', cardKing);


//el metodo keys() al devolvernos un iterator podemos recorrerlo. y obtener las claves

for (key of deck.keys()) {
  console.log(key);
}


//el método values lo utilizamos para recoger los valores.

for (value of deck.values()) {
  console.log(value);
}//nos va a devolver los objetos cardAce y cardKing

//Así que con esto podriamos recojer tanto valores como  claves, pero si quisieramos conocer ambas en un solo loop utilizamos
//el método entries() el cual devuelve un clave valor dentro de un arreglo.

for (entry of deck.entries()) {
  console.log(entry);
}

//Muy importante podemos sobreescribir la forma en la que recorremos el arreglo.
//UNICAMENTE ALTERANDO EL SYMBOL.iterator

/*
solo las claves
for (entry of deck.entries()) {
  console.log(entry[0]);
}
solo los valores
for (entry of deck.entries()) {
  console.log(entry[1]);
}


*/


//Tenemos también los Mapas debiles (WeakMap);
//estos no pueden recibir como clave un primitivo como strings o numbers "SINO más bien un objeto"
//y es llamado mapa porque lo que maneja referencias debiles y le permite a js disponer de estos
//objetos sino se estan utilizando más "es una forma de verlo como garbage colector".

var cardAce ={
  name : 'Ace of Spades'
};

var cardKing = {
  name : 'King of Clubs'
};

let deck = new WeakMap();//de forma alterna se podrian asignar los valores en el constructor.[['as', cardAce], ['ck', cardKing]]
let key1 = {a:1};
let key2 = {b:2};
deck.set(key1, cardAce);
deck.set(key2, cardKing);


console.log(deck.get(key1));
