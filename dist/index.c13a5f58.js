var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,g,v=globalThis;function m(e){return e&&e.__esModule?e.default:e}var y={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof v&&v)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var P={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;n=L&&!P.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:P;var O={};O=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var j={},x={},M={},T=Function.prototype,I=T.call,H=S&&T.bind.bind(I,I),q={},C=(M=S?H:function(e){return function(){return I.apply(e,arguments)}})({}.toString),F=M("".slice);q=function(e){return F(C(e),8,-1)};var N=Object,A=M("".split);x=k(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?A(e,""):N(e)}:N;var B={},R={};R=function(e){return null==e};var D=TypeError;B=function(e){if(R(e))throw new D("Can't call method on "+e);return e},j=function(e){return x(B(e))};var W={},G={},U={},z={},Y="object"==typeof document&&document.all;z=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},U=function(e){return"object"==typeof e?null!==e:z(e)};var J={},V={};V=function(e,t){var r;return arguments.length<2?(r=b[e],z(r)?r:void 0):b[e]&&b[e][t]};var Q={};Q=M({}.isPrototypeOf);var K={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(o=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(o=+i[1]),Z=o;var eo=b.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;J=K?function(e){return"symbol"==typeof e}:function(e){var t=V("Symbol");return z(t)&&Q(t.prototype,ea(e))};var es={},ec={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(z(e))return e;throw new ed(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return R(r)?void 0:ec(r)};var ef={},ep=TypeError;ef=function(e,t){var r,n;if("string"===t&&z(r=e.toString)&&!U(n=E(r,e))||z(r=e.valueOf)&&!U(n=E(r,e))||"string"!==t&&z(r=e.toString)&&!U(n=E(r,e)))return n;throw new ep("Can't convert object to primitive value")};var eh={},eg={},ev={};ev=!1;var em={},ey=Object.defineProperty;em=function(e,t){try{ey(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__",e_=eg=b[eb]||em(eb,{});(e_.versions||(e_.versions=[])).push({version:"3.37.1",mode:ev?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eh=function(e,t){return eg[e]||(eg[e]=t||{})};var ew={},ek={},eE=Object;ek=function(e){return eE(B(e))};var eS=M({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return eS(ek(e),t)};var e$={},eP=0,eL=Math.random(),eO=M(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eO(++eP+eL,36)};var ej=b.Symbol,ex=eh("wks"),eM=K?ej.for||ej:ej&&ej.withoutSetter||e$,eT=TypeError,eI=(ew(ex,e="toPrimitive")||(ex[e]=X&&ew(ej,e)?ej[e]:eM("Symbol."+e)),ex[e]);G=function(e,t){if(!U(e)||J(e))return e;var r,n=es(e,eI);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!U(r)||J(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),ef(e,t)},W=function(e){var t=G(e,"string");return J(t)?t:t+""};var eH={},eq={},eC=b.document,eF=U(eC)&&U(eC.createElement);eq=function(e){return eF?eC.createElement(e):{}},eH=!w&&!k(function(){return 7!==Object.defineProperty(eq("div"),"a",{get:function(){return 7}}).a});var eN=Object.getOwnPropertyDescriptor;r=w?eN:function(e,t){if(e=j(e),t=W(t),eH)try{return eN(e,t)}catch(e){}if(ew(e,t))return O(!E(n,e,t),e[t])};var eA={},eB={};eB=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eR={},eD=String,eW=TypeError;eR=function(e){if(U(e))return e;throw new eW(eD(e)+" is not an object")};var eG=TypeError,eU=Object.defineProperty,ez=Object.getOwnPropertyDescriptor,eY="enumerable",eJ="configurable",eV="writable";a=w?eB?function(e,t,r){if(eR(e),t=W(t),eR(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eV in r&&!r[eV]){var n=ez(e,t);n&&n[eV]&&(e[t]=r.value,r={configurable:eJ in r?r[eJ]:n[eJ],enumerable:eY in r?r[eY]:n[eY],writable:!1})}return eU(e,t,r)}:eU:function(e,t,r){if(eR(e),t=W(t),eR(r),eH)try{return eU(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eA=w?function(e,t,r){return a(e,t,O(1,r))}:function(e,t,r){return e[t]=r,e};var eQ={},eK={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e0=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e1={},e9=M(Function.toString);z(eg.inspectSource)||(eg.inspectSource=function(e){return e9(e)}),e1=eg.inspectSource;var e2={},e4={},e3=b.WeakMap;e4=z(e3)&&/native code/.test(String(e3));var e7={},e8=eh("keys");e7=function(e){return e8[e]||(e8[e]=e$(e))};var e5={};e5={};var e6="Object already initialized",te=b.TypeError,tt=b.WeakMap;if(e4||eg.state){var tr=eg.state||(eg.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,s=function(e,t){if(tr.has(e))throw new te(e6);return t.facade=e,tr.set(e,t),t},c=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e7("state");e5[tn]=!0,s=function(e,t){if(ew(e,tn))throw new te(e6);return t.facade=e,eA(e,tn,t),t},c=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var ti=(e2={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=c(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,to=e2.get,ta=String,ts=Object.defineProperty,tc=M("".slice),tu=M("".replace),tl=M([].join),td=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),tf=String(String).split("String"),tp=eK=function(e,t,r){"Symbol("===tc(ta(t),0,7)&&(t="["+tu(ta(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),td&&r&&ew(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tl(tf,"string"==typeof t?t:"")),e};Function.prototype.toString=tp(function(){return z(this)&&to(this).source||e1(this)},"toString"),eQ=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(z(r)&&eK(r,o,n),n.global)i?e[t]=r:em(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var th={},tg={},tv={},tm={},ty={},tb={},t_=Math.ceil,tw=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tw:t_)(t)},ty=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tk=Math.max,tE=Math.min;tm=function(e,t){var r=ty(e);return r<0?tk(r+t,0):tE(r,t)};var tS={},t$={},tP=Math.min;t$=function(e){var t=ty(e);return t>0?tP(t,9007199254740991):0},tS=function(e){return t$(e.length)};var tL=function(e){return function(t,r,n){var i,o=j(t),a=tS(o);if(0===a)return!e&&-1;var s=tm(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tO={includes:tL(!0),indexOf:tL(!1)}.indexOf,tj=M([].push);tv=function(e,t){var r,n=j(e),i=0,o=[];for(r in n)!ew(e5,r)&&ew(n,r)&&tj(o,r);for(;t.length>i;)ew(n,r=t[i++])&&(~tO(o,r)||tj(o,r));return o};var tx=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tv(e,tx)},d=Object.getOwnPropertySymbols;var tM=M([].concat);tg=V("Reflect","ownKeys")||function(e){var t=l(eR(e));return d?tM(t,d(e)):t},th=function(e,t,n){for(var i=tg(t),o=0;o<i.length;o++){var s=i[o];ew(e,s)||n&&ew(n,s)||a(e,s,r(t,s))}};var tT={},tI=/#|\.prototype\./,tH=function(e,t){var r=tC[tq(e)];return r===tN||r!==tF&&(z(t)?k(t):!!t)},tq=tH.normalize=function(e){return String(e).replace(tI,".").toLowerCase()},tC=tH.data={},tF=tH.NATIVE="N",tN=tH.POLYFILL="P";tT=tH,y=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||em(c,{}):b[c]&&b[c].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tT(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;th(a,o)}(e.sham||o&&o.sham)&&eA(a,"sham",!0),eQ(n,i,a,e)}};var tA={},tB={},tR=Function.prototype,tD=tR.apply,tW=tR.call;tB="object"==typeof Reflect&&Reflect.apply||(S?tW.bind(tD):function(){return tW.apply(tD,arguments)});var tG={},tU={},tz=(tU=function(e){if("Function"===q(e))return M(e)})(tU.bind);tG=function(e,t){return ec(e),void 0===t?e:S?tz(e,t):function(){return e.apply(t,arguments)}};var tY={};tY=V("document","documentElement");var tJ={};tJ=M([].slice);var tV={},tQ=TypeError;tV=function(e,t){if(e<t)throw new tQ("Not enough arguments");return e};var tK={};tK=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===q(b.process);var tZ=b.setImmediate,t0=b.clearImmediate,t1=b.process,t9=b.Dispatch,t2=b.Function,t4=b.MessageChannel,t3=b.String,t7=0,t8={},t5="onreadystatechange";k(function(){f=b.location});var t6=function(e){if(ew(t8,e)){var t=t8[e];delete t8[e],t()}},re=function(e){return function(){t6(e)}},rt=function(e){t6(e.data)},rr=function(e){b.postMessage(t3(e),f.protocol+"//"+f.host)};tZ&&t0||(tZ=function(e){tV(arguments.length,1);var t=z(e)?e:t2(e),r=tJ(arguments,1);return t8[++t7]=function(){tB(t,void 0,r)},p(t7),t7},t0=function(e){delete t8[e]},tX?p=function(e){t1.nextTick(re(e))}:t9&&t9.now?p=function(e){t9.now(re(e))}:t4&&!tK?(g=(h=new t4).port2,h.port1.onmessage=rt,p=tG(g.postMessage,g)):b.addEventListener&&z(b.postMessage)&&!b.importScripts&&f&&"file:"!==f.protocol&&!k(rr)?(p=rr,b.addEventListener("message",rt,!1)):p=t5 in eq("script")?function(e){tY.appendChild(eq("script"))[t5]=function(){tY.removeChild(this),t6(e)}}:function(e){setTimeout(re(e),0)});var rn=(tA={set:tZ,clear:t0}).clear;y({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ri=tA.set,ro={},ra={};ra="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rs=b.Function,rc=/MSIE .\./.test(ee)||ra&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ro=function(e,t){var r=t?2:1;return rc?function(n,i){var o=tV(arguments.length,1)>r,a=z(n)?n:rs(n),s=o?tJ(arguments,r):[],c=o?function(){tB(a,this,s)}:a;return t?e(c,i):e(c)}:e};var ru=b.setImmediate?ro(ri,!1):ri;y({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==ru},{setImmediate:ru});var rl=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new L(o||[]),s=f,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(O([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function O(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rl}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rl:Function("r","regeneratorRuntime = r")(rl)}const rd="https://forkify-api.herokuapp.com/api/v2/recipes/",rf="23130ed9-bd72-4bf4-acee-f50b3c967a3b";var rp={};rp=new URL("icons.c14567a0.svg",import.meta.url).toString();var rh={};function rg(e,t,r,n,i){var o,a,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return o=d,a=l,s=r,1===o&&1===a?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===a?`${n}${s}`:"0"==s?`${n}${a}/${o}`:`${n}${s} ${a}/${o}`}rh=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(r.length>2)){var s,c;return s=r,c=t,rg(parseInt(s,10),Math.pow(10,s.length),o,c,!1)}{let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,o),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rg(Math.round((s*c-s)*Math.pow(10,o)),(c-1)*a,n,i,!0)}(r,n,e,o,t)}};class rv{_parentElement=document.querySelector(".recipe");_data;render(e){if(Array.isArray(e)&&0===e.length||!e)return this.renderError();this._data=e,this.clear(this._parentElement),this._parentElement.insertAdjacentHTML("afterbegin",this._generateMarkup(this._data))}renderSpinner(e=this._parentElement){let t=`
    <div class="spinner">
      <svg>
        <use href="${m(rp)}#icon-loader"></use>
      </svg>
    </div>
  `;this.clear(e),e.insertAdjacentHTML("afterbegin",t)}_generateMarkupError(e=this._errorMessage,t="error"){return`
    <div class="${t}">
      <div>
        <svg>
          <use href="${m(rp)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `}renderError(e,t){this.clear(this._parentElement),this._parentElement.insertAdjacentHTML("afterbegin",this._generateMarkupError(e,t))}clear(e=this._parentElement){e.innerHTML=""}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));""===t&&this.renderError(this._message,"message"),r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}}class rm extends rv{_parentElement=document.querySelector(".recipe");_data;servings=4;_errorMessage="We could not find that recipe. Please try another one!";_message="Search an intresting recipe or ingredient. Have fun!";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(`${t}`,e))}addHandlerServings(e){this._parentElement.addEventListener("click",t=>{if(t.target.closest(".btn--increase-servings")){let{updateTo:r}=t.target.closest(".btn--increase-servings").dataset;e(t,+r)}})}_generateMarkup(){return`
          <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
          </figure>
        
          <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${m(rp)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${m(rp)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this.servings}</span>
            <span class="recipe__info-text">servings</span>
        
            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings decrease " data-update-to="${this.servings-1}">
                <svg>
                  <use href="${m(rp)}#icon-minus-circle" ></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings increase" data-update-to="${this.servings+1}">
                <svg>
                  <use href="${m(rp)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>
        
          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${m(rp)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round bookmark-button">
            <svg class="">
              <use href="${m(rp)}#icon-bookmark${this._data.isBookmarked?"-fill":""}" class="bookmark"></use>
            </svg>
          </button>
          </div>
        
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
            
            ${this._data.ingredients.reduce((e,t)=>e+`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${m(rp)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${null!==t.quantity?m(rh)(t.quantity):""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${t.unit||""}</span>
                ${t.description||""}
              </div>
            </li>
              `,"")}
            </ul>
          </div>
        
          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
            </p>
            <a
            class="btn--small recipe__btn"
            href="${this._data.serviceUrl}"
            target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${m(rp)}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>`}}const ry=new rm,rb=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long!"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},r_=function(e){let t={cookingTime:e.cooking_time,image:e.image_url,sourceUrl:e.source_url,...e.key&&{key:e.key},...e};return delete t.cooking_time,delete t.image_url,delete t.source_url,t},rw=function(e){let t={...r_(e),...e.key&&{key:e.key}};return delete t.sourceUrl,delete t.cookingTime,t},rk=function(e){let t=Math.ceil(e.length/10);return ry.totalPage=t,t},rE={recipe:{},search:{currentPage:1,totalPage:0,results:[]},bookmarks:[]},rS=async function(e){try{let t=await rb(`${rd}${e}?key=${rf}`);console.log(t),rE.recipe=r_(t.data.recipe),rE.recipe.isBookmarked=rE.bookmarks.some(e=>rE.recipe.id===e.id)}catch(e){throw e}},r$=async function(e){try{if(!e)throw Error("Recive not found");let t=await rb(`${rd}?search=${e}&key=${rf}`);if(0===t.results)throw Error("Recive not find");rE.search.results=t.data.recipes.map(e=>rw(e)),rE.search.totalPage=rk(rE.search.results)}catch(e){throw e}},rP=function(){rE.recipe&&localStorage.setItem("bookmarks",JSON.stringify(rE.bookmarks))},rL=async function(e){try{let t=Object.entries(e).filter(([e,t])=>e.startsWith("ingredient")&&""!==t).map(([e,t])=>{let[r,n,i]=t.split(",").map(e=>e.trim());if(!i)throw Error("Please enter the descriptions of the ingredients");return{quantity:r?+r:null,unit:n||"",description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rb(`${rd}?key=${rf}`,r);rE.recipe=r_(n.data.recipe),rE.recipe.isBookmarked=!0,rE.bookmarks.push(rE.recipe)}catch(e){throw e}};!function(){let e=JSON.parse(localStorage.getItem("bookmarks"));e&&(e.forEach(e=>e.isBookmarked=!0),rE.bookmarks=e)}();class rO extends rv{_parentElement=document.querySelector(".search");addHandlerSearch(e){this._parentElement.addEventListener("click",t=>{t.target.closest(".search__btn")&&e(t)})}clearInput(){this._parentElement.querySelector(".search__field").value=""}getQuery(){return this._parentElement.querySelector(".search__field").value}}const rj=new rO;var rx=PreviewView=new class extends rv{_data;generateMarkup(e){if(Array.isArray(this._data&&0===this._data.length))return;let t=window.location.hash.slice(1);return this._data=e,this._data.reduce((e,r)=>e+`
    <li class="preview">
      <a class="preview__link ${t===r.id?"preview__link--active":""}" href="#${r.id}">
        <figure class="preview__fig">
          <img src="${r.image}" alt="${r.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">
            ${r.title}
          </h4>
          <p class="preview__publisher">${r.publisher}</p>

          <div class="preview__user-generated ${r.key?"":"hidden"}">
            <svg>
              <use href="${m(rp)}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
    `,"")}};class rM extends rv{_parentElement=document.querySelector(".results");paginatedItems;_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return rx.generateMarkup(this._data)}}const rT=new rM;class rI extends rv{_parentElement=document.querySelector(".pagination");currentPage;addHandlerPagination(e){document.body.addEventListener("click",t=>{(t.target.closest(".pagination__btn--prev")||t.target.closest(".pagination__btn--next"))&&e(t)})}_generateMarkup(){return`
      <button class="btn--inline pagination__btn--prev previus" data-go-to="${this.currentPage-1}">
        <svg class="search__icon">
          <use href="${m(rp)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this.currentPage-1}</span>
      </button>
      <button class="btn--inline pagination__btn--next next" data-go-to="${this.currentPage+1}">
        <span>Page ${this.currentPage+1}</span>
        <svg class="search__icon">
          <use href="${m(rp)}#icon-arrow-right"></use>
        </svg>
      </button>
    `}viewBtn(e,t){let r=this._parentElement.querySelector(".next"),n=this._parentElement.querySelector(".previus");e?r.classList.add("hidden"):r.classList.remove("hidden"),t?n.classList.add("hidden"):n.classList.remove("hidden")}}const rH=new rI;class rq extends rv{_parentElement=document.querySelector(".bookmarks__list");_bookmarkBtn;_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="No bookmarks yet. Find a nice recipe and bookmark it :)";addHandlerBookmarks(e){document.body.addEventListener("click",t=>{this._bookmarkBtn=t.target.closest(".bookmark-button"),this._bookmarkBtn&&e()})}addHandlerLoad(e){window.addEventListener("load",()=>e())}_generateMarkup(){return rx.generateMarkup(this._data)}}const rC=new rq;class rF extends rv{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");message="Recipe uploaded!";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.controlClassList.bind(this))}_addHandlerHideWindow(){this._overlay.addEventListener("click",this.controlClassList.bind(this)),this._btnClose.addEventListener("click",this.controlClassList.bind(this))}controlClassList(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}checkCloseWindow(){return this._overlay.classList.contains("hidden")||this._window.classList.contains("hidden")}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}}const rN=new rF,rA=async function(){try{let e=window.location.hash.slice(1);if(!e)return;ry.renderSpinner(),await rS(e),ry.render(rE.recipe),ry.servings=4,ry.update(rE.recipe),0!==rE.bookmarks.length&&rC.update(rE.bookmarks),0!==rE.search.results.length&&rT.update(rT.paginatedItems)}catch(e){ry.renderError(e.message),console.error(e.message)}},rB=async function(e){try{e?.preventDefault(),rH.clear(),rT.renderSpinner();let t=rj.getQuery();if(!t)throw Error("Please write some recive");await r$(t),rE.search.currentPage=1,rH.currentPage=rE.search.currentPage;let r=rR(rE.search.currentPage,rE.search.results);rT.render(r),ry.servings=4}catch(e){ry.renderError(),console.error(e)}finally{rj.clearInput()}},rR=function(e,t){let r=[];return r=t.slice((e-1)*10,10*e),rH.currentPage=rE.search.currentPage,rH.render(!0),rH.viewBtn(rH.currentPage===rE.search.totalPage,1===rE.search.currentPage),rT.paginatedItems=r,r},rD=function(e,t){e.ingredients.forEach(e=>e.quantity=e?.quantity*t/ry.servings)},rW=async function(e){try{rN.renderSpinner(),await rL(e),rN.renderError(rN.message,"message"),rC.render(rE.bookmarks),ry.render(rE.recipe),window.history.pushState(null,"",`#${rE.recipe.id}`),setTimeout(()=>{rN.checkCloseWindow()||rN.controlClassList()},2500),rC.update(rE.bookmarks),console.log(rE.search.results),rP()}catch(e){rN.renderError(e.message),console.error(e)}};ry.addHandlerRender(rA),ry.addHandlerServings(function(e,t){0!==t&&(rD(rE.recipe,t),ry.servings=t,ry.update(rE.recipe))}),rj.addHandlerSearch(rB),rH.addHandlerPagination(function(e){if(e.preventDefault(),!(rk(rE.search.results)>rE.search.currentPage||rE.search.currentPage>1))return;let{goTo:t}=e.target.closest("button").dataset;rE.search.currentPage=+t,rH.currentPage=rE.search.currentPage;let r=rR(rE.search.currentPage,rE.search.results);rT.render(r)}),rC.addHandlerLoad(function(){rC.render(rE.bookmarks)}),rC.addHandlerBookmarks(function(){let e=rE.recipe,t=rE.bookmarks?.findIndex(t=>t.id===e.id);-1===t&&(e.isBookmarked=!0,rE.bookmarks.push(e)),-1!==t&&(e.isBookmarked=!1,rE.bookmarks.splice(t,1)),rP(),rC.render(rE.bookmarks),ry.update(rE.recipe),rC.update(rE.bookmarks)}),rN.addHandlerUpload(rW),console.log("WELCOME TO THE APPLICATION");
//# sourceMappingURL=index.c13a5f58.js.map
