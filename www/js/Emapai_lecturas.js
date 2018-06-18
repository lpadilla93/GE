var $$ = Dom7;
function ActivarCamara(){
	navigator.camera.getPicture(Exito, Fallo, { quality: 100, targetWidth: 1153, targetHeight: 385, 
                  allowEdit: true,correctOrientation: true, destinationType: navigator.camera.DestinationType.DATA_URL});
}
function Exito(imageData){
	var img= "data:image/jpeg;base64," + imageData;
	  Tesseract.recognize(img,{lang: 'eng',
    tessedit_char_whitelist: '0123456789'}).progress(function(message){ 
    	//alert(JSON.stringify(message));
	   }).then(function(result){ 
         var lectura =result.text.replace(/\D/g,'');
         alert(lectura);
            $$('#txt_lectura').val(lectura);
           
       })
}
function Fallo(message){

}
$$('.show-infinite-root').on('click', function () {
  app.progressbar.show('multi');
  setTimeout(function () {
    infiniteLoading = false;
    app.progressbar.hide();
  }, 3000);
});