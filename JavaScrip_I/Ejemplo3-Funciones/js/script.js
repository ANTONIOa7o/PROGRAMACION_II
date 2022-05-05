var n1 = parseInt(window.prompt("Introduce el primer numero"));
var n2 = parseInt(window.prompt("Introduce el segundo numero"));

function sumar(n1, n2) {
  //variable local
  var resultado = n1 + n2;
  alert("La suma es: " + resultado);
}
function restar(n1, n2) {
  alert("La resta es: " + (n1 - n2));
}
function multiplicar(n1, n2) {
  alert("La multiplicacion es: " + n1 * n2);
}
function dividir(n1, n2) {
  alert("La division es: " + n1 / n2);
}
