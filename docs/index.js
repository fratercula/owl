!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=24)}([function(e,n){e.exports=React},function(e,n,t){e.exports=t(17)()},function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(this,arguments)}e.exports=t},function(e,n){e.exports=antd},function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},function(e,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(n){return"function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?e.exports=r=function(e){return t(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},r(n)}e.exports=r},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(a).concat([o]).join("\n")}var i;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),n.push(i))}},n}},function(e,n,t){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),c=null,l=0,p=[],u=t(21);function f(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],n))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(g(r.parts[i],n));a[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,n){for(var t=[],r={},o=0;o<e.length;o++){var a=e[o],i=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):t.push(r[i]={id:i,parts:[s]})}return t}function m(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),p.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,t);t.insertBefore(n,o)}}function A(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=p.indexOf(e);n>=0&&p.splice(n,1)}function y(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return b(n,e.attrs),m(e,n),n}function b(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,r,o,a;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var i=l++;t=c||(c=y(n)),r=x.bind(null,t,i,!1),o=x.bind(null,t,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(n,e.attrs),m(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,a=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||a)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,t,n),o=function(){A(t),t.href&&URL.revokeObjectURL(t.href)}):(t=y(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){A(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=d(e,n);return f(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var i=t[o];(s=a[i.id]).refs--,r.push(s)}e&&f(d(e,n),n);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var v,h=(v=[],function(e,n){return v[e]=n,v.filter(Boolean).join("\n")});function x(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=h(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}},function(e,n){e.exports=ReactDOM},function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},function(e,n,t){var r=t(6),o=t(4);e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(e):n}},function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},function(e,n,t){var r=t(16);e.exports=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},function(e,n,t){var r=t(5);e.exports=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}},function(e,n){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,r)}e.exports=t},function(e,n,t){"use strict";var r=t(18);function o(){}e.exports=function(){function e(e,n,t,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n};return t.checkPropTypes=o,t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){var r=t(20);"string"==typeof r&&(r=[[e.i,r,""]]);var o={sourceMap:!0,hmr:!0,transform:void 0,insertInto:void 0};t(8)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(7)(!0)).push([e.i,".user {\n  background: #fff;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  width: 400px;\n  padding: 20px 20px 0;\n  position: relative;\n}\n.lv0 {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n.lv1 {\n  border-bottom: 1px solid #eee;\n  width: 100%;\n}\n.lv2 {\n  border-bottom: 1px solid #eee;\n  padding: 15px 0;\n}\n.icons {\n  color: #ccc;\n  padding: 10px 0 16px;\n  font-size: 20px;\n  text-align: center;\n}\n.icons span {\n  display: inline-block;\n  width: 33%;\n  cursor: pointer;\n}\n","",{version:3,sources:["/Users/aksdj4/Documents/github/owl/entry/card/index.less","/Users/aksdj4/Documents/github/owl/entry/card/index.less"],names:[],mappings:"AAAA;EACE,iBAAA;EACA,yCAAA;EACA,mBAAA;EACA,aAAA;EACA,qBAAA;EACA,mBAAA;CCCD;ADCD;EACE,qBAAA;EACA,8BAAA;CCCD;ADCD;EACE,8BAAA;EACA,YAAA;CCCD;ADCD;EACE,8BAAA;EACA,gBAAA;CCCD;ADCD;EACE,YAAA;EACA,qBAAA;EACA,gBAAA;EACA,mBAAA;CCCD;ADLD;EAOI,sBAAA;EACA,WAAA;EACA,gBAAA;CCCH",file:"index.less",sourcesContent:[".user {\n  background: #fff;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, .1);\n  border-radius: 5px;\n  width: 400px;\n  padding: 20px 20px 0;\n  position: relative;\n}\n.lv0 {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n.lv1 {\n  border-bottom: 1px solid #eee;\n  width: 100%;\n}\n.lv2 {\n  border-bottom: 1px solid #eee;\n  padding: 15px 0;\n}\n.icons {\n  color: #ccc;\n  padding: 10px 0 16px;\n  font-size: 20px;\n  text-align: center;\n\n  span {\n    display: inline-block;\n    width: 33%;\n    cursor: pointer;\n  }\n}\n",".user {\n  background: #fff;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  width: 400px;\n  padding: 20px 20px 0;\n  position: relative;\n}\n.lv0 {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n.lv1 {\n  border-bottom: 1px solid #eee;\n  width: 100%;\n}\n.lv2 {\n  border-bottom: 1px solid #eee;\n  padding: 15px 0;\n}\n.icons {\n  color: #ccc;\n  padding: 10px 0 16px;\n  font-size: 20px;\n  text-align: center;\n}\n.icons span {\n  display: inline-block;\n  width: 33%;\n  cursor: pointer;\n}\n"],sourceRoot:""}])},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,a=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){var r=t(23);"string"==typeof r&&(r=[[e.i,r,""]]);var o={sourceMap:!0,hmr:!0,transform:void 0,insertInto:void 0};t(8)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(7)(!0)).push([e.i,".react-owl-card-group {\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 5px 0;\n}\n.react-owl-card-unit {\n  flex: 1;\n  margin: 0 5px;\n  overflow: hidden;\n  display: flex;\n}\n.react-owl-card-unit-label {\n  white-space: nowrap;\n  margin-right: 5px;\n  display: inline-block;\n  vertical-align: top;\n  color: #a7a7a7;\n}\n.react-owl-card-unit-value {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.react-owl-card-line {\n  height: 1px;\n  background: #eee;\n  width: 100%;\n  margin: 5px 0;\n}\n.react-owl-card-space {\n  width: 100%;\n  height: 20px;\n}\n.react-owl-cell {\n  vertical-align: top;\n  margin-bottom: 5px;\n}\n.react-owl-cell-unit {\n  vertical-align: top;\n  margin-right: 5px;\n}\n","",{version:3,sources:["/Users/aksdj4/Documents/github/owl/src/index.less","/Users/aksdj4/Documents/github/owl/src/index.less"],names:[],mappings:"AACE;EACE,cAAA;EACA,kBAAA;EACA,cAAA;CCAH;ADGC;EACE,QAAA;EACA,cAAA;EACA,iBAAA;EACA,cAAA;CCDH;ADGG;EACE,oBAAA;EACA,kBAAA;EACA,sBAAA;EACA,oBAAA;EACA,eAAA;CCDL;ADIG;EACE,wBAAA;EACA,iBAAA;CCFL;ADMC;EACE,YAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;CCJH;ADOC;EACE,YAAA;EACA,aAAA;CCLH;ADSD;EACE,oBAAA;EACA,mBAAA;CCPD;ADSC;EACE,oBAAA;EACA,kBAAA;CCPH",file:"index.less",sourcesContent:[".react-owl-card {\n  &-group {\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 5px 0;\n  }\n\n  &-unit {\n    flex: 1;\n    margin: 0 5px;\n    overflow: hidden;\n    display: flex;\n\n    &-label {\n      white-space: nowrap;\n      margin-right: 5px;\n      display: inline-block;\n      vertical-align: top;\n      color: #a7a7a7;\n    }\n\n    &-value {\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n  }\n\n  &-line {\n    height: 1px;\n    background: #eee;\n    width: 100%;\n    margin: 5px 0;\n  }\n\n  &-space {\n    width: 100%;\n    height: 20px;\n  }\n}\n\n.react-owl-cell {\n  vertical-align: top;\n  margin-bottom: 5px;\n\n  &-unit {\n    vertical-align: top;\n    margin-right: 5px;\n  }\n}\n",".react-owl-card-group {\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 5px 0;\n}\n.react-owl-card-unit {\n  flex: 1;\n  margin: 0 5px;\n  overflow: hidden;\n  display: flex;\n}\n.react-owl-card-unit-label {\n  white-space: nowrap;\n  margin-right: 5px;\n  display: inline-block;\n  vertical-align: top;\n  color: #a7a7a7;\n}\n.react-owl-card-unit-value {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.react-owl-card-line {\n  height: 1px;\n  background: #eee;\n  width: 100%;\n  margin: 5px 0;\n}\n.react-owl-card-space {\n  width: 100%;\n  height: 20px;\n}\n.react-owl-cell {\n  vertical-align: top;\n  margin-bottom: 5px;\n}\n.react-owl-cell-unit {\n  vertical-align: top;\n  margin-right: 5px;\n}\n"],sourceRoot:""}])},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(9),i=t(10),s=t.n(i),c=t(11),l=t.n(c),p=t(12),u=t.n(p),f=t(13),d=t.n(f),m=t(14),A=t.n(m),y=t(4),b=t.n(y),g=t(5),v=t.n(g),h=t(1),x=t.n(h),w=t(15),E=t.n(w),C=t(2),k=t.n(C),O=function(e){return function(n){var t=n.data,r=n.customs,a=n.onChange;return e.map(function(e,n){return o.a.createElement("div",{className:"react-owl-cell",key:n},e.map(function(e,n){var i="string"==typeof e?{key:e}:e,s=i.key,c=i.type,l=void 0===c?"string":c,p=i.props,u=void 0===p?{}:p,f=i.prefix,d=void 0===f?"":f,m=i.postfix,A=void 0===m?"":m,y=i.style,b=void 0===y?{}:y,g=t[s],v=JSON.parse(JSON.stringify(u)),h=r[l];if(!s&&!l)return null;Object.keys(v).forEach(function(e){"string"==typeof v[e]&&v[e].includes("key:")&&(v[e]=t[v[e].split("key:")[1]])});var x=null;return"string"===l&&(x=o.a.createElement("span",v,g)),"image"===l&&(x=o.a.createElement("img",k()({src:g},v))),"link"===l&&(x=o.a.createElement("a",v,g)),h&&(x=o.a.createElement(h,{text:g,onChange:function(e){return a(l,e)},props:v})),o.a.createElement("div",{key:n,className:"react-owl-cell-unit",style:E()({display:"inline-block"},b)},d,x,A)}))})}};function S(e){var n=e.formater,t=e.data,r=e.customs,a=e.onChange,i=O(n);return o.a.createElement(i,{data:t,onChange:a,customs:r})}S.propTypes={onChange:x.a.func,formater:x.a.array,data:x.a.object,customs:x.a.object},S.defaultProps={onChange:function(){return null},formater:[],data:{},customs:{}};var j=S;function D(e){var n=e.type,t=e.label,r=e.value,a=e.align,i=e.props,s=a>0?{width:a}:null,c="justify"===a?{justifyContent:"space-between"}:null,l=e.customs[n],p=r&&"string"===n?o.a.createElement("span",{className:"react-owl-card-unit-value"},r):null;return"line"===n&&(p=o.a.createElement("span",k()({},i,{className:"react-owl-card-line"}))),"space"===n&&(p=o.a.createElement("span",k()({},i,{className:"react-owl-card-space"}))),l&&(p=o.a.createElement(l,{label:t,props:i,value:r})),o.a.createElement("div",{style:c,className:"react-owl-card-unit"},t?o.a.createElement("span",{style:s,className:"react-owl-card-unit-label"},t,":"):null,p)}D.propTypes={type:x.a.string,label:x.a.string,value:x.a.any,align:x.a.oneOfType([x.a.string,x.a.number]),customs:x.a.object,props:x.a.object},D.defaultProps={type:"string",label:"",value:"",align:0,customs:{},props:{}};var B=D;function T(e){var n=e.data,t=e.align,r=e.customs;return o.a.createElement("div",{className:"react-owl-card"},n.map(function(e,n){return o.a.createElement("div",{key:n,className:"react-owl-card-group"},e.map(function(e,n){return o.a.createElement(B,k()({key:n,align:t},e,{customs:r}))}))}))}T.propTypes={data:x.a.array,align:x.a.oneOfType([x.a.string,x.a.number]),customs:x.a.object},T.defaultProps={data:[],align:0,customs:{}};var P=T,U=[[{key:"name",props:{style:{fontWeight:"bold",fontSize:16,color:"#000"}}}],["role"]],R=[[{type:"image",props:{src:"key:image",style:{borderRadius:"50%",marginRight:10}}},{type:"name",props:{name:"key:name",role:"key:role"},style:{marginTop:10}},{type:"button",props:{disabled:"key:disabled"}}]],L=[[{key:"career",prefix:"What I do: ",props:{style:{fontWeight:"bold"}},style:{padding:"10px 0"}}]],N=[[{prefix:"Expertise",type:"string"}],[{type:"tags",props:{expertise:"key:expertise"}}]],_=[[{type:"checkbox",props:{checked:"key:checked"}}],[{type:"lv0",props:{image:"key:image",name:"key:name",role:"key:role",disabled:"key:disabled"},style:{width:"100%"}}],[{type:"lv1",props:{career:"key:career"},style:{width:"100%"}}],[{type:"lv2",props:{expertise:"key:expertise"}}],[{type:"icon",props:{icons:"key:icon"},style:{width:"100%"}}]],M=t(3),I=function(e){var n=e.props,t=e.onChange,r=n.checked;return o.a.createElement(M.Checkbox,{style:{position:"absolute",right:15,top:10},checked:r,onChange:function(e){return t(e.target.checked)}})},H=function(e){var n=e.props.icons;return o.a.createElement("div",{className:"icons"},n.map(function(e,n){return o.a.createElement("span",{key:n},o.a.createElement(M.Icon,{type:e}))}))},J=function(e){var n=e.props;return o.a.createElement(M.Button,{style:{margin:"18px 0 0 70px"},type:"primary",disabled:n.disabled},"Follow")},W=function(e){return e.props.expertise.map(function(e,n){return o.a.createElement(M.Tag,{key:n,style:{margin:"8px 10px 0 0"}},e)})},q=function(e){var n=e.props;return o.a.createElement(j,{formater:U,data:n})},z=function(e){var n=e.props;return o.a.createElement("div",{className:"lv0"},o.a.createElement(j,{customs:{name:q,button:J},formater:R,data:n}))},Y=function(e){var n=e.props;return o.a.createElement("div",{className:"lv1"},o.a.createElement(j,{formater:L,data:n}))},G=function(e){var n=e.props;return o.a.createElement("div",{className:"lv2"},o.a.createElement(j,{formater:N,data:n,customs:{tags:W}}))},F={name:"Kathry Preets",role:"Member",career:"Web Developer",checked:!0,disabled:!1,image:"https://tempim-1256796114.cos-website.ap-shanghai.myqcloud.com/placeholder/70x70",expertise:["PHP","JavaScript","CSS","HTML","UX","WordPress","Java","Web","JQuery"],icon:["message","mail","phone"]},$=(t(19),function(e){function n(){var e,t;s()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=u()(this,(e=d()(n)).call.apply(e,[this].concat(o))),v()(b()(b()(t)),"state",{data:JSON.parse(JSON.stringify(F))}),v()(b()(b()(t)),"onChange",function(e,n){var r=t.state.data;r.checked=n,r.disabled=!n,t.setState({data:r})}),t}return A()(n,e),l()(n,[{key:"render",value:function(){var e=this.state.data;return o.a.createElement("div",{className:"user"},o.a.createElement(j,{customs:{lv0:z,lv1:Y,lv2:G,icon:H,checkbox:I},formater:_,data:e,onChange:this.onChange}))}}]),n}(r.Component)),Q=t(6),X=t.n(Q),K=function(e){return e.props.tags.map(function(e,n){return o.a.createElement(M.Tag,{key:n,style:{margin:"3px 6px 0 0"}},e)})},V=function(e){var n=e.value,t=e.props,r=n.columns,a=n.dataSource;return r.forEach(function(e,n){var t=e.formater;e.dataIndex="string"==typeof t?t:n,"object"===X()(t)&&(e.render=function(e,n){return o.a.createElement(j,{customs:{tags:K},formater:t,data:n})})}),o.a.createElement(M.Table,k()({rowKey:function(e,n){return n},dataSource:a,columns:r},t))},Z=[[{type:"table",value:{columns:[{title:"Name",formater:"name"},{title:"Address",formater:[[{key:"city",props:{style:{fontWeight:"bold"}}},"sheet"],[{key:"zip",props:{style:{fontStyle:"italic"}}}]]},{title:"Tags",formater:[[{type:"tags",props:{tags:"key:tags"}}]]}],dataSource:[{name:"Edrward",city:"London",sheet:"Da Yuan A2dong 1704",zip:"0000789",tags:["HTML","UX","WordPress","Java","Web","JQuery"]},{name:"Sriply",city:"Parry",sheet:"Da Yuans A2dong 1704",zip:"047622",tags:["PHP","JavaScript","CSS","HTML","UX","WordPress"]}]},props:{pagination:!1,bordered:!0}}]];t(22);Object(a.render)(o.a.createElement("div",{style:{padding:30,boxSizing:"border-box",width:"100%",display:"flex"}},o.a.createElement($,null),o.a.createElement(function(){return o.a.createElement("div",{style:{marginLeft:30}},o.a.createElement(P,{data:Z,customs:{table:V}}))},null)),document.getElementById("root"))}]);
//# sourceMappingURL=index.js.map