// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [

["index.html", "c723d59d98866f47acee10bd22284fad"],
["js/bootstrap.min.js", "353240ad37d1b084a53b1575f8ce57da"],
["js/jquery/jquery-2.2.4.min.js", "2f6b11a7e914718e0290410e85366fe9"],
["js/themejs/SmoothScroll.js", "9082f19e179a0a115286d96005144658"],
["js/themejs/application.js", "b3c127b42afaf95b866b672087033b55"],
["js/themejs/jquery.lightbox.min.js", "2e3944cad1cb9bce401aeb3f8932b63e"],
["js/themejs/jquery.smartmenus.js", "f9f0535c1b8c556cea33082e436b18d8"],
["js/themejs/jquery.waypoints.min.js", "dfe0eedf8da578f4a4c43b05448c51d9"],
["manifest.json", "007d60849fb81c7fc15e45e5bd9fcab0"],
["proyectos.html", "6a8405e1a8240164d827ea019edbf92a"],
["contacto-iframe.html", "a1f19da8cef9f134d8f931cd1579e301"],
["contacto.html", "a98acb23f011ab9406f52291fcd40464"],

["css/bootstrap.css", "ddbe440a7c02b6e13c8ee074a63d774d"],
["css/bootstrap.min.css", "2b14b092cf35ffa8b17e806392291daf"], 
["css/colors/color-default.css", "d26f08f90db38d388eb653823b59662f"], 
["css/smarton.css", "aa2edd96245e29993dadcca6da4cbfa7"], 
["css/themecss/animate.css", "9064d32d2c123944ede7135b5103b734"], 
["css/themecss/flexslider.css", "e5352c5d5e5a8890bbc5d8798421f933"], 
["css/themecss/lightbox.css", "35599c20102e4c2de1ad67b63e822e92"], 
["css/themecss/portfolio.css", "80beec15e082bb2e77a5ba36409d77c7"], 
// ["css/themecss/revolution-slider.css", "59bd5294d75e06713233375e3a9ed976"],
["favicon.png", "58caa1fe47aa57d516963dfba40e05e7"],
["fonts/font-awesome/css/FontAwesome.otf", "87d8ca3ddc57e7d2da6226e480f90457"], 
["fonts/font-awesome/css/font-awesome.css", "ce7ddce81f9348ce54bec3b9202e93f0"], 
["fonts/font-awesome/css/font-awesome.min.css", "4fbd15cb6047af93373f4f895639c8bf"],
["fonts/font-awesome/css/fontawesome-webfont.eot", "32400f4e08932a94d8bfd2422702c446"], 
["fonts/font-awesome/css/fontawesome-webfont.svg", "f775f9cca88e21d45bebe185b27c0e5b"],
["fonts/font-awesome/css/fontawesome-webfont.ttf", "a3de2170e4e9df77161ea5d3f31b2668"],
["fonts/font-awesome/css/fontawesome-webfont.woff", "a35720c2fed2c7f043bc7e4ffb45e073"],
["fonts/font-awesome/css/fontawesome-webfont.woff2", "db812d8a70a4e88e888744c1c9a27e89"],
["fonts/font-awesome/fonts/FontAwesome.otf", "87d8ca3ddc57e7d2da6226e480f90457"],
["fonts/font-awesome/fonts/fontawesome-webfont.eot", "32400f4e08932a94d8bfd2422702c446"],
["fonts/font-awesome/fonts/fontawesome-webfont.svg", "f775f9cca88e21d45bebe185b27c0e5b"],
["fonts/font-awesome/fonts/fontawesome-webfont.ttf", "a3de2170e4e9df77161ea5d3f31b2668"],
["fonts/font-awesome/fonts/fontawesome-webfont.woff", "a35720c2fed2c7f043bc7e4ffb45e073"],
["fonts/font-awesome/fonts/fontawesome-webfont.woff2", "db812d8a70a4e88e888744c1c9a27e89"],
["fonts/glyphicons-halflings-regular.eot", "aa16cd35628e6dddf56e766c9aa4ae63"],
["fonts/glyphicons-halflings-regular.svg", "0a5c48c69a25a93e37ed62db813387fa"],
["fonts/glyphicons-halflings-regular.ttf", "47da44498fc073d9fff9ab0cdb0bef8e"],
["fonts/glyphicons-halflings-regular.woff", "5eae1f7217b606d3580dd70ac840fea1"],
["fonts/google/1.woff2", "bc8690c100dee3fb467e9eb2a7a06c97"],
["fonts/google/2.woff2", "9df70e06f12213abf1d6344542fcf73d"],
["fonts/google/3.woff2", "275f2f927d1aac059812e8c8db4e6a97"],
["fonts/google/4.woff2", "315abd0b9833d063a975515d59d7b4a9"],
["fonts/google/raleway.css", "7d883e865628237aad0d57b955810158"],
["img/favicon/apple-icon-114x114-dunplab-808.png", "3b5bde7c64df850f7384ec6c4e340f70"],
["img/favicon/apple-icon-144x144-dunplab-808.png", "4795502e4543b76289c675e475d6447a"],
["img/favicon/apple-icon-57x57-dunplab-808.png", "927310d47b1223232e241026a7945d4f"],
["img/favicon/apple-icon-72x72-dunplab-808.png", "7481abca4c7c2d429556d86a6d48c5b5"],
["img/demo/landing2.png", "d2bae88ae2119366b045ff25052ca249"],
["img/demo/p13.png", "7d65a37ada74bc1a45f840c0f0a49e15"],
["img/demo/parallax-back10.jpg", "d86405b2bc7a5a0f929756f10fd63721"],
["img/demo/parallax-back2.jpg", "9286e2258c531fae985de3ac83218a92"],
["img/demo/parallax-back9.jpg", "53c7c25e5b8e37b5f577d31231afb207"],
["img/demo/s14.png", "348be902f97701a817485fcdb02921a6"],

// ["img/screens/bf/bf0rect.png", "11db9a59980da42c4a5e3ad8e323d541"],
// ["img/screens/bf/bf1rect.png", "b7791bf23871b8274c7abdf394de33d0"],
// ["img/screens/bf/bf2rect.png", "ba6070a0388e97017419817a02698429"],
// ["img/screens/bf/bf3rect.png", "6caa659bd28acf57fe64a4c70ed3a3e1"],
// ["img/screens/bf/bf4rect.png", "d9d7dea1ec0bd279e58670c92134f51f"],
// ["img/screens/bf/bf5rect.png", "5eb7bb3a61ec64bd3a71f81b9765ffc8"],
// ["img/screens/bf/bf6rect.png", "14abc1f72fe2490deb67d0f20ce97ec6"],
// ["img/screens/bf/bf7rect.png", "f6bd9815295cd7fea73d626fa61866a4"],
// ["img/screens/ml/ml-logo-big.png", "66056a18976b83552e4b0ed3d1d49214"],
// ["img/screens/ml/ml-logo.png", "d319806cef5c2b32c63db624d4c2f6da"],
// ["img/screens/sd/88.jpg", "01127ca6ea1facba9a403dad703cc680"],
// ["img/screens/wca/Playa_La_Isla.jpg", "126b3f594b9c2d04065c503e769b101f"],
// ["img/screens/wca/Playa_La_Isla.psd", "e3ca40bfc04aa4a7fa8b471c0994a843"],
// ["img/screens/wca/Thumbs.db", "8e70d9910d3dfc115ee920f836e31a3d"],
// ["img/screens/wca/portada.png", "bd1515667808b05b608f0da10dba8e3e"],
// ["img/screens/wca/wca10rect.png", "fe58526b341a69252ebc1ad494dde634"],
// ["img/screens/wca/wca13rect.png", "9426bd63cdf6bdaba57513b44c2b2a99"],
// ["img/screens/wca/wca14rect.png", "1615a86408f80514070256a67977242c"],
// ["img/screens/wca/wca15rect.png", "8aa1adcbca93939deced7a7644175a9a"],
// ["img/screens/wca/wca16rect.png", "47597a4f503aec0c394ff8a226dd515e"],
// ["img/screens/wca/wca1rect.png", "3fd960ab3483b0825e93a92beedd789e"],
// ["img/screens/wca/wca2rect.png", "70583ed0320953e0c98f21853f0a6f0e"],
// ["img/screens/wca/wca3rect.png", "cbbbb51107d1c9d5ca86e599c4c7eecd"],
// ["img/screens/wca/wca5rect.png", "0be3045e7de3bc21f1fa552143682231"],
// ["img/screens/wca/wca6rect.png", "e62c634d36d1f4aadfe2a91872a392e3"],
// ["img/screens/wca/wca7rect.png", "dba25a22afe1ffca3e4d752e801818f0"],
// ["img/screens/wca/wca8rect.png", "652a09b9ad0f00a796076f50e1f8fe08"],
// ["img/screens/wca/wca9rect.png", "32fa4ff73f9e1f687f609656a7df7ab9"],

["img/theme/diag-heading.png", "e28d23f6a90dd1b393fd0d85b524ff80"],
["img/theme/timeline-bg.jpg", "7995653561898c231574c76263956742"],
["img/theme/who-thumb.jpg", "10ffbdf83abac4d837c24ce36db86e00"]

// ["js/bootstrap.js", "cf1cf2fce27179c0de8a71c73b378f07"],
// ["js/themejs/helper-plugins/jquery.ba-throttle-debounce.min.js", "97669983f6540f2badeef6ab07e5b637"],
// ["js/themejs/helper-plugins/jquery.mousewheel.min.js", "25db04e9daee1c00f6ca337537c32c01"],
// ["js/themejs/helper-plugins/jquery.touchSwipe.min.js", "4224c565891e1902a10fc394bf3c6448"],
// ["js/themejs/helper-plugins/jquery.transit.min.js", "537c384c5a7ee3c0ee095ec6860aa3cf"],
// ["js/themejs/jquery.flexslider-min.js", "7df2e9deaf2dacc2260cea55341f1827"],
// ["js/themejs/jquery.flexslider.js", "2f20984be7fafa6df3cea1cb3b8dce41"],
// ["js/themejs/jquery.smartmenus.min.js", "c40bbb90e3c4871cdebbb369740efd6f"],
// ["js/themejs/jquery.stellar.js", "2383f66a0caac5f9400bae81ed09358e"],
// ["js/themejs/jquery.stellar.min.js", "1ce4ee7bb291b3d53147982ce64863fa"],
// ["js/themejs/jquery.validate.min.js", "3d354a1deb344d62e1f70a825272b4af"],

];

var cacheName = 'yago-lopez-portafolio-' + (self.registration ? self.registration.scope : '');

var ignoreUrlParametersMatching = [/^utm_/];

// Service worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('yagolopez-root-sw.js').then(function() {
    console.log('sw: registration ok');
  }).catch(function(err) {
    console.error('sw: registration failed ', err);
  })
}

var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







