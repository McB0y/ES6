//Para determinar cuando usar un id compartido o un id único
//dependera de las necesidades que se tengan.

let symbol1 = Symbol.for('edad');
let symbol2 = Symbol.for('edad');
let symbol3 = Symbol.for('edad');

let persona = {
   name : "Tamaris"
};

function asignarEdad(persona) {
   let edadSymbol = Symbol.for('edad');//creo un símbolo en este contexto y seteo después
   persona[edadSymbol] = 27;//asignamos la edad al objeto.
}

asignarEdad(persona);

console.log(persona[symbol2]);//comprobamos con que valor de edad quedo la persona.

//Compartieron en symbolo por tanto:

//symbol1 = Symbol.for('edad') === symbol2 === symbol3

//console.log(persona[symbol1]); [symbol2] o [symbol3] 27 regresa la edad.








//Valores unicos.

let symbol = Symbol('edad');


let persona = {
   name : "Tamaris"
};

function asignarEdad(persona) {
   let edadSymbol = Symbol('edad');
   persona[edadSymbol] = 27;//asignamos la edad al objeto.
}

asignarEdad(persona);

console.log(persona[symbol]);//Undefined




// function asignarEdad(persona, int) {
//    let edadSymbol = Symbol('edad');
//    persona[edadSymbol] = int;//asignamos la edad al objeto.
// }


/* En este caso 'symbol' y 'edadSymbol' no comparten el mismo id, son únicos */




//Como ejemplo para demostrar que no se sobreescribe

let symbol = Symbol.for('edad');


let persona = {
   name : "Tamaris",
   edad : 30
};

function asignarEdad({}) {
   let edadSymbol = Symbol.for('edad');//compartiendo el id de symbol
   persona[edadSymbol] = 27;//asignamos la edad al objeto.
}

asignarEdad(persona);

console.log(persona[symbol]);//27, Pudo acceder por medio de 'symbol' ya que comparten el identificador
console.log(persona['edad']);//30
