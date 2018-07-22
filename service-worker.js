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

var precacheConfig = [["/archives/2018/01/index.html","8de6dabe34680307ae1ecb4345940c3d"],["/archives/2018/02/index.html","dcd1e51eb534893b572fbf3d23785ad0"],["/archives/2018/03/index.html","be025d02f4b215953f0534ed727baebc"],["/archives/2018/05/index.html","7833ffa5810e4ddc492fcd188cb1fe6a"],["/archives/2018/06/index.html","21e3a54f1c3b4050a0bebcca61124cf1"],["/archives/2018/index.html","27ac431235982373d35b4c67f1233dbd"],["/archives/index.html","29995ab80b5020073482f2535ce04170"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/style.css","493314b22860d7a6b260a11a3e759a44"],["/fonts/chancery/apple-chancery-webfont.svg","023cdfdddad396b3f2603430cf3c9f47"],["/image/reward/alipay.png","31b9ade4eab7ae253d9f7802430ecd68"],["/image/reward/wechat.png","d23e08840223824da2e076076743d880"],["/images/icons/144x144.png","470afc738cac5185d0f6db3d406cdab9"],["/images/icons/192x192.png","aa4435b50c5b2226f9ce969131e91c7c"],["/images/icons/512x512.png","3ba385f3213973cc606a98f8a0ee1306"],["/images/icons/72x72.png","a9ca6029cb88d884fca7e72ea6efe3f7"],["/index.html","3f7bab313504eb4f97cb245a95069f32"],["/js/src/bootstrap.js","0b7b370f6eec556b6b314ba5667f8624"],["/js/src/even.js","580c7b76382c3c67dd952c88e3b65bdd"],["/lib/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/jquery/jquery-3.1.1.min.js","e071abda8fe61194711cfc2ab99fe104"],["/lib/slideout/slideout.js","8d02b37e369a41a9cfe3d9f4b2204770"],["/lib/slideout/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["/manifest.json","24a8a72fa36e2e193e4c454063b25b2c"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/page/2/index.html","6f807e3da4bede95776b749da51a3fe2"],["/post/CSS水平垂直居中对齐方法小结/1.jpg","51f3ee1b42fad2a1f88202659193385b"],["/post/CSS水平垂直居中对齐方法小结/2.jpg","04cda970fc3b8f4e01771f74d895295e"],["/post/CSS水平垂直居中对齐方法小结/index.html","bf6208e6d0f25929548ff30a51c72df0"],["/post/ES6常用知识点总结/index.html","fcc36a6542bf099832e4f8e57c91aaee"],["/post/Element-UI使用小技巧/index.html","5f0381736780f3e3da025f0333d4abc1"],["/post/HTML标签和CSS属性总结/index.html","9c0a08cc545c01d3a836be76f7e8156f"],["/post/Koa-JSON-WEB-TOKEN-bcrypt实现登录注册/index.html","766c781be10a65cc36b64018297af2a9"],["/post/git操作总结/index.html","2b708b10cc0efb7703775592d823ad01"],["/post/sublime常见问题总结/index.html","9a1d84ba85d44b3f1bc5e01c07e8b522"],["/post/web版微信协议分析/index.html","3753cf0b6c5417eb277939098e1f772e"],["/post/《CSS世界》读书笔记/index.html","bf686fce643ea1d181bee224f8f727f7"],["/post/利用Termux在手机上写node-js/index.html","b0eab88c666e102333d073ca7b7962a5"],["/post/博客维护日志/index.html","95ed5a18e603545dd1e464dfbb64e46a"],["/post/如何用Hexo在GitHub上搭建博客/index.html","188f700b46839fa3120534066c31b1e5"],["/post/日常学习自问自答/index.html","f957d11f4b8557bf396c3c30a27e7da0"],["/post/理解Cookie和Sessin机制/index.html","c72165b981c3622e6bc16dc2abbada0f"],["/post/计划表/index.html","81a63b49ba04041892ad5582c8492557"],["/tags/bcryptjs/index.html","2234be2635eec2e6a32f29339702efec"],["/tags/cookie/index.html","0a4812df3930bdfee827f65e1d81bcd6"],["/tags/css/index.html","0a48cdc39462202e4e43460a228e95b1"],["/tags/element-ui/index.html","00caba9e420fc9deec5861a13d8edb16"],["/tags/es6/index.html","b27a13f1e463a38a98a8a739231318ed"],["/tags/git/index.html","e67ee9e4e9faf509ccbb6bfbafa0b272"],["/tags/hexo/index.html","c3837c734ae923cce6070a69266b9c0d"],["/tags/html/index.html","665b84cd6c047baf907b0667346dc5fa"],["/tags/http/index.html","853b964fe1fabc64cfa5b2fd131f32bc"],["/tags/index.html","cc5486d9becf18dfa7e91e08151c81ab"],["/tags/jwt/index.html","45bde7b2b0cc782956202c24ab52f4db"],["/tags/koa/index.html","3c087e473c305254b1191c50336319d0"],["/tags/mysql/index.html","f835a7f1b341d3c9d30ea0d40e83dc26"],["/tags/node-js/index.html","0cef1b7920aa2d709485bc4c03d6f5ef"],["/tags/session/index.html","214e5fdf92f0da5af24e1844a0af26c6"],["/tags/sublime/index.html","98be33fd2ee05ce3fc014f29f636eecc"],["/tags/termux/index.html","1ff750e511ee16b6c0bf658aa53ea836"],["/tags/vue/index.html","97852b98eb6dc3068efb7591e848bd34"],["/tags/博客/index.html","ffa7a989607c4a71fcf8e4fb97263747"],["/tags/好玩/index.html","06fd562b988e91262f9ecb36e77cd1ec"],["/tags/微信/index.html","9448e16c2056120d2f0fec9b1a8db336"],["/tags/总结/index.html","226baa46666e05dfaf9ebd41864eb617"],["/tags/计划/index.html","20bb02772a5819a6f1b71052ca71a1f9"],["/tags/读书笔记/index.html","97a062364d4ade4ef04ea200494306aa"],["/tags/项目/index.html","16cf6221eec52188da670aff99bb9673"]];
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







