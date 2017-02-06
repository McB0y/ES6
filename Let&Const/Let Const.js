let nombre = "Camila Carso Casillas";

if("true"){
  let nombre = "Sebas Domínguez Potter";
  console.log(nombre); //"Sebas Domínguez Potter"
}
 nombre = "Tadeo Porta Caballero";

console.log(nombre);//Cambio de: "Camila Carso Casillas"  a : "Tadeo Porta Caballero"

const AGES = [25,45,19];
console.log(AGES); //[25,45,19]

AGES.push(21);//Perfectamente valido!
console.log(AGES);//[25,45,19,15]
AGES[2] = 23;//como salida : [25,45,23,15] y es perfectamente valido!

AGES = "Cambiar del tipo" //ERROR!
AGES = {};//ERROR.
AGES = [];//ERROR.
//podemos manipular el array ya que sólo es una referencia, un apuntador hacia la memoria,
//pero no podemos cambiar o asignar nuevamente esa referencia a otra variable u otro valor.

const obj = {
  age : 23
};
console.log(obj);
obj.age = 34;//totalmente valido!

console.log(obj);


obj = [1,2,3,5]// ERROR.

obj = "Una cadena"//ERROR.

//Tendiramos el mismo caso para los objetos
