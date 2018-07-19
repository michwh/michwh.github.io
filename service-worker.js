/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/archives/2018/01/index.html","0f9b6de85aa38226509da66e082920ab"],["/archives/2018/02/index.html","06003bc2010160603837e44b3497ca5d"],["/archives/2018/03/index.html","e4832372e0c0ce56ba69617178948f3d"],["/archives/2018/05/index.html","5c544bd50a5a175224c2868c7f3cb1b4"],["/archives/2018/06/index.html","24f14a399687c2892da45fb143daa0c3"],["/archives/2018/index.html","c46003bac4dfddf7d67a042896f3e56b"],["/archives/index.html","7eb076906b7cc18d88298d4a234062f0"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/style.css","493314b22860d7a6b260a11a3e759a44"],["/fonts/chancery/apple-chancery-webfont.svg","023cdfdddad396b3f2603430cf3c9f47"],["/image/reward/alipay.png","31b9ade4eab7ae253d9f7802430ecd68"],["/image/reward/wechat.png","d23e08840223824da2e076076743d880"],["/images/icons/144x144.png","470afc738cac5185d0f6db3d406cdab9"],["/images/icons/192x192.png","aa4435b50c5b2226f9ce969131e91c7c"],["/images/icons/512x512.png","3ba385f3213973cc606a98f8a0ee1306"],["/images/icons/72x72.png","a9ca6029cb88d884fca7e72ea6efe3f7"],["/index.html","d29972ebdbb5476bcb85f2d2d6886133"],["/js/src/bootstrap.js","0b7b370f6eec556b6b314ba5667f8624"],["/js/src/even.js","580c7b76382c3c67dd952c88e3b65bdd"],["/lib/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/jquery/jquery-3.1.1.min.js","e071abda8fe61194711cfc2ab99fe104"],["/lib/slideout/slideout.js","8d02b37e369a41a9cfe3d9f4b2204770"],["/lib/slideout/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["/manifest.json","24a8a72fa36e2e193e4c454063b25b2c"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/page/2/index.html","7d137fae5dfa2e39b91661960e81452e"],["/posts/1ac8f48e/index.html","86b76773f53d79cdede5a4a57dbee044"],["/posts/20f054d5/index.html","ad1cec6a74f4b0a220cf87aa9330a6bc"],["/posts/214a651e/index.html","02c36c7ee1fdc118ff5df47898fbe6fe"],["/posts/2ed5396a/index.html","6edb58609180ad375a27aca5c83d2889"],["/posts/52311e6f/index.html","490a3da6a82aa821fbbd35512d04da8b"],["/posts/61f87199/index.html","452719f930b9a0a866c81260e7f820bc"],["/posts/7827ba5/index.html","47c0e9a5ff4d03b985f183149e15c06a"],["/posts/7ce6ecd2/index.html","34a810f5a7a3fed6c56b632e58034b7d"],["/posts/b1924472/index.html","e31b6739141dcb6d0eea1467f8292cc4"],["/posts/b436e90b/index.html","8a93b1c40dcf9e58a8e11fb061a78a41"],["/posts/bdbaeaa4/index.html","fee832a2e7f8ef21891f766889299b42"],["/posts/d9df616e/index.html","8660b035229c894ba916bafc8bc67c7b"],["/posts/dbc572e1/index.html","e65bdf359e8b625f3566333dc71f7bd3"],["/posts/e4079704/index.html","65ed3d69bfae87774c8449446f31c8d9"],["/posts/ecbcca52/index.html","308490d2fe16eae92350eb98940e8f10"],["/tags/bcryptjs/index.html","4f1bbc84b81ae9183dc3a213035b18a5"],["/tags/cookie/index.html","02dc6a6e983c84f67410c04df5236c0b"],["/tags/css/index.html","7b85732978f00be7b56b4a39dce47baa"],["/tags/element-ui/index.html","c59bab09460c768ebaa057aeef33b1c6"],["/tags/es6/index.html","4904fa4fa65af7723eee8d0bd655cce4"],["/tags/git/index.html","7499053c55cceff468f6b9f532732586"],["/tags/hexo/index.html","bcc5d78aa4c60f019619d080dfad8ce1"],["/tags/html/index.html","3bd2e64694059d5ce06ab4d9cc9d77c7"],["/tags/http/index.html","50512d3f06a655566378e416617e8df4"],["/tags/index.html","26fe5287e9015cf1023f5d3c31445689"],["/tags/jwt/index.html","d2dcc86ba708a2393ed1e737b60c77be"],["/tags/koa/index.html","af545992efa2e27fa566f597bb336992"],["/tags/mysql/index.html","0d62246e38d4a4847bd4b814bb654a49"],["/tags/node-js/index.html","856667699a0004bd6b4e4470f25dd1df"],["/tags/session/index.html","5aafd99025480da036a1e5e4caf4cb36"],["/tags/sublime/index.html","465e63e77b6c96df9239bae73b17ca84"],["/tags/termux/index.html","c1c9cbbbbd42b450a7708eb9ebe3fed0"],["/tags/vue/index.html","7ba2261b9c03e83a825cd49bdb735a91"],["/tags/博客/index.html","d60fa0663058447f78691313adea275f"],["/tags/好玩/index.html","6495e0c703dcacf93710d36c40117a2c"],["/tags/微信/index.html","8c08bda0b1f8588ea84453ffb0d5f92f"],["/tags/总结/index.html","c95c9fcaffbc4f476b26e135b26f1550"],["/tags/计划/index.html","810dab552ad2c3f4eb43447bfa19b63f"],["/tags/读书笔记/index.html","151f359df5a050d6cbdd185c3e4988b4"],["/tags/项目/index.html","a9475e9d37f2dcf11b0c6d7d8ca88e29"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
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
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
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

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
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







