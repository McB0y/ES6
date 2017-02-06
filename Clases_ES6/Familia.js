/*

Simulando a la Familia.
-Se utiliza instanceof y typeof verificando que todos los objetos que sean creados mediante
este script sean instancias de Familia

note: si se crea un Nieto ----> sera instancia de Nieto de Hijo y de Familia.
      "           " Hijo  ----> sera instancia de Hijo y de Familia pero no de Nieto.
      "           " Familia --> sera Instancia sólo de Familia.
      TODOS SON DE TYPO "OBJETOS".
*/



class Familia {
   constructor(apellidoPaterno, ojos, nariz, estatura, complexion) {
      this.apellidoPaterno = apellidoPaterno;
      this.ojos = ojos;
      this.nariz = nariz;
      this.estatura = estatura;
      this.complexion = complexion;
   }

   reunirse(){
      console.log("Reuniones familiares son una tradición");
   }

   apoyarse() {
      console.log("La familia siempre se apoya...");
   }

};


class Hijo extends Familia {
   constructor(apellidoPaterno, ojos, nariz, estatura, complexion, nombre, profesion, hijos) {
      super(apellidoPaterno, ojos, nariz, estatura, complexion, nombre, profesion, hijos);
      this.nombre = nombre;
      this.profesion = profesion;
      this.hijos = hijos;
   }

    trabajar() {
      console.log("Trabajando muy duro diariamente!");
   }

};


class Nieto extends Hijo {
   constructor(apellidoPaterno, ojos, nariz,
      estatura, complexion, nombre, profesion, hijos, empleado) {
   super(apellidoPaterno, ojos, nariz,
      estatura, complexion, nombre, profesion, hijos, empleado);
   this.empleado = empleado;
   }
    visitarAbuelos() {
      console.log(this.nombre + " Vista a los abuelos.");
   }

    trabajo(estado) {
      if (estado == "empleado") {
         console.log(this.nombre + " es de los nietos más grandes ya trabaja");
      }else {
         console.log("Es muy pequeño aun va a la escuela");
      }
   }

}
