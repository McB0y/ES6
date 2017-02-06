/*



Fuente: MDN visite https://developer.mozilla.org
handler:

El objeto que contiene trampas.

traps:

La lógica del handler que provee acceso, puede ser visto como una trampa.

target:

Es un objeto que el proxy virtualiza,
independientemente de que sea extensible o configurable
las propiedades son verificadas a través del target.

NOTE: var p = new Proxy(target, handler); es siempre nuestra sintaxis.

COMO PROPIEDADES:

traget:
Cualquier tipo de objeto (función, nativos, arreglos, objetos, proxys).

handler:
Objeto cuyas propiedades son funciones que definen el
comportamiento del proxy cuando se realiza una operación sobre él.


"El handler o trampa es opcional. Si no se ha definido una trampa,
el comportamiento predeterminado es reenviar la operación al destino".

NOTE: Se muestran las trampas disponibles:

- "handler.getPrototypeOf()"

[Dejo el ejemplo al terminar con la descripción de las propiedades].

Una trampa para Object.getPrototypeOf.

- "handler.setPrototypeOf()"

Una trampa para Object.setPrototypeOf.

- "handler.isExtensible()"

Una trampa para Object.isExtensible.

- "handler.preventExtensions()"

Una trampa para Object.preventExtensions.

- "handler.getOwnPropertyDescriptor()"

Una trampa para Object.getOwnPropertyDescriptor.

- "handler.defineProperty()"

Una trampa para Object.defineProperty.

"handler.has()"

Una trampa para el operator "in".

- "handler.get()"

Una trampa para la obtencion de los valores de las propiedades.

- "handler.set()"
Una trampa para configurar el valor de las priedades.

- "handler.deleteProperty()"

Una trampa para el operador "delete"

- "handler.ownKeys()"

Una trampa para "Object.getOwnPropertyNames"
y "Object.getOwnPropertySymbols".

- "handler.apply()"


Una trampa para una "function call" (o llamada de función).

- "handler.construct()"

Una trampa para el operador "new".

Esto es un ejemplo de como funcionan los métodos del PROXY API.

Desc:

Interceptions

Nuestra trampapuede interseptar las siguientes operaciones:

Object.getPrototypeOf()
Reflect.getPrototypeOf()
__proto__
Object.prototype.isPrototypeOf()
instanceof




Invariantes

Si se infringen los siguientes invariantes, el proxy lanzará un TypeError:

El método getPrototypeOf debe devolver un objeto o null.

Si el objetivo no es extensible, el método:

"Object.getPrototypeOf" (proxy) debe devolver el mismo valor que:

"Object.getPrototypeOf (target)."



EJEMPLOS:

Básico.

var obj = {};
var proto = {};
var handler = {
    getPrototypeOf(target) {
        console.log(target === obj);   // true
        console.log(this === handler); // true
        return proto;
    }
};

var p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto);    // true



Cinco maneras de activar la trampa "getPrototypeOf"


var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype, // true
    p.__proto__ === Array.prototype,               // true
    Array.prototype.isPrototypeOf(p),              // true
    p instanceof Array                             // true
);

2 Tipo de excepción


1.-


var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return 'foo';
    }
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null



2.-

var obj = Object.preventExtensions({});
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return {};
    }
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value




"UNA VEZ MÁS YA QUE ES UNA PARTE CLAVE, 'EL HANDLER ES U OBJETO,
CUYAS PROPIEDADES SON FUNCIONES QUE DEFINEN EL COMPORTAMIENTO DEL PROXY,
CUANDO UN OPERADOR REALIZA UNA OPERACIÓN SOBRE EL' ".


La documentación no es propia, y este archivo es una referencia
rápida de los ejemplos que puedes encontrar en la Mozilla Developer Network.
con el nombre : Proxy "en el idioma original (Inglés)".


NOTE: ESTA API EN CONJUNTO CON SYMBOL Y REFLECT PUEDEN SER MUY PODEROSAS!
*/
