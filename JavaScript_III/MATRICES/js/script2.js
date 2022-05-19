var indice = 0;
/*
A través de la función setInterval, podremos generar intervalos medido por medida de tiempo, establecida
Sintaxis:

    setInterval(function,tiempo-milisengundo-)
*/
var item = [
  "Peinado desenfadado 18€",
  "Corte Cromático cosmopolita 32€",
  "Retoque de Barba, pelo, coloracion y decoloracion 22€",
  "Cambio de Look!: Corte, color y Tratamiento Capilar 55€",
  "Renovación de Mirada! Pestañas, cejas, lobulos de ojo y tratamiento Facial 49€",
  "Tu mundo lleno de Alegria y Color..",
];

setInterval(muestraOfertas, 3000);
function muestraOfertas() {
  document.getElementById("salida").innerHTML = item[indice];
  indice++;

  if (indice >= item.length) {
    indice = 0;
  }
}
