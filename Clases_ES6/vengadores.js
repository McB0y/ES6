class	Super{
    "constructor"(nombre, nivel, vigente){//Se vale pasar los métodos como cadenas, eso incluye al constructor
    this.nombre = nombre;
    this.nivel = nivel;
    this.vigente = vigente;
   }

}//fin de clase Heroe

class Vengadores extends Super{

   // let lugar = "Manhathan N.Y.C"; Marca error el Navegador
   // let lider = "Capitán America";

   constructor(nombre = "Tony Stark", nivel = 10, vigente = true, humano = true, frase = "Vamos Cap!") {
      super(nombre, nivel, vigente, humano, frase);
      this.humano = humano;
      this.frase = frase;
   }

   caracteristicas(){
      console.log(`${this.nombre} es uno de los super heroes
                 más fuertes del universo, ayudando a vencer
                 amenazas con su nivel de ${this.nivel}`);
   }

   "unidos"(){
      console.log("Vengadores Unidos!");
   }

}//Fin de Vengadores.


class Villanos extends Super {
   constructor(nombre, nivel, vigente, lugarPrision, nemesis) {
      super(nombre, nivel, vigente, lugarPrision, nemesis);
      this.lugarPrision = lugarPrision;
      this.nemesis = nemesis;
   }
   "reir"(){
      console.log("Muajajajaja! Muajajajajaja!");
   }

   "maldecir"(){
      console.log(`Te maldigo ${this.nemesis} te maldigo!`);
   }

   perderia(...arrayHeroes){//recibimos una lista en este rest
      let lista = [];
      lista = arrayHeroes;
      console.log(lista);
   }

   chance(heroeA, heroeB, heroeC){//mandamos por un spread
      console.log("Tiene oportunidades de derrotar a los siguientes heroes:");
      console.log(`${heroeA} no es muy fuerte perderia,
         ${heroeB} es fuerte pero no muy listo, ${heroeC} ha perdido contra el.`);
   }

}//Fin de Villanos

   let superHeroe = new Super("Hul", 8, false);
   let superVillano = new Super("Abominación", 6.5, false);
   let stark = new Vengadores();//parametros por defecto.
   stark.caracteristicas();
   let craneo = new Villanos("Craneo Rojo", 7, false, "Fortaleza", "Capitán America");
   let debiles = ["Pajaro Burlón", "Falco", "Ojo de alcón"];
   craneo.perderia("Pajaro Burlon", "Luke Cage", "Daredevil");//rest
   craneo.chance(...debiles)//SPREAD

   
