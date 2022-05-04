var texto="Hola";
var numero=8.4;
var booleana=true;

document.write(texto+"<br>");
document.write(numero+"<br>");
document.write(booleana+"<br>");
/*
Concatenacion de la variable y caracteres de escape
+ es utilizado como elemento de concatenacion(agrega), asi
mismo tendremos otros caracteres de escape o tambien llamados
caracteres backslash, siempre acompañados por el simbolo
'/'. Se usa para resolver la representacion desde JavaScript
con simbolos que no pueden ser representados o incluidos de forma
normal entro del string, que define la variable

Secuencia de Escape                 RESULTADO
    \'                          Comilla simple
    \"                          Comilla doble
    \\                          Simbolo /
    \n                          Salto de linea
    \t                          Tabulacion
    +" "+                        espacio concatenado
*/
alert(texto+"\n"+numero+"\n"+booleana);