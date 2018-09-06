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

var precacheConfig = [["D:/blog/public/alipay.jpg","341181ead5628cbdb15efc2cc771f0e8"],["D:/blog/public/archives/2018/01/index.html","73b350354e6209dff8fd24666547d9fe"],["D:/blog/public/archives/2018/02/index.html","d508fc4ca0d70acf559f1da928716cc3"],["D:/blog/public/archives/2018/03/index.html","4535d31283765501f2f648df9de4dd94"],["D:/blog/public/archives/2018/05/index.html","5bfb13a3ee57b8e655d7c2e1de3ae9a7"],["D:/blog/public/archives/2018/06/index.html","42749d831869207ee4a1077f582618c8"],["D:/blog/public/archives/2018/07/index.html","1e632062dc45ac55265c8b51284556e2"],["D:/blog/public/archives/2018/08/index.html","bf042a0f7a1bbd6a92a89afc3032b114"],["D:/blog/public/archives/2018/09/index.html","2f71f7dbdef5960d04a73d7694b8fb54"],["D:/blog/public/archives/2018/index.html","7cf375d5700bef1eef15aea8d0a79073"],["D:/blog/public/archives/2018/page/2/index.html","ceb07ac2641fbb35ec9ac55ed91895ec"],["D:/blog/public/archives/index.html","825c2d989c7ffd862d7906fb716c15ce"],["D:/blog/public/archives/page/2/index.html","75abdf0b3cba56ea9f8be2715df727b6"],["D:/blog/public/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["D:/blog/public/css/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/blog/public/css/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["D:/blog/public/css/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/blog/public/css/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/blog/public/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["D:/blog/public/css/style.css","ab1dedb5e818e6dc779e6146f02183bf"],["D:/blog/public/duoshuo/embed.js","3bc799e75436ad0d34de1a8ba19f18d8"],["D:/blog/public/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["D:/blog/public/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["D:/blog/public/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["D:/blog/public/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["D:/blog/public/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["D:/blog/public/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["D:/blog/public/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["D:/blog/public/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["D:/blog/public/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["D:/blog/public/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["D:/blog/public/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["D:/blog/public/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["D:/blog/public/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["D:/blog/public/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["D:/blog/public/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["D:/blog/public/images/icons/144x144.png","470afc738cac5185d0f6db3d406cdab9"],["D:/blog/public/images/icons/192x192.png","aa4435b50c5b2226f9ce969131e91c7c"],["D:/blog/public/images/icons/512x512.png","3ba385f3213973cc606a98f8a0ee1306"],["D:/blog/public/images/icons/72x72.png","a9ca6029cb88d884fca7e72ea6efe3f7"],["D:/blog/public/images/right3.png","6491d9493b8b35bdf86370667b5fe00e"],["D:/blog/public/images/top2.png","ec03ef4e4f87c01479415dfb3edc29e4"],["D:/blog/public/index.html","4005c83167284f6e944dae890f4fcb0d"],["D:/blog/public/jquery/jquery.min.js","ccd0edd113b78697e04fb5c1b519a5cd"],["D:/blog/public/js/elevator.js","f89478a341131c143be48c4e0e7811f1"],["D:/blog/public/js/is.js","66be10de22c4fecc172832c6db8ab13a"],["D:/blog/public/js/posts.js","02ed3c2e5ca0e51187e08a0014381a68"],["D:/blog/public/js/script.js","68ca2afadf22c845ebae2180f51be631"],["D:/blog/public/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["D:/blog/public/page/2/index.html","2e86170b00d94c07af8a79e31a60e9a4"],["D:/blog/public/page/3/index.html","ca12cbea491d10b13d643c6b85b1551d"],["D:/blog/public/post/CSS水平垂直居中对齐方法小结/1.jpg","51f3ee1b42fad2a1f88202659193385b"],["D:/blog/public/post/CSS水平垂直居中对齐方法小结/2.jpg","04cda970fc3b8f4e01771f74d895295e"],["D:/blog/public/post/CSS水平垂直居中对齐方法小结/index.html","5fc8fcaeac7c9eff7e5a9c09dd87b996"],["D:/blog/public/post/DRF中APIView和viewsets的区别/1.jpg","69d013977561527dcec34dc5d186291a"],["D:/blog/public/post/DRF中APIView和viewsets的区别/index.html","4dc11f64c8dbc8b17edcc103a59937e2"],["D:/blog/public/post/Django入门知识总结/1.jpg","cec735502a5e1843015d92754be46524"],["D:/blog/public/post/Django入门知识总结/2.jpg","f7d5a5878bca6b091aacafc0aa911114"],["D:/blog/public/post/Django入门知识总结/3.jpg","0d848cec3de292ce75b4e6b2e6543dad"],["D:/blog/public/post/Django入门知识总结/4.jpg","62dd9b171c724a7f2a66cd90aa313d70"],["D:/blog/public/post/Django入门知识总结/index.html","83cb2735ed6961faa3676f2a3d2e83b7"],["D:/blog/public/post/Django报错集合/index.html","f16235a53cfb7b86dca583c795971120"],["D:/blog/public/post/ES6常用知识点总结/index.html","e9bfe69942db074591e70ab73bee0c9a"],["D:/blog/public/post/Element-UI使用小技巧/index.html","7a91f957664732a8a24d00f4a3b811a4"],["D:/blog/public/post/HTML标签和CSS属性总结/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["D:/blog/public/post/HTML标签和CSS属性总结/2.jpg","0ce32db6e419a476096562b565be4b6e"],["D:/blog/public/post/HTML标签和CSS属性总结/3.jpg","1bc574fd742185d597acbb854d5a3baf"],["D:/blog/public/post/HTML标签和CSS属性总结/5.jpg","74f1c17fd7bee0e4c9d07c76f2c240f1"],["D:/blog/public/post/HTML标签和CSS属性总结/6.jpg","56deaaae4175a2456140a1305a111da1"],["D:/blog/public/post/HTML标签和CSS属性总结/index.html","7b8e29a4d731f613ba7bb936bfe4711d"],["D:/blog/public/post/JavaScript30知识点总结/index.html","5fc1b0ab7d741a64e607c10212c9c0b2"],["D:/blog/public/post/Koa-JSON-WEB-TOKEN-bcrypt实现登录注册/index.html","207217361a2f50a08844ea5a18a4125f"],["D:/blog/public/post/git操作总结/1.jpg","c6ac7154ff9c999d4718695abdc41d54"],["D:/blog/public/post/git操作总结/2.jpg","a94c4c9184568294fa93d18f0bc97e67"],["D:/blog/public/post/git操作总结/3.jpg","530e6fa7426de54e401c1c5d1b24ddbb"],["D:/blog/public/post/git操作总结/4.jpg","579916473c25f423d735a2527cde4a47"],["D:/blog/public/post/git操作总结/5.jpg","ec33317c9bf58acf77ffd0b597f28ddb"],["D:/blog/public/post/git操作总结/6.jpg","4da889f072f05155b6ecf5a9f715b7c4"],["D:/blog/public/post/git操作总结/7.jpg","bceee006e1808ee3a6667711c498faeb"],["D:/blog/public/post/git操作总结/index.html","2a22646b57785e368d1d5012ba462833"],["D:/blog/public/post/js之arguments/index.html","ad94b3c05bf9eb374da802de1588b4fe"],["D:/blog/public/post/js之闭包/1.jpg","7b2f9a167ac938e4d36184abca041321"],["D:/blog/public/post/js之闭包/index.html","d9efcc2051e2bcb0cb38b0fabc43c050"],["D:/blog/public/post/sublime常见问题总结/2.jpg","93d0b2d35baed0623308f881f4f631bb"],["D:/blog/public/post/sublime常见问题总结/3.jpg","ebbfa28ca878ae747e4aacc9c23adb24"],["D:/blog/public/post/sublime常见问题总结/4.jpg","4e2b113a89f2167d24dd64d15dc15c64"],["D:/blog/public/post/sublime常见问题总结/5.jpg","f6a9b1997b3e0644d9bee9ca62b5e630"],["D:/blog/public/post/sublime常见问题总结/6.jpg","eaeb6fa1b93f3fc2d044da44c0c9448f"],["D:/blog/public/post/sublime常见问题总结/7.jpg","53c097cb5e5418542f6d514e26a8deab"],["D:/blog/public/post/sublime常见问题总结/8.jpg","7933d731ef8fe4dc631732b4f9501fbe"],["D:/blog/public/post/sublime常见问题总结/9.jpg","e445dae4744080bca26ae241d4e46743"],["D:/blog/public/post/sublime常见问题总结/index.html","dab70ad58abf95293be38a7c728eb297"],["D:/blog/public/post/web版微信协议分析/1.png","276e857db80a166df5d256cdd6ee690c"],["D:/blog/public/post/web版微信协议分析/index.html","67d6a9789f7b383fb13290b549e61d82"],["D:/blog/public/post/《CSS世界》读书笔记/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["D:/blog/public/post/《CSS世界》读书笔记/10.jpg","89dbb7c8dfab6f4f1091b7d38eb6fec7"],["D:/blog/public/post/《CSS世界》读书笔记/11.jpg","329e0b687c551339709fd43059511978"],["D:/blog/public/post/《CSS世界》读书笔记/2.jpg","e739bb584f57bc42b4ddb538e41c7908"],["D:/blog/public/post/《CSS世界》读书笔记/3.jpg","ce15ac7a40030de731fa5ad0c21fb247"],["D:/blog/public/post/《CSS世界》读书笔记/4.jpg","1eca5770590b0fb06ab85a3b9fe19ba6"],["D:/blog/public/post/《CSS世界》读书笔记/5.jpg","7f9c4805e1e9ceb141007f50d32ce384"],["D:/blog/public/post/《CSS世界》读书笔记/6.jpg","4088bd355be73c0510982b9ccf61131d"],["D:/blog/public/post/《CSS世界》读书笔记/7.jpg","5e0677502400a40c6917f8695c382a7d"],["D:/blog/public/post/《CSS世界》读书笔记/8.jpg","c9e67995e83f2fbf4bf3a2ba131d9ba0"],["D:/blog/public/post/《CSS世界》读书笔记/9.jpg","88444ee5d3cb0581ab848a0b41d86b63"],["D:/blog/public/post/《CSS世界》读书笔记/index.html","cdd7f90d5863016497b2804b652ccc03"],["D:/blog/public/post/利用Termux在手机上写nodejs/1.jpg","e2033c399d54ecea351cf6f63f626c47"],["D:/blog/public/post/利用Termux在手机上写nodejs/2.jpg","4f2b8678c5f308f237caf8c74a7e3107"],["D:/blog/public/post/利用Termux在手机上写nodejs/3.jpg","7183864982fb234d21552a4ca0a7c2f9"],["D:/blog/public/post/利用Termux在手机上写nodejs/index.html","b0e3311b2c693212e913d16a2cc106a6"],["D:/blog/public/post/博客维护日志/1.jpg","04803847d8f365a9ddac535e57f9405a"],["D:/blog/public/post/博客维护日志/10.jpg","2615ef0ee65da1d9283b8061e065c4ba"],["D:/blog/public/post/博客维护日志/11.jpg","050bebef8655836ba9074b4367f5855e"],["D:/blog/public/post/博客维护日志/12.jpg","d7d6c4f756e44cd4fe0b967775fef109"],["D:/blog/public/post/博客维护日志/13.jpg","5f81e643d34808d4df1b8dfc1c054dd8"],["D:/blog/public/post/博客维护日志/14.jpg","21b2da78e82b7f507ff5595c9505cdae"],["D:/blog/public/post/博客维护日志/2.jpg","7e184d73b9ddfc31127e47a3ef84e09c"],["D:/blog/public/post/博客维护日志/20180204-1.jpg","9a4b0abc7907a0abf55d69a53db47336"],["D:/blog/public/post/博客维护日志/3.jpg","eef9ed3d3d396e0750b9ef1d815cc980"],["D:/blog/public/post/博客维护日志/4.jpg","ef5e78c6672c43c437e6f7232e058534"],["D:/blog/public/post/博客维护日志/5.jpg","a60f60b34755cddad10f310beaa31057"],["D:/blog/public/post/博客维护日志/6.jpg","e64c58553f3b59510213de28faf88317"],["D:/blog/public/post/博客维护日志/7.jpg","dc705003574044800d103f6cfec270b6"],["D:/blog/public/post/博客维护日志/9.jpg","07a40cc9194ebf7e3f640e9a3e6485c5"],["D:/blog/public/post/博客维护日志/index.html","e3df9354c3a9b4b1cbc8c040edd07f37"],["D:/blog/public/post/如何用Hexo在GitHub上搭建博客/1.jpg","04803847d8f365a9ddac535e57f9405a"],["D:/blog/public/post/如何用Hexo在GitHub上搭建博客/index.html","e7b7a920ce17d12a7e07adc2a1c85582"],["D:/blog/public/post/小程序入门知识总结/index.html","e2c9f113344adc1268e5b9a9158f3319"],["D:/blog/public/post/小程序实现三列选择器组件/1.gif","263e3c09511c33def1a1c0c58a891e17"],["D:/blog/public/post/小程序实现三列选择器组件/index.html","1c580c46fcdfe64dfd43c726c238aa90"],["D:/blog/public/post/日常学习自问自答/1.jpg","97615b3a6763977bd0be70ec07d05ca5"],["D:/blog/public/post/日常学习自问自答/2.jpg","69a1d4b66bf1cca215188b1393d172ff"],["D:/blog/public/post/日常学习自问自答/index.html","b4293e235cd1e8d8bfd7c4ac09e48496"],["D:/blog/public/post/暑假计划/index.html","99ffa94208dcc0a12a9bd936c963480c"],["D:/blog/public/post/理解Cookie和Sessin机制/1.jpg","a262f3797e298c3949028f464bfc7b8c"],["D:/blog/public/post/理解Cookie和Sessin机制/index.html","083bd117008b74f654abe2942ccfda9b"],["D:/blog/public/post/计划表/index.html","80491e31132aa2704ff493c20a6fe38c"],["D:/blog/public/post/转载-理解javascript中的立即执行函数-function/index.html","fdf610c822dce81781fac3249c1941e8"],["D:/blog/public/tags/APIView/index.html","8bfb4cb7be0245644ce0f1a472eb74ac"],["D:/blog/public/tags/DRF/index.html","71215dc01c9effd0ab05481f660310ee"],["D:/blog/public/tags/bcryptjs/index.html","93a73becf8fe2be412b92aae21ed90e6"],["D:/blog/public/tags/cookie/index.html","e7785efe37d0af75c83d9dab631a1453"],["D:/blog/public/tags/css/index.html","560145e296be7780d1d27d50dd54875f"],["D:/blog/public/tags/django/index.html","d65051758a4d371cb33f26a907e76815"],["D:/blog/public/tags/element-ui/index.html","4de926953d3038083e256d306cb5e548"],["D:/blog/public/tags/es6/index.html","a02cc2c15536819395cbd06434930774"],["D:/blog/public/tags/git/index.html","a1fc0325ef127a5f85a471621e8d07b8"],["D:/blog/public/tags/hexo/index.html","0a7d94374855e1b50057a7048776fcfd"],["D:/blog/public/tags/html/index.html","ebb11a71d9189355fcf84a3b222b7be8"],["D:/blog/public/tags/http/index.html","5c37a980fb356ddf005ef44d1350adf6"],["D:/blog/public/tags/index.html","5b9914693ce28590cf6fc54ccb2f0b34"],["D:/blog/public/tags/javascript/index.html","5ffc9591b89fcec7fb1b3ffa98e5120c"],["D:/blog/public/tags/js/index.html","ddd291a0206fc4d65d8039877d9c37ab"],["D:/blog/public/tags/jwt/index.html","404179ee0e9df93b85764af1ded35b7d"],["D:/blog/public/tags/koa/index.html","7bf438fdd5a64d7ea8f8b8e873a1d297"],["D:/blog/public/tags/mysql/index.html","79fd93a6df3124cbe47cb19a0f11dabc"],["D:/blog/public/tags/node-js/index.html","57425016be74a8debc1529b05f517ce4"],["D:/blog/public/tags/python/index.html","03b0071a23be9d2049cd284648631efa"],["D:/blog/public/tags/session/index.html","8c11747a308f320a03b8bd26a0789c07"],["D:/blog/public/tags/sublime/index.html","9ac0836cb081d1a1b4dcfead9b3a6db2"],["D:/blog/public/tags/termux/index.html","9265d2c7b5dae7c40cca8d2c50976a44"],["D:/blog/public/tags/viewsets/index.html","99134dae6acddce0375136f099b04ca6"],["D:/blog/public/tags/vue/index.html","cde40aca5208fb3eaa9407144575b819"],["D:/blog/public/tags/入门/index.html","4403cadcf520d25063da4ac01a0cec10"],["D:/blog/public/tags/博客/index.html","4ddc3b953570260c61068c836d047424"],["D:/blog/public/tags/好玩/index.html","fc63af40e4c986b697417ac497d3c09b"],["D:/blog/public/tags/小程序/index.html","d7920ef03fdab548d68fb43225ace9ed"],["D:/blog/public/tags/微信/index.html","82dcac01a36ab1b42d579440312e550a"],["D:/blog/public/tags/总结/index.html","8bb4f038f42804427462f1f16f33723c"],["D:/blog/public/tags/计划/index.html","f266c4d260b078c691f7ee101acbdaa9"],["D:/blog/public/tags/读书笔记/index.html","0bc8896b0a37f252535f81e43148d632"],["D:/blog/public/tags/转载/index.html","51b489ad3d14d77d1dddfe087c1d2895"],["D:/blog/public/tags/闭包/index.html","d4523063d7b9c9938eaea9079b5e0890"],["D:/blog/public/tags/项目/index.html","e9b67c95c36c1e5b6a71994d86ed4ad7"],["D:/blog/public/wechat.png","c09e53484ad2ff847c6e74d38d2e0a2d"]];
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







