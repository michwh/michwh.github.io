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

var precacheConfig = [["/archives/2018/01/index.html","894f85fd17770e97d300205279e6d80a"],["/archives/2018/02/index.html","65f4d20570ebf6ddac34116d6b46c775"],["/archives/2018/03/index.html","b34da5347b710e4056484221c0e7d094"],["/archives/2018/05/index.html","93aba7d395eded3f9ed346a6d43279c4"],["/archives/2018/06/index.html","787198eaaded335694a0b4da4c19912a"],["/archives/2018/index.html","d7c4a34bb32115b1e00c0d29fcddd6b6"],["/archives/index.html","6913d98fcbb4c399f9881b8a9f2d07b6"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/style.css","493314b22860d7a6b260a11a3e759a44"],["/fonts/chancery/apple-chancery-webfont.svg","023cdfdddad396b3f2603430cf3c9f47"],["/image/reward/alipay.png","31b9ade4eab7ae253d9f7802430ecd68"],["/image/reward/wechat.png","d23e08840223824da2e076076743d880"],["/images/icons/144x144.png","470afc738cac5185d0f6db3d406cdab9"],["/images/icons/192x192.png","aa4435b50c5b2226f9ce969131e91c7c"],["/images/icons/512x512.png","3ba385f3213973cc606a98f8a0ee1306"],["/images/icons/72x72.png","a9ca6029cb88d884fca7e72ea6efe3f7"],["/index.html","57a9441d81930ed5801546d1ef65a325"],["/js/src/bootstrap.js","0b7b370f6eec556b6b314ba5667f8624"],["/js/src/even.js","580c7b76382c3c67dd952c88e3b65bdd"],["/lib/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/jquery/jquery-3.1.1.min.js","e071abda8fe61194711cfc2ab99fe104"],["/lib/slideout/slideout.js","8d02b37e369a41a9cfe3d9f4b2204770"],["/lib/slideout/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["/manifest.json","24a8a72fa36e2e193e4c454063b25b2c"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/page/2/index.html","6d3ad7b444e1bd6aca7f2b160b5b6ea5"],["/posts/1ac8f48e/index.html","633aab24beb21aaeff65f30e88e4552c"],["/posts/20f054d5/1.png","276e857db80a166df5d256cdd6ee690c"],["/posts/20f054d5/index.html","bf55b85d5f0b779bdd897aed87b229eb"],["/posts/214a651e/index.html","808e4e809653f5ba577331d6c71f8809"],["/posts/2ed5396a/index.html","f834b03ca39bae63b19561bde2f61cf1"],["/posts/52311e6f/2.jpg","93d0b2d35baed0623308f881f4f631bb"],["/posts/52311e6f/3.jpg","ebbfa28ca878ae747e4aacc9c23adb24"],["/posts/52311e6f/4.jpg","4e2b113a89f2167d24dd64d15dc15c64"],["/posts/52311e6f/5.jpg","f6a9b1997b3e0644d9bee9ca62b5e630"],["/posts/52311e6f/6.jpg","eaeb6fa1b93f3fc2d044da44c0c9448f"],["/posts/52311e6f/7.jpg","53c097cb5e5418542f6d514e26a8deab"],["/posts/52311e6f/8.jpg","7933d731ef8fe4dc631732b4f9501fbe"],["/posts/52311e6f/9.jpg","e445dae4744080bca26ae241d4e46743"],["/posts/52311e6f/index.html","553d3ecab7036814eb8ec143f2aa8bb9"],["/posts/61f87199/1.jpg","04803847d8f365a9ddac535e57f9405a"],["/posts/61f87199/10.jpg","2615ef0ee65da1d9283b8061e065c4ba"],["/posts/61f87199/11.jpg","050bebef8655836ba9074b4367f5855e"],["/posts/61f87199/12.jpg","d7d6c4f756e44cd4fe0b967775fef109"],["/posts/61f87199/13.jpg","5f81e643d34808d4df1b8dfc1c054dd8"],["/posts/61f87199/14.jpg","21b2da78e82b7f507ff5595c9505cdae"],["/posts/61f87199/15.gif","be329540c9b3693a89f0fcc27da9aead"],["/posts/61f87199/2.jpg","7e184d73b9ddfc31127e47a3ef84e09c"],["/posts/61f87199/20180204-1.jpg","9a4b0abc7907a0abf55d69a53db47336"],["/posts/61f87199/3.jpg","eef9ed3d3d396e0750b9ef1d815cc980"],["/posts/61f87199/4.jpg","ef5e78c6672c43c437e6f7232e058534"],["/posts/61f87199/5.jpg","a60f60b34755cddad10f310beaa31057"],["/posts/61f87199/6.jpg","e64c58553f3b59510213de28faf88317"],["/posts/61f87199/7.jpg","dc705003574044800d103f6cfec270b6"],["/posts/61f87199/9.jpg","07a40cc9194ebf7e3f640e9a3e6485c5"],["/posts/61f87199/index.html","1f88c4de92577f566a259897d5db4f20"],["/posts/7827ba5/index.html","655b2d613449daeee0b18a8aa6b16063"],["/posts/7ce6ecd2/1.jpg","a262f3797e298c3949028f464bfc7b8c"],["/posts/7ce6ecd2/index.html","e13944e510b3f6c78eccefefeb7e5589"],["/posts/b1924472/1.jpg","97615b3a6763977bd0be70ec07d05ca5"],["/posts/b1924472/2.jpg","69a1d4b66bf1cca215188b1393d172ff"],["/posts/b1924472/index.html","756e850fa00b1fd73d048fe9fcbc0855"],["/posts/b436e90b/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["/posts/b436e90b/10.jpg","89dbb7c8dfab6f4f1091b7d38eb6fec7"],["/posts/b436e90b/11.jpg","329e0b687c551339709fd43059511978"],["/posts/b436e90b/2.jpg","e739bb584f57bc42b4ddb538e41c7908"],["/posts/b436e90b/3.jpg","ce15ac7a40030de731fa5ad0c21fb247"],["/posts/b436e90b/4.jpg","1eca5770590b0fb06ab85a3b9fe19ba6"],["/posts/b436e90b/5.jpg","7f9c4805e1e9ceb141007f50d32ce384"],["/posts/b436e90b/6.jpg","4088bd355be73c0510982b9ccf61131d"],["/posts/b436e90b/7.jpg","5e0677502400a40c6917f8695c382a7d"],["/posts/b436e90b/8.jpg","c9e67995e83f2fbf4bf3a2ba131d9ba0"],["/posts/b436e90b/9.jpg","88444ee5d3cb0581ab848a0b41d86b63"],["/posts/b436e90b/index.html","3789abab798e092e3d49a36fbb878da3"],["/posts/bdbaeaa4/1.jpg","e2033c399d54ecea351cf6f63f626c47"],["/posts/bdbaeaa4/2.jpg","4f2b8678c5f308f237caf8c74a7e3107"],["/posts/bdbaeaa4/3.jpg","7183864982fb234d21552a4ca0a7c2f9"],["/posts/bdbaeaa4/index.html","f04a6b190aea45cfeecf82dfeba1a222"],["/posts/d9df616e/1.jpg","c6ac7154ff9c999d4718695abdc41d54"],["/posts/d9df616e/2.jpg","a94c4c9184568294fa93d18f0bc97e67"],["/posts/d9df616e/3.jpg","530e6fa7426de54e401c1c5d1b24ddbb"],["/posts/d9df616e/4.jpg","579916473c25f423d735a2527cde4a47"],["/posts/d9df616e/5.jpg","ec33317c9bf58acf77ffd0b597f28ddb"],["/posts/d9df616e/6.jpg","4da889f072f05155b6ecf5a9f715b7c4"],["/posts/d9df616e/7.jpg","bceee006e1808ee3a6667711c498faeb"],["/posts/d9df616e/index.html","cc13200e573cf20c0fa1d0075eec095d"],["/posts/dbc572e1/1.jpg","04803847d8f365a9ddac535e57f9405a"],["/posts/dbc572e1/index.html","8c2064e9507e2e7d8d06635881f1ff7a"],["/posts/e4079704/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["/posts/e4079704/2.jpg","0ce32db6e419a476096562b565be4b6e"],["/posts/e4079704/3.jpg","1bc574fd742185d597acbb854d5a3baf"],["/posts/e4079704/5.jpg","74f1c17fd7bee0e4c9d07c76f2c240f1"],["/posts/e4079704/6.jpg","56deaaae4175a2456140a1305a111da1"],["/posts/e4079704/index.html","6958569c7e988a1ace7e8b410a7abc77"],["/posts/ecbcca52/1.jpg","51f3ee1b42fad2a1f88202659193385b"],["/posts/ecbcca52/2.jpg","04cda970fc3b8f4e01771f74d895295e"],["/posts/ecbcca52/index.html","01596d0db9d669bcfcef3fd40500f89f"],["/tags/bcryptjs/index.html","f23d9866748239ae7fc3c686ddd19191"],["/tags/cookie/index.html","c87fc005e620887494006c31e1664985"],["/tags/css/index.html","d3a89dbc94f73bd55a713b1305d99543"],["/tags/element-ui/index.html","95951d569ed5d86baa42e3e67bec2990"],["/tags/es6/index.html","d3200164f75f3cbc4da7a40e4834f61f"],["/tags/git/index.html","c94c94740d9b1484cde671cebc3365c3"],["/tags/hexo/index.html","7a8485ebb18f729c88fa351c71db00c3"],["/tags/html/index.html","e274891e0777b647d4f92bf61a74d73a"],["/tags/http/index.html","e21d742b58faf4f31151a24ae566be39"],["/tags/index.html","eb9fdd1bafb12eda081b49ed6e08a667"],["/tags/jwt/index.html","a19560e7c45b2ca9c8970d15f2f3dc6a"],["/tags/koa/index.html","8dbbaf2dc1f217fefc7a425b6fc21883"],["/tags/mysql/index.html","7f6d8b0a00551deaccbbd9d614a036f0"],["/tags/node-js/index.html","f697f44201e3fcc201e650e210ea2601"],["/tags/session/index.html","57c3e7f8f40a6b6fb3b1e6fca2645bd7"],["/tags/sublime/index.html","eee7ce4bec0239ede1b41cef9e90d2b7"],["/tags/termux/index.html","8525af59c67d90004291954c57bd70b9"],["/tags/vue/index.html","fceea23917d857bb2b22156f206dd48d"],["/tags/博客/index.html","418c72b0ced59bcbcea622ba1e07b468"],["/tags/好玩/index.html","ce9e5d83aee0a41302b1f2720e52958b"],["/tags/微信/index.html","fed058bca93123d5c4903c73d94ac481"],["/tags/总结/index.html","a06ffa512f3453d9f4b0a800ad87a828"],["/tags/计划/index.html","854b58441d26e4ddca6eb3afb103aec3"],["/tags/读书笔记/index.html","45de88f426430bfb65340ca9c3083f73"],["/tags/项目/index.html","b02263bfcc72388c0841ede301ef1bb1"]];
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







