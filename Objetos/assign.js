/*

Object.assign() :
Nos permite pasar todas las propiedades y
métodos de distintos objetos a un objeto en concreto,
enparte nos permite sustituir a métodos para la
extensión de objetos.

*/

var cuenta = {cliente: "Banco Monetario"};
var alimentos = {nombre: "Barbacoa", cantidad: '1kg'};
var bebidas = {tipo: "Refresco", sabor: "Cola"};
var persona = {nombre : "Camila", apellido : "Cabello", maneja :function() {
   console.log("Maneja un Audi!");
}};

/*
Podemos asignar todas las propiedades y metodos
de cualquier objeto a otro utilizando assign() y este
recibe como primer parametro el objeto al que se asignaran
las propiedades y métodos, como demas parámetros
los objetos que queramos asignar a nuestro primer objeto
*/

//cuenta sera ahora el objeto maestro, pero podemos guardar una referencia para evitar confusiones.
var objContenedor = Object.assign(cuenta, alimentos, bebidas,persona);

objContenedor.extra = "Propiedad extra!";
objContenedor.definicion = function() {
console.log("Me defino a mi mismo!");
}


console.log(cuenta.tipo);
console.log(objContenedor.definicion());
