(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475],{40863:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return isEqualNode},default:function(){return initHeadManager}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function reactElementToDOM(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?a[i]=!!n[e]:a.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:l}=n;return l?a.innerHTML=l.__html||"":i&&(a.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),a}function isEqualNode(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function initHeadManager(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var l;(null==n?void 0:null==(l=n.tagName)?void 0:l.toLowerCase())===e&&i.push(n)}let o=t.map(reactElementToDOM).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(isEqualNode(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),o.forEach(e=>n.insertBefore(e,r)),r.content=(a-i.length+o.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},73994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return handleClientScriptLoad},initScriptLoader:function(){return initScriptLoader},default:function(){return p}});let r=n(21024),a=n(68533),i=r._(n(54887)),l=a._(n(2265)),o=n(61852),d=n(40863),u=n(62389),c=new Map,s=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],insertStylesheets=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},loadScript=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:i,children:l="",strategy:o="afterInteractive",onError:u,stylesheets:p}=e,y=n||t;if(y&&s.has(y))return;if(c.has(t)){s.add(y),c.get(t).then(r,u);return}let afterLoad=()=>{a&&a(),s.add(y)},h=document.createElement("script"),m=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),r&&r.call(this,t),afterLoad()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(i?(h.innerHTML=i.__html||"",afterLoad()):l?(h.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",afterLoad()):t&&(h.src=t,c.set(t,m)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=d.DOMAttributeNames[n]||n.toLowerCase();h.setAttribute(e,r)}"worker"===o&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",o),p&&insertStylesheets(p),document.body.appendChild(h)};function handleClientScriptLoad(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>loadScript(e))}):loadScript(e)}function loadLazyScript(e){"complete"===document.readyState?(0,u.requestIdleCallback)(()=>loadScript(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>loadScript(e))})}function addBeforeInteractiveToCache(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");s.add(t)})}function initScriptLoader(e){e.forEach(handleClientScriptLoad),addBeforeInteractiveToCache()}function Script(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:d="afterInteractive",onError:u,stylesheets:c,...f}=e,{updateScripts:p,scripts:y,getIsSsr:h,appDir:m,nonce:_}=(0,l.useContext)(o.HeadManagerContext),S=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;S.current||(a&&e&&s.has(e)&&a(),S.current=!0)},[a,t,n]);let g=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{g.current||("afterInteractive"===d?loadScript(e):"lazyOnload"===d&&loadLazyScript(e),g.current=!0)},[e,d]),("beforeInteractive"===d||"worker"===d)&&(p?(y[d]=(y[d]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:u,...f}]),p(y)):h&&h()?s.add(t||n):h&&!h()&&loadScript(e)),m){if(c&&c.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===d)return n?(i.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"}),l.default.createElement("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),l.default.createElement("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...f}])+")"}}));"afterInteractive"===d&&n&&i.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"})}return null}Object.defineProperty(Script,"__nextScript",{value:!0});let p=Script;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48475:function(e,t,n){e.exports=n(73994)}}]);