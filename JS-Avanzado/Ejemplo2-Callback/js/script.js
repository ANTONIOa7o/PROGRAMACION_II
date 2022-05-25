/*
-------------------call back------------------


Es un función la cual es pasada con unos argumentos a otra función, con la finalidad
que vuelva a "ser llamada". 
Podemos entender dicha función como que acepta otras funciones donde sus argumentos son 
aceptados como orden-superior (Hight-order), que sin duda será esa función la que establecerá
la lógica de desarrollo.

Poqué necesitamos de una funcion como call back?
El aumento de el uso de aplicaciones, peticiones, ..etc, de forma asincrona, hace que necesitemos
que alguna de nuestras operaciones comienzen solo despues de que se hayan complentado otras funciones.
Debido a que solitamos datos desde otras fuentes, ej APi, no siempre nos garantiza un tiempo estimado o desconocemos
dicho tiempo. Así pues para estos casos, esperar respuesta, no nos oblique a tener que recargar la pagina.


*/

function solicitudServidor(consulta, callback){

    setTimeout(function(){
        var respuesta = consulta + "lleno";
        callback(respuesta);},5000);
}

function obtenerResultado(resultados){

    console.log("Respuesta del servidor: " + resultados);

}
solicitudServidor("El vaso esta medio " ,obtenerResultado);

//------------------------------------>

const ciudades =['Londre','New York',' Madrid', 'Paris', 'Viena'];

ciudades.forEach(ciudad =>{//Recorrido de funcion
    console.log(ciudad);
});
console.log('--------------------');



function callback(ciudad){//Recorrido llamado a la funcion
   console.log(ciudad);
}
ciudades.forEach(callback);
console.log('-----------------------');

function nuevoPais(pais, callback){

    setTimeout(function(){
        ciudades.push(pais);
        callback();
    },6000)
}

function mostrarPaises(){

    setTimeout(function(){
        let html =""
        ciudades.forEach(function(ciudad){
            html+=`<li>${ciudad}</li>`;
        });
        document.getElementById('resultado').innerHTML = html;
    },4000);
}
nuevoPais('Alemania',mostrarPaises);
mostrarPaises();