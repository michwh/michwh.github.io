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

var precacheConfig = [["/2018/01/22/git操作总结/1.jpg","c6ac7154ff9c999d4718695abdc41d54"],["/2018/01/22/git操作总结/2.jpg","a94c4c9184568294fa93d18f0bc97e67"],["/2018/01/22/git操作总结/3.jpg","530e6fa7426de54e401c1c5d1b24ddbb"],["/2018/01/22/git操作总结/4.jpg","579916473c25f423d735a2527cde4a47"],["/2018/01/22/git操作总结/5.jpg","ec33317c9bf58acf77ffd0b597f28ddb"],["/2018/01/22/git操作总结/6.jpg","4da889f072f05155b6ecf5a9f715b7c4"],["/2018/01/22/git操作总结/7.jpg","bceee006e1808ee3a6667711c498faeb"],["/2018/01/22/git操作总结/index.html","239a621eadc73cd24b4fb87b04e78d86"],["/2018/01/22/如何用Hexo在GitHub上搭建博客/1.jpg","04803847d8f365a9ddac535e57f9405a"],["/2018/01/22/如何用Hexo在GitHub上搭建博客/index.html","d2c085af26149907abe42b4652667a49"],["/2018/02/04/日常学习自问自答/1.jpg","97615b3a6763977bd0be70ec07d05ca5"],["/2018/02/04/日常学习自问自答/2.jpg","69a1d4b66bf1cca215188b1393d172ff"],["/2018/02/04/日常学习自问自答/index.html","8345751ed06ce0aab987bc6f7d4eee76"],["/2018/02/08/ES6常用知识点总结/index.html","3bdfadd5bfb1872b9e1c8e6f43e35285"],["/2018/02/09/博客维护日志/1.jpg","04803847d8f365a9ddac535e57f9405a"],["/2018/02/09/博客维护日志/10.jpg","2615ef0ee65da1d9283b8061e065c4ba"],["/2018/02/09/博客维护日志/11.jpg","050bebef8655836ba9074b4367f5855e"],["/2018/02/09/博客维护日志/12.jpg","d7d6c4f756e44cd4fe0b967775fef109"],["/2018/02/09/博客维护日志/13.jpg","5f81e643d34808d4df1b8dfc1c054dd8"],["/2018/02/09/博客维护日志/14.jpg","21b2da78e82b7f507ff5595c9505cdae"],["/2018/02/09/博客维护日志/15.gif","be329540c9b3693a89f0fcc27da9aead"],["/2018/02/09/博客维护日志/2.jpg","7e184d73b9ddfc31127e47a3ef84e09c"],["/2018/02/09/博客维护日志/20180204-1.jpg","9a4b0abc7907a0abf55d69a53db47336"],["/2018/02/09/博客维护日志/3.jpg","eef9ed3d3d396e0750b9ef1d815cc980"],["/2018/02/09/博客维护日志/4.jpg","ef5e78c6672c43c437e6f7232e058534"],["/2018/02/09/博客维护日志/5.jpg","a60f60b34755cddad10f310beaa31057"],["/2018/02/09/博客维护日志/6.jpg","e64c58553f3b59510213de28faf88317"],["/2018/02/09/博客维护日志/7.jpg","dc705003574044800d103f6cfec270b6"],["/2018/02/09/博客维护日志/9.jpg","07a40cc9194ebf7e3f640e9a3e6485c5"],["/2018/02/09/博客维护日志/index.html","f24378fc6a541dc5933773e907e5fe17"],["/2018/02/10/《CSS世界》读书笔记/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["/2018/02/10/《CSS世界》读书笔记/10.jpg","89dbb7c8dfab6f4f1091b7d38eb6fec7"],["/2018/02/10/《CSS世界》读书笔记/11.jpg","329e0b687c551339709fd43059511978"],["/2018/02/10/《CSS世界》读书笔记/2.jpg","e739bb584f57bc42b4ddb538e41c7908"],["/2018/02/10/《CSS世界》读书笔记/3.jpg","ce15ac7a40030de731fa5ad0c21fb247"],["/2018/02/10/《CSS世界》读书笔记/4.jpg","1eca5770590b0fb06ab85a3b9fe19ba6"],["/2018/02/10/《CSS世界》读书笔记/5.jpg","7f9c4805e1e9ceb141007f50d32ce384"],["/2018/02/10/《CSS世界》读书笔记/6.jpg","4088bd355be73c0510982b9ccf61131d"],["/2018/02/10/《CSS世界》读书笔记/7.jpg","5e0677502400a40c6917f8695c382a7d"],["/2018/02/10/《CSS世界》读书笔记/8.jpg","c9e67995e83f2fbf4bf3a2ba131d9ba0"],["/2018/02/10/《CSS世界》读书笔记/9.jpg","88444ee5d3cb0581ab848a0b41d86b63"],["/2018/02/10/《CSS世界》读书笔记/index.html","1327b26703d7e4b55d8e3738d0ebc974"],["/2018/03/11/HTML标签和CSS属性总结/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["/2018/03/11/HTML标签和CSS属性总结/2.jpg","0ce32db6e419a476096562b565be4b6e"],["/2018/03/11/HTML标签和CSS属性总结/3.jpg","1bc574fd742185d597acbb854d5a3baf"],["/2018/03/11/HTML标签和CSS属性总结/5.jpg","74f1c17fd7bee0e4c9d07c76f2c240f1"],["/2018/03/11/HTML标签和CSS属性总结/6.jpg","56deaaae4175a2456140a1305a111da1"],["/2018/03/11/HTML标签和CSS属性总结/index.html","05bf9d532d009200040bee1a98ac68af"],["/2018/03/11/计划表/index.html","c4dea0a64042d9ebf84bb7754e00a889"],["/2018/03/29/sublime常见问题总结/2.jpg","93d0b2d35baed0623308f881f4f631bb"],["/2018/03/29/sublime常见问题总结/3.jpg","ebbfa28ca878ae747e4aacc9c23adb24"],["/2018/03/29/sublime常见问题总结/4.jpg","4e2b113a89f2167d24dd64d15dc15c64"],["/2018/03/29/sublime常见问题总结/5.jpg","f6a9b1997b3e0644d9bee9ca62b5e630"],["/2018/03/29/sublime常见问题总结/6.jpg","eaeb6fa1b93f3fc2d044da44c0c9448f"],["/2018/03/29/sublime常见问题总结/7.jpg","53c097cb5e5418542f6d514e26a8deab"],["/2018/03/29/sublime常见问题总结/8.jpg","7933d731ef8fe4dc631732b4f9501fbe"],["/2018/03/29/sublime常见问题总结/9.jpg","e445dae4744080bca26ae241d4e46743"],["/2018/03/29/sublime常见问题总结/index.html","2fd826ecea0d7421dc200db7a81d79b2"],["/2018/05/15/web版微信协议分析/1.png","276e857db80a166df5d256cdd6ee690c"],["/2018/05/15/web版微信协议分析/index.html","387a9e7bf5ca488f5ea8450445a9de2c"],["/2018/05/28/理解Cookie和Sessin机制/1.jpg","a262f3797e298c3949028f464bfc7b8c"],["/2018/05/28/理解Cookie和Sessin机制/index.html","a0fd5f3fdd03e3f1090363f2eecc1a2b"],["/2018/06/05/Element-UI使用小技巧/index.html","99182956f0200af294b0daf38bd3ad71"],["/2018/06/06/CSS水平垂直居中对齐方法小结/1.jpg","51f3ee1b42fad2a1f88202659193385b"],["/2018/06/06/CSS水平垂直居中对齐方法小结/2.jpg","04cda970fc3b8f4e01771f74d895295e"],["/2018/06/06/CSS水平垂直居中对齐方法小结/index.html","c8f6f8d7f3ccce87307b98eb7ede820e"],["/2018/06/07/利用Termux在手机上写node-js/1.jpg","e2033c399d54ecea351cf6f63f626c47"],["/2018/06/07/利用Termux在手机上写node-js/2.jpg","4f2b8678c5f308f237caf8c74a7e3107"],["/2018/06/07/利用Termux在手机上写node-js/3.jpg","7183864982fb234d21552a4ca0a7c2f9"],["/2018/06/07/利用Termux在手机上写node-js/index.html","1d5ee9c2c656ff4acde78cbeb1ae2059"],["/2018/06/08/Koa-JSON-WEB-TOKEN-bcrypt实现登录注册/index.html","e5e1a8e10ddc95018029e9762ff0bea7"],["/archives/2018/01/index.html","03615c9b12076d6bf0aeeecbd5806233"],["/archives/2018/02/index.html","53e461bd3e8950d2b96ab93142c8c0a2"],["/archives/2018/03/index.html","16e1288c97c5a473d10f2bc01e1cf590"],["/archives/2018/05/index.html","1176e0f6478695355b1274b0a9c407e4"],["/archives/2018/06/index.html","76c8ac0f247f9a81d352215621c5ef7c"],["/archives/2018/index.html","5315450c83c0689f6a2d8aa5a2ffaaed"],["/archives/index.html","7ef9277564574e9953f7f66c8c84c014"],["/css/style.css","493314b22860d7a6b260a11a3e759a44"],["/fonts/chancery/apple-chancery-webfont.svg","023cdfdddad396b3f2603430cf3c9f47"],["/image/reward/alipay.png","31b9ade4eab7ae253d9f7802430ecd68"],["/image/reward/wechat.png","d23e08840223824da2e076076743d880"],["/images/icons/144x144.png","470afc738cac5185d0f6db3d406cdab9"],["/images/icons/192x192.png","aa4435b50c5b2226f9ce969131e91c7c"],["/images/icons/512x512.png","3ba385f3213973cc606a98f8a0ee1306"],["/images/icons/72x72.png","a9ca6029cb88d884fca7e72ea6efe3f7"],["/index.html","73ab86842ed08c27f7a83e1dbbb29ac5"],["/js/src/bootstrap.js","0b7b370f6eec556b6b314ba5667f8624"],["/js/src/even.js","580c7b76382c3c67dd952c88e3b65bdd"],["/lib/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/jquery/jquery-3.1.1.min.js","e071abda8fe61194711cfc2ab99fe104"],["/lib/slideout/slideout.js","8d02b37e369a41a9cfe3d9f4b2204770"],["/lib/slideout/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["/manifest.json","24a8a72fa36e2e193e4c454063b25b2c"],["/page/2/index.html","71f660637e13025869fee13301436227"],["/tags/bcryptjs/index.html","007bd3ffaa1a871a80ccf357a5a59d8f"],["/tags/cookie/index.html","5ca424806e241e3551bc305766fa4fe5"],["/tags/css/index.html","5d34c3fd32e50afab4307458d76bd1ef"],["/tags/element-ui/index.html","28e47e62616769928f06ffb01d6561bc"],["/tags/es6/index.html","578f4f1b417627c5e3803984b1baf16d"],["/tags/git/index.html","6ce1e58f208ad49ba626fafb92b92759"],["/tags/hexo/index.html","c7a9c8c00945299a829ec9fc7143d00d"],["/tags/html/index.html","d3340cb8f7793bd00605e24d33e82f25"],["/tags/http/index.html","71f2d8ebea5cd02ea5742170ae9f8b06"],["/tags/index.html","f37a4dbfd42c4fff3666d88184b3c71d"],["/tags/jwt/index.html","c3126980d5ccf68ea81e66b96e53e565"],["/tags/koa/index.html","36e52260c8305625f104998a83ee75be"],["/tags/mysql/index.html","ec3a078eb17c756770567ae42c1ad9bf"],["/tags/node-js/index.html","f40a9e9581de1a88fa40336864ae925c"],["/tags/session/index.html","90b14a0b7f7c103f0c38fc3cab5837d7"],["/tags/sublime/index.html","292290b2c886957dc8be355f26403692"],["/tags/termux/index.html","20a4939ee17952491f655db2c3eebba2"],["/tags/vue/index.html","991dd60e13bbf64a7ee2f2109995886e"],["/tags/博客/index.html","42353ec471b469db5fb09fd919f04a58"],["/tags/好玩/index.html","f1df115129bf7d25aacb644fcb5bfc51"],["/tags/微信/index.html","6702a91bd58aa349dbd84a7d1a650866"],["/tags/总结/index.html","a514fad01f1d3561a7bd1a320ec95a6e"],["/tags/计划/index.html","ba3cca21ac6292d2512418e3c56c5f66"],["/tags/读书笔记/index.html","e4e942bdabbf3aa4c6da14d6298bec4b"],["/tags/项目/index.html","9bd3ddff76406a610bd34c23d1063cb0"]];
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







