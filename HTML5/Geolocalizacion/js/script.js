var mapa;


function mostrar_mapa() {
    //Comprobar si el navegador del dispositivo soporta la geolocalizacion
    if (navigator.geolocation) {
        //obtener la posicion
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
    } else {
        alert("Tu dispositivo o navegador no accede a la geolocalizacion")
    }
    var opciones ={
        zoom:12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    mapa = new google.maps.Map(document.getElementById("resultado"),opciones); 

}
function mostrarLocalizacion(posicion) {
//obtener las coordenadas;
//var pos = new google.maps.Latlng(posicion.coords.latitud,posicion.coords.longitud);
//coordenadas CFC
var pos = new google.maps.LatLng(40.4348589, -3.6519818);
//mostrar la ubicacion con texto
var info = new google.maps.InfoWindow({map:mapa,position:pos,content:'Nos encontramos aqui'});
//pedir que nos centre el mapa
mapa.setCenter(pos);
}

function manejarError(error) {

        switch(error.code){
            case error.PERMISSION_DENIED:
            alert("Permiso Denegado");
            break;
            case error.POSITION_UNAVAILABLE:
                alert("No se detecta la ubicacion");
                break;
            case error.TIMEOUT:
                alert("Tiempo de espera agotado");
                break;
            case error.UNKNOWN_ERROR:
                alert("error desconocido #202#");
                break;



        }
}
//google.maps.event.addDomListener(window,'load',mostrar_mapa);
//<body onload="mostrar_mapa()">