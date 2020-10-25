/** --------------------------------------------------------------------------------------------------------------------
 * Initialization
 */

if( 'undefined' === typeof window){
  importScripts('uris.js');
}

var CACHE_NAME = 'yagolopez-root-sw-v5';

// Urls containing strings in whitelist will be bypassed by the service worker. They wont be served by the SW.
var WHITE_LIST = ['wewebcams', 'openweathermap', 'meteociel', 'meteogram', 'googleapis'];

/** --------------------------------------------------------------------------------------------------------------------
 * Service worker registration
 */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('yagolopez-root-sw-v5.js', {scope: '/'}).then(function(registration) {
    // console.log('sw: registration ok, scope: ', registration.scope);
  }).catch(function(err) {
    console.error(err);
  });
}
/** --------------------------------------------------------------------------------------------------------------------
 * 'Install' event. Write files to browser cache
 *
 * @param {string} Event name ('install')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // console.log('sw: installing files into cache');
        return cache.addAll(URIS_TO_CACHE);
      })
      .then(function () {
        return self.skipWaiting();
      })
  )
});
/** --------------------------------------------------------------------------------------------------------------------
 * 'Activate' event. Service worker is activated
 *
 * @param {string} Event name ('activate')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('activate', function (event) {
  // A call to claim() forces a "controllerchange" event on serviceWorker
  event.waitUntil(self.clients.claim());
  console.info('sw: service worker installed and activated');
});
/** --------------------------------------------------------------------------------------------------------------------
 /**
 * Helper fn. If a url is in WHITE_LIST then avoid loading it through the service worker
 * Avoids CORS problems

 * @param url
 * @returns {boolean}
 */
var isInWhiteList = function (url) {
  var i;
  for (i = 0; i < WHITE_LIST.length; i++) {
    if (url.indexOf(WHITE_LIST[i]) > -1) {
      return true;
    }
  }
};
/** --------------------------------------------------------------------------------------------------------------------
 * Finds out if image request it content-type 'image'
 * @param fetchEvent
 * @returns {boolean}
 */
var isImageRequest = function (fetchEvent) {
  var request = fetchEvent.request;
  var url = request.url;
  var headers = request.headers;
  var result = false;
  Array.from(headers.entries()).forEach(function (entry) {
    if (entry[1] === 'image/webp,image/*,*/*;q=0.8'){
      // console.info('url image request: ' + url);
      // console.log(entry[0]+ ': ' + entry[1]);
      result = true;
    }
  });
  return result;
};
/** --------------------------------------------------------------------------------------------------------------------
 * Finds out if is html request
 * @param fetchEvent
 * @returns {boolean}
 */
var isHtmlRequest = function (fetchEvent) {
  var request = fetchEvent.request;
  var url = request.url;
  var headers = request.headers;
  var result = false;
  Array.from(headers.entries()).forEach(function (entry) {
    if (entry[1].indexOf('text/html') > -1){
      // console.info('html url request: ' + url);
      // console.log(entry[0]+ ': ' + entry[1]);
      result = true;
    }
  });
  return result;
};
/** --------------------------------------------------------------------------------------------------------------------
 * Finds out if the browser is in onLine mode
 */
var isOnline = function () {
  return navigator.onLine
};
/** --------------------------------------------------------------------------------------------------------------------
 * 'Fetch' event. Browser tries to get resources making a request
 *
 * @param {string} Event name ('fetch')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('fetch', function(fetchEvent) {
  var request = fetchEvent.request;
  var url = request.url;

  // Urls in white list are not processed by service worker in online mode
  if (isOnline() && isInWhiteList(url)) {
    return;
  }
  // if (isOnline() && isImageRequest(fetchEvent)) {
  //   return;
  // }

  fetchEvent.respondWith(
    caches.match(request)
      .then(function(response) {
        if(response){
          // 1) if request is cached, response will be returned from browser cache
          // console.log('request is cached: ', fetchEvent.request.url);
          return response;
        } else {
          // 2) if request is not cached, to fetch response from network
          // console.log('request is not cached: ', fetchEvent.request.url);
          return fetch(request /*,{mode: 'no-cors'} */)
        }
      })
      .catch(function (error) {
        var result;
        // console.error('Request not found in cache', error);
        if (isHtmlRequest(fetchEvent)) {
          // if request is not cached nor network available and is html request, return fallback html page
          result = caches.match('/index.html');
        }
        if (isImageRequest(fetchEvent)) {
          // if request is not cached nor network available and it s image request, return fallback image
          result = caches.match('img/theme/offline-img.png');
        }
        return result;
      })
  )
});


