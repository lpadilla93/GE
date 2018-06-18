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
var mapOptions = {zoom: 18,
  center: myLatlng,
   styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
}
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
      }

      function onError(error) {
      alert('code: ' + error.code + '\n' +
      'message: ' + error.message + '\n');
    }
}