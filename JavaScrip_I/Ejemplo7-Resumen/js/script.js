var estiloBorde = false; //Falso no tiene borde
var estiloColor = false; //Falso no tiene color
var estiloSombra = false; //Falso no tiene sombra

function borde() {
  if (estiloBorde == false) {
    document.getElementById("cuadrado").style.border = " 5px solid #0d47a1";
    estiloBorde = true;
  } else {
    document.getElementById("cuadrado").style.border = "none";
    estiloBorde = false;
  }
}

function color() {
  if (!estiloColor) {
    document.getElementById("cuadrado").style.backgroundColor = "pink";
    estiloColor = true;
  } else {
    document.getElementById("cuadrado").style.backgroundColor = "#2196f3";
    estiloColor = false;
  }
}
function sombra() {
  if (!estiloSombra) {
    document.getElementById("cuadrado").className = "sombra";
    //estiloSombra = true;
  } else {
    document.getElementById("cuadrado").className = null;
    //estiloSombra=false;
  }
  estiloSombra = !estiloSombra;
}
