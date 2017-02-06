import {keyValue as key} from './external.js';//pueden usarse un alias.
import {test} from './external.js';
//o mandar a llamar ambas en una sola linea.
//import {keyValue,test} from './external.js';
import a from 'external.js;'//sabiendo que s´lo hay una
console.log(keyValue);
test();
console.log(keyValue);//solo se copia la referencia
console.log(a);//hace referencia a la variable 'a' desde el external.js




//Si quisieramos importar todo del archivo
//podemos hacerlo como viene a continuación:

import * as importe 'from external.js'
console.log(importe);//devuelve un objeto
