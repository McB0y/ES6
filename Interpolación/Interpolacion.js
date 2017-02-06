/*

Interpolación de variables:

*/

//En ES5 y anteriores se debian de concatenar los textos
//Apartir de ES6 se pueden interpolar `${variable}` por ejemplo:

var interpolando = (param1, param2) =>{
   console.log(`Estamos interpolando el ${param1}, con el ${param2}`);
}
interpolando("Primero", "Segundo");
