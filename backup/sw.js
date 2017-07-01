var cacheName = 'yls-portfolio';
var swRegistration = null;
var serviceWorkerRergistration = null;
var applicationServerPublicKey  = 'BPCS59sV3blCJMFBTmnWnNHaZQyg2nWK0oij40Ax-rUjeH4VV9ILBzyuaZh8TZVqen9J9SV5wTk95JPXV7sf1t0';
var privateKey = 'NPjlZ845RzLeuZvI2cRIRcMaX5E3QJBg7mGSIoNaSsg';

var filesToCache = [
  '/',
  'manifest.json',
  'index.html',
  'proyectos.html',
  'contacto.html',
  'contacto-iframe.html',
  'favicon.ico',

  // css
  '/css/bootstrap-3.0.3.min.css',
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

if ('serviceWorker' in navigator && 'PushManager' in window){
  navigator.serviceWorker.register('sw.js').then(function (swReg) {
    swRegistration = swReg;
    console.log('sw: service worker registered');
    initialiseUI();
  }).catch(function (err) {
    console.error('service worker error', err);
  })
} else {
  window.alert('Service Worker or Push Messaging not supported by browser');
}

self.addEventListener('install', function (e) {
  console.log('sw: installing');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('sw: caching app shell');
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener('activate', function(e) {
  console.log('sw: activating');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('sw: removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
  console.log('sw: fetching', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

function initialiseUI() {
  // Set the initial subscription value
  swRegistration.pushManager.getSubscription().then(function(subscription) {
    isSubscribed = !(subscription === null);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
    }

  });
}
