var $$ = Dom7;
var servidor="http://192.168.100.3:81/Emapa/";

//Contenido Pull to refresh
$(document).ready(function(e){
	CargarNoticias();

});
function CargarNoticias(){
	$.ajax({
    //Cambiar a type: POST si necesario
    type: "GET",
    // Formato de datos que se espera en la respuesta
    dataType: "json",
    // URL a la que se enviará la solicitud Ajax
    url: servidor+"Emapai_select_noticias.php",


})
 .done(function( data, textStatus, jqXHR ) {
     if ( console && console.log ) {
        
        var $ptrContent = $$('.ptr-content');
          $ptrContent.find('.list').html("");
         console.log( "La solicitud se ha completado correctamente." +data);
         var itemHTML="";
             for(var i=0 in data.datosNoticias) {
               itemHTML ='<div class="card demo-card-header-pic">'+
                '<div style="background-image:url('+data.datosNoticias[i].FOTO+')" class="card-header align-items-flex-end">'+data.datosNoticias[i].TITULAR+'</div>'+
                '<div class="card-content card-content-padding">'+
                '<p class="date">Publicado '+data.datosNoticias[i].FECHA+'</p>'+
                '<p>'+data.datosNoticias[i].CUERPO.substr(0,123)+'...</p>'+
                '</div>'+
                '<div class="card-footer"><a href="#" class="link">Leer más</a></div>'+
                '</div>'+
                '</div>'+itemHTML;
   
        }
              $ptrContent.find('.list').prepend(itemHTML);
     }
 })
 .fail(function( jqXHR, textStatus, errorThrown ) {
     if ( console && console.log ) {
         console.log( "La solicitud a fallado: " +  textStatus);
     }
});
}
var $ptrContent = $$('.ptr-content');
$ptrContent.on('ptr:refresh', function (e) {
CargarNoticias();
    // When loading done, we need to reset it
    app.ptr.done(); // or e.detail();
});
//Fin Pull to refresh