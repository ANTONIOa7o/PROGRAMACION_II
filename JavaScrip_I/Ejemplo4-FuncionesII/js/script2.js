


function mensaje(){
    
    var miNombre =document.getElementById('nombre').value;
 
    var misApellidos =document.getElementById('apellidos').value;

    document.getElementById('resultado').innerHTML="Acceso Autorizado a:" 
    + miNombre+" "+misApellidos+" \n"+ "Bienvenido al Área Virtual";



}