
//funcion para encontrar mi ubicacion
function encuentrame(){
    var output = document.getElementById('map')

// verificar si el browser soporta geolocalizacion
if(navigator.geolocation){
    output.innerHTML = "<p> Su navegador soporta esta opción. </p><br><p> Por favor permita acceso a su ubicacion. </p>";
}else{
    output.innerHTML = "<p> Su navegador no soporta esta opción. </p>";
} 

//obtener latitud y longitud
function localizacion(posicion){

    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;

    output.innerHTML = "<p>Latitud: " + latitude + "<br>Longitud: " + longitude + "<p>";

    
        var direccion = posicion.coords.latitude + "," + posicion.coords.longitude;             //
        var mapa = "https://maps.googleapis.com/maps/api/staticmap?center="+ direccion + "%22&zoom=14&size=600x450&sensor=false&key=YOUR_:KEY";
        document.getElementById("mapholder").innerHTML = "<img src='"+mapa+"'>";    
    
        
}

function error(){
    output.innerHTML = "<p>No se puede obtener su ubicación<p>";
}
navigator.geolocation.getCurrentPosition(localizacion, error);


}
