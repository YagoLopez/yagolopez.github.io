// todo: seems the 'install' event is launched each time the page is reloaded, which cause an indeterminated error
// todo: split filesToCache in two arrays for easy configuration and merge them

var cacheName = 'ylp';

var filesToCache = [

  // infrastructure
  '/',
  'index.html',
  'proyectos.html',
  'contacto.html',
  'contacto-iframe.html',
  'manifest.json',
  'ylp-sw.js',
  'favicon.ico',
  'img/theme/offline-img.png',

  // css
  '/css/bootstrap.min.css',
  // '/css/font-awesome.min.css',
  '/css/smarton.css',
  '/css/colors/color-default.css',
  '/css/themecss/animate.css',
  '/css/themecss/lightbox.css',

  // fonts
  // '/fonts/fontawesome-webfont.woff2?v=4.7.0',
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
  '/img/demo/p13.png',
  '/img/demo/landing2.png',
  '/img/demo/s14.png',
  '/img/demo/parallax-back9.jpg',
  '/img/demo/parallax-back10.jpg',
  '/img/demo/parallax-back2.jpg',
  '/img/screens/ml/ml-logo-big.png',
  '/img/screens/wca/portada.png',
  '/img/screens/bf/bf0rect.png',
  '/img/screens/sd/88.jpg'
];

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('ylp-sw.js').then(function() {
    console.log('sw: registration ok');
  }).catch(function(err) {
    console.error(err);
  });
}

// install (write) files to cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw: installing files into cache');
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // test if the request is cached
    caches.match(event.request).then(function(response) {
      // console.log('sw: feching file from cache: ', event.request.url);
      return response || fetch(event.request);
    }).catch(function (err) {
      // if request is not cached and  network is unavailable, return this image by default
      console.info(err, 'loading default image');
      return caches.match('img/theme/offline-img.png');
    })
  )
});



