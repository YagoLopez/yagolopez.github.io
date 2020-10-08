// todo: seems the 'install' event is launched each time the page is reloaded, which cause an indeterminated error
// todo: split filesToCache in two arrays for easy configuration and merge them

var cacheName = 'yls-portfolio';

var filesToCache = [
  '/',
  'manifest.json',
  'index.html',
  'proyectos.html',
  'contacto.html',
  'contacto-iframe.html',
  'favicon.png',

  // css
  '/css/bootstrap.min.css',
  '/css/smarton.css',
  '/css/colors/color-default.css',
  '/css/themecss/animate.css',
  '/css/themecss/lightbox.css',

  // fonts
  '/fonts/font-awesome/css/font-awesome.css',
  '/fonts/font-awesome/css/fontawesome-webfont.woff2',
  '/fonts/google/raleway.css',
  '/fonts/google/1.woff2',
  '/fonts/google/2.woff2',
  '/fonts/google/3.woff2',
  '/fonts/google/4.woff2',

  // js
  '/js/jquery/jquery-2.2.4.min.js',
  '/js/themejs/jquery.smartmenus.js',
  '/js/bootstrap.min.js',
  '/js/themejs/SmoothScroll.js',
  '/js/themejs/jquery.waypoints.min.js',
  '/js/themejs/application.js',
  '/js/themejs/jquery.lightbox.min.js',

  // images
  // '/img/demo/p13.png',
  // '/img/demo/landing2.png',
  // '/img/demo/s14.png',
  // '/img/demo/parallax-back9.jpg',
  // '/img/demo/parallax-back10.jpg',
  //
  // '/img/screens/ml/ml-logo-big.png',
  // '/img/demo/parallax-back2.jpg'
];

if ('serviceWorker' in navigator) {

  debugger;
  test = navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log('sw: registration ok');
  }).catch(function(err) {
    console.log('sw: registration failed ', err);
  })
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      // console.log('sw: installing files into cache');
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // test if the request is cached
    caches.match(event.request).then(function(response) {
      console.log('sw: feching file from cache: ', event.request.url);
      // return response from cache or from network if is available
      return response || fetch(event.request);
    }).catch(function () {
      // if request is not cached nor network available return to index
      return caches.match('index.html');
    })
  )
});