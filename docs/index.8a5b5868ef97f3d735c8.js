!function(){var e={91:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},784:function(){let e=document.querySelector(".header__burger"),t=document.querySelector(".header__menu");document.querySelectorAll("a").forEach((e=>{let t=window.location.pathname;"/MyPizza/"==t&&"Home"==e.textContent&&(e.style.color="gold"),`/MyPizza/${e.textContent.toLowerCase()}.html`==t&&(e.style.color="gold"),console.log(t)})),e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("activeMenu")}))},785:function(){let e=document.querySelector("#r1"),t=document.querySelector("#r2"),r=document.querySelector("#r3"),n=document.querySelector(".slider");function o(){e.checked&&(n.style.marginLeft="0%"),t.checked&&(n.style.marginLeft="-100%"),r.checked&&(n.style.marginLeft="-200%")}e.checked=!0,function n(){setTimeout((()=>{e.checked=!0,o(),setTimeout((()=>{t.checked=!0,o(),setTimeout((()=>{r.checked=!0,o(),n()}),3e3)}),3e3)}),3e3)}(),document.addEventListener("input",o)},528:function(e,t,r){"use strict";e.exports=r.p+"assets/202f82301219211d41ce.png"},75:function(e,t,r){"use strict";e.exports=r.p+"assets/66137331deff85934118.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),r.b=document.baseURI||self.location.href,function(){"use strict";var e=r(91),t=r.n(e),n=new URL(r(528),r.b),o=new URL(r(75),r.b);t()(n),t()(o),r(784),r(785)}()}();