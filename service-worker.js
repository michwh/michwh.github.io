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

var precacheConfig = [["D:/blog/public/2018/01/22/git操作总结/1.jpg","c6ac7154ff9c999d4718695abdc41d54"],["D:/blog/public/2018/01/22/git操作总结/2.jpg","a94c4c9184568294fa93d18f0bc97e67"],["D:/blog/public/2018/01/22/git操作总结/3.jpg","530e6fa7426de54e401c1c5d1b24ddbb"],["D:/blog/public/2018/01/22/git操作总结/4.jpg","579916473c25f423d735a2527cde4a47"],["D:/blog/public/2018/01/22/git操作总结/5.jpg","ec33317c9bf58acf77ffd0b597f28ddb"],["D:/blog/public/2018/01/22/git操作总结/6.jpg","4da889f072f05155b6ecf5a9f715b7c4"],["D:/blog/public/2018/01/22/git操作总结/7.jpg","bceee006e1808ee3a6667711c498faeb"],["D:/blog/public/2018/01/22/git操作总结/index.html","960da52524c017a523bebd90c6265d8e"],["D:/blog/public/2018/01/22/如何用Hexo在GitHub上搭建博客/1.jpg","04803847d8f365a9ddac535e57f9405a"],["D:/blog/public/2018/01/22/如何用Hexo在GitHub上搭建博客/index.html","e6a1b4d241a12bb75b7e80041454c05f"],["D:/blog/public/2018/02/04/日常学习自问自答/1.jpg","97615b3a6763977bd0be70ec07d05ca5"],["D:/blog/public/2018/02/04/日常学习自问自答/2.jpg","69a1d4b66bf1cca215188b1393d172ff"],["D:/blog/public/2018/02/04/日常学习自问自答/index.html","1f03cc02cc6453cbba2dbddaed739234"],["D:/blog/public/2018/02/08/ES6常用知识点总结/index.html","a745331c2cd983bbf590580a61548daf"],["D:/blog/public/2018/02/09/博客维护日志/1.jpg","04803847d8f365a9ddac535e57f9405a"],["D:/blog/public/2018/02/09/博客维护日志/10.jpg","2615ef0ee65da1d9283b8061e065c4ba"],["D:/blog/public/2018/02/09/博客维护日志/11.jpg","050bebef8655836ba9074b4367f5855e"],["D:/blog/public/2018/02/09/博客维护日志/12.jpg","d7d6c4f756e44cd4fe0b967775fef109"],["D:/blog/public/2018/02/09/博客维护日志/13.jpg","5f81e643d34808d4df1b8dfc1c054dd8"],["D:/blog/public/2018/02/09/博客维护日志/14.jpg","21b2da78e82b7f507ff5595c9505cdae"],["D:/blog/public/2018/02/09/博客维护日志/2.jpg","7e184d73b9ddfc31127e47a3ef84e09c"],["D:/blog/public/2018/02/09/博客维护日志/20180204-1.jpg","9a4b0abc7907a0abf55d69a53db47336"],["D:/blog/public/2018/02/09/博客维护日志/3.jpg","eef9ed3d3d396e0750b9ef1d815cc980"],["D:/blog/public/2018/02/09/博客维护日志/4.jpg","ef5e78c6672c43c437e6f7232e058534"],["D:/blog/public/2018/02/09/博客维护日志/5.jpg","a60f60b34755cddad10f310beaa31057"],["D:/blog/public/2018/02/09/博客维护日志/6.jpg","e64c58553f3b59510213de28faf88317"],["D:/blog/public/2018/02/09/博客维护日志/7.jpg","dc705003574044800d103f6cfec270b6"],["D:/blog/public/2018/02/09/博客维护日志/9.jpg","07a40cc9194ebf7e3f640e9a3e6485c5"],["D:/blog/public/2018/02/09/博客维护日志/index.html","db56265e1f47c2386b1f6065d01b2e74"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/10.jpg","89dbb7c8dfab6f4f1091b7d38eb6fec7"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/11.jpg","329e0b687c551339709fd43059511978"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/2.jpg","e739bb584f57bc42b4ddb538e41c7908"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/3.jpg","ce15ac7a40030de731fa5ad0c21fb247"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/4.jpg","1eca5770590b0fb06ab85a3b9fe19ba6"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/5.jpg","7f9c4805e1e9ceb141007f50d32ce384"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/6.jpg","4088bd355be73c0510982b9ccf61131d"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/7.jpg","5e0677502400a40c6917f8695c382a7d"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/8.jpg","c9e67995e83f2fbf4bf3a2ba131d9ba0"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/9.jpg","88444ee5d3cb0581ab848a0b41d86b63"],["D:/blog/public/2018/02/10/《CSS世界》读书笔记/index.html","e96ed9d9c73c7f7153ab98067706ba4b"],["D:/blog/public/2018/03/11/HTML标签和CSS属性总结/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["D:/blog/public/2018/03/11/HTML标签和CSS属性总结/2.jpg","0ce32db6e419a476096562b565be4b6e"],["D:/blog/public/2018/03/11/HTML标签和CSS属性总结/3.jpg","1bc574fd742185d597acbb854d5a3baf"],["D:/blog/public/2018/03/11/HTML标签和CSS属性总结/5.jpg","74f1c17fd7bee0e4c9d07c76f2c240f1"],["D:/blog/public/2018/03/11/HTML标签和CSS属性总结/6.jpg","56deaaae4175a2456140a1305a111da1"],["D:/blog/public/2018/03/11/HTML标签和CSS属性总结/index.html","d70c9380f0ae2cea9b0a7a85ad92ac7c"],["D:/blog/public/2018/03/11/计划表/index.html","69097b353e56d44edf50f9cdf05af6a8"],["D:/blog/public/2018/03/29/sublime常见问题总结/2.jpg","93d0b2d35baed0623308f881f4f631bb"],["D:/blog/public/2018/03/29/sublime常见问题总结/3.jpg","ebbfa28ca878ae747e4aacc9c23adb24"],["D:/blog/public/2018/03/29/sublime常见问题总结/4.jpg","4e2b113a89f2167d24dd64d15dc15c64"],["D:/blog/public/2018/03/29/sublime常见问题总结/5.jpg","f6a9b1997b3e0644d9bee9ca62b5e630"],["D:/blog/public/2018/03/29/sublime常见问题总结/6.jpg","eaeb6fa1b93f3fc2d044da44c0c9448f"],["D:/blog/public/2018/03/29/sublime常见问题总结/7.jpg","53c097cb5e5418542f6d514e26a8deab"],["D:/blog/public/2018/03/29/sublime常见问题总结/8.jpg","7933d731ef8fe4dc631732b4f9501fbe"],["D:/blog/public/2018/03/29/sublime常见问题总结/9.jpg","e445dae4744080bca26ae241d4e46743"],["D:/blog/public/2018/03/29/sublime常见问题总结/index.html","9aa689b347077461be854b5f13603e3c"],["D:/blog/public/2018/05/15/web版微信协议分析/1.png","276e857db80a166df5d256cdd6ee690c"],["D:/blog/public/2018/05/15/web版微信协议分析/index.html","a74894b9b3375eda6e07afec789afb93"],["D:/blog/public/2018/05/28/理解Cookie和Sessin机制/1.jpg","a262f3797e298c3949028f464bfc7b8c"],["D:/blog/public/2018/05/28/理解Cookie和Sessin机制/index.html","5df81f0fef96e63807d1dcb65f0e9531"],["D:/blog/public/2018/06/05/Element-UI使用小技巧/index.html","12d6bb1cb516c0f1974a858a1d3b1643"],["D:/blog/public/2018/06/06/CSS水平垂直居中对齐方法小结/1.jpg","51f3ee1b42fad2a1f88202659193385b"],["D:/blog/public/2018/06/06/CSS水平垂直居中对齐方法小结/2.jpg","04cda970fc3b8f4e01771f74d895295e"],["D:/blog/public/2018/06/06/CSS水平垂直居中对齐方法小结/index.html","2a5586e3896f157bf64e1fb5275244d9"],["D:/blog/public/2018/06/07/利用Termux在手机上写node-js/1.jpg","e2033c399d54ecea351cf6f63f626c47"],["D:/blog/public/2018/06/07/利用Termux在手机上写node-js/2.jpg","4f2b8678c5f308f237caf8c74a7e3107"],["D:/blog/public/2018/06/07/利用Termux在手机上写node-js/3.jpg","7183864982fb234d21552a4ca0a7c2f9"],["D:/blog/public/2018/06/07/利用Termux在手机上写node-js/index.html","92c40bf7b9f975030033777e215bd659"],["D:/blog/public/2018/06/08/Koa-JSON-WEB-TOKEN-bcrypt实现登录注册/index.html","a37f67c1b0150597c4b9aa44242226a6"],["D:/blog/public/archives/2018/01/index.html","7c7b8f560d4812c4e50b45d7646f6dd4"],["D:/blog/public/archives/2018/02/index.html","7bc5cc543561a8d1670ced2a7ad93cab"],["D:/blog/public/archives/2018/03/index.html","ce80c89c988626ddced31f7d004d16e9"],["D:/blog/public/archives/2018/05/index.html","7ee6e7db02085764b2b870442fc764ad"],["D:/blog/public/archives/2018/06/index.html","377aed1f9c0ead634ae2965c0b7636e6"],["D:/blog/public/archives/2018/index.html","287cb38e019b2daee93f09150efca089"],["D:/blog/public/archives/index.html","9ed6b4e0d35e4229980752c78cbdbd64"],["D:/blog/public/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["D:/blog/public/css/style.css","493314b22860d7a6b260a11a3e759a44"],["D:/blog/public/fonts/chancery/apple-chancery-webfont.eot","4ed7e60585ac6083e18a2df5a5c91cc1"],["D:/blog/public/fonts/chancery/apple-chancery-webfont.svg","023cdfdddad396b3f2603430cf3c9f47"],["D:/blog/public/fonts/chancery/apple-chancery-webfont.ttf","49ec3c7bf028bca65ea9ef93614b2363"],["D:/blog/public/fonts/chancery/apple-chancery-webfont.woff","2e9659ae195f4a74a314901d88520ad0"],["D:/blog/public/image/reward/alipay.png","31b9ade4eab7ae253d9f7802430ecd68"],["D:/blog/public/image/reward/wechat.png","d23e08840223824da2e076076743d880"],["D:/blog/public/index.html","e628309340a74d8c8c3eace26a61e20f"],["D:/blog/public/js/src/bootstrap.js","0b7b370f6eec556b6b314ba5667f8624"],["D:/blog/public/js/src/even.js","580c7b76382c3c67dd952c88e3b65bdd"],["D:/blog/public/lib/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["D:/blog/public/lib/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["D:/blog/public/lib/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["D:/blog/public/lib/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["D:/blog/public/lib/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["D:/blog/public/lib/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["D:/blog/public/lib/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["D:/blog/public/lib/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["D:/blog/public/lib/fancybox/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["D:/blog/public/lib/fancybox/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["D:/blog/public/lib/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["D:/blog/public/lib/fancybox/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["D:/blog/public/lib/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["D:/blog/public/lib/fancybox/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["D:/blog/public/lib/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["D:/blog/public/lib/jquery/jquery-3.1.1.min.js","e071abda8fe61194711cfc2ab99fe104"],["D:/blog/public/lib/slideout/slideout.js","8d02b37e369a41a9cfe3d9f4b2204770"],["D:/blog/public/lib/slideout/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["D:/blog/public/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["D:/blog/public/page/2/index.html","9a0c4266996a0846ec4c068755b5cd31"],["D:/blog/public/tags/bcryptjs/index.html","cf90bd5bb4438898018176d1cad3f276"],["D:/blog/public/tags/cookie/index.html","d08056d87ff7cad3a422d259474b1bdd"],["D:/blog/public/tags/css/index.html","e20e011584e505a5c97cae33ddc64e32"],["D:/blog/public/tags/element-ui/index.html","14d2170357404482420adbc31384511b"],["D:/blog/public/tags/es6/index.html","74690222737707b9fefd155dd6e9071b"],["D:/blog/public/tags/git/index.html","579731fdbbe133ffc0a9516b1ab6a772"],["D:/blog/public/tags/hexo/index.html","315e91eb6b7ce1f2ad0bb7d6c4389fc8"],["D:/blog/public/tags/html/index.html","ed0959e64877a27fc6187f114c0040cf"],["D:/blog/public/tags/http/index.html","531d1925426dc74c2c26a6b8f748099d"],["D:/blog/public/tags/index.html","9a7564b505550578976b0f56be43c0c9"],["D:/blog/public/tags/jwt/index.html","672e1842846504d7b39514962f8be341"],["D:/blog/public/tags/koa/index.html","914a506355d5327d567030212ac2884b"],["D:/blog/public/tags/mysql/index.html","64717a84e5ebc1344c28296b20895f2b"],["D:/blog/public/tags/node-js/index.html","972cee13f8f29fc3579ace54eb6f6326"],["D:/blog/public/tags/session/index.html","e7ea81f2fd2d7ce4e9f27192984581be"],["D:/blog/public/tags/sublime/index.html","d84011693faba0b1683670206fdff433"],["D:/blog/public/tags/termux/index.html","4d4738490e3291fd0dd9470f0ffcd701"],["D:/blog/public/tags/vue/index.html","edaec0eaa3b3ed5fda78246744f535ae"],["D:/blog/public/tags/博客/index.html","72b12a8835790b9db72da640d8bc7d7f"],["D:/blog/public/tags/好玩/index.html","c56fd219de970b3069851c1bf76656f4"],["D:/blog/public/tags/微信/index.html","3bab163cd20fd614ba49a541b99e5705"],["D:/blog/public/tags/总结/index.html","8d876695877c0a695f316f7441ce08c9"],["D:/blog/public/tags/计划/index.html","de84d3f2f646ca5a95bd0c7a0b2bc4e7"],["D:/blog/public/tags/读书笔记/index.html","0c0f809e9fa2ab66f3018acabb3b9e6b"],["D:/blog/public/tags/项目/index.html","475e9113f887ca07af364fddbd9a7711"]];
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







