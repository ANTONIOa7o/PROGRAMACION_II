/*
window.promt => Será un diagolo que abrimos con el usuario
donde contiene un un cuadro de texto de una linea, 
un boton "Cancel" otro Ok(Aceptar) y devuelve un STRING,de aquel
dato que el usuario ha introducido. No siempre trabajaremos los
datos en cadena de texto(string), tendremos herramientas para
la conversion a otro dato.
*/

var nombre=window.prompt("Introduce tu nombre:");
var apellidos=window.prompt("Introduce Apellidos:");
var edad=window.prompt("Introduce tu edad:");

/*  document.write(
"<h2>Hola</h2>"+"<br>"+"mi nombre es:"+nombre+
"  mis apellidos son:"+apellidos+"  y tengo:"+edad+"años"
); */ 
/*
El caracter backslash \n en ambito html, no ejecutará, si lo 
hará en alert o console.
*/
console.log(
    "Hola"+"\n"+"mi nombre es: "+nombre+" "+
    "mis apellidos son: "+apellidos+" "+ "y tengo: "+edad+"años"
    );