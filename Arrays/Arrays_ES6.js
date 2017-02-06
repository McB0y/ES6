//Tenemos nuevas funcionalidades para instancias en Arrays

//con ES5
var array = Array(5);
console.log(array);//[undefined,undefined,undefined,undefined,undefined];
let array = Array.of(5,10,20);
console.log(array);//[5,10,20];

//Una forma para extender arreglos apartir de otros ya existentes.
let newArray = [5,10,20,50,70];
let extArray = Array.from(newArray, val => val * 2);//todo el arreglo *2 en un nuevo array

let miArray = [0,2,4,6,8,10];
console.log(miArray);
miArray.fill(100,1,4); //el primer parámetro es la posicion donde empieza a setear y la cuatro donde se detiene pero no la incluye.
console.log(miArray);//[0, 100, 100, 100, 8, 10]


//Una de las funcionalidades que nos ayudaran más es el método find() en las consultas avanzadas

var arr = [5,10,20,50,70];
arr.find.(val => val > 50);
arr.findIndex(val => val > 50);


//Uno de los mejores ejemplos de la MDN

let inventory = [
  {name : "Banana", quantity :3},
  {name : "Lemon", quantity : 10},
  {name : "Pineapple", quantity :2}
];

function findLemon(fruit) {
  return fruit.name === 'Lemon';
}

console.log(inventory.find(findLemon));

//El método copyWithin() nos permite manipular los valores internos de nuestro arreglo copiando valores.
var arr = [5,10,20,50,70];
console.log(arr.copyWithin(1,2));//copia el elemento de la posición 2 en la posición 1. "AFECTA AL ARREGLO ORIGINAL!"
console.log(arr.copyWithin(1,0,2));//Toma el arr desde su posición 0 hasta la 2 y lo pega empezando en la pos 1 si el tamaño excede lo corta


//El método entries() nos permite conseguir una descripci+on de las entradas del array devolviendo un iterato


var arr = [5,10,20,50,70];
console.log(arr.entries());
var it = arr.entries();//Nos devuelve un objeto iterator de Array

for(elemento of it){
  console.log(elemento);
}
