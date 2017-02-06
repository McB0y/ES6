/*
   McB0y: Al igual que los los simbolos y el API Reflect
          La proxy API nos ayuda con la metaprogramación
          algo que anteriormente en JS era bastante enredoso
          de poder manipular.


          En específico nos ayuda a envolver objetos, funciones
          o lo que sea en realidad, poniendo trampas al intentar
          acceder a las propiedades. Puedes verlo como un filtro
          que deberas pasar para poder acceder al objeto.
*/


var boy ={
   name: "Oliver",
   age: 25
}

//El constructor espera 2 argumentos
//el primeros es el "target", el segundo el "handler"
//este segundo es el que contiene toda la lógica de nuestro proxy.



// el handler puede crear todas las trampas que quieras,
//pues es el PROXY lo que recibe el get es el objetivo
//"el objeto", y el segundo es la propiedad a la que accesar.




var handler = {
   get : function(target, name) {
      return name in target ?  target[name] : "No existe";
   }

   set : function(target, property, value) {//exacactamente igual que el Reflect API

   }
}

var proxy = new Proxy(boy, handler);

console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.surname);


var persona = {
   name : "Ródrigo",
   surname : "Vázquez",
   greet(){
      console.log("Hey everyone!");
   }
};

var handler = {
   get : function(target, name) {
   return name in target ? target[name] : "No existe";
   },
   set : function(target, property, value) {// === Reflect API
   if (value.length >= 4) {
      Reflect.set(target, property, value);
      }
   }
};

var proxy = new Proxy(persona , handler);
proxy.name = "R";
console.log(proxy.name);//Ródrigo
proxy.name = "Raphael";
console.log(proxy.name);//Raphael .




//Proxys como prototipos.
var proxy = new Proxy({} , handler);

console.log(proxy.name);//No existe


Reflect.setPrototypeOf(persona, proxy);
console.log(persona.name);//Raphael
console.log(persona.hobbies);//No existe

//Es de esta forma que tenemos protección por parte del proxy.

/*Los proxys pueden envolver a otros proxys.*/


var protoHandler = {
   get : function(target, name) {
   return name in target ? target[name] : "No existe";
   }
};

let proxy = new Proxy({}, handler);
let protoProxy = new Proxy(proxy, protoHandler);
Reflect.setPrototypeOf(persona, protoProxy);
console.log(proxy.hobbies);//"No existe".




/*Podemos también proteger funciones en mediante proxys*/


function log(mensaje) {
   console.log(`logueo correcto se desplego el msg ${mensaje}.`);
}


let handler = {
   apply : function(target, thisArgs, argumentsList) {
      if(argumentsList.length.length == 1){
         return Reflect.apply(target, thisArgs, argumentsList);
      }
   }
};

var proxy = new Proxy(log, handler);
//ejecutamos el proxy como una función.

proxy("Hola");//logueo correcto se desplego el msg Hola.
proxy("Hola", "Me logueo");//
//no produce nada por que no hay algo que maneje
//que si hay mas de 1 argumento haga algo





/*Tenemos otro tipo de proxys "REMOVIBLES" que nos permiten
deshacernos de la funcionalidad que tienen nuestros proxy
basta con mandar a llamar al método revoke().*/

var animal = {
   name : "león",
   raw(){
   console.log("Raw!!!!!");
   }
};

var handler = {
   get : function(target, name) {
      return name in target ?  target[name] : "No existe";
   }
}

//destructurando el objeto tenemos :

let {proxy, name} = Proxy.revocable(animal, handler);

console.log(proxy.name);//León
revoke();
console.log(proxy.name);//ERROR el proxy ya fue removido.
