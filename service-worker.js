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

var precacheConfig = [["D:/blog/public/alipay.jpg","341181ead5628cbdb15efc2cc771f0e8"],["D:/blog/public/archives/2018/01/index.html","c2662da344c9b174c172a465b1f6b1d3"],["D:/blog/public/archives/2018/02/index.html","ce0fabe764f9514bcd1d418fe1e957cc"],["D:/blog/public/archives/2018/03/index.html","a5735e02fd3d05a13143ac5ec11ab839"],["D:/blog/public/archives/2018/05/index.html","1c9a6fbffd670e8888d7f8e308d33f2e"],["D:/blog/public/archives/2018/06/index.html","958653fcb2162d2f67b55af967bfaee0"],["D:/blog/public/archives/2018/07/index.html","39f9ceb041fb598a91a568f6360a9030"],["D:/blog/public/archives/2018/08/index.html","e8d907e3ada78ad2134bdca70901a1a4"],["D:/blog/public/archives/2018/09/index.html","eaf9f1849553c59fa1d0ddbce894f92b"],["D:/blog/public/archives/2018/index.html","eed7f20eab7475ea744b1999b568c2c0"],["D:/blog/public/archives/2018/page/2/index.html","a697ee1274ec1dee7921446f7a8fa6da"],["D:/blog/public/archives/index.html","63408944f19cdc11a1a091dbd14ca8be"],["D:/blog/public/archives/page/2/index.html","71e0cd8b1b4a051016c20b337e9d66c2"],["D:/blog/public/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["D:/blog/public/css/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/blog/public/css/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["D:/blog/public/css/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/blog/public/css/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/blog/public/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["D:/blog/public/css/style.css","132a7085371852b3778b9fc671a5fe4c"],["D:/blog/public/duoshuo/embed.js","3bc799e75436ad0d34de1a8ba19f18d8"],["D:/blog/public/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["D:/blog/public/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["D:/blog/public/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["D:/blog/public/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["D:/blog/public/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["D:/blog/public/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["D:/blog/public/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["D:/blog/public/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["D:/blog/public/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["D:/blog/public/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["D:/blog/public/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["D:/blog/public/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["D:/blog/public/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["D:/blog/public/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["D:/blog/public/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["D:/blog/public/images/icons/144x144.png","470afc738cac5185d0f6db3d406cdab9"],["D:/blog/public/images/icons/192x192.png","aa4435b50c5b2226f9ce969131e91c7c"],["D:/blog/public/images/icons/512x512.png","3ba385f3213973cc606a98f8a0ee1306"],["D:/blog/public/images/icons/72x72.png","a9ca6029cb88d884fca7e72ea6efe3f7"],["D:/blog/public/images/right3.png","6491d9493b8b35bdf86370667b5fe00e"],["D:/blog/public/images/top2.png","ec03ef4e4f87c01479415dfb3edc29e4"],["D:/blog/public/index.html","939521fdd48870a41bd31bdbf9f04dc2"],["D:/blog/public/jquery/jquery.min.js","ccd0edd113b78697e04fb5c1b519a5cd"],["D:/blog/public/js/elevator.js","f89478a341131c143be48c4e0e7811f1"],["D:/blog/public/js/is.js","66be10de22c4fecc172832c6db8ab13a"],["D:/blog/public/js/posts.js","2d7e0447aca97f17615efc3367b91df2"],["D:/blog/public/js/script.js","6ab9365181ec70a9999707a2ec5289f0"],["D:/blog/public/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["D:/blog/public/page/2/index.html","37d627469ebffcea8827fba7f514903e"],["D:/blog/public/page/3/index.html","b68c98ca4232c06fd83b28524989295c"],["D:/blog/public/post/CSS水平垂直居中对齐方法小结/1.jpg","51f3ee1b42fad2a1f88202659193385b"],["D:/blog/public/post/CSS水平垂直居中对齐方法小结/2.jpg","04cda970fc3b8f4e01771f74d895295e"],["D:/blog/public/post/CSS水平垂直居中对齐方法小结/index.html","719109003b03f10da6dc2468271674b7"],["D:/blog/public/post/DRF中APIView和viewsets的区别/1.jpg","69d013977561527dcec34dc5d186291a"],["D:/blog/public/post/DRF中APIView和viewsets的区别/index.html","325fd70920ee4707a5e963b500253706"],["D:/blog/public/post/Django入门知识总结/1.jpg","cec735502a5e1843015d92754be46524"],["D:/blog/public/post/Django入门知识总结/2.jpg","f7d5a5878bca6b091aacafc0aa911114"],["D:/blog/public/post/Django入门知识总结/3.jpg","0d848cec3de292ce75b4e6b2e6543dad"],["D:/blog/public/post/Django入门知识总结/4.jpg","62dd9b171c724a7f2a66cd90aa313d70"],["D:/blog/public/post/Django入门知识总结/index.html","275cbcaf60ae2b67ed9ea018460c7b3d"],["D:/blog/public/post/Django报错集合/index.html","1366476495278bb4308f4591bb0685f3"],["D:/blog/public/post/ES6常用知识点总结/index.html","9051e5c49ef73e84ec27cd4693f18d33"],["D:/blog/public/post/Element-UI使用小技巧/index.html","9e6393f8e9972afbadfb1e6d195ade12"],["D:/blog/public/post/HTML标签和CSS属性总结/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["D:/blog/public/post/HTML标签和CSS属性总结/2.jpg","0ce32db6e419a476096562b565be4b6e"],["D:/blog/public/post/HTML标签和CSS属性总结/3.jpg","1bc574fd742185d597acbb854d5a3baf"],["D:/blog/public/post/HTML标签和CSS属性总结/5.jpg","74f1c17fd7bee0e4c9d07c76f2c240f1"],["D:/blog/public/post/HTML标签和CSS属性总结/6.jpg","56deaaae4175a2456140a1305a111da1"],["D:/blog/public/post/HTML标签和CSS属性总结/index.html","61bf45b44861d7db155506246ff05b76"],["D:/blog/public/post/JavaScript30知识点总结/index.html","22c0fc2b9a7cc3a253bed6eb20f6ccb6"],["D:/blog/public/post/Koa-JSON-WEB-TOKEN-bcrypt实现登录注册/index.html","05df823f6d218682feefdb60c7408813"],["D:/blog/public/post/git操作总结/1.jpg","c6ac7154ff9c999d4718695abdc41d54"],["D:/blog/public/post/git操作总结/2.jpg","a94c4c9184568294fa93d18f0bc97e67"],["D:/blog/public/post/git操作总结/3.jpg","530e6fa7426de54e401c1c5d1b24ddbb"],["D:/blog/public/post/git操作总结/4.jpg","579916473c25f423d735a2527cde4a47"],["D:/blog/public/post/git操作总结/5.jpg","ec33317c9bf58acf77ffd0b597f28ddb"],["D:/blog/public/post/git操作总结/6.jpg","4da889f072f05155b6ecf5a9f715b7c4"],["D:/blog/public/post/git操作总结/7.jpg","bceee006e1808ee3a6667711c498faeb"],["D:/blog/public/post/git操作总结/index.html","31fbe3fcb143f75861617281103d5ac4"],["D:/blog/public/post/js之闭包/1.jpg","7b2f9a167ac938e4d36184abca041321"],["D:/blog/public/post/js之闭包/index.html","f8604e9cf055fa50fae2100b11b26532"],["D:/blog/public/post/sublime常见问题总结/2.jpg","93d0b2d35baed0623308f881f4f631bb"],["D:/blog/public/post/sublime常见问题总结/3.jpg","ebbfa28ca878ae747e4aacc9c23adb24"],["D:/blog/public/post/sublime常见问题总结/4.jpg","4e2b113a89f2167d24dd64d15dc15c64"],["D:/blog/public/post/sublime常见问题总结/5.jpg","f6a9b1997b3e0644d9bee9ca62b5e630"],["D:/blog/public/post/sublime常见问题总结/6.jpg","eaeb6fa1b93f3fc2d044da44c0c9448f"],["D:/blog/public/post/sublime常见问题总结/7.jpg","53c097cb5e5418542f6d514e26a8deab"],["D:/blog/public/post/sublime常见问题总结/8.jpg","7933d731ef8fe4dc631732b4f9501fbe"],["D:/blog/public/post/sublime常见问题总结/9.jpg","e445dae4744080bca26ae241d4e46743"],["D:/blog/public/post/sublime常见问题总结/index.html","9bc9c8ab52cdf336fd5350b242952f12"],["D:/blog/public/post/web版微信协议分析/1.png","276e857db80a166df5d256cdd6ee690c"],["D:/blog/public/post/web版微信协议分析/index.html","7df2d0542fbc3ef4ade7eb27cfca4ee6"],["D:/blog/public/post/《CSS世界》读书笔记/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["D:/blog/public/post/《CSS世界》读书笔记/10.jpg","89dbb7c8dfab6f4f1091b7d38eb6fec7"],["D:/blog/public/post/《CSS世界》读书笔记/11.jpg","329e0b687c551339709fd43059511978"],["D:/blog/public/post/《CSS世界》读书笔记/2.jpg","e739bb584f57bc42b4ddb538e41c7908"],["D:/blog/public/post/《CSS世界》读书笔记/3.jpg","ce15ac7a40030de731fa5ad0c21fb247"],["D:/blog/public/post/《CSS世界》读书笔记/4.jpg","1eca5770590b0fb06ab85a3b9fe19ba6"],["D:/blog/public/post/《CSS世界》读书笔记/5.jpg","7f9c4805e1e9ceb141007f50d32ce384"],["D:/blog/public/post/《CSS世界》读书笔记/6.jpg","4088bd355be73c0510982b9ccf61131d"],["D:/blog/public/post/《CSS世界》读书笔记/7.jpg","5e0677502400a40c6917f8695c382a7d"],["D:/blog/public/post/《CSS世界》读书笔记/8.jpg","c9e67995e83f2fbf4bf3a2ba131d9ba0"],["D:/blog/public/post/《CSS世界》读书笔记/9.jpg","88444ee5d3cb0581ab848a0b41d86b63"],["D:/blog/public/post/《CSS世界》读书笔记/index.html","1d235e9d7782f5dc5a3ee7910e4143e2"],["D:/blog/public/post/利用Termux在手机上写nodejs/1.jpg","e2033c399d54ecea351cf6f63f626c47"],["D:/blog/public/post/利用Termux在手机上写nodejs/2.jpg","4f2b8678c5f308f237caf8c74a7e3107"],["D:/blog/public/post/利用Termux在手机上写nodejs/3.jpg","7183864982fb234d21552a4ca0a7c2f9"],["D:/blog/public/post/利用Termux在手机上写nodejs/index.html","caee3a392017f94ba895834de0f25904"],["D:/blog/public/post/博客维护日志/1.jpg","04803847d8f365a9ddac535e57f9405a"],["D:/blog/public/post/博客维护日志/10.jpg","2615ef0ee65da1d9283b8061e065c4ba"],["D:/blog/public/post/博客维护日志/11.jpg","050bebef8655836ba9074b4367f5855e"],["D:/blog/public/post/博客维护日志/12.jpg","d7d6c4f756e44cd4fe0b967775fef109"],["D:/blog/public/post/博客维护日志/13.jpg","5f81e643d34808d4df1b8dfc1c054dd8"],["D:/blog/public/post/博客维护日志/14.jpg","21b2da78e82b7f507ff5595c9505cdae"],["D:/blog/public/post/博客维护日志/2.jpg","7e184d73b9ddfc31127e47a3ef84e09c"],["D:/blog/public/post/博客维护日志/20180204-1.jpg","9a4b0abc7907a0abf55d69a53db47336"],["D:/blog/public/post/博客维护日志/3.jpg","eef9ed3d3d396e0750b9ef1d815cc980"],["D:/blog/public/post/博客维护日志/4.jpg","ef5e78c6672c43c437e6f7232e058534"],["D:/blog/public/post/博客维护日志/5.jpg","a60f60b34755cddad10f310beaa31057"],["D:/blog/public/post/博客维护日志/6.jpg","e64c58553f3b59510213de28faf88317"],["D:/blog/public/post/博客维护日志/7.jpg","dc705003574044800d103f6cfec270b6"],["D:/blog/public/post/博客维护日志/9.jpg","07a40cc9194ebf7e3f640e9a3e6485c5"],["D:/blog/public/post/博客维护日志/index.html","86a46e96e537df7aac49ca5032965953"],["D:/blog/public/post/如何用Hexo在GitHub上搭建博客/1.jpg","04803847d8f365a9ddac535e57f9405a"],["D:/blog/public/post/如何用Hexo在GitHub上搭建博客/index.html","16038bfbb9eb89dd43600c7eafd370a2"],["D:/blog/public/post/小程序入门知识总结/index.html","064eec0f4c1aa0f4d329cfe9952bc581"],["D:/blog/public/post/小程序实现三列选择器组件/1.gif","263e3c09511c33def1a1c0c58a891e17"],["D:/blog/public/post/小程序实现三列选择器组件/index.html","b6aa98228012622c291c0fb6b9bafdf5"],["D:/blog/public/post/日常学习自问自答/1.jpg","97615b3a6763977bd0be70ec07d05ca5"],["D:/blog/public/post/日常学习自问自答/2.jpg","69a1d4b66bf1cca215188b1393d172ff"],["D:/blog/public/post/日常学习自问自答/index.html","a339a7502c4f06d4d5c4d8949243a4a9"],["D:/blog/public/post/暑假计划/index.html","6fafb0c276e02c1d9218739d98d5f688"],["D:/blog/public/post/理解Cookie和Sessin机制/1.jpg","a262f3797e298c3949028f464bfc7b8c"],["D:/blog/public/post/理解Cookie和Sessin机制/index.html","4454be8d9f03ddf20acecae6e68100bc"],["D:/blog/public/post/计划表/index.html","ac7e9b44c093ce9f3118f1429fca49f0"],["D:/blog/public/tags/APIView/index.html","be5e1580a1441e1292e1f3941171350a"],["D:/blog/public/tags/DRF/index.html","5e96e39d2e761ffb82314ed62f53e413"],["D:/blog/public/tags/bcryptjs/index.html","25d615c59070a8887cd7af0f6d13bcfe"],["D:/blog/public/tags/cookie/index.html","d85d44c2f329905dab7f0682c13e97ab"],["D:/blog/public/tags/css/index.html","a89117238d1d28731f58434921c6b5ae"],["D:/blog/public/tags/django/index.html","3fbb4510fb9def94ee7bbafc3598d2ca"],["D:/blog/public/tags/element-ui/index.html","ec19e69361f920db571b8b635dcf0881"],["D:/blog/public/tags/es6/index.html","c74754a8551eefa07e95364ee39e7435"],["D:/blog/public/tags/git/index.html","826be2d2348b140e33c553828a575f3d"],["D:/blog/public/tags/hexo/index.html","4da6376d9d612a8dd4017c0371d40b12"],["D:/blog/public/tags/html/index.html","6d9ca02314b6af7276347b2accc42722"],["D:/blog/public/tags/http/index.html","e5c8e49087d3ca4b8e6e5c38747988f7"],["D:/blog/public/tags/index.html","0497e426f334d749daa40efd3f80f300"],["D:/blog/public/tags/javascript/index.html","d228041be2ea67e38277d0a262ffd832"],["D:/blog/public/tags/jwt/index.html","5768822b9477e7de46a2299f44ea6bff"],["D:/blog/public/tags/koa/index.html","aa75fec894a616eeacc19b4ac13a35a5"],["D:/blog/public/tags/mysql/index.html","2f1b65021303637359ddf1d269598b56"],["D:/blog/public/tags/node-js/index.html","8474a659a9630e1e1350b6bdfe42d2ff"],["D:/blog/public/tags/python/index.html","0e1340688dadfe594f147a45cb6ad316"],["D:/blog/public/tags/session/index.html","c3fa0f0539ab31478aea33285a163066"],["D:/blog/public/tags/sublime/index.html","49c992e2ad517c4baa282d3893632553"],["D:/blog/public/tags/termux/index.html","bf7c2f0d5cef65a53d1fce566aa0d199"],["D:/blog/public/tags/viewsets/index.html","65ab4d9ebfd702b90b9cd9d10dd45bac"],["D:/blog/public/tags/vue/index.html","42f35dbe9904e00ba0bb8128a86a946b"],["D:/blog/public/tags/入门/index.html","7919185fc00944a3c1e0c67b8bd7d1a0"],["D:/blog/public/tags/博客/index.html","8aade67ab4b6be3c63e60b339af3b9ab"],["D:/blog/public/tags/好玩/index.html","fa89dca14f2cc720cbc7532c534d694f"],["D:/blog/public/tags/小程序/index.html","38de6c5928ab3ca187690bcb9141e16b"],["D:/blog/public/tags/微信/index.html","2fea8a335f04ef1bb5b5b05f9ba697a6"],["D:/blog/public/tags/总结/index.html","20091e3ff70a4bf3e2b52ea3ef3f1c2b"],["D:/blog/public/tags/计划/index.html","f8d5e0f73d32cf712b17b8d296293585"],["D:/blog/public/tags/读书笔记/index.html","cca7953782be8755764e6a4efb1222af"],["D:/blog/public/tags/闭包/index.html","f6dd6db5fd017a63463c0f1c840557ca"],["D:/blog/public/tags/项目/index.html","f1a182d68c2a710265a5cacc99f76d57"],["D:/blog/public/wechat.png","c09e53484ad2ff847c6e74d38d2e0a2d"]];
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







