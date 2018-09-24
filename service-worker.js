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

var precacheConfig = [["D:/blog/public/alipay.jpg","341181ead5628cbdb15efc2cc771f0e8"],["D:/blog/public/archives/2018/01/index.html","87357aa1ed604f66d3e21e268dfa90bc"],["D:/blog/public/archives/2018/02/index.html","66b8195969cb24df354528ca70c813b2"],["D:/blog/public/archives/2018/03/index.html","30cc44682aa7838b3b5e30662a41cbf3"],["D:/blog/public/archives/2018/05/index.html","23d08da3486217e13e7c55bba6986ee3"],["D:/blog/public/archives/2018/06/index.html","4c48e322966b4c0bcc43bb82ef231591"],["D:/blog/public/archives/2018/07/index.html","4ed3263d438db47ef7a730c3a79086d9"],["D:/blog/public/archives/2018/08/index.html","60c49da36f3e9d602a1273326cd5b942"],["D:/blog/public/archives/2018/09/index.html","c098825678b15c569558564c1e2396dc"],["D:/blog/public/archives/2018/index.html","8bd32e4b7f4867de0e6ba413ae11df51"],["D:/blog/public/archives/2018/page/2/index.html","01ef5822c36d5efd93cf1b0ce10e6d8e"],["D:/blog/public/archives/index.html","6e4d2ff5062abbe346f1c9cf6f36b38f"],["D:/blog/public/archives/page/2/index.html","20a97b2b5707415b44d67c3f93f37cd5"],["D:/blog/public/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["D:/blog/public/css/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/blog/public/css/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["D:/blog/public/css/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/blog/public/css/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/blog/public/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["D:/blog/public/css/style.css","8b5050ccbcc3266c55d4baf57dcf7a5f"],["D:/blog/public/duoshuo/embed.js","3bc799e75436ad0d34de1a8ba19f18d8"],["D:/blog/public/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["D:/blog/public/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["D:/blog/public/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["D:/blog/public/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["D:/blog/public/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["D:/blog/public/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["D:/blog/public/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["D:/blog/public/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["D:/blog/public/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["D:/blog/public/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["D:/blog/public/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["D:/blog/public/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["D:/blog/public/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["D:/blog/public/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["D:/blog/public/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["D:/blog/public/images/icons/144x144.png","470afc738cac5185d0f6db3d406cdab9"],["D:/blog/public/images/icons/192x192.png","aa4435b50c5b2226f9ce969131e91c7c"],["D:/blog/public/images/icons/512x512.png","3ba385f3213973cc606a98f8a0ee1306"],["D:/blog/public/images/icons/72x72.png","a9ca6029cb88d884fca7e72ea6efe3f7"],["D:/blog/public/images/right3.png","6491d9493b8b35bdf86370667b5fe00e"],["D:/blog/public/images/top2.png","ec03ef4e4f87c01479415dfb3edc29e4"],["D:/blog/public/index.html","436162d53da32bf1a8e2127507044686"],["D:/blog/public/jquery/jquery.min.js","ccd0edd113b78697e04fb5c1b519a5cd"],["D:/blog/public/js/elevator.js","f89478a341131c143be48c4e0e7811f1"],["D:/blog/public/js/is.js","66be10de22c4fecc172832c6db8ab13a"],["D:/blog/public/js/posts.js","b39f3cf47aae6e9218ec7e2592d459fd"],["D:/blog/public/js/script.js","6ab9365181ec70a9999707a2ec5289f0"],["D:/blog/public/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["D:/blog/public/page/2/index.html","bdcd28672a44cf3b2cc71ebdd2f1897f"],["D:/blog/public/page/3/index.html","19653bc2c2d8667207fc65a39302eaff"],["D:/blog/public/post/CSS水平垂直居中对齐方法小结/1.jpg","51f3ee1b42fad2a1f88202659193385b"],["D:/blog/public/post/CSS水平垂直居中对齐方法小结/2.jpg","04cda970fc3b8f4e01771f74d895295e"],["D:/blog/public/post/CSS水平垂直居中对齐方法小结/index.html","a55d77c2d10483c6e57b1326a3224660"],["D:/blog/public/post/DRF中APIView和viewsets的区别/1.jpg","69d013977561527dcec34dc5d186291a"],["D:/blog/public/post/DRF中APIView和viewsets的区别/index.html","6fc0435e423a92f8a4aeca3e4fd64cc1"],["D:/blog/public/post/Django入门知识总结/1.jpg","cec735502a5e1843015d92754be46524"],["D:/blog/public/post/Django入门知识总结/2.jpg","f7d5a5878bca6b091aacafc0aa911114"],["D:/blog/public/post/Django入门知识总结/3.jpg","0d848cec3de292ce75b4e6b2e6543dad"],["D:/blog/public/post/Django入门知识总结/4.jpg","62dd9b171c724a7f2a66cd90aa313d70"],["D:/blog/public/post/Django入门知识总结/index.html","30600e0e1452c9aba29be185a46a0f06"],["D:/blog/public/post/Django报错集合/index.html","a7b6e9a9e32675bfa4727435782643a3"],["D:/blog/public/post/ES6常用知识点总结/index.html","cabedda46dd18384cb372afecaea9e13"],["D:/blog/public/post/Element-UI使用小技巧/index.html","e4ec5d8a5aea1884e438789bddd5df99"],["D:/blog/public/post/HTML标签和CSS属性总结/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["D:/blog/public/post/HTML标签和CSS属性总结/2.jpg","0ce32db6e419a476096562b565be4b6e"],["D:/blog/public/post/HTML标签和CSS属性总结/3.jpg","1bc574fd742185d597acbb854d5a3baf"],["D:/blog/public/post/HTML标签和CSS属性总结/5.jpg","74f1c17fd7bee0e4c9d07c76f2c240f1"],["D:/blog/public/post/HTML标签和CSS属性总结/6.jpg","56deaaae4175a2456140a1305a111da1"],["D:/blog/public/post/HTML标签和CSS属性总结/index.html","5c80e8be6f8e32c3ac4f7613fd716d0e"],["D:/blog/public/post/JS中Array对象的一些注意事项/index.html","51532d6b4c3f11bfba5ade3d527a1c87"],["D:/blog/public/post/JS之事件捕获和事件冒泡/1.png","3224f2d08de02119afa5a9710f121b76"],["D:/blog/public/post/JS之事件捕获和事件冒泡/2.png","a0ce707fd32febd8458aa4a901a061d0"],["D:/blog/public/post/JS之事件捕获和事件冒泡/3.jpg","87a646ca88038f9e2d93cbcd698d45fb"],["D:/blog/public/post/JS之事件捕获和事件冒泡/index.html","442329782e27efb2c61e53940c20573c"],["D:/blog/public/post/JS之函数防抖和函数节流/index.html","96f0bf553d4a981cfa0a3532d30e20f8"],["D:/blog/public/post/JavaScript30知识点总结/index.html","c639d3fb3655161d313cad772cece4e1"],["D:/blog/public/post/Koa-JSON-WEB-TOKEN-bcrypt实现登录注册/index.html","df56dfe998b78307615f93e5312167b6"],["D:/blog/public/post/git操作总结/1.jpg","c6ac7154ff9c999d4718695abdc41d54"],["D:/blog/public/post/git操作总结/2.jpg","a94c4c9184568294fa93d18f0bc97e67"],["D:/blog/public/post/git操作总结/3.jpg","530e6fa7426de54e401c1c5d1b24ddbb"],["D:/blog/public/post/git操作总结/4.jpg","579916473c25f423d735a2527cde4a47"],["D:/blog/public/post/git操作总结/5.jpg","ec33317c9bf58acf77ffd0b597f28ddb"],["D:/blog/public/post/git操作总结/6.jpg","4da889f072f05155b6ecf5a9f715b7c4"],["D:/blog/public/post/git操作总结/7.jpg","bceee006e1808ee3a6667711c498faeb"],["D:/blog/public/post/git操作总结/index.html","ae9fef0a99a713a6ff2b2117b67aa79f"],["D:/blog/public/post/js之arguments/index.html","4ffa6de2b47ea560130c4e52fdf1b229"],["D:/blog/public/post/js之闭包/1.jpg","7b2f9a167ac938e4d36184abca041321"],["D:/blog/public/post/js之闭包/index.html","a321964d1a891d1f903782f078ecaf3d"],["D:/blog/public/post/js之高阶函数/index.html","a5dc8c89fed17d2d44c68f4652b36fcd"],["D:/blog/public/post/sublime常见问题总结/2.jpg","93d0b2d35baed0623308f881f4f631bb"],["D:/blog/public/post/sublime常见问题总结/3.jpg","ebbfa28ca878ae747e4aacc9c23adb24"],["D:/blog/public/post/sublime常见问题总结/4.jpg","4e2b113a89f2167d24dd64d15dc15c64"],["D:/blog/public/post/sublime常见问题总结/5.jpg","f6a9b1997b3e0644d9bee9ca62b5e630"],["D:/blog/public/post/sublime常见问题总结/6.jpg","eaeb6fa1b93f3fc2d044da44c0c9448f"],["D:/blog/public/post/sublime常见问题总结/7.jpg","53c097cb5e5418542f6d514e26a8deab"],["D:/blog/public/post/sublime常见问题总结/8.jpg","7933d731ef8fe4dc631732b4f9501fbe"],["D:/blog/public/post/sublime常见问题总结/9.jpg","e445dae4744080bca26ae241d4e46743"],["D:/blog/public/post/sublime常见问题总结/index.html","f32d95daa76caaef0c4b253d51cddd2a"],["D:/blog/public/post/web版微信协议分析/1.png","276e857db80a166df5d256cdd6ee690c"],["D:/blog/public/post/web版微信协议分析/index.html","d42ddd0cc6e2ecd3f97242a7111b5579"],["D:/blog/public/post/《CSS世界》读书笔记/1.jpg","eedcf6df48503b2debc832eeba0694f9"],["D:/blog/public/post/《CSS世界》读书笔记/10.jpg","89dbb7c8dfab6f4f1091b7d38eb6fec7"],["D:/blog/public/post/《CSS世界》读书笔记/11.jpg","329e0b687c551339709fd43059511978"],["D:/blog/public/post/《CSS世界》读书笔记/2.jpg","e739bb584f57bc42b4ddb538e41c7908"],["D:/blog/public/post/《CSS世界》读书笔记/3.jpg","ce15ac7a40030de731fa5ad0c21fb247"],["D:/blog/public/post/《CSS世界》读书笔记/4.jpg","1eca5770590b0fb06ab85a3b9fe19ba6"],["D:/blog/public/post/《CSS世界》读书笔记/5.jpg","7f9c4805e1e9ceb141007f50d32ce384"],["D:/blog/public/post/《CSS世界》读书笔记/6.jpg","4088bd355be73c0510982b9ccf61131d"],["D:/blog/public/post/《CSS世界》读书笔记/7.jpg","5e0677502400a40c6917f8695c382a7d"],["D:/blog/public/post/《CSS世界》读书笔记/8.jpg","c9e67995e83f2fbf4bf3a2ba131d9ba0"],["D:/blog/public/post/《CSS世界》读书笔记/9.jpg","88444ee5d3cb0581ab848a0b41d86b63"],["D:/blog/public/post/《CSS世界》读书笔记/index.html","76089b094c1d64ce24987eb55f4d7d1f"],["D:/blog/public/post/利用Termux在手机上写nodejs/1.jpg","e2033c399d54ecea351cf6f63f626c47"],["D:/blog/public/post/利用Termux在手机上写nodejs/2.jpg","4f2b8678c5f308f237caf8c74a7e3107"],["D:/blog/public/post/利用Termux在手机上写nodejs/3.jpg","7183864982fb234d21552a4ca0a7c2f9"],["D:/blog/public/post/利用Termux在手机上写nodejs/index.html","e52caf5016a6b9f4c82a95e68666b7a8"],["D:/blog/public/post/博客维护日志/1.jpg","04803847d8f365a9ddac535e57f9405a"],["D:/blog/public/post/博客维护日志/10.jpg","2615ef0ee65da1d9283b8061e065c4ba"],["D:/blog/public/post/博客维护日志/11.jpg","050bebef8655836ba9074b4367f5855e"],["D:/blog/public/post/博客维护日志/12.jpg","d7d6c4f756e44cd4fe0b967775fef109"],["D:/blog/public/post/博客维护日志/13.jpg","5f81e643d34808d4df1b8dfc1c054dd8"],["D:/blog/public/post/博客维护日志/14.jpg","21b2da78e82b7f507ff5595c9505cdae"],["D:/blog/public/post/博客维护日志/2.jpg","7e184d73b9ddfc31127e47a3ef84e09c"],["D:/blog/public/post/博客维护日志/20180204-1.jpg","9a4b0abc7907a0abf55d69a53db47336"],["D:/blog/public/post/博客维护日志/3.jpg","eef9ed3d3d396e0750b9ef1d815cc980"],["D:/blog/public/post/博客维护日志/4.jpg","ef5e78c6672c43c437e6f7232e058534"],["D:/blog/public/post/博客维护日志/5.jpg","a60f60b34755cddad10f310beaa31057"],["D:/blog/public/post/博客维护日志/6.jpg","e64c58553f3b59510213de28faf88317"],["D:/blog/public/post/博客维护日志/7.jpg","dc705003574044800d103f6cfec270b6"],["D:/blog/public/post/博客维护日志/9.jpg","07a40cc9194ebf7e3f640e9a3e6485c5"],["D:/blog/public/post/博客维护日志/index.html","114a88fbd628630428db796b9353b4ef"],["D:/blog/public/post/如何用Hexo在GitHub上搭建博客/1.jpg","04803847d8f365a9ddac535e57f9405a"],["D:/blog/public/post/如何用Hexo在GitHub上搭建博客/index.html","0ae4c111888cdb71eb085b6c98f7fc9e"],["D:/blog/public/post/小程序入门知识总结/index.html","98d2023db7844c2dfb3e56b92ff0a4ec"],["D:/blog/public/post/小程序实现三列选择器组件/1.gif","263e3c09511c33def1a1c0c58a891e17"],["D:/blog/public/post/小程序实现三列选择器组件/index.html","eab6a9f00a2c12c9d0d1b005e89973a0"],["D:/blog/public/post/日常学习自问自答/1.jpg","97615b3a6763977bd0be70ec07d05ca5"],["D:/blog/public/post/日常学习自问自答/2.jpg","69a1d4b66bf1cca215188b1393d172ff"],["D:/blog/public/post/日常学习自问自答/index.html","c8aaae6e4992206bb838b5e86ba67443"],["D:/blog/public/post/暑假计划/index.html","6d96b9cf572278b83cb1dd325bfc2238"],["D:/blog/public/post/理解Cookie和Sessin机制/1.jpg","a262f3797e298c3949028f464bfc7b8c"],["D:/blog/public/post/理解Cookie和Sessin机制/index.html","53a80b09867f8bbf2e2bdf4e55aedc5b"],["D:/blog/public/post/理解javascript中的立即执行函数-function/index.html","9c0fc906c77072604d36fd3727def273"],["D:/blog/public/post/计划表/index.html","6ccc0f5d5d2a5ad9f11e785ae05e13ef"],["D:/blog/public/tags/APIView/index.html","995c5edf018e2f94388f7dcd7d98d8ae"],["D:/blog/public/tags/DRF/index.html","7fb2f57ac298a5a2df535ab9bf334131"],["D:/blog/public/tags/arguments/index.html","b42581d1949b7a01fd3187991d5870f3"],["D:/blog/public/tags/array/index.html","36bb09ad4459cd4b6ee6c76f38d14cc7"],["D:/blog/public/tags/bcryptjs/index.html","267a57ac192a8349ddd3f27d93cb00f9"],["D:/blog/public/tags/cookie/index.html","a95418f85dad64cd199da41a913f28b1"],["D:/blog/public/tags/css/index.html","8d9da6c2c3f5dc41dd02697ddafeb997"],["D:/blog/public/tags/django/index.html","b831861ea02ce6035775a5cde6f6dd6c"],["D:/blog/public/tags/element-ui/index.html","86db72c4516288a5409b6ee2176a3ed9"],["D:/blog/public/tags/es6/index.html","70c12abbf634b1852538319cc91235bf"],["D:/blog/public/tags/git/index.html","c8b14988a9cadd5e9ca9e5e3d1208ef6"],["D:/blog/public/tags/hexo/index.html","9cd3c766a2b3ff4b96c57c0d370eef89"],["D:/blog/public/tags/html/index.html","16e236a3d0ba9e60f6cb4462cd31552e"],["D:/blog/public/tags/http/index.html","d507fc6a58eebedbf6c2f2586ffacc74"],["D:/blog/public/tags/index.html","39b452504ed0b4db9257608f01cce9bd"],["D:/blog/public/tags/javascript/index.html","9d4e3420a4769c4f1346f0b255b02847"],["D:/blog/public/tags/jwt/index.html","f72c1adef8f4e12c10d22722711c0836"],["D:/blog/public/tags/koa/index.html","186ad017d168bd1676ac7208df039c1e"],["D:/blog/public/tags/mysql/index.html","99f771ade78479a87a0baf10417f179a"],["D:/blog/public/tags/node-js/index.html","7559b1e9c47b1ae1aaf68b2382fb24ce"],["D:/blog/public/tags/python/index.html","b59101de080d0ab4d7add0b5c4989d1f"],["D:/blog/public/tags/session/index.html","5aa34433a36f7814bf518de7e7c3cbcf"],["D:/blog/public/tags/sublime/index.html","586580a599a16e2a756935983c17ec58"],["D:/blog/public/tags/termux/index.html","01830519ea6800291d8219f1300c3e43"],["D:/blog/public/tags/viewsets/index.html","52d96ce4d3fba8f30af0cf7cb8dc1ca2"],["D:/blog/public/tags/vue/index.html","8d3025f0d2f738d02146c9a0e045622c"],["D:/blog/public/tags/事件冒泡/index.html","031209eaf96a7cbd7f4429da80755bca"],["D:/blog/public/tags/事件委托/index.html","1e8fda2c12d3f1f01164d3ed7d4663af"],["D:/blog/public/tags/事件捕获/index.html","d644a77642e4e3ef6b0934746852ad9e"],["D:/blog/public/tags/入门/index.html","3995503216a1d5f833a02c816cda317d"],["D:/blog/public/tags/函数节流/index.html","7ccd9323d3bb425e602ea0bc1c3c439f"],["D:/blog/public/tags/函数防抖/index.html","2a8e2c16a3ddbe82ada069664f17bd2e"],["D:/blog/public/tags/博客/index.html","2f659082b4943c9a742896d098ffa480"],["D:/blog/public/tags/好玩/index.html","7209ef6a1ad941459afd49a9f6130496"],["D:/blog/public/tags/小程序/index.html","5e3519e433f46749a3c08b159bbbdd19"],["D:/blog/public/tags/微信/index.html","e8b638b3a538ccbfaac0f654cb941b59"],["D:/blog/public/tags/总结/index.html","8b6b004385b8af28f5805eade1411964"],["D:/blog/public/tags/立即执行函数/index.html","e88a8465007d252f38e0239024ec636d"],["D:/blog/public/tags/计划/index.html","5bf8cb22e40515c5982ee08388791af3"],["D:/blog/public/tags/读书笔记/index.html","7b80b066af15a15079aec09ef5755e23"],["D:/blog/public/tags/转载/index.html","0a5f664d18972f376309e785b6191035"],["D:/blog/public/tags/闭包/index.html","272ea2699d3bf06df3665e388d128cf1"],["D:/blog/public/tags/项目/index.html","b03c648d58b438b9e408f75ff839bcf9"],["D:/blog/public/tags/高阶函数/index.html","a4919f619dee73722816fc5776fa63b1"],["D:/blog/public/wechat.png","c09e53484ad2ff847c6e74d38d2e0a2d"]];
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







