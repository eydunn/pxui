(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){(function(e,n){var r;!function(){var a="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e||this||{},i=a._,o=Array.prototype,u=Object.prototype,c="undefined"!==typeof Symbol?Symbol.prototype:null,l=o.push,s=o.slice,f=u.toString,p=u.hasOwnProperty,h=Array.isArray,d=Object.keys,v=Object.create,g=function(){},m=function e(t){return t instanceof e?t:this instanceof e?void(this._wrapped=t):new e(t)};t.nodeType?a._=m:(!n.nodeType&&n.exports&&(t=n.exports=m),t._=m),m.VERSION="1.9.1";var b,y=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 3:return function(n,r,a){return e.call(t,n,r,a)};case 4:return function(n,r,a,i){return e.call(t,n,r,a,i)}}return function(){return e.apply(t,arguments)}},O=function(e,t,n){return m.iteratee!==b?m.iteratee(e,t):null==e?m.identity:m.isFunction(e)?y(e,t,n):m.isObject(e)&&!m.isArray(e)?m.matcher(e):m.property(e)};m.iteratee=b=function(e,t){return O(e,t,1/0)};var j=function(e,t){return t=null==t?e.length-1:+t,function(){for(var n=Math.max(arguments.length-t,0),r=Array(n),a=0;a<n;a++)r[a]=arguments[a+t];switch(t){case 0:return e.call(this,r);case 1:return e.call(this,arguments[0],r);case 2:return e.call(this,arguments[0],arguments[1],r)}var i=Array(t+1);for(a=0;a<t;a++)i[a]=arguments[a];return i[t]=r,e.apply(this,i)}},E=function(e){if(!m.isObject(e))return{};if(v)return v(e);g.prototype=e;var t=new g;return g.prototype=null,t},w=function(e){return function(t){return null==t?void 0:t[e]}},x=function(e,t){return null!=e&&p.call(e,t)},A=function(e,t){for(var n=t.length,r=0;r<n;r++){if(null==e)return;e=e[t[r]]}return n?e:void 0},S=Math.pow(2,53)-1,k=w("length"),N=function(e){var t=k(e);return"number"==typeof t&&t>=0&&t<=S};m.each=m.forEach=function(e,t,n){var r,a;if(t=y(t,n),N(e))for(r=0,a=e.length;r<a;r++)t(e[r],r,e);else{var i=m.keys(e);for(r=0,a=i.length;r<a;r++)t(e[i[r]],i[r],e)}return e},m.map=m.collect=function(e,t,n){t=O(t,n);for(var r=!N(e)&&m.keys(e),a=(r||e).length,i=Array(a),o=0;o<a;o++){var u=r?r[o]:o;i[o]=t(e[u],u,e)}return i};var T=function(e){return function(t,n,r,a){var i=arguments.length>=3;return function(t,n,r,a){var i=!N(t)&&m.keys(t),o=(i||t).length,u=e>0?0:o-1;for(a||(r=t[i?i[u]:u],u+=e);u>=0&&u<o;u+=e){var c=i?i[u]:u;r=n(r,t[c],c,t)}return r}(t,y(n,a,4),r,i)}};m.reduce=m.foldl=m.inject=T(1),m.reduceRight=m.foldr=T(-1),m.find=m.detect=function(e,t,n){var r=(N(e)?m.findIndex:m.findKey)(e,t,n);if(void 0!==r&&-1!==r)return e[r]},m.filter=m.select=function(e,t,n){var r=[];return t=O(t,n),m.each(e,function(e,n,a){t(e,n,a)&&r.push(e)}),r},m.reject=function(e,t,n){return m.filter(e,m.negate(O(t)),n)},m.every=m.all=function(e,t,n){t=O(t,n);for(var r=!N(e)&&m.keys(e),a=(r||e).length,i=0;i<a;i++){var o=r?r[i]:i;if(!t(e[o],o,e))return!1}return!0},m.some=m.any=function(e,t,n){t=O(t,n);for(var r=!N(e)&&m.keys(e),a=(r||e).length,i=0;i<a;i++){var o=r?r[i]:i;if(t(e[o],o,e))return!0}return!1},m.contains=m.includes=m.include=function(e,t,n,r){return N(e)||(e=m.values(e)),("number"!=typeof n||r)&&(n=0),m.indexOf(e,t,n)>=0},m.invoke=j(function(e,t,n){var r,a;return m.isFunction(t)?a=t:m.isArray(t)&&(r=t.slice(0,-1),t=t[t.length-1]),m.map(e,function(e){var i=a;if(!i){if(r&&r.length&&(e=A(e,r)),null==e)return;i=e[t]}return null==i?i:i.apply(e,n)})}),m.pluck=function(e,t){return m.map(e,m.property(t))},m.where=function(e,t){return m.filter(e,m.matcher(t))},m.findWhere=function(e,t){return m.find(e,m.matcher(t))},m.max=function(e,t,n){var r,a,i=-1/0,o=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]&&null!=e)for(var u=0,c=(e=N(e)?e:m.values(e)).length;u<c;u++)null!=(r=e[u])&&r>i&&(i=r);else t=O(t,n),m.each(e,function(e,n,r){((a=t(e,n,r))>o||a===-1/0&&i===-1/0)&&(i=e,o=a)});return i},m.min=function(e,t,n){var r,a,i=1/0,o=1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]&&null!=e)for(var u=0,c=(e=N(e)?e:m.values(e)).length;u<c;u++)null!=(r=e[u])&&r<i&&(i=r);else t=O(t,n),m.each(e,function(e,n,r){((a=t(e,n,r))<o||a===1/0&&i===1/0)&&(i=e,o=a)});return i},m.shuffle=function(e){return m.sample(e,1/0)},m.sample=function(e,t,n){if(null==t||n)return N(e)||(e=m.values(e)),e[m.random(e.length-1)];var r=N(e)?m.clone(e):m.values(e),a=k(r);t=Math.max(Math.min(t,a),0);for(var i=a-1,o=0;o<t;o++){var u=m.random(o,i),c=r[o];r[o]=r[u],r[u]=c}return r.slice(0,t)},m.sortBy=function(e,t,n){var r=0;return t=O(t,n),m.pluck(m.map(e,function(e,n,a){return{value:e,index:r++,criteria:t(e,n,a)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return e.index-t.index}),"value")};var B=function(e,t){return function(n,r,a){var i=t?[[],[]]:{};return r=O(r,a),m.each(n,function(t,a){var o=r(t,a,n);e(i,t,o)}),i}};m.groupBy=B(function(e,t,n){x(e,n)?e[n].push(t):e[n]=[t]}),m.indexBy=B(function(e,t,n){e[n]=t}),m.countBy=B(function(e,t,n){x(e,n)?e[n]++:e[n]=1});var C=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;m.toArray=function(e){return e?m.isArray(e)?s.call(e):m.isString(e)?e.match(C):N(e)?m.map(e,m.identity):m.values(e):[]},m.size=function(e){return null==e?0:N(e)?e.length:m.keys(e).length},m.partition=B(function(e,t,n){e[n?0:1].push(t)},!0),m.first=m.head=m.take=function(e,t,n){return null==e||e.length<1?null==t?void 0:[]:null==t||n?e[0]:m.initial(e,e.length-t)},m.initial=function(e,t,n){return s.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},m.last=function(e,t,n){return null==e||e.length<1?null==t?void 0:[]:null==t||n?e[e.length-1]:m.rest(e,Math.max(0,e.length-t))},m.rest=m.tail=m.drop=function(e,t,n){return s.call(e,null==t||n?1:t)},m.compact=function(e){return m.filter(e,Boolean)};var _=function e(t,n,r,a){for(var i=(a=a||[]).length,o=0,u=k(t);o<u;o++){var c=t[o];if(N(c)&&(m.isArray(c)||m.isArguments(c)))if(n)for(var l=0,s=c.length;l<s;)a[i++]=c[l++];else e(c,n,r,a),i=a.length;else r||(a[i++]=c)}return a};m.flatten=function(e,t){return _(e,t,!1)},m.without=j(function(e,t){return m.difference(e,t)}),m.uniq=m.unique=function(e,t,n,r){m.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=O(n,r));for(var a=[],i=[],o=0,u=k(e);o<u;o++){var c=e[o],l=n?n(c,o,e):c;t&&!n?(o&&i===l||a.push(c),i=l):n?m.contains(i,l)||(i.push(l),a.push(c)):m.contains(a,c)||a.push(c)}return a},m.union=j(function(e){return m.uniq(_(e,!0,!0))}),m.intersection=function(e){for(var t=[],n=arguments.length,r=0,a=k(e);r<a;r++){var i=e[r];if(!m.contains(t,i)){var o;for(o=1;o<n&&m.contains(arguments[o],i);o++);o===n&&t.push(i)}}return t},m.difference=j(function(e,t){return t=_(t,!0,!0),m.filter(e,function(e){return!m.contains(t,e)})}),m.unzip=function(e){for(var t=e&&m.max(e,k).length||0,n=Array(t),r=0;r<t;r++)n[r]=m.pluck(e,r);return n},m.zip=j(m.unzip),m.object=function(e,t){for(var n={},r=0,a=k(e);r<a;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n};var P=function(e){return function(t,n,r){n=O(n,r);for(var a=k(t),i=e>0?0:a-1;i>=0&&i<a;i+=e)if(n(t[i],i,t))return i;return-1}};m.findIndex=P(1),m.findLastIndex=P(-1);var L=function(e,t,n){return function(r,a,i){var o=0,u=k(r);if("number"==typeof i)e>0?o=i>=0?i:Math.max(i+u,o):u=i>=0?Math.min(i+1,u):i+u+1;else if(n&&i&&u)return r[i=n(r,a)]===a?i:-1;if(a!==a)return(i=t(s.call(r,o,u),m.isNaN))>=0?i+o:-1;for(i=e>0?o:u-1;i>=0&&i<u;i+=e)if(r[i]===a)return i;return-1}};m.indexOf=L(1,m.findIndex,m.sortedIndex=function(e,t,n,r){for(var a=(n=O(n,r,1))(t),i=0,o=k(e);i<o;){var u=Math.floor((i+o)/2);n(e[u])<a?i=u+1:o=u}return i}),m.lastIndexOf=L(-1,m.findLastIndex),m.range=function(e,t,n){null==t&&(t=e||0,e=0),n||(n=t<e?-1:1);for(var r=Math.max(Math.ceil((t-e)/n),0),a=Array(r),i=0;i<r;i++,e+=n)a[i]=e;return a},m.chunk=function(e,t){if(null==t||t<1)return[];for(var n=[],r=0,a=e.length;r<a;)n.push(s.call(e,r,r+=t));return n};var F=function(e,t,n,r,a){if(!(r instanceof t))return e.apply(n,a);var i=E(e.prototype),o=e.apply(i,a);return m.isObject(o)?o:i};m.bind=j(function(e,t,n){if(!m.isFunction(e))throw new TypeError("Bind must be called on a function");var r=j(function(a){return F(e,r,t,this,n.concat(a))});return r}),(m.partial=j(function(e,t){var n=m.partial.placeholder;return function r(){for(var a=0,i=t.length,o=Array(i),u=0;u<i;u++)o[u]=t[u]===n?arguments[a++]:t[u];for(;a<arguments.length;)o.push(arguments[a++]);return F(e,r,this,this,o)}})).placeholder=m,m.bindAll=j(function(e,t){var n=(t=_(t,!1,!1)).length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var r=t[n];e[r]=m.bind(e[r],e)}}),m.memoize=function(e,t){var n=function n(r){var a=n.cache,i=""+(t?t.apply(this,arguments):r);return x(a,i)||(a[i]=e.apply(this,arguments)),a[i]};return n.cache={},n},m.delay=j(function(e,t,n){return setTimeout(function(){return e.apply(null,n)},t)}),m.defer=m.partial(m.delay,m,1),m.throttle=function(e,t,n){var r,a,i,o,u=0;n||(n={});var c=function(){u=!1===n.leading?0:m.now(),r=null,o=e.apply(a,i),r||(a=i=null)},l=function(){var l=m.now();u||!1!==n.leading||(u=l);var s=t-(l-u);return a=this,i=arguments,s<=0||s>t?(r&&(clearTimeout(r),r=null),u=l,o=e.apply(a,i),r||(a=i=null)):r||!1===n.trailing||(r=setTimeout(c,s)),o};return l.cancel=function(){clearTimeout(r),u=0,r=a=i=null},l},m.debounce=function(e,t,n){var r,a,i=function(t,n){r=null,n&&(a=e.apply(t,n))},o=j(function(o){if(r&&clearTimeout(r),n){var u=!r;r=setTimeout(i,t),u&&(a=e.apply(this,o))}else r=m.delay(i,t,this,o);return a});return o.cancel=function(){clearTimeout(r),r=null},o},m.wrap=function(e,t){return m.partial(t,e)},m.negate=function(e){return function(){return!e.apply(this,arguments)}},m.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},m.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},m.once=m.partial(m.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}},2),m.restArguments=j;var I=!{toString:null}.propertyIsEnumerable("toString"),D=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],H=function(e,t){var n=D.length,r=e.constructor,a=m.isFunction(r)&&r.prototype||u,i="constructor";for(x(e,i)&&!m.contains(t,i)&&t.push(i);n--;)(i=D[n])in e&&e[i]!==a[i]&&!m.contains(t,i)&&t.push(i)};m.keys=function(e){if(!m.isObject(e))return[];if(d)return d(e);var t=[];for(var n in e)x(e,n)&&t.push(n);return I&&H(e,t),t},m.allKeys=function(e){if(!m.isObject(e))return[];var t=[];for(var n in e)t.push(n);return I&&H(e,t),t},m.values=function(e){for(var t=m.keys(e),n=t.length,r=Array(n),a=0;a<n;a++)r[a]=e[t[a]];return r},m.mapObject=function(e,t,n){t=O(t,n);for(var r=m.keys(e),a=r.length,i={},o=0;o<a;o++){var u=r[o];i[u]=t(e[u],u,e)}return i},m.pairs=function(e){for(var t=m.keys(e),n=t.length,r=Array(n),a=0;a<n;a++)r[a]=[t[a],e[t[a]]];return r},m.invert=function(e){for(var t={},n=m.keys(e),r=0,a=n.length;r<a;r++)t[e[n[r]]]=n[r];return t},m.functions=m.methods=function(e){var t=[];for(var n in e)m.isFunction(e[n])&&t.push(n);return t.sort()};var M=function(e,t){return function(n){var r=arguments.length;if(t&&(n=Object(n)),r<2||null==n)return n;for(var a=1;a<r;a++)for(var i=arguments[a],o=e(i),u=o.length,c=0;c<u;c++){var l=o[c];t&&void 0!==n[l]||(n[l]=i[l])}return n}};m.extend=M(m.allKeys),m.extendOwn=m.assign=M(m.keys),m.findKey=function(e,t,n){t=O(t,n);for(var r,a=m.keys(e),i=0,o=a.length;i<o;i++)if(t(e[r=a[i]],r,e))return r};var V,G,U=function(e,t,n){return t in n};m.pick=j(function(e,t){var n={},r=t[0];if(null==e)return n;m.isFunction(r)?(t.length>1&&(r=y(r,t[1])),t=m.allKeys(e)):(r=U,t=_(t,!1,!1),e=Object(e));for(var a=0,i=t.length;a<i;a++){var o=t[a],u=e[o];r(u,o,e)&&(n[o]=u)}return n}),m.omit=j(function(e,t){var n,r=t[0];return m.isFunction(r)?(r=m.negate(r),t.length>1&&(n=t[1])):(t=m.map(_(t,!1,!1),String),r=function(e,n){return!m.contains(t,n)}),m.pick(e,r,n)}),m.defaults=M(m.allKeys,!0),m.create=function(e,t){var n=E(e);return t&&m.extendOwn(n,t),n},m.clone=function(e){return m.isObject(e)?m.isArray(e)?e.slice():m.extend({},e):e},m.tap=function(e,t){return t(e),e},m.isMatch=function(e,t){var n=m.keys(t),r=n.length;if(null==e)return!r;for(var a=Object(e),i=0;i<r;i++){var o=n[i];if(t[o]!==a[o]||!(o in a))return!1}return!0},V=function(e,t,n,r){if(e===t)return 0!==e||1/e===1/t;if(null==e||null==t)return!1;if(e!==e)return t!==t;var a=typeof e;return("function"===a||"object"===a||"object"==typeof t)&&G(e,t,n,r)},G=function(e,t,n,r){e instanceof m&&(e=e._wrapped),t instanceof m&&(t=t._wrapped);var a=f.call(e);if(a!==f.call(t))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+e===""+t;case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t;case"[object Symbol]":return c.valueOf.call(e)===c.valueOf.call(t)}var i="[object Array]"===a;if(!i){if("object"!=typeof e||"object"!=typeof t)return!1;var o=e.constructor,u=t.constructor;if(o!==u&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1}r=r||[];for(var l=(n=n||[]).length;l--;)if(n[l]===e)return r[l]===t;if(n.push(e),r.push(t),i){if((l=e.length)!==t.length)return!1;for(;l--;)if(!V(e[l],t[l],n,r))return!1}else{var s,p=m.keys(e);if(l=p.length,m.keys(t).length!==l)return!1;for(;l--;)if(s=p[l],!x(t,s)||!V(e[s],t[s],n,r))return!1}return n.pop(),r.pop(),!0},m.isEqual=function(e,t){return V(e,t)},m.isEmpty=function(e){return null==e||(N(e)&&(m.isArray(e)||m.isString(e)||m.isArguments(e))?0===e.length:0===m.keys(e).length)},m.isElement=function(e){return!(!e||1!==e.nodeType)},m.isArray=h||function(e){return"[object Array]"===f.call(e)},m.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},m.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(e){m["is"+e]=function(t){return f.call(t)==="[object "+e+"]"}}),m.isArguments(arguments)||(m.isArguments=function(e){return x(e,"callee")});var R=a.document&&a.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof R&&(m.isFunction=function(e){return"function"==typeof e||!1}),m.isFinite=function(e){return!m.isSymbol(e)&&isFinite(e)&&!isNaN(parseFloat(e))},m.isNaN=function(e){return m.isNumber(e)&&isNaN(e)},m.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"===f.call(e)},m.isNull=function(e){return null===e},m.isUndefined=function(e){return void 0===e},m.has=function(e,t){if(!m.isArray(t))return x(e,t);for(var n=t.length,r=0;r<n;r++){var a=t[r];if(null==e||!p.call(e,a))return!1;e=e[a]}return!!n},m.noConflict=function(){return a._=i,this},m.identity=function(e){return e},m.constant=function(e){return function(){return e}},m.noop=function(){},m.property=function(e){return m.isArray(e)?function(t){return A(t,e)}:w(e)},m.propertyOf=function(e){return null==e?function(){}:function(t){return m.isArray(t)?A(e,t):e[t]}},m.matcher=m.matches=function(e){return e=m.extendOwn({},e),function(t){return m.isMatch(t,e)}},m.times=function(e,t,n){var r=Array(Math.max(0,e));t=y(t,n,1);for(var a=0;a<e;a++)r[a]=t(a);return r},m.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},m.now=Date.now||function(){return(new Date).getTime()};var z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},W=m.invert(z),Q=function(e){var t=function(t){return e[t]},n="(?:"+m.keys(e).join("|")+")",r=RegExp(n),a=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(a,t):e}};m.escape=Q(z),m.unescape=Q(W),m.result=function(e,t,n){m.isArray(t)||(t=[t]);var r=t.length;if(!r)return m.isFunction(n)?n.call(e):n;for(var a=0;a<r;a++){var i=null==e?void 0:e[t[a]];void 0===i&&(i=n,a=r),e=m.isFunction(i)?i.call(e):i}return e};var q=0;m.uniqueId=function(e){var t=++q+"";return e?e+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,K={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},X=/\\|'|\r|\n|\u2028|\u2029/g,Y=function(e){return"\\"+K[e]};m.template=function(e,t,n){!t&&n&&(t=n),t=m.defaults({},t,m.templateSettings);var r,a=RegExp([(t.escape||J).source,(t.interpolate||J).source,(t.evaluate||J).source].join("|")+"|$","g"),i=0,o="__p+='";e.replace(a,function(t,n,r,a,u){return o+=e.slice(i,u).replace(X,Y),i=u+t.length,n?o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=new Function(t.variable||"obj","_",o)}catch(l){throw l.source=o,l}var u=function(e){return r.call(this,e,m)},c=t.variable||"obj";return u.source="function("+c+"){\n"+o+"}",u},m.chain=function(e){var t=m(e);return t._chain=!0,t};var $=function(e,t){return e._chain?m(t).chain():t};m.mixin=function(e){return m.each(m.functions(e),function(t){var n=m[t]=e[t];m.prototype[t]=function(){var e=[this._wrapped];return l.apply(e,arguments),$(this,n.apply(m,e))}}),m},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=o[e];m.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],$(this,n)}}),m.each(["concat","join","slice"],function(e){var t=o[e];m.prototype[e]=function(){return $(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return String(this._wrapped)},void 0===(r=function(){return m}.apply(t,[]))||(n.exports=r)}()}).call(this,n(70),n(123)(e))},131:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),o=n.n(i),u=(n(99),n(60),n(21)),c=n.n(u),l=n(29),s=n(12),f=n(42),p=n(87),h=n(28),d=n(166),v=n(47),g=n.n(v),m=n(7),b=n(172),y=n(165),O=n(170),j=n(163),E=n(171),w=n(174),x=n(88),A=n.n(x),S=n(133),k=n(173),N=n(167),T=n(169),B=n(89),C=n.n(B),_=n(90),P=n.n(_),L=n(40),F=(n(54),n(43));function I(e){return a.a.createElement(L.a,{className:"selectors",onChange:function(t){e.onChange(t)},closeMenuOnSelect:!0,defaultValue:[F[0]],options:F})}var D=function(){return a.a.createElement("div",{className:"footer"},"Hagstova F\xf8roya | Kv\xedggjart\xfan 1 | Postboks 2068 | FO-165 Argir | Tlf.: +298-352800 | Fax.: +298-352801 | V-tal: 463000 | T-postur:"," ",a.a.createElement("a",{href:"mailto:hagstova@hagstova.fo"},"hagstova@hagstova.fo"))},H=n(77),M=n.n(H),V=function(){return a.a.createElement("div",null,a.a.createElement(j.a,{container:!0,spacing:3},a.a.createElement(j.a,{item:!0,xs:12},a.a.createElement("a",{href:"http://www.hagstova.fo"},a.a.createElement("img",{src:M.a,style:{height:"3em",display:"block",marginLeft:"auto",marginRight:"auto",width:"50%"},alt:"Hagstovan"})))))},G=n(57),U=n(175),R=n(79),z=n.n(R),W=function(e){var t=e.type,n=e.color,r=e.height,i=e.width;return a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},a.a.createElement(z.a,{type:t,color:n,height:r,width:i}))},Q=n(80),q=n.n(Q),J=a.a.createElement("i",{class:"fa fa-caret-up","aria-hidden":"true",alt:"-"}),K=a.a.createElement("i",{class:"fa fa-caret-down","aria-hidden":"true",alt:"+"}),X=function(e){var t=e.on;return a.a.createElement("span",{style:{marginRight:8}},t?J:K)},Y=function(e){var t=e.level,n=void 0===t?0:t,r=e.hasNodes,i=e.isOpen,o=e.label,u=(e.searchTerm,e.openNodes,e.toggleNode),c=(e.matchSearch,e.focused),l=Object(G.a)(e,["level","hasNodes","isOpen","label","searchTerm","openNodes","toggleNode","matchSearch","focused"]);return a.a.createElement(U.a,Object.assign({},l,{style:{paddingLeft:20+16*n,cursor:"pointer",boxShadow:c?"0px 0px 5px 0px #222":"none",position:"relative",fontFamily:"Open Sans,sans-serif",borderStyle:"none"}}),r&&a.a.createElement("div",{onClick:function(e){r&&u&&u(),e.stopPropagation()}},a.a.createElement("div",null,a.a.createElement(X,{on:i}),o)),r?"":a.a.createElement("div",null,o))},$=0;function Z(e){var t=Object(r.useState)(null),n=Object(s.a)(t,2),i=n[0],o=n[1],u=Object(r.useState)(0),f=Object(s.a)(u,2),p=(f[0],f[1]),h=e.statBank.label||"Hagtalsgrunnurin";Object(r.useEffect)(function(){o(null),function(e){d.apply(this,arguments)}(e.statBank.value||e.statBank)},[e.statBank]);function d(){return(d=Object(l.a)(c.a.mark(function e(t){var n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:for(n=e.sent,r=0;r<n.length;r++)n[r].dbid&&(n[r].id=n[r].dbid,n[r].type="l",delete n[r].dbid);return e.next=6,o(n);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var v=function(){var e=Object(l.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:if(!(n=e.sent)){e.next=7;break}return Promise.all(n.map(function(){var e=Object(l.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"l"!==n.type){e.next=5;break}return e.next=4,v(t+"/"+n.id);case 4:n.nodes=e.sent;case 5:e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.t0;case 11:case"end":return e.stop()}},e,null,[[0,7]])})),0);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())),p($++),e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function m(e){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t).then(function(e){n=e.data}).catch(function(e){});case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}return i?a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"headLine"},h),a.a.createElement(q.a,{data:i,debounceTime:500,onClickItem:function(t){if("t"===t.type){var n=(e.statBank.value||e.statBank)+t.id;e.onClickItem(n)}}},function(e){var t=e.search,n=e.items;return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"text",onChange:function(e){return t(e.target.value)},placeholder:"Type and search"}),a.a.createElement(U.a,null,n.map(function(e){e.reset;var t=Object(G.a)(e,["reset"]);return a.a.createElement(Y,t)})))})):a.a.createElement("div",null,a.a.createElement(W,{type:"spin",color:"#2d4182",height:"5%",width:"5%"}))}n(71);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function te(e){var t=Object(r.useState)(e.options),n=Object(s.a)(t,1)[0],i=Object(r.useState)(e.code),o=Object(s.a)(i,1)[0],u=Object(r.useState)(e.text),c=Object(s.a)(u,1)[0],l=Object(r.useState)(e.elimination),p=Object(s.a)(l,1)[0],h={option:function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{borderBottom:"1px dotted #2d4182",color:t.isSelected?"red":"#2d4182"})}};return a.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 col-xl-3"},!0===p?a.a.createElement("div",{className:"selectorsHeadLine"},c," "):a.a.createElement("div",{className:"selectorsHeadLine"},c," ",a.a.createElement("i",{className:"fa fa-exclamation-circle",style:{color:"red"}})),a.a.createElement(L.a,{styles:h,onChange:function(t){return function(n){e.callBack(t,n)}}(o),closeMenuOnSelect:!1,defaultValue:[n[0]],isMulti:!0,options:n}))}var ne=[],re=[];function ae(e){var t,n,i=Object(r.useState)(null),o=Object(s.a)(i,2),u=o[0],f=o[1],p=Object(r.useState)(null),h=Object(s.a)(p,2),d=h[0],v=h[1],g=Object(r.useState)(""),m=Object(s.a)(g,2),b=m[0],y=m[1];function O(e,t){var n=[];if(null!=t)for(var r=0;r<t.length;r++)n.push(t[r].value);var a={code:e,selection:{filter:"item",values:n}},i=re.findIndex(function(e){return e.code===a.code});re[i]?re[i]=a:re.push(a);j({query:re,response:{px:""}},e)}function j(e){return E.apply(this,arguments)}function E(){return(E=Object(l.a)(c.a.mark(function t(n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.pxTable,{body:JSON.stringify(n),method:"post"}).then(function(e){if(!e.ok)throw new Error("POST Failed to fetch.");return e.text()}).then(function(e){f(e)}).catch(function(e){console.log(e),f(null)});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Object(r.useEffect)(function(){ne=[],re.length=0,v(!0),fetch(e.pxTable).then(function(e){if(!e.ok)throw new Error("Selectors","Failed to fetch.");return e.json()}).then(function(e){v(!1);var t,n=[],r=[];t=e.title,y(t);for(var i=0,o=0;o<e.variables.length;o++){for(var u=e.variables[o].time,c=e.variables[o].elimination,l=e.variables[o].code,s=e.variables[o].text,f=0;f<e.variables[i].values.length;f++)n.push({value:e.variables[i].values[f],label:e.variables[i].valueTexts[f]});if(!0===u&&n.reverse(),re.length!==e.variables.length){var p=n[0].value,h=[];h.push(p);var d={code:l,selection:{filter:"item",values:h}};re.push(d)}ne.push(a.a.createElement(te,{options:n,selectorName:r,code:l,text:s,elimination:c,callBack:O})),r=[],n=[],i++}j({query:re,response:{px:""}})}).catch(function(e){console.log(e),v(!1)})},[e.pxTable]),d?a.a.createElement(W,{type:"spinningBubbles",color:"#2d4182",height:"2%",width:"2%"}):ne.length>0?a.a.createElement("div",{className:"row",onChange:(t=u,n=b,void e.onChange(t,n))},ne):a.a.createElement(W,{type:"spin",color:"#2d4182",height:"1%",width:"1%"})}var ie=n(82),oe=n.n(ie),ue=n(83),ce=n.n(ue);function le(e){var t,n=Object(r.useState)(null),i=Object(s.a)(n,2),o=i[0],u=i[1],c=ce()(e.contentElement);return Object(r.useEffect)(function(){u(e.data)},[e.data]),o?a.a.createElement("div",null,(t=function(e){!function(e,t){var n=[];if(!e.data||!e.metadata)return(n=[]).push("<div>Vinarliga fill teir kravdu gervisveljararnir</div>"),t.html(n.join(""));var r,a,i,o,u=e.data,c=e.metadata,l=c.LANGUAGES||null;null!==l?((r=c["HEADING["+(l=c.LANGUAGES.TABLE[1])+"]"])||(r=c.HEADING),a=r.TABLE,Array.isArray(a)||(a=[a]),(i=c["VALUES["+l+"]"])||(i=c.VALUES),o=c["STUB["+l+"]"],r||(o=c.STUB)):(a=(r=c.HEADING).TABLE,Array.isArray(a)||(a=[a]),i=c.VALUES,o=c.STUB),u.length>0&&u[0];var s=["a"];try{s=o.TABLE,Array.isArray(s)||(s=[s])}catch(T){console.log("Stub is undefined")}var f=null!==s,p=0;if(u&&u.length>0&&(p=1),n.push("<table class='pxtable table table-striped table-responsive'><colgroup><col width='100%'/></colgroup>"),a&&a.length>0){n.push("<thead>");for(var h=[],d=0;d<a.length;d++){h[d]||(h[d]=[]);var v=a[d],g=i[v];Array.isArray(g)||(g=[g]);for(var m=0;m<g.length;m++)h[d].push({headingName:v,headingValue:g[m],colSpan:1})}for(var b=function(e){var t=h[e],n=h[e+1],r=n[0].colSpan*n.length;t.forEach(function(e){e.colSpan=r})},y=h.length-2;y>-1;y--)b(y);for(var O=1,j=0;j<h.length;j++){n.push("<tr>"),f&&n.push("<th></th>");for(var E=h[j],w="",x=0;x<E.length*O;x++){var A=E[x%E.length];w="<th ",A.colSpan>1&&(w+="colSpan='"+A.colSpan+"'"),w+=">"+A.headingValue+"</th>",n.push(w)}n.push("</tr>"),O=E.length*O,p<O&&(p=O)}n.push("</thead>")}var S=[];if(n.push("<tbody>"),f)!function(){for(var e=s.length-1;e>-1;e--){var t=[];S.length>0&&(t=S.slice(0),S=[]);var r=s[e],a=i[r];void 0==a&&(a=""),Array.isArray(a)||(a=[a]);for(var o=0;o<a.length;o++)S.push({stubName:r,stubValue:a[o],elements:t.slice(0)})}for(var c=S.slice(0),l=0;c.length>0;){var f=c.shift(),h=0==f.elements.length;n.push("<tr>"),n.push("<td>"+f.stubValue+"</td>");for(var d=0;d<p;d++){var v="";h&&(v='"-"'===(v=u[d+p*l])?"-":Number(v)),n.push("<td>"+v+"</td>")}h||f.elements.forEach(function(e){c.push(e)}),n.push("</tr>"),h&&l++}}();else for(var k=0;k<p;k++){var N=u[k];n.push("<td>"+N+"</td>")}n.push("</tbody>"),n.push("</table>"),t.html(n.join(""))}(e,c)},e.data?t(new oe.a(e.data)):t(""))):a.a.createElement(W,{type:"cylon",color:"#2d4182",height:"1%",width:"1%"})}var se=n(84),fe=n.n(se),pe=n(56),he=n.n(pe),de=n(85),ve=n.n(de),ge=n(86),me=Object(ge.a)();function be(e){return console.log(e.db.data),a.a.createElement(L.a,{className:"selectors",onChange:function(t){e.onChange(t)},closeMenuOnSelect:!0,components:me,defaultValue:[e.db.data[0]],options:e.db.data})}function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var je=Object(p.a)(function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},appBar:{backgroundColor:"#2d4182",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400},drawerHeader:Oe({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"white"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary},paperX:{backgroundColor:e.palette.background.paper,border:"2px solid #2d4182",boxShadow:e.shadows[1],padding:e.spacing(2,4,3),width:"90%",height:"90%"}}}),Ee="";function we(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)(null),u=Object(s.a)(o,2),p=u[0],v=u[1],x=Object(r.useState)(F[0].value),B=Object(s.a)(x,2),_=B[0],L=B[1],H=Object(h.a)(),M=Object(r.useState)(!0),G=Object(s.a)(M,2),U=G[0],R=G[1],z=Object(r.useState)("V\xe6lkomin til Hagtalsgrunnin"),W=Object(s.a)(z,2),Q=W[0],q=W[1],J=Object(r.useState)(!1),K=Object(s.a)(J,2),X=K[0],Y=K[1],$=Object(r.useState)(!0),ee=Object(s.a)($,2),te=ee[0],ne=ee[1],re=Object(r.useState)(he.a),ie=Object(s.a)(re,2),oe=ie[0],ue=ie[1],ce=Object(r.useState)(!1),se=Object(s.a)(ce,2),pe=se[0],de=se[1],ge=Object(r.useState)(null),me=Object(s.a)(ge,2),ye=me[0],Oe=me[1],we=je(),xe=function(){var e=Object(l.a)(c.a.mark(function e(t){var n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Statistics Greenland"===t.label&&(ue(fe.a),de(!1),L(t)),"Hagtalsgrunnurin"===t.label&&(ue(he.a),de(!1),L(t)),"Statistics Iceland"!==t.label){e.next=12;break}return ue(ve.a),e.next=6,g()(t.value);case 6:for(n=e.sent,r=0;r<n.data.length;r++)n.data[r].value=n.data[r].dbid,n.data[r].label=n.data[r].text,delete n.data[r].text,delete n.data[r].dbid;Oe(n),L(t.value+n.data[0].value),Ee=t.value,de(!0);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:we.root},a.a.createElement(V,null),a.a.createElement(y.a,null),a.a.createElement(d.a,{position:"relative",className:Object(m.a)(we.appBar,Object(f.a)({},we.appBarShift,U))},a.a.createElement(N.a,null,a.a.createElement(w.a,{color:"inherit","aria-label":"open drawer",onClick:function(){R(!0)},edge:"start",className:Object(m.a)(we.menuButton,U&&we.hide)},a.a.createElement(A.a,null)),a.a.createElement(T.a,{onClick:function(){ne(!te)},variant:"h6",noWrap:te,style:{fontSize:"1.2em",fontFamily:"Open Sans, sans-serif"}},Q))),a.a.createElement(k.a,{className:we.drawer,variant:"persistent",anchor:"left",open:U,onClose:function(){R(!1)},classes:{paper:we.drawerPaper}},a.a.createElement("div",{className:we.drawerHeader},a.a.createElement(w.a,{onClick:function(){R(!1)}},"ltr"===H.direction?a.a.createElement(C.a,null):a.a.createElement(P.a,null),a.a.createElement("img",{src:oe,style:{height:"50px",width:"50px",backgroundRepeat:"no-repeat"},alt:"logo"}))),a.a.createElement(I,{onChange:xe}),pe?a.a.createElement(be,{db:ye,onChange:function(e){console.log("here",e,Ee),L(Ee+e.value)}}):null,a.a.createElement(O.a,null),a.a.createElement(Z,{onClickItem:function(e){i(e),R(!U),Y(!1),Y(!0)},statBank:_})),a.a.createElement(E.a,Object.assign({in:X,style:{transformOrigin:"0 0 0"}},X?{timeout:2e3}:{}),a.a.createElement(b.a,{component:"main",className:we.main,maxWidth:"m"},a.a.createElement(j.a,{container:!0,spacing:1},a.a.createElement(j.a,{item:!0,xs:12,sm:12},a.a.createElement(S.a,{elevation:6,style:{marginBottom:"1cm"},className:we.paper},a.a.createElement(ae,{onChange:function(e,t){q(t),v(e)},pxTable:n})),a.a.createElement(S.a,{elevation:6,className:we.paper},a.a.createElement(T.a,{component:"span"},a.a.createElement(le,{data:p,contentElement:"#tableResult"}),a.a.createElement("div",{style:{fontSize:"1em"},id:"tableResult"}))))))),a.a.createElement("footer",{className:we.footer},a.a.createElement(b.a,{maxWidth:"m"},a.a.createElement(T.a,{variant:"body1"},a.a.createElement(O.a,null),a.a.createElement(D,null)))))}var xe=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(we,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e){e.exports=[{value:"https://statbank.hagstova.fo/api/v1/fo/H2/",label:"Hagtalsgrunnurin"},{value:"https://bank.stat.gl/api/v1/en/Greenland/",label:"Statistics Greenland"},{value:"https://px.hagstofa.is/pxen/api/v1/en/",label:"Statistics Iceland"}]},56:function(e,t,n){e.exports=n.p+"static/media/hagstova_foroya.c347cb8e.svg"},60:function(e,t,n){},77:function(e,t,n){e.exports=n.p+"static/media/logo.565f9a19.svg"},82:function(e,t,n){(function(){"use strict";var r=function(){function e(e){this._ctor(e)}function t(e){for(var t=[];e--;)t[e]=0;return t}return e.prototype={keyword:function(e){if(!a.include(this.keywords(),e))throw"'"+e+"' is not a valid KEYWORD";return this.metadata[e].TABLE?this.metadata[e].TABLE:this.metadata[e]},title:function(){return this.keyword("TITLE")},keywords:function(){return a.keys(this.metadata)},variables:function(){return a.flatten([this.keyword("STUB"),this.keyword("HEADING")])},variable:function(e){var t=this.variables();return"number"===typeof e?t[e]:"string"===typeof e?a.indexOf(t,e):void 0},values:function(e){var t="number"===typeof e?this.variable(e):this.variables()[this.variable(e)];return this.keyword("VALUES")[t]},codes:function(e){var t="number"===typeof e?this.variable(e):this.variables()[this.variable(e)];return this.metadata.CODES&&this.keyword("CODES")[t]?this.keyword("CODES")[t]:this.keyword("VALUES")[t]},valCounts:function(){var e=[];return a.each(this.variables(),function(t,n){e.push(a.size(this.values(n)))},this),e},value:function(e,t){var n=a.indexOf(this.codes(t),e);return this.values(t)[n]},code:function(e,t){var n=a.indexOf(this.values(t),e);return this.codes(t)[n]},datum:function(e){for(var t=this.valCounts(),n=0,r=0,i=e.length-1;r<i;r++)n+=e[r]*a.reduce(t.slice(r+1),function(e,t){return e*t});return n+=a.last(e),!0===arguments[1]?n:this.data[n].replace(/"|'/g,"")},dataCol:function(e){for(var t=this.valCounts(),n=[],r=a.indexOf(e,"*"),i=e.slice(0),o=0;o<t[r];o++)i[r]=o,n.push(this.datum(i,arguments[1]));return n},dataDict:function(e){var t={},n=a.indexOf(e,"*"),r=this.codes(n),i=this.dataCol(e);return a.each(i,function(e,n){t[r[n]]=e}),t},datatable:function(e){var t=this.valCounts(),n=[];a.each(e,function(e,t){"*"===e&&n.push(t)});for(var r=n[0],i=a.last(n),o=[],u=0;u<t[i];u++)e[r]="*",e[i]=u,o.push(this.dataCol(e,arguments[1]));return o},entries:function(){for(var e=this.valCounts(),n=this.variables(),r=t(e.length),i=r.length-1,o=[],u=[],c=0,l=e.length;c<l-1;c++)o[c]=a.reduce(e.slice(c+1),function(e,t){return e*t});return a.each(this.data,function(t,a){for(var c={num:t},l=0,s=n.length;l<s;l++)c[n[l]]=this.values(l)[r[l]];u.push(c);for(var f=0,p=o.length;f<p;f++)(a+1)%o[f]===0&&(r[f]=r[f]===e[f]-1?0:r[f]+1);r[i]=r[i]===e[i]-1?0:r[i]+1},this),u},truncate:function(e){var n=this.valCounts(),r=[];a.each(e,function(t,r){"*"===t[0]&&(e[r]=a.range(0,n[r]-1))});for(var i=0,o=n.length;i<o-1;i++)r[i]=a.reduce(n.slice(i+1),function(e,t){return e*t});r.push(1);for(var u=0,c=e.length;u<c;u++)this.metadata.VALUES[this.variables()[u]]=a.filter(this.metadata.VALUES[this.variables()[u]],function(t,n){return-1!==a.indexOf(e[u],n)});var l=[];!function e(n,r,i,o){if(n.length>1){o="undefined"!==typeof o?o:1;var u=n.pop(),c=r.pop(),s=i.pop();e(n,r,i,a.flatten(a.map(a.range(0,u),function(e){return a.include(s,e)?o:t(c)})))}l.push(a.flatten(o))}(n,r,e),l=l[0];var s=[];a.each(e[0],function(e){var t=e*r[0],n=t+r[0];s.push(a.filter(a.range(t,n),function(e,t){return 1===l[t]}))}),s=a.flatten(s),this.data=a.filter(this.data,function(e,t){return-1!==a.indexOf(s,t)})},subset:function(e){},_ctor:function(e){for(var t,n={},r=e.split(/\nDATA=/),a=r[0].replace(/;\s*(\r\n?|\n)/g,";;").replace(/;;$/,";").replace(/(\r\n?|\n)/g,"").replace(/""/g," ").split(";;"),i=r[1],o=0,u=a.length;o<u;o++){var c=a[o].match(/^(.+?)(?:\((.+?)\))?=(.+)$/);if(null!=c){c[2]||(c[2]="TABLE");var l=c[1],s=c[3].replace(/^"|"$/g,"").split(/","/g),f=c[2].replace(/"/g,"");n[l]||(n[l]={}),n[l][f]="VALUES"!==l&&1===s.length?s[0]:s}}try{t=i.replace(/(\r\n|\r|\n)/g,"").replace(/;\s*/,"").split(/\s+/)}catch(p){}n.HEADING||(n.HEADING={TABLE:[]}),this.metadata=n,this.data=t}},e}(),a=this._;e.exports&&(t=e.exports=r),t.Px=r,a=n(122)}).call(this)},84:function(e,t,n){e.exports=n.p+"static/media/greenland.47af88e4.png"},85:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAyCAIAAAClJN76AAAAA3NCSVQICAjb4U/gAAAAEHRFWHRTb2Z0d2FyZQBTaHV0dGVyY4LQCQAAAPVJREFUWMNj/P//P8PAASaGAQWj1o9c61koN+LH739Xn33++ecfAwMDFxuzlhQvGzMj/ayvXH9j9ZnncG65h3Kuk8Jo3I9aT3HS+/Lly5u3byFsQQEBfn5+ulrf2z8JmVtcmMfDwzMa96PWj1o/av2o9UPQesYR3c0gXOPJlO2luq1PupzJbGpaKAmgiTx+9+Pphx9wrrQAh6wQBx4T+DhYyG/prskwRm8Q7LrXv+c+nBtmIlnspjSa8UatH7V+1PqhWuY/6XI+dvc9hG2lLDgAoxtUt3U07ketp1Jb7+qzzx+//2FgYODnZNGW4h1tao5aTxgAANcVQFHaCHb7AAAAAElFTkSuQmCC"},94:function(e,t,n){e.exports=n(131)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.f181726c.chunk.js.map