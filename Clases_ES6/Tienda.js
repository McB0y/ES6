/*
   McB0y.
   ES6: Clases en  Javascript.
                              "Factory Pattern".

   Puedes consultar la siguiente bibliografía para más ejemplos:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.
*/


class Tienda {
   constructor(nombre) {
      this.nombre = nombre;
      this.tipo = [];//El this es Forsozo.
   }

   addServicio(servicio, estatus){
      this.tipo[servicio] = estatus;
   }

   borrarServicio(servicio){
      delete	this.tipo[servicio];
   }

   estadoDeServicio(servicio){
      return	this.tipo[servicio];//Regresa el estado del servicio
   }

   get Nombre(){
      return this.nombre;
   }
   set Nombre(nombre){
      this.nombre = nombre;
   }
};


//Instancias de la clase


var establecimiento = new Tienda ("Michellin");
establecimiento.addServicio("Cambio de aceite", "Vigente");
establecimiento.addServicio("Chequeo general", "Vigente");
establecimiento.addServicio("Balanceo", "Vigente");
establecimiento. addServicio("Motocicletas" , "Fuera de servicio");
establecimiento.addServicio("Cambio de motor 2 V", "Fuera de servico");


var tienda = new Tienda("Walmart");
tienda.addServicio("Pago de tarjetas", "Vigente");
tienda.addServicio("Pago de otros Servicios", "Vigente");
tienda.addServicio("Venta de comida", "Fuera de servicio")
