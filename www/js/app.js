// Dom7
function SalirSesion(){ 
  //localStorage.clear();
  //app.exitApp();
  app.confirm('¿Quiere salir de la aplicación?', 'Atención!', function () {
                navigator.app.exitApp();
            });
} 
// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'e_sismert', // App name
  firstNames: 'e_sismert', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});

//Contenido Pull to refresh

var $ptrContent = $$('.ptr-content');
var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];
$ptrContent.on('ptr:refresh', function (e) {
  // Emulate 2s loading

    var picURL = 'http://lorempixel.com/88/88/abstract/' + Math.round(Math.random() * 10);
    var song = songs[Math.floor(Math.random() * songs.length)];
    var author = authors[Math.floor(Math.random() * authors.length)];
    var itemHTML =
       '<div class="card demo-card-header-pic">'+
                '<div style="background-image:url(https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350)" class="card-header align-items-flex-end">Journey To Mountains</div>'+
                '<div class="card-content card-content-padding">'+
                '<p class="date">'+'Publicado 14/06/2018'+'</p>'+
                '<p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>'+
                '</div>'+
               '<div class="card-footer"><a href="#" class="link">Leer más</a></div>'+
              '</div>';
    // Prepend new list element
    $ptrContent.find('.list').prepend(itemHTML);
    // When loading done, we need to reset it
    app.ptr.done(); // or e.detail();
});
//Fin Pull to refresh

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen app.name
  app.dialog.alert('Hello World!'+app.firstNames);
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  //app.dialog.alert('Bienvenido: ' + username + '<br>Password: ' + password);
  app.dialog.alert('Bienvenido: ' + username);
});