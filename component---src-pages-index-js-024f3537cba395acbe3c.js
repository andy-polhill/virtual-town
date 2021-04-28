/*! For license information please see component---src-pages-index-js-024f3537cba395acbe3c.js.LICENSE.txt */
(self.webpackChunkandy_polhill=self.webpackChunkandy_polhill||[]).push([[678],{9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},9756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})},5706:function(e,t,r){"use strict";var n=r(8812),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(e){return n.isMemo(e)?a:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=a;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var o=d(r);o&&o!==m&&e(t,o,n)}var a=l(r);f&&(a=a.concat(f(r)));for(var c=u(t),h=u(r),y=0;y<a.length;++y){var g=a[y];if(!(i[g]||n&&n[g]||h&&h[g]||c&&c[g])){var b=p(r,g);try{s(t,g,b)}catch(v){}}}}return t}},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},165:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,T=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case i:case c:case a:case d:return e;default:switch(e=e&&e.$$typeof){case s:case p:case y:case h:case u:return e;default:return t}}case o:return t}}}function E(e){return w(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=s,t.ContextProvider=u,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=y,t.Memo=h,t.Portal=o,t.Profiler=c,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return E(e)||w(e)===l},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===s},t.isContextProvider=function(e){return w(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===c||e===a||e===d||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===u||e.$$typeof===s||e.$$typeof===p||e.$$typeof===b||e.$$typeof===v||e.$$typeof===T||e.$$typeof===g)},t.typeOf=w},8812:function(e,t,r){"use strict";e.exports=r(165)},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},2837:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var o=n(r(1506)),i=n(r(5354)),a=n(r(9713)),c=n(r(7294)),u=n(r(5697)),s=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,(0,a.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);s.propTypes={children:u.default.func.isRequired};var l=s;t.Z=l},5339:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ge}});var n=r(7294),o=r(9756);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=r(3552),u=r(8812),s=r(5706),l=r.n(s);function f(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var p=n.createContext();var d={initialChunks:{}},m="PENDING",h="REJECTED";var y=function(e){return e};function g(e){var t=e.defaultResolveComponent,r=void 0===t?y:t,s=e.render,g=e.onLoad;function b(e,t){void 0===t&&(t={});var y=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),b={};function v(e){return t.cacheKey?t.cacheKey(e):y.resolve?y.resolve(e):"static"}function T(e,n,o){var i=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!(0,u.isValidElementType)(i))throw new Error("resolveComponent returned something that is not a React component!");return l()(o,i,{preload:!0}),i}var w,E=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:v(r)},f(!r.__chunkExtractor||y.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(y.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(y.chunkName(r))),a(n)):(!1!==t.ssr&&(y.isReady&&y.isReady(r)||y.chunkName&&d.initialChunks[y.chunkName(r)])&&n.loadSync(),n)}(0,c.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=v(e);return i({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var n=r.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===h&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return v(this.props)},n.getCache=function(){return b[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),b[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;g&&setTimeout((function(){g(e.state.result,e.props)}))},n.loadSync=function(){if(this.state.loading)try{var e=T(y.requireSync(this.props),this.props,C);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:y.resolve(this.props),chunkName:y.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=T(t,e.props,{Loadable:C});e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},n.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,(0,o.Z)(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=y.requireAsync(r)).status=m,this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:y.resolve(e.props),chunkName:y.chunkName(e.props),error:t?t.message:t}),n.status=h}))),n},n.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,a=(e.__chunkExtractor,(0,o.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,u=c.error,l=c.loading,f=c.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===m)throw this.loadAsync();if(u)throw u;var p=n||t.fallback||null;return l?p:s({fallback:p,result:f,options:t,props:i({},a,{ref:r})})},r}(n.Component),S=(w=E,function(e){return n.createElement(p.Consumer,null,(function(t){return n.createElement(w,Object.assign({__chunkExtractor:t},e))}))}),C=n.forwardRef((function(e,t){return n.createElement(S,Object.assign({forwardedRef:t},e))}));return C.preload=function(e){y.requireAsync(e)},C.load=function(e){return y.requireAsync(e)},C}return{loadable:b,lazy:function(e,t){return b(e,i({},t,{suspense:!0}))}}}var b=g({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return n.createElement(t,r)}}),v=b.loadable,T=b.lazy,w=g({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),E=w.loadable,S=w.lazy;var C=v;C.lib=E,T.lib=S;var O=C,A=r(2837),k=r(5444);function P(){return n.createElement(k.i1,{query:"1490979859",render:function(e){var t=e.markdownRemark;return n.createElement("main",{className:"about-module--about--2QBdi",dangerouslySetInnerHTML:{__html:t.html}})}})}const j="themeToggle-module--theme-controls__link--29yPl",_="themeToggle-module--theme-controls__span--3efXI";function x(e){var t=e.onToggle,r=e.theme;return n.createElement("div",{className:"themeToggle-module--theme-controls--1reri"},"dark"===r&&n.createElement(n.Fragment,null,n.createElement("a",{className:j,onClick:function(){return t("light")}},"Light"),n.createElement("span",{className:_},"Dark")),"light"===r&&n.createElement(n.Fragment,null,n.createElement("span",{className:_},"Light"),n.createElement("a",{className:j,onClick:function(){return t("dark")}},"Dark")))}var L,N,R,M,I=r(5697),$=r.n(I),D=r(4839),q=r.n(D),F=r(2993),K=r.n(F),B=r(6494),H=r.n(B),U="bodyAttributes",z="htmlAttributes",Y="titleAttributes",V={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Z=(Object.keys(V).map((function(e){return V[e]})),"charset"),W="cssText",G="href",J="http-equiv",Q="innerHTML",X="itemprop",ee="name",te="property",re="rel",ne="src",oe="target",ie={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ae="defaultTitle",ce="defer",ue="encodeSpecialCharacters",se="onChangeClientState",le="titleTemplate",fe=Object.keys(ie).reduce((function(e,t){return e[ie[t]]=t,e}),{}),pe=[V.NOSCRIPT,V.SCRIPT,V.STYLE],de="data-react-helmet",me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ye=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},be=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ve=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Te=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},we=function(e){var t=Ae(e,V.TITLE),r=Ae(e,le);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Ae(e,ae);return t||n||void 0},Ee=function(e){return Ae(e,se)||function(){}},Se=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ge({},e,t)}),{})},Ce=function(e,t){return t.filter((function(e){return void 0!==e[V.BASE]})).map((function(e){return e[V.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Oe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&xe("Helmet: "+e+' should be of type "Array". Instead found type "'+me(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===re&&"canonical"===e[r].toLowerCase()||u===re&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==Q&&c!==W&&c!==X||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=H()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},Ae=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ke=(L=Date.now(),function(e){var t=Date.now();t-L>16?(L=t,e(t)):setTimeout((function(){ke(e)}),0)}),Pe=function(e){return clearTimeout(e)},je="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ke:r.g.requestAnimationFrame||ke,_e="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Pe:r.g.cancelAnimationFrame||Pe,xe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Le=null,Ne=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;Ie(V.BODY,n),Ie(V.HTML,o),Me(f,p);var d={baseTag:$e(V.BASE,r),linkTags:$e(V.LINK,i),metaTags:$e(V.META,a),noscriptTags:$e(V.NOSCRIPT,c),scriptTags:$e(V.SCRIPT,s),styleTags:$e(V.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},Re=function(e){return Array.isArray(e)?e.join(""):e},Me=function(e,t){void 0!==e&&document.title!==e&&(document.title=Re(e)),Ie(V.TITLE,t)},Ie=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(de),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(de):r.getAttribute(de)!==a.join(",")&&r.setAttribute(de,a.join(","))}},$e=function(e,t){var r=document.head||document.querySelector(V.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===Q)r.innerHTML=t.innerHTML;else if(n===W)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(de,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},De=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},qe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[ie[r]||r]=e[r],t}),t)},Fe=function(e,t,r){switch(e){case V.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(o={key:e})[de]=!0,i=qe(r,o),[n.createElement(V.TITLE,i,e)];var e,r,o,i},toString:function(){return function(e,t,r,n){var o=De(r),i=Re(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Te(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Te(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case U:case z:return{toComponent:function(){return qe(t)},toString:function(){return De(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,i=((o={key:r})[de]=!0,o);return Object.keys(t).forEach((function(e){var r=ie[e]||e;if(r===Q||r===W){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===Q||e===W)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+Te(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===pe.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},Ke=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:Fe(V.BASE,t,n),bodyAttributes:Fe(U,r,n),htmlAttributes:Fe(z,o,n),link:Fe(V.LINK,i,n),meta:Fe(V.META,a,n),noscript:Fe(V.NOSCRIPT,c,n),script:Fe(V.SCRIPT,u,n),style:Fe(V.STYLE,s,n),title:Fe(V.TITLE,{title:f,titleAttributes:p},n)}},Be=q()((function(e){return{baseTag:Ce([G,oe],e),bodyAttributes:Se(U,e),defer:Ae(e,ce),encode:Ae(e,ue),htmlAttributes:Se(z,e),linkTags:Oe(V.LINK,[re,G],e),metaTags:Oe(V.META,[ee,Z,J,te,X],e),noscriptTags:Oe(V.NOSCRIPT,[Q],e),onChangeClientState:Ee(e),scriptTags:Oe(V.SCRIPT,[ne,Q],e),styleTags:Oe(V.STYLE,[W],e),title:we(e),titleAttributes:Se(Y,e)}}),(function(e){Le&&_e(Le),e.defer?Le=je((function(){Ne(e,(function(){Le=null}))})):(Ne(e),Le=null)}),Ke)((function(){return null})),He=(N=Be,M=R=function(e){function t(){return he(this,t),ve(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!K()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case V.SCRIPT:case V.NOSCRIPT:return{innerHTML:t};case V.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return ge({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ge({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case V.TITLE:return ge({},o,((t={})[n.type]=a,t.titleAttributes=ge({},i),t));case V.BODY:return ge({},o,{bodyAttributes:ge({},i)});case V.HTML:return ge({},o,{htmlAttributes:ge({},i)})}return ge({},o,((r={})[n.type]=ge({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ge({},t);return Object.keys(e).forEach((function(t){var n;r=ge({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[fe[r]||r]=e[r],t}),t)}(be(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case V.LINK:case V.META:case V.NOSCRIPT:case V.SCRIPT:case V.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=be(e,["children"]),o=ge({},r);return t&&(o=this.mapChildrenToProps(t,o)),n.createElement(N,o)},ye(t,null,[{key:"canUseDOM",set:function(e){N.canUseDOM=e}}]),t}(n.Component),R.propTypes={base:$().object,bodyAttributes:$().object,children:$().oneOfType([$().arrayOf($().node),$().node]),defaultTitle:$().string,defer:$().bool,encodeSpecialCharacters:$().bool,htmlAttributes:$().object,link:$().arrayOf($().object),meta:$().arrayOf($().object),noscript:$().arrayOf($().object),onChangeClientState:$().func,script:$().arrayOf($().object),style:$().arrayOf($().object),title:$().string,titleAttributes:$().object,titleTemplate:$().string},R.defaultProps={defer:!0,encodeSpecialCharacters:!0},R.peek=N.peek,R.rewind=function(){var e=N.rewind();return e||(e=Ke({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},M);He.renderStatic=He.rewind;var Ue=r(9499),ze=function(e){var t=e.title,r=e.description,o=e.image,i=(0,Ue.useLocation)().pathname,a=(0,k.K2)(Ve).site.siteMetadata,c=a.defaultTitle,u=a.titleTemplate,s=a.defaultDescription,l=a.siteUrl,f=a.defaultImage,p=a.twitterUsername,d=a.googleSiteVerification,m={title:t||c,description:r||s,image:""+l+(o||f),url:""+l+i};return n.createElement(He,{title:m.title,titleTemplate:u},n.createElement("meta",{name:"description",content:m.description}),n.createElement("meta",{name:"image",content:m.image}),m.url&&n.createElement("meta",{property:"og:url",content:m.url}),m.title&&n.createElement("meta",{property:"og:title",content:m.title}),m.description&&n.createElement("meta",{property:"og:description",content:m.description}),m.image&&n.createElement("meta",{property:"og:image",content:m.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&n.createElement("meta",{name:"twitter:creator",content:p}),m.title&&n.createElement("meta",{name:"twitter:title",content:m.title}),d&&n.createElement("meta",{name:"google-site-verification",content:d}),m.description&&n.createElement("meta",{name:"twitter:description",content:m.description}),m.image&&n.createElement("meta",{name:"twitter:image",content:m.image}))},Ye=ze;ze.defaultProps={title:null,description:null,image:null,googleSiteVerification:null};var Ve="2147664024";var Ze=O((function(){return Promise.all([r.e(532),r.e(964)]).then(r.bind(r,5964))}));function We(){return n.createElement(n.Fragment,null,n.createElement(Ye,null),n.createElement(A.Z,null,(function(e){var t=e.theme,r=e.toggleTheme;return n.createElement("div",{className:"page-module--page--15bid"},n.createElement(Ze,{theme:t}),n.createElement(P,null),n.createElement(x,{theme:t,onToggle:r}))})))}function Ge(){return n.createElement(We,null)}}}]);
//# sourceMappingURL=component---src-pages-index-js-024f3537cba395acbe3c.js.map