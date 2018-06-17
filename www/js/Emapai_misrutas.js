function LeerCoordenadas(){
  navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });
      function onSuccess(position) {
      var lat=position.coords.latitude;
      var lang=position.coords.longitude;
      var myLatlng = new google.maps.LatLng(lat,lang);
      var origen = new google.maps.LatLng(0.3209778,-78.1189655);
       var destino = new google.maps.LatLng(0.33036,-78.1176419);
      //Google Maps
      var marcadores = [
        ['Punto1',0.3234035, -78.1197607],
        ['Punto2', 0.3241115, -78.1185249],
        ['Punto3',0.3243527,-78.1185861]
      ];
       var waypts = [];
        for (var i = 0; i < marcadores.length; i++) {
           var myLatlng = new google.maps.LatLng(marcadores[i][1],marcadores[i][2]);
            waypts.push({
              location:myLatlng,
              stopover: true
          });
        }
var mapOptions = {zoom: 18,center: myLatlng}
var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//var marker = new google.maps.Marker({position: myLatlng,map: map});
//Ruta

var objConfigDR={
  map: map
  }
  var objConfigDS={
    origin:origen,
    waypoints: waypts,
    destination:destino,
    travelMode:google.maps.TravelMode.WALKING
  }
 var ds=new google.maps.DirectionsService();
    var  dr= new google.maps.DirectionsRenderer(objConfigDR);
    ds.route(objConfigDS,fnRutear);
    function fnRutear(resultados,status){
      if(status=="OK"){
        dr.setDirections(resultados);
      }else{
        alert("Error"+status);
      }

    }
/*
      var infowindow = new google.maps.InfoWindow();

      var myLatlng = new google.maps.LatLng(lat=0.3516264,lang=-78.1187658);
      var mapOptions = {zoom: 15,center: myLatlng};
      
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

         var marker, i;
          for (i = 0; i < marcadores.length; i++) {  
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
              map: map
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                infowindow.setContent(marcadores[i][0]);
                infowindow.open(map, marker);
              }
            })(marker, i));
          }

      var mapOptionsUb = {zoom: 18,center: myLatlng};
      var mapUb = new google.maps.Map(document.getElementById('map-canvas-ubicacion'), mapOptionsUb);
      var markerUb = new google.maps.Marker({
          position: myLatlng,map: mapUb
        });
      var contentString = '<div tyle="top: 9px; position: absolute; left: 15px; width: 203px;" class="gm-style-iw">'+
        '<div style="display: inline-block; overflow: auto;">'+
          '<div><b>Ilustre Municipio de San Miguel de Ibarra</b></div>'+
          '<div>García Moreno y Simon Bolívar Esquina</div>'+
          '<div>Calle García Moreno 6-31</div>'+
          '<div>Ibarra</div>'+
          '<div>Ecuador</div>'+          
          '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        markerUb.addListener('click', function() {
          infowindow.open(mapUb, markerUb);
        });
*/

      }

      function onError(error) {
      alert('code: ' + error.code + '\n' +
      'message: ' + error.message + '\n');
    }
}