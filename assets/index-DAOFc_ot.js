var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function ee(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+re(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(E,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=ee(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+re(s,l);c+=ie(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+re(s,l++),c+=ie(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D={current:null},se={transition:null},ce={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:se,ReactCurrentOwner:C};e.Children={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=se.transition;se.transition={};try{e()}finally{se.transition=t}},e.unstable_act=function(){throw Error(`act(...) is not supported in production builds of React.`)},e.useCallback=function(e,t){return D.current.useCallback(e,t)},e.useContext=function(e){return D.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return D.current.useDeferredValue(e)},e.useEffect=function(e,t){return D.current.useEffect(e,t)},e.useId=function(){return D.current.useId()},e.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return D.current.useMemo(e,t)},e.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},e.useRef=function(e){return D.current.useRef(e)},e.useState=function(e){return D.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return D.current.useTransition()},e.version=`18.2.0`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{var t=p(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),h=s(((e,t)=>{t.exports=m()}))(),g=u(p(),1),_=(0,g.createContext)({});function v(e){let t=(0,g.useRef)(null);return t.current===null&&(t.current=e()),t.current}var y=typeof window<`u`?g.useLayoutEffect:g.useEffect,b=(0,g.createContext)(null);function x(e,t){e.indexOf(t)===-1&&e.push(t)}function S(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var C=(e,t,n)=>n>t?t:n<e?e:n,w={},T=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ee=e=>typeof e==`object`&&!!e,te=e=>/^0[^.\s]+$/u.test(e);function ne(e){let t;return()=>(t===void 0&&(t=e()),t)}var E=e=>e,re=(...e)=>e.reduce((e,t)=>n=>t(e(n))),ie=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},ae=class{constructor(){this.subscriptions=[]}add(e){return x(this.subscriptions,e),()=>S(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},oe=e=>e*1e3,D=e=>e/1e3,se=(e,t)=>t?1e3/t*e:0,ce=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,le=1e-7,O=12;function ue(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=ce(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>le&&++s<O);return o}function de(e,t,n,r){if(e===t&&n===r)return E;let i=t=>ue(t,0,1,e,n);return e=>e===0||e===1?e:ce(i(e),t,r)}var fe=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,pe=e=>t=>1-e(1-t),me=de(.33,1.53,.69,.99),he=pe(me),ge=fe(he),_e=e=>e>=1?1:(e*=2)<1?.5*he(e):.5*(2-2**(-10*(e-1))),ve=e=>1-Math.sin(Math.acos(e)),ye=pe(ve),be=fe(ve),xe=de(.42,0,1,1),Se=de(0,0,.58,1),Ce=de(.42,0,.58,1),we=e=>Array.isArray(e)&&typeof e[0]!=`number`,Te=e=>Array.isArray(e)&&typeof e[0]==`number`,Ee={linear:E,easeIn:xe,easeInOut:Ce,easeOut:Se,circIn:ve,circInOut:be,circOut:ye,backIn:he,backInOut:ge,backOut:me,anticipate:_e},De=e=>typeof e==`string`,Oe=e=>{if(Te(e)){e.length;let[t,n,r,i]=e;return de(t,n,r,i)}return De(e)?(Ee[e],`${e}`,Ee[e]):e},ke=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function Ae(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var je=40;function Me(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=ke.reduce((e,t)=>(e[t]=Ae(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=w.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,je),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:ke.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<ke.length;t++)o[ke[t]].cancel(e)},state:i,steps:o}}var{schedule:k,cancel:Ne,state:Pe,steps:Fe}=Me(typeof requestAnimationFrame<`u`?requestAnimationFrame:E,!0),Ie;function Le(){Ie=void 0}var Re={now:()=>(Ie===void 0&&Re.set(Pe.isProcessing||w.useManualTiming?Pe.timestamp:performance.now()),Ie),set:e=>{Ie=e,queueMicrotask(Le)}},ze=e=>t=>typeof t==`string`&&t.startsWith(e),Be=ze(`--`),Ve=ze(`var(--`),He=e=>Ve(e)?Ue.test(e.split(`/*`)[0].trim()):!1,Ue=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function We(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Ge={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Ke={...Ge,transform:e=>C(0,1,e)},qe={...Ge,default:1},Je=e=>Math.round(e*1e5)/1e5,Ye=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Xe(e){return e==null}var Ze=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Qe=(e,t)=>n=>!!(typeof n==`string`&&Ze.test(n)&&n.startsWith(e)||t&&!Xe(n)&&Object.prototype.hasOwnProperty.call(n,t)),$e=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Ye);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},et=e=>C(0,255,e),tt={...Ge,transform:e=>Math.round(et(e))},nt={test:Qe(`rgb`,`red`),parse:$e(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+tt.transform(e)+`, `+tt.transform(t)+`, `+tt.transform(n)+`, `+Je(Ke.transform(r))+`)`};function rt(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var it={test:Qe(`#`),parse:rt,transform:nt.transform},at=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ot=at(`deg`),st=at(`%`),A=at(`px`),ct=at(`vh`),lt=at(`vw`),ut={...st,parse:e=>st.parse(e)/100,transform:e=>st.transform(e*100)},dt={test:Qe(`hsl`,`hue`),parse:$e(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+st.transform(Je(t))+`, `+st.transform(Je(n))+`, `+Je(Ke.transform(r))+`)`},ft={test:e=>nt.test(e)||it.test(e)||dt.test(e),parse:e=>nt.test(e)?nt.parse(e):dt.test(e)?dt.parse(e):it.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?nt.transform(e):dt.transform(e),getAnimatableNone:e=>{let t=ft.parse(e);return t.alpha=0,ft.transform(t)}},pt=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mt(e){return isNaN(e)&&typeof e==`string`&&(e.match(Ye)?.length||0)+(e.match(pt)?.length||0)>0}var ht=`number`,gt=`color`,_t=`var`,vt=`var(`,yt="${}",bt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xt(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(bt,e=>(ft.test(e)?(r.color.push(a),i.push(gt),n.push(ft.parse(e))):e.startsWith(vt)?(r.var.push(a),i.push(_t),n.push(e)):(r.number.push(a),i.push(ht),n.push(parseFloat(e))),++a,yt)).split(yt),indexes:r,types:i}}function St(e){return xt(e).values}function Ct({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===ht?Je(r[a]):e===gt?ft.transform(r[a]):r[a]}return i}}function j(e){return Ct(xt(e))}var wt=e=>typeof e==`number`?0:ft.test(e)?ft.getAnimatableNone(e):e,Tt=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:wt(e);function Et(e){let t=xt(e);return Ct(t)(t.values.map((e,n)=>Tt(e,t.split[n])))}var Dt={test:mt,parse:St,createTransformer:j,getAnimatableNone:Et};function Ot(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function kt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Ot(s,r,e+1/3),a=Ot(s,r,e),o=Ot(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function At(e,t){return n=>n>0?t:e}var M=(e,t,n)=>e+(t-e)*n,jt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Mt=[it,nt,dt],Nt=e=>Mt.find(t=>t.test(e));function Pt(e){let t=Nt(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===dt&&(n=kt(n)),n}var Ft=(e,t)=>{let n=Pt(e),r=Pt(t);if(!n||!r)return At(e,t);let i={...n};return e=>(i.red=jt(n.red,r.red,e),i.green=jt(n.green,r.green,e),i.blue=jt(n.blue,r.blue,e),i.alpha=M(n.alpha,r.alpha,e),nt.transform(i))},It=new Set([`none`,`hidden`]);function Lt(e,t){return It.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Rt(e,t){return n=>M(e,t,n)}function zt(e){return typeof e==`number`?Rt:typeof e==`string`?He(e)?At:ft.test(e)?Ft:Ut:Array.isArray(e)?Bt:typeof e==`object`?ft.test(e)?Ft:Vt:At}function Bt(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>zt(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Vt(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=zt(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Ht(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Ut=(e,t)=>{let n=Dt.createTransformer(t),r=xt(e),i=xt(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?It.has(e)&&!i.values.length||It.has(t)&&!r.values.length?Lt(e,t):re(Bt(Ht(r,i),i.values),n):(`${e}${t}`,At(e,t))};function Wt(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?M(e,t,n):zt(e)(e,t)}var Gt=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>k.update(t,e),stop:()=>Ne(t),now:()=>Pe.isProcessing?Pe.timestamp:Re.now()}},Kt=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},qt=2e4;function N(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Jt(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(N(r),qt);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:D(i)}}var P={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Yt(e,t){return e*Math.sqrt(1-t*t)}var Xt=12;function Zt(e,t,n){let r=n;for(let n=1;n<Xt;n++)r-=e(r)/t(r);return r}var Qt=.001;function $t({duration:e=P.duration,bounce:t=P.bounce,velocity:n=P.velocity,mass:r=P.mass}){let i,a;P.maxDuration;let o=1-t;o=C(P.minDamping,P.maxDamping,o),e=C(P.minDuration,P.maxDuration,D(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Yt(t,o),c=Math.exp(-i);return Qt-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Yt(t**2,o);return(-i(t)+Qt>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Zt(i,a,s);if(e=oe(e),isNaN(c))return{stiffness:P.stiffness,damping:P.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var en=[`duration`,`bounce`],tn=[`stiffness`,`damping`,`mass`];function nn(e,t){return t.some(t=>e[t]!==void 0)}function rn(e){let t={velocity:P.velocity,stiffness:P.stiffness,damping:P.damping,mass:P.mass,isResolvedFromDuration:!1,...e};if(!nn(e,tn)&&nn(e,en)){if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*C(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:P.mass,stiffness:i,damping:a}}else{let n=$t({...e,velocity:0});t={...t,...n,mass:P.mass},t.isResolvedFromDuration=!0}}return t}function an(e=P.visualDuration,t=P.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=rn({...n,velocity:-D(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=D(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?P.restSpeed.granular:P.restSpeed.default,i||=v?P.restDelta.granular:P.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Yt(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>oe(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=oe(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=oe(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(N(T),qt),t=Kt(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}an.applyToOptions=e=>{let t=Jt(e,100,an);return e.ease=t.ease,e.duration=oe(t.duration),e.type=`keyframes`,e};var on=5;function sn(e,t,n){let r=Math.max(t-on,0);return se(n-e(r),t-r)}function cn({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=an({keyframes:[f.value,m(f.value)],velocity:sn(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function ln(e,t,n){let r=[],i=n||w.mix||Wt,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=re(Array.isArray(t)?t[n]||E:t,a)),r.push(a)}return r}function un(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=ln(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=ie(e[r],e[r+1],n);return s[r](i)};return n?t=>l(C(e[0],e[a-1],t)):l}function dn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=ie(0,t,r);e.push(M(n,1,i))}}function fn(e){let t=[0];return dn(t,e.length-1),t}function pn(e,t){return e.map(e=>e*t)}function mn(e,t){return e.map(()=>t||Ce).splice(0,e.length-1)}function hn({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=we(r)?r.map(Oe):Oe(r),a={done:!1,value:t[0]},o=un(pn(n&&n.length===t.length?n:fn(t),e),t,{ease:Array.isArray(i)?i:mn(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var gn=e=>e!==null;function _n(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(gn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var vn={decay:cn,inertia:cn,tween:hn,keyframes:hn,spring:an};function yn(e){typeof e.type==`string`&&(e.type=vn[e.type])}var bn=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},xn=e=>e/100,Sn=class extends bn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Re.now()&&this.tick(Re.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;yn(e);let{type:t=hn,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||hn;s!==hn&&typeof o[0]!=`number`&&(this.mixKeyframes=re(xn,Wt(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=N(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=C(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==cn&&(b.value=_n(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return D(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+D(e)}get time(){return D(this.currentTime)}set time(e){e=oe(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return sn(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Re.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=D(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Gt,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Re.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Cn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var wn=e=>e*180/Math.PI,Tn=e=>Dn(wn(Math.atan2(e[1],e[0]))),En={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Tn,rotateZ:Tn,skewX:e=>wn(Math.atan(e[1])),skewY:e=>wn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Dn=e=>(e%=360,e<0&&(e+=360),e),On=Tn,kn=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),An=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),jn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:kn,scaleY:An,scale:e=>(kn(e)+An(e))/2,rotateX:e=>Dn(wn(Math.atan2(e[6],e[5]))),rotateY:e=>Dn(wn(Math.atan2(-e[2],e[0]))),rotateZ:On,rotate:On,skewX:e=>wn(Math.atan(e[4])),skewY:e=>wn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Mn(e){return+!!e.includes(`scale`)}function Nn(e,t){if(!e||e===`none`)return Mn(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=jn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=En,i=t}if(!i)return Mn(t);let a=r[t],o=i[1].split(`,`).map(Fn);return typeof a==`function`?a(o):o[a]}var Pn=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Nn(n,t)};function Fn(e){return parseFloat(e.trim())}var In=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Ln=new Set([...In,`pathRotation`]),Rn=e=>e===Ge||e===A,zn=new Set([`x`,`y`,`z`]),Bn=In.filter(e=>!zn.has(e));function Vn(e){let t=[];return Bn.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Hn={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Nn(t,`x`),y:(e,{transform:t})=>Nn(t,`y`)};Hn.translateX=Hn.x,Hn.translateY=Hn.y;var Un=new Set,Wn=!1,Gn=!1,Kn=!1;function qn(){if(Gn){let e=Array.from(Un).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Vn(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Gn=!1,Wn=!1,Un.forEach(e=>e.complete(Kn)),Un.clear()}function Jn(){Un.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Gn=!0)})}function Yn(){Kn=!0,Jn(),qn(),Kn=!1}var Xn=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Un.add(this),Wn||(Wn=!0,k.read(Jn),k.resolveKeyframes(qn))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Cn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Un.delete(this)}cancel(){this.state===`scheduled`&&(Un.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Zn=e=>e.startsWith(`--`);function Qn(e,t,n){Zn(t)?e.style.setProperty(t,n):e.style[t]=n}var $n={};function er(e,t){let n=ne(e);return()=>$n[t]??n()}var tr=er(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),nr=er(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),rr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ir={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:rr([0,.65,.55,1]),circOut:rr([.55,0,1,.45]),backIn:rr([.31,.01,.66,-.59]),backOut:rr([.33,1.53,.69,.99])};function ar(e,t){if(e)return typeof e==`function`?nr()?Kt(e,t):`ease-out`:Te(e)?rr(e):Array.isArray(e)?e.map(e=>ar(e,t)||ir.easeOut):ir[e]}function or(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=ar(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function sr(e){return typeof e==`function`&&`applyToOptions`in e}function cr({type:e,...t}){return sr(e)&&nr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var lr=class extends bn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=cr(e);this.animation=or(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=_n(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Qn(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return D(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+D(e)}get time(){return D(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=oe(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&tr()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),E):r(this)}},ur={anticipate:_e,backInOut:ge,circInOut:be};function dr(e){return e in ur}function fr(e){typeof e.ease==`string`&&dr(e.ease)&&(e.ease=ur[e.ease])}var pr=10,mr=class extends lr{constructor(e){fr(e),yn(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Sn({...a,autoplay:!1}),s=Math.max(pr,Re.now()-this.startTime),c=C(0,pr,s-pr),l=o.sample(s).value,{name:u}=this.options;i&&u&&Qn(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},hr=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Dt.test(e)||e===`0`)&&!e.startsWith(`url(`));function gr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function _r(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=hr(i,t),s=hr(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:gr(e)||(n===`spring`||sr(n))&&r}function vr(e){e.duration=0,e.type=`keyframes`}var yr=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),br=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function xr(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&br.test(e[t]))return!0;return!1}var Sr=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Cr=ne(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function wr(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Cr()&&n&&(yr.has(n)||Sr.has(n)&&xr(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Tr=40,Er=class extends bn{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Re.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Xn;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Re.now();let u=!0;_r(e,i,a,o)||(u=!1,(w.instantAnimations||!s)&&l?.(_n(e,n,t)),e[0]=e[e.length-1],vr(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Tr?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&wr(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new mr({...d,element:p})}catch{m=new Sn(d)}else m=new Sn(d);m.finished.then(()=>{this.notifyFinished()}).catch(E),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Yn()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Dr(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Or=30,kr=e=>!isNaN(parseFloat(e)),Ar={current:void 0},jr=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Re.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Re.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=kr(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new ae);let n=this.events[e].add(t);return e===`change`?()=>{n(),k.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ar.current&&Ar.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Re.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Or)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Or);return se(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Mr(e,t){return new jr(e,t)}function Nr(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Pr(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Nr(n,e)}var Fr={type:`spring`,stiffness:500,damping:25,restSpeed:10},Ir=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Lr={type:`keyframes`,duration:.8},Rr={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},zr=(e,{keyframes:t})=>t.length>2?Lr:Ln.has(e)?e.startsWith(`scale`)?Ir(t[1]):Fr:Rr,Br=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Vr(e){for(let t in e)if(!Br.has(t))return!0;return!1}var Hr=(e,t,n,r={},i,a)=>o=>{let s=Pr(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=oe(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Vr(s)||Object.assign(u,zr(e,u)),u.duration&&=oe(u.duration),u.repeatDelay&&=oe(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(vr(u),u.delay===0&&(d=!0)),(w.instantAnimations||w.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,vr(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=_n(u.keyframes,s);if(e!==void 0){k.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Sn(u):new Er(u)},Ur=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Wr(e){let t=Ur.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Gr(e,t,n=1){`${e}`;let[r,i]=Wr(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return T(e)?parseFloat(e):e}return He(i)?Gr(i,t,n+1):i}function Kr(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function qr(e,t,n,r){if(typeof t==`function`){let[i,a]=Kr(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Kr(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Jr(e,t,n){let r=e.getProps();return qr(r,t,n===void 0?r.custom:n,e)}var Yr=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...In]),Xr=e=>Array.isArray(e);function Zr(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Mr(n))}function Qr(e){return Xr(e)?e[e.length-1]||0:e}function $r(e,t){let{transitionEnd:n={},transition:r={},...i}=Jr(e,t)||{};i={...i,...n};for(let t in i)Zr(e,t,Qr(i[t]))}var ei=e=>!!(e&&e.getVelocity);function ti(e){return!!(ei(e)&&e.add)}function ni(e,t){let n=e.getValue(`willChange`);if(ti(n))return n.add(t);if(!n&&w.WillChange){let n=new w.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function ri(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var ii=`framerAppearId`,ai=`data-`+ri(ii);function oi(e){return e.props[ai]}function si({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ci(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Nr(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&si(f,t))continue;let o={delay:n,...Pr(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){k.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=oi(e);if(n){let e=window.MotionHandoffAnimation(n,t,k);e!==null&&(o.startTime=e,p=!0)}}ni(e,t);let m=l??e.shouldReduceMotion;r.start(Hr(t,r,i,m&&Yr.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>k.update(()=>{o&&$r(e,o)});d.length?Promise.all(d).then(t):t()}return d}function li(e,t,n={}){let r=Jr(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(ci(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return ui(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function ui(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(li(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Dr(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function di(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>li(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=li(e,t,n);else{let i=typeof t==`function`?Jr(e,t,n.custom):t;r=Promise.all(ci(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var fi={test:e=>e===`auto`,parse:e=>e},F=e=>t=>t.test(e),pi=[Ge,A,st,ot,lt,ct,fi],mi=e=>pi.find(F(e));function hi(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||te(e)}var gi=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function _i(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Ye)||[];if(!r)return e;let i=n.replace(r,``),a=+!!gi.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var vi=/\b([a-z-]*)\(.*?\)/gu,yi={...Dt,getAnimatableNone:e=>{let t=e.match(vi);return t?t.map(_i).join(` `):e}},bi={...Dt,getAnimatableNone:e=>{let t=Dt.parse(e);return Dt.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},xi={...Ge,transform:Math.round},Si={borderWidth:A,borderTopWidth:A,borderRightWidth:A,borderBottomWidth:A,borderLeftWidth:A,borderRadius:A,borderTopLeftRadius:A,borderTopRightRadius:A,borderBottomRightRadius:A,borderBottomLeftRadius:A,width:A,maxWidth:A,height:A,maxHeight:A,top:A,right:A,bottom:A,left:A,inset:A,insetBlock:A,insetBlockStart:A,insetBlockEnd:A,insetInline:A,insetInlineStart:A,insetInlineEnd:A,padding:A,paddingTop:A,paddingRight:A,paddingBottom:A,paddingLeft:A,paddingBlock:A,paddingBlockStart:A,paddingBlockEnd:A,paddingInline:A,paddingInlineStart:A,paddingInlineEnd:A,margin:A,marginTop:A,marginRight:A,marginBottom:A,marginLeft:A,marginBlock:A,marginBlockStart:A,marginBlockEnd:A,marginInline:A,marginInlineStart:A,marginInlineEnd:A,fontSize:A,backgroundPositionX:A,backgroundPositionY:A,rotate:ot,pathRotation:ot,rotateX:ot,rotateY:ot,rotateZ:ot,scale:qe,scaleX:qe,scaleY:qe,scaleZ:qe,skew:ot,skewX:ot,skewY:ot,distance:A,translateX:A,translateY:A,translateZ:A,x:A,y:A,z:A,perspective:A,transformPerspective:A,opacity:Ke,originX:ut,originY:ut,originZ:A,zIndex:xi,fillOpacity:Ke,strokeOpacity:Ke,numOctaves:xi},Ci={...Si,color:ft,backgroundColor:ft,outlineColor:ft,fill:ft,stroke:ft,borderColor:ft,borderTopColor:ft,borderRightColor:ft,borderBottomColor:ft,borderLeftColor:ft,filter:yi,WebkitFilter:yi,mask:bi,WebkitMask:bi},wi=e=>Ci[e],Ti=new Set([yi,bi]);function Ei(e,t){let n=wi(e);return Ti.has(n)||(n=Dt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Di=new Set([`auto`,`none`,`0`]);function Oi(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Di.has(t)&&xt(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Ei(n,i)}var ki=class extends Xn{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),He(r))){let i=Gr(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Yr.has(n)||e.length!==2)return;let[r,i]=e,a=mi(r),o=mi(i);if(We(r)!==We(i)&&Hn[n]){this.needsMeasurement=!0;return}if(a!==o){if(Rn(a)&&Rn(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Hn[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||hi(e[t]))&&n.push(t);n.length&&Oi(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Hn[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Hn[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Ai=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function ji(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Mi=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Ni(e){return ee(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Pi,cancel:Fi}=Me(queueMicrotask,!1),Ii={x:!1,y:!1};function Li(){return Ii.x||Ii.y}function Ri(e){return e===`x`||e===`y`?Ii[e]?null:(Ii[e]=!0,()=>{Ii[e]=!1}):Ii.x||Ii.y?null:(Ii.x=Ii.y=!0,()=>{Ii.x=Ii.y=!1})}function zi(e,t){let n=ji(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Bi(e){return!(e.pointerType===`touch`||Li())}function Vi(e,t,n={}){let[r,i,a]=zi(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Bi(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Hi=(e,t)=>t?e===t||Hi(e,t.parentElement):!1,Ui=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Wi=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Gi(e){return Wi.has(e.tagName)||e.isContentEditable===!0}var Ki=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function qi(e){return Ki.has(e.tagName)||e.isContentEditable===!0}var Ji=new WeakSet;function Yi(e){return t=>{t.key===`Enter`&&e(t)}}function Xi(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Zi=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Yi(()=>{if(Ji.has(n))return;Xi(n,`down`);let e=Yi(()=>{Xi(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Xi(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function I(e){return Ui(e)&&!Li()}var L=new WeakSet;function Qi(e,t,n={}){let[r,i,a]=zi(e,n),o=e=>{let r=e.currentTarget;if(!I(e)||L.has(e))return;Ji.add(r),n.stopPropagation&&L.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),Ji.has(r)&&Ji.delete(r),I(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||Hi(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Ni(e)&&(e.addEventListener(`focus`,e=>Zi(e,i)),!Gi(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function $i(e){return ee(e)&&`ownerSVGElement`in e}var ea=new WeakMap,ta,na=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:$i(r)&&`getBBox`in r?r.getBBox()[t]:r[n],ra=na(`inline`,`width`,`offsetWidth`),ia=na(`block`,`height`,`offsetHeight`);function aa({target:e,borderBoxSize:t}){ea.get(e)?.forEach(n=>{n(e,{get width(){return ra(e,t)},get height(){return ia(e,t)}})})}function oa(e){e.forEach(aa)}function sa(){typeof ResizeObserver<`u`&&(ta=new ResizeObserver(oa))}function ca(e,t){ta||sa();let n=ji(e);return n.forEach(e=>{let n=ea.get(e);n||(n=new Set,ea.set(e,n)),n.add(t),ta?.observe(e)}),()=>{n.forEach(e=>{let n=ea.get(e);n?.delete(t),n?.size||ta?.unobserve(e)})}}var la=new Set,ua;function da(){ua=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};la.forEach(t=>t(e))},window.addEventListener(`resize`,ua)}function fa(e){return la.add(e),ua||da(),()=>{la.delete(e),!la.size&&typeof ua==`function`&&(window.removeEventListener(`resize`,ua),ua=void 0)}}function pa(e,t){return typeof e==`function`?fa(e):ca(e,t)}var ma={value:null,addProjectionMetrics:null};function ha(e){return $i(e)&&e.tagName===`svg`}var ga=[...pi,ft,Dt],_a=e=>ga.find(F(e)),va=()=>({translate:0,scale:1,origin:0,originPoint:0}),ya=()=>({x:va(),y:va()}),ba=()=>({min:0,max:0}),R=()=>({x:ba(),y:ba()}),xa=new WeakMap;function Sa(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ca(e){return typeof e==`string`||Array.isArray(e)}var wa=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Ta=[`initial`,...wa];function Ea(e){return Sa(e.animate)||Ta.some(t=>Ca(e[t]))}function Da(e){return!!(Ea(e)||e.variants)}function Oa(e,t,n){for(let r in t){let i=t[r],a=n[r];if(ei(i))e.addValue(r,i);else if(ei(a))e.addValue(r,Mr(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Mr(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var z={current:null},ka={current:!1},Aa=typeof window<`u`;function ja(){if(ka.current=!0,Aa){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>z.current=e.matches;e.addEventListener(`change`,t),t()}else z.current=!1}}var Ma=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Na={};function Pa(e){Na=e}function Fa(){return Na}var Ia=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Xn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Re.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,k.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ea(t),this.isVariantNode=Da(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&ei(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,xa.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(ka.current||ja(),this.shouldReduceMotion=z.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Ne(this.notifyUpdate),Ne(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&yr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new lr({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:oe(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Ln.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&k.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Na){let t=Na[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):R()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Ma.length;t++){let n=Ma[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Oa(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Mr(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(T(n)||te(n))?n=parseFloat(n):!_a(n)&&Dt.test(t)&&(n=Ei(e,t)),this.setBaseTarget(e,ei(n)?n.get():n)),ei(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=qr(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!ei(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ae),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Pi.render(this.render)}},La=class extends Ia{constructor(){super(...arguments),this.KeyframeResolver=ki}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;ei(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Ra=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function za({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Ba({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Va(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ha(e){return e===void 0||e===1}function Ua({scale:e,scaleX:t,scaleY:n}){return!Ha(e)||!Ha(t)||!Ha(n)}function Wa(e){return Ua(e)||Ga(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ga(e){return Ka(e.x)||Ka(e.y)}function Ka(e){return e&&e!==`0%`}function qa(e,t,n){return n+t*(e-n)}function Ja(e,t,n,r,i){return i!==void 0&&(e=qa(e,i,r)),qa(e,n,r)+t}function Ya(e,t=0,n=1,r,i){e.min=Ja(e.min,t,n,r,i),e.max=Ja(e.max,t,n,r,i)}function Xa(e,{x:t,y:n}){Ya(e.x,t.translate,t.scale,t.originPoint),Ya(e.y,n.translate,n.scale,n.originPoint)}var Za=.999999999999,Qa=1.0000000000001;function $a(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(eo(e.x,-a.scroll.offset.x),eo(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Xa(e,o)),r&&Wa(a.latestValues)&&ro(e,a.latestValues,a.layout?.layoutBox))}t.x<Qa&&t.x>Za&&(t.x=1),t.y<Qa&&t.y>Za&&(t.y=1)}function eo(e,t){e.min+=t,e.max+=t}function to(e,t,n,r,i=.5){Ya(e,t,n,M(e.min,e.max,i),r)}function no(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function ro(e,t,n){let r=n??e;to(e.x,no(t.x,r.x),t.scaleX,t.scale,t.originX),to(e.y,no(t.y,r.y),t.scaleY,t.scale,t.originY)}function io(e,t){return za(Va(e.getBoundingClientRect(),t))}function ao(e,t,n){let r=io(e,n),{scroll:i}=t;return i&&(eo(r.x,i.offset.x),eo(r.y,i.offset.y)),r}var oo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},so=In.length;function co(e,t,n){let r=``,i=!0;for(let a=0;a<so;a++){let o=In[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Mi(s,Si[o]);if(!c){i=!1;let t=oo[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${Mi(a,Si.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function lo(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Ln.has(e)){o=!0;continue}if(Be(e)){i[e]=n;continue}{let t=Mi(n,Si[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=co(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function uo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function fo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var po={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(A.test(e))e=parseFloat(e);else return e}return`${fo(e,t.target.x)}% ${fo(e,t.target.y)}%`}},mo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Dt.parse(e);if(i.length>5)return r;let a=Dt.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=M(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},ho={borderRadius:{...po,applyTo:[...Ai]},borderTopLeftRadius:po,borderTopRightRadius:po,borderBottomLeftRadius:po,borderBottomRightRadius:po,boxShadow:mo};function go(e,{layout:t,layoutId:n}){return Ln.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!ho[e]||e===`opacity`)}function _o(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(ei(r[t])||i&&ei(i[t])||go(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function vo(e){return window.getComputedStyle(e)}var yo=class extends La{constructor(){super(...arguments),this.type=`html`,this.renderInstance=uo}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(Ln.has(t))return this.projection?.isProjecting?Mn(t):Pn(e,t);{let n=vo(e),r=(Be(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return io(e,t)}build(e,t,n){lo(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return _o(e,t,n)}},bo={offset:`stroke-dashoffset`,array:`stroke-dasharray`},xo={offset:`strokeDashoffset`,array:`strokeDasharray`};function So(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?bo:xo;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Co=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function wo(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(lo(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Co)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&So(d,i,a,o,!1)}var To=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Eo=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Do(e,t,n,r){uo(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(To.has(n)?n:ri(n),t.attrs[n])}function Oo(e,t,n){let r=_o(e,t,n);for(let n in e)if(ei(e[n])||ei(t[n])){let t=In.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var ko=class extends La{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=R}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ln.has(t)){let e=wi(t);return e&&e.default||0}return t=To.has(t)?t:ri(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Oo(e,t,n)}build(e,t,n){wo(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Do(e,t,n,r)}mount(e){this.isSVGTag=Eo(e.tagName),super.mount(e)}},Ao=Ta.length;function jo(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&jo(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Ao;n++){let r=Ta[n],i=e.props[r];(Ca(i)||i===!1)&&(t[r]=i)}return t}function B(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Mo=[...wa].reverse(),No=wa.length;function Po(e){return t=>Promise.all(t.map(({animation:t,options:n})=>di(e,t,n)))}function Fo(e){let t=Po(e),n=V(),r=!0,i=!1,a=t=>(n,r)=>{let i=Jr(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=jo(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<No;t++){let p=Mo[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Ca(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Sa(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Io(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},ee=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Xr(t)&&Xr(n)?!B(t,n)||y:t!==n,r?t==null?u.add(e):ee(e):t!==void 0&&u.has(e)?ee(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let te=v&&y;b&&(!te||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!te&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Jr(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Dr(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Jr(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=V(),i=!0}}}function Io(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!B(t,e):!1}function Lo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function V(){return{animate:Lo(!0),whileInView:Lo(),whileHover:Lo(),whileTap:Lo(),whileDrag:Lo(),whileFocus:Lo(),exit:Lo()}}function H(e,t){e.min=t.min,e.max=t.max}function U(e,t){H(e.x,t.x),H(e.y,t.y)}function Ro(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var zo=.9999,Bo=1.0001,Vo=-.01,Ho=.01;function Uo(e){return e.max-e.min}function Wo(e,t,n){return Math.abs(e-t)<=n}function Go(e,t,n,r=.5){e.origin=r,e.originPoint=M(t.min,t.max,e.origin),e.scale=Uo(n)/Uo(t),e.translate=M(n.min,n.max,e.origin)-e.originPoint,(e.scale>=zo&&e.scale<=Bo||isNaN(e.scale))&&(e.scale=1),(e.translate>=Vo&&e.translate<=Ho||isNaN(e.translate))&&(e.translate=0)}function Ko(e,t,n,r){Go(e.x,t.x,n.x,r?r.originX:void 0),Go(e.y,t.y,n.y,r?r.originY:void 0)}function qo(e,t,n,r=0){e.min=(r?M(n.min,n.max,r):n.min)+t.min,e.max=e.min+Uo(t)}function Jo(e,t,n,r){qo(e.x,t.x,n.x,r?.x),qo(e.y,t.y,n.y,r?.y)}function Yo(e,t,n,r=0){let i=r?M(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Uo(t)}function Xo(e,t,n,r){Yo(e.x,t.x,n.x,r?.x),Yo(e.y,t.y,n.y,r?.y)}function Zo(e,t,n,r,i){return e-=t,e=qa(e,1/n,r),i!==void 0&&(e=qa(e,1/i,r)),e}function Qo(e,t=0,n=1,r=.5,i,a=e,o=e){if(st.test(t)&&(t=parseFloat(t),t=M(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=M(a.min,a.max,r);e===a&&(s-=t),e.min=Zo(e.min,t,n,s,i),e.max=Zo(e.max,t,n,s,i)}function $o(e,t,[n,r,i],a,o){Qo(e,t[n],t[r],t[i],t.scale,a,o)}var es=[`x`,`scaleX`,`originX`],ts=[`y`,`scaleY`,`originY`];function ns(e,t,n,r){$o(e.x,t,es,n?n.x:void 0,r?r.x:void 0),$o(e.y,t,ts,n?n.y:void 0,r?r.y:void 0)}function rs(e){return e.translate===0&&e.scale===1}function is(e){return rs(e.x)&&rs(e.y)}function as(e,t){return e.min===t.min&&e.max===t.max}function os(e,t){return as(e.x,t.x)&&as(e.y,t.y)}function ss(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function cs(e,t){return ss(e.x,t.x)&&ss(e.y,t.y)}function ls(e){return Uo(e.x)/Uo(e.y)}function us(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function ds(e){return[e(`x`),e(`y`)]}function fs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var ps=Ai.length,ms=e=>typeof e==`string`?parseFloat(e):e,hs=e=>typeof e==`number`||A.test(e);function gs(e,t,n,r,i,a){i?(e.opacity=M(0,n.opacity??1,vs(r)),e.opacityExit=M(t.opacity??1,0,ys(r))):a&&(e.opacity=M(t.opacity??1,n.opacity??1,r));for(let i=0;i<ps;i++){let a=Ai[i],o=_s(t,a),s=_s(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||hs(o)===hs(s)?(e[a]=Math.max(M(ms(o),ms(s),r),0),(st.test(s)||st.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=M(t.rotate||0,n.rotate||0,r))}function _s(e,t){return e[t]===void 0?e.borderRadius:e[t]}var vs=bs(0,.5,ye),ys=bs(.5,.95,E);function bs(e,t,n){return r=>r<e?0:r>t?1:n(ie(e,t,r))}function xs(e,t,n){let r=ei(e)?e:Mr(e);return r.start(Hr(``,r,t,n)),r.animation}function Ss(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var Cs=(e,t)=>e.depth-t.depth,ws=class{constructor(){this.children=[],this.isDirty=!1}add(e){x(this.children,e),this.isDirty=!0}remove(e){S(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Cs),this.isDirty=!1,this.children.forEach(e)}};function Ts(e,t){let n=Re.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Ne(r),e(a-t))};return k.setup(r,!0),()=>Ne(r)}function Es(e){return ei(e)?e.get():e}var Ds=class{constructor(){this.members=[]}add(e){x(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(S(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(S(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Os={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ks={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},As=[``,`X`,`Y`,`Z`],js=1e3,Ms=0;function Ns(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Ps(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=oi(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,k,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Ps(r)}function Fs({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Ms++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ma.value&&(ks.nodes=ks.calculatedTargetDeltas=ks.calculatedProjections=0),this.nodes.forEach(Rs),this.nodes.forEach(qs),this.nodes.forEach(Js),this.nodes.forEach(zs),ma.addProjectionMetrics&&ma.addProjectionMetrics(ks)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new ws)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ae),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=$i(t)&&!ha(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;k.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Ts(i,250),Os.hasAnimatedSinceResize&&(Os.hasAnimatedSinceResize=!1,this.nodes.forEach(Ks)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||tc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!cs(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Pr(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||Ks(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ne(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Ys),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ps(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Hs),this.nodes.forEach(Vs);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Us);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Ws),this.nodes.forEach(Gs),this.nodes.forEach(Is),this.nodes.forEach(Ls)):this.nodes.forEach(Us),this.clearAllSnapshots();let e=Re.now();Pe.delta=C(0,1e3/60,e-Pe.timestamp),Pe.timestamp=e,Pe.isProcessing=!0,Fe.update.process(Pe),Fe.preRender.process(Pe),Fe.render.process(Pe),Pe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Bs),this.sharedNodes.forEach(Xs)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,k.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){k.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),this.snapshot&&!Uo(this.snapshot.measuredBox.x)&&!Uo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=R(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!is(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Wa(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),ac(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return R();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(sc))){let{scroll:e}=this.root;e&&(eo(t.x,e.offset.x),eo(t.y,e.offset.y))}return t}removeElementScroll(e){let t=R();if(U(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&U(t,e),eo(t.x,i.offset.x),eo(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||R();U(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(eo(r.x,-n.scroll.offset.x),eo(r.y,-n.scroll.offset.y)),Wa(n.latestValues)&&ro(r,n.latestValues,n.layout?.layoutBox)}return Wa(this.latestValues)&&ro(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=R();U(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Wa(n.latestValues))continue;let r;n.instance&&(Ua(n.latestValues)&&n.updateSnapshot(),r=R(),U(r,n.measurePageBox())),ns(t,n.latestValues,n.snapshot?.layoutBox,r)}return Wa(this.latestValues)&&ns(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Pe.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),(this.relativeTarget||this.targetDelta)&&(this.target||(this.target=R(),this.targetWithTransforms=R()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Jo(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):U(this.target,this.layout.layoutBox),Xa(this.target,this.targetDelta)):U(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),ma.value&&ks.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Ua(this.parent.latestValues)||Ga(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=R(),this.relativeTargetOrigin=R(),Xo(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),U(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Pe.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;U(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;$a(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=R());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ro(this.prevProjectionDelta.x,this.projectionDelta.x),Ro(this.prevProjectionDelta.y,this.projectionDelta.y)),Ko(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!us(this.projectionDelta.x,this.prevProjectionDelta.x)||!us(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),ma.value&&ks.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ya(),this.projectionDelta=ya(),this.projectionDeltaWithTransform=ya()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=ya();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=R(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!(!c||u||this.options.crossfade!==!0||this.path.some(ec));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=M(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=M(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(Zs(o.x,e.x,n),Zs(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Xo(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),$s(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&os(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=R(),U(f,this.relativeTarget)),c&&(this.animationValues=a,gs(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Ne(this.pendingAnimation),void 0),this.pendingAnimation=k.update(()=>{Os.hasAnimatedSinceResize=!0,this.motionValue||=Mr(0),this.motionValue.jump(0,!1),this.currentAnimation=xs(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(js),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&oc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||R();let t=Uo(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Uo(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}U(t,n),ro(t,i),Ko(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Ds),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Ns(`z`,e,r,this.animationValues);for(let t=0;t<As.length;t++)Ns(`rotate${As[t]}`,e,r,this.animationValues),Ns(`skew${As[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Es(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Es(t?.pointerEvents)||``),this.hasProjected&&!Wa(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=fs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in ho){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=ho[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Es(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Vs),this.root.sharedNodes.clear()}}}function Is(e){e.updateLayout()}function Ls(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)ds(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Uo(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;H(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else oc(i,t.layoutBox,n)&&ds(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Uo(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=ya();Ko(o,n,t.layoutBox);let s=ya();a?Ko(s,e.applyTransform(r,!0),t.measuredBox):Ko(s,n,t.layoutBox);let c=!is(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=R();Xo(s,t.layoutBox,i.layoutBox,o);let c=R();Xo(c,n,a.layoutBox,o),cs(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Rs(e){ma.value&&ks.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function zs(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Bs(e){e.clearSnapshot()}function Vs(e){e.clearMeasurements()}function Hs(e){e.isLayoutDirty=!0,e.updateLayout()}function Us(e){e.isLayoutDirty=!1}function Ws(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Gs(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Ks(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function qs(e){e.resolveTargetDelta()}function Js(e){e.calcProjection()}function Ys(e){e.resetSkewAndRotation()}function Xs(e){e.removeLeadSnapshot()}function Zs(e,t,n){e.translate=M(t.translate,0,n),e.scale=M(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Qs(e,t,n,r){e.min=M(t.min,n.min,r),e.max=M(t.max,n.max,r)}function $s(e,t,n,r){Qs(e.x,t.x,n.x,r),Qs(e.y,t.y,n.y,r)}function ec(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var tc={duration:.45,ease:[.4,0,.1,1]},nc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),rc=nc(`applewebkit/`)&&!nc(`chrome/`)?Math.round:E;function ic(e){e.min=rc(e.min),e.max=rc(e.max)}function ac(e){ic(e.x),ic(e.y)}function oc(e,t,n){return e===`position`||e===`preserve-aspect`&&!Wo(ls(t),ls(n),.2)}function sc(e){return e!==e.root&&e.scroll?.wasRoot}var cc=Fs({attachResizeListener:(e,t)=>Ss(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),lc={current:void 0},uc=Fs({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!lc.current){let e=new cc({});e.mount(window),e.setOptions({layoutScroll:!0}),lc.current=e}return lc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),dc=(0,g.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function fc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function pc(...e){return t=>{let n=!1,r=e.map(e=>{let r=fc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():fc(e[t],null)}}}}function mc(...e){return g.useCallback(pc(...e),e)}var hc=class extends g.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Ni(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Ni(e)&&e.offsetWidth||0,r=Ni(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function gc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,g.useId)(),s=(0,g.useRef)(null),c=(0,g.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,g.useContext)(dc),u=mc(s,a===!1?void 0:e.props?.ref??e?.ref);return(0,g.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,h.jsx)(hc,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:g.cloneElement(e,{ref:u})})}var _c=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=v(vc),d=(0,g.useId)(),f=(0,g.useRef)(n),p=(0,g.useRef)(r);y(()=>{f.current=n,p.current=r});let m=!0,_=(0,g.useMemo)(()=>(m=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>{u.delete(e),!f.current&&!u.size&&p.current?.()})}),[n,u,r]);return a&&m&&(_={..._}),(0,g.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),g.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,h.jsx)(gc,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,h.jsx)(b.Provider,{value:_,children:e})};function vc(){return new Map}function yc(e=!0){let t=(0,g.useContext)(b);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,g.useId)();(0,g.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,g.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var W=e=>e.key||``;function bc(e){let t=[];return g.Children.forEach(e,e=>{(0,g.isValidElement)(e)&&t.push(e)}),t}var xc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=yc(o),f=(0,g.useMemo)(()=>bc(e),[e]),p=o&&!u?[]:f.map(W),m=(0,g.useRef)(!0),b=(0,g.useRef)(f),x=v(()=>new Map),S=(0,g.useRef)(new Set),[C,w]=(0,g.useState)(f),[T,ee]=(0,g.useState)(f);y(()=>{m.current=!1,b.current=f;for(let e=0;e<T.length;e++){let t=W(T[e]);p.includes(t)?(x.delete(t),S.current.delete(t)):x.get(t)!==!0&&x.set(t,!1)}},[T,p.length,p.join(`-`)]);let te=[];if(f!==C){let e=[...f];for(let t=0;t<T.length;t++){let n=T[t],r=W(n);p.includes(r)||(e.splice(t,0,n),te.push(n))}return a===`wait`&&te.length&&(e=te),ee(bc(e)),w(f),null}let{forceRender:ne}=(0,g.useContext)(_);return(0,h.jsx)(h.Fragment,{children:T.map(e=>{let g=W(e),_=o&&!u?!1:f===T||p.includes(g);return(0,h.jsx)(_c,{isPresent:_,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:_?void 0:()=>{if(S.current.has(g))return;if(x.has(g))S.current.add(g),x.set(g,!0);else return;let e=!0;x.forEach(t=>{t||(e=!1)}),e&&(ne?.(),ee(b.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},g)})})},Sc=(0,g.createContext)({strict:!1}),Cc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},wc=!1;function Tc(){if(wc)return;let e={};for(let t in Cc)e[t]={isEnabled:e=>Cc[t].some(t=>!!e[t])};Pa(e),wc=!0}function Ec(){return Tc(),Fa()}function Dc(e){let t=Ec();for(let n in e)t[n]={...t[n],...e[n]};Pa(t)}function Oc({children:e,features:t,strict:n=!1}){let[,r]=(0,g.useState)(!kc(t)),i=(0,g.useRef)(void 0);if(!kc(t)){let{renderer:e,...n}=t;i.current=e,Dc(n)}return(0,g.useEffect)(()=>{kc(t)&&t().then(({renderer:e,...t})=>{Dc(t),i.current=e,r(!0)})},[]),(0,h.jsx)(Sc.Provider,{value:{renderer:i.current,strict:n},children:e})}function kc(e){return typeof e==`function`}var Ac=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function jc(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Ac.has(e)}function Mc(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Nc=o((()=>{})),Pc=c({default:()=>Ic}),Fc,Ic,Lc=o((()=>{Nc(),Fc=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ic=Mc(function(e){return Fc.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91})})),Rc=e=>!jc(e);function zc(e){typeof e==`function`&&(Rc=t=>t.startsWith(`on`)?!jc(t):e(t))}try{zc((Lc(),d(Pc)).default)}catch{}function Bc(e,t,n){let r={};for(let i in e)(i!==`values`||typeof e.values!=`object`)&&(ei(e[i])||(Rc(i)||n===!0&&jc(i)||!t&&!jc(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]));return r}var Vc=(0,g.createContext)({});function Hc(e,t){if(Ea(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ca(t)?t:void 0,animate:Ca(n)?n:void 0}}return e.inherit===!1?{}:t}function Uc(e){let{initial:t,animate:n}=Hc(e,(0,g.useContext)(Vc));return(0,g.useMemo)(()=>({initial:t,animate:n}),[Wc(t),Wc(n)])}function Wc(e){return Array.isArray(e)?e.join(` `):e}var Gc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Kc(e,t,n){for(let r in t)!ei(t[r])&&!go(r,n)&&(e[r]=t[r])}function qc({transformTemplate:e},t){return(0,g.useMemo)(()=>{let n=Gc();return lo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Jc(e,t){let n=e.style||{},r={};return Kc(r,n,e),Object.assign(r,qc(e,t)),r}function G(e,t){let n={},r=Jc(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Yc=()=>({...Gc(),attrs:{}});function Xc(e,t,n,r){let i=(0,g.useMemo)(()=>{let n=Yc();return wo(n,t,Eo(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Kc(t,e.style,e),i.style={...t,...i.style}}return i}var Zc=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Qc(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Zc.indexOf(e)>-1||/[A-Z]/u.test(e))}function $c(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Qc(e)?Xc:G)(t,r,i,e),c=Bc(t,typeof e==`string`,a),l=e===g.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,g.useMemo)(()=>ei(u)?u.get():u,[u]);return(0,g.createElement)(e,{...l,children:d})}function el({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:tl(n,r,i,e),renderState:t()}}function tl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Es(a[e]);let{initial:o,animate:s}=e,c=Ea(e),l=Da(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Sa(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=qr(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var nl=e=>(t,n)=>{let r=(0,g.useContext)(Vc),i=(0,g.useContext)(b),a=()=>el(e,t,r,i);return n?a():v(a)},rl=nl({scrapeMotionValuesFromProps:_o,createRenderState:Gc}),il=nl({scrapeMotionValuesFromProps:Oo,createRenderState:Yc}),al=Symbol.for(`motionComponentSymbol`);function ol(e,t,n){let r=(0,g.useRef)(n);(0,g.useInsertionEffect)(()=>{r.current=n});let i=(0,g.useRef)(null);return(0,g.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var sl=(0,g.createContext)({});function cl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function ll(e,t,n,r,i,a){let{visualElement:o}=(0,g.useContext)(Vc),s=(0,g.useContext)(Sc),c=(0,g.useContext)(b),l=(0,g.useContext)(dc),u=l.reducedMotion,d=l.skipAnimations,f=(0,g.useRef)(null),p=(0,g.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,g.useContext)(sl);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&ul(f.current,n,i,h);let _=(0,g.useRef)(!1);(0,g.useInsertionEffect)(()=>{m&&_.current&&m.update(n,c)});let v=n[ai],x=(0,g.useRef)(!!v&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(v)&&window.MotionHasOptimisedAnimation?.(v));return y(()=>{p.current=!0,m&&(_.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),(0,g.useEffect)(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(v)}),!1),m.enteringChildren=void 0)}),m}function ul(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:dl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&cl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function dl(e){if(e)return e.options.allowProjection===!1?dl(e.parent):e.projection}function fl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Dc(r);let a=n?n===`svg`:Qc(e),o=a?il:rl;function s(n,s){let c,l={...(0,g.useContext)(dc),...n,layoutId:pl(n)},{isStatic:u}=l,d=Uc(n),f=o(n,u);if(!u&&typeof window<`u`){ml(l,r);let t=hl(l);c=t.MeasureLayout,d.visualElement=ll(e,f,l,i,t.ProjectionNode,a)}return(0,h.jsxs)(Vc.Provider,{value:d,children:[c&&d.visualElement?(0,h.jsx)(c,{visualElement:d.visualElement,...l}):null,$c(e,n,ol(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,g.forwardRef)(s);return c[al]=e,c}function pl({layoutId:e}){let t=(0,g.useContext)(_).id;return t&&e!==void 0?t+`-`+e:e}function ml(e,t){(0,g.useContext)(Sc).strict}function hl(e){let{drag:t,layout:n}=Ec();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function gl(e,t){if(typeof Proxy>`u`)return fl;let n=new Map,r=(n,r)=>fl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,fl(a,void 0,e,t)),n.get(a))})}var K=gl(),_l=(e,t)=>t.isSVG??Qc(e)?new ko(t):new yo(t,{allowProjection:e!==g.Fragment}),vl=class extends Ra{constructor(e){super(e),e.animationState||=Fo(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Sa(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},yl=0,bl={animation:{Feature:vl},exit:{Feature:class extends Ra{constructor(){super(...arguments),this.id=yl++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=Jr(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function xl(e){return{point:{x:e.pageX,y:e.pageY}}}var Sl=e=>t=>Ui(t)&&e(t,xl(t));function Cl(e,t,n,r){return Ss(e,t,Sl(n),r)}var wl=({current:e})=>e?e.ownerDocument.defaultView:null,Tl=(e,t)=>Math.abs(e-t);function El(e,t){let n=Tl(e.x,t.x),r=Tl(e.y,t.y);return Math.sqrt(n**2+r**2)}var Dl=new Set([`auto`,`scroll`]),Ol=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=kl(this.lastRawMoveEventInfo,this.transformPagePoint));let e=jl(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=El(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Pe;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=kl(t,this.transformPagePoint),k.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=jl(e.type===`pointercancel`?this.lastMoveEventInfo:kl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ui(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=kl(xl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Pe;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,jl(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=re(Cl(this.contextWindow,`pointermove`,this.handlePointerMove,d),Cl(this.contextWindow,`pointerup`,this.handlePointerUp,d),Cl(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Dl.has(e.overflowX)||Dl.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),k.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ne(this.updatePoint)}};function kl(e,t){return t?{point:t(e.point)}:e}function Al(e,t){return{x:e.x-t.x,y:e.y-t.y}}function jl({point:e},t){return{point:e,delta:Al(e,Nl(t)),offset:Al(e,Ml(t)),velocity:Pl(t,.1)}}function Ml(e){return e[0]}function Nl(e){return e[e.length-1]}function Pl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=Nl(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>oe(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>oe(t)*2&&(r=e[1]);let a=D(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Fl(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?M(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?M(n,e,r.max):Math.min(e,n)),e}function Il(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Ll(e,{top:t,left:n,bottom:r,right:i}){return{x:Il(e.x,n,i),y:Il(e.y,t,r)}}function Rl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function zl(e,t){return{x:Rl(e.x,t.x),y:Rl(e.y,t.y)}}function Bl(e,t){let n=.5,r=Uo(e),i=Uo(t);return i>r?n=ie(t.min,t.max-r,e.min):r>i&&(n=ie(e.min,e.max-i,t.min)),C(0,1,n)}function Vl(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Hl=.35;function Ul(e=Hl){return e===!1?e=0:e===!0&&(e=Hl),{x:Wl(e,`left`,`right`),y:Wl(e,`top`,`bottom`)}}function Wl(e,t,n){return{min:q(e,t),max:q(e,n)}}function q(e,t){return typeof e==`number`?e:e[t]||0}var Gl=new WeakMap,Kl=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=R(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(xl(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ri(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ds(e=>{let t=this.getAxisMotionValue(e).get()||0;if(st.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Uo(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&k.update(()=>i(e,t),!1,!0),ni(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Xl(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&k.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Ol(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:wl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&k.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Yl(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Fl(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&cl(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?Ll(n.layoutBox,e):!1,this.elastic=Ul(t),r!==this.constraints&&!cl(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&ds(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Vl(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!cl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=ao(n,r.root,this.visualElement.getTransformPagePoint()),a=zl(r.layout.layoutBox,i);if(t){let e=t(Ba(a));this.hasMutatedConstraints=!!e,e&&(a=za(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=ds(o=>{if(!Yl(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return ni(this.visualElement,e),n.start(Hr(e,n,0,t,this.visualElement,!1))}stopAnimation(){ds(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){ds(t=>{let{drag:n}=this.getProps();if(!Yl(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-M(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!cl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};ds(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Bl({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),ds(t=>{if(!Yl(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(M(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Gl.set(this.visualElement,this);let e=this.visualElement.current,t=Cl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&qi(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();cl(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Jl(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),k.read(r);let o=Ss(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(ds(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Hl,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function ql(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Jl(e,t,n){let r=pa(e,ql(n)),i=pa(t,ql(n));return()=>{r(),i()}}function Yl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Xl(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Zl=class extends Ra{constructor(e){super(e),this.removeGroupControls=E,this.removeListeners=E,this.controls=new Kl(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||E}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Ql=e=>(t,n)=>{e&&k.update(()=>e(t,n),!1,!0)},$l=class extends Ra{constructor(){super(...arguments),this.removePointerDownListener=E}onPointerDown(e){this.session=new Ol(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:wl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ql(e),onStart:Ql(t),onMove:Ql(n),onEnd:(e,t)=>{delete this.session,r&&k.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Cl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},eu=!1,tu=class extends g.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),eu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Os.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),eu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||k.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Pi.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;eu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function nu(e){let[t,n]=yc(),r=(0,g.useContext)(_);return(0,h.jsx)(tu,{...e,layoutGroup:r,switchLayoutGroup:(0,g.useContext)(sl),isPresent:t,safeToRemove:n})}var ru={pan:{Feature:$l},drag:{Feature:Zl,ProjectionNode:uc,MeasureLayout:nu}};function iu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&k.postRender(()=>i(t,xl(t)))}var au=class extends Ra{mount(){let{current:e}=this.node;e&&(this.unmount=Vi(e,(e,t)=>(iu(this.node,t,`Start`),e=>iu(this.node,e,`End`))))}unmount(){}},ou=class extends Ra{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}e&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=re(Ss(this.node.current,`focus`,()=>this.onFocus()),Ss(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function su(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&k.postRender(()=>i(t,xl(t)))}var cu=class extends Ra{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=Qi(e,(e,t)=>(su(this.node,t,`Start`),(e,{success:t})=>su(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},lu=new WeakMap,uu=new WeakMap,du=e=>{let t=lu.get(e.target);t&&t(e)},fu=e=>{e.forEach(du)};function pu({root:e,...t}){let n=e||document;uu.has(n)||uu.set(n,{});let r=uu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(fu,{root:e,...t})),r[i]}function mu(e,t,n){let r=pu(t);return lu.set(e,n),r.observe(e),()=>{lu.delete(e),r.unobserve(e)}}var hu={some:0,all:1},gu=class extends Ra{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:hu[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=mu(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(_u(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function _u({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var vu={inView:{Feature:gu},tap:{Feature:cu},focus:{Feature:ou},hover:{Feature:au}},yu={layout:{ProjectionNode:uc,MeasureLayout:nu}},bu={renderer:_l,...bl,...vu,...ru,...yu};function xu(){!ka.current&&ja();let[e]=(0,g.useState)(z.current);return e}var Su=c({domMax:()=>bu,maxGeneratorDuration:()=>qt,optimizedAppearDataId:()=>ii}),Cu=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,ae(x);else{var t=n(l);t!==null&&oe(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&oe(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,ee=-1;function te(){return!(e.unstable_now()-ee<T)}function ne(){if(C!==null){var t=e.unstable_now();ee=t;var n=!0;try{n=C(!0,t)}finally{n?E():(S=!1,C=null)}}else S=!1}var E;if(typeof v==`function`)E=function(){v(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,E=function(){ie.postMessage(null)}}else E=function(){g(ne,0)};function ae(e){C=e,S||(S=!0,E())}function oe(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ae(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,oe(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ae(x))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),wu=s(((e,t)=>{t.exports=Cu()})),Tu=s((e=>{var t=p(),n=wu();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},f={};function m(e){return l.call(f,e)?!0:l.call(d,e)?!1:u.test(e)?f[e]=!0:(d[e]=!0,!1)}function h(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function g(e,t,n,r){if(t==null||h(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var v={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){v[e]=new _(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];v[t]=new _(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){v[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){v[e]=new _(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){v[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){v[e]=new _(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){v[e]=new _(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){v[e]=new _(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){v[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(y,b);v[t]=new _(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(y,b);v[t]=new _(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(y,b);v[t]=new _(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){v[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),v.xlinkHref=new _(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){v[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function x(e,t,n,r){var i=v.hasOwnProperty(t)?v[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(g(t,n,i,r)&&(n=null),r||i===null?m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var S=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for(`react.element`),w=Symbol.for(`react.portal`),T=Symbol.for(`react.fragment`),ee=Symbol.for(`react.strict_mode`),te=Symbol.for(`react.profiler`),ne=Symbol.for(`react.provider`),E=Symbol.for(`react.context`),re=Symbol.for(`react.forward_ref`),ie=Symbol.for(`react.suspense`),ae=Symbol.for(`react.suspense_list`),oe=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),se=Symbol.for(`react.offscreen`),ce=Symbol.iterator;function le(e){return typeof e!=`object`||!e?null:(e=ce&&e[ce]||e[`@@iterator`],typeof e==`function`?e:null)}var O=Object.assign,ue;function de(e){if(ue===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ue=t&&t[1]||``}return`
`+ue+e}var fe=!1;function pe(e,t){if(!e||fe)return``;fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?de(e):``}function me(e){switch(e.tag){case 5:return de(e.type);case 16:return de(`Lazy`);case 13:return de(`Suspense`);case 19:return de(`SuspenseList`);case 0:case 2:case 15:return e=pe(e.type,!1),e;case 11:return e=pe(e.type.render,!1),e;case 1:return e=pe(e.type,!0),e;default:return``}}function he(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case T:return`Fragment`;case w:return`Portal`;case te:return`Profiler`;case ee:return`StrictMode`;case ie:return`Suspense`;case ae:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case E:return(e.displayName||`Context`)+`.Consumer`;case ne:return(e._context.displayName||`Context`)+`.Provider`;case re:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case oe:return t=e.displayName||null,t===null?he(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return he(t);case 8:return t===ee?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function _e(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ye(e){var t=ve(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function be(e){e._valueTracker||=ye(e)}function xe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ve(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Se(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ce(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function we(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=_e(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Te(e,t){t=t.checked,t!=null&&x(e,`checked`,t,!1)}function Ee(e,t){Te(e,t);var n=_e(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Oe(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Oe(e,t.type,_e(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function De(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Oe(e,t,n){(t!==`number`||Se(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var ke=Array.isArray;function Ae(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+_e(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function je(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return O({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Me(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(ke(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:_e(n)}}function k(e,t){var n=_e(t.value),r=_e(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Ne(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Pe(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Fe(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Pe(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Ie,Le=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Ie||=document.createElement(`div`),Ie.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Ie.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Re(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(ze).forEach(function(e){Be.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ze[t]=ze[e]})});function Ve(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||ze.hasOwnProperty(e)&&ze[e]?(``+t).trim():t+`px`}function He(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ve(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ue=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(e,t){if(t){if(Ue[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ge(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ke=null;function qe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Je=null,Ye=null,Xe=null;function Ze(e){if(e=Ki(e)){if(typeof Je!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ji(t),Je(e.stateNode,e.type,t))}}function Qe(e){Ye?Xe?Xe.push(e):Xe=[e]:Ye=e}function $e(){if(Ye){var e=Ye,t=Xe;if(Xe=Ye=null,Ze(e),t)for(e=0;e<t.length;e++)Ze(t[e])}}function et(e,t){return e(t)}function tt(){}var nt=!1;function rt(e,t,n){if(nt)return e(t,n);nt=!0;try{return et(e,t,n)}finally{nt=!1,(Ye!==null||Xe!==null)&&(tt(),$e())}}function it(e,t){var n=e.stateNode;if(n===null)return null;var i=Ji(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var at=!1;if(c)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){at=!0}}),window.addEventListener(`test`,ot,ot),window.removeEventListener(`test`,ot,ot)}catch{at=!1}function st(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var A=!1,ct=null,lt=!1,ut=null,dt={onError:function(e){A=!0,ct=e}};function ft(e,t,n,r,i,a,o,s,c){A=!1,ct=null,st.apply(dt,arguments)}function pt(e,t,n,i,a,o,s,c,l){if(ft.apply(this,arguments),A){if(A){var u=ct;A=!1,ct=null}else throw Error(r(198));lt||(lt=!0,ut=u)}}function mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ht(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gt(e){if(mt(e)!==e)throw Error(r(188))}function _t(e){var t=e.alternate;if(!t){if(t=mt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return gt(a),e;if(o===i)return gt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function vt(e){return e=_t(e),e===null?null:yt(e)}function yt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yt(e);if(t!==null)return t;e=e.sibling}return null}var bt=n.unstable_scheduleCallback,xt=n.unstable_cancelCallback,St=n.unstable_shouldYield,Ct=n.unstable_requestPaint,j=n.unstable_now,wt=n.unstable_getCurrentPriorityLevel,Tt=n.unstable_ImmediatePriority,Et=n.unstable_UserBlockingPriority,Dt=n.unstable_NormalPriority,Ot=n.unstable_LowPriority,kt=n.unstable_IdlePriority,At=null,M=null;function jt(e){if(M&&typeof M.onCommitFiberRoot==`function`)try{M.onCommitFiberRoot(At,e,void 0,(e.current.flags&128)==128)}catch{}}var Mt=Math.clz32?Math.clz32:Ft,Nt=Math.log,Pt=Math.LN2;function Ft(e){return e>>>=0,e===0?32:31-(Nt(e)/Pt|0)|0}var It=64,Lt=4194304;function Rt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Rt(a))):r=Rt(s)}else o=n&~i,o===0?a!==0&&(r=Rt(a)):r=Rt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),i=1<<n,r|=e[n],t&=~i;return r}function Bt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Mt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Bt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ht(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Ut(){var e=It;return It<<=1,!(It&4194240)&&(It=64),e}function Wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function Kt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function qt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var N=0;function Jt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var P,Yt,Xt,Zt,Qt,$t=!1,en=[],tn=null,nn=null,rn=null,an=new Map,on=new Map,sn=[],cn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function ln(e,t){switch(e){case`focusin`:case`focusout`:tn=null;break;case`dragenter`:case`dragleave`:nn=null;break;case`mouseover`:case`mouseout`:rn=null;break;case`pointerover`:case`pointerout`:an.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:on.delete(t.pointerId)}}function un(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Yt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dn(e,t,n,r,i){switch(t){case`focusin`:return tn=un(tn,e,t,n,r,i),!0;case`dragenter`:return nn=un(nn,e,t,n,r,i),!0;case`mouseover`:return rn=un(rn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return an.set(a,un(an.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,on.set(a,un(on.get(a)||null,e,t,n,r,i)),!0}return!1}function fn(e){var t=Gi(e.target);if(t!==null){var n=mt(t);if(n!==null){if(t=n.tag,t===13){if(t=ht(n),t!==null){e.blockedOn=t,Qt(e.priority,function(){Xt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ke=r,n.target.dispatchEvent(r),Ke=null}else return t=Ki(n),t!==null&&Yt(t),e.blockedOn=n,!1;t.shift()}return!0}function mn(e,t,n){pn(e)&&n.delete(t)}function hn(){$t=!1,tn!==null&&pn(tn)&&(tn=null),nn!==null&&pn(nn)&&(nn=null),rn!==null&&pn(rn)&&(rn=null),an.forEach(mn),on.forEach(mn)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,$t||($t=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,hn)))}function _n(e){function t(t){return gn(t,e)}if(0<en.length){gn(en[0],e);for(var n=1;n<en.length;n++){var r=en[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&gn(tn,e),nn!==null&&gn(nn,e),rn!==null&&gn(rn,e),an.forEach(t),on.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)fn(n),n.blockedOn===null&&sn.shift()}var vn=S.ReactCurrentBatchConfig,yn=!0;function bn(e,t,n,r){var i=N,a=vn.transition;vn.transition=null;try{N=1,Sn(e,t,n,r)}finally{N=i,vn.transition=a}}function xn(e,t,n,r){var i=N,a=vn.transition;vn.transition=null;try{N=4,Sn(e,t,n,r)}finally{N=i,vn.transition=a}}function Sn(e,t,n,r){if(yn){var i=wn(e,t,n,r);if(i===null)_i(e,t,r,Cn,n),ln(e,r);else if(dn(i,e,t,n,r))r.stopPropagation();else if(ln(e,r),t&4&&-1<cn.indexOf(e)){for(;i!==null;){var a=Ki(i);if(a!==null&&P(a),a=wn(e,t,n,r),a===null&&_i(e,t,r,Cn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else _i(e,t,r,null,n)}}var Cn=null;function wn(e,t,n,r){if(Cn=null,e=qe(r),e=Gi(e),e!==null){if(t=mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ht(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return Cn=e,null}function Tn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(wt()){case Tt:return 1;case Et:return 4;case Dt:case Ot:return 16;case kt:return 536870912;default:return 16}default:return 16}}var En=null,Dn=null,On=null;function kn(){if(On)return On;var e,t=Dn,n=t.length,r,i=`value`in En?En.value:En.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return On=i.slice(e,1<r?1-r:void 0)}function An(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jn(){return!0}function Mn(){return!1}function Nn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?jn:Mn,this.isPropagationStopped=Mn,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fn=Nn(Pn),In=O({},Pn,{view:0,detail:0}),Ln=Nn(In),Rn,zn,Bn,Vn=O({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Bn&&(Bn&&e.type===`mousemove`?(Rn=e.screenX-Bn.screenX,zn=e.screenY-Bn.screenY):zn=Rn=0,Bn=e),Rn)},movementY:function(e){return`movementY`in e?e.movementY:zn}}),Hn=Nn(Vn),Un=Nn(O({},Vn,{dataTransfer:0})),Wn=Nn(O({},In,{relatedTarget:0})),Gn=Nn(O({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0})),Kn=Nn(O({},Pn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),qn=Nn(O({},Pn,{data:0})),Jn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Yn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Xn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Zn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xn[e])?!!t[e]:!1}function Qn(){return Zn}var $n=Nn(O({},In,{key:function(e){if(e.key){var t=Jn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=An(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Yn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qn,charCode:function(e){return e.type===`keypress`?An(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?An(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),er=Nn(O({},Vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),tr=Nn(O({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qn})),nr=Nn(O({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0})),rr=Nn(O({},Vn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ir=[9,13,27,32],ar=c&&`CompositionEvent`in window,or=null;c&&`documentMode`in document&&(or=document.documentMode);var sr=c&&`TextEvent`in window&&!or,cr=c&&(!ar||or&&8<or&&11>=or),lr=` `,ur=!1;function dr(e,t){switch(e){case`keyup`:return ir.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function fr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var pr=!1;function mr(e,t){switch(e){case`compositionend`:return fr(t);case`keypress`:return t.which===32?(ur=!0,lr):null;case`textInput`:return e=t.data,e===lr&&ur?null:e;default:return null}}function hr(e,t){if(pr)return e===`compositionend`||!ar&&dr(e,t)?(e=kn(),On=Dn=En=null,pr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return cr&&t.locale!==`ko`?null:t.data;default:return null}}var gr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!gr[e.type]:t===`textarea`}function vr(e,t,n,r){Qe(r),t=yi(t,`onChange`),0<t.length&&(n=new Fn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var yr=null,br=null;function xr(e){fi(e,0)}function Sr(e){if(xe(qi(e)))return e}function Cr(e,t){if(e===`change`)return t}var wr=!1;if(c){var Tr;if(c){var Er=`oninput`in document;if(!Er){var Dr=document.createElement(`div`);Dr.setAttribute(`oninput`,`return;`),Er=typeof Dr.oninput==`function`}Tr=Er}else Tr=!1;wr=Tr&&(!document.documentMode||9<document.documentMode)}function Or(){yr&&(yr.detachEvent(`onpropertychange`,kr),br=yr=null)}function kr(e){if(e.propertyName===`value`&&Sr(br)){var t=[];vr(t,br,e,qe(e)),rt(xr,t)}}function Ar(e,t,n){e===`focusin`?(Or(),yr=t,br=n,yr.attachEvent(`onpropertychange`,kr)):e===`focusout`&&Or()}function jr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Sr(br)}function Mr(e,t){if(e===`click`)return Sr(t)}function Nr(e,t){if(e===`input`||e===`change`)return Sr(t)}function Pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Fr=typeof Object.is==`function`?Object.is:Pr;function Ir(e,t){if(Fr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Fr(e[i],t[i]))return!1}return!0}function Lr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rr(e,t){var n=Lr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Lr(n)}}function zr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Br(){for(var e=window,t=Se();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Se(e.document)}return t}function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Hr(e){var t=Br(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zr(n.ownerDocument.documentElement,n)){if(r!==null&&Vr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Rr(n,a);var o=Rr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ur=c&&`documentMode`in document&&11>=document.documentMode,Wr=null,Gr=null,Kr=null,qr=!1;function Jr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qr||Wr==null||Wr!==Se(r)||(r=Wr,`selectionStart`in r&&Vr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Ir(Kr,r)||(Kr=r,r=yi(Gr,`onSelect`),0<r.length&&(t=new Fn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Xr={animationend:Yr(`Animation`,`AnimationEnd`),animationiteration:Yr(`Animation`,`AnimationIteration`),animationstart:Yr(`Animation`,`AnimationStart`),transitionend:Yr(`Transition`,`TransitionEnd`)},Zr={},Qr={};c&&(Qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),`TransitionEvent`in window||delete Xr.transitionend.transition);function $r(e){if(Zr[e])return Zr[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qr)return Zr[e]=t[n];return e}var ei=$r(`animationend`),ti=$r(`animationiteration`),ni=$r(`animationstart`),ri=$r(`transitionend`),ii=new Map,ai=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function oi(e,t){ii.set(e,t),o(t,[e])}for(var si=0;si<ai.length;si++){var ci=ai[si];oi(ci.toLowerCase(),`on`+(ci[0].toUpperCase()+ci.slice(1)))}oi(ei,`onAnimationEnd`),oi(ti,`onAnimationIteration`),oi(ni,`onAnimationStart`),oi(`dblclick`,`onDoubleClick`),oi(`focusin`,`onFocus`),oi(`focusout`,`onBlur`),oi(ri,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var li=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ui=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(li));function di(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,pt(r,t,void 0,e),e.currentTarget=null}function fi(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;di(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;di(i,s,l),a=c}}}if(lt)throw e=ut,lt=!1,ut=null,e}function F(e,t){var n=t[Hi];n===void 0&&(n=t[Hi]=new Set);var r=e+`__bubble`;n.has(r)||(gi(t,e,2,!1),n.add(r))}function pi(e,t,n){var r=0;t&&(r|=4),gi(n,e,r,t)}var mi=`_reactListening`+Math.random().toString(36).slice(2);function hi(e){if(!e[mi]){e[mi]=!0,i.forEach(function(t){t!==`selectionchange`&&(ui.has(t)||pi(t,!1,e),pi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,pi(`selectionchange`,!1,t))}}function gi(e,t,n,r){switch(Tn(t)){case 1:var i=bn;break;case 4:i=xn;break;default:i=Sn}n=i.bind(null,t,n,e),i=void 0,!at||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function _i(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Gi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}rt(function(){var r=a,i=qe(n),o=[];a:{var s=ii.get(e);if(s!==void 0){var c=Fn,l=e;switch(e){case`keypress`:if(An(n)===0)break a;case`keydown`:case`keyup`:c=$n;break;case`focusin`:l=`focus`,c=Wn;break;case`focusout`:l=`blur`,c=Wn;break;case`beforeblur`:case`afterblur`:c=Wn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Hn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Un;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=tr;break;case ei:case ti:case ni:c=Gn;break;case ri:c=nr;break;case`scroll`:c=Ln;break;case`wheel`:c=rr;break;case`copy`:case`cut`:case`paste`:c=Kn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=er}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=it(p,f),h!=null&&u.push(vi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ke&&(l=n.relatedTarget||n.fromElement)&&(Gi(l)||l[Vi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Gi(l):null,l!==null&&(d=mt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Hn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=er,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:qi(c),m=l==null?s:qi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Gi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=bi(m))p++;for(m=0,h=f;h;h=bi(h))m++;for(;0<p-m;)u=bi(u),p--;for(;0<m-p;)f=bi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=bi(u),f=bi(f)}u=null}else u=null;c!==null&&xi(o,s,c,u,!1),l!==null&&d!==null&&xi(o,d,l,u,!0)}}a:{if(s=r?qi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Cr;else if(_r(s)){if(wr)g=Nr;else{g=jr;var _=Ar}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Mr);if(g&&=g(e,r)){vr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Oe(s,`number`,s.value)}switch(_=r?qi(r):window,e){case`focusin`:(_r(_)||_.contentEditable===`true`)&&(Wr=_,Gr=r,Kr=null);break;case`focusout`:Kr=Gr=Wr=null;break;case`mousedown`:qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:qr=!1,Jr(o,n,i);break;case`selectionchange`:if(Ur)break;case`keydown`:case`keyup`:Jr(o,n,i)}var v;if(ar)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else pr?dr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(cr&&n.locale!==`ko`&&(pr||y!==`onCompositionStart`?y===`onCompositionEnd`&&pr&&(v=kn()):(En=i,Dn=`value`in En?En.value:En.textContent,pr=!0)),_=yi(r,y),0<_.length&&(y=new qn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=fr(n),v!==null&&(y.data=v)))),(v=sr?mr(e,n):hr(e,n))&&(r=yi(r,`onBeforeInput`),0<r.length&&(i=new qn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}fi(o,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=it(e,n),a!=null&&r.unshift(vi(e,a,i)),a=it(e,t),a!=null&&r.push(vi(e,a,i))),e=e.return}return r}function bi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=it(n,a),c!=null&&o.unshift(vi(n,c,s))):i||(c=it(n,a),c!=null&&o.push(vi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Si=/\r\n?/g,Ci=/\u0000|\uFFFD/g;function wi(e){return(typeof e==`string`?e:``+e).replace(Si,`
`).replace(Ci,``)}function Ti(e,t,n){if(t=wi(t),wi(e)!==t&&n)throw Error(r(425))}function Ei(){}var Di=null,Oi=null;function ki(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout==`function`?setTimeout:void 0,ji=typeof clearTimeout==`function`?clearTimeout:void 0,Mi=typeof Promise==`function`?Promise:void 0,Ni=typeof queueMicrotask==`function`?queueMicrotask:Mi===void 0?Ai:function(e){return Mi.resolve(null).then(e).catch(Pi)};function Pi(e){setTimeout(function(){throw e})}function Fi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),_n(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);_n(t)}function Ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Li(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ri=Math.random().toString(36).slice(2),zi=`__reactFiber$`+Ri,Bi=`__reactProps$`+Ri,Vi=`__reactContainer$`+Ri,Hi=`__reactEvents$`+Ri,Ui=`__reactListeners$`+Ri,Wi=`__reactHandles$`+Ri;function Gi(e){var t=e[zi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vi]||n[zi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Li(e);e!==null;){if(n=e[zi])return n;e=Li(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[zi]||e[Vi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ji(e){return e[Bi]||null}var Yi=[],Xi=-1;function Zi(e){return{current:e}}function I(e){0>Xi||(e.current=Yi[Xi],Yi[Xi]=null,Xi--)}function L(e,t){Xi++,Yi[Xi]=e.current,e.current=t}var Qi={},$i=Zi(Qi),ea=Zi(!1),ta=Qi;function na(e,t){var n=e.type.contextTypes;if(!n)return Qi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ra(e){return e=e.childContextTypes,e!=null}function ia(){I(ea),I($i)}function aa(e,t,n){if($i.current!==Qi)throw Error(r(168));L($i,t),L(ea,n)}function oa(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ge(e)||`Unknown`,a));return O({},n,i)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qi,ta=$i.current,L($i,e),L(ea,ea.current),!0}function ca(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=oa(e,t,ta),i.__reactInternalMemoizedMergedChildContext=e,I(ea),I($i),L($i,e)):I(ea),L(ea,n)}var la=null,ua=!1,da=!1;function fa(e){la===null?la=[e]:la.push(e)}function pa(e){ua=!0,fa(e)}function ma(){if(!da&&la!==null){da=!0;var e=0,t=N;try{var n=la;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}la=null,ua=!1}catch(t){throw la!==null&&(la=la.slice(e+1)),bt(Tt,ma),t}finally{N=t,da=!1}}return null}var ha=[],ga=0,_a=null,va=0,ya=[],ba=0,R=null,xa=1,Sa=``;function Ca(e,t){ha[ga++]=va,ha[ga++]=_a,_a=e,va=t}function wa(e,t,n){ya[ba++]=xa,ya[ba++]=Sa,ya[ba++]=R,R=e;var r=xa;e=Sa;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var a=32-Mt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xa=1<<32-Mt(t)+i|n<<i|r,Sa=a+e}else xa=1<<a|n<<i|r,Sa=e}function Ta(e){e.return!==null&&(Ca(e,1),wa(e,1,0))}function Ea(e){for(;e===_a;)_a=ha[--ga],ha[ga]=null,va=ha[--ga],ha[ga]=null;for(;e===R;)R=ya[--ba],ya[ba]=null,Sa=ya[--ba],ya[ba]=null,xa=ya[--ba],ya[ba]=null}var Da=null,Oa=null,z=!1,ka=null;function Aa(e,t){var n=Ql(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,Da=e,Oa=Ii(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,Da=e,Oa=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=R===null?null:{id:xa,overflow:Sa},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ql(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Da=e,Oa=null,!0);default:return!1}}function Ma(e){return!!(e.mode&1)&&!(e.flags&128)}function Na(e){if(z){var t=Oa;if(t){var n=t;if(!ja(e,t)){if(Ma(e))throw Error(r(418));t=Ii(n.nextSibling);var i=Da;t&&ja(e,t)?Aa(i,n):(e.flags=e.flags&-4097|2,z=!1,Da=e)}}else{if(Ma(e))throw Error(r(418));e.flags=e.flags&-4097|2,z=!1,Da=e}}}function Pa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Da=e}function Fa(e){if(e!==Da)return!1;if(!z)return Pa(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!ki(e.type,e.memoizedProps)),t&&=Oa){if(Ma(e))throw Ia(),Error(r(418));for(;t;)Aa(e,t),t=Ii(t.nextSibling)}if(Pa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Oa=Ii(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Oa=null}}else Oa=Da?Ii(e.stateNode.nextSibling):null;return!0}function Ia(){for(var e=Oa;e;)e=Ii(e.nextSibling)}function La(){Oa=Da=null,z=!1}function Ra(e){ka===null?ka=[e]:ka.push(e)}var za=S.ReactCurrentBatchConfig;function Ba(e,t){if(e&&e.defaultProps){for(var n in t=O({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Va=Zi(null),Ha=null,Ua=null,Wa=null;function Ga(){Wa=Ua=Ha=null}function Ka(e){var t=Va.current;I(Va),e._currentValue=t}function qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ja(e,t){Ha=e,Wa=Ua=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Bs=!0),e.firstContext=null)}function Ya(e){var t=e._currentValue;if(Wa!==e){if(e={context:e,memoizedValue:t,next:null},Ua===null){if(Ha===null)throw Error(r(308));Ua=e,Ha.dependencies={lanes:0,firstContext:e}}else Ua=Ua.next=e}return t}var Xa=null;function Za(e){Xa===null?Xa=[e]:Xa.push(e)}function Qa(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Za(t)):(n.next=i.next,i.next=n),t.interleaved=n,$a(e,r)}function $a(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var eo=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function no(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ro(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function io(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$a(e,n)}return i=r.interleaved,i===null?(t.next=t,Za(r)):(t.next=i.next,i.next=t),r.interleaved=t,$a(e,n)}function ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qt(e,n)}}function oo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var i=e.updateQueue;eo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=O({},d,f);break a;case 2:eo=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);nl|=o,e.lanes=o,e.memoizedState=d}}function co(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var lo=new t.Component().refs;function uo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={isMounted:function(e){return(e=e._reactInternals)?mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=yl(),i=bl(e),a=ro(r,i);a.payload=t,n!=null&&(a.callback=n),t=io(e,a,i),t!==null&&(xl(t,e,i,r),ao(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=yl(),i=bl(e),a=ro(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=io(e,a,i),t!==null&&(xl(t,e,i,r),ao(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yl(),r=bl(e),i=ro(n,r);i.tag=2,t!=null&&(i.callback=t),t=io(e,i,r),t!==null&&(xl(t,e,r,n),ao(t,e,r))}};function po(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,a):!0}function mo(e,t,n){var r=!1,i=Qi,a=t.contextType;return typeof a==`object`&&a?a=Ya(a):(i=ra(t)?ta:$i.current,r=t.contextTypes,a=(r=r!=null)?na(e,i):Qi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ho(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function go(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=lo,to(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ya(a):(a=ra(t)?ta:$i.current,i.context=na(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(uo(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&fo.enqueueReplaceState(i,i.state,null),so(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function _o(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;t===lo&&(t=a.refs={}),e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function yo(e){var t=e._init;return t(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=tu(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=au(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===T?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&yo(i)===t.type)?(r=a(t,n.props),r.ref=_o(e,t,n),r.return=e,r):(r=nu(n.type,n.key,n.props,null,e.mode,r),r.ref=_o(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ou(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ru(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=au(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case C:return n=nu(t.type,t.key,t.props,null,e.mode,n),n.ref=_o(e,null,t),n.return=e,n;case w:return t=ou(t,e.mode,n),t.return=e,t;case D:var r=t._init;return f(e,r(t._payload),n)}if(ke(t)||le(t))return t=ru(t,e.mode,n,null),t.return=e,t;vo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case C:return n.key===i?l(e,t,n,r):null;case w:return n.key===i?u(e,t,n,r):null;case D:return i=n._init,p(e,t,i(n._payload),r)}if(ke(n)||le(n))return i===null?d(e,t,n,r,null):null;vo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case C:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case w:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:var a=r._init;return m(e,t,n,a(r._payload),i)}if(ke(r)||le(r))return e=e.get(n)||null,d(t,e,r,i,null);vo(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),z&&Ca(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&Ca(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),z&&Ca(r,h),l}function g(a,s,c,l){var u=le(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&Ca(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&Ca(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&Ca(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===T&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case C:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===T){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===D&&yo(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=_o(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===T?(r=ru(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=nu(i.type,i.key,i.props,null,e.mode,o),o.ref=_o(e,r,i),o.return=e,e=o)}return s(e);case w:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=ou(i,e.mode,o),r.return=e,e=r}return s(e);case D:return l=i._init,_(e,r,l(i._payload),o)}if(ke(i))return h(e,r,i,o);if(le(i))return g(e,r,i,o);vo(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=au(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var xo=bo(!0),So=bo(!1),Co={},wo=Zi(Co),To=Zi(Co),Eo=Zi(Co);function Do(e){if(e===Co)throw Error(r(174));return e}function Oo(e,t){switch(L(Eo,t),L(To,e),L(wo,Co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fe(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fe(t,e)}I(wo),L(wo,t)}function ko(){I(wo),I(To),I(Eo)}function Ao(e){Do(Eo.current);var t=Do(wo.current),n=Fe(t,e.type);t!==n&&(L(To,e),L(wo,n))}function jo(e){To.current===e&&(I(wo),I(To))}var B=Zi(0);function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var No=[];function Po(){for(var e=0;e<No.length;e++)No[e]._workInProgressVersionPrimary=null;No.length=0}var Fo=S.ReactCurrentDispatcher,Io=S.ReactCurrentBatchConfig,Lo=0,V=null,H=null,U=null,Ro=!1,zo=!1,Bo=0,Vo=0;function Ho(){throw Error(r(321))}function Uo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fr(e[n],t[n]))return!1;return!0}function Wo(e,t,n,i,a,o){if(Lo=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?Ds:Os,e=n(i,a),zo){o=0;do{if(zo=!1,Bo=0,25<=o)throw Error(r(301));o+=1,U=H=null,t.updateQueue=null,Fo.current=ks,e=n(i,a)}while(zo)}if(Fo.current=Es,t=H!==null&&H.next!==null,Lo=0,U=H=V=null,Ro=!1,t)throw Error(r(300));return e}function Go(){var e=Bo!==0;return Bo=0,e}function Ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return U===null?V.memoizedState=U=e:U=U.next=e,U}function qo(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=U===null?V.memoizedState:U.next;if(t!==null)U=t,H=e;else{if(e===null)throw Error(r(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},U===null?V.memoizedState=U=e:U=U.next=e}return U}function Jo(e,t){return typeof t==`function`?t(e):t}function Yo(e){var t=qo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=H,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Lo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,V.lanes|=d,nl|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Fr(i,t.memoizedState)||(Bs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,V.lanes|=o,nl|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xo(e){var t=qo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Fr(o,t.memoizedState)||(Bs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Zo(){}function Qo(e,t){var n=V,i=qo(),a=t(),o=!Fr(i.memoizedState,a);if(o&&(i.memoizedState=a,Bs=!0),i=i.queue,us(ts.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||U!==null&&U.memoizedState.tag&1){if(n.flags|=2048,as(9,es.bind(null,n,i,a,t),void 0,null),Yc===null)throw Error(r(349));Lo&30||$o(n,t,a)}return a}function $o(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function es(e,t,n,r){t.value=n,t.getSnapshot=r,ns(t)&&rs(e)}function ts(e,t,n){return n(function(){ns(t)&&rs(e)})}function ns(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fr(e,n)}catch{return!0}}function rs(e){var t=$a(e,1);t!==null&&xl(t,e,1,-1)}function is(e){var t=Ko();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:e},t.queue=e,e=e.dispatch=Ss.bind(null,V,e),[t.memoizedState,e]}function as(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function os(){return qo().memoizedState}function ss(e,t,n,r){var i=Ko();V.flags|=e,i.memoizedState=as(1|t,n,void 0,r===void 0?null:r)}function cs(e,t,n,r){var i=qo();r=r===void 0?null:r;var a=void 0;if(H!==null){var o=H.memoizedState;if(a=o.destroy,r!==null&&Uo(r,o.deps)){i.memoizedState=as(t,n,a,r);return}}V.flags|=e,i.memoizedState=as(1|t,n,a,r)}function ls(e,t){return ss(8390656,8,e,t)}function us(e,t){return cs(2048,8,e,t)}function ds(e,t){return cs(4,2,e,t)}function fs(e,t){return cs(4,4,e,t)}function ps(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){return n=n==null?null:n.concat([e]),cs(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=qo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=qo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vs(e,t,n){return Lo&21?(Fr(n,t)||(n=Ut(),V.lanes|=n,nl|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Bs=!0),e.memoizedState=n)}function ys(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=Io.transition;Io.transition={};try{e(!1),t()}finally{N=n,Io.transition=r}}function bs(){return qo().memoizedState}function xs(e,t,n){var r=bl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cs(e))ws(t,n);else if(n=Qa(e,t,n,r),n!==null){var i=yl();xl(n,e,r,i),Ts(n,t,r)}}function Ss(e,t,n){var r=bl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cs(e))ws(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Fr(s,o)){var c=t.interleaved;c===null?(i.next=i,Za(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Qa(e,t,i,r),n!==null&&(i=yl(),xl(n,e,r,i),Ts(n,t,r))}}function Cs(e){var t=e.alternate;return e===V||t!==null&&t===V}function ws(e,t){zo=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ts(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qt(e,n)}}var Es={readContext:Ya,useCallback:Ho,useContext:Ho,useEffect:Ho,useImperativeHandle:Ho,useInsertionEffect:Ho,useLayoutEffect:Ho,useMemo:Ho,useReducer:Ho,useRef:Ho,useState:Ho,useDebugValue:Ho,useDeferredValue:Ho,useTransition:Ho,useMutableSource:Ho,useSyncExternalStore:Ho,useId:Ho,unstable_isNewReconciler:!1},Ds={readContext:Ya,useCallback:function(e,t){return Ko().memoizedState=[e,t===void 0?null:t],e},useContext:Ya,useEffect:ls,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),ss(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){return ss(4,2,e,t)},useMemo:function(e,t){var n=Ko();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ko();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xs.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ko();return e={current:e},t.memoizedState=e},useState:is,useDebugValue:hs,useDeferredValue:function(e){return Ko().memoizedState=e},useTransition:function(){var e=is(!1),t=e[0];return e=ys.bind(null,e[1]),Ko().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=V,a=Ko();if(z){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Yc===null)throw Error(r(349));Lo&30||$o(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(ts.bind(null,i,o,e),[e]),i.flags|=2048,as(9,es.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Ko(),t=Yc.identifierPrefix;if(z){var n=Sa,r=xa;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Bo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Vo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},Os={readContext:Ya,useCallback:gs,useContext:Ya,useEffect:us,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Yo,useRef:os,useState:function(){return Yo(Jo)},useDebugValue:hs,useDeferredValue:function(e){return vs(qo(),H.memoizedState,e)},useTransition:function(){return[Yo(Jo)[0],qo().memoizedState]},useMutableSource:Zo,useSyncExternalStore:Qo,useId:bs,unstable_isNewReconciler:!1},ks={readContext:Ya,useCallback:gs,useContext:Ya,useEffect:us,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Xo,useRef:os,useState:function(){return Xo(Jo)},useDebugValue:hs,useDeferredValue:function(e){var t=qo();return H===null?t.memoizedState=e:vs(t,H.memoizedState,e)},useTransition:function(){return[Xo(Jo)[0],qo().memoizedState]},useMutableSource:Zo,useSyncExternalStore:Qo,useId:bs,unstable_isNewReconciler:!1};function As(e,t){try{var n=``,r=t;do n+=me(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function js(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ms(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ns=typeof WeakMap==`function`?WeakMap:Map;function Ps(e,t,n){n=ro(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,dl=r),Ms(e,t)},n}function Fs(e,t,n){n=ro(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ms(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ms(e,t),typeof r!=`function`&&(fl===null?fl=new Set([this]):fl.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Is(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ns;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Gl.bind(null,e,t,n),t.then(e,e))}function Ls(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Rs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ro(-1,1),t.tag=2,io(n,t,1))),n.lanes|=1),e)}var zs=S.ReactCurrentOwner,Bs=!1;function Vs(e,t,n,r){t.child=e===null?So(t,null,n,r):xo(t,e.child,n,r)}function Hs(e,t,n,r,i){n=n.render;var a=t.ref;return Ja(t,i),r=Wo(e,t,n,r,a,i),n=Go(),e!==null&&!Bs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cc(e,t,i)):(z&&n&&Ta(t),t.flags|=1,Vs(e,t,r,i),t.child)}function Us(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!$l(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ws(e,t,a,r,i)):(e=nu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ir:n,n(o,r)&&e.ref===t.ref)return cc(e,t,i)}return t.flags|=1,e=tu(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ws(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ir(a,r)&&e.ref===t.ref){if(Bs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Bs=!0);else return t.lanes=e.lanes,cc(e,t,i)}}return qs(e,t,n,r,i)}function Gs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L($c,Qc),Qc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L($c,Qc),Qc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,L($c,Qc),Qc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),L($c,Qc),Qc|=r;return Vs(e,t,i,n),t.child}function Ks(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qs(e,t,n,r,i){var a=ra(n)?ta:$i.current;return a=na(t,a),Ja(t,i),n=Wo(e,t,n,r,a,i),r=Go(),e!==null&&!Bs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cc(e,t,i)):(z&&r&&Ta(t),t.flags|=1,Vs(e,t,n,i),t.child)}function Js(e,t,n,r,i){if(ra(n)){var a=!0;sa(t)}else a=!1;if(Ja(t,i),t.stateNode===null)sc(e,t),mo(t,n,r),go(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ya(l):(l=ra(n)?ta:$i.current,l=na(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&ho(t,o,r,l),eo=!1;var f=t.memoizedState;o.state=f,so(t,r,o,i),c=t.memoizedState,s!==r||f!==c||ea.current||eo?(typeof u==`function`&&(uo(t,n,u,r),c=t.memoizedState),(s=eo||po(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,no(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Ba(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ya(c):(c=ra(n)?ta:$i.current,c=na(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&ho(t,o,r,c),eo=!1,f=t.memoizedState,o.state=f,so(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||ea.current||eo?(typeof p==`function`&&(uo(t,n,p,r),m=t.memoizedState),(l=eo||po(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ys(e,t,n,r,a,i)}function Ys(e,t,n,r,i,a){Ks(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&ca(t,n,!1),cc(e,t,a);r=t.stateNode,zs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=xo(t,e.child,null,a),t.child=xo(t,null,s,a)):Vs(e,t,s,a),t.memoizedState=r.state,i&&ca(t,n,!0),t.child}function Xs(e){var t=e.stateNode;t.pendingContext?aa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&aa(e,t.context,!1),Oo(e,t.containerInfo)}function Zs(e,t,n,r,i){return La(),Ra(i),t.flags|=256,Vs(e,t,n,r),t.child}var Qs={dehydrated:null,treeContext:null,retryLane:0};function $s(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,t,n){var r=t.pendingProps,i=B.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),L(B,i&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=iu(o,r,0,null),e=ru(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=$s(n),t.memoizedState=Qs,e):tc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return rc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=tu(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=ru(a,o,n,null),a.flags|=2):a=tu(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?$s(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Qs,r}return a=e.child,e=a.sibling,r=tu(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tc(e,t){return t=iu({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function nc(e,t,n,r){return r!==null&&Ra(r),xo(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=js(Error(r(422))),nc(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=iu({mode:`visible`,children:i.children},a,0,null),o=ru(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&xo(t,e.child,null,s),t.child.memoizedState=$s(s),t.memoizedState=Qs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return nc(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=js(o,i,void 0),nc(e,t,s,i)}if(c=(s&e.childLanes)!==0,Bs||c){if(i=Yc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,$a(e,a),xl(i,e,a,-1))}return Fl(),i=js(Error(r(421))),nc(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=ql.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Oa=Ii(a.nextSibling),Da=t,z=!0,ka=null,e!==null&&(ya[ba++]=xa,ya[ba++]=Sa,ya[ba++]=R,xa=e.id,Sa=e.overflow,R=t),t=tc(t,i.children),t.flags|=4096,t)}function ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qa(e.return,t,n)}function ac(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Vs(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,n,t);else if(e.tag===19)ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ac(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ac(t,!0,n,null,a);break;case`together`:ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nl|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=tu(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tu(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lc(e,t,n){switch(t.tag){case 3:Xs(t),La();break;case 5:Ao(t);break;case 1:ra(t.type)&&sa(t);break;case 4:Oo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;L(Va,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(L(B,B.current&1),e=cc(e,t,n),e===null?null:e.sibling):ec(e,t,n):(L(B,B.current&1),t.flags|=128,null);L(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Gs(e,t,n)}return cc(e,t,n)}var uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},dc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Do(wo.current);var o=null;switch(n){case`input`:i=Ce(e,i),r=Ce(e,r),o=[];break;case`select`:i=O({},i,{value:void 0}),r=O({},r,{value:void 0}),o=[];break;case`textarea`:i=je(e,i),r=je(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Ei)}We(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&F(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function pc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hc(e,t,n){var i=t.pendingProps;switch(Ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mc(t),null;case 1:return ra(t.type)&&ia(),mc(t),null;case 3:return i=t.stateNode,ko(),I(ea),I($i),Po(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ka!==null&&(Tl(ka),ka=null))),mc(t),null;case 5:jo(t);var o=Do(Eo.current);if(n=t.type,e!==null&&t.stateNode!=null)dc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return mc(t),null}if(e=Do(wo.current),Fa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[zi]=t,i[Bi]=s,e=!!(t.mode&1),n){case`dialog`:F(`cancel`,i),F(`close`,i);break;case`iframe`:case`object`:case`embed`:F(`load`,i);break;case`video`:case`audio`:for(o=0;o<li.length;o++)F(li[o],i);break;case`source`:F(`error`,i);break;case`img`:case`image`:case`link`:F(`error`,i),F(`load`,i);break;case`details`:F(`toggle`,i);break;case`input`:we(i,s),F(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},F(`invalid`,i);break;case`textarea`:Me(i,s),F(`invalid`,i)}for(var c in We(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ti(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ti(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&F(`scroll`,i)}switch(n){case`input`:be(i),De(i,s,!0);break;case`textarea`:be(i),Ne(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Ei)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Pe(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[zi]=t,e[Bi]=i,uc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ge(n,i),n){case`dialog`:F(`cancel`,e),F(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:F(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<li.length;o++)F(li[o],e);o=i;break;case`source`:F(`error`,e),o=i;break;case`img`:case`image`:case`link`:F(`error`,e),F(`load`,e),o=i;break;case`details`:F(`toggle`,e),o=i;break;case`input`:we(e,i),o=Ce(e,i),F(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=O({},i,{value:void 0}),F(`invalid`,e);break;case`textarea`:Me(e,i),o=je(e,i),F(`invalid`,e);break;default:o=i}for(s in We(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?He(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Le(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Re(e,u):typeof u==`number`&&Re(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&F(`scroll`,e):u!=null&&x(e,s,u,c))}switch(n){case`input`:be(e),De(e,i,!1);break;case`textarea`:be(e),Ne(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+_e(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ae(e,!!i.multiple,i.defaultValue,!0):Ae(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Ei)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return mc(t),null;case 6:if(e&&t.stateNode!=null)fc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=Do(Eo.current),Do(wo.current),Fa(t)){if(i=t.stateNode,n=t.memoizedProps,i[zi]=t,(s=i.nodeValue!==n)&&(e=Da,e!==null))switch(e.tag){case 3:Ti(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ti(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zi]=t,t.stateNode=i}return mc(t),null;case 13:if(I(B),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&Oa!==null&&t.mode&1&&!(t.flags&128))Ia(),La(),t.flags|=98560,s=!1;else if(s=Fa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[zi]=t}else La(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;mc(t),s=!1}else ka!==null&&(Tl(ka),ka=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?el===0&&(el=3):Fl())),t.updateQueue!==null&&(t.flags|=4),mc(t),null);case 4:return ko(),e===null&&hi(t.stateNode.containerInfo),mc(t),null;case 10:return Ka(t.type._context),mc(t),null;case 17:return ra(t.type)&&ia(),mc(t),null;case 19:if(I(B),s=t.memoizedState,s===null)return mc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)pc(s,!1);else{if(el!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=Mo(e),c!==null){for(t.flags|=128,pc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(B,B.current&1|2),t.child}e=e.sibling}s.tail!==null&&j()>cl&&(t.flags|=128,i=!0,pc(s,!1),t.lanes=4194304)}}else{if(!i){if(e=Mo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!z)return mc(t),null}else 2*j()-s.renderingStartTime>cl&&n!==1073741824&&(t.flags|=128,i=!0,pc(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(mc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=j(),t.sibling=null,n=B.current,L(B,i?n&1|2:n&1),t);case 22:case 23:return jl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Qc&1073741824&&(mc(t),t.subtreeFlags&6&&(t.flags|=8192)):mc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function gc(e,t){switch(Ea(t),t.tag){case 1:return ra(t.type)&&ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ko(),I(ea),I($i),Po(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jo(t),null;case 13:if(I(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(B),null;case 4:return ko(),null;case 10:return Ka(t.type._context),null;case 22:case 23:return jl(),null;case 24:return null;default:return null}}var _c=!1,vc=!1,yc=typeof WeakSet==`function`?WeakSet:Set,W=null;function bc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){q(e,t,n)}else n.current=null}}function xc(e,t,n){try{n()}catch(n){q(e,t,n)}}var Sc=!1;function Cc(e,t){if(Di=yn,e=Br(),Vr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},yn=!1,W=t;W!==null;)if(t=W,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ba(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){q(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return h=Sc,Sc=!1,h}function wc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&xc(t,n,a)}i=i.next}while(i!==r)}}function Tc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Dc(e){var t=e.alternate;t!==null&&(e.alternate=null,Dc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zi],delete t[Bi],delete t[Hi],delete t[Ui],delete t[Wi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oc(e){return e.tag===5||e.tag===3||e.tag===4}function kc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}function jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jc(e,t,n),e=e.sibling;e!==null;)jc(e,t,n),e=e.sibling}var Mc=null,Nc=!1;function Pc(e,t,n){for(n=n.child;n!==null;)Fc(e,t,n),n=n.sibling}function Fc(e,t,n){if(M&&typeof M.onCommitFiberUnmount==`function`)try{M.onCommitFiberUnmount(At,n)}catch{}switch(n.tag){case 5:vc||bc(n,t);case 6:var r=Mc,i=Nc;Mc=null,Pc(e,t,n),Mc=r,Nc=i,Mc!==null&&(Nc?(e=Mc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Mc.removeChild(n.stateNode));break;case 18:Mc!==null&&(Nc?(e=Mc,n=n.stateNode,e.nodeType===8?Fi(e.parentNode,n):e.nodeType===1&&Fi(e,n),_n(e)):Fi(Mc,n.stateNode));break;case 4:r=Mc,i=Nc,Mc=n.stateNode.containerInfo,Nc=!0,Pc(e,t,n),Mc=r,Nc=i;break;case 0:case 11:case 14:case 15:if(!vc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&xc(n,t,o),i=i.next}while(i!==r)}Pc(e,t,n);break;case 1:if(!vc&&(bc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){q(n,t,e)}Pc(e,t,n);break;case 21:Pc(e,t,n);break;case 22:n.mode&1?(vc=(r=vc)||n.memoizedState!==null,Pc(e,t,n),vc=r):Pc(e,t,n);break;default:Pc(e,t,n)}}function Ic(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yc),t.forEach(function(t){var r=Jl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Lc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Mc=c.stateNode,Nc=!1;break a;case 3:Mc=c.stateNode.containerInfo,Nc=!0;break a;case 4:Mc=c.stateNode.containerInfo,Nc=!0;break a}c=c.return}if(Mc===null)throw Error(r(160));Fc(o,s,a),Mc=null,Nc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){q(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rc(t,e),t=t.sibling}function Rc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lc(t,e),zc(e),i&4){try{wc(3,e,e.return),Tc(3,e)}catch(t){q(e,e.return,t)}try{wc(5,e,e.return)}catch(t){q(e,e.return,t)}}break;case 1:Lc(t,e),zc(e),i&512&&n!==null&&bc(n,n.return);break;case 5:if(Lc(t,e),zc(e),i&512&&n!==null&&bc(n,n.return),e.flags&32){var a=e.stateNode;try{Re(a,``)}catch(t){q(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Te(a,o),Ge(c,s);var u=Ge(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?He(a,f):d===`dangerouslySetInnerHTML`?Le(a,f):d===`children`?Re(a,f):x(a,d,f,u)}switch(c){case`input`:Ee(a,o);break;case`textarea`:k(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ae(a,!!o.multiple,o.multiple?[]:``,!1):Ae(a,!!o.multiple,o.defaultValue,!0)):Ae(a,!!o.multiple,m,!1)}a[Bi]=o}catch(t){q(e,e.return,t)}}break;case 6:if(Lc(t,e),zc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){q(e,e.return,t)}}break;case 3:if(Lc(t,e),zc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_n(t.containerInfo)}catch(t){q(e,e.return,t)}break;case 4:Lc(t,e),zc(e);break;case 13:Lc(t,e),zc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(sl=j())),i&4&&Ic(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(vc=(u=vc)||d,Lc(t,e),vc=u):Lc(t,e),zc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(f=W=d;W!==null;){switch(p=W,m=p.child,p.tag){case 0:case 11:case 14:case 15:wc(4,p,p.return);break;case 1:bc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){q(i,n,e)}}break;case 5:bc(p,p.return);break;case 22:if(p.memoizedState!==null){Uc(f);continue}}m===null?Uc(f):(m.return=p,W=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Ve(`display`,s))}catch(t){q(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){q(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lc(t,e),zc(e),i&4&&Ic(e);break;case 21:break;default:Lc(t,e),zc(e)}}function zc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Oc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Re(a,``),i.flags&=-33),jc(e,kc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Ac(e,kc(e),o);break;default:throw Error(r(161))}}catch(t){q(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bc(e,t,n){W=e,Vc(e,t,n)}function Vc(e,t,n){for(var r=!!(e.mode&1);W!==null;){var i=W,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_c;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||vc;s=_c;var l=vc;if(_c=o,(vc=c)&&!l)for(W=i;W!==null;)o=W,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Wc(i):(c.return=o,W=c);for(;a!==null;)W=a,Vc(a,t,n),a=a.sibling;W=i,_c=s,vc=l}Hc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,W=a):Hc(e,t,n)}}function Hc(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:vc||Tc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!vc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ba(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&co(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}co(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&_n(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}vc||t.flags&512&&Ec(t)}catch(e){q(t,t.return,e)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Uc(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Wc(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tc(4,t)}catch(e){q(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){q(t,i,e)}}var a=t.return;try{Ec(t)}catch(e){q(t,a,e)}break;case 5:var o=t.return;try{Ec(t)}catch(e){q(t,o,e)}}}catch(e){q(t,t.return,e)}if(t===e){W=null;break}var s=t.sibling;if(s!==null){s.return=t.return,W=s;break}W=t.return}}var Gc=Math.ceil,Kc=S.ReactCurrentDispatcher,qc=S.ReactCurrentOwner,Jc=S.ReactCurrentBatchConfig,G=0,Yc=null,Xc=null,Zc=0,Qc=0,$c=Zi(0),el=0,tl=null,nl=0,rl=0,il=0,al=null,ol=null,sl=0,cl=1/0,ll=null,ul=!1,dl=null,fl=null,pl=!1,ml=null,hl=0,gl=0,K=null,_l=-1,vl=0;function yl(){return G&6?j():_l===-1?_l=j():_l}function bl(e){return e.mode&1?G&2&&Zc!==0?Zc&-Zc:za.transition===null?(e=N,e===0?(e=window.event,e=e===void 0?16:Tn(e.type),e):e):(vl===0&&(vl=Ut()),vl):1}function xl(e,t,n,i){if(50<gl)throw gl=0,K=null,Error(r(185));Gt(e,n,i),(!(G&2)||e!==Yc)&&(e===Yc&&(!(G&2)&&(rl|=n),el===4&&Dl(e,Zc)),Sl(e,i),n===1&&G===0&&!(t.mode&1)&&(cl=j()+500,ua&&ma()))}function Sl(e,t){var n=e.callbackNode;Vt(e,t);var r=zt(e,e===Yc?Zc:0);if(r===0)n!==null&&xt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xt(n),t===1)e.tag===0?pa(Ol.bind(null,e)):fa(Ol.bind(null,e)),Ni(function(){!(G&6)&&ma()}),n=null;else{switch(Jt(r)){case 1:n=Tt;break;case 4:n=Et;break;case 16:n=Dt;break;case 536870912:n=kt;break;default:n=Dt}n=Xl(n,Cl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cl(e,t){if(_l=-1,vl=0,G&6)throw Error(r(327));var n=e.callbackNode;if(Ul()&&e.callbackNode!==n)return null;var i=zt(e,e===Yc?Zc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Il(e,i);else{t=i;var a=G;G|=2;var o=Pl();(Yc!==e||Zc!==t)&&(ll=null,cl=j()+500,Ml(e,t));do try{Rl();break}catch(t){Nl(e,t)}while(1);Ga(),Kc.current=o,G=a,Xc===null?(Yc=null,Zc=0,t=el):t=0}if(t!==0){if(t===2&&(a=Ht(e),a!==0&&(i=a,t=wl(e,a))),t===1)throw n=tl,Ml(e,0),Dl(e,i),Sl(e,j()),n;if(t===6)Dl(e,i);else{if(a=e.current.alternate,!(i&30)&&!El(a)&&(t=Il(e,i),t===2&&(o=Ht(e),o!==0&&(i=o,t=wl(e,o))),t===1))throw n=tl,Ml(e,0),Dl(e,i),Sl(e,j()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Vl(e,ol,ll);break;case 3:if(Dl(e,i),(i&130023424)===i&&(t=sl+500-j(),10<t)){if(zt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){yl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ai(Vl.bind(null,e,ol,ll),t);break}Vl(e,ol,ll);break;case 4:if(Dl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Mt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=j()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Gc(i/1960))-i,10<i){e.timeoutHandle=Ai(Vl.bind(null,e,ol,ll),i);break}Vl(e,ol,ll);break;case 5:Vl(e,ol,ll);break;default:throw Error(r(329))}}}return Sl(e,j()),e.callbackNode===n?Cl.bind(null,e):null}function wl(e,t){var n=al;return e.current.memoizedState.isDehydrated&&(Ml(e,t).flags|=256),e=Il(e,t),e!==2&&(t=ol,ol=n,t!==null&&Tl(t)),e}function Tl(e){ol===null?ol=e:ol.push.apply(ol,e)}function El(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Fr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dl(e,t){for(t&=~il,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function Ol(e){if(G&6)throw Error(r(327));Ul();var t=zt(e,0);if(!(t&1))return Sl(e,j()),null;var n=Il(e,t);if(e.tag!==0&&n===2){var i=Ht(e);i!==0&&(t=i,n=wl(e,i))}if(n===1)throw n=tl,Ml(e,0),Dl(e,t),Sl(e,j()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vl(e,ol,ll),Sl(e,j()),null}function kl(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(cl=j()+500,ua&&ma())}}function Al(e){ml!==null&&ml.tag===0&&!(G&6)&&Ul();var t=G;G|=1;var n=Jc.transition,r=N;try{if(Jc.transition=null,N=1,e)return e()}finally{N=r,Jc.transition=n,G=t,!(G&6)&&ma()}}function jl(){Qc=$c.current,I($c)}function Ml(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ji(n)),Xc!==null)for(n=Xc.return;n!==null;){var r=n;switch(Ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ia();break;case 3:ko(),I(ea),I($i),Po();break;case 5:jo(r);break;case 4:ko();break;case 13:I(B);break;case 19:I(B);break;case 10:Ka(r.type._context);break;case 22:case 23:jl()}n=n.return}if(Yc=e,Xc=e=tu(e.current,null),Zc=Qc=t,el=0,tl=null,il=rl=nl=0,ol=al=null,Xa!==null){for(t=0;t<Xa.length;t++)if(n=Xa[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Xa=null}return e}function Nl(e,t){do{var n=Xc;try{if(Ga(),Fo.current=Es,Ro){for(var i=V.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Ro=!1}if(Lo=0,U=H=V=null,zo=!1,Bo=0,qc.current=null,n===null||n.return===null){el=1,tl=t,Xc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Zc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ls(s);if(m!==null){m.flags&=-257,Rs(m,s,c,o,t),m.mode&1&&Is(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){Is(o,u,t),Fl();break a}l=Error(r(426))}else if(z&&c.mode&1){var _=Ls(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Rs(_,s,c,o,t),Ra(As(l,c));break a}}o=l=As(l,c),el!==4&&(el=2),al===null?al=[o]:al.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ps(o,l,t);oo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(fl===null||!fl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Fs(o,c,t);oo(o,x);break a}}o=o.return}while(o!==null)}Bl(n)}catch(e){t=e,Xc===n&&n!==null&&(Xc=n=n.return);continue}break}while(1)}function Pl(){var e=Kc.current;return Kc.current=Es,e===null?Es:e}function Fl(){(el===0||el===3||el===2)&&(el=4),Yc===null||!(nl&268435455)&&!(rl&268435455)||Dl(Yc,Zc)}function Il(e,t){var n=G;G|=2;var i=Pl();(Yc!==e||Zc!==t)&&(ll=null,Ml(e,t));do try{Ll();break}catch(t){Nl(e,t)}while(1);if(Ga(),G=n,Kc.current=i,Xc!==null)throw Error(r(261));return Yc=null,Zc=0,el}function Ll(){for(;Xc!==null;)zl(Xc)}function Rl(){for(;Xc!==null&&!St();)zl(Xc)}function zl(e){var t=Yl(e.alternate,e,Qc);e.memoizedProps=e.pendingProps,t===null?Bl(e):Xc=t,qc.current=null}function Bl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gc(n,t),n!==null){n.flags&=32767,Xc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{el=6,Xc=null;return}}else if(n=hc(n,t,Qc),n!==null){Xc=n;return}if(t=t.sibling,t!==null){Xc=t;return}Xc=t=e}while(t!==null);el===0&&(el=5)}function Vl(e,t,n){var r=N,i=Jc.transition;try{Jc.transition=null,N=1,Hl(e,t,n,r)}finally{Jc.transition=i,N=r}return null}function Hl(e,t,n,i){do Ul();while(ml!==null);if(G&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kt(e,o),e===Yc&&(Xc=Yc=null,Zc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,Xl(Dt,function(){return Ul(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Jc.transition,Jc.transition=null;var s=N;N=1;var c=G;G|=4,qc.current=null,Cc(e,n),Rc(n,e),Hr(Oi),yn=!!Di,Oi=Di=null,e.current=n,Bc(n,e,a),Ct(),G=c,N=s,Jc.transition=o}else e.current=n;if(pl&&(pl=!1,ml=e,hl=a),o=e.pendingLanes,o===0&&(fl=null),jt(n.stateNode,i),Sl(e,j()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(ul)throw ul=!1,e=dl,dl=null,e;return hl&1&&e.tag!==0&&Ul(),o=e.pendingLanes,o&1?e===K?gl++:(gl=0,K=e):gl=0,ma(),null}function Ul(){if(ml!==null){var e=Jt(hl),t=Jc.transition,n=N;try{if(Jc.transition=null,N=16>e?16:e,ml===null)var i=!1;else{if(e=ml,ml=null,hl=0,G&6)throw Error(r(331));var a=G;for(G|=4,W=e.current;W!==null;){var o=W,s=o.child;if(W.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:wc(8,d,o)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var p=d.sibling,m=d.return;if(Dc(d),d===u){W=null;break}if(p!==null){p.return=m,W=p;break}W=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}W=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,W=s;else b:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,W=v;break b}W=o.return}}var y=e.current;for(W=y;W!==null;){s=W;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,W=b;else b:for(s=y;W!==null;){if(c=W,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Tc(9,c)}}catch(e){q(c,c.return,e)}if(c===s){W=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,W=x;break b}W=c.return}}if(G=a,ma(),M&&typeof M.onPostCommitFiberRoot==`function`)try{M.onPostCommitFiberRoot(At,e)}catch{}i=!0}return i}finally{N=n,Jc.transition=t}}return!1}function Wl(e,t,n){t=As(n,t),t=Ps(e,t,1),e=io(e,t,1),t=yl(),e!==null&&(Gt(e,1,t),Sl(e,t))}function q(e,t,n){if(e.tag===3)Wl(e,e,n);else for(;t!==null;){if(t.tag===3){Wl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(fl===null||!fl.has(r))){e=As(n,e),e=Fs(t,e,1),t=io(t,e,1),e=yl(),t!==null&&(Gt(t,1,e),Sl(t,e));break}}t=t.return}}function Gl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=yl(),e.pingedLanes|=e.suspendedLanes&n,Yc===e&&(Zc&n)===n&&(el===4||el===3&&(Zc&130023424)===Zc&&500>j()-sl?Ml(e,0):il|=n),Sl(e,t)}function Kl(e,t){t===0&&(e.mode&1?(t=Lt,Lt<<=1,!(Lt&130023424)&&(Lt=4194304)):t=1);var n=yl();e=$a(e,t),e!==null&&(Gt(e,t,n),Sl(e,n))}function ql(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kl(e,n)}function Jl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Kl(e,n)}var Yl=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||ea.current)Bs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Bs=!1,lc(e,t,n);Bs=!!(e.flags&131072)}}else Bs=!1,z&&t.flags&1048576&&wa(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;sc(e,t),e=t.pendingProps;var a=na(t,$i.current);Ja(t,n),a=Wo(null,t,i,e,a,n);var o=Go();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ra(i)?(o=!0,sa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,to(t),a.updater=fo,t.stateNode=a,a._reactInternals=t,go(t,i,e,n),t=Ys(null,t,i,!0,o,n)):(t.tag=0,z&&o&&Ta(t),Vs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(sc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=eu(i),e=Ba(i,e),a){case 0:t=qs(null,t,i,e,n);break a;case 1:t=Js(null,t,i,e,n);break a;case 11:t=Hs(null,t,i,e,n);break a;case 14:t=Us(null,t,i,Ba(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ba(i,a),qs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ba(i,a),Js(e,t,i,a,n);case 3:a:{if(Xs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,no(e,t),so(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=As(Error(r(423)),t),t=Zs(e,t,i,n,a);break a}if(i!==a){a=As(Error(r(424)),t),t=Zs(e,t,i,n,a);break a}for(Oa=Ii(t.stateNode.containerInfo.firstChild),Da=t,z=!0,ka=null,n=So(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(La(),i===a){t=cc(e,t,n);break a}Vs(e,t,i,n)}t=t.child}return t;case 5:return Ao(t),e===null&&Na(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,ki(i,a)?s=null:o!==null&&ki(i,o)&&(t.flags|=32),Ks(e,t),Vs(e,t,s,n),t.child;case 6:return e===null&&Na(t),null;case 13:return ec(e,t,n);case 4:return Oo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=xo(t,null,i,n):Vs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ba(i,a),Hs(e,t,i,a,n);case 7:return Vs(e,t,t.pendingProps,n),t.child;case 8:return Vs(e,t,t.pendingProps.children,n),t.child;case 12:return Vs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,L(Va,i._currentValue),i._currentValue=s,o!==null){if(Fr(o.value,s)){if(o.children===a.children&&!ea.current){t=cc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=ro(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qa(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),qa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Vs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ja(t,n),a=Ya(a),i=i(a),t.flags|=1,Vs(e,t,i,n),t.child;case 14:return i=t.type,a=Ba(i,t.pendingProps),a=Ba(i.type,a),Us(e,t,i,a,n);case 15:return Ws(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ba(i,a),sc(e,t),t.tag=1,ra(i)?(e=!0,sa(t)):e=!1,Ja(t,n),mo(t,i,a),go(t,i,a,n),Ys(null,t,i,!0,e,n);case 19:return oc(e,t,n);case 22:return Gs(e,t,n)}throw Error(r(156,t.tag))};function Xl(e,t){return bt(e,t)}function Zl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ql(e,t,n,r){return new Zl(e,t,n,r)}function $l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eu(e){if(typeof e==`function`)return+!!$l(e);if(e!=null){if(e=e.$$typeof,e===re)return 11;if(e===oe)return 14}return 2}function tu(e,t){var n=e.alternate;return n===null?(n=Ql(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nu(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)$l(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case T:return ru(n.children,a,o,t);case ee:s=8,a|=8;break;case te:return e=Ql(12,n,t,a|2),e.elementType=te,e.lanes=o,e;case ie:return e=Ql(13,n,t,a),e.elementType=ie,e.lanes=o,e;case ae:return e=Ql(19,n,t,a),e.elementType=ae,e.lanes=o,e;case se:return iu(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ne:s=10;break a;case E:s=9;break a;case re:s=11;break a;case oe:s=14;break a;case D:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Ql(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function ru(e,t,n,r){return e=Ql(7,e,r,t),e.lanes=n,e}function iu(e,t,n,r){return e=Ql(22,e,r,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function au(e,t,n){return e=Ql(6,e,null,t),e.lanes=n,e}function ou(e,t,n){return t=Ql(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function su(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wt(0),this.expirationTimes=Wt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cu(e,t,n,r,i,a,o,s,c){return e=new su(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Ql(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},to(a),e}function lu(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function uu(e){if(!e)return Qi;e=e._reactInternals;a:{if(mt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ra(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ra(n))return oa(e,n,t)}return t}function du(e,t,n,r,i,a,o,s,c){return e=cu(n,r,!0,e,i,a,o,s,c),e.context=uu(null),n=e.current,r=yl(),i=bl(n),a=ro(r,i),a.callback=t??null,io(n,a,i),e.current.lanes=i,Gt(e,i,r),Sl(e,r),e}function fu(e,t,n,r){var i=t.current,a=yl(),o=bl(i);return n=uu(n),t.context===null?t.context=n:t.pendingContext=n,t=ro(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=io(i,t,o),e!==null&&(xl(e,i,o,a),ao(e,i,o)),o}function pu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function gu(){return null}var _u=typeof reportError==`function`?reportError:function(e){console.error(e)};function vu(e){this._internalRoot=e}yu.prototype.render=vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));fu(e,t,null,null)},yu.prototype.unmount=vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Al(function(){fu(null,e,null,null)}),t[Vi]=null}};function yu(e){this._internalRoot=e}yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&fn(e)}};function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function Su(){}function Cu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=pu(o);a.call(e)}}var o=du(t,r,e,0,null,!1,!1,``,Su);return e._reactRootContainer=o,e[Vi]=o.current,hi(e.nodeType===8?e.parentNode:e),Al(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=pu(c);s.call(e)}}var c=cu(e,0,!1,null,null,!1,!1,``,Su);return e._reactRootContainer=c,e[Vi]=c.current,hi(e.nodeType===8?e.parentNode:e),Al(function(){fu(t,c,n,r)}),c}function Tu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=pu(o);s.call(e)}}fu(t,o,e,i)}else o=Cu(n,t,e,i,r);return pu(o)}P=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rt(t.pendingLanes);n!==0&&(qt(t,n|1),Sl(t,j()),!(G&6)&&(cl=j()+500,ma()))}break;case 13:Al(function(){var t=$a(e,1);t!==null&&xl(t,e,1,yl())}),hu(e,1)}},Yt=function(e){if(e.tag===13){var t=$a(e,134217728);t!==null&&xl(t,e,134217728,yl()),hu(e,134217728)}},Xt=function(e){if(e.tag===13){var t=bl(e),n=$a(e,t);n!==null&&xl(n,e,t,yl()),hu(e,t)}},Zt=function(){return N},Qt=function(e,t){var n=N;try{return N=e,t()}finally{N=n}},Je=function(e,t,n){switch(t){case`input`:if(Ee(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ji(i);if(!a)throw Error(r(90));xe(i),Ee(i,a)}}}break;case`textarea`:k(e,n);break;case`select`:t=n.value,t!=null&&Ae(e,!!n.multiple,t,!1)}},et=kl,tt=Al;var Eu={usingClientEntryPoint:!1,Events:[Ki,qi,Ji,Qe,$e,kl]},Du={findFiberByHostInstance:Gi,bundleType:0,version:`18.2.0`,rendererPackageName:`react-dom`},Ou={bundleType:Du.bundleType,version:Du.version,rendererPackageName:Du.rendererPackageName,rendererConfig:Du.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:S.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vt(e),e===null?null:e.stateNode},findFiberByHostInstance:Du.findFiberByHostInstance||gu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.2.0-next-9e3b772b8-20220608`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{At=ku.inject(Ou),M=ku}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(t))throw Error(r(200));return lu(e,t,null,n)},e.createRoot=function(e,t){if(!bu(e))throw Error(r(299));var n=!1,i=``,a=_u;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=cu(e,1,!1,null,null,n,!1,i,a),e[Vi]=t.current,hi(e.nodeType===8?e.parentNode:e),new vu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=vt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Al(e)},e.hydrate=function(e,t,n){if(!xu(t))throw Error(r(200));return Tu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!bu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=_u;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=du(t,null,e,1,n??null,a,!1,o,s),e[Vi]=t.current,hi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new yu(t)},e.render=function(e,t,n){if(!xu(t))throw Error(r(200));return Tu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!xu(e))throw Error(r(40));return e._reactRootContainer?(Al(function(){Tu(null,null,e,!1,function(){e._reactRootContainer=null,e[Vi]=null})}),!0):!1},e.unstable_batchedUpdates=kl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!xu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Tu(e,t,n,!1,i)},e.version=`18.2.0-next-9e3b772b8-20220608`})),Eu=s(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Tu()})),Du=u(s((e=>{var t=Eu();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot}))()),Ou=function(){return Ou=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Ou.apply(this,arguments)};function ku(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Au=s(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),J=`-ms-`,ju=`-moz-`,Y=`-webkit-`,Mu=`comm`,Nu=`rule`,Pu=`decl`,Fu=`@import`,Iu=`@keyframes`,Lu=`@layer`,Ru=Math.abs,zu=String.fromCharCode,Bu=Object.assign;function Vu(e,t){return Gu(e,0)^45?(((t<<2^Gu(e,0))<<2^Gu(e,1))<<2^Gu(e,2))<<2^Gu(e,3):0}function Hu(e){return e.trim()}function Uu(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function Wu(e,t,n){return e.indexOf(t,n)}function Gu(e,t){return e.charCodeAt(t)|0}function Ku(e,t,n){return e.slice(t,n)}function qu(e){return e.length}function Ju(e){return e.length}function Yu(e,t){return t.push(e),e}function Xu(e,t){return e.map(t).join(``)}function Zu(e,t){return e.filter(function(e){return!Uu(e,t)})}var Qu=1,$u=1,ed=0,td=0,nd=0,rd=``;function id(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Qu,column:$u,length:o,return:``,siblings:s}}function ad(e,t){return Bu(id(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function od(e){for(;e.root;)e=ad(e.root,{children:[e]});Yu(e,e.siblings)}function sd(){return nd}function cd(){return nd=td>0?Gu(rd,--td):0,$u--,nd===10&&($u=1,Qu--),nd}function ld(){return nd=td<ed?Gu(rd,td++):0,$u++,nd===10&&($u=1,Qu++),nd}function ud(){return Gu(rd,td)}function dd(){return td}function fd(e,t){return Ku(rd,e,t)}function pd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function md(e){return Qu=$u=1,ed=qu(rd=e),td=0,[]}function hd(e){return rd=``,e}function gd(e){return Hu(fd(td-1,yd(e===91?e+2:e===40?e+1:e)))}function _d(e){for(;(nd=ud())&&nd<33;)ld();return pd(e)>2||pd(nd)>3?``:` `}function vd(e,t){for(;--t&&ld()&&!(nd<48||nd>102||nd>57&&nd<65||nd>70&&nd<97););return fd(e,dd()+(t<6&&ud()==32&&ld()==32))}function yd(e){for(;ld();)switch(nd){case e:return td;case 34:case 39:e!==34&&e!==39&&yd(nd);break;case 40:e===41&&yd(e);break;case 92:ld()}return td}function bd(e,t){for(;ld()&&e+nd!==57&&(e+nd!==84||ud()!==47););return`/*`+fd(t,td-1)+`*`+zu(e===47?e:ld())}function xd(e){for(;!pd(ud());)ld();return fd(e,td)}function Sd(e){return hd(Cd(``,null,null,null,[``],e=md(e),0,[0],e))}function Cd(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=ld()){case 40:if(m!=108&&Gu(C,d-1)==58){Wu(C+=X(gd(v),`&`,`&\f`),`&\f`,Ru(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=gd(v);break;case 9:case 10:case 13:case 32:C+=_d(m);break;case 92:C+=vd(dd()-1,7);continue;case 47:switch(ud()){case 42:case 47:Yu(Td(bd(ld(),dd()),t,n,c),c);break;default:C+=`/`}break;case 123*h:s[l++]=qu(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=X(C,/\f/g,``)),p>0&&qu(C)-d&&Yu(p>32?Ed(C+`;`,r,n,d-1,c):Ed(X(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(Yu(S=wd(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Cd(C,t,S,S,b,a,d,s,x);else switch(f===99&&Gu(C,3)===110?100:f){case 100:case 108:case 109:case 115:Cd(e,S,S,r&&Yu(wd(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x);break;default:Cd(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+qu(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&cd()==125)continue}switch(C+=zu(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(qu(C)-1)*_,_=1;break;case 64:ud()===45&&(C+=gd(ld())),f=ud(),u=d=qu(y=C+=xd(dd())),v++;break;case 45:m===45&&qu(C)==2&&(h=0)}}return a}function wd(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Ju(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=Ku(e,f+1,f=Ru(g=o[h])),b=e;v<m;++v)(b=Hu(g>0?p[v]+` `+y:X(y,/&\f/g,p[v])))&&(c[_++]=b);return id(e,t,n,i===0?Nu:s,c,l,u,d)}function Td(e,t,n,r){return id(e,t,n,Mu,zu(sd()),Ku(e,2,-2),0,r)}function Ed(e,t,n,r,i){return id(e,t,n,Pu,Ku(e,0,r),Ku(e,r+1,-1),r,i)}function Dd(e,t,n){switch(Vu(e,t)){case 5103:return Y+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 4789:return ju+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+ju+e+J+e+e;case 5936:switch(Gu(e,t+11)){case 114:return Y+e+J+X(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return Y+e+J+X(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return Y+e+J+X(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return Y+e+J+e+e;case 6165:return Y+e+J+`flex-`+e+e;case 5187:return Y+e+X(e,/(\w+).+(:[^]+)/,Y+`box-$1$2`+J+`flex-$1$2`)+e;case 5443:return Y+e+J+`flex-item-`+X(e,/flex-|-self/g,``)+(Uu(e,/flex-|baseline/)?``:J+`grid-row-`+X(e,/flex-|-self/g,``))+e;case 4675:return Y+e+J+`flex-line-pack`+X(e,/align-content|flex-|-self/g,``)+e;case 5548:return Y+e+J+X(e,`shrink`,`negative`)+e;case 5292:return Y+e+J+X(e,`basis`,`preferred-size`)+e;case 6060:return Y+`box-`+X(e,`-grow`,``)+Y+e+J+X(e,`grow`,`positive`)+e;case 4554:return Y+X(e,/([^-])(transform)/g,`$1`+Y+`$2`)+e;case 6187:return X(X(X(e,/(zoom-|grab)/,Y+`$1`),/(image-set)/,Y+`$1`),e,``)+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,Y+`box-pack:$3`+J+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+Y+e+e;case 4200:if(!Uu(e,/flex-|baseline/))return J+`grid-column-align`+Ku(e,t)+e;break;case 2592:case 3360:return J+X(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Uu(e.props,/grid-\w+-end/)})?~Wu(e+(n=n[t].value),`span`,0)?e:J+X(e,`-start`,``)+e+J+`grid-row-span:`+(~Wu(n,`span`,0)?Uu(n,/\d+/):+Uu(n,/\d+/)-Uu(e,/\d+/))+`;`:J+X(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Uu(e.props,/grid-\w+-start/)})?e:J+X(X(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,Y+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qu(e)-1-t>6)switch(Gu(e,t+1)){case 109:if(Gu(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,`$1`+Y+`$2-$3$1`+ju+(Gu(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Wu(e,`stretch`,0)?Dd(X(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return X(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return J+n+`:`+r+s+(i?J+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(Gu(e,t+6)===121)return X(e,`:`,`:`+Y)+e;break;case 6444:switch(Gu(e,Gu(e,14)===45?18:11)){case 120:return X(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+Y+(Gu(e,14)===45?`inline-`:``)+`box$3$1`+Y+`$2$3$1`+J+`$2box$3`)+e;case 100:return X(e,`:`,`:`+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return X(e,`scroll-`,`scroll-snap-`)+e}return e}function Od(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function kd(e,t,n,r){switch(e.type){case Lu:if(e.children.length)break;case Fu:case Pu:return e.return=e.return||e.value;case Mu:return``;case Iu:return e.return=e.value+`{`+Od(e.children,r)+`}`;case Nu:if(!qu(e.value=e.props.join(`,`)))return``}return qu(n=Od(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ad(e){var t=Ju(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function jd(e){return function(t){t.root||(t=t.return)&&e(t)}}function Md(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pu:e.return=Dd(e.value,e.length,n);return;case Iu:return Od([ad(e,{value:X(e.value,`@`,`@`+Y)})],r);case Nu:if(e.length)return Xu(n=e.props,function(t){switch(Uu(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:od(ad(e,{props:[X(t,/:(read-\w+)/,`:`+ju+`$1`)]})),od(ad(e,{props:[t]})),Bu(e,{props:Zu(n,r)});break;case`::placeholder`:od(ad(e,{props:[X(t,/:(plac\w+)/,`:`+Y+`input-$1`)]})),od(ad(e,{props:[X(t,/:(plac\w+)/,`:`+ju+`$1`)]})),od(ad(e,{props:[X(t,/:(plac\w+)/,J+`input-$1`)]})),od(ad(e,{props:[t]})),Bu(e,{props:Zu(n,r)})}return``})}}var Nd=u(Au()),Pd={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fd=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Id=`active`,Ld=`data-styled-version`,Rd=`6.1.8`,zd=`/*!sc*/
`,Bd=typeof window<`u`&&`HTMLElement`in window,Vd=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),Hd={},Ud=Object.freeze([]),Wd=Object.freeze({});function Gd(e,t,n){return n===void 0&&(n=Wd),e.theme!==n.theme&&e.theme||t||n.theme}var Kd=new Set(`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.track.u.ul.use.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`)),qd=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jd=/(^-|-$)/g;function Yd(e){return e.replace(qd,`-`).replace(Jd,``)}var Xd=/(a)(d)/gi,Zd=52,Qd=function(e){return String.fromCharCode(e+(e>25?39:97))};function $d(e){var t,n=``;for(t=Math.abs(e);t>Zd;t=t/Zd|0)n=Qd(t%Zd)+n;return(Qd(t%Zd)+n).replace(Xd,`$1-$2`)}var ef,tf=5381,nf=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rf=function(e){return nf(tf,e)};function af(e){return $d(rf(e)>>>0)}function of(e){return e.displayName||e.name||`Component`}function sf(e){return typeof e==`string`&&!0}var cf=typeof Symbol==`function`&&Symbol.for,lf=cf?Symbol.for(`react.memo`):60115,uf=cf?Symbol.for(`react.forward_ref`):60112,df={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ff={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mf=((ef={})[uf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ef[lf]=pf,ef);function hf(e){return(`type`in(t=e)&&t.type.$$typeof)===lf?pf:`$$typeof`in e?mf[e.$$typeof]:df;var t}var gf=Object.defineProperty,_f=Object.getOwnPropertyNames,vf=Object.getOwnPropertySymbols,yf=Object.getOwnPropertyDescriptor,bf=Object.getPrototypeOf,xf=Object.prototype;function Sf(e,t,n){if(typeof t!=`string`){if(xf){var r=bf(t);r&&r!==xf&&Sf(e,r,n)}var i=_f(t);vf&&(i=i.concat(vf(t)));for(var a=hf(e),o=hf(t),s=0;s<i.length;++s){var c=i[s];if(!(c in ff||n&&n[c]||o&&c in o||a&&c in a)){var l=yf(t,c);try{gf(e,c,l)}catch{}}}}return e}function Cf(e){return typeof e==`function`}function wf(e){return typeof e==`object`&&`styledComponentId`in e}function Tf(e,t){return e&&t?`${e} ${t}`:e||t||``}function Ef(e,t){if(e.length===0)return``;for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Df(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Of(e,t,n){if(n===void 0&&(n=!1),!n&&!Df(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Of(e[r],t[r]);else if(Df(t))for(var r in t)e[r]=Of(e[r],t[r]);return e}function kf(e,t){Object.defineProperty(e,"toString",{value:t})}function Af(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var jf=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Af(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=`${this.tag.getRule(a)}${zd}`;return t},e}(),Mf=new Map,Nf=new Map,Pf=1,Ff=function(e){if(Mf.has(e))return Mf.get(e);for(;Nf.has(Pf);)Pf++;var t=Pf++;return Mf.set(e,t),Nf.set(t,e),t},If=function(e,t){Pf=t+1,Mf.set(e,t),Nf.set(t,e)},Lf=`style[${Fd}][${Ld}="${Rd}"]`,Rf=RegExp(`^${Fd}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),zf=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Bf=function(e,t){for(var n=(t.textContent??``).split(zd),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(Rf);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(If(l,c),zf(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}};function Vf(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var Hf=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${Fd}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(Fd,Id),r.setAttribute(Ld,Rd);var o=Vf();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},Uf=function(){function e(e){this.element=Hf(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Af(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),Wf=function(){function e(e){this.element=Hf(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),Gf=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),Kf=Bd,qf={isServer:!Bd,useCSSOMInjection:!Vd},Jf=function(){function e(e,t,n){e===void 0&&(e=Wd),t===void 0&&(t={});var r=this;this.options=Ou(Ou({},qf),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Bd&&Kf&&(Kf=!1,function(e){for(var t=document.querySelectorAll(Lf),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Fd)!==Id&&(Bf(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this)),kf(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return Nf.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i),o=t.getGroup(n);if(a===void 0||o.length===0)return`continue`;var s=`${Fd}.g${n}[id="${i}"]`,c=``;a!==void 0&&a.forEach(function(e){e.length>0&&(c+=`${e},`)}),r+=`${o}${s}{content:"${c}"}${zd}`},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return Ff(e)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ou(Ou({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Gf(n):t?new Uf(n):new Wf(n)}(this.options),new jf(e));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Ff(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ff(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Ff(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yf=/&/g,Xf=/^\s*\/\/.*$/gm;function Zf(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=Zf(e.children,t)),e})}function Qf(e){var t,n,r,i=e===void 0?Wd:e,a=i.options,o=a===void 0?Wd:a,s=i.plugins,c=s===void 0?Ud:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(e.props[0]=e.props[0].replace(Yf,n).replace(r,l))}),o.prefix&&u.push(Md),u.push(kd);var d=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=RegExp(`\\${n}\\b`,`g`);var c=e.replace(Xf,``),l=Sd(a||i?`${a} ${i} { ${c} }`:c);o.namespace&&(l=Zf(l,o.namespace));var d=[];return Od(l,Ad(u.concat(jd(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||Af(15),nf(e,t.name)},tf).toString():``,d}var $f=new Jf,ep=Qf(),tp=g.createContext({shouldForwardProp:void 0,styleSheet:$f,stylis:ep});tp.Consumer;var np=g.createContext(void 0);function rp(){return(0,g.useContext)(tp)}function ip(e){var t=(0,g.useState)(e.stylisPlugins),n=t[0],r=t[1],i=rp().styleSheet,a=(0,g.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),o=(0,g.useMemo)(function(){return Qf({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,g.useEffect)(function(){(0,Nd.default)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,g.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:o}},[e.shouldForwardProp,a,o]);return g.createElement(tp.Provider,{value:s},g.createElement(np.Provider,{value:o},e.children))}var ap=function(){function e(e,t){var n=this;this.inject=function(e,t){t===void 0&&(t=ep);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,kf(this,function(){throw Af(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=ep),this.name+e.hash},e}(),op=function(e){return e>=`A`&&e<=`Z`};function sp(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;op(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var cp=function(e){return e==null||!1===e||e===``},lp=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!cp(a)&&(Array.isArray(a)&&a.isCss||Cf(a)?r.push(`${sp(i)}:`,a,`;`):Df(a)?r.push.apply(r,ku(ku([`${i} {`],lp(a),!1),[`}`],!1)):r.push(`${sp(i)}: ${t=i,(n=a)==null||typeof n==`boolean`||n===``?``:typeof n!=`number`||n===0||t in Pd||t.startsWith(`--`)?String(n).trim():`${n}px`};`))}return r};function up(e,t,n,r){if(cp(e))return[];if(wf(e))return[`.${e.styledComponentId}`];if(Cf(e))return!Cf(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:up(e(t),t,n,r);var i;return e instanceof ap?n?(e.inject(n,r),[e.getName(r)]):[e]:Df(e)?lp(e):Array.isArray(e)?Array.prototype.concat.apply(Ud,e.map(function(e){return up(e,t,n,r)})):[e.toString()]}function dp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Cf(n)&&!wf(n))return!1}return!0}var fp=rf(Rd),pp=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&dp(e),this.componentId=t,this.baseHash=nf(fp,t),this.baseStyle=n,Jf.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;if(this.isStatic&&!n.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Tf(r,this.staticRulesId);else{var i=Ef(up(this.rules,e,t,n)),a=$d(nf(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Tf(r,a),this.staticRulesId=a}}else{for(var s=nf(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Ef(up(u,e,t,n));s=nf(s,d+l),c+=d}}if(c){var f=$d(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(c,`.${f}`,void 0,this.componentId)),r=Tf(r,f)}}return r},e}(),mp=g.createContext(void 0);mp.Consumer;function hp(e){var t=g.useContext(mp),n=(0,g.useMemo)(function(){return function(e,t){if(!e)throw Af(14);if(Cf(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Af(8);return t?Ou(Ou({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?g.createElement(mp.Provider,{value:n},e.children):null}var gp={};function _p(e,t,n){var r=wf(e),i=e,a=!sf(e),o=t.attrs,s=o===void 0?Ud:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?Yd(e):`sc`;gp[n]=(gp[n]||0)+1;var r=`${n}-${af(Rd+n+gp[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return sf(e)?`styled.${e}`:`Styled(${of(e)})`}(e):u,f=t.displayName&&t.componentId?`${Yd(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;m=function(e,t){return h(e,t)&&_(e,t)}}else m=h}var v=new pp(n,f,r?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=g.useContext(mp),u=rp(),d=e.shouldForwardProp||u.shouldForwardProp,f=Gd(t,l,a)||Wd,p=function(e,t,n){for(var r,i=Ou(Ou({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Cf(r=e[a])?r(i):r;for(var s in o)i[s]=s===`className`?Tf(i[s],o[s]):s===`style`?Ou(Ou({},i[s]),o[s]):o[s]}return t.className&&(i.className=Tf(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var _ in p)p[_]===void 0||_[0]===`$`||_===`as`||_===`theme`&&p.theme===f||(_===`forwardedAs`?h.as=p.forwardedAs:d&&!d(_,m)||(h[_]=p[_]));var v=function(e,t){var n=rp();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),y=Tf(o,s);return v&&(y+=` `+v),p.className&&(y+=` `+p.className),h[sf(m)&&!Kd.has(m)?`class`:`className`]=y,h.ref=n,(0,g.createElement)(m,h)}(b,e,t)}y.displayName=d;var b=g.forwardRef(y);return b.attrs=p,b.componentStyle=v,b.displayName=d,b.shouldForwardProp=m,b.foldedComponentIds=r?Tf(i.foldedComponentIds,i.styledComponentId):``,b.styledComponentId=f,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)Of(e,r[n],!0);return e}({},i.defaultProps,e):e}}),kf(b,function(){return`.${b.styledComponentId}`}),a&&Sf(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function vp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var yp=function(e){return Object.assign(e,{isCss:!0})};function Z(e){var t=[...arguments].slice(1);if(Cf(e)||Df(e))return yp(up(vp(Ud,ku([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?up(n):yp(up(vp(n,t)))}function bp(e,t,n){if(n===void 0&&(n=Wd),!t)throw Af(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,Z.apply(void 0,ku([r],i,!1)))};return r.attrs=function(r){return bp(e,t,Ou(Ou({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return bp(e,t,Ou(Ou({},n),r))},r}var xp=function(e){return bp(_p,e)},Q=xp;Kd.forEach(function(e){Q[e]=xp(e)});var Sp=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=dp(e),Jf.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Ef(up(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Jf.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Cp(e){var t=[...arguments].slice(1),n=Z.apply(void 0,ku([e],t,!1)),r=`sc-global-${af(JSON.stringify(n))}`,i=new Sp(n,r),a=function(e){var t=rp(),n=g.useContext(mp),a=g.useRef(t.styleSheet.allocateGSInstance(r)).current;return t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis),g.useLayoutEffect(function(){if(!t.styleSheet.server)return o(a,e,t.styleSheet,n,t.stylis),function(){return i.removeStyles(a,t.styleSheet)}},[a,e,t.styleSheet,n,t.stylis]),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Hd,n,o);else{var s=Ou(Ou({},t),{theme:Gd(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return g.memo(a)}function wp(e){var t=[...arguments].slice(1),n=Ef(Z.apply(void 0,ku([e],t,!1)));return new ap(af(n),n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=Vf();return`<style ${Ef([n&&`nonce="${n}"`,`${Fd}="true"`,`${Ld}="${Rd}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw Af(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Af(2);var n=((t={})[Fd]=``,t[Ld]=Rd,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=Vf();return r&&(n.nonce=r),[g.createElement(`style`,Ou({},n,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new Jf({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw Af(2);return g.createElement(ip,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Af(3)},e})(),`${Fd}`;var Tp={English:`en`,Polish:`pl`,Spanish:`es`},Ep=(0,g.createContext)({language:`English`,setLanguage:()=>{}}),Dp=({children:e,initialLanguage:t=`English`})=>{let[n,r]=(0,g.useState)(()=>{let e=localStorage.getItem(`language`);return Tp[e]?e:t});return(0,g.useEffect)(()=>{document.documentElement.lang=Tp[n]||`en`,localStorage.setItem(`language`,n)},[n]),(0,h.jsx)(Ep.Provider,{value:{language:n,setLanguage:r},children:e})},Op=()=>(0,g.useContext)(Ep),kp=Q.main`
  position: relative;
  z-index: 1;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    max-width: 100%;
    width: 100%;
    padding: 0 var(--spacing-md);
  }
`,Ap={light:`#ffffff`,dark:`#0a0f1c`},jp=Z`
  :root {
    /* Light theme colors */
    --color-primary: #2563eb;
    --color-primary-hover: #1d4ed8;
    --color-secondary: #64748b;
    --color-accent: #06b6d4;
    --color-background: ${Ap.light};
    --color-surface: #f8fafc;
    --color-surface-rgb: 248, 250, 252;
    --color-text-primary: #0f172a;
    --color-text-primary-rgb: 15, 23, 42;
    --color-text-secondary: #475569;
    --color-border: #e2e8f0;
    --color-shadow: rgba(0, 0, 0, 0.1);
    --color-on-primary: #ffffff;

    /* Dark theme colors */
    --color-dark-primary: #2b8de4;
    --color-dark-primary-hover: #1e6fd6;
    --color-dark-secondary: #94a3b8;
    --color-dark-accent: #22d3ee;
    --color-dark-background: ${Ap.dark};
    --color-dark-surface: rgba(17, 24, 39, 0.8);
    --color-dark-text-primary: #ffffff;
    --color-dark-text-secondary: #94a3b8;
    --color-dark-border: #1e293b;
    --color-dark-shadow: rgba(0, 0, 0, 0.4);

    /* Portfolio accent / glass tokens */
    --color-cyan: #00a3ff;
    --color-cyan-rgb: 0, 163, 255;
    --color-cyan-light: #28c9ff;
    --color-cyan-dark: #0a84c7;
    --color-deep-navy: #020617;
    --color-navy: #041126;
    --color-panel-rgb: 226, 232, 240;
    --color-off-white: #0f172a;
    --color-slate: #475569;
    --color-contact-tile-bg: rgba(255, 255, 255, 0.6);
    --color-contact-tile-border: rgba(15, 23, 42, 0.08);
    --color-contact-shadow: rgba(0, 0, 0, 0.08);
    --color-white: #ffffff;
    --color-white-rgb: 255, 255, 255;
    --color-black: #000000;
    --color-black-rgb: 0, 0, 0;

    /* Component tokens */
    --color-tooltip: rgba(40, 142, 221, 0.95);
    --color-tooltip-rgb: 40, 142, 221;
    --color-terminal-bg: #f6f8fa;
    --color-terminal-header-bg: rgba(0, 0, 0, 0.04);
    --color-terminal-border: rgba(0, 0, 0, 0.1);
    --color-terminal-shadow: rgba(0, 0, 0, 0.15);
    --color-code-red: #ff5f56;
    --color-code-yellow: #ffbd2e;
    --color-code-green: #27c93f;
    --color-code-text: #24292f;
    --color-code-comment: #59636e;
    --color-code-keyword: #cf222e;
    --color-code-type: #953800;
    --color-code-string: #0a3069;
    --color-code-property: #0550ae;
    --color-code-boolean: #0550ae;
    --color-code-variable: #b54708;
    --color-sun-orange: #ffb347;
    --color-sun-yellow: #ffcc33;
    --color-sun-yellow-rgb: 255, 204, 51;
    --color-sun-text: #222222;
    --color-sun-backdrop-rgb: 20, 20, 20;
    --color-sun-button-bg-rgb: 30, 30, 30;
    --color-primary-rgb: 37, 99, 235;
    --color-dark-background-rgb: 10, 15, 28;
    --color-hero-nav-bg: rgba(15, 23, 42, 0.7);

    /* Footer theme tokens (light mode defaults) */
    --color-footer-bg-start: rgba(241, 245, 249, 0.75);
    --color-footer-bg-end: rgba(226, 232, 240, 0.75);
    --color-footer-border: rgba(15, 23, 42, 0.08);
    --color-footer-texture-opacity: 0.25;

    /* Layout tokens */
    --container-max-width: 1200px;

    /* Spacing */
    --spacing-xxs: 0.125rem;
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;

    /* Border radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;

    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md:
      0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg:
      0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl:
      0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

    /* Transitions */
    --transition-fast: 150ms ease-in-out;
    --transition-normal: 250ms ease-in-out;
    --transition-slow: 350ms ease-in-out;

    /* Layout helpers */
    --nav-height: 64px;
    --nav-height-mobile: 80px;
    --breakpoint-xl2: 1100px;
  }

  [data-theme="dark"] {
    --color-primary: var(--color-dark-primary);
    --color-primary-hover: var(--color-dark-primary-hover);
    --color-secondary: var(--color-dark-secondary);
    --color-accent: var(--color-dark-accent);
    --color-background: var(--color-dark-background);
    --color-surface: var(--color-dark-surface);
    --color-surface-rgb: 17, 24, 39;
    --color-text-primary: var(--color-dark-text-primary);
    --color-text-primary-rgb: 255, 255, 255;
    --color-text-secondary: var(--color-dark-text-secondary);
    --color-border: var(--color-dark-border);
    --color-shadow: var(--color-dark-shadow);
    --color-on-primary: var(--color-deep-navy);
    --color-panel-rgb: 8, 18, 37;
    --color-off-white: #f8fafc;
    --color-slate: #94a3b8;
    --color-contact-tile-bg: rgba(255, 255, 255, 0.04);
    --color-contact-tile-border: rgba(255, 255, 255, 0.08);
    --color-contact-shadow: rgba(0, 0, 0, 0.45);
    --color-footer-bg-start: rgba(2, 6, 23, 0.75);
    --color-footer-bg-end: rgba(4, 17, 38, 0.75);
    --color-footer-border: rgba(var(--color-white-rgb), 0.06);
    --color-footer-texture-opacity: 0.4;

    /* Code terminal dark palette */
    --color-terminal-bg: #0b1220;
    --color-terminal-header-bg: rgba(255, 255, 255, 0.03);
    --color-terminal-border: rgba(255, 255, 255, 0.1);
    --color-terminal-shadow: rgba(0, 0, 0, 0.5);
    --color-code-text: #abb2bf;
    --color-code-comment: #7f848e;
    --color-code-keyword: #c678dd;
    --color-code-type: #e5c07b;
    --color-code-string: #98c379;
    --color-code-property: #e06c75;
    --color-code-boolean: #56b6c2;
    --color-code-variable: #61afef;
  }
`,Mp=(0,g.createContext)({isDark:!1,toggleTheme:()=>{}}),Np=({children:e,initialIsDark:t})=>{let[n,r]=(0,g.useState)(()=>{if(typeof t==`boolean`)return t;let e=localStorage.getItem(`theme`);return e?e===`dark`:window.matchMedia(`(prefers-color-scheme: dark)`).matches});(0,g.useEffect)(()=>{n?(document.documentElement.setAttribute(`data-theme`,`dark`),localStorage.setItem(`theme`,`dark`)):(document.documentElement.removeAttribute(`data-theme`),localStorage.setItem(`theme`,`light`));let e=Ap[n?`dark`:`light`];document.querySelectorAll(`meta[name="theme-color"]`).forEach(t=>t.setAttribute(`content`,e))},[n]);let i=(0,g.useCallback)(()=>r(e=>!e),[]);return(0,h.jsx)(Mp.Provider,{value:{isDark:n,toggleTheme:i},children:e})},Pp=()=>(0,g.useContext)(Mp),Fp={English:{home:{contentHeader:`Software Engineer`,contentHeaderTechStack:`< AI-Directed Engineering | Next.js • React • TypeScript • Production SaaS />`,welcomeLabel:`WELCOME TO MY PORTFOLIO`,headerParagraph:`
Hi, I'm Dariusz Podczasik.
A Software Engineer focused on building modern web applications and AI-powered SaaS products.`,viewMyWork:`View My Work`,viewCV:`View CV`,cvUrl:`/Software_Engineer_Portfolio/cv.html`,portraitAlt:`Portrait of Dariusz Podczasik`,hearMeLabel:`Hear me — play a short video greeting`,skillsetHeader:`My Technology Stack`,learnNextHeader:`Currently Exploring`,toolsShowcase:{titlePlain:`Built with the`,titleAccent:`Best Tools`,description:`I craft fast, scalable, and modern web applications using a powerful ecosystem of cutting-edge technologies.`,features:[{title:`Performance Optimized`,subtitle:`Fast loads`},{title:`Scalable Architecture`,subtitle:`Grows cleanly`},{title:`Developer Experience`,subtitle:`Clean APIs`},{title:`Modern UI/UX`,subtitle:`Polished interfaces`}],exploreParagraph:`Leveling up my skills and building the future, one line at a time.`,exploreAriaLabel:`Technologies I'm currently exploring`,exploreItems:[{name:`Artificial Intelligence`,description:`Building AI-powered features`},{name:`Stripe`,description:`Payment infrastructure`},{name:`AI-Directed Engineering`,description:`AI-assisted development`},{name:`Framer Motion`,description:`Production-ready animations`},{name:`SaaS Architecture`,description:`Scalable SaaS patterns`}],moreTitle:`And More`,moreSubtitle:`Always learning.`}},about:{journeyLabel:`MY JOURNEY`,journeyHeader:`From Embedded to Full-Stack`,journeyParagraph:`
<p>My journey began with electronics, embedded systems, C++, and OpenGL before evolving into modern web development. Today I build production-ready applications using React, Next.js, TypeScript, and Supabase. I combine solid software engineering principles with AI-assisted workflows to create scalable, impactful solutions.</p>
      `,journeyFeatures:[{title:`Full-Stack Systems`,description:`I design complete software systems—from authentication and databases to APIs, deployment, and security. Understanding how every part works together is essential.`},{title:`AI-Assisted Engineering`,description:`I use AI as an engineering partner to accelerate implementation while maintaining code quality, scalability, and long-term maintainability.`},{title:`Problem Solving`,description:`I'm passionate about building software that solves real problems and delivers outstanding user experiences.`},{title:`Continuous Learning`,description:`I stay current with software architecture, system design, AI, and cloud technologies—essential to my growth as an engineer.`}]},contact:{headerPlain:`Let's`,headerAccent:`Connect`,contactParagraph:`Let's build something great together.`},footer:{tagline:`Engineering excellence through code and design.`,rightsReserved:`All rights reserved.`},nav:{mainAriaLabel:`Main navigation`,menuToggleLabel:`Toggle navigation menu`,themeToggleLabel:`Toggle dark mode`,languageGroupLabel:`Language selector`,languageSelectLabel:`Select language`,shareLabel:`Share this portfolio`,shareTitle:`Dariusz Podczasik — Software Engineer`,shareText:`Check out Dariusz's portfolio — AI-directed engineering and modern web applications.`,shareCopied:`Link copied`,shareError:`Couldn't copy link`},projects:{header:`Proȷects`,regionLabel:`Projects carousel`,previousLabel:`Previous project`,nextLabel:`Next project`,goToLabel:`Go to project`,githubProfileLabel:`Visit my GitHub profile`,closeLabel:`Close`,comingSoonLabel:`Coming soon`,expandLabel:`Expand {title}`,liveDemoLabel:`Live Demo`,repoLabel:`GitHub`,screenshotAlt:`{title} — project screenshot`}},Polish:{home:{contentHeader:`Inżynier Oprogramowania`,contentHeaderTechStack:`< AI-Directed Engineering | Next.js • React • TypeScript • Produkcyjny SaaS />`,welcomeLabel:`WITAJ W MOIM PORTFOLIO`,headerParagraph:`Cześć, jestem Dariusz Podczasik. Inżynier oprogramowania specjalizujący się w tworzeniu nowoczesnych aplikacji internetowych i produktów AI SaaS.`,viewMyWork:`Zobacz projekty`,viewCV:`Zobacz CV`,cvUrl:`/Software_Engineer_Portfolio/cv.html`,portraitAlt:`Portret Dariusza Podczasika`,hearMeLabel:`Posłuchaj mnie — odtwórz krótkie wideo powitalne`,skillsetHeader:`Mój stack technologiczny`,learnNextHeader:`Aktualnie rozwijam`,toolsShowcase:{titlePlain:`Tworzę z`,titleAccent:`najlepszymi narzędziami`,description:`Buduję szybkie, skalowalne i nowoczesne aplikacje internetowe, oparte na ekosystemie najnowocześniejszych technologii.`,features:[{title:`Zoptymalizowana wydajność`,subtitle:`Szybkie ładowanie`},{title:`Skalowalna architektura`,subtitle:`Rośnie bez problemów`},{title:`Developer Experience`,subtitle:`Czyste API`},{title:`Nowoczesny UI/UX`,subtitle:`Dopracowane interfejsy`}],exploreParagraph:`Rozwijam umiejętności i buduję przyszłość — linijka po linijce.`,exploreAriaLabel:`Technologie, które aktualnie rozwijam`,exploreItems:[{name:`Sztuczna inteligencja`,description:`Buduję funkcje oparte na AI`},{name:`Stripe`,description:`Infrastruktura płatności`},{name:`AI-Directed Engineering`,description:`Development wspomagany przez AI`},{name:`Framer Motion`,description:`Animacje klasy produkcyjnej`},{name:`Architektura SaaS`,description:`Skalowalne wzorce SaaS`}],moreTitle:`I więcej`,moreSubtitle:`Ciągle się uczę.`}},about:{journeyLabel:`MOJA DROGA`,journeyHeader:`Od embedded do full-stack`,journeyParagraph:`
<p>Moja droga zaczęła się od elektroniki, systemów wbudowanych, C++ i OpenGL, zanim przerodziła się w nowoczesny rozwój webowy. Dziś buduję aplikacje produkcyjne z React, Next.js, TypeScript i Supabase. Łączę solidne fundamenty inżynierii oprogramowania ze wsparciem AI, tworząc skalowalne, wartościowe rozwiązania.</p>
      `,journeyFeatures:[{title:`Systemy full-stack`,description:`Projektuję kompletne systemy informatyczne — od uwierzytelniania i baz danych po API, wdrożenia i bezpieczeństwo. Rozumienie całości jest kluczowe.`},{title:`Inżynieria wspomagana przez AI`,description:`Wykorzystuję AI jako partnera inżynierskiego, aby przyspieszać implementację przy zachowaniu jakości, skalowalności i łatwości utrzymania.`},{title:`Rozwiązywanie problemów`,description:`Tworzę oprogramowanie, które rozwiązuje realne problemy i dostarcza wyjątkowych doświadczeń użytkownikom.`},{title:`Ciągły rozwój`,description:`Stale rozwijam wiedzę w zakresie architektury oprogramowania, projektowania systemów, AI i chmury — to fundament mojego rozwoju jako inżyniera.`}]},contact:{headerPlain:`Napisz`,headerAccent:`do mnie`,contactParagraph:`Stwórzmy razem coś wyjątkowego.`},footer:{tagline:`Doskonałość inżynieryjna w kodzie i designie.`,rightsReserved:`Wszelkie prawa zastrzeżone.`},nav:{mainAriaLabel:`Nawigacja główna`,menuToggleLabel:`Przełącz menu nawigacji`,themeToggleLabel:`Przełącz tryb ciemny`,languageGroupLabel:`Selektor języka`,languageSelectLabel:`Wybierz język`,shareLabel:`Udostępnij to portfolio`,shareTitle:`Dariusz Podczasik — Software Engineer`,shareText:`Zobacz portfolio Dariusza — projektowanie wspomagane AI i nowoczesne aplikacje webowe.`,shareCopied:`Link skopiowany`,shareError:`Nie udało się skopiować linku`},projects:{header:`Proȷekty`,regionLabel:`Karuzela projektów`,previousLabel:`Poprzedni projekt`,nextLabel:`Następny projekt`,goToLabel:`Przejdź do projektu`,githubProfileLabel:`Odwiedź mój profil GitHub`,closeLabel:`Zamknij`,comingSoonLabel:`Wkrótce`,expandLabel:`Rozwiń {title}`,liveDemoLabel:`Demo na żywo`,repoLabel:`GitHub`,screenshotAlt:`{title} — zrzut ekranu projektu`}},Spanish:{home:{contentHeader:`Ingeniero de Software`,contentHeaderTechStack:`< AI-Directed Engineering | Next.js • React • TypeScript • SaaS de producción />`,welcomeLabel:`BIENVENIDO A MI PORTAFOLIO`,headerParagraph:`Hola, soy Dariusz Podczasik. Ingeniero de software especializado en aplicaciones web modernas y productos SaaS impulsados por IA.`,viewMyWork:`Ver proyectos`,viewCV:`Ver CV`,cvUrl:`/Software_Engineer_Portfolio/cv.html`,portraitAlt:`Retrato de Dariusz Podczasik`,hearMeLabel:`Escúchame — reproducir un breve saludo en video`,skillsetHeader:`Mi stack tecnológico`,learnNextHeader:`Actualmente aprendiendo`,toolsShowcase:{titlePlain:`Construyo con`,titleAccent:`las mejores herramientas`,description:`Creo aplicaciones web rápidas, escalables y modernas usando un potente ecosistema de tecnologías de vanguardia.`,features:[{title:`Rendimiento optimizado`,subtitle:`Cargas rápidas`},{title:`Arquitectura escalable`,subtitle:`Crece sin problemas`},{title:`Experiencia de desarrollador`,subtitle:`APIs limpias`},{title:`UI/UX moderno`,subtitle:`Interfaces pulidas`}],exploreParagraph:`Subiendo de nivel y construyendo el futuro, una línea a la vez.`,exploreAriaLabel:`Tecnologías que estoy explorando`,exploreItems:[{name:`Inteligencia artificial`,description:`Funciones impulsadas por IA`},{name:`Stripe`,description:`Infraestructura de pagos`},{name:`AI-Directed Engineering`,description:`Desarrollo asistido por IA`},{name:`Framer Motion`,description:`Animaciones listas para producción`},{name:`Arquitectura SaaS`,description:`Patrones SaaS escalables`}],moreTitle:`Y más`,moreSubtitle:`Siempre aprendiendo.`}},about:{journeyLabel:`MI VIAJE`,journeyHeader:`De embedded a full-stack`,journeyParagraph:`
<p>Mi viaje comenzó con electrónica, sistemas embebidos, C++ y OpenGL, antes de evolucionar hacia el desarrollo web moderno. Hoy construyo aplicaciones listas para producción con React, Next.js, TypeScript y Supabase. Combino principios sólidos de ingeniería de software con flujos asistidos por IA para crear soluciones escalables e impactantes.</p>
      `,journeyFeatures:[{title:`Sistemas full-stack`,description:`Diseño sistemas completos: desde autenticación y bases de datos hasta APIs, despliegue y seguridad. Entender cómo encaja cada parte es esencial.`},{title:`Ingeniería asistida por IA`,description:`Uso la IA como aliada de ingeniería para acelerar la implementación manteniendo calidad de código, escalabilidad y mantenibilidad a largo plazo.`},{title:`Resolución de problemas`,description:`Me apasiona crear software que resuelva problemas reales y ofrezca experiencias de usuario sobresalientes.`},{title:`Aprendizaje continuo`,description:`Me mantengo al día en arquitectura de software, diseño de sistemas, IA y tecnologías en la nube — esencial para mi crecimiento como ingeniero.`}]},contact:{headerPlain:`Ponte en`,headerAccent:`contacto`,contactParagraph:`Construyamos algo increíble juntos.`},footer:{tagline:`Excelencia en ingeniería a través del código y el diseño.`,rightsReserved:`Todos los derechos reservados.`},nav:{mainAriaLabel:`Navegación principal`,menuToggleLabel:`Alternar menú de navegación`,themeToggleLabel:`Cambiar modo oscuro`,languageGroupLabel:`Selector de idioma`,languageSelectLabel:`Seleccionar idioma`,shareLabel:`Compartir este portafolio`,shareTitle:`Dariusz Podczasik — Software Engineer`,shareText:`Mira el portafolio de Dariusz — ingeniería dirigida por IA y aplicaciones web modernas.`,shareCopied:`Enlace copiado`,shareError:`No se pudo copiar el enlace`},projects:{header:`Proyectos`,regionLabel:`Carrusel de proyectos`,previousLabel:`Proyecto anterior`,nextLabel:`Proyecto siguiente`,goToLabel:`Ir al proyecto`,githubProfileLabel:`Visita mi perfil de GitHub`,closeLabel:`Cerrar`,comingSoonLabel:`Próximamente`,expandLabel:`Expandir {title}`,liveDemoLabel:`Demo en vivo`,repoLabel:`GitHub`,screenshotAlt:`{title} — captura de pantalla del proyecto`}}},Ip=()=>{let{language:e}=Op();return Fp[e]||Fp.English},Lp=Q.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-sm);
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  color: var(--color-text-primary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-primary);
  }
`,Rp=Q.div`
  width: 22px;
  height: 22px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,zp=Q.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: currentColor;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border-radius: 50%;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    transition:
      transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.3s ease;
    transform: rotate(0deg);
  }

  ${({$isDark:e})=>e&&`transform: scale(0); opacity: 0; &::before { transform: scale(0); opacity: 0; }`}
`,Bp=Q.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-shadow: inset 5px -2px 0 0 currentColor;
  transform: scale(0);
  opacity: 0;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;

  ${({$isDark:e})=>e&&`transform: scale(1); opacity: 1;`}
`,Vp=({$isDark:e})=>(0,h.jsxs)(Rp,{children:[(0,h.jsx)(zp,{$isDark:e}),(0,h.jsx)(Bp,{$isDark:e})]}),Hp=()=>{let{isDark:e,toggleTheme:t}=Pp(),{nav:n}=Ip();return(0,h.jsx)(Lp,{onClick:t,onMouseDown:e=>e.stopPropagation(),"data-testid":`dark-mode-toggle`,role:`switch`,"aria-checked":e,"aria-label":n.themeToggleLabel,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t())},children:(0,h.jsx)(Vp,{$isDark:e})})},Up=`data:image/webp;base64,UklGRvIEAABXRUJQVlA4IOYEAADwFQCdASowADAAPlEei0UjoaEcbt4AOAUEtgBOmXs7D9a8yKjf0f8G5J3z5Tj/xX6J/mwepPzE/sp+sHvoeiPzmeoU9ADpS/77/xLU2aO52/g98JEL7W8JO8H3VZJf73vBIAPy/+k/7/jK0lmM30Ic+D057A/6xf8Lr+ftz7KX7eE4ClfGRVjhmAhiMnD8t0ooLNFXyiEaZxVTcDlqlj332v53h4ko3xyuzo7xcXgg43e8Hd6tMFtwAP7+q3M1P0FmZboY4nQ+f0exKGyqc0OtERMrdhegMGE5xNRNaV+paU3cZ3/xLA/4MlOQKSkBHkxX02fi71zJ4EznB3RVmk6VSqmahlDP/rOWl6r9PzWIak+e9COyQf4lHNKNb88vs9kfZVFBU179SXHZs2WNGK4/R4nlzM6ofQPjJsAC+HFgUz+zEEzjovACtxcod/n+9Aae8HG+wlPeagYj+qqkI1Wu1wGdiSs3NwfRasFrFdzrWDUiVxMxHERp7NMjMZrgcPRn7xs2Uy/92CS4hce0UIFnPsnxmnOJdNaLNWgYRQYrn4cdiba7HlbZ6jjy9OwN+y2v4TeSaU2/GzUh6gUiog07s97fZ+GnyoH2EeO6f/RiROjFBeeT/jcLkJwBJk6H7ijvdwUAwR5jxBVX0xN8JiDOalAFUM31Tj++7R10NO+4Bdh43a3zZX8WnHhihQ+gNDETsB4vcOOflpJt+zFNGvx0DInPshfBs8lZqPU/qMatxA6n14FHchREwxcXfx/LbzvLjbe4Rxa6/qWQO9keq3nHEuyb5X7nmF/dK/85/cVnvvmYBsr41aUbfHbmltGwLHDh+D2F/kx3oXlH8y4rmAtn/P0C0ITluT/9SEkPvF5/4wjbMWxLpNPqId63Isxxd3HVH9Q6OXP507mMjBYZc9dwdsIyBoatRe5WZco4f8mOdjFaL/NIRL6qE157csLu2ZfoqLLO+A3DDt5qqUflg9Pw3dVNb2U1D/3g75MJu7dlBQ6cPO7HecK6eoA+Tl6Sm92JCFYPGO9bCpRKIwWT4KY7WSmPEJKHWWQvfe+B5XB9qzrP2c/Hu4+gb40bC0tfSWJSAF7o1Gn4BHS7H36Z6w2N3hmfkeREGM4NBKgMt8rwyPH02n9/5d+4rmf8WmMwMWRSwgT/Yv1Iuo685pfqr9AC0WDe36nIe20D4sknyBebWRpfn8VcXlBLQEM4e0bjonkBVu26hvt98lEWQBbtvmVBkeOoVQJD728dtJFAbTm9P9eBoU15HGLWignBP+V3CuhVxQumAkqYFk3LLnWzsZQH9v6SGACS/PywE2GjGpv2uRu0SRVSC0+i1QqRgqscFmSbUa+OE9lLZ1iYlYPhLlhs2iPnsR4JESPP/THXL/kU/f9nDZZLh7bb+qbGTzvDfJmwOeDAyiBxZAUgC0ZUF2n7rRF2BLBXx+0EU1lt1vzz88b+vfHO59Nm/tRDARISF5LgSijw7WOQ/Q/2f/WpJF6uRNvtV4eQOfWAsOE2HssYsCEPYS3ZFvKX8KZO+XOuw/n+hbIpcH0jgYXJf0DXIPBagynMgj7lrdnJXGXklCc7Q62Dv/XMLYwZQ+lYMwlDArzjfdVP5qiLrnl2ubVmLPZCQDJNqaeAiJDtVTLAlvDi5rX50HPG35WSc/3yLKuVJ+dEnowAAAA=`,Wp=`data:image/webp;base64,UklGRigDAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSPwBAAABkFzbtmlb8+x1njJ437Z/JjaLthmBHYptl/1//dnYa8/5ebEjiIgJQMXBgGLa+gu3P3eNjHR9vnNxw/QCsIAaF1agdffTQVH/pYae7xuLwoqaWMDES12iPDopkR5dVPflSQhWA0PjkW7RnaqY7lTP8SZYVSXmvFKKSTVkTHozH2UVJZb1KFI1ZlTfapQVldguuuro1B6UFRh2yJPqmly7Uf7HsEKJqjOT1sD+ETC/S0l1T+pZhACgQOMzuTJ0vWxCARiOKirLqJMwBExpF/OgOqchGC4oKtOoKzCMaxNzoTonAnvlytZ1EHislE/Sc0wfEPOhhmatkytj18ZzijlFXbolz8l1/5NSTtS3TjGvvkGPeY+OpMxjj6iMqb6vSnl9vyvPyfXgomJOUVc2yHNybZ41JOZDDc/GM6V8kl4CB+T5uA4DEzvEXKiuyTBcUcwl6josYHqXmAfVPRMBhlOKeUSdhQEFml7Jc3C9a0EBIGBxr1L9kvqWIuBvw3o568WkTTD8u8Q+eapPch1Eif8b9olej0QdgKHSEmv75awVXQMbUKLyEos+KEXWgjHp42KUqNbQfKZPdGdldKf6zrbAUL0FTLneI9KjkxLp0Un13pyGYKhlYQUmHH49LOq/1PCbIxNQWIEaBwPCrK3XHv0ckAZ+Prq+bXYALKBiVlA4IAYBAABQBgCdASowADAAPlkijkUjoiEarqwAOAWEszVsT3Kq5A+6rwAHSQfsp+zPuAf1kIzlEHgQImfNCJBVAAD+/QhYYcDw1CQ/XJ3kofvl6LWx//YJoxqbeyOKZLuMzIM1/2XEw9pm7JgspHK8ZCyImBGft87//uP5RN//4E7/qasb0r9uSJtqWqeMtbumrBeiWTQa9JpFmi5Ft9Fn9dnibSTp/GbcK/jsrWLyH/+vf/zbZ2yeJ8XnLfhWPp190LFuyeN4676xbJlSU9r/ViyWELwuuZHddO2ZjE6v1AWCXn5optT8jmfMwRNQdLp8Mto9JgM3k9aDQd2o5P/UfpzEfDogz+Pb4AAA`,Gp=`data:image/webp;base64,UklGRkgDAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSK4BAAABkFxtm1snn2Z0jlxDztkGqnG2O8heXujBsRu4OzJU4NBBHJmomf9bKI3+CiKCgdu2cez0vtstyRvQSGOBZGb3sn+Xh5Df9S93ZhPAGkQysQmGjr/8pbBG4b8vJ8PlhqJgDcavniniCy/Chg24q3EYG4EUWc9RvBc2sbqP/F2GNCIs/2AohBGUIvDnSqukWHthNReX4ct6i6TYp3h2oBfuN0qKA/rATgy+USw26IUdKZ4bqK5j8Maxku+YpXsDAyDBwFd6KtDza4YEsHjLgios2IOFwcwjRQfCx2kYi8sy1UouYDF6X6ZaycMocFgfozPkAPjIoIfAj5j7U5b1in/mtsqyZnHrlIUmCp5+0I7e3zBoIvA6p2hC6Cp51aw+nHpBv4v+RPrfif53qP+d6/9HOFD/T0cfNPXA/SgsLpT1jMG0sh6DRU9XTyJB9kVniOeXDElVzz/r6Pnnqp4HLNZ17Mg6bJNZU7NTDbLX3Q7utRrO1byjnV1Dqm7HNf0E18tg4/yQsYsoP+T5agzGRvs5g0efW/ycv5+Ph9r8nBg/aueif+tCcLf9i52Zdj8KVlA4IHQBAABwCgCdASowADAAPlkij0UjoiGY7M78OAWEtjUbqPHccOvlv43fjByIncb8QOgypbCRc//0gH6gcAB0kf7T/tV7PAEcXohyNtQfNrDfmiqiLTQquKOXwNryzx4NgAD+9ol+JC7oe0KUuj6zJdn8wbaTIcu5HrCmQvtxOX+Z4N8HgVQiQWQ+4kmaI9rXFgzP6UwG0Z2xpano5ccw1FrD13gzb5cx7s1XLVs2uAFP0rLXl81BdvaQ2yktNAQvB2ZwvW4WwcyUm4HMSTZj3LlwYGeEBTqHA3dEsGNHeL9NtFqey7LP98dNuXnV9cHhWaTx/GcJW0mJ3riGAADfUMN9tqlBNOPkn/JhXEN+MdJYeTL5TunEDHabd0fasUEz83eKt7qzWg58cyaFfHse/UvBHVqKjbWKUSmrmoYDEBc10nxE+I0iw0CCED4cI+0rSOyYeP+JsETpi1ZENHuGazMTY56/Wwf+h6qWSuAht6i1JNu4S9HiAAA=`,Kp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qp=g.createContext&&g.createContext(Kp),Jp=[`attr`,`size`,`title`];function Yp(e,t){if(e==null)return{};var n=Xp(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Xp(e,t){if(e==null)return{};for(var n={},r=Object.keys(e),i,a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Zp(){return Zp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zp.apply(this,arguments)}function Qp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Qp(Object(n),!0).forEach(function(t){em(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qp(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function em(e,t,n){return t=tm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tm(e){var t=nm(e,`string`);return typeof t==`symbol`?t:String(t)}function nm(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function rm(e){return e&&e.map((e,t)=>g.createElement(e.tag,$p({key:t},e.attr),rm(e.child)))}function $(e){return t=>g.createElement(im,Zp({attr:$p({},e.attr)},t),rm(e.child))}function im(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Yp(e,Jp),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),g.createElement(`svg`,Zp({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:$p($p({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&g.createElement(`title`,null,i),e.children)};return qp===void 0?t(Kp):g.createElement(qp.Consumer,null,e=>t(e))}function am(e){return $({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`},child:[]}]})(e)}function om(e){return $({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z`},child:[]}]})(e)}function sm(e){return $({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z`},child:[]}]})(e)}function cm(e){return $({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z`},child:[]}]})(e)}function lm(e){return $({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z`},child:[]}]})(e)}function um(e){return $({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z`},child:[]}]})(e)}function dm(e){return $({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z`},child:[]}]})(e)}function fm(e){return $({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z`},child:[]}]})(e)}function pm(e){return $({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z`},child:[]}]})(e)}function mm(e){return $({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z`},child:[]}]})(e)}function hm(e){return $({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z`},child:[]}]})(e)}function gm(e){return $({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z`},child:[]}]})(e)}function _m(e){return $({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z`},child:[]}]})(e)}function vm(e){return $({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z`},child:[]}]})(e)}function ym(e){return $({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z`},child:[]}]})(e)}function bm(e){return $({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z`},child:[]}]})(e)}function xm(e){return $({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z`},child:[]}]})(e)}function Sm(e){return $({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z`},child:[]}]})(e)}function Cm(e){return $({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function wm(e){return $({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z`},child:[]}]})(e)}function Tm(e){return $({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function Em(e){return $({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z`},child:[]}]})(e)}function Dm(e){return $({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z`},child:[]}]})(e)}function Om(e){return $({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}var km=Q.div`
  display: flex;
  position: relative;
`,Am=Q.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: none;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  cursor: pointer;
  color: var(--color-text-primary);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all var(--transition-fast);

  &:hover {
    color: var(--color-primary);
  }

  svg {
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    padding: var(--spacing-xs);
    font-size: 0;

    svg {
      font-size: 1.25rem;
    }
  }
`,jm=Q.div`
  position: absolute;
  top: calc(100% + var(--spacing-xs));
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-xs);
  min-width: 140px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast),
    visibility var(--transition-fast);
  z-index: 1001;

  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`,Mm=Q.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: none;
  border: none;
  border-radius: var(--radius-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  cursor: pointer;
  color: var(--color-text-primary);
  font-size: 0.85rem;
  font-weight: 500;
  text-align: left;
  transition: all var(--transition-fast);

  &:hover {
    background: rgba(var(--color-primary-rgb, 99, 102, 241), 0.1);
    color: var(--color-primary);
  }

  ${e=>e.$isActive&&Z`
      background: rgba(var(--color-primary-rgb, 99, 102, 241), 0.1);
      color: var(--color-primary);
      font-weight: 600;
    `}

  img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid var(--color-border);
    flex-shrink: 0;
  }
`,Nm=[{name:`English`,flag:Up,code:`EN`},{name:`Polish`,flag:Wp,code:`PL`},{name:`Spanish`,flag:Gp,code:`ES`}],Pm=({onOpen:e})=>{let{language:t,setLanguage:n}=Op(),{nav:r}=Ip(),[i,a]=(0,g.useState)(!1),o=(0,g.useRef)(null),s=(0,g.useRef)(null),c=(0,g.useRef)([]);(0,g.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&a(!1)},t=()=>{a(!1)};return document.addEventListener(`mousedown`,e),window.addEventListener(`scroll`,t,{passive:!0}),()=>{document.removeEventListener(`mousedown`,e),window.removeEventListener(`scroll`,t)}},[]);let l=()=>{let t=!i;a(t),t&&e&&e()},u=e=>{n(e),a(!1)},d=e=>{e.key===`Escape`&&i&&(e.preventDefault(),a(!1),s.current?.focus())},f=(e,t)=>{e.key===`ArrowDown`?(e.preventDefault(),c.current[(t+1)%Nm.length]?.focus()):e.key===`ArrowUp`&&(e.preventDefault(),c.current[(t-1+Nm.length)%Nm.length]?.focus())};return(0,h.jsxs)(km,{ref:o,role:`group`,"aria-label":r.languageGroupLabel,onKeyDown:d,children:[(0,h.jsx)(Am,{ref:s,onClick:l,onKeyDown:t=>{t.key===`ArrowDown`&&!i&&(t.preventDefault(),a(!0),e&&e(),requestAnimationFrame(()=>c.current[0]?.focus()))},"aria-label":r.languageSelectLabel,"aria-expanded":i,"aria-haspopup":`listbox`,children:(0,h.jsx)(gm,{})}),(0,h.jsx)(jm,{className:i?`open`:``,role:`listbox`,children:Nm.map((e,n)=>(0,h.jsxs)(Mm,{ref:e=>{c.current[n]=e},$isActive:t===e.name,onClick:()=>u(e.name),onKeyDown:e=>f(e,n),role:`option`,"aria-selected":t===e.name,children:[(0,h.jsx)(`img`,{src:e.flag,alt:``}),e.name]},e.name))})]})};function Fm(e){return $({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z`},child:[]}]})(e)}var Im=Q.div`
  position: relative;
  display: flex;
`,Lm=Q.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-sm);
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  color: var(--color-text-primary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-primary);
  }

  svg {
    font-size: 1.2rem;
  }
`,Rm=Q.span`
  position: absolute;
  top: calc(100% + var(--spacing-xs));
  right: 0;
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 600;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  color: var(--color-text-primary);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast),
    visibility var(--transition-fast);
  pointer-events: none;

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,zm=Q.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  margin-top: var(--spacing-xs);
  padding-top: var(--spacing-md);
  border: none;
  border-top: 1px solid var(--color-border);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  background: none;
  cursor: pointer;
  color: var(--color-text-primary);
  font: inherit;
  font-weight: 600;
  font-size: 1rem;
  min-height: 48px;
  text-align: left;
  white-space: nowrap;
  transition: color var(--transition-fast);

  svg {
    font-size: 1.2rem;
    color: var(--color-primary);
    flex-shrink: 0;
    width: 20px;
    transition: color var(--transition-fast);
  }

  &:hover {
    color: var(--color-primary);
  }

  ${e=>e.$feedback&&`
      color: var(--color-primary);
      svg {
        color: var(--color-accent);
      }
    `}
`,Bm=`${window.location.origin}/Software_Engineer_Portfolio/`,Vm=2e3,Hm=()=>{let{nav:e}=Ip(),[t,n]=(0,g.useState)(null),r=(0,g.useRef)(null);(0,g.useEffect)(()=>()=>clearTimeout(r.current),[]);let i=e=>{n(e),clearTimeout(r.current),r.current=setTimeout(()=>n(null),Vm)},a=()=>{let e=document.createElement(`textarea`);e.value=Bm,e.style.position=`fixed`,e.style.opacity=`0`,document.body.appendChild(e),e.select();let t=document.execCommand(`copy`);return e.remove(),t},o=async()=>{try{navigator.clipboard?.writeText?(await navigator.clipboard.writeText(Bm),i(`copied`)):i(a()?`copied`:`error`)}catch{i(`error`)}};return{feedback:t,share:async()=>{if(navigator.share){try{let t={title:e.shareTitle,text:e.shareText,url:Bm};if(navigator.userAgentData?.mobile??window.matchMedia(`(pointer: coarse)`).matches)try{let e=await fetch(`/Software_Engineer_Portfolio/social_preview.jpg`),n=new File([await e.blob()],`preview.jpg`,{type:`image/jpeg`});navigator.canShare?.({files:[n]})&&(t.files=[n])}catch{}await navigator.share(t)}catch(e){e?.name!==`AbortError`&&i(`error`)}return}o()},nav:e}},Um=()=>{let{feedback:e,share:t,nav:n}=Hm();return(0,h.jsxs)(Im,{children:[(0,h.jsx)(Lm,{onClick:t,"aria-label":n.shareLabel,"data-testid":`share-button`,children:e===`copied`?(0,h.jsx)(um,{"aria-hidden":!0}):(0,h.jsx)(Fm,{"aria-hidden":!0})}),(0,h.jsx)(Rm,{className:e?`visible`:``,"aria-live":`polite`,"data-testid":`share-tooltip`,children:e===`copied`?n.shareCopied:e===`error`?n.shareError:``})]})},Wm=()=>{let{feedback:e,share:t,nav:n}=Hm(),r=e===`copied`?n.shareCopied:e===`error`?n.shareError:n.shareLabel;return(0,h.jsxs)(zm,{onClick:t,$feedback:e,"data-testid":`mobile-share-item`,"aria-live":`polite`,children:[e===`copied`?(0,h.jsx)(um,{"aria-hidden":!0}):(0,h.jsx)(Fm,{"aria-hidden":!0}),r]})},Gm=e=>(0,g.useSyncExternalStore)(t=>{let n=window.matchMedia(e);return n.addEventListener(`change`,t),()=>n.removeEventListener(`change`,t)},()=>window.matchMedia(e).matches,()=>!1),Km=e=>{let[t,n]=(0,g.useState)(e[0]);return(0,g.useEffect)(()=>{if(typeof IntersectionObserver>`u`)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&n(e.target.id)})},{rootMargin:`-40% 0px -55% 0px`,threshold:0});e.forEach(e=>{let n=document.getElementById(e);n&&t.observe(n)});let r=()=>{document.body.style.position!==`fixed`&&window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-2&&n(e[e.length-1])};return window.addEventListener(`scroll`,r,{passive:!0}),r(),()=>{t.disconnect(),window.removeEventListener(`scroll`,r)}},[e]),t},qm=s(((e,t)=>{var n=`Expected a function`,r=NaN,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l=typeof global==`object`&&global&&global.Object===Object&&global,u=typeof self==`object`&&self&&self.Object===Object&&self,d=l||u||Function(`return this`)(),f=Object.prototype.toString,p=Math.max,m=Math.min,h=function(){return d.Date.now()};function g(e,t,r){var i,a,o,s,c,l,u=0,d=!1,f=!1,g=!0;if(typeof e!=`function`)throw TypeError(n);t=x(t)||0,v(r)&&(d=!!r.leading,f=`maxWait`in r,o=f?p(x(r.maxWait)||0,t):o,g=`trailing`in r?!!r.trailing:g);function _(t){var n=i,r=a;return i=a=void 0,u=t,s=e.apply(r,n),s}function y(e){return u=e,c=setTimeout(C,t),d?_(e):s}function b(e){var n=e-l,r=e-u,i=t-n;return f?m(i,o-r):i}function S(e){var n=e-l,r=e-u;return l===void 0||n>=t||n<0||f&&r>=o}function C(){var e=h();if(S(e))return w(e);c=setTimeout(C,b(e))}function w(e){return c=void 0,g&&i?_(e):(i=a=void 0,s)}function T(){c!==void 0&&clearTimeout(c),u=0,i=l=a=c=void 0}function ee(){return c===void 0?s:w(h())}function te(){var e=h(),n=S(e);if(i=arguments,a=this,l=e,n){if(c===void 0)return y(l);if(f)return c=setTimeout(C,t),_(l)}return c===void 0&&(c=setTimeout(C,t)),s}return te.cancel=T,te.flush=ee,te}function _(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(n);return v(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),g(e,t,{leading:i,maxWait:t,trailing:a})}function v(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function y(e){return!!e&&typeof e==`object`}function b(e){return typeof e==`symbol`||y(e)&&f.call(e)==`[object Symbol]`}function x(e){if(typeof e==`number`)return e;if(b(e))return r;if(v(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=v(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(i,``);var n=o.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):a.test(e)?r:+e}t.exports=_})),Jm=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.addPassiveEventListener=function(e,n,r){var i=r.name;i||(i=n,console.warn(`Listener must be a named function.`)),t.has(n)||t.set(n,new Set);var a=t.get(n);if(!a.has(i)){var o=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener(`test`,null,t)}catch{}return e}();e.addEventListener(n,r,o?{passive:!0}:!1),a.add(i)}},e.removePassiveEventListener=function(e,n,r){e.removeEventListener(n,r),t.get(n).delete(r.name||n)};var t=new Map})),Ym=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=r(qm()),n=Jm();function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,t.default)(e,n)},a={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var r=i(function(t){a.scrollHandler(e)},t);a.scrollSpyContainers.push(e),(0,n.addPassiveEventListener)(e,`scroll`,r)}},isMounted:function(e){return a.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var t=window.pageYOffset!==void 0,n=(document.compatMode||``)===`CSS1Compat`;return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=window.pageXOffset!==void 0,n=(document.compatMode||``)===`CSS1Compat`;return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(a.scrollSpyContainers[a.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach(function(t){return t(a.currentPositionX(e),a.currentPositionY(e))})},addStateHandler:function(e){a.spySetState.push(e)},addSpyHandler:function(e,t){var n=a.scrollSpyContainers[a.scrollSpyContainers.indexOf(t)];n.spyCallbacks||=[],n.spyCallbacks.push(e),e(a.currentPositionX(t),a.currentPositionY(t))},updateStates:function(){a.spySetState.forEach(function(e){return e()})},unmount:function(e,t){a.scrollSpyContainers.forEach(function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.indexOf(t)>-1&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)}),a.spySetState&&a.spySetState.length&&a.spySetState.indexOf(e)>-1&&a.spySetState.splice(a.spySetState.indexOf(e),1),document.removeEventListener(`scroll`,a.scrollHandler)},update:function(){return a.scrollSpyContainers.forEach(function(e){return a.scrollHandler(e)})}};e.default=a})),Xm=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=function(e,t){var n=e.indexOf(`#`)===0?e.substring(1):e,r=n?`#`+n:``,i=window&&window.location,a=r?i.pathname+i.search+r:i.pathname+i.search;t?history.pushState(history.state,``,a):history.replaceState(history.state,``,a)},n=function(){return window.location.hash.replace(/^#/,``)},r=function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(e.compareDocumentPosition(t)&16)}},i=function(e){return getComputedStyle(e).position!==`static`},a=function(e,t){for(var n=e.offsetTop,r=e.offsetParent;r&&!t(r);)n+=r.offsetTop,r=r.offsetParent;return{offsetTop:n,offsetParent:r}};e.default={updateHash:t,getHash:n,filterElementInContainer:r,scrollOffset:function(e,t,n){if(n)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position===`static`?t.offsetLeft-e.offsetLeft:t.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(i(e)){if(t.offsetParent!==e){var r=a(t,function(t){return t===e||t===document}),o=r.offsetTop;if(r.offsetParent!==e)throw Error(`Seems containerElement is not an ancestor of the Element`);return o}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var s=function(e){return e===document};return a(t,s).offsetTop-a(e,s).offsetTop}}})),Zm=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default={defaultEasing:function(e){return e<.5?(e*2)**2/2:1-((1-e)*2)**2/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}})),Qm=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=Jm(),n=[`mousedown`,`mousewheel`,`touchmove`,`keydown`];e.default={subscribe:function(e){return typeof document<`u`&&n.forEach(function(n){return(0,t.addPassiveEventListener)(document,n,e)})}}})),$m=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t={registered:{},scrollEvent:{register:function(e,n){t.registered[e]=n},remove:function(e){t.registered[e]=null}}};e.default=t})),eh=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};a(Xm());var n=a(Zm()),r=a(Qm()),i=a($m());function a(e){return e&&e.__esModule?e:{default:e}}var o=function(e){return n.default[e.smooth]||n.default.defaultEasing},s=function(e){return typeof e==`function`?e:function(){return e}},c=function(){if(typeof window<`u`)return window.requestAnimationFrame||window.webkitRequestAnimationFrame},l=function(){return c()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),u=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},d=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=window.pageXOffset!==void 0,r=(document.compatMode||``)===`CSS1Compat`;return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},f=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=window.pageXOffset!==void 0,r=(document.compatMode||``)===`CSS1Compat`;return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},p=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,r=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},m=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,r=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},h=function e(t,n,r){var a=n.data;if(!n.ignoreCancelEvents&&a.cancel){i.default.registered.end&&i.default.registered.end(a.to,a.target,a.currentPositionY);return}if(a.delta=Math.round(a.targetPosition-a.startPosition),a.start===null&&(a.start=r),a.progress=r-a.start,a.percent=a.progress>=a.duration?1:t(a.progress/a.duration),a.currentPosition=a.startPosition+Math.ceil(a.delta*a.percent),a.containerElement&&a.containerElement!==document&&a.containerElement!==document.body?n.horizontal?a.containerElement.scrollLeft=a.currentPosition:a.containerElement.scrollTop=a.currentPosition:n.horizontal?window.scrollTo(a.currentPosition,0):window.scrollTo(0,a.currentPosition),a.percent<1){var o=e.bind(null,t,n);l.call(window,o);return}i.default.registered.end&&i.default.registered.end(a.to,a.target,a.currentPosition)},g=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},_=function(e,t,n,a){if(t.data=t.data||u(),window.clearTimeout(t.data.delayTimeout),r.default.subscribe(function(){t.data.cancel=!0}),g(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?d(t):f(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition===t.data.targetPosition){i.default.registered.end&&i.default.registered.end(t.data.to,t.data.target,t.data.currentPosition);return}t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=s(t.duration)(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=a;var c=o(t),p=h.bind(null,c,t);if(t&&t.delay>0){t.data.delayTimeout=window.setTimeout(function(){i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),l.call(window,p)},t.delay);return}i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),l.call(window,p)},v=function(e){return e=t({},e),e.data=e.data||u(),e.absolute=!0,e};e.default={animateTopScroll:_,getAnimationType:o,scrollToTop:function(e){_(0,v(e))},scrollToBottom:function(e){e=v(e),g(e),_(e.horizontal?p(e):m(e),e)},scrollTo:function(e,t){_(e,v(t))},scrollMore:function(e,t){t=v(t),g(t),_(e+(t.horizontal?d(t):f(t)),t)}}})),th=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n=a(Xm()),r=a(eh()),i=a($m());function a(e){return e&&e.__esModule?e:{default:e}}var o={},s=void 0;e.default={unmount:function(){o={}},register:function(e,t){o[e]=t},unregister:function(e){delete o[e]},get:function(e){return o[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return s=e},getActiveLink:function(){return s},scrollTo:function(e,a){var o=this.get(e);if(!o){console.warn(`target Element not found`);return}a=t({},a,{absolute:!1});var s=a.containerId,c=a.container,l=void 0;l=s?document.getElementById(s):c&&c.nodeType?c:document,a.absolute=!0;var u=a.horizontal,d=n.default.scrollOffset(l,o,u)+(a.offset||0);if(!a.smooth){i.default.registered.begin&&i.default.registered.begin(e,o),l===document?a.horizontal?window.scrollTo(d,0):window.scrollTo(0,d):l.scrollTop=d,i.default.registered.end&&i.default.registered.end(e,o);return}r.default.animateTopScroll(d,a,e,o)}}})),nh=s(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),rh=s(((e,t)=>{var n=nh();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),ih=s(((e,t)=>{t.exports=rh()()})),ah=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),Jm();var t=n(Xm());function n(e){return e&&e.__esModule?e:{default:e}}e.default={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener(`hashchange`,this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout(function(){e.scrollTo(t,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var r=this.containers[e]||document;n.scrollTo(e,{container:r})}},getHash:function(){return t.default.getHash()},changeHash:function(e,n){this.isInitialized()&&t.default.getHash()!==e&&t.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener(`hashchange`,this.handleHashChange)}}})),oh=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=c(p()),i=c(Ym()),a=c(th()),o=c(ih()),s=c(ah());function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function u(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function d(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f={to:o.default.string.isRequired,containerId:o.default.string,container:o.default.object,activeClass:o.default.string,activeStyle:o.default.object,spy:o.default.bool,horizontal:o.default.bool,smooth:o.default.oneOfType([o.default.bool,o.default.string]),offset:o.default.number,delay:o.default.number,isDynamic:o.default.bool,onClick:o.default.func,duration:o.default.oneOfType([o.default.number,o.default.func]),absolute:o.default.bool,onSetActive:o.default.func,onSetInactive:o.default.func,ignoreCancelEvents:o.default.bool,hashSpy:o.default.bool,saveHashHistory:o.default.bool,spyThrottle:o.default.number};e.default=function(e,o){var c=o||a.default,p=function(a){d(o,a);function o(e){l(this,o);var t=u(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return m.call(t),t.state={active:!1},t}return n(o,[{key:`getScrollSpyContainer`,value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:`componentDidMount`,value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();i.default.isMounted(e)||i.default.mount(e,this.props.spyThrottle),this.props.hashSpy&&(s.default.isMounted()||s.default.mount(c),s.default.mapContainer(this.props.to,e)),i.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:`componentWillUnmount`,value:function(){i.default.unmount(this.stateHandler,this.spyHandler)}},{key:`render`,value:function(){var n=``;n=this.state&&this.state.active?((this.props.className||``)+` `+(this.props.activeClass||`active`)).trim():this.props.className;var i={};i=this.state&&this.state.active?t({},this.props.style,this.props.activeStyle):t({},this.props.style);var a=t({},this.props);for(var o in f)a.hasOwnProperty(o)&&delete a[o];return a.className=n,a.style=i,a.onClick=this.handleClick,r.default.createElement(e,a)}}]),o}(r.default.PureComponent),m=function(){var e=this;this.scrollTo=function(n,r){c.scrollTo(n,t({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,n){var r=e.getScrollSpyContainer();if(!s.default.isMounted()||s.default.isInitialized()){var i=e.props.horizontal,a=e.props.to,o=null,l=void 0,u=void 0;if(i){var d=0,f=0,p=0;if(r.getBoundingClientRect&&(p=r.getBoundingClientRect().left),!o||e.props.isDynamic){if(o=c.get(a),!o)return;var m=o.getBoundingClientRect();d=m.left-p+t,f=d+m.width}var h=t-e.props.offset;l=h>=Math.floor(d)&&h<Math.floor(f),u=h<Math.floor(d)||h>=Math.floor(f)}else{var g=0,_=0,v=0;if(r.getBoundingClientRect&&(v=r.getBoundingClientRect().top),!o||e.props.isDynamic){if(o=c.get(a),!o)return;var y=o.getBoundingClientRect();g=y.top-v+n,_=g+y.height}var b=n-e.props.offset;l=b>=Math.floor(g)&&b<Math.floor(_),u=b<Math.floor(g)||b>=Math.floor(_)}var x=c.getActiveLink();if(u){if(a===x&&c.setActiveLink(void 0),e.props.hashSpy&&s.default.getHash()===a){var S=e.props.saveHashHistory,C=S!==void 0&&S;s.default.changeHash(``,C)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(a,o))}if(l&&(x!==a||e.state.active===!1)){c.setActiveLink(a);var w=e.props.saveHashHistory,T=w!==void 0&&w;e.props.hashSpy&&s.default.changeHash(a,T),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(a,o))}}}};return p.propTypes=f,p.defaultProps={offset:0},p}})),sh=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=r(p()),n=r(oh());function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function a(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function o(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(e){o(n,e);function n(){var e,r,o,s;i(this,n);var c=[...arguments];return s=(r=(o=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),o),o.render=function(){return t.default.createElement(`a`,o.props,o.props.children)},r),a(o,s)}return n}(t.default.Component);e.default=(0,n.default)(s)})),ch=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n=i(p()),r=i(oh());function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function o(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function s(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(e){s(r,e);function r(){return a(this,r),o(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return t(r,[{key:`render`,value:function(){return n.default.createElement(`button`,this.props,this.props.children)}}]),r}(n.default.Component);e.default=(0,r.default)(c)})),lh=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=o(p());o(Eu());var i=o(th()),a=o(ih());function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function c(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function l(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e.default=function(e){var o=function(a){l(o,a);function o(e){s(this,o);var t=c(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return t.childBindings={domNode:null},t}return n(o,[{key:`componentDidMount`,value:function(){if(typeof window>`u`)return!1;this.registerElems(this.props.name)}},{key:`componentDidUpdate`,value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:`componentWillUnmount`,value:function(){if(typeof window>`u`)return!1;i.default.unregister(this.props.name)}},{key:`registerElems`,value:function(e){i.default.register(e,this.childBindings.domNode)}},{key:`render`,value:function(){return r.default.createElement(e,t({},this.props,{parentBindings:this.childBindings}))}}]),o}(r.default.Component);return o.propTypes={name:a.default.string,id:a.default.string},o}})),uh=s((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=o(p()),i=o(lh()),a=o(ih());function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function c(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function l(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(e){l(i,e);function i(){return s(this,i),c(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return n(i,[{key:`render`,value:function(){var e=this,n=t({},this.props);return delete n.name,n.parentBindings&&delete n.parentBindings,r.default.createElement(`div`,t({},n,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),i}(r.default.Component);u.propTypes={name:a.default.string,id:a.default.string},e.default=(0,i.default)(u)})),dh=s(((e,t)=>{var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function a(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function o(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=p();Eu(),Xm();var c=Ym(),l=th(),u=ih(),d=ah(),f={to:u.string.isRequired,containerId:u.string,container:u.object,activeClass:u.string,spy:u.bool,smooth:u.oneOfType([u.bool,u.string]),offset:u.number,delay:u.number,isDynamic:u.bool,onClick:u.func,duration:u.oneOfType([u.number,u.func]),absolute:u.bool,onSetActive:u.func,onSetInactive:u.func,ignoreCancelEvents:u.bool,hashSpy:u.bool,spyThrottle:u.number};t.exports={Scroll:function(e,t){console.warn(`Helpers.Scroll is deprecated since v1.7.0`);var u=t||l,p=function(t){o(l,t);function l(e){i(this,l);var t=a(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return m.call(t),t.state={active:!1},t}return r(l,[{key:`getScrollSpyContainer`,value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:`componentDidMount`,value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();c.isMounted(e)||c.mount(e,this.props.spyThrottle),this.props.hashSpy&&(d.isMounted()||d.mount(u),d.mapContainer(this.props.to,e)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:`componentWillUnmount`,value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:`render`,value:function(){var t=``;t=this.state&&this.state.active?((this.props.className||``)+` `+(this.props.activeClass||`active`)).trim():this.props.className;var r=n({},this.props);for(var i in f)r.hasOwnProperty(i)&&delete r[i];return r.className=t,r.onClick=this.handleClick,s.createElement(e,r)}}]),l}(s.Component),m=function(){var e=this;this.scrollTo=function(t,r){u.scrollTo(t,n({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){u.getActiveLink()!==e.props.to&&(e.state!==null&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var n=e.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var r=e.props.to,i=null,a=0,o=0,s=0;if(n.getBoundingClientRect&&(s=n.getBoundingClientRect().top),!i||e.props.isDynamic){if(i=u.get(r),!i)return;var l=i.getBoundingClientRect();a=l.top-s+t,o=a+l.height}var f=t-e.props.offset,p=f>=Math.floor(a)&&f<Math.floor(o),m=f<Math.floor(a)||f>=Math.floor(o),h=u.getActiveLink();if(m)return r===h&&u.setActiveLink(void 0),e.props.hashSpy&&d.getHash()===r&&d.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),c.updateStates();if(p&&h!==r)return u.setActiveLink(r),e.props.hashSpy&&d.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),c.updateStates()}}};return p.propTypes=f,p.defaultProps={offset:0},p},Element:function(e){console.warn(`Helpers.Element is deprecated since v1.7.0`);var t=function(t){o(c,t);function c(e){i(this,c);var t=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return t.childBindings={domNode:null},t}return r(c,[{key:`componentDidMount`,value:function(){if(typeof window>`u`)return!1;this.registerElems(this.props.name)}},{key:`componentDidUpdate`,value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:`componentWillUnmount`,value:function(){if(typeof window>`u`)return!1;l.unregister(this.props.name)}},{key:`registerElems`,value:function(e){l.register(e,this.childBindings.domNode)}},{key:`render`,value:function(){return s.createElement(e,n({},this.props,{parentBindings:this.childBindings}))}}]),c}(s.Component);return t.propTypes={name:u.string,id:u.string},t}}})),fh=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Helpers=e.ScrollElement=e.ScrollLink=e.animateScroll=e.scrollSpy=e.Events=e.scroller=e.Element=e.Button=e.Link=void 0;var t=d(sh()),n=d(ch()),r=d(uh()),i=d(th()),a=d($m()),o=d(Ym()),s=d(eh()),c=d(oh()),l=d(lh()),u=d(dh());function d(e){return e&&e.__esModule?e:{default:e}}e.Link=t.default,e.Button=n.default,e.Element=r.default,e.scroller=i.default,e.Events=a.default,e.scrollSpy=o.default,e.animateScroll=s.default,e.ScrollLink=c.default,e.ScrollElement=l.default,e.Helpers=u.default,e.default={Link:t.default,Button:n.default,Element:r.default,scroller:i.default,Events:a.default,scrollSpy:o.default,animateScroll:s.default,ScrollLink:c.default,ScrollElement:l.default,Helpers:u.default}}))(),ph={breakpoint:{xxs:`280px`,xs:`320px`,sm:`375px`,md:`600px`,lg:`768px`,xl:`1024px`,xl2:`1100px`}},mh=Q.div`
  width: 20px;
  height: 16px;
  position: relative;
`,hh=Q.span`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
  transform-origin: center;
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;

  &:nth-child(1) {
    transform: translateY(-7px);
    ${({$open:e})=>e&&`transform: translateY(0) rotate(45deg);`}
  }

  &:nth-child(2) {
    transform: translateY(0);
    ${({$open:e})=>e&&`transform: translateY(0) scaleX(0); opacity: 0;`}
  }

  &:nth-child(3) {
    transform: translateY(7px);
    ${({$open:e})=>e&&`transform: translateY(0) rotate(-45deg);`}
  }
`,gh=({$open:e})=>(0,h.jsxs)(mh,{children:[(0,h.jsx)(hh,{$open:e}),(0,h.jsx)(hh,{$open:e}),(0,h.jsx)(hh,{$open:e})]}),_h=-120,vh=-25,yh=-40,bh=-180,xh=-90,Sh={English:[{name:`Home`,slug:`home`,offset:_h},{name:`About me`,slug:`about`,offset:vh},{name:`Projects`,slug:`projects`,offset:yh,offsetMobile:bh},{name:`Contact`,slug:`contact`,offset:xh}],Polish:[{name:`Strona główna`,slug:`home`,offset:_h},{name:`O mnie`,slug:`about`,offset:vh},{name:`Projekty`,slug:`projects`,offset:yh,offsetMobile:bh},{name:`Kontakt`,slug:`contact`,offset:xh}],Spanish:[{name:`Inicio`,slug:`home`,offset:_h},{name:`Acerca de`,slug:`about`,offset:vh},{name:`Proyectos`,slug:`projects`,offset:yh,offsetMobile:bh},{name:`Contacto`,slug:`contact`,offset:xh}]},Ch=Z`
  @media (forced-colors: active) {
    forced-color-adjust: none;
    background: none;
    color: CanvasText;
    -webkit-text-fill-color: CanvasText;
  }
`,wh=wp`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`,Th=wp`
  0% { transform: rotate(0deg) scale(1.1); }
  10% { transform: rotate(20deg) scale(1.1); }
  20% { transform: rotate(-10deg) scale(1.1); }
  30% { transform: rotate(20deg) scale(1.1); }
  40% { transform: rotate(-10deg) scale(1.1); }
  50% { transform: rotate(20deg) scale(1.1); }
  60% { transform: rotate(-10deg) scale(1.1); }
  70% { transform: rotate(20deg) scale(1.1); }
  80% { transform: rotate(-10deg) scale(1.1); }
  90% { transform: rotate(10deg) scale(1.1); }
  100% { transform: rotate(0deg) scale(1.1); }
`,Eh=wp`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Dh=wp`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Oh=wp`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,kh=wp`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ah=wp`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`,jh=wp`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Mh=Q.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: var(--spacing-sm) var(--spacing-xl);
  margin: 0;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--color-border);
  transition: transform var(--transition-normal);
  animation: ${jh} 0.6s ease-out;

  &.nav-hidden {
    transform: translateY(-100%);
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: 0.9rem;
  }
`,Nh=Q.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 auto;
  gap: var(--spacing-md);

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    justify-content: flex-start;
  }
`,Ph=Q.div`
  color: var(--color-text-primary);
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast);
  border: 1px solid transparent;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 20px;
  cursor: pointer;
  position: relative;

  @media (hover: hover) {
    &:hover {
      color: var(--color-primary);
      background-color: var(--color-surface);
      border-color: var(--color-border);
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    padding: 10px 14px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    padding: var(--spacing-sm) var(--spacing-md);
  }
`,Fh=Q(fh.Link)`
  text-decoration: none;
  white-space: nowrap;

  &.active ${Ph} {
    color: var(--color-white);
  }
`,Ih=Q(K.span)`
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: 20px;
  border: 1px solid var(--color-primary);
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    border-radius: 50%;
  }
`,Lh=Q.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
`,Rh=Q.div`
  color: var(--color-text-primary);
  font-weight: 800;
  font-size: 1.5rem;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: filter var(--transition-fast);
  cursor: pointer;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${wh} 15s ease-in-out infinite;
  ${Ch}
  z-index: 10;
  display: flex;
  flex-wrap: nowrap;

  &:hover {
    filter: brightness(1.1);
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    font-size: 1.2rem;
    padding: var(--spacing-sm) var(--spacing-md);
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.sm}) {
    font-size: 1rem;
  }
`,zh=Q.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 0 1 auto;
  gap: var(--spacing-sm);

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    display: none;
  }
`,Bh=Q.button`
  display: none;
  background: none;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-sm);
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  color: var(--color-text-primary);
  align-items: center;
  justify-content: center;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-primary);
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    display: flex;
  }
`,Vh=Q.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(100vh - var(--nav-height-actual, var(--nav-height-mobile)));
  background: rgba(var(--color-black-rgb), 0.4);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity var(--transition-normal),
    visibility var(--transition-normal);
  z-index: 1;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    display: block;
  }
`,Hh=Q.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--color-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  flex-direction: column;
  gap: var(--spacing-xs);
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity var(--transition-normal),
    transform var(--transition-normal),
    visibility var(--transition-normal);
  z-index: 2;

  &.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    display: flex;
  }
`,Uh=Q(fh.Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: 1rem;
  min-height: 48px;
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast);
  white-space: nowrap;

  svg {
    font-size: 1.2rem;
    color: var(--color-primary);
    flex-shrink: 0;
    width: 20px;
  }

  &.active {
    background: linear-gradient(
      135deg,
      var(--color-primary),
      var(--color-accent)
    );
    color: var(--color-white);

    svg {
      color: var(--color-white);
    }
  }
`,Wh=parseInt(ph.breakpoint.xl2,10)-1,Gh=parseInt(ph.breakpoint.lg,10),Kh=Sh.English.map(e=>e.slug),qh=()=>{let{language:e}=Op(),{nav:t}=Ip(),n=Km(Kh),r=xu(),i=Gm(`(max-width: ${Wh}px)`),a=Gm(`(max-width: ${ph.breakpoint.md})`),o=Gm(`(min-width: ${Gh}px)`),[s,c]=(0,g.useState)(!1),l=(0,g.useRef)(null),u=(0,g.useRef)(null),[d,f]=(0,g.useState)(!1);(0,g.useEffect)(()=>{let e=window.scrollY,t=!1,n=()=>{if(document.body.style.position===`fixed`){t=!1;return}if(window.innerWidth>=Gh){f(!1),t=!1;return}let n=window.scrollY,r=n-e;n<10?f(!1):r>4?f(!0):r<-4&&f(!1),e=n,t=!1},r=()=>{t||=(window.requestAnimationFrame(n),!0)};return window.addEventListener(`scroll`,r,{passive:!0}),()=>window.removeEventListener(`scroll`,r)},[]),(0,g.useEffect)(()=>{let e=l.current;if(!e)return;let t=()=>{let t=e.offsetHeight;document.documentElement.style.setProperty(`--nav-height-actual`,`${t}px`)};t();let n=new ResizeObserver(t);return n.observe(e),window.addEventListener(`resize`,t),()=>{n.disconnect(),window.removeEventListener(`resize`,t)}},[]),(0,g.useEffect)(()=>{let e=window.matchMedia(`(min-width: ${Gh}px)`),t=()=>c(!1);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,g.useEffect)(()=>(s?(document.documentElement.style.overflow=`hidden`,document.body.style.overflow=`hidden`):(document.documentElement.style.overflow=``,document.body.style.overflow=``),()=>{document.documentElement.style.overflow=``,document.body.style.overflow=``}),[s]),(0,g.useEffect)(()=>{if(!s)return;let e=e=>{e.key===`Escape`&&(c(!1),u.current?.focus())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[s]);let p=()=>{c(!1)},m=e=>a&&e.offsetMobile!=null?e.offsetMobile:e.offset,_=e=>{switch(e){case`home`:return(0,h.jsx)(_m,{});case`about`:return(0,h.jsx)(Om,{});case`projects`:return(0,h.jsx)(Cm,{});case`contact`:return(0,h.jsx)(fm,{});default:return null}};return(0,h.jsxs)(Mh,{ref:l,className:d?`nav-hidden`:``,"aria-label":t.mainAriaLabel,children:[(0,h.jsxs)(Nh,{children:[(0,h.jsx)(Pm,{onOpen:()=>c(!1)}),o&&(0,h.jsx)(Um,{}),(0,h.jsx)(Hp,{})]}),(0,h.jsx)(fh.Link,{href:`#home`,to:Sh[e][0].slug,smooth:!0,offset:Sh[e][0].offset,duration:700,onClick:p,children:(0,h.jsx)(Rh,{children:(0,h.jsx)(`span`,{children:`Derek.dev`})})},1),(0,h.jsx)(zh,{"data-testid":`desktop-menu`,children:Sh[e].map((e,t)=>(0,h.jsx)(Fh,{className:n===e.slug?`active`:void 0,"data-testid":`nav-link-${e.slug}`,href:`#${e.slug}`,to:e.slug,smooth:!0,offset:m(e),duration:700,children:(0,h.jsxs)(Ph,{children:[n===e.slug&&(0,h.jsx)(Ih,{layoutId:r?void 0:`nav-pill`}),(0,h.jsx)(Lh,{children:i?_(e.slug):e.name})]},t)},t))}),(0,h.jsx)(Bh,{ref:u,onClick:()=>c(!s),"aria-label":t.menuToggleLabel,"aria-expanded":s,children:(0,h.jsx)(gh,{$open:s})}),(0,h.jsx)(Vh,{className:s?`open`:``,onClick:()=>c(!1)}),(0,h.jsxs)(Hh,{className:s?`open`:``,"data-testid":`mobile-menu`,children:[Sh[e].map((e,t)=>(0,h.jsxs)(Uh,{className:n===e.slug?`active`:void 0,href:`#${e.slug}`,to:e.slug,smooth:!0,offset:m(e),duration:700,onClick:()=>c(!1),children:[_(e.slug),e.name]},t)),(0,h.jsx)(Wm,{})]})]})},Jh=wp`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.4); }
`,Yh=Q.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;

  span {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(var(--color-white-rgb), 0.7);
    border-radius: 50%;
    animation: ${Jh} 3s ease-in-out infinite;
    box-shadow: 0 0 6px 1px rgba(var(--color-white-rgb), 0.3);
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      animation: none;
    }
  }
`,Xh=(e=>{let t=e;return()=>(t=(t*9301+49297)%233280,t/233280)})(12345),Zh=Array.from({length:60}).map(()=>({left:`${Xh()*100}%`,top:`${Xh()*100}%`,delay:`${Xh()*3}s`,size:Xh()>.7?`3px`:`2px`})),Qh=()=>(0,h.jsx)(Yh,{children:Zh.map((e,t)=>(0,h.jsx)(`span`,{style:{left:e.left,top:e.top,animationDelay:e.delay,width:e.size,height:e.size}},t))}),$h=Q.div`
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  ${({$glass:e})=>e&&Z`
      background: rgba(var(--color-white-rgb), 0.03);
      border: 1px solid var(--color-border);
      backdrop-filter: blur(8px);
    `}

  ${({$bordered:e})=>e&&Z`
      border: 1px solid var(--color-border);
    `}

  ${({$hoverable:e})=>e&&Z`
      transition:
        border-color var(--transition-normal),
        background var(--transition-normal);

      &:hover {
        background: rgba(var(--color-white-rgb), 0.06);
        border-color: var(--color-primary);
      }
    `}
`,eg=({html:e,className:t})=>(0,h.jsx)(`div`,{className:t,"data-testid":`rich-text`,dangerouslySetInnerHTML:{__html:e}}),tg=Q.article`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-3xl);
  align-items: center;
  padding: var(--spacing-3xl) 0;
  position: relative;

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--spacing-2xl);
    padding: 10px 0 var(--spacing-2xl) 0;
  }
`,ng=Q(K.div)`
  min-width: 0;

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    order: 1;
  }
`,rg=Q(K.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  min-width: 0;
`,ig=Q.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
  border: 1px solid var(--color-border);
  border-radius: 50px;
  align-self: flex-start;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }
`,ag=Q.span`
  display: inline-block;
  color: var(--color-text-primary);
  -webkit-text-fill-color: var(--color-text-primary);
`,og=Q.span`
  display: inline-block;
`,sg=Q(eg)`
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  max-width: min(500px, 100%);

  p {
    margin: 0 0 var(--spacing-md) 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`,cg=Q.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,lg=Q($h).attrs({$glass:!0,$hoverable:!0,as:K.div})`
  min-width: 0;

  svg {
    width: 24px;
    height: 24px;
    color: var(--color-primary);
    flex-shrink: 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--spacing-md);
    text-align: left;
    padding: var(--spacing-md) 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-border);
    border-radius: 0;
    backdrop-filter: none;

    &:last-child {
      border-bottom: none;
    }
  }
`,ug=Q.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,dg=Q.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
`,fg=Q.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
  margin: 0;
`,pg=Q.div`
  position: relative;
  background: var(--color-terminal-bg);
  border: 1px solid var(--color-terminal-border);
  border-radius: var(--radius-xl);
  box-shadow: 0 24px 60px var(--color-terminal-shadow);
  overflow: hidden;
`,mg=Q.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: 14px 18px;
  background: var(--color-terminal-header-bg);
  border-bottom: 1px solid var(--color-terminal-border);
`,hg=Q.div`
  display: flex;
  gap: 8px;
`,gg=Q.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &:nth-child(1) {
    background: var(--color-code-red);
  }

  &:nth-child(2) {
    background: var(--color-code-yellow);
  }

  &:nth-child(3) {
    background: var(--color-code-green);
  }
`,_g=Q.span`
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.85rem;
  color: var(--color-text-secondary);

  span {
    color: var(--color-primary);
    margin-right: 6px;
  }
`,vg=Q.pre`
  margin: 0;
  padding: 24px;
  font-family: "Fira Code", "Courier New", monospace;
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  line-height: 1.7;
  color: var(--color-code-text);
  overflow: auto;
  tab-size: 2;

  .comment {
    color: var(--color-code-comment);
  }

  .keyword {
    color: var(--color-code-keyword);
  }

  .type {
    color: var(--color-code-type);
  }

  .string {
    color: var(--color-code-string);
  }

  .property {
    color: var(--color-code-property);
  }

  .boolean {
    color: var(--color-code-boolean);
  }

  .variable {
    color: var(--color-code-variable);
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.sm}) {
    padding: 18px;
  }
`,yg=`<span class="comment">// Journey: From Electronics to Full-Stack</span>
<span class="keyword">class</span> <span class="type">Derek</span> {
  <span class="comment">// Foundation</span>
  <span class="property">foundation</span>: <span class="type">string</span>[] = [
    <span class="string">'Electronics'</span>, <span class="string">'C++'</span>, <span class="string">'OpenGL'</span>,
    <span class="string">'Embedded Systems'</span>
  ];

  <span class="comment">// Current Stack</span>
  <span class="property">stack</span>: <span class="type">string</span>[] = [
    <span class="string">'React'</span>, <span class="string">'Next.js'</span>, <span class="string">'TypeScript'</span>,
    <span class="string">'Supabase'</span>, <span class="string">'Cloud Technologies'</span>
  ];

  <span class="comment">// Philosophy</span>
  <span class="property">philosophy</span> = {
    <span class="variable">fullStack</span>: <span class="boolean">true</span>,
    <span class="variable">aiPartner</span>: <span class="boolean">true</span>,
    <span class="variable">qualityFocused</span>: <span class="boolean">true</span>
  };
}`,bg=()=>(0,h.jsxs)(pg,{"aria-hidden":`true`,children:[(0,h.jsxs)(mg,{children:[(0,h.jsxs)(hg,{children:[(0,h.jsx)(gg,{}),(0,h.jsx)(gg,{}),(0,h.jsx)(gg,{})]}),(0,h.jsxs)(_g,{children:[(0,h.jsx)(`span`,{children:` >`}),`Code Terminal`]})]}),(0,h.jsx)(vg,{dangerouslySetInnerHTML:{__html:yg}})]}),xg=Q.h1`
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  margin: 0;
  color: var(--color-text-primary);
  line-height: 1.1;
  position: relative;

  background: linear-gradient(
    135deg,
    var(--color-text-primary) 0%,
    var(--color-primary) 50%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${wh} 15s ease-in-out infinite;
  ${Ch}

  &:hover img {
    animation: ${Th} 4s infinite;
  }
`,Sg=[ym,wm,bm,cm],Cg=({id:e})=>{let{about:t}=Ip();return(0,h.jsxs)(tg,{id:e,children:[(0,h.jsx)(ng,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:(0,h.jsx)(bg,{})}),(0,h.jsxs)(rg,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:[(0,h.jsxs)(ig,{children:[(0,h.jsx)(Em,{}),t.journeyLabel]}),(0,h.jsxs)(xg,{as:`h2`,children:[(0,h.jsx)(ag,{children:t.journeyHeader.split(` `).slice(0,2).join(` `)}),` `,(0,h.jsx)(og,{children:t.journeyHeader.split(` `).slice(2).join(` `)})]}),(0,h.jsx)(sg,{html:t.journeyParagraph}),(0,h.jsx)(cg,{children:t.journeyFeatures.map((e,t)=>{let n=Sg[t]??bm;return(0,h.jsxs)(lg,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2+t*.08},children:[(0,h.jsx)(n,{}),(0,h.jsxs)(ug,{children:[(0,h.jsx)(dg,{children:e.title}),(0,h.jsx)(fg,{children:e.description})]})]},e.title)})})]})]})};function wg(e){return $({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`7`,y1:`17`,x2:`17`,y2:`7`},child:[]},{tag:`polyline`,attr:{points:`7 7 17 7 17 17`},child:[]}]})(e)}function Tg(e){return $({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`15 18 9 12 15 6`},child:[]}]})(e)}function Eg(e){return $({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`9 18 15 12 9 6`},child:[]}]})(e)}var Dg=`data:image/webp;base64,UklGRvQFAABXRUJQVlA4IOgFAABwGgCdASpIAEgAPmEkj0UkIiEXqgesQAYEtgCDAK1ne3iHufmvVX+b/eb1m9ZkdHtJ/e+cj/c+wDzAP0j8QD3Kfz//Seor9h/2d93D/aeoD0AP7F/c+sr9BPyw/2++Df9v/219nTNHex//RV6u/PKsYDaZuad5Enw5ELD10OVqjP/D7S2+EFvnHkj9L+H8mHjn1++TnKBu+IKKogV2rxvQmC0pth6ZlgX54/3w74UfCPrOLoY5PAU7RmR42M0UitTz+Z0Wle6i2nEE9yn6/b+3lRaQpC96bJEVC3wAAP762KNibx/sX0NDB/RXS+RfrSCCcKxIXSEYFjT1LVrBolcNzWS56bPhkH2nxSVP51DFW1yGyVezu7Wi8tG/i7NDvFeRCo5rHYA8aBPYhWXfyCDLZRArbBtO6MOrgdt8HQHgKVJeld4RjJrE6tWa5/c1I42UU6I7xq3lvcWe2qWUYkpprWRrvWH5Rd11iR2Z0KJviGe58vL2KHvsvFn+KB5eDMQ2uetchK676aAESSL+uqmM5mOAYjc49rWOxm1ZkWU2eeTKn2bEP+ld1vFNJX8OK0EsbZcdbPHE+S6d0aAc/Nc90pIdBTkbGzISOxS7hY+ohdyvVuThi+7m8NvzgYAguNq2SQW2NiXcCqdSHWlMwLrWHzzYtN8BA5YipG/9SXvxOQqZl3gQFFDfcSTtyuK5GXdYm83Vkf2Nt6CeSjX2HP4iejJO1z/sdXP+JyoyL/NsNbKjSnhhqUH1f2yNx9bi3Y481m+sT1+45R6+R550i+kERGY3U0E2P5e8pa7qNNqYk8RKuzzxHeeiZWN4bhGXuZx9XIXQ7yn3K9T6SF/jU7VV+0NHUMsuGFd1C/3+BEuqNH0NAi3ZVqtZCHTRSNi0F5zg94P3KhIHAZUUXkZMmRMWjTN61pDvnqpIqBHdN/96pXmWEN837SR0ZU3//5O/T9r+D1S/CxQKw2Sd7qW5xAs074Dv04dC4qqSMWugg/hj4ClFKDgHqdH+PcrB4OxobR6yCYks25Yom0cegG5/dOhMEXrJa5QgTEVkJYeQ+x5Eu//SuMR8qMduXFgVyrsGVpNM4CR5kaqF8jbF7LlQk+QTHN+nak8r+fn24jNlV4Fi0ReHexGcqRrWAjdOeZs3nd61oDHLXmqfDdLLZWk3fc99/KxTxfX8rL1gBRuL97Nnwc0gGUwk2cZX3jtfV0GbWQ1RBAWHdIT0pH4wtEre3vcSuzIz8MDnDy8bEEx0MM7WcPYVN7vRbEUV2lW+gYIO9Iu+j22U/w/53/jYPdiLdpP99npDS5o7P1h4wvekaIrDH0ojWJttv81dHkaAMVAdOktkynnOSyi6BfNQO4sqbwNC7mAM9UZ6Veeba9xzj1HG/WaP2/TymjK09Z3AJLJJ64VaAkvsLApxdP6oVqV9og20Sz+3CEASwiT22NOm8q6MHdUHULM/gERzbHYPbGczERb3KMFtCe46fU3MvT2Sq7lcz4AVgf+HA+tcoCmJ3hmuEi6KUbPP6KcVHGav+ApeBFsap/vJQLZ9qzjObNliFCVRd3GpzpAcdFi0BvjEpcGXPxiUug/0tGeaPRCAhyAFq7EZdZhBx88bffWCkMBak7KB/kI6mHhcUxIbstg2EaM/RvC/hgwK6Hjlw5TlQtqFHn6nLIsQR26JMlcPaWr/eudoZiQc/0fyZb60QuPZlZyY1HDGTwppVNn2r+ZWe1t2HQLcfD1k/Uvj9nrcEWv/5KHsgxsq0Wf/Z/JNRIAY3OP4hafrvU7GNPPKmkVIVGS745DsO0yjGJ1w7fmIXHcG+I4pN5wDpx/G5SK15j1Md286OvS1ZE7j00f4pMRtnXg7yoqGkTxzGCJAvtFw0jn9GoumKhkfK7NHPH37g4XX65RrIlnhQ9bbwftF7de7CT/thr+irlAbD5smmh1Ud6Gra/YQz/hwaGlV/F7QacZIHJ58ijzsr2o6ObeNOFn5WxsFX0ZPNZmQpD/OcT4oVbPb4T2n7IY/7gFsAAA=`,Og=`data:image/webp;base64,UklGRiADAABXRUJQVlA4IBQDAACwEQCdASpIAEgAPmEwlEekIqIhIUoAgAwJaQAV4114f1+yIfcL7Z8qvODtU/4rexsnfRBzk6QLHR/oPTQzi/Qv/Z/wHwFfyL+u9af0Vf2SWwwH6V3uR4tAmjoEXq1/Gdlzs6OBL5BP4vqrLT0FlsIoKXrPmp3alsAPKKbGRnN3iOq6R479RU/QVvhufzhAA1wX8ZZqU4AA/v3AlDnDPt/7/Q3/S04Df8nYKr/g9IJrUJhp/As1NlviW64nlK/nYLhzagD+B48gLCe/2AGQW3LS6B8iehn/8INgsb71fyTJf8y+siRTprxg0uIrhUB8qngIEEPXwADEinlT8mJvmJUXnYe4K2YngiLtQDMCwmvTLC6JdUoBeVvp7K1OenhyC8D8KGodTP/KAqTXK7veQplTJWOmIiCQX6EEzSiuPifjv8Ss0eXZTB2F0iBfvs+7NThm1fkuEDy6sRvhhKO6Ok4lgNrqfOo6CrF6FBkHzgMeooBd0FR0jS9kN1q70SL52pUU/DsWr++3n7qGtcP+PKa2N/nqNHOO7qw2MYlbUeVrAhu2y5VWtRwfhOQAYLVtCxOtfZARmI/8/4MS+AQIHL1QMIeCZEXkkmLxPYu/ZMX/bDTaj6by3FZKG1jwUFk2kELa96OG2rWsHvRGitZluARypSRMS900JgAL8y9QfW//6y65bWUv/yFB9Shfr6Y6cr5sq40h3TIKZ+getT25DWLU3drDxhqbyaUzRH4OC5FDneaSsBQNZP9J5jExeGcvuLTqLwNTkB6BVcBIjahSJkgV83kcfdkWN57gl/Emp/j/jWgW4tPSacX1LNjtNHcj//8xR7gW+Ww4k+g0ndbbcr6tjTFYxzXffp+zXjDNKooyNF6E5bU/QQ1NOlPkOLaLTjpIZ/7sdxwX50jeSoXL+RZU+MeurMmrXdtmtnX7Lc27+l1f20ER6LmIuyuvPfT3B9MSpCIJPvjBRTvgZxIGi2H/oxYvIAU8U9iLo8N+ZGQHr6xiJg/mcLzk5toe/a6AxCZYxPdhkWLN+mSHlejgZL6gAAAAAA==`,kg=[{iconURL:`data:image/webp;base64,UklGRvwHAABXRUJQVlA4WAoAAAAQAAAARwAARwAAQUxQSJUCAAABkJztf9pIP8nDzFMBQwU7c1veIpiZebeIyZRCJ2pgcei4vElm6TYk6f87hK1/ARHhwG3bSLInuGdm703yBFRHU2cB9EzfyCxtZHdD2M1uLGVuzPQAsHUGqdEkAIbuzu+wIvOL94YBJCYty6Dj3OoBheKcDyKkSPDOBQoP1s53wqRiJBa9r79TpFBbSRdKRfjjTR9sksJZzY92KN4Lq2PxI9p53FzrSdbi6DaDC6yJwQVuH4e1tZShJUMWW7UawrkWVF9Vh7EPdJ6p0Dt+HEdd1XLqP50wJYrj/9Ooq1IuBfFMkV7CZdRVJTfoA1Nl8LyBuirkMr0wZYpnZTPBmRBSF1JCOFPhPhaT/xgYgYH/plDu82vQ8paeUej5tgWmXCxDx0h0nENSRk6VZuMkTyEpja3HxXpJKMHT4li80NMiZTCYpcSEMDsAU9BvCjqueo0EBp1fGOIi8HMnTILz9IxMz3NIDJY1YBkGY4eU2BAejAH3i6tjF98HFgp+fHcBvXlKfAhzvTMF0XBM36DTAMcbGS2YXaLXAM/FDQYNCFzPainJ7mrBrlAJgx7ocfSUrKu5kJ7Pv57vo57fBz2/V3p+P9X8nqv5f7kHjB0o+b/T8v+rqx/o/KyjP0GC1zr6JRgMqOjfNPWTMGj5FLe//dQCo6PfPolER/+fQaJvHoHF5N9o89EkrJp5TdH8WPG4Hmme1TFfX0Kdmnlfxf7hw3jVAiRoTm0fwqJ9SI37ma2U9jPHYG3t+6K8gn0RgMSi99V3ijgXKqYkOCfCH6/7YEvKagwadJxdOaBQnPNBhBQJ3rlA4cHa+U6YomgqBoChO/P5ytn8wr1hAMVWSkadBdB95Mbs4np2N4Td7Pri7I3pbgC2rkoLAFZQOCBABQAAkBgAnQEqSABIAD5hKpFFpCKhkzs3MEAGBLYAWnMYre8kPqvIMcP+H+TnPr1l8mfwA/wHsA8wD9C/MA9QH8o/0fqA/Xv/Y+0B/FP9V7J/QA/p/+56wD9o/YA/a70qf2V+Cf9mP26///vNf/+MAuk+wGUDwH0q0zrx6PojsWr/gLjuqMBCjipYQAWagY6oPfms97lxa/4W1iBcWHlX83x6ZkDFOZGSurWalWgswAoai/Y0IG6GIOul/NffxUonuXT2GmD7naKAuXJqpLDqwAD+/1bBoGWZPtJ29B0xFTP9oWBml6T+U80lC1T2Q5s/0J1ZctkL07/vH2ZYq74AjPi/4a5WttWvAMJF5OaBSqT1a5s+2TcVYR96+gFp8FWphEjIBSL4naa8jxPh1G4OQeYp1oNamjyFrW6V1lL4OLNXA0DYMn1Ozb8AEPWLdaSJOMk5TyXMbbIEwMfjhyi3RZjApyYZQmK1qin+Dw/EeIMf2xotcjcb//vH7//+aMKfX0Ji3525NTaCbZhBn/paF6fC5zhK3bShnDBk0mgf0QG72f5zv4Q3GksJYShVvjibxPYscuNagDVZNdVv24yBJuBnQH+FPN7shUmNw8+0B2rZKK9icYNwCqTqVTd03bbwdXsOa1xIYR03NnBkm56p4+7spSB2yOY+2dxdG9bSJ1dKv+DEJRB3tzZy6OM+svekfGKfodAoN6+LSGRbmPuBQKHrduEtuCc+z0BCt4X5lBBELB2Hi3rO6jQValS17gELwQn/+C9hFmO2jd/Sc5kLxFiiyZJRGWzxxp0uUm4r42+ECau7wnsPAtjAg6b1uoZyf4U3ZYQOB3v/m395668fGnnVJ+++e2EaGOBKaaFPXT73Xu+NJJKpTUmrZK0S9HwDixjELGdFCh1GaEUxweJz72cxhFFlk/X4swmFDAejzvP1c82EWiHke0iloQAtk/4x4J5CxT/Y6P1b5DqmhygG1cN+uLzfZ+mKSDBNln/SoNfrs/+xz0vyNmKnKYmFgVhrPOZXZS6llebcKE5+QcgZQlZcxpQ8vMEgfejpZLICxM86lLFxaljzcVoP/A12SqF/S0FZoSqSmtBJCHrfhhLQUdW1DE82SWEoLoJqNPt9cfISLpnS/XuszIITAHR3TZdm11Rcc7QhNmAForRZ1lT2WAYu69z5rsEGXn87ML8sOn8mKG+sFwQNA6QlJ61i7wULqHYnm7bFeT7vm8FccRb8Hsw3I8mgw4dw9ld+tlLr/RM0GeS9g7/B5AGJmwkoB4sXkLKS7pKq/osfWX9GXNi/ohnIk8PFNcjgGj4hEmLcchoA7qb/eZBI531UD3bxVb+XuaHtMIFtZG7cOTGHicxv9mQQ8v2nyVkJf+0c5r359j15Whn08wwHhWmQT1JpYP1wCwOXP0ndxtI4XETL2MG12aprBvK8BBHtOMtuSrD52TFwbN1sKRmeVZlvsF5EBeCvgp28uUquHJWRGJEVdLPV/DGBwYt2PMaWmddxRKAYb1GGRFP3TUkT7EbzBjPQFmRftklgLxSzB3F7Vz8lJxI2gKkCHs4pQXx3OW8jKLjTEv4v521pnapPqQS7SdHv/mt///NtBY7MXsu9nqY/myFa2f2fN3Vgkh8JbRewSVgDj15yW+TnRtpgON/uwLASwvEfkux8eWvWX6mnW/h6wUHv1P6M01SlFo8KhqcMPiIQaYFyfQM/uXlz9L6SKYUaGYWhzBCmeeyaRtyChFxAkxH/goa0YhClU2xO0dAZHVfVjWuaY2eFg6jUtaeZn/9uFAwuAAAA`,iconWidth:72,iconHeight:72,id:`whatsApp`,link:`https://wa.me/003530862013944`,name:`WhatsApp`,label:{English:`Chat with me instantly`,Polish:`Napisz do mnie od razu`,Spanish:`Escríbeme al instante`},accent:`#25D366`},{iconURL:Og,iconWidth:72,iconHeight:72,id:`gitHub`,link:`https://github.com/BoosterTech`,name:`GitHub`,label:{English:`Check out my code`,Polish:`Zobacz mój kod`,Spanish:`Echa un vistazo a mi código`},accent:`#64748b`},{iconURL:`data:image/webp;base64,UklGRlQHAABXRUJQVlA4WAoAAAAQAAAARwAARwAAQUxQSJ8CAAABkB3Jtmo369wrZszADAFY79cMKTAz40tCGMmTZFQGZvpjZhb5nL2X4eE9O4CIYCBJSpxdCd6aG3gCqqOrSwB0rTowNHn/zbTI9Jv740P7ct0AkjqHzOhSAAuOFt4pK/H9xNEFAFKXVc6hfevUHJXqfRBVUlWC90Ll3NTWdrhMMmmCnvwLqnovFQ8q3qvyRb4HSZrBqOZT76khKKtj8Y7en2qudVCSYPUjihfWRPHCR6uRJLV0Q8sYWZyrNUOOtKD6XnVYfpc+MBMGzztLUVe1bPhKr8yI6vltM+qqlN2igRkyqOxBXVVykEGYKSXwIOqqkD0MyoypgZWzKTaJ/JPMk8imCuskWPmFwggUflmJcs+vQ+stBkZh4K1WuHJ1o/zNSPzNUaRlZH1pa5zG9SXJofluXNxthivWZ+gZkZ5nipRD/xtqTCjf9MP91/n/Oq66iBQOHU8ocSF80gGXYhsDIzNwG1KHaxZwFQ6L56ixoZxbDByjZ3R6HgMKDPERWEDPW0p8CN/2DFA1PlQ5cMBCC+l5YMgKhiYYLCBw4h7FAoT3XlMtQPl62gp+BRphsAM7BTtd7Ew0buX5Hx+08j4O7rOCfTkrXXI9b6kW5G0P/nU00dPQ/8XO/87K/9eSPWDDPnncAYcUF03YS3bsNzP2pB371pC9XZKG41V5DpcROLTcjPXwBt5ogSvrH62I5x+tQFLBX9sSy1/bgtSM/2jGnzXjX5vw979uqiFwsCzz+IOZeIiZ+Ezt8aIPtceLPtQeLwKQJujJv6Cq91KxScV7Vb7I9yAp6VZjpUP71qk5KtX7IKqkqgTvlcq5qa3tcEW1mWQALDhSeFe517uJowuAklEZZeoSAJ0DB4Ym7r2eDmH69b3xwX25LgBJXZU5AABWUDggjgQAABAZAJ0BKkgASAA+WSSQRSOiIho7Bjg4BYS2AF325b8A1kvsH478v1uv8A/T3N9ng6aPKvpE/0nsg8wD9Nf8x/IOst5hv18/bf3gP53/mfYB+vfsAebT6gHoAfsz6WvsTfth+6vtG//+9H/y1eFvgygjEveA6gQ1LlPfTvsEfq10IHsjfpAHAo1s4CB6ziKzGXgIZu8gIbRl5ULSO3p6qO93yhM7gO7HOzo6GtWVgN6UpgdReuoCIY1ulonOFng7pGeOLDSjMebkCOHfVWPJx/8QAP7+9l3RFcD+jAmUeXSY2wNUluAvtx9UaR4w4ldsXHxo02DF6F2MqLnnRvXlKakBHxg+x5l6ErrXEzpC0dPivi6fdpKb/VY/DYCmHp9Y1f7xzrhHWSD785GP+gV2XPjEd6iwakYcMl5TBECggbmSgueM84jxWa+Kvq+aX7RdfVbp1gxQHpROUU0sKc7nz7vZ+Cx1+YvcFqIk+DeTOQiNn3f/mPB//8Hts9G+eB7NjGQkcVDX+6f+aEywpeylUefWfMHE6Z+S38ynP2rYvi0bJ335qaRqKVZpjsv6Zm1gCkN8RdRnbqP9pgSgF7hE36s3+dP1nodktlrfZsixztSd7q0HWQlGt0HHfi+uoVLfxMZt3Xhx4zhhUaTtdb8tVmynwoXwEuj78fb25Zr4MmOZw+HeEpt0TiLQa3xs1Dc233znFbUtlAx/ivTqRLTvZibeOthEJrYe1pYIMsYj97Q58sSFdlqdPsehc/EuPUas8AHGmS9CWvEi7UrOhF6TdqMqcxfJKl4C7M8ZOwblJyTvS04yTmSrhFSqmpDNN5cJd7hLRMTpv2Lq8qGp7IzxGcuvPnvRiMygPiPhNqkIg0zcz7fyzmTCnOVKP1hMf6GbFOMXZ+mSKgkjpme0sUCTPVmLEOf534gL7X5Z8d/vl9sXjUID7/2kPs+3NL52RU1keTyeNfyTre+OGH3siN/mIAwpZZUgs3yAUF7aV7QcT9emExxYsBKDwphV544qmIR5B66JLIly8+jqVNpWF/2A2x5dkLbYWewGTnRPeY1Id3fn89ZOl6gZmu6tE+o2vwQC6xOx5CTM9DnxV++hU5xH/GCnkRgompiHlWxlvFgyrIop1lHjjg3WpCTEK/rGbEGONKLMrOXSPePv10EhrMEWjHN/MROJQXGXMZVZJJOnjfqPH6nXZR3Rbl5jrrAptcgbvvR5xxYcPuKU1FbK/HbgiIRpSUj5hwRo/BMkGRFb+pwPfDFtf2TGTM+jVOIHoGuCZrfcbiiW5z7s86+h7DDKNIohCAuC1x06dHnNTeKUj/m6dA67Rfmd5pf1arYPlSj9OGGjTPcHyu93/7A///xotIbj2ZAaJKfcNnA89Ub/jqo6akZC6T2OzVlY2oY3DnLR+LhAPE3kVIBU8yFDV0ywo4FaI9+8fP85F6h9aLnu+/uPr2IuANgJTdxBxqOf1lzWakqZ6z73yTS0/WzccZAgcqMtAUILokHGtUm+OM7nTSiZBYYy1rSVIP4geo25OvmAGq2F9qaLqcub/6qCAAAA`,iconWidth:72,iconHeight:72,id:`linkedIn`,link:`https://www.linkedin.com/in/Dariusz-Podczasik`,name:`LinkedIn`,label:{English:`Let's connect professionally`,Polish:`Nawiążmy kontakt zawodowy`,Spanish:`Conectemos profesionalmente`},accent:`#0A66C2`},{iconURL:Dg,iconWidth:72,iconHeight:72,id:`email`,link:`mailto:boostertech@mail.com`,name:`Email`,label:{English:`Drop me a message`,Polish:`Wyślij mi wiadomość`,Spanish:`Envíame un mensaje`},accent:`#f59e0b`}],Ag=Q.section`
  max-width: var(--container-max-width);
  margin: var(--spacing-3xl) auto;
  padding: var(--spacing-3xl) var(--spacing-2xl);
  text-align: center;
  border-radius: 18px;
  border: 1px solid rgba(var(--color-cyan-rgb), 0.18);
  background: linear-gradient(
    135deg,
    rgba(var(--color-panel-rgb), 0.88) 0%,
    rgba(var(--color-panel-rgb), 0.68) 100%
  );
  box-shadow:
    0 24px 64px var(--color-contact-shadow),
    inset 0 1px 0 rgba(var(--color-white-rgb), 0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation: ${Eh} 0.8s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-cyan),
      transparent
    );
    box-shadow: 0 0 20px rgba(var(--color-cyan-rgb), 0.6);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      linear-gradient(rgba(var(--color-cyan-rgb), 0.06) 1px, transparent 1px),
      linear-gradient(
        90deg,
        rgba(var(--color-cyan-rgb), 0.06) 1px,
        transparent 1px
      );
    background-size: 40px 40px;
    pointer-events: none;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    margin: var(--spacing-2xl) var(--spacing-lg);
    padding: var(--spacing-2xl) var(--spacing-lg);
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    margin: var(--spacing-xl) var(--spacing-md);
    padding: 48px var(--spacing-md) var(--spacing-xl);
    border-radius: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,jg=Q.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-cyan);
  box-shadow: 0 0 10px var(--color-cyan);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 80px;
    height: 1px;
    transform: translateY(-50%);
  }

  &::before {
    right: calc(100% + var(--spacing-sm));
    background: linear-gradient(270deg, var(--color-cyan), transparent);
  }

  &::after {
    left: calc(100% + var(--spacing-sm));
    background: linear-gradient(90deg, var(--color-cyan), transparent);
  }
`,Mg=Q.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin: 0 0 var(--spacing-sm) 0;
  color: var(--color-off-white);
  position: relative;
  z-index: 1;

  span {
    background: linear-gradient(
      135deg,
      var(--color-text-secondary) 0%,
      var(--color-primary) 40%,
      var(--color-accent) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation: ${wh} 15s ease-in-out infinite;
    ${Ch}
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    font-size: clamp(1.5rem, 6vw, 2.25rem);
  }
`,Ng=Q.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-slate);
  margin: 0 auto var(--spacing-2xl) auto;
  max-width: 520px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    margin-bottom: var(--spacing-xl);
  }
`,Pg=Q.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  position: relative;
  z-index: 1;
  text-align: left;

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.sm}) {
    grid-template-columns: 1fr;
  }
`,Fg=Q($h).attrs({as:`a`})`
  position: relative;
  padding: var(--spacing-lg);
  border-radius: 14px;
  background: var(--color-contact-tile-bg);
  border: 1px solid var(--color-contact-tile-border);
  text-decoration: none;
  transition: all 0.35s ease;

  &:hover,
  &:focus-visible {
    border-color: ${({$accent:e})=>e};
    box-shadow:
      0 16px 40px var(--color-contact-shadow),
      0 0 20px ${({$accent:e})=>e}33;
  }

  &:focus-visible {
    outline: 2px solid ${({$accent:e})=>e};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color 0.2s ease;

    &:hover,
    &:focus-visible {
      transform: none;
    }
  }
`,Ig=Q.div`
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--color-slate);
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  ${Fg}:hover &,
  ${Fg}:focus-visible & {
    color: ${({$accent:e})=>e};
  }
`,Lg=Q.div`
  width: 64px;
  height: 64px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({$id:e})=>e===`gitHub`||e===`email`?`50%`:`14px`};
  background: var(--color-contact-tile-bg);
  border: 1px solid ${({$accent:e})=>e};
  box-shadow:
    inset 0 0 16px ${({$accent:e})=>e}33,
    0 0 20px ${({$accent:e})=>e}22;
  transition: all 0.35s ease;

  &::before {
    content: "";
    position: absolute;
    inset: -8px;
    border: 1px dashed ${({$accent:e})=>e}55;
    border-radius: ${({$id:e})=>e===`gitHub`||e===`email`?`50%`:`18px`};
    pointer-events: none;
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    border-radius: ${({$id:e})=>e===`gitHub`?`50%`:`0`};
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    width: 56px;
    height: 56px;

    img {
      width: 28px;
      height: 28px;
    }
  }
`,Rg=Q.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-off-white);
  margin: var(--spacing-xs) 0 0 0;
`,zg=Q.p`
  font-size: 0.85rem;
  color: var(--color-slate);
  margin: 0;
`,Bg=({id:e})=>{let{contact:t}=Ip(),{language:n}=Op();return(0,h.jsxs)(Ag,{id:e,children:[(0,h.jsx)(jg,{"aria-hidden":`true`}),(0,h.jsxs)(Mg,{children:[t.headerPlain,` `,(0,h.jsx)(`span`,{children:t.headerAccent})]}),(0,h.jsx)(Ng,{children:t.contactParagraph}),(0,h.jsx)(Pg,{children:kg.map(e=>{let t=!e.link.startsWith(`mailto:`);return(0,h.jsxs)(Fg,{href:e.link,target:t?`_blank`:void 0,rel:t?`noopener noreferrer`:void 0,$accent:e.accent,children:[(0,h.jsx)(Ig,{$accent:e.accent,"aria-hidden":`true`,children:(0,h.jsx)(wg,{})}),(0,h.jsx)(Lg,{$id:e.id,$accent:e.accent,children:(0,h.jsx)(`img`,{src:e.iconURL,alt:``,width:e.iconWidth,height:e.iconHeight,loading:`lazy`})}),(0,h.jsx)(Rg,{children:e.name}),(0,h.jsx)(zg,{children:e.label[n]})]},e.id)})})]})},Vg=Q.footer`
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    225deg,
    var(--color-footer-bg-start) 0%,
    var(--color-footer-bg-end) 100%
  );
  animation: ${jh} 0.8s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-cyan),
      var(--color-cyan-light),
      var(--color-cyan),
      transparent
    );
    box-shadow: 0 0 20px rgba(var(--color-cyan-rgb), 0.6);
    z-index: 2;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Hg=Q.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-sm) var(--spacing-xl);
  padding-bottom: calc(var(--spacing-sm) + env(safe-area-inset-bottom, 0px));
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "brand"
    "copyright";
  gap: var(--spacing-sm) var(--spacing-lg);
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${({theme:e})=>e.breakpoint.sm}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "brand"
      "copyright";
    text-align: center;
    gap: var(--spacing-lg);
  }
`,Ug=Q.div`
  grid-area: brand;
  text-align: left;
  transform: translateY(4px);

  @media (max-width: ${({theme:e})=>e.breakpoint.sm}) {
    text-align: center;
  }
`,Wg=Q.h2`
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-off-white);
  margin: 0 0 var(--spacing-xs) 0;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 96px;
    height: 2px;
    background: linear-gradient(
      90deg,
      var(--color-cyan) 0%,
      rgba(var(--color-cyan-rgb), 0.6) 45%,
      rgba(var(--color-cyan-rgb), 0.25) 75%,
      transparent 100%
    );
    margin-top: var(--spacing-xs);
    clip-path: polygon(0 0, 100% 42%, 100% 58%, 0 100%);
  }
`,Gg=Q.p`
  font-size: 0.8rem;
  color: var(--color-slate);
  margin: 0;
  line-height: 1.5;
`,Kg=Q.p`
  grid-area: copyright;
  color: var(--color-slate);
  font-size: 0.75rem;
  text-align: center;
  margin: var(--spacing-xs) 0 0 0;
  padding-top: var(--spacing-xs);
  border-top: 1px solid var(--color-footer-border);
`,qg=Q.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  opacity: var(--color-footer-texture-opacity);
  pointer-events: none;
  background-image:
    linear-gradient(rgba(var(--color-cyan-rgb), 0.05) 1px, transparent 1px),
    linear-gradient(
      90deg,
      rgba(var(--color-cyan-rgb), 0.05) 1px,
      transparent 1px
    );
  background-size: 52px 52px;
  mask-image: linear-gradient(
    270deg,
    rgba(var(--color-black-rgb), 0.5) 0%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    270deg,
    rgba(var(--color-black-rgb), 0.5) 0%,
    transparent 100%
  );
`,Jg=Q.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  opacity: var(--color-footer-texture-opacity);
  pointer-events: none;
  background-image: radial-gradient(
    circle,
    var(--color-cyan) 1px,
    transparent 1.5px
  );
  background-size: 19px 19px;
  mask-image: linear-gradient(
    90deg,
    rgba(var(--color-black-rgb), 0.4) 0%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(var(--color-black-rgb), 0.4) 0%,
    transparent 100%
  );
`,Yg=()=>{let{footer:e}=Ip(),t=new Date().getFullYear();return(0,h.jsxs)(Vg,{id:`footer`,children:[(0,h.jsx)(qg,{"aria-hidden":`true`}),(0,h.jsx)(Jg,{"aria-hidden":`true`}),(0,h.jsxs)(Hg,{children:[(0,h.jsxs)(Ug,{children:[(0,h.jsx)(Wg,{children:`Derek.dev`}),(0,h.jsx)(Gg,{children:e.tagline})]}),(0,h.jsxs)(Kg,{children:[`© `,t,` Derek.dev · `,e.rightsReserved]})]})]})},Xg=Z`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  min-height: 44px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--radius-md);
  transition:
    color var(--transition-normal),
    background var(--transition-normal),
    border-color var(--transition-normal),
    box-shadow var(--transition-normal),
    transform var(--transition-normal);

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`,Zg=Z`
  color: var(--color-white);
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);

  &:hover {
    box-shadow: var(--shadow-lg);
    color: var(--color-white);
    border-color: var(--color-white);
  }
`,Qg=Z`
  color: var(--color-text-primary);
  background: transparent;
  border: 1px solid var(--color-border);

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    background: rgba(var(--color-primary-rgb, var(--color-primary)), 0.08);
  }
`,$g=Z`
  color: var(--color-white);
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);

  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
    background: transparent;
    box-shadow: none;
  }
`,e_=Z`
  ${Xg}
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: 0.95rem;

  ${({$variant:e})=>e===`primary`?Zg:e===`outline`?Qg:$g}

  ${({$size:e})=>e===`sm`&&Z`
      min-height: 36px;
      padding: var(--spacing-xs) var(--spacing-md);
      font-size: 0.85rem;

      svg {
        width: 14px;
        height: 14px;
      }
    `}

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    font-size: 0.9rem;
    padding: var(--spacing-xs) var(--spacing-md);
    justify-content: center;
    width: 100%;
  }
`,t_=Q.a`
  ${e_}
`,n_=Q(fh.Link)`
  ${e_}
`,r_=Q.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: transparent;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: 50px;
  margin-bottom: var(--spacing-md);
  ${Ch}

  svg {
    color: var(--color-primary);
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }
`,i_=Q.h1`
  font-size: clamp(1.5rem, 8vw, 4.5rem);
  font-weight: 800;
  line-height: 1.05;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-sm) 0;
`,a_=Q.span`
  display: inline;
  background: linear-gradient(
    135deg,
    var(--color-text-secondary) 0%,
    var(--color-primary) 40%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${wh} 15s ease-in-out infinite;
  ${Ch}
`,o_=Q.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-primary);
  margin: 0 0 var(--spacing-md) 0;
`,s_=Q.p`
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  font-weight: 400;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: var(--spacing-xl) 0 0 0;
  max-width: 520px;

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    max-width: none;
  }
`;Q.span`
  color: var(--color-primary);
  font-weight: 600;
`;var c_=Q.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    justify-content: center;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`,l_=wp`
   0%{
  border-radius: 65% 35% 67% 33% / 65% 36% 64% 35%  ;
}
50%{
   border-radius: 34% 66% 31% 69% / 36% 61% 39% 64%  ;
}
100%{
    border-radius: 65% 35% 67% 33% / 65% 36% 64% 35%  ;
}
`,u_=Q.section`
  padding: var(--nav-height-actual, var(--nav-height)) 0 var(--spacing-3xl) 0;

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    padding: var(--nav-height-actual, var(--nav-height-mobile)) 0
      var(--spacing-2xl) 0;
  }
  width: 100%;
  animation: ${Eh} 0.8s ease-out;
`,d_=Q.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--spacing-3xl);
  align-items: center;
  align-content: center;
  min-height: calc(100vh - var(--nav-height-actual, var(--nav-height)));
  margin-bottom: var(--spacing-3xl);

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--spacing-2xl);
    min-height: calc(
      100vh - var(--nav-height-actual, var(--nav-height-mobile))
    );
    text-align: center;
    padding-top: var(--spacing-xl);
  }

  @media (max-height: 500px) {
    min-height: auto;
  }
`,f_=Q.div`
  min-width: 0;
  animation: ${Dh} 0.8s ease-out 0.2s both;

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    order: 2;
    animation: ${Eh} 0.8s ease-out 0.4s both;
  }
`,p_=Q.div`
  width: 300px;
  height: 300px;
  position: relative;
  box-shadow:
    0 8px 32px rgba(var(--color-black-rgb), 0.18),
    0 2px 8px rgba(var(--color-black-rgb), 0.08);
  animation:
    ${Oh} 0.8s ease-out 0.3s both,
    ${l_} 12s ease-in-out infinite 1s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 280px;
    background: radial-gradient(
      circle,
      rgba(var(--color-white-rgb), 0.45) 0%,
      var(--color-primary) 25%,
      var(--color-accent) 60%,
      rgba(var(--color-black-rgb), 0.08) 85%,
      transparent 100%
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.38;
    filter: blur(32px);
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    order: 1;
    margin: 0 auto var(--spacing-xl) auto;
    animation:
      ${Eh} 0.8s ease-out 0.2s both,
      ${l_} 12s ease-in-out infinite 1s;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.sm}) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xxs}) {
    width: 190px;
    height: 190px;
  }
`,m_=Q.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow:
    0 0 40px 14px rgba(var(--color-tooltip-rgb), 0.35),
    0 8px 32px rgba(var(--color-white-rgb), 0.18),
    0 2px 8px rgba(var(--color-black-rgb), 0.08);
  border-radius: inherit;
  border: 1px solid var(--color-primary);
  transition:
    opacity 0.4s ease,
    transform var(--transition-normal);
`,h_=wp`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  40%,
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
`,g_=Q.video`
  position: absolute;
  inset: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* No box-shadow here — ProfileImage underneath casts the identical glow;
     a second stack would double the halo intensity. */
  /* Inherits the blob's animated radius while idle (video is paused — the
     re-clip is just paint). During playback .portrait-playing freezes the
     parent animation mid-pose, giving this an effectively static clip —
     which keeps the media pipeline fed on low-end Android (verified). */
  border-radius: inherit;
  will-change: transform, opacity;
  border: 1px solid var(--color-primary);
  cursor: pointer;
  /* The theme-matched ProfileImage stays the portrait's face while idle;
     the clip fades in only for playback, then melts back to the still. */
  opacity: ${e=>+!!e.$active};
  pointer-events: ${e=>e.$active?`auto`:`none`};
  transition: opacity 0.35s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,__=Q.button`
  position: absolute;
  right: var(--spacing-sm);
  bottom: var(--spacing-sm);
  z-index: 4;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: rgb(var(--color-surface-rgb) / 0.85);
  color: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast);

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px solid rgba(var(--color-primary-rgb), 0.6);
    animation: ${h_} 6s ease-out infinite;
    pointer-events: none;
  }

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: wait;
  }

  svg {
    width: 14px;
    height: 14px;
    margin-left: 2px;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid var(--color-border);
    border-top-color: var(--color-primary);
    animation: ${kh} 0.8s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      opacity: 0;
    }

    .spinner {
      animation-duration: 1.6s;
    }
  }
`,v_=`/Software_Engineer_Portfolio/talking-portrait/profile-dark-en.mp4`,y_=({poster:e})=>{let{home:t}=Ip(),n=(0,g.useRef)(null),[r,i]=(0,g.useState)(`idle`),a=r===`loading`;(0,g.useEffect)(()=>(document.documentElement.classList.toggle(`portrait-playing`,r===`playing`),()=>document.documentElement.classList.remove(`portrait-playing`)),[r]);let o=()=>{i(`loading`);try{n.current?.play()?.catch(()=>i(`idle`))}catch{i(`idle`)}},s=()=>{let e=n.current;e&&(e.pause(),e.currentTime=0),i(`idle`)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g_,{ref:n,"data-testid":`talking-portrait-video`,src:v_,poster:e,playsInline:!0,preload:`metadata`,$active:r===`playing`,"aria-label":t.hearMeLabel,"aria-hidden":r!==`playing`,onPlaying:()=>i(`playing`),onEnded:s,onError:()=>i(`idle`),onClick:s}),r!==`playing`&&(0,h.jsx)(__,{onClick:o,"aria-label":t.hearMeLabel,"aria-busy":a,disabled:a,children:a?(0,h.jsx)(`span`,{className:`spinner`}):(0,h.jsx)(Sm,{"aria-hidden":!0})})]})},b_=`data:image/webp;base64,UklGRnoHAABXRUJQVlA4WAoAAAAQAAAAnwAAYAAAQUxQSAkHAAAB8IZt2/FI2v5tx3FcVW1bc993j6vu1ti2bdszrbFt27Zt20Zb42m7q1L7h+pOrivJXJ8jYgL4966tId+27E2uNRvSLtc4q9dhOcZZcQeM/Gp0GtYm55yyEk5+DQ4/miC/BuvfSZ41ery6DJ5jnGcOJsivwcUPE+TXYLsxXbD84vzvj60IcqsRX95IkF+D236uxfJLcLBWJ8itwSqFMwhyq9F50oeG5RYznmmsw8mtwek6giC3JmyrZzFyq7PctH/+h1dCkiRRBpZkDJYkiWVhtPlQ+9Myyd5SaG7ZlWkmzq26F6ciTxp55tZ4Rkaf0048cWTqI04+oiW9Tjv5+PZYaglHaXwvep84ssQTTzrpxJEljuiBlaQmzR6IZxOspYLSL+j3TsSL0sVEWs7Kc7UjrK2mJmXaJK2Gl7Ro0Xy9aZbVmlr0z6gxaY+a+G5b6PSTmrYk0jHafaYbqGHQ2DGjxxQ76s+Ght9GjSl29Nhf6lKQCos0gshoLelyOndIvZ0RbN6osT2xVILr9X1njOhQfGdGSPtb5w7FB6UX9O2zmjkIz+x8EjJNOE96FE8j2EeFjQlKTjha2oUg64K+6P+bXnOzrC4gsfQBo/Yd6QiiNGeFv3QJAWDF13CMtBuJFZ/Oz+wvDSfJLsjWqZuqmYPwUozkdX3SGmtWYtJsV4KsC/oheFAz6/EKI+Eg6YMWWAnBhZq7JkFFOb3G6TWn0nDukS4ligu2atBpBJVlwW7SUKLSjK6jVNiCKMbpO05vhVFpBLdo2kC8wgg2WqTxvbEijKc1bQBeeU7XX/SqWaWRcK70KL6k4ETpGBIqj2CrJp1AVJpR85Z0FLG4YK15eg6jChjB1Zo+EK8wnBWmatZAvJnR5Qf9tjReDcDo8KVewSqN4ADpg5YY4NwlHUhQHQjWW6ihRKXh3CVdSkBwiHQ/TrUguEAz6vBKM7r+rMI2hDNghib0wqqH0fJDvWhWaQQbNmhCL6zVB9LOBNWDYLW5Gkqkl1japZBwlvQoXC3dTFBNCE7W1Ho8pfNIKFMjeV06YHPpp05YVfh+SUa8qZfNLJ0rvGunlDvXlIKz/FRN/UNNGxNUhR+WhDNwmo4jSWfWpCkpT5q6DVECwT4qNOhSgurwLUUmHKupdXgaBaXeqL1Lw/wrFWb2x6tCoz4sBuNZvYyloVcPG3p8uscNXxYrJThMjQ26iahCztJ/6DgijbNJKFdn8Ez9MUXak6g+JByimQPxFC6kNtK2UoyWH0p7bSL9sQxefXAe1CtOChcQlGlwlXQPXCm9glWlvlM0nKicYEfp5y7Q+iPpdKL6EOyuWf/HK8X57xQt2IBwBs/WovWJ6kNwm141qxTjBel0Ekg4UvqxM1Z9jO6/aChJZQSnSC+7ATgPS/fgFREOeJKEpUKwjWbW45UQrD1ff/THF9dznHQgUQnNDcAsFYJr9apbBRidf5B2I1hssHlB0+rw8rNtB+HUn3L5AR1Ix+jwnY4nyi+4S7qRYInBRdLbNViZGTXzb4IjNf0XjeqfDsFGmjUQL7fgIOmLttiSjJq3pAuJ8pt7Pf3mP5iw4qynUyK4QK+AlZdTN11zViEo0llxmho3J8pu/k2srsNIGLB2WkbrT3UcSVkZLd6TTiAoOjhQGtMDK7sb6DKu4ZL1O0JaOGs0zK3Dyym4VHoMp0TnbulhvJy82fWw6kdNWnBXj9QITtVLZmUUbNOo8X1KM7r8JB1NlEk44NTOv44E77/rU3o+PSN5W8eRlI3TZ7IKWxGUHKzfoFmD8PIA2vZNSObexH/WqCHhdqWHM3De7Hq8XIynpItISDE4Xfq0NVYW267LDtqWITqDXXUQbu/8ngEJQ/WS2xIupDbSNxKGS+/WYmmY+avS5UR2RreFX9P+28LHc//qT82z+vyZKdq9maWE2Qs6lljc2SRkGKwxX9PrcVJ1lv5T2p7IDDh+N+h54as3LI9Te+ATr96wMgv0Pqk7y82cXYcHa0rf3vPQg2k/8PhgOn0tHUiQcrCHNLEPVtJR0i6lAGYAhhnNvVHvYGkRHKKXsWAtFZRhQdvymHQ3TurBLdJrNVgpJ0h7lRIOFh4OWISH88jzp2aA84iOpobln370kYfTf+jpFZZ57om7umPpGZ1uf/zFtfHinC2ee3pNvLjyd3pNmLcCTlkamRpgVKa7Z0GwoV7CzDM23COrcKd0c7cyyDzhRB1LkGON5xqWw3OM0+PPN7AcQ7CxhpPkGIJzm1bAcwzGmx9jecbpPfVEIscQbD1nAJ5jSLjiMyzPmPHe2SQ5Buc/41fGcwzB7u8auTa4+hwizxg1z6yB5xic+gdbYTmGYO8TiTyDc/o6eJ4xOp/WDssxOIP2xvMMzmaD8TwDySbtsDxjdBxIvjW6dcbyDFhb518VAFZQOCBKAAAA0AYAnQEqoABhAD5hMJZIpCMiISCIAIAMCWlu4XVAAE9tiLxBUc9sReIKjntiLxBUc9sReIKjntiLxBUc9rQAAP7/ucoAAAAAAAA=`,x_=`/Software_Engineer_Portfolio/assets/React_wordmark_light-BoUAt6oJ.svg`,S_=`data:image/webp;base64,UklGRnYMAABXRUJQVlA4IGoMAAAwNQCdASqgAGYAPmEukkYkIqGhJngLkIAMCWQA1XApULNH/1m7SVP5Xu3H3HfNn/EeoTzAPyN+znuDfuV6hf2M/YD3fv+B+t3vr9AD+sf3rrN/Qu/Wn03/3A+Ev9sP2u+BD+W/4T/16zL4T/sfaT/jvC/vzeN/an1cMc/UF+7egv8c+xP5n8x+Qv4gagX5F/IP8Z+X3BMgA/Nf6n/o/7j4vP9P6CfNV7gH6pf6X1k/zPgYUAv0l/xfuO+mL+e/73+K/yvpc+kP+7/lfgJ/mn9g/6nYb/c72b/23NXFwcuL6jxe0gv6cG4ZdISivJf7XhGH3rcenKgJBa1QcYKfF9V6uqoKnmQ/mgP15Ym26FvlgYvFhLardjYsyiwW6HRr6aqokXLKFQSu7ArxMdz2l8Zuf/qIdM5SSS7VlHH4050Y4w72J2AUtnTgYaas+F7bvf4IIXdG5IMCTmFO0ts050SR6GxeMmL2A87/9k9nUZTHVKyf2UiKSAKTXXtektVgVqTrEkG4eqhd85D2bXAHk+givfKQQS6pM9/xiLuuSYKywwgggiUVVejaKAjq2z2gbA8z4AD+/PQEksSBwWZ9gRI6qWv+DT/zyzaNum+n3UpGeX8XYUknfs8GNo4xrK/eTx8xmuK0oRHw0/In2MBBACjlApBlqOCmJBGQVkMsrfSOJDtNlJviSHWEa7cW4Db60GwVFFB1dTpv7yf+IlVP/YBOjvVNAwaGnMsYy9mPSa40pFMVn3tqNvhO04/hj0qSm7TkW2giGry6flG3Ih7V/m1fat7wAiBMGhIwmkFVyUIbfcg8EEjkNtK3UOA5LdiNcaoB2ygEdVAW/Hmpu7LOHb9Kh7pp/2n92/w22ccM6unSip6elfZ6TK9H/bp5kQRD3QQ9vR6ZOkgQAuNBWZ9qGbqWf0q35A0NNU4KSUe8Vj09Hx3M/I/KBE3FNQZz9IQtEnPdiDApZCNWZsHTysbQI6Wk+2wDCCFN1m2RK0f5Yip/mpYakjOwktDHaEeo7L/pPi8x48G8UhKHsGB6B5Ng4FCA9udChOo79hDr8UzLaWOIBZpRLLHiBHiUM8+SKGLVCJLii82Sm7rwionlYwdgy/4BvIm/pReA4wvIdKAJRgq/cfXIY9U62H5q74td4+VDpuE0VL9T65D/KJGuzEjO8W0/kQnQROIpBVL/kfGJvO5Iih/PT5hmGGYaK4DpWdFZwchIjARUpeL6BKY1RtCZEHKA5rg87VPM+sUJZx+kgNM15ggk1z9AEqVnPskUp+jg0ZYP69tpXwCCe62ITMUZS/iBHHtncyCTxmeczo1RDoMicV9CaT5bxd/c2bXD0UNwfJSXUW60veHTPZAkHSuCtnMSfq7lARYtguwaU3d7TUdaG89Ny14UqSzG+LH2rKc7liOZQvpNWlP7etCSllZpB62+WwyBBUTD+aN+35zcAT1znHbboSf1TMlweHLgzw3m49YCvy0cMesCdMIrVkLBSQ/wI7j8kqBTEYPdYfOhnrDhMKuNFhd9KARDeOciNY9+Jrwd363eJ+mpNEAun4uT7/10t5C/9ihXd1GABOiwYqxi+zRpxC4QrIP1j1oHAb85VhEiuBC6qv2lyWsqcjtVv0dLvFVNA/elkti2FAiF6Qa/d7zcXw2ylRnaNeC8XaOXZ0KLjzqeX3cVxIXjjjqXuVzJp8YycOww7IyRfJp6NayLLS7eih+SZLJKE8zeqCrHOFx/Kx+Hx3c3jNb7GK0Dauvpc5++PjEksIrFE6lkbtFCNQzpyCbTgg82SpnxPvmi6GVY9rP3gj4e6aQkKffvJK2DxX8oDnmIAoT3U4AfTuVcW+ggFZkgft1q2z+C8nSST7qZgi0wc7MrSgDrWcKUTbRbA+CJCZanZ85H6uEc1DdKaZA0f/ghFvBUAwRSk/PzPSX65Et8W2vptCGE561vsA47hBOsOVe0seIF4MdqzExXuEM5mf0iy/ZDVXiXRrmlhkqIeAGSoaO7eIpP/EE5F8P4Kg+GHITDiZYWcolRNfa11Uo29femrtJWZ15ZVfA2xuo+XVtiCDwF65HLIHHF0LB3sUe5070zalSRbwfu/pO3wNKf8Nn7ZgOUlDZEqg/ClwXpNLlb49jtTCpjH7kcjUFtOiTSZHZIxT53ZYLQ/1VKOKNyJxF4iwaDkeR7+cL7rRpDzTPgfyL8UnI4LvpZc5R9UEZD8OVyNgxANQ7Gp6BPRUFeWH16evTyDUr+6uAz/hkq1vPlzyZDVJ7LgoyJB8RsBmKpkC0LI9C97cfOT2FUzgsic5DmN8wzZeMYrsQKeXm9jZiz1RTfJxTG9ymNZYbC28lPGRRNzQ8B+zyqc8XJRuD8FUpDGif4jFCTwNNvHWPqT9/m422XIGi4jQ36qHPN8q5o01zjHJyE3kKk3DsS5xlje2rtxkRhaFfG0aPpbo6pn1+Y6M/hywnSmG6cPGnoC7jdUZ1OnSztdQlgXLrpfixrygVl3cDVX5tFn5OchF8yMRcOF7P1UTmq8Jh//9Maj7lhVLKf80ApuILaHylUeZji9fTITpiuSIp2PPwoXluWRaTNm4se+8teuEsODpdjPs0BJQOiQyL7/8xa3yJNIUFrDn8R6FdNUPNhAUv5JmTgbS7wTSRzr4Fu0cQd+z3GBfNmA1KMdVdtnlQjlWe1kdfM8K1TPq9OiduHBzaaWpDZK13X38uRhrAm6z7gvNXgvgf97/P93V/e+e0Xteom4aXDi2fkIS9rJB3ffBx54MKi8nUcyPWlPTFzKcLkOeX0JU8iZQ+RLpACaekN9gGL8P+7bDeV8u3Az0EZFvmwzmEKmCpCOiaKLTLU6NS0xt9JRmJ3v9FhkSyvdpODeffhiN2x9Uy1H7e6p+iI/nfRcioEMGh/FKC+kwk+4nv+wVMWDV59RD4PN2sIiT3iRFUt5VEdLv+wSFJgxO+teEmKFyqjLzTbOO2G76gXYyC03f5DKhlxx10a+S+m6Ww475iVQY32PA+doJumKcRbfPmv6y1GlqRZz4qWQBCtW4g2J8qb+aUlD9/DgLLj7pcded/Ti+cS/AzQ89zGRsLfSF3Q0LWXyf73L4ils34e4x/DKFsnZOBWOS6NfSdUyoGTxqrVYFzXnYOQeA+NUwhe3xIALYSyHLMV3ztKbZZDWu5ZceA3AA+oZwaqSTupUU9TfOcVR8GTe41AiM3E6vP5extbv0+ReM3AKRSTQK41PWcRC+O9vDjyBYkwKAoweRS9qea3oIK9c73E9PxXHi3Hr0zsBQuEw0FYRgDx/xLIqsbrDeqQL1SPdnpk7U05gVG3TLSyxnz+05/5ZzdWZ4KGELYqscPyRUjFizG41yPSFYjlk1l3loTFQl320MMJP405cj5EasFUp/xmwVfowva0ywNv962JSpcgRKCtUzK+YJcE/LSglrRfmBv7y9x1ULj6GRgSO9JjbyKoPne2eA20nsJRU9/R13zisKDJxui+x4zCYLdA5yIeCvk+eN8FIM6XBUfAiJoKldBG2ZwIlJlLYatehvEmjmWmGuKUoV4NKzTaoRZVM3x+NPwMYkYxFTpFht+JxfUgaiL7L5/qYu6+kQqOD2XM/HO+QHbzBYyZhaV39L/ZdvesMPODfJvYMOD5VEOrM7devsKJO4PEr/8oNfh19GGo7VmLbhSSQ9HSRBeI4etzIlx0/JMRN5Zd6Kv3yrYCZEnJwN4gRN+iV3u5yZnFbCWYEM8GSF3w2OGPvA28k8F34vdwFSLS5ntjYtHo4BybT9Jv4we5LnfqMHLYnGi9WTFdWpf3Knqedybx0rfbTW4MzBKoC2ubfVNYgg3VRClvUIQw7TYOevzEmXGdfcONzxXJKj8LIVu9ViJnuMq2gJKZQc4n3ptNuT0uJ2VzKgFWlnVgv/E2pfFE1zV4m0NJAQL2KcZFS+nilZM7XIc0aivOrcs4E6eDEd7AnoNvLtwpfJAwcj8mZ1diuiqHjc3yygE0gMwq9W88mrF895a/sHd1rBFjJZJT+TS4dAOsvW4oincu2cJWR8OiNyHq2IheaQWmC2lBJ+tjoUYj/9tfbXCnH7+tY+XTBwZkxoS14PQnsB+HcO/6P22r6UzZQmgtvDPKuT2tkf4Dw4D51CKfbQocBz1DChih8W1da865Lemxq0RQiMqj/fbyKPlwaQbOGdhdVBaIM1L9Xcos5BnzhjcLuKj3uKYiJhnCbiIj5EBLX8nrgQYeGzEbp/AcdZpchF5mgASvRsIAAAAA`,C_=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-6%20256%20256'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMidYMid'%3e%3cpath%20d='M177.381%20169.733c9.447-.978%2016.614-9.122%2016.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918%208.796-17.592%2018.895.326%204.887%202.28%209.122%205.212%2012.054-11.076%2021.828-28.016%2037.791-53.426%2051.148-17.266%209.122-35.183%2012.38-53.1%2010.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496%206.19-12.38%2015.962-21.502%2022.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237%2034.207-42.35%2080.468-28.016%20102.295%2010.75%2016.29%2032.577%2026.389%2056.684%2026.389%206.515%200%2013.03-.652%2019.546-2.28%2041.699-8.145%2073.299-32.905%2091.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848%2074.93%2092.03%2083.4%2092.355%2093.5c.326%209.773%208.47%2017.592%2018.243%2017.592h.651c7.167-.326%2013.357-4.887%2015.963-11.077h5.864c24.759%200%2048.214%207.167%2069.39%2021.176%2016.288%2010.751%2028.016%2024.76%2034.531%2041.7%205.538%2013.683%205.212%2027.04-.652%2038.443-9.121%2017.266-24.432%2026.714-44.63%2026.714-13.031%200-25.41-3.91-31.926-6.842-3.583%203.258-10.099%208.47-14.66%2011.729%2014.009%206.515%2028.343%2010.099%2042.025%2010.099%2031.274%200%2054.404-17.267%2063.2-34.533%209.447-18.896%208.795-51.474-15.637-79.165zM69.225%20175.27c.326%209.774%208.47%2017.592%2018.243%2017.592h.652c10.099-.325%2017.917-8.796%2017.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652%200-1.63%200-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323%201.302-19.547%207.818-36.488%2019.22-50.497%209.447-12.054%2027.69-17.918%2040.07-18.243%2034.531-.652%2049.19%2042.351%2050.168%2059.618%204.235.977%2011.402%203.258%2016.289%204.887C189.434%2027.366%20156.857%200%20125.584%200c-29.32%200-56.359%2021.176-67.11%2052.451-14.985%2041.7-5.212%2081.771%2013.031%20113.372-1.628%202.28-2.606%205.864-2.28%209.448z'%20fill='%23764ABC'/%3e%3c/svg%3e`,w_=`/Software_Engineer_Portfolio/assets/styledcomponents-BZU-fRHf.webp`,T_=`/Software_Engineer_Portfolio/assets/Supabase_wordmark_light-BslC5xdF.svg`,E_=`data:image/webp;base64,UklGRsYFAABXRUJQVlA4ILoFAAAwIgCdASqgAKAAPmEwlUekIyIhJJW4SIAMCWVu4XVJ3HkvVdtHhgOyvIP6gOWZ/VX3AfsP6gP2e9Cv9IPcB/hPUA/YXrAP0z9gD+Af3f//+t37FP7jfsh7VX//zR38IPAn+49EB6IPifzfkB/a/BPaw/yO8Ecf/a3jK+pfmh/63jYe9vYA/O/n3Z4/or/rf4v4Df1V/4/YL9Gn9mRQCJCaTvIdMEeRITSd5DpgjyJCXNSwOzt0nX9K963OKMQfxB4hJHXfeR1FR5vNJzoHB/pJBiPbT6BuYHQ3/glfcZzCfXLlhmMICWI796fEI/m1GA1sJQtB63I2aFZuqlkYeMbqR7WkJFQwippRNJ3kOmCPIkJpO8h0wR5EcgAA/v+/QAAxSICv/et6E5C3G/H3CoZ3ZCadNQ3qm+36an+8NHvySJPqf53DTeTryuT1aHK13+qlKeOSfHXmUpd9LQU1V6YlF9nx9HiF1pTPBTUj7FyR0WBs807PixgBj5sB5B14/U5sLzwPOwQST8hKdXLR+Lt35tO1lFCz/EvvGlP2V+MJOQRhB1HhsodIJqTPiRAFjQHud2K3Vsbu6HqnpAXp4dhzWe4p8R5IQiFsfR/eXZ5o2EyuJi5cLcW6D5Oz5ACLw15Y1FKoa1blmPtCPYwI/zrGi8sUoMNKerAxAa1uhao7iPAGT0+HuplegilmEMxM7WrzZYYYZMfGpzdHl3siUc81Odz/maAzbTNOhdyY58Mjjs+hxCjnC7s5AMn1V5Gd8U0Fr6mKOf/DiJ3qe2N8Tw5WP8OrTGOaYk4uTUbdzpKbv/UqrY28tJztlDSh/W1KelfPrLTmbeXhP+Mxylhs+wJRMyfSJ0S3fDdpcN/tHYwBv6+kl25uTRu2O7yjNYQoqS4usWLcqNpypnITIxKZ6PXvMgGy92i18gpjotRqOQJaiq/SsoAHy57A4gsRM7QOcuQDCwHCp0UzdCoNnDujmmM7Vm83FQ5yyjMeO43se1hq016DnWKt2dX8WzDW77iaz3EGYnwCsH+MFZk2BNwfQTuQrqbleLa45zvsohpk1wNMc/reeVZj0K6giAlpSD1Hn7/F4ZzKSYf9YXjhnH1vyDYrheClenfDPNV/OfYdta18rkFw/Fc/hr/8stXC3iXVtGO7kFWlWjyBCsp5tm1o8l2nUzGruz/+O36B6NE/badTQ1Utq4MYsRyJbsZqHhQYU+Uf+u17LbixzPbvCbAP8VEc8sQCnddtpj9GYrd18FKenrDCMwGDbFPwND9PO9C39U4/Zn0m/dsTF9q0uSwDZ1/Psv0PXmVgJ5O9PNAbrH9zBOxsARGqMMZrv9rZz2nOu1AzPc9X57PN0exohQY3Tlr/WOmZN05eAvtkDUuCi/4ZLZe6d5/kMh0BeEyiP7H+kvPqPf0m/3ocwOXsqqO34uimRxihcMKD/yJ+HVx0pIbA/fLgBR/Ei4FufmeA9lv5vDih4+5wu+LZIAJyd/zC3bXrrkp/ogUx12aVsEU7JU+yO9f5Oao8OodV+3wsKDFFlpdKO6/WLRtYoo731ofvFUCk/Do3j/sFm6Q/fa6taYHRq+prY1HfKoYSt7X4S1fN5JBSmEfdV37SwtY3bp6vBbeltqAHGhctSLV/QxGjd/9LSsvYoPkhX5r8gWVx7gUA3s6zL/7kGwETASTku5OrP4AJrLgX8zuXdsFaA4XmEPsJGTfRrs0S2Y5LRmXI0PK2CMfRtggtJ6EZOC6V4wXIHNFjtDbMhGShNikxXwpAuR/wsOPzzCgXUfJIR9/gj/v3aFt1Bz8qIMWPxKSI3r8AxDDjE4A1orHJZq24wQIPWcd6t9HXdL1a5iyZK0Dik40u1ATwHDkq/2EBfJyI0q6pdzW2e/bcTI7cS99s8VoNhXb0MGtZsVc3V0Y2Emzh7JHManKbsrvYWS+rkyQqC+VjsCmtrErG8gAAAAAAAA==`,D_=`data:image/webp;base64,UklGRkIFAABXRUJQVlA4IDYFAAAwHQCdASqgAFkAPmEuk0ckIqGhJFQKwIAMCWkAFeUdgf+T8LfA95G9g9Aj59Povyg/Kr4r/wHgDtU/4P8suCvAB9RP91/WuQDvN/1L/g8ZhH36qX8b/2v8/+Wntc+jf+n/iPgF/ln9c/6X909qr1r/sr7Hn7FFB6JD0SHcwZqoWPbFkKFl1iF82dstrJGd7FnIQyoXsABbBADYK+XxpIjl4eKsGdffnGzWy1PRn35FAxsDW+UkKtMFKkmNm/+1hbIYQ04Bt/yv8MLrBJetXoUzib+zq2VkQQMOMP21+nozHqPkmzwMM6WTYiyhr1N3qbvSgAD+/PQACDFOGtQJsKP5t9Lc6PcnvQQRrdeIC0ehgPi7u+0f4UEj/gyr2fK9x/n2egrzUp5JtUW9Ct3nDRMgjvWc5154mJEi53ptNdyyai1piiLElDHhCSOraiHJhfHD/kKyJK10JKdn0QuSV3fdUnpPkR2szJaMw2cJr6QJDhl/Tk9NjObWJvUuzWEHPYJEEt+5eyQeG9TWueUuYR+mnlaS4ZPUIbxPbYsxDJsz6ME0u0zDPMf3FxrXNflHGKCdMvAwahx7coL+EaGn5OrEGevrRcN9wS6pB/kgmUZR6duSWVSV6mv+TNngnFcXHrGyaPc8KkbKYibMay4DAah9rFJUYrCBZmiKL35f34nnXZkvQUUQlsgFd08be3wvkTk1rFIR97tgekUygAds9JWzBmAe6VN9UFujdHUWmmTITRI+J5WsnlxcXD88OL/fEfePN/4Y5FaqMCZo5lnGtr5KGeenEMyrMRshMf3L+icK/WTa3+lmYAyfTTCjDh+tXwTjOyLKKoMaE/6sjSMFvwV7vlbdbGB/YdJadNes6XZxcc/OFQ8cqb9h8waug3rQoeLkeLjHXb7HTjlRPDT/3rNHnCdJSj2s34BOeVf2gLvDMX84ffmQU20xCcxvlf8NUfi56Znvte4NZflCJkX1fTh2qleslZlGb3+NyrqwaB/11kgl+skab+1lWtxRcZ3JUhxFopL+bZyBjsaK9HPdl7Hxqe5nUrk363Qz9mxh18KAUVD+pKP9L0qSMrdZwhFca+q/Ue1nFBiMYIPy+4f78CO4w/hk1XXB7v4WfJLcK5rfS0H0MDnhg+JMPRtFxXT05yQ8C6hvr18sKCCupQf6xEZxOHvgzXrSFkARtDv7iOXIxL0CCzxlS0lTNOska49QLDb+Tge5G2CFJTPtINzQTAGEvLM9Gv4rbMA6AYnFgsTzgIp9ANDZzSOV2darZBq88gXPTkjN9LT8Ba2ILa2WCyX++F4Ob5KZUqiXrjw4CjOvcsPzwJUXI4XgCNRi449X4xhsyAVIDP/J64gOxok8aPIAGO0Hm35asfCYSwlf8yG980U6dfgYx/odbVGtkQMD92tlroedWb/U78qqPxw8S8hiRV2PSX0jA//EfHrT/0uSVJS+O2LITozmiMCKPtGNWY7KiIsPPALNgpq20PMx67J1kWnZWkRqVHacF/oeX5w6LJx2V1PN7CCkDtslKMymS7VpLzCCA6DJvaI2ukTc/1DLbWoCPQK2nMtdKFMr22vrJkL8z+XOtswm67y01GJI+2WGiqLy+E9EoXQZo6tQOFuvfPlk8IUwYgWeivP0TqFNU1zw+IS4UiRxlUTwkaZyw252nn/toBUhxz27qklqOz9eIHRH+T8nCpw+pMhPjLBxEF1iuReoRYA0fvQnJ9PR1jxhCLNKuNkvK31lNPuY7WnvJFL3QF9Q67D/odaSz7jcYwAAAAAAAA==`;function O_(e){return $({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z`},child:[]}]})(e)}function k_(e){return $({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z`},child:[]}]})(e)}var A_=Q(K.div).attrs(({$variants:e})=>({variants:e}))`
  margin-top: var(--spacing-3xl);
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  display: grid;
  grid-template-columns: minmax(200px, 260px) 1fr;
  gap: var(--spacing-2xl);
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    grid-template-columns: 1fr;
    padding: var(--spacing-lg);
  }
`,j_=Q.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,M_=Q.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);

  svg {
    transform: translateY(3px);
  }
`,N_=Q.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`,P_=Q(K.div)`
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  scroll-snap-type: x proximity;
  padding: var(--spacing-sm) var(--spacing-lg);
  margin: 0 calc(-1 * var(--spacing-lg));
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 8%,
    rgba(var(--color-black-rgb), 1) 92%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 8%,
    rgba(var(--color-black-rgb), 1) 92%,
    transparent
  );

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.lg}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    overflow: visible;
    scroll-snap-type: none;
    margin: 0;
    padding: var(--spacing-sm) 0;
    -webkit-mask-image: none;
    mask-image: none;
  }
`,F_=Q(K.div)`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: clamp(120px, 38vw, 150px);
  min-height: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  background: rgba(var(--color-white-rgb), 0.04);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  transition:
    border-color var(--transition-normal),
    background var(--transition-normal);

  &:hover {
    border-color: var(--color-accent);
    background: rgba(var(--color-tooltip-rgb), 0.12);
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.lg}) {
    width: 100%;
  }
`,I_=Q.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-text-primary);

  svg {
    color: var(--color-accent);
    font-size: 1.4rem;
    flex-shrink: 0;
  }
`,L_=Q.span`
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  line-height: 1.4;

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    display: none;
  }
`,R_=Q(K.div)`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: clamp(120px, 38vw, 150px);
  min-height: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  background: linear-gradient(
    135deg,
    rgba(var(--color-tooltip-rgb), 0.2),
    rgba(var(--color-tooltip-rgb), 0.05)
  );
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);

  @media (min-width: ${({theme:e})=>e.breakpoint.lg}) {
    width: 100%;
  }
`,z_=Q.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  font-size: 0.78rem;
  font-weight: 700;

  svg {
    color: var(--color-primary);
    font-size: 1.4rem;
    flex-shrink: 0;
    transform: translateY(3px);
  }
`,B_=Q.span`
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  line-height: 1.4;

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    display: none;
  }
`,V_=parseInt(ph.breakpoint.xl,10),H_=e=>e<V_?{radius:150,cardWidth:88,cardHeight:74,iconSize:28,fontSize:11,centerSize:92}:{radius:190,cardWidth:100,cardHeight:84,iconSize:34,fontSize:12,centerSize:108},U_=wp`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`,W_=wp`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`,G_=Q.div`
  position: relative;
  margin: 0 auto;
`,K_=Q.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: visible;

  line {
    stroke-linecap: round;
  }
`,q_=Q.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({$size:e})=>e}px;
  height: ${({$size:e})=>e}px;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: none;
`,J_=Q(K.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: radial-gradient(
    circle at 35% 35%,
    rgba(var(--color-white-rgb), 0.35) 0%,
    rgba(var(--color-tooltip-rgb), 0.35) 45%,
    rgba(var(--color-panel-rgb), 0.85) 100%
  );
  border: 1px solid rgba(var(--color-white-rgb), 0.18);
  box-shadow:
    inset 0 0 30px rgba(var(--color-white-rgb), 0.1),
    0 0 40px 8px rgba(var(--color-tooltip-rgb), 0.25);
  backdrop-filter: blur(12px);
  pointer-events: auto;

  img {
    width: ${({$size:e})=>e*.42}px;
    height: ${({$size:e})=>e*.42}px;
    object-fit: contain;
  }
`,Y_=Q.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({$width:e})=>e}px;
  height: ${({$height:e})=>e}px;
  z-index: 2;
  pointer-events: none;
`,X_=Q.div`
  width: 100%;
  height: 100%;
  will-change: transform;
  animation: ${U_} 4s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>e}s;
`,Z_=Q(K.div)`
  width: 100%;
  height: 100%;
  border-radius: 18px;
  background: transparent;
  border: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${({$isCircleCard:e,$isPadded:t,$hasLabel:n})=>(e||n)&&Z`
      border-radius: 50%;
      background: var(--color-white);
      border: 1px solid var(--color-accent);
      box-shadow:
        0 0 0 1px rgba(var(--color-cyan-rgb), 0.25),
        0 6px 18px var(--color-shadow);
      padding: ${t?`10px`:`0`};

      ${n&&Z`
          flex-direction: row;
          gap: 4px;
          white-space: nowrap;

          img {
            width: auto;
            height: 28%;
            flex-shrink: 0;
          }
        `}
    `}
`,Q_=Q.span`
  font-size: ${({$fontSize:e})=>e}px;
  font-weight: 700;
  color: ${({$onLight:e})=>e?`var(--color-black)`:`var(--color-text-primary)`};
  text-align: center;
  line-height: 1.2;
`,$_=Q.div`
  display: none;
  overflow: hidden;
  width: 100%;
  min-width: 0;
  padding: var(--spacing-md) 0;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 12%,
    rgba(var(--color-black-rgb), 1) 88%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 12%,
    rgba(var(--color-black-rgb), 1) 88%,
    transparent
  );

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    display: block;
  }

  @media (prefers-reduced-motion: reduce) {
    overflow-x: auto;
    -webkit-mask-image: none;
    mask-image: none;
  }
`,ev=Q.div`
  display: flex;
  gap: var(--spacing-md);
  width: max-content;
  animation: ${W_} 28s linear infinite;
  animation-play-state: ${({$paused:e})=>e?`paused`:`running`};

  @media (hover: hover) {
    &:hover {
      animation-play-state: paused;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tv=Q(K.div)`
  flex: 0 0 auto;
  width: 76px;
  height: 76px;
  border-radius: 18px;
  background: transparent;
  border: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  img {
    flex: 1;
    min-height: 0;
    width: 100%;
    object-fit: contain;
  }

  ${({$isCircleCard:e,$isPadded:t,$hasLabel:n})=>(e||n)&&Z`
      border-radius: 50%;
      background: var(--color-white);
      border: 1px solid var(--color-accent);
      box-shadow:
        0 0 0 1px rgba(var(--color-cyan-rgb), 0.25),
        0 6px 18px var(--color-shadow);
      padding: ${t?`8px`:`0`};

      ${n&&Z`
          flex-direction: row;
          gap: 4px;
          white-space: nowrap;

          img {
            flex: none;
            width: auto;
            height: 28%;
          }
        `}
    `}
`,nv=()=>{let[e,t]=(0,g.useState)(window.innerWidth);return(0,g.useEffect)(()=>{let e=null,n=()=>{e&&cancelAnimationFrame(e),e=requestAnimationFrame(()=>t(window.innerWidth))};return window.addEventListener(`resize`,n),()=>{window.removeEventListener(`resize`,n),e&&cancelAnimationFrame(e)}},[]),e},rv=parseInt(ph.breakpoint.lg,10),iv=({technologies:e,centerIcon:t,centerIconWidth:n,centerIconHeight:r,centerLabel:i=`Next.js`})=>{let a=nv(),o=Gm(`(hover: hover)`),s=a<=rv,c=[`redux`,`typescript`,`react`,`vercel`,`supabase`,`react-query`,`styled`],l=[`react`,`vercel`,`supabase`,`styled`,`react-query`],u=(0,g.useRef)(null),[d,f]=(0,g.useState)(2**53-1),[p,m]=(0,g.useState)(!1),_=(0,g.useRef)(null),v=(0,g.useRef)(null),y=()=>{if(clearTimeout(_.current),p)return m(!1);m(!0),_.current=setTimeout(()=>m(!1),4e3)};(0,g.useEffect)(()=>()=>clearTimeout(_.current),[]),(0,g.useEffect)(()=>{if(!p)return;let e=e=>{v.current?.contains(e.target)||m(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[p]);let{radius:b,cardWidth:x,cardHeight:S,centerSize:C}=(0,g.useMemo)(()=>H_(a),[a]),w=b*2+x+40,T=x+80,ee=Math.min(w,Math.max(d,T)),te=(ee-x-40)/2,ne=ee/2;(0,g.useEffect)(()=>{let e=u.current?.parentElement;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();f(Math.min(t.width,t.height))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[s]);let E=(0,g.useMemo)(()=>{let t=e.length,n=Math.PI*2/t;return e.map((e,t)=>{let r=t*n-Math.PI/2;return{x:Math.cos(r)*te,y:Math.sin(r)*te}})},[e,te]),re=[{id:`__center`,name:i,icon:t,iconWidth:n,iconHeight:r,isCenter:!0},...e];return(0,h.jsxs)(h.Fragment,{children:[!s&&(0,h.jsxs)(G_,{ref:u,className:`orbit-desktop`,style:{width:ee,height:ee},children:[(0,h.jsxs)(K_,{viewBox:`0 0 ${ee} ${ee}`,children:[(0,h.jsx)(`g`,{id:`line-glow`,children:E.map((e,t)=>{let n=ne+e.x,r=ne+e.y;return(0,h.jsx)(`line`,{x1:ne,y1:ne,x2:n,y2:r,stroke:`var(--color-cyan)`,strokeWidth:`5`,strokeOpacity:`0.15`,strokeLinecap:`round`},`glow-${t}`)})}),(0,h.jsx)(`g`,{id:`line-core`,children:E.map((e,t)=>{let n=ne+e.x,r=ne+e.y;return(0,h.jsx)(`line`,{x1:ne,y1:ne,x2:n,y2:r,stroke:`var(--color-cyan-light)`,strokeWidth:`1.5`,strokeOpacity:`0.5`,strokeLinecap:`round`},`core-${t}`)})})]}),(0,h.jsx)(q_,{$size:C,children:(0,h.jsx)(J_,{$size:C,initial:{scale:.7,opacity:0},whileInView:{scale:1,opacity:1},viewport:{once:!0},transition:{duration:.6,ease:`easeOut`},whileHover:{scale:1.05},children:(0,h.jsx)(`img`,{src:t,alt:i,width:n,height:r})})}),e.map((e,t)=>{let{x:n,y:r}=E[t];return(0,h.jsx)(Y_,{$width:c.includes(e.id)?Math.min(x,S):x,$height:c.includes(e.id)?Math.min(x,S):S,style:{left:`50%`,top:`50%`,transform:`translate(-50%, -50%) translate(${n}px, ${r}px)`},children:(0,h.jsx)(X_,{$delay:t*.4,children:(0,h.jsxs)(Z_,{$isCircleCard:c.includes(e.id),$isPadded:l.includes(e.id),$hasLabel:e.showLabel,initial:{opacity:0,scale:0},whileInView:{opacity:1,scale:1},viewport:{once:!0},whileHover:{scale:1.35},transition:{duration:.5,delay:.3+t*.06,type:`spring`,stiffness:200},children:[typeof e.icon==`string`?(0,h.jsx)(`img`,{src:e.icon,alt:e.name,width:e.iconWidth,height:e.iconHeight}):e.icon,e.showLabel&&(0,h.jsx)(Q_,{$fontSize:13,$onLight:!0,children:e.name})]})})},e.id||e.name)})]}),s&&(0,h.jsx)($_,{ref:v,children:(0,h.jsx)(ev,{$paused:p,onClick:y,children:[0,1].map(e=>re.map(t=>(0,h.jsxs)(tv,{"aria-hidden":e===1||void 0,$isCircleCard:t.isCenter||c.includes(t.id),$isPadded:t.isCenter||l.includes(t.id),$hasLabel:t.showLabel,whileHover:o?{scale:1.15}:void 0,children:[typeof t.icon==`string`?(0,h.jsx)(`img`,{src:t.icon,alt:t.isCenter||t.showLabel?``:t.name,width:t.iconWidth,height:t.iconHeight}):t.icon,t.showLabel&&(0,h.jsx)(Q_,{$fontSize:12,$onLight:!0,children:t.name})]},`${e}-${t.id||t.name}`)))})})]})},av=Q(K.section).attrs(({$variants:e})=>({variants:e}))`
  width: 100%;
  padding: var(--spacing-3xl) 0;
  background: transparent;
  overflow: hidden;
  position: relative;
`,ov=Q.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
  gap: var(--spacing-3xl);
  align-items: center;
  max-width: var(--container-max-width);
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--spacing-2xl);
  }
`,sv=Q.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  min-width: 0;
`,cv=Q.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
  border: 1px solid var(--color-border);
  border-radius: 50px;
  align-self: flex-start;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }
`,lv=Q.h2`
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin: 0;
`,uv=Q.span`
  display: inline-block;
`,dv=Q.span`
  display: inline-block;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-accent) 100%
  );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${wh} 15s ease-in-out infinite;
`,fv=Q.p`
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: min(500px, 100%);
  margin: 0;
`,pv=Q.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,mv=Q($h).attrs(({$variants:e})=>({variants:e,$glass:!0,$hoverable:!0,as:K.div}))`
  align-items: center;
  min-width: 0;

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    flex-direction: row;
    gap: var(--spacing-md);
    text-align: left;
    padding: var(--spacing-md) 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-border);
    border-radius: 0;
    backdrop-filter: none;

    &:last-child {
      border-bottom: none;
    }
  }
`,hv=Q.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 1.5rem;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`,gv=Q.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,_v=Q.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text-primary);
`,vv=Q.span`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
`,yv=Q.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 500px;

  @media (max-width: ${({theme:e})=>e.breakpoint.xl2}) {
    min-height: auto;
    order: 2;
  }
`,bv=[{id:`react`,name:`React`,icon:x_,iconWidth:600,iconHeight:180},{id:`typescript`,name:`TypeScript`,icon:E_,iconWidth:160,iconHeight:160},{id:`redux`,name:`Redux`,icon:C_,iconWidth:800,iconHeight:800,showLabel:!0},{id:`styled`,name:`Styled Components`,icon:w_,iconWidth:200,iconHeight:200},{id:`supabase`,name:`Supabase`,icon:T_,iconWidth:581,iconHeight:113},{id:`react-query`,name:`React Query`,icon:S_,iconWidth:160,iconHeight:102},{id:`vercel`,name:`Vercel`,icon:D_,iconWidth:160,iconHeight:89}],xv=[(0,h.jsx)(lm,{},`brain`),(0,h.jsx)(k_,{"aria-hidden":`true`},`stripe`),(0,h.jsx)(wm,{},`robot`),(0,h.jsx)(O_,{"aria-hidden":`true`},`framer`),(0,h.jsx)(Tm,{},`sitemap`)],Sv=[(0,h.jsx)(sm,{},`bolt`),(0,h.jsx)(pm,{},`expand`),(0,h.jsx)(vm,{},`laptop`),(0,h.jsx)(xm,{},`brush`)],Cv={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:`easeOut`,staggerChildren:.08}}},wv={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},Tv=()=>{let{home:e}=Ip(),t=e.toolsShowcase;return(0,h.jsxs)(av,{initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.2},$variants:Cv,children:[(0,h.jsxs)(ov,{children:[(0,h.jsx)(yv,{children:(0,h.jsx)(iv,{technologies:bv,centerIcon:b_,centerIconWidth:160,centerIconHeight:97,centerLabel:`Next.js`})}),(0,h.jsxs)(sv,{children:[(0,h.jsxs)(cv,{children:[(0,h.jsx)(Em,{}),e.skillsetHeader]}),(0,h.jsxs)(lv,{children:[(0,h.jsx)(uv,{children:t.titlePlain}),` `,(0,h.jsx)(dv,{children:t.titleAccent})]}),(0,h.jsx)(fv,{children:t.description}),(0,h.jsx)(pv,{children:t.features.map((e,t)=>(0,h.jsxs)(mv,{$variants:wv,transition:{type:`spring`,stiffness:300},children:[(0,h.jsx)(hv,{children:Sv[t]}),(0,h.jsxs)(gv,{children:[(0,h.jsx)(_v,{children:e.title}),(0,h.jsx)(vv,{children:e.subtitle})]})]},t))})]})]}),(0,h.jsxs)(A_,{$variants:wv,children:[(0,h.jsxs)(j_,{children:[(0,h.jsxs)(M_,{children:[(0,h.jsx)(dm,{}),e.learnNextHeader]}),(0,h.jsx)(N_,{children:t.exploreParagraph})]}),(0,h.jsxs)(P_,{role:`region`,"aria-label":t.exploreAriaLabel,tabIndex:0,children:[t.exploreItems.map((e,t)=>(0,h.jsxs)(F_,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1+t*.05},whileHover:{scale:1.02},children:[(0,h.jsxs)(I_,{children:[xv[t],e.name]}),(0,h.jsx)(L_,{children:e.description})]},e.name)),(0,h.jsxs)(R_,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1+t.exploreItems.length*.05},children:[(0,h.jsxs)(z_,{children:[(0,h.jsx)(dm,{}),t.moreTitle]}),(0,h.jsx)(B_,{children:t.moreSubtitle})]})]})]})]})},Ev=`/Software_Engineer_Portfolio/profileImage.webp`,Dv=`/Software_Engineer_Portfolio/light_theme_profile.webp`,Ov=({id:e})=>{let{home:t}=Ip(),{language:n}=Op(),{isDark:r}=Pp(),i=t.contentHeader.split(` `),a=i.slice(0,-1).join(` `),o=i[i.length-1],s=Sh[n][2],c=Gm(`(max-width: ${ph.breakpoint.md})`)&&s.offsetMobile!=null?s.offsetMobile:s.offset;return(0,h.jsxs)(u_,{id:e,children:[(0,h.jsxs)(d_,{children:[(0,h.jsxs)(f_,{children:[(0,h.jsxs)(r_,{children:[(0,h.jsx)(Em,{}),t.welcomeLabel]}),(0,h.jsxs)(i_,{children:[a,` `,(0,h.jsx)(a_,{children:o})]}),(0,h.jsx)(o_,{children:t.contentHeaderTechStack}),(0,h.jsx)(s_,{children:t.headerParagraph}),(0,h.jsxs)(c_,{children:[(0,h.jsxs)(n_,{to:s.slug,href:`#${s.slug}`,smooth:!0,offset:c,duration:700,children:[t.viewMyWork,(0,h.jsx)(om,{})]}),(0,h.jsxs)(t_,{$variant:`outline`,href:t.cvUrl,target:`_blank`,rel:`noopener noreferrer`,children:[t.viewCV,(0,h.jsx)(hm,{})]})]})]}),(0,h.jsxs)(p_,{children:[(0,h.jsx)(m_,{ref:e=>e?.setAttribute(`fetchpriority`,`high`),src:r?Ev:Dv,alt:t.portraitAlt,width:640,height:640}),(0,h.jsx)(y_,{poster:Ev})]})]}),(0,h.jsx)(Tv,{})]})},kv=`/Software_Engineer_Portfolio/assets/CurrencycalculatorProject-CC8FueQ4.webp`,Av=`/Software_Engineer_Portfolio/assets/EatNSplitProject-BTopAJ3o.webp`,jv=`/Software_Engineer_Portfolio/assets/FastPizzaProject--jCPUWBc.webp`,Mv=`/Software_Engineer_Portfolio/assets/MoviebrowserProject-CGZjbfhE.webp`,Nv=`/Software_Engineer_Portfolio/assets/ParadiseLodgeProject-C131wpfx.webp`,Pv=`/Software_Engineer_Portfolio/assets/PlasmaLibraryProject-CCVuhmsX.webp`,Fv=`/Software_Engineer_Portfolio/assets/ReactQuizProject-BfR_y_IQ.webp`,Iv=`/Software_Engineer_Portfolio/assets/TaskListProject-BNjI0CDq.webp`,Lv=`/Software_Engineer_Portfolio/assets/WTMMusicProject-XJslUYwY.webp`,Rv=`/Software_Engineer_Portfolio/assets/currency_converter_modal-yiQhlxS4.webp`,zv=`/Software_Engineer_Portfolio/assets/eat_n_split_modal-1iFhqEv6.webp`,Bv=`/Software_Engineer_Portfolio/assets/fast_pizza_co_modal-CBLbTRXB.webp`,Vv=`/Software_Engineer_Portfolio/assets/movie_browser_modal-Bee53_px.webp`,Hv=`/Software_Engineer_Portfolio/assets/paradise_lodge_modal-2n84hDqP.webp`,Uv=`/Software_Engineer_Portfolio/assets/plasma_library_modal-4f9uwF5D.webp`,Wv=`/Software_Engineer_Portfolio/assets/react_quiz_modal-BfWySBAT.webp`,Gv=`/Software_Engineer_Portfolio/assets/tasks_list_modal-CdLpKg1H.webp`,Kv=1200,qv=[{title:{English:`🎵 WTM AI Music Generation Website`,Polish:`🎵 WTM AI Music Generation - Strona Generowania Muzyki AI`,Spanish:`🎵 WTM AI Music Generation - Sitio Web de Generación de Música con IA`},available:`web`,description:{English:`<p>WTM is a production-grade SaaS platform for generating and managing AI-generated music, built with Next.js 16, React 19, and TypeScript on managed cloud infrastructure.</p>
              <p>Users queue generation jobs, monitor progress in real time, and manage their track library through a full-stack architecture designed for production workloads.</p>
              <ul>
                <li><strong>Async generation pipeline</strong> — BullMQ + Redis workers for long-running AI jobs</li>
                <li><strong>Full-stack</strong> — Next.js App Router, React Server Components, Server Actions</li>
                <li><strong>Auth & security</strong> — NextAuth, protected routes, Zod validation, access control</li>
                <li><strong>Data</strong> — Supabase/PostgreSQL for users, metadata, and storage</li>
                <li><strong>Observability</strong> — Sentry monitoring + Pino structured logging</li>
              </ul>`,Polish:`<p>WTM to platforma SaaS klasy produkcyjnej do generowania muzyki AI i zarządzania nią, zbudowana w Next.js 16, React 19 i TypeScript na zarządzanej infrastrukturze chmurowej.</p>
             <p>Użytkownicy kolejkują zadania generowania, śledzą postęp w czasie rzeczywistym i zarządzają biblioteką utworów w architekturze full-stack zaprojektowanej pod realne obciążenia produkcyjne.</p>
             <ul>
               <li><strong>Asynchroniczny pipeline generowania</strong> — workery BullMQ + Redis do długotrwałych zadań AI</li>
               <li><strong>Full-stack</strong> — Next.js App Router, React Server Components, Server Actions</li>
               <li><strong>Uwierzytelnianie i bezpieczeństwo</strong> — NextAuth, chronione trasy, walidacja Zod, kontrola dostępu</li>
               <li><strong>Dane</strong> — Supabase/PostgreSQL dla użytkowników, metadanych i plików</li>
               <li><strong>Obserwowalność</strong> — monitoring Sentry + logi strukturalne Pino</li>
             </ul>`,Spanish:`<p>WTM es una plataforma SaaS de nivel producción para generar y gestionar música con IA, construida con Next.js 16, React 19 y TypeScript sobre infraestructura cloud gestionada.</p>
              <p>Los usuarios encolan trabajos de generación, monitorizan el progreso en tiempo real y gestionan su biblioteca de pistas a través de una arquitectura full-stack diseñada para cargas de producción.</p>
              <ul>
                <li><strong>Pipeline de generación asíncrono</strong> — workers BullMQ + Redis para trabajos de IA de larga duración</li>
                <li><strong>Full-stack</strong> — Next.js App Router, React Server Components, Server Actions</li>
                <li><strong>Autenticación y seguridad</strong> — NextAuth, rutas protegidas, validación con Zod, control de acceso</li>
                <li><strong>Datos</strong> — Supabase/PostgreSQL para usuarios, metadatos y almacenamiento</li>
                <li><strong>Observabilidad</strong> — monitorización con Sentry + logs estructurados con Pino</li>
              </ul>`},imageURL:`${Lv}`,technologies:[`Next.js`,`TypeScript`,`Supabase`,`PostgreSQL`,`BullMQ`,`Redis`],GitHubPagesURLTag:{English:`Go to the Website`,Polish:`Przejdź do Strony`,Spanish:`Ir al Sitio Web`},GitHubRepoURLTag:{English:`Go to the GitHub Repository`,Polish:`Przejdź do Repozytorium GitHub`,Spanish:`Ir al Repositorio de GitHub`},inverted:!0,border:!1,variant:`comingSoon`},{title:{English:`🏡 The Paradise Lodge - Luxury Cabin Booking Website`,Polish:`🏡 The Paradise Lodge - Luksusowa Strona Rezerwacji Domków`,Spanish:`🏡 The Paradise Lodge - Sitio Web de Reservas de Cabañas de Lujo`},available:`web`,description:{English:`<p>Cabin booking platform built with Next.js App Router and Supabase. Users browse cabins, check real-time availability, and create and manage reservations through authenticated accounts.</p>
                <ul>
                  <li><strong>Full-stack</strong> — Next.js App Router and React Server Components</li>
                  <li><strong>Authentication</strong> — NextAuth: sign-in, protected routes, per-user bookings</li>
                  <li><strong>Data</strong> — Supabase/PostgreSQL for cabins, users, and reservations + image storage</li>
                  <li><strong>Booking system</strong> — availability checking, reservation creation, guest management</li>
                  <li><strong>UI</strong> — Tailwind CSS, desktop-optimised booking experience</li>
                </ul>`,Polish:`<p>Platforma rezerwacji domków zbudowana z Next.js App Router i Supabase. Użytkownicy przeglądają domki, sprawdzają dostępność w czasie rzeczywistym oraz tworzą i zarządzają rezerwacjami przez uwierzytelnione konta.</p>
               <ul>
                 <li><strong>Full-stack</strong> — Next.js App Router i React Server Components</li>
                 <li><strong>Uwierzytelnianie</strong> — NextAuth: logowanie, chronione trasy, rezerwacje per użytkownik</li>
                 <li><strong>Dane</strong> — Supabase/PostgreSQL dla domków, użytkowników i rezerwacji + przechowywanie zdjęć</li>
                 <li><strong>System rezerwacji</strong> — sprawdzanie dostępności, tworzenie rezerwacji, zarządzanie gośćmi</li>
                 <li><strong>Interfejs</strong> — Tailwind CSS, zoptymalizowany pod desktop</li>
               </ul>`,Spanish:`<p>Plataforma de reservas de cabañas construida con Next.js App Router y Supabase. Los usuarios exploran cabañas, verifican disponibilidad en tiempo real y crean y gestionan reservas mediante cuentas autenticadas.</p>
                <ul>
                  <li><strong>Full-stack</strong> — Next.js App Router y React Server Components</li>
                  <li><strong>Autenticación</strong> — NextAuth: inicio de sesión, rutas protegidas, reservas por usuario</li>
                  <li><strong>Datos</strong> — Supabase/PostgreSQL para cabañas, usuarios y reservas + almacenamiento de imágenes</li>
                  <li><strong>Sistema de reservas</strong> — verificación de disponibilidad, creación de reservas, gestión de huéspedes</li>
                  <li><strong>Interfaz</strong> — Tailwind CSS, experiencia optimizada para escritorio</li>
                </ul>`},imageURL:`${Nv}`,modalImageURL:`${Hv}`,modalImageWidth:1920,modalImageHeight:942,technologies:[`Next.js`,`React`,`JavaScript`,`Supabase`,`NextAuth`,`Tailwind CSS`],GitHubPagesURLTag:{English:`Go to the Website`,Polish:`Przejdź do Strony`,Spanish:`Ir al Sitio Web`},GitHubRepoURLTag:{English:`Go to the GitHub Repository`,Polish:`Przejdź do Repozytorium GitHub`,Spanish:`Ir al Repositorio de GitHub`},GitHubPagesURL:`https://paradise-lodge-web.vercel.app`,GitHubRepoURL:`https://github.com/BoosterTech/ParadiseLodge-website.git`,inverted:!0,border:!1},{title:{English:`🎥 Movies Browser`,Polish:`🎥 Przeglądarka Filmów `,Spanish:`🎥 Navegador de Películas `},available:`web & mob`,description:{English:`<p>Movie discovery app built with React, Redux, and React Router on the TMDb API — browse films, actors, and crew with detailed views. Final team project of the YouCode Front-End program: three developers, four weeks, professional Git workflow.</p>
                <ul>
                  <li><strong>Architecture</strong> — reusable React components, Redux state for movies, actors, and UI</li>
                  <li><strong>Data</strong> — TMDb REST API via Axios for movies, cast, and crew details</li>
                  <li><strong>Routing</strong> — React Router navigation between list and detail views</li>
                  <li><strong>Team workflow</strong> — feature branches, pull requests, code reviews, shared task planning</li>
                  <li><strong>UI</strong> — styled-components implementing a professional design, desktop and mobile</li>
                </ul>`,Polish:`<p>Aplikacja do odkrywania filmów zbudowana z React, Redux i React Router na API TMDb — przeglądanie filmów, aktorów i ekipy ze szczegółowymi widokami. Końcowy projekt zespołowy programu YouCode Front-End: trzech programistów, cztery tygodnie, profesjonalny workflow Git.</p>
               <ul>
                 <li><strong>Architektura</strong> — komponenty React wielokrotnego użytku, stan Redux dla filmów, aktorów i UI</li>
                 <li><strong>Dane</strong> — integracja REST API TMDb przez Axios dla filmów, obsady i ekipy</li>
                 <li><strong>Routing</strong> — nawigacja React Router między widokami list i szczegółów</li>
                 <li><strong>Praca zespołowa</strong> — feature branches, pull requesty, code review, wspólne planowanie zadań</li>
                 <li><strong>Interfejs</strong> — styled-components według profesjonalnego projektu graficznego, desktop i mobile</li>
               </ul>`,Spanish:`<p>Aplicación de descubrimiento de películas construida con React, Redux y React Router sobre la API de TMDb — explora películas, actores y equipo con vistas detalladas. Proyecto final en equipo del programa YouCode Front-End: tres desarrolladores, cuatro semanas, flujo de trabajo Git profesional.</p>
                <ul>
                  <li><strong>Arquitectura</strong> — componentes React reutilizables, estado Redux para películas, actores y UI</li>
                  <li><strong>Datos</strong> — integración de la API REST de TMDb vía Axios para películas, reparto y equipo</li>
                  <li><strong>Routing</strong> — navegación React Router entre vistas de lista y detalle</li>
                  <li><strong>Trabajo en equipo</strong> — feature branches, pull requests, code reviews, planificación compartida</li>
                  <li><strong>Interfaz</strong> — styled-components implementando un diseño profesional, desktop y móvil</li>
                </ul>`},imageURL:`${Mv}`,modalImageURL:`${Vv}`,modalImageWidth:1766,modalImageHeight:912,technologies:[`React`,`Redux`,`React Router`,`Axios`,`Styled Components`],GitHubPagesURLTag:{English:`Go to the Website`,Polish:`Przejdź do Strony`,Spanish:`Ir al Sitio Web`},GitHubRepoURLTag:{English:`Go to the GitHub Repository`,Polish:`Przejdź do Repozytorium GitHub`,Spanish:`Ir al Repositorio de GitHub`},GitHubPagesURL:`https://boostertech.github.io/MovieBrowser/#/movies`,GitHubRepoURL:`https://github.com/BoosterTech/MovieBrowser.git`,inverted:!1},{title:{English:`📝Tasks List`,Polish:`📝Lista Zadań`,Spanish:`📝Lista de Tareas`},description:{English:`<p>Task manager built with React, Redux Toolkit, and Redux-Saga — create, complete, hide, and remove tasks with detail views and localStorage persistence.</p>
                <ul>
                  <li><strong>State</strong> — Redux Toolkit store with Redux-Saga handling asynchronous workflows</li>
                  <li><strong>Tasks</strong> — create, toggle, hide completed, remove, and per-task detail pages</li>
                  <li><strong>Routing</strong> — React Router navigation between list and detail views</li>
                  <li><strong>UI</strong> — styled-components, responsive desktop and mobile layouts</li>
                </ul>`,Polish:`<p>Aplikacja do zarządzania zadaniami zbudowana z React, Redux Toolkit i Redux-Saga — tworzenie, ukończanie, ukrywanie i usuwanie zadań z widokami szczegółów i zapisem w localStorage.</p>
               <ul>
                 <li><strong>Stan</strong> — store Redux Toolkit z Redux-Saga obsługującą operacje asynchroniczne</li>
                 <li><strong>Zadania</strong> — tworzenie, oznaczanie, ukrywanie ukończonych, usuwanie i strony szczegółów</li>
                 <li><strong>Routing</strong> — nawigacja React Router między listą a widokami szczegółów</li>
                 <li><strong>Interfejs</strong> — styled-components, responsywne układy desktop i mobile</li>
               </ul>`,Spanish:`<p>Gestor de tareas construido con React, Redux Toolkit y Redux-Saga — crea, completa, oculta y elimina tareas con vistas de detalle y persistencia en localStorage.</p>
                <ul>
                  <li><strong>Estado</strong> — store de Redux Toolkit con Redux-Saga para los flujos asíncronos</li>
                  <li><strong>Tareas</strong> — crear, marcar, ocultar completadas, eliminar y páginas de detalle</li>
                  <li><strong>Routing</strong> — navegación React Router entre la lista y las vistas de detalle</li>
                  <li><strong>Interfaz</strong> — styled-components, diseños responsivos para escritorio y móvil</li>
                </ul>`},imageURL:`${Iv}`,modalImageURL:`${Gv}`,modalImageWidth:1920,modalImageHeight:945,technologies:[`React`,`Redux Toolkit`,`Redux-Saga`,`React Router`,`Styled Components`],GitHubPagesURLTag:{English:`Go to the Website`,Polish:`Przejdź do Strony`,Spanish:`Ir al Sitio Web`},GitHubRepoURLTag:{English:`Go to the GitHub Repository`,Polish:`Przejdź do Repozytorium GitHub`,Spanish:`Ir al Repositorio de GitHub`},GitHubPagesURL:`https://boostertech.github.io/To-Do-List-Redux-Saga-Module-14/#/todo-list-module-14/tasks`,GitHubRepoURL:`https://github.com/BoosterTech/To-Do-List-Redux-Saga-Module-14.git`,inverted:!0,border:!0},{title:{English:`💱Currency Converter`,Polish:`💱Kalkulator Walut`,Spanish:`💱Conversor de Divisas`},available:`web & mob`,description:{English:`<p>Currency converter built with React and styled-components, powered by live exchange rates from the European Central Bank API.</p>
                <ul>
                  <li><strong>Data</strong> — async fetching of ECB rates via Axios, loading and error states handled</li>
                  <li><strong>Logic</strong> — conversion math across a wide currency set, driven by controlled inputs</li>
                  <li><strong>UI</strong> — styled-components, clean responsive layout</li>
                </ul>`,Polish:`<p>Kalkulator walut zbudowany z React i styled-components, oparty na aktualnych kursach z API Europejskiego Banku Centralnego.</p>
               <ul>
                 <li><strong>Dane</strong> — asynchroniczne pobieranie kursów EBC przez Axios, z obsługą stanów ładowania i błędów</li>
                 <li><strong>Logika</strong> — przeliczanie walut z szerokiego zestawu, sterowane kontrolowanymi polami</li>
                 <li><strong>Interfejs</strong> — styled-components, czysty responsywny układ</li>
               </ul>`,Spanish:`<p>Conversor de divisas construido con React y styled-components, alimentado por tipos de cambio en vivo de la API del Banco Central Europeo.</p>
                <ul>
                  <li><strong>Datos</strong> — obtención asíncrona de tipos del BCE vía Axios, con estados de carga y error</li>
                  <li><strong>Lógica</strong> — cálculo de conversiones sobre un amplio conjunto de divisas, con inputs controlados</li>
                  <li><strong>Interfaz</strong> — styled-components, diseño limpio y responsivo</li>
                </ul>`},imageURL:`${kv}`,modalImageURL:`${Rv}`,modalImageWidth:1920,modalImageHeight:942,technologies:[`React`,`Axios`,`Styled Components`],GitHubPagesURLTag:{English:`Go to the Website`,Polish:`Przejdź do Strony`,Spanish:`Ir al Sitio Web`},GitHubRepoURLTag:{English:`Go to the GitHub Repository`,Polish:`Przejdź do Repozytorium GitHub`,Spanish:`Ir al Repositorio de GitHub`},GitHubPagesURL:`https://boostertech.github.io/Currency-Converter-Fetch-Module-12/`,GitHubRepoURL:`https://github.com/BoosterTech/Currency-Converter-Fetch-Module-12.git`,inverted:!1,border:!0},{title:{English:`❓React Quiz App`,Polish:`❓React Quiz App`,Spanish:`❓React Quiz App`},description:{English:`<p>Interactive React quiz — 30 questions on components, hooks, and state, tracking progress and scoring each run.</p>
                <ul>
                  <li><strong>State</strong> — useReducer state machine driving quiz phases, answers, and score</li>
                  <li><strong>UI</strong> — styled-components, conditional rendering per quiz phase</li>
                  <li><strong>Fundamentals</strong> — functional components, hooks, derived state</li>
                </ul>`,Polish:`<p>Interaktywny quiz o React — 30 pytań o komponenty, hooki i stan, ze śledzeniem postępu i punktacją każdej rozgrywki.</p>
               <ul>
                 <li><strong>Stan</strong> — maszyna stanów na useReducer sterująca fazami quizu, odpowiedziami i wynikiem</li>
                 <li><strong>Interfejs</strong> — styled-components, renderowanie warunkowe dla każdej fazy</li>
                 <li><strong>Podstawy</strong> — komponenty funkcyjne, hooki, stan pochodny</li>
               </ul>`,Spanish:`<p>Quiz interactivo de React — 30 preguntas sobre componentes, hooks y estado, con seguimiento del progreso y puntuación de cada intento.</p>
                <ul>
                  <li><strong>Estado</strong> — máquina de estados con useReducer que controla las fases del quiz, las respuestas y la puntuación</li>
                  <li><strong>Interfaz</strong> — styled-components, renderizado condicional por fase del quiz</li>
                  <li><strong>Fundamentos</strong> — componentes funcionales, hooks, estado derivado</li>
                </ul>`},available:`web & mob`,imageURL:`${Fv}`,modalImageURL:`${Wv}`,modalImageWidth:656,modalImageHeight:545,technologies:[`React`,`useReducer`,`Styled Components`],GitHubPagesURLTag:{English:`Go to the Website`,Polish:`Przejdź do Strony`,Spanish:`Ir al Sitio Web`},GitHubRepoURLTag:{English:`Go to the GitHub Repository`,Polish:`Przejdź do Repozytorium GitHub`,Spanish:`Ir al Repositorio de GitHub`},GitHubPagesURL:`https://boostertech.github.io/react-quiz/`,GitHubRepoURL:`https://github.com/BoosterTech/react-quiz.git`,inverted:!0,border:!0},{title:{English:`⚛️Plasma Library`,Polish:`⚛️Biblioteka Plazma`,Spanish:`⚛️Biblioteca de Plasma`},description:{English:`<p>Informational site on plasma physics — my first web project, built with plain HTML, CSS, and JavaScript and preserved as originally written.</p>
                <ul>
                  <li><strong>Foundations</strong> — semantic HTML structure, hand-written CSS, vanilla JS interactivity</li>
                  <li><strong>Responsive</strong> — fluid layout adapting across screen sizes</li>
                  <li><strong>Content</strong> — curated books and publications on plasma physics</li>
                </ul>`,Polish:`<p>Strona informacyjna o fizyce plazmy — mój pierwszy projekt webowy, zbudowany w czystym HTML, CSS i JavaScript i zachowany w oryginalnej postaci.</p>
               <ul>
                 <li><strong>Podstawy</strong> — semantyczna struktura HTML, ręcznie pisany CSS, interakcje w vanilla JS</li>
                 <li><strong>Responsywność</strong> — płynny układ dostosowujący się do różnych ekranów</li>
                 <li><strong>Treść</strong> — wyselekcjonowane książki i publikacje o fizyce plazmy</li>
               </ul>`,Spanish:`<p>Sitio informativo sobre física de plasmas — mi primer proyecto web, construido con HTML, CSS y JavaScript puros y conservado tal como fue escrito.</p>
                <ul>
                  <li><strong>Fundamentos</strong> — estructura HTML semántica, CSS escrito a mano, interactividad en JS vanilla</li>
                  <li><strong>Responsivo</strong> — diseño fluido que se adapta a distintas pantallas</li>
                  <li><strong>Contenido</strong> — libros y publicaciones seleccionados sobre física de plasmas</li>
                </ul>`},available:`web & mob`,imageURL:`${Pv}`,modalImageURL:`${Uv}`,modalImageWidth:1903,modalImageHeight:942,technologies:[`HTML`,`CSS`,`JavaScript`],GitHubPagesURLTag:{English:`Go to the Website`,Polish:`Przejdź do Strony`,Spanish:`Ir al Sitio Web`},GitHubRepoURLTag:{English:`Go to the GitHub Repository`,Polish:`Przejdź do Repozytorium GitHub`,Spanish:`Ir al Repositorio de GitHub`},GitHubPagesURL:`https://boostertech.github.io/Plasma-Library/`,GitHubRepoURL:`https://github.com/BoosterTech/Plasma-Library.git`,inverted:!1,border:!0},{title:{English:`🍴Eat-n-split💶`,Polish:`🍴Eat-n-split💶`,Spanish:`🍴Eat-n-split💶`},description:{English:`<p>Bill-splitting app built with React and styled-components — add friends, enter expenses, and see what each person owes calculated live from shared state.</p>
                <ul>
                  <li><strong>State</strong> — controlled forms and lifted state driving per-person balances</li>
                  <li><strong>UI</strong> — styled-components for a consistent, responsive interface</li>
                  <li><strong>Fundamentals</strong> — props, component composition, conditional rendering</li>
                </ul>`,Polish:`<p>Aplikacja do dzielenia rachunków zbudowana z React i styled-components — dodawaj znajomych, wprowadzaj wydatki i zobacz na żywo, ile każda osoba ma do zapłacenia.</p>
               <ul>
                 <li><strong>Stan</strong> — kontrolowane formularze i współdzielony stan wyliczający salda poszczególnych osób</li>
                 <li><strong>Interfejs</strong> — styled-components zapewniające spójny, responsywny wygląd</li>
                 <li><strong>Podstawy</strong> — propsy, kompozycja komponentów, renderowanie warunkowe</li>
               </ul>`,Spanish:`<p>Aplicación para dividir cuentas construida con React y styled-components — agrega amigos, ingresa gastos y ve lo que debe cada persona calculado en vivo desde el estado compartido.</p>
                <ul>
                  <li><strong>Estado</strong> — formularios controlados y estado elevado que calcula los saldos por persona</li>
                  <li><strong>Interfaz</strong> — styled-components para una interfaz consistente y responsiva</li>
                  <li><strong>Fundamentos</strong> — props, composición de componentes, renderizado condicional</li>
                </ul>`},available:`web`,imageURL:`${Av}`,modalImageURL:`${zv}`,modalImageWidth:906,modalImageHeight:371,technologies:[`React`,`Styled Components`],GitHubPagesURLTag:{English:`Go to the Website`,Polish:`Przejdź do Strony`,Spanish:`Ir al Sitio Web`},GitHubRepoURLTag:{English:`Go to the GitHub Repository`,Polish:`Przejdź do Repozytorium GitHub`,Spanish:`Ir al Repositorio de GitHub`},GitHubPagesURL:`https://boostertech.github.io/eat-n-split/`,GitHubRepoURL:`https://github.com/BoosterTech/eat-n-split.git`,inverted:!0,border:!0},{title:{English:`🍕 Fast React Pizza Co. `,Polish:`🍕 Fast React Pizza Co.`,Spanish:`🍕 Fast React Pizza Co.`},description:{English:`<p>Pizza ordering app built with React, Redux Toolkit, and React Router — browse the API-loaded menu, build a cart, and place orders with priority pricing and order tracking.</p>
                <ul>
                  <li><strong>Routing &amp; data</strong> — React Router loaders and actions for menu fetching and order submission</li>
                  <li><strong>State</strong> — Redux Toolkit cart with derived totals and priority pricing</li>
                  <li><strong>UI</strong> — Tailwind CSS utility styling, responsive across screen sizes</li>
                  <li><strong>Tooling</strong> — Vite build, deployed to GitHub Pages</li>
                </ul>`,Polish:`<p>Aplikacja do zamawiania pizzy zbudowana z React, Redux Toolkit i React Router — przeglądaj menu ładowane z API, składaj koszyk i zamawiaj z ceną priorytetową oraz śledzeniem zamówień.</p>
               <ul>
                 <li><strong>Routing i dane</strong> — loadery i akcje React Router do pobierania menu i składania zamówień</li>
                 <li><strong>Stan</strong> — koszyk w Redux Toolkit z wyliczanymi sumami i ceną priorytetową</li>
                 <li><strong>Interfejs</strong> — stylowanie utility Tailwind CSS, responsywne na różnych ekranach</li>
                 <li><strong>Narzędzia</strong> — build Vite, wdrożenie na GitHub Pages</li>
               </ul>`,Spanish:`<p>Aplicación de pedidos de pizza construida con React, Redux Toolkit y React Router — explora el menú cargado desde la API, arma un carrito y realiza pedidos con precio prioritario y seguimiento.</p>
                <ul>
                  <li><strong>Routing y datos</strong> — loaders y actions de React Router para obtener el menú y enviar pedidos</li>
                  <li><strong>Estado</strong> — carrito en Redux Toolkit con totales derivados y precio prioritario</li>
                  <li><strong>Interfaz</strong> — estilos utility de Tailwind CSS, responsiva en distintas pantallas</li>
                  <li><strong>Herramientas</strong> — build con Vite, desplegada en GitHub Pages</li>
                </ul>`},available:`web & mob`,imageURL:`${jv}`,modalImageURL:`${Bv}`,modalImageWidth:573,modalImageHeight:847,technologies:[`React`,`Redux Toolkit`,`React Router`,`Tailwind CSS`],GitHubPagesURLTag:{English:`Go to the Website`,Polish:`Przejdź do Strony`,Spanish:`Ir al Sitio Web`},GitHubRepoURLTag:{English:`Go to the GitHub Repository`,Polish:`Przejdź do Repozytorium GitHub`,Spanish:`Ir al Repositorio de GitHub`},GitHubPagesURL:`https://boostertech.github.io/Fast-Pizza-Co/`,GitHubRepoURL:`https://github.com/BoosterTech/Fast-Pizza-Co.git`,inverted:!1,border:!1}],Jv=wp`
  0% {
    box-shadow: 0 0 0 0 rgb(var(--color-primary-rgb) / 0.45);
  }
  70% {
    box-shadow: 0 0 0 8px rgb(var(--color-primary-rgb) / 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgb(var(--color-primary-rgb) / 0);
  }
`,Yv=wp`
  0% {
    transform: translateX(-120%);
  }
  60%,
  100% {
    transform: translateX(280%);
  }
`,Xv=Q(K.div)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid rgb(var(--color-primary-rgb) / 0.35);
  background: rgb(var(--color-surface-rgb) / 0.78);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-lg);
  color: var(--color-text-primary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
  pointer-events: none;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color-primary);
    animation: ${Jv} 2.2s ease-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 40%;
    background: linear-gradient(
      90deg,
      transparent,
      rgb(var(--color-primary-rgb) / 0.18),
      transparent
    );
    animation: ${Yv} 3s ease-in-out infinite;
  }

  ${({$inline:e})=>e?Z`
          display: flex;
          width: fit-content;
          margin: 0 auto;
        `:Z`
          position: absolute;
          bottom: var(--spacing-md);
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        `}

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }

    &::after {
      display: none;
    }
  }
`,Zv=Q(K.div)`
  position: relative;
  flex: 0 0 var(--card-width);
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  background: var(--color-surface);
  transition:
    transform 0.45s ease,
    transform-origin 0.45s ease,
    opacity 0.45s ease,
    filter 0.45s ease,
    border-color 0.45s ease,
    box-shadow 0.45s ease;

  ${({$isActive:e,$position:t})=>e?Z`
          z-index: 2;
          border-color: var(--color-primary);
          box-shadow: 0 8px 24px rgba(var(--color-primary-rgb), 0.18);
        `:Z`
          transform: perspective(1200px)
            ${t===`left`?`rotateY(-14deg)`:t===`right`?`rotateY(14deg)`:`scale(0.92)`}
            scale(0.88);
          transform-origin: ${t===`left`?`right center`:t===`right`?`left center`:`center`};
          opacity: 0.5;
          filter: brightness(0.72);
        `}

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    aspect-ratio: 16 / 9;
  }
`,Qv=Q.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
  display: block;
  pointer-events: none;
`,$v=Q(K.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(180deg, transparent 0%, var(--color-surface) 40%);

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    display: none;
  }
`,ey=Q.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-xs);
  width: 100%;
  padding: clamp(4px, 1.2cqw, var(--spacing-sm));
  background: transparent;
  container-type: inline-size;

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    padding-bottom: var(--spacing-xs);
  }
`,ty=Q.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  min-width: 0;
`,ny=Q.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(4px, 1cqw, var(--spacing-sm));
  margin-left: auto;

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    display: none;
  }
`,ry=Q(t_)`
  min-height: 0;
  height: clamp(22px, 4.5cqw, 34px);
  padding: clamp(0px, 0.5cqw, var(--spacing-xs))
    clamp(6px, 1.6cqw, var(--spacing-sm));
  font-size: clamp(0.65rem, 1.8cqw, 0.85rem);
  transition: all 0.3s ease;

  ${({$secondary:e})=>e?Z`
          color: var(--color-text-primary);
          background: transparent;
          border: 1px solid rgba(var(--color-text-primary-rgb), 0.35);

          &:hover {
            background: rgba(var(--color-text-primary-rgb), 0.1);
            border-color: var(--color-text-primary);
          }
        `:Z`
          color: var(--color-on-primary);
          background: var(--color-primary);
          border: 1px solid var(--color-primary);

          &:hover {
            color: var(--color-white);
            background: var(--color-primary-hover);
            border-color: var(--color-white);
          }
        `}

  svg {
    width: clamp(11px, 2cqw, 14px);
    height: clamp(11px, 2cqw, 14px);
  }
`,iy=Q.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  z-index: 4;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: rgb(var(--color-surface-rgb) / 0.85);
  color: var(--color-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);

  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    display: none;
  }
`,ay=({project:e,isActive:t,position:n,onClick:r,onExpand:i})=>{let{language:a}=Op(),{projects:o}=Ip(),s=()=>{let t=e.modalImageURL||e.imageURL;t&&(new Image().src=t)};return(0,h.jsxs)(Zv,{$isActive:t,$position:n,role:`group`,"aria-roledescription":`slide`,"aria-label":e.title[a],onClick:t?i:r,onMouseEnter:s,children:[(0,h.jsx)(Qv,{src:e.imageURL,alt:o.screenshotAlt.replace(`{title}`,e.title[a]),width:Kv,height:675,loading:`lazy`}),t&&e.variant!==`comingSoon`&&(0,h.jsx)(iy,{onFocus:s,onClick:e=>{e.stopPropagation(),i()},"aria-label":o.expandLabel.replace(`{title}`,e.title[a]),children:(0,h.jsx)(pm,{})}),e.variant!==`comingSoon`&&(0,h.jsx)($v,{initial:!1,animate:{y:t?0:`100%`},transition:{duration:.35,ease:[.4,0,.2,1]},children:(0,h.jsx)(ey,{children:(0,h.jsx)(ty,{children:(0,h.jsxs)(ny,{children:[t&&e.GitHubPagesURL&&(0,h.jsxs)(ry,{href:e.GitHubPagesURL,target:`_blank`,rel:`noopener noreferrer`,onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(mm,{}),e.GitHubPagesURLTag?.[a]||o.liveDemoLabel]}),t&&e.GitHubRepoURL&&(0,h.jsxs)(ry,{$secondary:!0,href:e.GitHubRepoURL,target:`_blank`,rel:`noopener noreferrer`,onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(am,{}),e.GitHubRepoURLTag?.[a]||o.repoLabel]})]})})})}),e.variant===`comingSoon`&&(0,h.jsx)(Xv,{children:o.comingSoonLabel})]})},oy=Eu(),sy=Q(K.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--color-black-rgb) / 0.8);
  backdrop-filter: blur(6px);
  padding: var(--spacing-lg);

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    padding: 0;
  }
`,cy=Q(K.div)`
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 24px 80px rgb(var(--color-black-rgb) / 0.5);

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    max-width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
    border: none;
  }
`,ly=Q.div`
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  touch-action: pan-y;
  max-height: 90vh;
  height: 100%;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 4px;
  }
  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    max-height: none;
  }
`,uy=Z`
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: rgba(var(--color-surface-rgb), 0.9);
  color: var(--color-text-primary);
  cursor: pointer;
  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast);
  backdrop-filter: blur(8px);

  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
    border-color: var(--color-primary);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,dy=Q.button`
  ${uy}
  top: max(var(--spacing-md), env(safe-area-inset-top, 0px));
  right: max(var(--spacing-md), env(safe-area-inset-right, 0px));
`,fy=Q.button`
  ${uy}
  top: 50%;
  transform: translateY(-50%);
  ${({$left:e})=>e?`left: var(--spacing-md);`:`right: var(--spacing-md);`}

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    display: none;
  }
`,py=Q(K.div)`
  position: relative;
  overflow: clip;
`,my=Q(K.div)`
  background: var(--color-surface);
`,hy=Q.div`
  position: relative;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 72px;
      z-index: 2;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(
        90deg,
        rgb(var(--color-black-rgb) / 0.55) 0%,
        transparent 100%
      );
    }

    &::after {
      right: 0;
      background: linear-gradient(
        -90deg,
        rgb(var(--color-black-rgb) / 0.55) 0%,
        transparent 100%
      );
    }
  }
`,gy=Q.img`
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: contain;
  object-position: top center;
  display: block;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  background: var(--color-terminal-bg);
  opacity: ${({$loaded:e})=>+!!e};
  transition: opacity 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    border-radius: 0;
  }

  @media (max-height: 500px) {
    max-height: 200px;
  }
`,_y=Q.div`
  padding: var(--spacing-xl) var(--spacing-xl) var(--spacing-2xl);

  @media (max-width: ${({theme:e})=>e.breakpoint.sm}) {
    padding: var(--spacing-lg);
  }

  @media (max-height: 500px) {
    padding: var(--spacing-md);
  }
`,vy=Q.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-md) 0;
  line-height: 1.3;
`,yy=Q.div`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text-secondary);

  p {
    margin: 0 0 var(--spacing-md) 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul {
    margin: 0;
    padding-left: var(--spacing-lg);
  }

  li {
    margin-bottom: var(--spacing-xs);
  }

  li:last-child {
    margin-bottom: 0;
  }
`,by=Q.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin: var(--spacing-lg) 0;
`,xy=Q.span`
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xxs) var(--spacing-sm);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-primary);
  background: rgba(var(--color-text-primary-rgb), 0.08);
  border: 1px solid rgba(var(--color-text-primary-rgb), 0.18);
  border-radius: var(--radius-md);
`,Sy=Q.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
`,Cy=Q(t_)`
  min-height: 36px;
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: 0.9rem;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  ${({$secondary:e})=>e?Z`
          color: var(--color-text-primary);
          background: transparent;
          border: 1px solid rgba(var(--color-text-primary-rgb), 0.35);

          &:hover {
            background: rgba(var(--color-text-primary-rgb), 0.1);
            border-color: var(--color-text-primary);
          }
        `:Z`
          color: var(--color-on-primary);
          background: var(--color-primary);
          border: 1px solid var(--color-primary);

          &:hover {
            color: var(--color-white);
            background: var(--color-primary-hover);
            border-color: var(--color-white);
          }
        `}

  svg {
    width: 16px;
    height: 16px;
  }
`,wy=({project:e,onClose:t,onPrev:n,onNext:r,hasPrev:i,hasNext:a})=>{let{language:o}=Op(),{projects:s}=Ip(),c=xu(),l=Gm(`(max-width: ${ph.breakpoint.lg})`),u=(0,g.useRef)(null),d=(0,g.useRef)(null),f=(0,g.useRef)(null),[p,m]=(0,g.useState)(0),[_,v]=(0,g.useState)(null),y=(0,g.useCallback)(()=>{m(-1),n()},[n]),b=(0,g.useCallback)(()=>{m(1),r()},[r]);if((0,g.useEffect)(()=>{if(!e)return;let t=document.activeElement,n=window.scrollY;return document.body.style.position=`fixed`,document.body.style.top=`-${n}px`,document.body.style.left=`0`,document.body.style.right=`0`,f.current?.focus(),()=>{document.body.style.position=``,document.body.style.top=``,document.body.style.left=``,document.body.style.right=``,window.scrollTo(0,n),t instanceof HTMLElement&&t.focus({preventScroll:!0})}},[!!e]),(0,g.useEffect)(()=>{if(!e)return;let n=e=>{if(e.key===`Escape`){t();return}if(e.key===`ArrowLeft`&&i&&y(),e.key===`ArrowRight`&&a&&b(),e.key===`Tab`&&u.current){let t=u.current.querySelectorAll(`button, a[href], [tabindex]:not([tabindex="-1"])`);if(!t.length)return;let n=t[0],r=t[t.length-1];u.current.contains(document.activeElement)?e.shiftKey&&document.activeElement===n?(r.focus(),e.preventDefault()):!e.shiftKey&&document.activeElement===r&&(n.focus(),e.preventDefault()):(n.focus(),e.preventDefault())}};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e,t,y,b,i,a]),(0,g.useEffect)(()=>{d.current?.scrollTo({top:0})},[e]),!e)return null;let x=e.modalImageURL||e.imageURL,S=c?{duration:.15}:{type:`spring`,stiffness:420,damping:34},C=c?{opacity:0}:{scale:.95,opacity:0,y:16},w=c?{opacity:0}:{scale:.97,opacity:0,y:8,transition:{duration:.16,ease:`easeIn`}},T=c?0:55,ee=c?{duration:.15}:{type:`spring`,stiffness:260,damping:28};return(0,oy.createPortal)((0,h.jsx)(sy,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:c?.1:.18},onClick:t,"data-testid":`project-modal-backdrop`,children:(0,h.jsxs)(cy,{ref:u,role:`dialog`,"aria-modal":`true`,"aria-label":e.title[o],"aria-describedby":`project-modal-description`,initial:C,animate:{scale:1,opacity:1,y:0},exit:w,transition:S,onClick:e=>e.stopPropagation(),drag:l?`x`:!1,dragConstraints:{left:0,right:0},dragElastic:0,dragMomentum:!1,dragDirectionLock:!0,onDragEnd:(e,t)=>{let{offset:n,velocity:r}=t;(n.x<-60||r.x<-400)&&a?b():(n.x>60||r.x>400)&&i&&y()},style:{touchAction:l?`pan-y`:`auto`},children:[(0,h.jsx)(dy,{ref:f,onClick:t,"aria-label":s.closeLabel,children:(0,h.jsx)(Dm,{})}),i&&(0,h.jsx)(fy,{$left:!0,onClick:y,"aria-label":s.previousLabel,children:(0,h.jsx)(Tg,{})}),a&&(0,h.jsx)(fy,{onClick:b,"aria-label":s.nextLabel,children:(0,h.jsx)(Eg,{})}),(0,h.jsx)(ly,{ref:d,children:(0,h.jsx)(py,{layout:!0,children:(0,h.jsx)(xc,{mode:`popLayout`,initial:!1,children:(0,h.jsxs)(my,{initial:{opacity:0,x:`${T*p}%`},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,scale:c?1:.95,x:`${-T*p}%`},transition:ee,children:[(0,h.jsx)(hy,{children:(0,h.jsx)(gy,{$loaded:_===x,src:x,width:e.modalImageURL?e.modalImageWidth:Kv,height:e.modalImageURL?e.modalImageHeight:675,alt:s.screenshotAlt.replace(`{title}`,e.title[o]),onLoad:()=>v(x)})}),(0,h.jsxs)(_y,{children:[(0,h.jsx)(vy,{children:e.title[o]}),(0,h.jsx)(yy,{id:`project-modal-description`,dangerouslySetInnerHTML:{__html:e.description[o]}}),e.technologies?.length>0&&(0,h.jsx)(by,{children:e.technologies.map(e=>(0,h.jsx)(xy,{children:e},e))}),(0,h.jsxs)(Sy,{children:[e.variant===`comingSoon`&&(0,h.jsx)(Xv,{$inline:!0,children:s.comingSoonLabel}),e.GitHubPagesURL&&(0,h.jsxs)(Cy,{href:e.GitHubPagesURL,target:`_blank`,rel:`noopener noreferrer`,children:[(0,h.jsx)(mm,{}),e.GitHubPagesURLTag?.[o]||`Live Demo`]}),e.GitHubRepoURL&&(0,h.jsxs)(Cy,{$secondary:!0,href:e.GitHubRepoURL,target:`_blank`,rel:`noopener noreferrer`,children:[(0,h.jsx)(am,{}),e.GitHubRepoURLTag?.[o]||`GitHub`]})]})]})]},e.title.English)})})})]})}),document.body)},Ty=Q.section`
  padding: var(--spacing-3xl) 0;
  margin: var(--spacing-md) 0;
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    margin: var(--spacing-2xl) 0;
    padding: 10px var(--spacing-lg) var(--spacing-2xl) var(--spacing-lg);
  }
`,Ey=Q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-xl);
  animation: ${Eh} 0.8s ease-out;

  @media (max-width: ${({theme:e})=>e.breakpoint.xl}) {
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-lg);
  }
`,Dy=Q.h2`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin: 0;
  color: var(--color-text-primary);
  line-height: 1.2;
  position: relative;
  padding-bottom: 0.3em;
  padding-left: 16px;
  transform: ${({$lang:e})=>e===`English`?`translateX(0px)`:e===`Polish`?`translateX(6px)`:`none`};
  background: linear-gradient(
    135deg,
    var(--color-text-primary) 0%,
    var(--color-primary) 50%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${wh} 15s ease-in-out infinite;
  ${Ch}

  @media (max-width: ${({theme:e})=>e.breakpoint.xl}) {
    padding-left: 13px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.lg}) {
    transform: ${({$lang:e})=>e===`English`?`translateX(3px)`:e===`Polish`?`translateX(1px)`:`none`};
  }
`,Oy=Q(K.div)`
  width: 100%;
  touch-action: pan-y;
  will-change: transform;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 12%,
    rgba(var(--color-black-rgb), 1) 88%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 12%,
    rgba(var(--color-black-rgb), 1) 88%,
    transparent
  );

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    -webkit-mask-image: none;
    mask-image: none;
  }
`,ky=Q.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  /* border-radius: var(--radius-xl); */
  /* border-right: 1px solid var(--color-white); */
`,Ay=Q.img`
  width: 70px;
  height: 70px;
  margin-bottom: calc(-4 * var(--spacing-sm));
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  box-shadow: var(--shadow-lg);
  animation: ${Ah} 3s ease-in-out infinite;
  transition: transform var(--transition-normal);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xl}) {
    width: 70px;
    height: 70px;
    margin-bottom: calc(-3 * var(--spacing-sm));
  }
`,jy=Q.div`
  --card-width: 70%;
  --card-gap: 2%;

  display: flex;
  align-items: center;
  gap: var(--card-gap);
  width: 100%;
  padding: var(--spacing-md) 0;
  transform: translateX(
    calc(
      -1 * var(--active-index) * (var(--card-width) + var(--card-gap)) +
        (100% - var(--card-width)) / 2
    )
  );
  transition: transform 0.5s ease;

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    --card-width: 80%;
    --card-gap: 3%;
  }
`,My=Q.button`
  position: absolute;
  top: 50%;
  ${({$left:e})=>e?`left: var(--spacing-md)`:`right: var(--spacing-md)`};
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: var(--color-hero-nav-bg);
  color: var(--color-white);
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-lg);

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.md}) {
    display: none;
  }
`,Ny=Q.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
`,Py=Q.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  padding: 7px;
  background-clip: content-box;
  cursor: pointer;
  background: ${({$active:e})=>e?`var(--color-primary)`:`var(--color-border)`};
  transition: all var(--transition-fast);

  &:hover {
    background: ${({$active:e})=>e?`var(--color-primary)`:`var(--color-secondary)`};
  }
`,Fy=({id:e})=>{let{projects:t}=Ip(),{language:n}=Op(),[r,i]=(0,g.useState)(1),[a,o]=(0,g.useState)(null),s=a===null?null:qv[a],c=(0,g.useRef)(!1),l=(0,g.useRef)(null);(0,g.useEffect)(()=>{if(navigator.connection?.saveData)return;let e=l.current;if(!e||typeof IntersectionObserver>`u`)return;let t=()=>qv.forEach(e=>{e.modalImageURL&&(new Image().src=e.modalImageURL)}),n=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(n.disconnect(),`requestIdleCallback`in window?requestIdleCallback(t):t())},{rootMargin:`600px 0px`});return n.observe(e),()=>n.disconnect()},[]);let u=e=>i(e),d=()=>i(e=>Math.max(0,e-1)),f=()=>i(e=>Math.min(qv.length-1,e+1));return(0,h.jsxs)(Ty,{id:e,ref:l,children:[(0,h.jsxs)(Ey,{children:[(0,h.jsx)(`a`,{href:`https://github.com/BoosterTech`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":t.githubProfileLabel,children:(0,h.jsx)(Ay,{src:Og,alt:``})}),(0,h.jsx)(Dy,{$lang:n,"aria-label":Sh[n][2].name,children:t.header})]}),(0,h.jsxs)(ky,{role:`region`,"aria-label":t.regionLabel,onKeyDown:e=>{a===null&&(e.key===`ArrowLeft`&&r>0?(e.preventDefault(),d()):e.key===`ArrowRight`&&r<qv.length-1&&(e.preventDefault(),f()))},children:[r>0&&(0,h.jsx)(My,{$left:!0,onClick:d,"aria-label":t.previousLabel,children:(0,h.jsx)(Tg,{})}),(0,h.jsx)(Oy,{drag:`x`,dragDirectionLock:!0,dragConstraints:{left:0,right:0},dragElastic:.15,dragMomentum:!1,onDrag:(e,t)=>{Math.abs(t.offset.x)>8&&(c.current=!0)},onDragEnd:(e,t)=>{let{offset:n,velocity:r}=t;Math.abs(n.x)>Math.abs(n.y)&&(n.x<-60||r.x<-400?f():(n.x>60||r.x>400)&&d()),setTimeout(()=>{c.current=!1},150)},children:(0,h.jsx)(jy,{style:{"--active-index":r},children:qv.map((e,t)=>(0,h.jsx)(ay,{project:e,isActive:t===r,position:t===r?`center`:t<r?`left`:`right`,onClick:()=>{c.current||u(t)},onExpand:()=>{c.current||o(t)}},e.title.English))})}),r<qv.length-1&&(0,h.jsx)(My,{onClick:f,"aria-label":t.nextLabel,children:(0,h.jsx)(Eg,{})})]}),(0,h.jsx)(Ny,{children:qv.map((e,n)=>(0,h.jsx)(Py,{$active:n===r,onClick:()=>u(n),"aria-label":`${t.goToLabel} ${n+1}`,"aria-current":n===r?`true`:void 0},n))}),(0,h.jsx)(xc,{children:s&&(0,h.jsx)(wy,{project:s,onClose:()=>o(null),onPrev:()=>o(e=>Math.max(0,e-1)),onNext:()=>o(e=>Math.min(qv.length-1,e+1)),hasPrev:a>0,hasNext:a<qv.length-1})})]})},Iy=()=>{let{language:e}=Op();return(0,g.useEffect)(()=>{let e=window.location.hash.slice(1);if(!e)return;let t=()=>document.getElementById(e)?.scrollIntoView();return document.readyState===`complete`?t():window.addEventListener(`load`,t,{once:!0}),()=>window.removeEventListener(`load`,t)},[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Qh,{}),(0,h.jsx)(qh,{}),(0,h.jsxs)(kp,{children:[(0,h.jsx)(Ov,{id:Sh[e][0].slug}),(0,h.jsx)(Cg,{id:Sh[e][1].slug}),(0,h.jsx)(Fy,{id:Sh[e][2].slug}),(0,h.jsx)(Bg,{id:Sh[e][3].slug})]}),(0,h.jsx)(Yg,{})]})},Ly=Cp`
${jp}
${Z`
  html {
    box-sizing: border-box;
    scrollbar-gutter: stable;
    scroll-padding-top: calc(
      var(--nav-height-actual, var(--nav-height)) + var(--spacing-md)
    );
    scrollbar-width: thin;
    scrollbar-color: var(--color-secondary) var(--color-surface);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
    background-color: var(--color-background);
    overflow-x: hidden;
    overflow-x: clip;
    color: var(--color-text-primary);
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    max-width: 100%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    height: 100lvh;
    background-image: url(${`/Software_Engineer_Portfolio/`}backgroundLight.webp);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }

  [data-theme="dark"] body::before {
    background-image: url(${`/Software_Engineer_Portfolio/`}backgroundDark.webp);
  }

  @media (max-width: ${ph.breakpoint.lg}) {
    body::before {
      background-image: url(${`/Software_Engineer_Portfolio/`}backgroundLightMobile.webp);
    }

    [data-theme="dark"] body::before {
      background-image: url(${`/Software_Engineer_Portfolio/`}backgroundDarkMobile.webp);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 var(--spacing-md) 0;
    color: var(--color-text-primary);
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 700;
  }

  h3 {
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: 600;
  }

  p {
    margin: 0 0 var(--spacing-md) 0;
    color: var(--color-text-secondary);
    line-height: 1.7;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  a:hover {
    color: var(--color-primary-hover);
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-surface);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-secondary);
    border-radius: var(--radius-md);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  @media (max-width: ${ph.breakpoint.xl}) {
    /* Hide scrollbar for tablets and mobile devices */
    ::-webkit-scrollbar {
      display: none;
      width: 0;
      background: transparent;
    }

    html,
    * {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  }

  /* Focus styles for accessibility — keyboard only */
  *:focus {
    outline: none;
  }

  *:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* Selection styles */
  ::selection {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  /* While the talking portrait plays, freeze every decorative animation
     mid-pose — cumulative animation load starves the media pipeline into a
     waiting-state stall on low-end Android (verified on-device). */
  .portrait-playing *,
  .portrait-playing *::before,
  .portrait-playing *::after {
    animation-play-state: paused !important;
  }
`}
`,Ry=`modulepreload`,zy=function(e){return`/Software_Engineer_Portfolio/`+e},By={},Vy=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=zy(t,n),t=s(t),t in By)return;By[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Ry,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};Du.createRoot(document.getElementById(`root`)).render((0,h.jsx)(g.StrictMode,{children:(0,h.jsx)(Dp,{children:(0,h.jsx)(Np,{children:(0,h.jsxs)(hp,{theme:ph,children:[(0,h.jsx)(Ly,{}),(0,h.jsx)(Oc,{features:()=>Vy(()=>Promise.resolve().then(()=>Su).then(e=>e.domMax),void 0),children:(0,h.jsx)(Iy,{})})]})})})}));