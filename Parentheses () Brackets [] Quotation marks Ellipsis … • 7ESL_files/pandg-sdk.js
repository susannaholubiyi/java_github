!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r,o,a,i,u,c=Object({name:"P&G",pixelUrl:"https://pandg.tapad.com/tag",syncType:"IFRAME"});function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}!function(t){t.FAILURE="failure",t.SUCCESS="success"}(r||(r={})),function(t){t.IFRAME="IFRAME",t.XHR="XHR"}(o||(o={})),function(t){t.BROWSER="BROWSER",t.AMP="AMP"}(a||(a={})),function(t){t.MM="mm",t.TTD="ttd"}(i||(i={})),function(t){t.js="js"}(u||(u={}));var d=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e,this.windowRef=n}var e,n,r;return e=t,r=[{key:"getFromAllStores",value:function(t){var e=document.cookie.match("(^|;)\\s*"+t+"\\s*=\\s*([^;]*)\\s*(;|$)"),n=null!=e?decodeURIComponent(e[2]):null,r=null!=n?n:localStorage.getItem(t);return"no-cookie"===r?null:r}},{key:"storeInAllStores",value:function(t,e){var n="".concat(t,"=").concat(encodeURIComponent(e));document.cookie="".concat(n,"; path=/; SameSite=Strict"),localStorage.setItem(t,e)}}],(n=[{key:"storageKey",get:function(){var t;return null!==(t=this.config.tapadStorageKey)&&void 0!==t?t:"TAPAD"}},{key:"getTapadMetaCookie",value:function(){var e=t.getFromAllStores(this.storageKey);try{var n=JSON.parse(e);return null==n?{}:n}catch(t){return{}}}},{key:"setTapadMetaCookieId",value:function(t){var e=this.getTapadMetaCookie();this.setTapadMetaCookie(null==t?"no-cookie":f(f({},e),{id:t}))}},{key:"setTapadMetaCookie3PCs",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.getTapadMetaCookie(),n=e.thirdPartyCookies,r=d(e,["thirdPartyCookies"]),o=t.some((function(t){return t.value.toLowerCase()==="OptedOut".toLowerCase()}));if(o)this.setTapadMetaCookie({id:"OptedOut"});else{var a=f(f({},null!=n?n:{}),t.reduce((function(t,e){var n=e.name,r=e.value;return f(f({},t),l({},n,r))}),{}));this.setTapadMetaCookie(f(f({},r),{thirdPartyCookies:a}))}}},{key:"setTapadMetaCookieLastSyncTime",value:function(t){var e=this.getTapadMetaCookie();this.setTapadMetaCookie(f(f({},e),{lastSyncTime:t}))}},{key:"setTapadMetaCookie",value:function(e){t.storeInAllStores(this.storageKey,JSON.stringify(e))}}])&&s(e.prototype,n),r&&s(e,r),t}();function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},w={initiator:u.js};function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.data,r=t.idParams,o=b(t,["data","idParams"]);return[].concat(h(P(v(v({},o),w))),h(S(null!=n?n:{},e)),h(j(null!=r?r:{}))).join("&")}function P(t){return Object.keys(t).map((function(e){return[e,t[e]]})).filter((function(t){var e=y(t,2);e[0];return null!=e[1]})).map((function(t){var e=y(t,2),n=e[0],r=e[1];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(r))}))}function S(t,e){return 0===Object.keys(t).length?[]:e?Object.keys(t).map((function(e){return[e,t[e]]})).filter((function(t){var e=y(t,2);e[0];return null!=e[1]})).map((function(t){var e=y(t,2),n=e[0],r=e[1];return"data.".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(r))})):["data=".concat(encodeURIComponent(JSON.stringify(t)))]}function j(t){return Object.keys(t).map((function(e){return[e,t[e]]})).filter((function(t){var e=y(t,2);e[0];return null!=e[1]})).map((function(t){var e=y(t,2),n=e[0],r=e[1];return Object.keys(r).map((function(t){return[t,r[t]]})).filter((function(t){var e=y(t,2);e[0];return null!=e[1]})).map((function(t){var e=y(t,2),r=e[0],o=e[1];return"id.".concat(n,".").concat(r,"=").concat(encodeURIComponent(o))})).join("&")}))}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var A=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e,this.metadata=n,this.windowRef=r,this.iframeUrl=this.config.pixelUrl}var e,n,r;return e=t,(n=[{key:"sync",value:function(t){return this.appendIframe(t)}},{key:"appendIframe",value:function(t){var e,n=null!==(e=this.windowRef.document.body)&&void 0!==e?e:this.windowRef.document.getElementsByTagName("head")[0],r=window.document.createElement("iframe");return r.height="0",r.width="0",r.frameBorder="0",r.src="".concat(this.iframeUrl,"?").concat(O(t,this.config.prettyPrintDataParams)),r.style.display="none",new Promise((function(t,e){r.onload=function(){return t()},r.onerror=function(t){return e(t)},n.insertBefore(r,n.lastChild)}))}}])&&k(e.prototype,n),r&&k(e,r),t}();function I(){var t=function(){var t;try{return Array.from((null!==(t=window.crypto)&&void 0!==t?t:window.msCrypto).getRandomValues(new Uint8Array(16)))}catch(t){for(var e=[];e.length<16;)e.push(256*Math.random()&255);return e}}();return t[6]=15&t[6]|64,t[8]=63&t[8]|128,(t=t.map((function(t){return(t=t.toString(16)).length<2&&(t="0"+t),t})).join("").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/)).shift(),t.join("-")}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var R=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e,this.metadata=n,this.windowRef=r}var e,n,r;return e=t,r=[{key:"eventTargetIsXMLHttpRequest",value:function(t){return null!=t}}],(n=[{key:"sync",value:function(t,e){return this.callPixelServer(t,e)}},{key:"callPixelServer",value:function(e,n){var r="".concat(this.syncUrl(),"?").concat(O(e,this.config.prettyPrintDataParams)),o=new XMLHttpRequest;return o.withCredentials=!0,o.open("GET",r),new Promise((function(e,n){["abort","error","timeout"].forEach((function(t){return o.addEventListener(t,(function(t){n(t)}))})),o.addEventListener("load",(function(r){t.eventTargetIsXMLHttpRequest(r.target)&&200===r.target.status?e(r.target):n(r)})),o.send()}))}},{key:"syncUrl",value:function(){var t=this.metadata,e=t.tagId,n=t.accountId,r=null==this.config.pixelUrl?"http://localhost:9999/local-pixel-endpoint":this.config.pixelUrl,o=null!=e&&null!=n?"/accounts/".concat(n,"/tags/").concat(e,"/events"):"";return"".concat(r).concat(o)}}])&&M(e.prototype,n),r&&M(e,r),t}();function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=F(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=F(t);if(e){var o=F(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L(this,n)}}function L(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(a,t);var e,n,r,o=_(a);function a(){return T(this,a),o.apply(this,arguments)}return e=a,(n=[{key:"sync",value:function(t){var e=this;return x(F(a.prototype),"sync",this).call(this,t).then((function(t){var n=e.extractImgSourcesFromHtml(t.response);return e.appendPixels(n),t}))}},{key:"extractImgSourcesFromHtml",value:function(t){if(null==t)return[];for(var e=[],n=/<img[^>]* src="([^"]*)"[^>]*>/g,r=n.exec(t);null!=r;)e.push(r[1]),r=n.exec(t);return e}},{key:"appendPixels",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach((function(e){var n=t.windowRef.document.createElement("amp-img");n.setAttribute("src",e),n.setAttribute("layout","fixed"),n.setAttribute("height","1"),n.setAttribute("width","1"),t.windowRef.document.body.appendChild(n)}))}}])&&E(e.prototype,n),r&&E(e,r),a}(R);function H(){return null!=(null===navigator||void 0===navigator?void 0:navigator.userAgentData)}function B(){return H()?(t=["platformVersion","fullVersionList","model","architecture","bitness"],H()?navigator.userAgentData.getHighEntropyValues(t):Promise.resolve(void 0)):Promise.resolve(void 0);var t}function N(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function X(){return(X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Q,V=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.metadata=e,this.runtimeConfig=n,this.windowRef=r,this.config=X({},c,this.runtimeConfig),this.storageManager=new p(this.config,this.windowRef);var i=this.config.env===a.AMP?D:this.config.syncType===o.IFRAME?A:R;this.pixelApi=new i(this.config,this.metadata,this.windowRef)}var e,n,i;return e=t,i=[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=new t(e,n,null==r?window:r);return n.env===a.AMP||o.isOptedOut()||o.createId(),o}},{key:"ampInitAndSync",value:function(){var e=this;return null==AMP||null==AMP.getState?Promise.resolve({status:r.FAILURE,error:"AMP not defined"}):AMP.getState("Tapad").then((function(n){var r=e.coerceAmpState(n),o=r.config,i=r.metadata,u=r.data,c=r.ids,l={document};return t.init(i,X(X({},o),{env:a.AMP}),l).sync(u,c)}))}},{key:"coerceAmpState",value:function(t){return null==t?{metadata:{},config:{},data:{},ids:{}}:function(t){if(null==t)return{};try{return JSON.parse(t)}catch(t){return{}}}(t)}},{key:"buildIdsQueryObject",value:function(t){if(null!=t)return Object.keys(t).map((function(e){return[e,t[e]]})).reduce((function(t,e){var n=N(e,2),r=n[0],o=n[1];return t[r]="string"==typeof o?{value:o}:o,t}),{})}}],(n=[{key:"sync",value:function(t,e){var n=this;return this.config.env!==a.AMP&&this.isOptedOut()?Promise.reject("OptedOut"):this.buildQueryParams(t,e).then((function(t){return n.pixelApi.sync(t)})).then((function(){return{status:r.SUCCESS}})).catch((function(t){return{status:r.FAILURE,error:t}}))}},{key:"cookie",get:function(){return this.config.env===a.AMP?{}:this.storageManager.getTapadMetaCookie()}},{key:"isOptedOut",value:function(){return this.config.env!==a.AMP&&"OptedOut"===this.cookie.id}},{key:"createId",value:function(){this.config.env!==a.AMP&&null==this.cookie.id&&this.storageManager.setTapadMetaCookieId(I())}},{key:"buildQueryParams",value:function(e,n){var r=this;return B().then((function(t){return null==t?"":JSON.stringify(t)})).then((function(o){var a,i,c,l,f;return{gdpr:r.metadata.gdpr,us_privacy:r.metadata.ccpa,gdpr_consent:r.metadata.gdpr_consent,referrer_url:null===(a=r.windowRef.document)||void 0===a?void 0:a.referrer,page_url:null===(c=null===(i=r.windowRef.document)||void 0===i?void 0:i.location)||void 0===c?void 0:c.href,owner:r.config.name,bp_id:null!==(f=null!==(l=r.metadata.sid)&&void 0!==l?l:r.metadata.bpid)&&void 0!==f?f:r.metadata.bp_id,partner:r.config.partner,partner_id:r.metadata.partnerId,partner_device_id:r.metadata.partnerDeviceId,partner_url:r.metadata.partnerUrl,data:e,idParams:t.buildIdsQueryObject(n),ch:o,initiator:u.js}}))}}])&&K(e.prototype,n),i&&K(e,i),t}();null!=(null===(Q=window.AMP)||void 0===Q?void 0:Q.getState)?V.ampInitAndSync():window.Tapad=V}]);