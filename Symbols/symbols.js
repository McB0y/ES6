/*
         Simbolos.

Los simbolos son una tipo de dato nativo como lo son las cadenas,
y nos permiten agregar proiedadesa los objetos donde el simbolo
seria el key.
Los símbolos no son iterables, lo que quiere decir que si iteramos
no veremos los símbolos iterarse como si fueran el key de un objeto
El constructor Symbol no debe ser usado con el operador new.
Tampoco debe ser extendido mediante clases.
*/

//Symbol([description])
let symbol = Symbol('debug');


   console.log(symbol);//devuelve un objeto symbol
 // console.log(typeof symbol);  //symbol
 //console.log(symbol.toString); especialmente útil si se quiere saber de que se esta hablando


 //Los simbolos son unicos ya que por en el fondo son identificados por un id.

let symbol = Symbol('debug');
let symbol2 = Symbol('debug');

console.log(symbol == symbol2);//FALSE!!


let Persona = {
   name : "Rose",
   [symbol] : 27
}

console.log(Persona);// {name : "Rose"}
console.log(Persona[symbol]);//27

//Si se quiere tener 2 simbolos que compartan el mismo identificador es posible

let chica = Symbol.for('edad');
let chica1 = Symbol.for('edad');

console.log(chica1 == chica);//true
console.log(chica1 === chica);//true
