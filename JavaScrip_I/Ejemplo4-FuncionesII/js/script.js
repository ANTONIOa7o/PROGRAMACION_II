
/*
----------METODO: getElementById()---------------
Este metodo nos DEVUELVE EL ELEMENTO QUE TIENE EL ATRIBUTO 'Id', con el 
valor especificado. Siendo su uso extendido cuando queremos manipular u 
obtener informacion de un elemento en su Documento.


*/

function funcionesMath(){
document.getElementById('resultado').innerHTML=
"<label style='color: red'> Logaritmo: "+Math.log(1000)+"</label><br>"+
"Exponencial: "+Math.exp(8)+"<br>"+
"Raiz Cuadrada: "+Math.sqrt(9)+"<br>"+
"Potencia 2^8: "+Math.pow(2,8)+"<br>"+
"Valor Absoluto: "+Math.abs(-18)+"<br>"+
"Redondedo Medio: "+Math.round(6.458)+"<br>"+
"Random Semilla: "+Math.random()+"<br>"+
"Random 1 al 10: "+Math.random()*10+"<br>"+
"Valor Maximo: "+Math.max(8,4,6,9)+"<br>"+
"Valor Minimo: "+Math.min(8,4,6,9)+"<br>"+
"Coseno de Pi: "+Math.cos(Math.PI)
;}

function funcionesString(){
    var texto="JavaScript, estructuras de Cadena de Texto";
    document.getElementById('resultado').innerHTML=
    "Minusculas: "+texto.toLocaleLowerCase()+"<br>"+
    "Mayusculas: "+texto.toLocaleUpperCase()+"<br>"+
    "Localizar valor de : "+texto.indexOf("@")+"<br>"+
    "Longitud: "+texto.length+"<br>"+
    "Unicode: "+String.fromCharCode(980)+"<br>"+
    "Valor Unicode: "+texto.charCodeAt(texto.indexOf('J'))+"<br>";
    
}

function funcionesDate(){
    var fecha = new Date();
    document.getElementById('resultado').innerHTML=
    "fecha: "+fecha.toLocaleDateString()+"<br>"+
    "hora: "+fecha.toLocaleTimeString()+"<br>"+
    "minutos: "+fecha.getMinutes()+"<br>"+
    "segundos: "+fecha.getSeconds()+"<br>"+
    "milisegundos: "+fecha.getMilliseconds()+"<br>"+
    "Mes: "+ parseInt(fecha.getMonth()+1)+"<br>"+
    "Día: "+ parseInt(fecha.getDay()+1)+"<br>";
}