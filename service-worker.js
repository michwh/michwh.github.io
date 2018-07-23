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

var precacheConfig = [["/archives/2018/01/index.html","0a6e5096ea196f296caab1571009ea44"],["/archives/2018/02/index.html","e18c195e2a42b0a21a844ffc4dca490c"],["/archives/2018/03/index.html","80177be3eef4630ba52b3773167ce5aa"],["/archives/2018/05/index.html","1a08d9dcbcab7dd8b54e3268a71f6b73"],["/archives/2018/06/index.html","e3ea326f6160ec69fe7d267a9d51c69f"],["/archives/2018/07/index.html","04a434c2cb7790329c5605e21c024343"],["/archives/2018/index.html","c879c3f4e8bd57c69454974eeac15491"],["/archives/index.html","e981e8c1068ab2f6b882231c28d6da54"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/style.css","493314b22860d7a6b260a11a3e759a44"],["/fonts/chancery/apple-chancery-webfont.svg","023cdfdddad396b3f2603430cf3c9f47"],["/image/reward/alipay.png","31b9ade4eab7ae253d9f7802430ecd68"],["/image/reward/wechat.png","d23e08840223824da2e076076743d880"],["/images/icons/144x144.png","470afc738cac5185d0f6db3d406cdab9"],["/images/icons/192x192.png","aa4435b50c5b2226f9ce969131e91c7c"],["/images/icons/512x512.png","3ba385f3213973cc606a98f8a0ee1306"],["/images/icons/72x72.png","a9ca6029cb88d884fca7e72ea6efe3f7"],["/index.html","9b012e216587bdc5b907d4c6231a1bfc"],["/js/src/bootstrap.js","0b7b370f6eec556b6b314ba5667f8624"],["/js/src/even.js","580c7b76382c3c67dd952c88e3b65bdd"],["/lib/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/jquery/jquery-3.1.1.min.js","e071abda8fe61194711cfc2ab99fe104"],["/lib/slideout/slideout.js","8d02b37e369a41a9cfe3d9f4b2204770"],["/lib/slideout/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["/manifest.json","24a8a72fa36e2e193e4c454063b25b2c"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/page/2/index.html","0736b24c3cc84258224c564dda055bc2"],["/post/CSS水平垂直居中对齐方法小结/1.jpg","51f3ee1b42fad2a1f88202659193385b"],["/post/CSS水平垂直居中对齐方法小结/2.jpg","04cda970fc3b8f4e01771f74d895295e"],["/post/CSS水平垂直居中对齐方法小结/index.html","a8c110274c99ef513feac598d4a38c78"],["/post/ES6常用知识点总结/index.html","8374861d361a89c2ce7bfd28eb294fa5"],["/post/Element-UI使用小技巧/index.html","e6baac4aaf001ff4dd86933a85b7aeef"],["/post/HTML标签和CSS属性总结/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["/post/HTML标签和CSS属性总结/2.jpg","0ce32db6e419a476096562b565be4b6e"],["/post/HTML标签和CSS属性总结/3.jpg","1bc574fd742185d597acbb854d5a3baf"],["/post/HTML标签和CSS属性总结/5.jpg","74f1c17fd7bee0e4c9d07c76f2c240f1"],["/post/HTML标签和CSS属性总结/6.jpg","56deaaae4175a2456140a1305a111da1"],["/post/HTML标签和CSS属性总结/index.html","e346d1d9093f40a596c9e95af719bc02"],["/post/Koa-JSON-WEB-TOKEN-bcrypt实现登录注册/index.html","b1970b1b93ac6ff289d5fb7f0306292f"],["/post/git操作总结/1.jpg","c6ac7154ff9c999d4718695abdc41d54"],["/post/git操作总结/2.jpg","a94c4c9184568294fa93d18f0bc97e67"],["/post/git操作总结/3.jpg","530e6fa7426de54e401c1c5d1b24ddbb"],["/post/git操作总结/4.jpg","579916473c25f423d735a2527cde4a47"],["/post/git操作总结/5.jpg","ec33317c9bf58acf77ffd0b597f28ddb"],["/post/git操作总结/6.jpg","4da889f072f05155b6ecf5a9f715b7c4"],["/post/git操作总结/7.jpg","bceee006e1808ee3a6667711c498faeb"],["/post/git操作总结/index.html","8d0780bd946bbaf166a2c25b891678c5"],["/post/sublime常见问题总结/2.jpg","93d0b2d35baed0623308f881f4f631bb"],["/post/sublime常见问题总结/3.jpg","ebbfa28ca878ae747e4aacc9c23adb24"],["/post/sublime常见问题总结/4.jpg","4e2b113a89f2167d24dd64d15dc15c64"],["/post/sublime常见问题总结/5.jpg","f6a9b1997b3e0644d9bee9ca62b5e630"],["/post/sublime常见问题总结/6.jpg","eaeb6fa1b93f3fc2d044da44c0c9448f"],["/post/sublime常见问题总结/7.jpg","53c097cb5e5418542f6d514e26a8deab"],["/post/sublime常见问题总结/8.jpg","7933d731ef8fe4dc631732b4f9501fbe"],["/post/sublime常见问题总结/9.jpg","e445dae4744080bca26ae241d4e46743"],["/post/sublime常见问题总结/index.html","eaf75aeed317847d25d15681d827bd4b"],["/post/web版微信协议分析/1.png","276e857db80a166df5d256cdd6ee690c"],["/post/web版微信协议分析/index.html","b879e1409dd3cf4437bb91f765fefe69"],["/post/《CSS世界》读书笔记/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["/post/《CSS世界》读书笔记/10.jpg","89dbb7c8dfab6f4f1091b7d38eb6fec7"],["/post/《CSS世界》读书笔记/11.jpg","329e0b687c551339709fd43059511978"],["/post/《CSS世界》读书笔记/2.jpg","e739bb584f57bc42b4ddb538e41c7908"],["/post/《CSS世界》读书笔记/3.jpg","ce15ac7a40030de731fa5ad0c21fb247"],["/post/《CSS世界》读书笔记/4.jpg","1eca5770590b0fb06ab85a3b9fe19ba6"],["/post/《CSS世界》读书笔记/5.jpg","7f9c4805e1e9ceb141007f50d32ce384"],["/post/《CSS世界》读书笔记/6.jpg","4088bd355be73c0510982b9ccf61131d"],["/post/《CSS世界》读书笔记/7.jpg","5e0677502400a40c6917f8695c382a7d"],["/post/《CSS世界》读书笔记/8.jpg","c9e67995e83f2fbf4bf3a2ba131d9ba0"],["/post/《CSS世界》读书笔记/9.jpg","88444ee5d3cb0581ab848a0b41d86b63"],["/post/《CSS世界》读书笔记/index.html","2efadea7e43090776b27aef134e2cfd8"],["/post/利用Termux在手机上写nodejs/1.jpg","e2033c399d54ecea351cf6f63f626c47"],["/post/利用Termux在手机上写nodejs/2.jpg","4f2b8678c5f308f237caf8c74a7e3107"],["/post/利用Termux在手机上写nodejs/3.jpg","7183864982fb234d21552a4ca0a7c2f9"],["/post/利用Termux在手机上写nodejs/index.html","7a5ef1a9b83652078f2a8371e5ee2a85"],["/post/博客维护日志/1.jpg","04803847d8f365a9ddac535e57f9405a"],["/post/博客维护日志/10.jpg","2615ef0ee65da1d9283b8061e065c4ba"],["/post/博客维护日志/11.jpg","050bebef8655836ba9074b4367f5855e"],["/post/博客维护日志/12.jpg","d7d6c4f756e44cd4fe0b967775fef109"],["/post/博客维护日志/13.jpg","5f81e643d34808d4df1b8dfc1c054dd8"],["/post/博客维护日志/14.jpg","21b2da78e82b7f507ff5595c9505cdae"],["/post/博客维护日志/15.gif","be329540c9b3693a89f0fcc27da9aead"],["/post/博客维护日志/2.jpg","7e184d73b9ddfc31127e47a3ef84e09c"],["/post/博客维护日志/20180204-1.jpg","9a4b0abc7907a0abf55d69a53db47336"],["/post/博客维护日志/3.jpg","eef9ed3d3d396e0750b9ef1d815cc980"],["/post/博客维护日志/4.jpg","ef5e78c6672c43c437e6f7232e058534"],["/post/博客维护日志/5.jpg","a60f60b34755cddad10f310beaa31057"],["/post/博客维护日志/6.jpg","e64c58553f3b59510213de28faf88317"],["/post/博客维护日志/7.jpg","dc705003574044800d103f6cfec270b6"],["/post/博客维护日志/9.jpg","07a40cc9194ebf7e3f640e9a3e6485c5"],["/post/博客维护日志/index.html","2aee41c963fdb17dc1457eaa175820bf"],["/post/如何用Hexo在GitHub上搭建博客/1.jpg","04803847d8f365a9ddac535e57f9405a"],["/post/如何用Hexo在GitHub上搭建博客/index.html","6d04eec786642616e8b6bdcecd815066"],["/post/日常学习自问自答/1.jpg","97615b3a6763977bd0be70ec07d05ca5"],["/post/日常学习自问自答/2.jpg","69a1d4b66bf1cca215188b1393d172ff"],["/post/日常学习自问自答/index.html","1eccd0114f8093a41fcc9a081a696003"],["/post/暑假计划/index.html","14fd94d87b0a9827d6caef31d978a38c"],["/post/理解Cookie和Sessin机制/1.jpg","a262f3797e298c3949028f464bfc7b8c"],["/post/理解Cookie和Sessin机制/index.html","01200e249e23a2e3ca22dca90fb45731"],["/post/计划表/index.html","24913d09bbfff8e2fdbc8da79dc72db5"],["/tags/bcryptjs/index.html","6278cc3a5032463fa3bd3eb952f37623"],["/tags/cookie/index.html","c7d5dec7c172c7f5021d6dca75bdc3b3"],["/tags/css/index.html","4fd65a4de159cad62613868626f4694c"],["/tags/element-ui/index.html","b5302b72a7e2ab6dabd60f7e6db9b92b"],["/tags/es6/index.html","e27ab792fb72dbe5901da9a7066ae9b1"],["/tags/git/index.html","aa4f71595964bed6804c8f0371fe7e2f"],["/tags/hexo/index.html","950172012d0a0adf4cfb6e84944a4f61"],["/tags/html/index.html","8135ee393727f9be90735a5f243d4c9e"],["/tags/http/index.html","3d471586f8856c2f4c64b1d1169440d2"],["/tags/index.html","046755d44f98716dcd0baaba14051304"],["/tags/jwt/index.html","d6d06b4a2e7712c8327a3aceec79beb3"],["/tags/koa/index.html","3923eef8b999c9f9c726baff3cb11236"],["/tags/mysql/index.html","915dd6a2e637472690c5d8eb19554053"],["/tags/node-js/index.html","18ebc01428e94c73cbd879799959d9aa"],["/tags/session/index.html","d80c23eb1ca57f8633f6a0b343c14d12"],["/tags/sublime/index.html","63eae03aca679fbc60d081c6d1007cce"],["/tags/termux/index.html","f712503d398ac9512383340b4ab87757"],["/tags/vue/index.html","9af67a01335f7bb431dcea70416af9bb"],["/tags/博客/index.html","60f04b9a75de0786026c5a408b69b545"],["/tags/好玩/index.html","e4f7d3918255438aa4b6d1fe91a72e09"],["/tags/微信/index.html","c3e6687440ef92315207aef5ed375f1b"],["/tags/总结/index.html","fa8663d0dce52480f282558ca1e27c6f"],["/tags/计划/index.html","d0763838485b796cc9751cde0cb220c1"],["/tags/读书笔记/index.html","2fa74b4ab98e632707be19583227cc82"],["/tags/项目/index.html","1a0f6f08d0d0b9bc71339f4a73390302"]];
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







