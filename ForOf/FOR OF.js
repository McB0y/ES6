/*
Ciclo FOR OF:
*/


//Podemos usar distintas variantes de ciclo para recorrer un arreglo
//pero entre las más comunes estan los ciclos for each, for in  y for of
//Este ultimo viene con la especificación ES6, u uso es más o menos así:

var gradoAcademico = ["Primaria", "Secundaria", "Media superior", "Superior", "Postgrado"];


//For Each
gradoAcademico.forEach(function(elemento,indice ) {
   console.log("Grado académico : " + elemento);
});


//For In
for(let i in gradoAcademico){
  console.log(gradoAcademico[i]);
}


//For OF ES6
for(let nivel of gradoAcademico){
  console.log(nivel);
}


/*Rotular Ciclos con for of es muy fácil tomando de ejemplo lo anterior:*/

var oso = ["Pardo", "Polar", "Grisley", "Mielero", "Panda", "Indú", "Hormiguero"];


rotulado: for(i of oso){
   if(i !== "Polar")
      {
         rotulado1: for(j of oso)
            if(j === "Mielero")
            {
               console.log("Saliendo del segundo ciclo!")
               break rotulado1;
            }
            else
               console.log(j);
      }
   else{
      console.log("Saliendo del primer ciclo!");
      break rotulado;
   }
}

/*
La salida :
Pardo
Polar
Grisley
Saliendo del segundo ciclo!
Saliendo del primer ciclo!
*/
