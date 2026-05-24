(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ee=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},te=/-\w/g,E=ee(e=>e.replace(te,e=>e.slice(1).toUpperCase())),ne=/\B([A-Z])/g,D=ee(e=>e.replace(ne,`-$1`).toLowerCase()),re=ee(e=>e.charAt(0).toUpperCase()+e.slice(1)),ie=ee(e=>e?`on${re(e)}`:``),O=(e,t)=>!Object.is(e,t),ae=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},k=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},oe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},se,ce=()=>se||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function le(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?pe(r):le(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var ue=/;(?![^(]*\))/g,de=/:([^]+)/,fe=/\/\*[^]*?\*\//g;function pe(e){let t={};return e.replace(fe,``).split(ue).forEach(e=>{if(e){let n=e.split(de);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function A(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=A(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var me=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,he=e(me);me+``;function ge(e){return!!e||e===``}function _e(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ve(e[r],t[r]);return n}function ve(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?_e(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ve(e[n],t[n]))return!1}}return String(e)===String(t)}var ye=e=>!!(e&&e.__v_isRef===!0),j=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?ye(e)?j(e.value):JSON.stringify(e,be,2):String(e),be=(e,t)=>ye(t)?be(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[xe(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>xe(e))}:_(t)?xe(t):v(t)&&!d(t)&&!C(t)?String(t):t,xe=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,M,Se=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=M,!e&&M&&(this.index=(M.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=M;try{return M=this,e()}finally{M=t}}}on(){++this._on===1&&(this.prevScope=M,M=this)}off(){this._on>0&&--this._on===0&&(M=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Ce(){return M}var N,we=new WeakSet,Te=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,M&&M.active&&M.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,we.has(this)&&(we.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ke(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,He(this),Me(this);let e=N,t=Re;N=this,Re=!0;try{return this.fn()}finally{Ne(this),N=e,Re=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ie(e);this.deps=this.depsTail=void 0,He(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?we.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pe(this)&&this.run()}get dirty(){return Pe(this)}},Ee=0,De,Oe;function ke(e,t=!1){if(e.flags|=8,t){e.next=Oe,Oe=e;return}e.next=De,De=e}function Ae(){Ee++}function je(){if(--Ee>0)return;if(Oe){let e=Oe;for(Oe=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;De;){let t=De;for(De=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Me(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ne(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ie(r),Le(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Pe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Fe(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Fe(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ue)||(e.globalVersion=Ue,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Pe(e))))return;e.flags|=2;let t=e.dep,n=N,r=Re;N=e,Re=!0;try{Me(e);let n=e.fn(e._value);(t.version===0||O(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{N=n,Re=r,Ne(e),e.flags&=-3}}function Ie(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ie(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Le(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Re=!0,ze=[];function Be(){ze.push(Re),Re=!1}function Ve(){let e=ze.pop();Re=e===void 0?!0:e}function He(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=N;N=void 0;try{t()}finally{N=e}}}var Ue=0,We=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ge=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!N||!Re||N===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==N)t=this.activeLink=new We(N,this),N.deps?(t.prevDep=N.depsTail,N.depsTail.nextDep=t,N.depsTail=t):N.deps=N.depsTail=t,Ke(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=N.depsTail,t.nextDep=void 0,N.depsTail.nextDep=t,N.depsTail=t,N.deps===t&&(N.deps=e)}return t}trigger(e){this.version++,Ue++,this.notify(e)}notify(e){Ae();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{je()}}};function Ke(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ke(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var qe=new WeakMap,Je=Symbol(``),Ye=Symbol(``),Xe=Symbol(``);function P(e,t,n){if(Re&&N){let t=qe.get(e);t||qe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ge),r.map=t,r.key=n),r.track()}}function Ze(e,t,n,r,i,a){let o=qe.get(e);if(!o){Ue++;return}let s=e=>{e&&e.trigger()};if(Ae(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Xe||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Xe)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Je)),f(e)&&s(o.get(Ye)));break;case`delete`:i||(s(o.get(Je)),f(e)&&s(o.get(Ye)));break;case`set`:f(e)&&s(o.get(Je));break}}je()}function Qe(e){let t=F(e);return t===e?t:(P(t,`iterate`,Xe),Rt(e)?t:t.map(Vt))}function $e(e){return P(e=F(e),`iterate`,Xe),e}function et(e,t){return Lt(e)?Ht(It(e)?Vt(t):t):Vt(t)}var tt={__proto__:null,[Symbol.iterator](){return nt(this,Symbol.iterator,e=>et(this,e))},concat(...e){return Qe(this).concat(...e.map(e=>d(e)?Qe(e):e))},entries(){return nt(this,`entries`,e=>(e[1]=et(this,e[1]),e))},every(e,t){return it(this,`every`,e,t,void 0,arguments)},filter(e,t){return it(this,`filter`,e,t,e=>e.map(e=>et(this,e)),arguments)},find(e,t){return it(this,`find`,e,t,e=>et(this,e),arguments)},findIndex(e,t){return it(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return it(this,`findLast`,e,t,e=>et(this,e),arguments)},findLastIndex(e,t){return it(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return it(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ot(this,`includes`,e)},indexOf(...e){return ot(this,`indexOf`,e)},join(e){return Qe(this).join(e)},lastIndexOf(...e){return ot(this,`lastIndexOf`,e)},map(e,t){return it(this,`map`,e,t,void 0,arguments)},pop(){return st(this,`pop`)},push(...e){return st(this,`push`,e)},reduce(e,...t){return at(this,`reduce`,e,t)},reduceRight(e,...t){return at(this,`reduceRight`,e,t)},shift(){return st(this,`shift`)},some(e,t){return it(this,`some`,e,t,void 0,arguments)},splice(...e){return st(this,`splice`,e)},toReversed(){return Qe(this).toReversed()},toSorted(e){return Qe(this).toSorted(e)},toSpliced(...e){return Qe(this).toSpliced(...e)},unshift(...e){return st(this,`unshift`,e)},values(){return nt(this,`values`,e=>et(this,e))}};function nt(e,t,n){let r=$e(e),i=r[t]();return r!==e&&!Rt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var rt=Array.prototype;function it(e,t,n,r,i,a){let o=$e(e),s=o!==e&&!Rt(e),c=o[t];if(c!==rt[t]){let t=c.apply(e,a);return s?Vt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,et(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function at(e,t,n,r){let i=$e(e),a=i!==e&&!Rt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=et(e,t)),n.call(this,t,et(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?et(e,c):c}function ot(e,t,n){let r=F(e);P(r,`iterate`,Xe);let i=r[t](...n);return(i===-1||i===!1)&&zt(n[0])?(n[0]=F(n[0]),r[t](...n)):i}function st(e,t,n=[]){Be(),Ae();let r=F(e)[t].apply(e,n);return je(),Ve(),r}var ct=e(`__proto__,__v_isRef,__isVue`),lt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ut(e){_(e)||(e=String(e));let t=F(this);return P(t,`has`,e),t.hasOwnProperty(e)}var dt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?kt:Ot:i?Dt:Et).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=tt[t]))return e;if(t===`hasOwnProperty`)return ut}let o=Reflect.get(e,t,I(e)?e:n);if((_(t)?lt.has(t):ct(t))||(r||P(e,`get`,t),i))return o;if(I(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Pt(e):e}return v(o)?r?Pt(o):Mt(o):o}},ft=class extends dt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Lt(i);if(!Rt(n)&&!Lt(n)&&(i=F(i),n=F(n)),!a&&I(i)&&!I(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,I(e)?e:r);return e===F(r)&&(o?O(n,i)&&Ze(e,`set`,t,n,i):Ze(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Ze(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!lt.has(t))&&P(e,`has`,t),n}ownKeys(e){return P(e,`iterate`,d(e)?`length`:Je),Reflect.ownKeys(e)}},pt=class extends dt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},mt=new ft,ht=new pt,gt=new ft(!0),_t=e=>e,vt=e=>Reflect.getPrototypeOf(e);function yt(e,t,n){return function(...r){let i=this.__v_raw,a=F(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?_t:t?Ht:Vt;return!t&&P(a,`iterate`,l?Ye:Je),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function bt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function xt(e,t){let n={get(n){let r=this.__v_raw,i=F(r),a=F(n);e||(O(n,a)&&P(i,`get`,n),P(i,`get`,a));let{has:o}=vt(i),s=t?_t:e?Ht:Vt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&P(F(t),`iterate`,Je),t.size},has(t){let n=this.__v_raw,r=F(n),i=F(t);return e||(O(t,i)&&P(r,`has`,t),P(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=F(a),s=t?_t:e?Ht:Vt;return!e&&P(o,`iterate`,Je),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:bt(`add`),set:bt(`set`),delete:bt(`delete`),clear:bt(`clear`)}:{add(e){let n=F(this),r=vt(n),i=F(e),a=!t&&!Rt(e)&&!Lt(e)?i:e;return r.has.call(n,a)||O(e,a)&&r.has.call(n,e)||O(i,a)&&r.has.call(n,i)||(n.add(a),Ze(n,`add`,a,a)),this},set(e,n){!t&&!Rt(n)&&!Lt(n)&&(n=F(n));let r=F(this),{has:i,get:a}=vt(r),o=i.call(r,e);o||=(e=F(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?O(n,s)&&Ze(r,`set`,e,n,s):Ze(r,`add`,e,n),this},delete(e){let t=F(this),{has:n,get:r}=vt(t),i=n.call(t,e);i||=(e=F(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Ze(t,`delete`,e,void 0,a),o},clear(){let e=F(this),t=e.size!==0,n=e.clear();return t&&Ze(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=yt(r,e,t)}),n}function St(e,t){let n=xt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Ct={get:St(!1,!1)},wt={get:St(!1,!0)},Tt={get:St(!0,!1)},Et=new WeakMap,Dt=new WeakMap,Ot=new WeakMap,kt=new WeakMap;function At(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function jt(e){return e.__v_skip||!Object.isExtensible(e)?0:At(S(e))}function Mt(e){return Lt(e)?e:Ft(e,!1,mt,Ct,Et)}function Nt(e){return Ft(e,!1,gt,wt,Dt)}function Pt(e){return Ft(e,!0,ht,Tt,Ot)}function Ft(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=jt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function It(e){return Lt(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function Rt(e){return!!(e&&e.__v_isShallow)}function zt(e){return e?!!e.__v_raw:!1}function F(e){let t=e&&e.__v_raw;return t?F(t):e}function Bt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&k(e,`__v_skip`,!0),e}var Vt=e=>v(e)?Mt(e):e,Ht=e=>v(e)?Pt(e):e;function I(e){return e?e.__v_isRef===!0:!1}function L(e){return Wt(e,!1)}function Ut(e){return Wt(e,!0)}function Wt(e,t){return I(e)?e:new Gt(e,t)}var Gt=class{constructor(e,t){this.dep=new Ge,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:F(e),this._value=t?e:Vt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Rt(e)||Lt(e);e=n?e:F(e),O(e,t)&&(this._rawValue=e,this._value=n?e:Vt(e),this.dep.trigger())}};function R(e){return I(e)?e.value:e}var Kt={get:(e,t,n)=>t===`__v_raw`?e:R(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return I(i)&&!I(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qt(e){return It(e)?e:new Proxy(e,Kt)}var Jt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ge(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ue-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&N!==this)return ke(this,!0),!0}get value(){let e=this.dep.track();return Fe(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Yt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Jt(r,i,n)}var Xt={},Zt=new WeakMap,Qt=void 0;function $t(e,t=!1,n=Qt){if(n){let t=Zt.get(n);t||Zt.set(n,t=[]),t.push(e)}}function en(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Rt(e)||o===!1||o===0?tn(e,1):tn(e),m,g,_,v,y=!1,b=!1;if(I(e)?(g=()=>e.value,y=Rt(e)):It(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>It(e)||Rt(e)),g=()=>e.map(e=>{if(I(e))return e.value;if(It(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Be();try{_()}finally{Ve()}}let t=Qt;Qt=m;try{return f?f(e,3,[v]):e(v)}finally{Qt=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>tn(e(),t)}let x=Ce(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(Xt):Xt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>O(e,C[t])):O(e,C))){_&&_();let t=Qt;Qt=m;try{let t=[e,C===Xt?void 0:b&&C[0]===Xt?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{Qt=t}}}else m.run()};return u&&u(w),m=new Te(g),m.scheduler=l?()=>l(w,!1):w,v=e=>$t(e,!1,m),_=m.onStop=()=>{let e=Zt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Zt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function tn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,I(e))tn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)tn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{tn(e,t,n)});else if(C(e)){for(let r in e)tn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&tn(e[r],t,n)}return e}function nn(e,t,n,r){try{return r?e(...r):e()}catch(e){an(e,t,n)}}function rn(e,t,n,r){if(h(e)){let i=nn(e,t,n,r);return i&&y(i)&&i.catch(e=>{an(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(rn(e[a],t,n,r));return i}}function an(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Be(),nn(o,null,10,[e,i,a]),Ve();return}}on(e,r,a,i,s)}function on(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var sn=[],cn=-1,ln=[],un=null,dn=0,fn=Promise.resolve(),pn=null;function mn(e){let t=pn||fn;return e?t.then(this?e.bind(this):e):t}function hn(e){let t=cn+1,n=sn.length;for(;t<n;){let r=t+n>>>1,i=sn[r],a=xn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function gn(e){if(!(e.flags&1)){let t=xn(e),n=sn[sn.length-1];!n||!(e.flags&2)&&t>=xn(n)?sn.push(e):sn.splice(hn(t),0,e),e.flags|=1,_n()}}function _n(){pn||=fn.then(Sn)}function vn(e){d(e)?ln.push(...e):un&&e.id===-1?un.splice(dn+1,0,e):e.flags&1||(ln.push(e),e.flags|=1),_n()}function yn(e,t,n=cn+1){for(;n<sn.length;n++){let t=sn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;sn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function bn(e){if(ln.length){let e=[...new Set(ln)].sort((e,t)=>xn(e)-xn(t));if(ln.length=0,un){un.push(...e);return}for(un=e,dn=0;dn<un.length;dn++){let e=un[dn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}un=null,dn=0}}var xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Sn(e){try{for(cn=0;cn<sn.length;cn++){let e=sn[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),nn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<sn.length;cn++){let e=sn[cn];e&&(e.flags&=-2)}cn=-1,sn.length=0,bn(e),pn=null,(sn.length||ln.length)&&Sn(e)}}var Cn=null,wn=null;function Tn(e){let t=Cn;return Cn=e,wn=e&&e.type.__scopeId||null,t}function z(e,t=Cn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ji(-1);let i=Tn(t),a;try{a=e(...n)}finally{Tn(i),r._d&&ji(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function En(e,n){if(Cn===null)return e;let r=ma(Cn),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&tn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Dn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Be(),rn(c,n,8,[e.el,s,e,t]),Ve())}}function On(e,t){if(Qi){let n=Qi.provides,r=Qi.parent&&Qi.parent.provides;r===n&&(n=Qi.provides=Object.create(r)),n[e]=t}}function kn(e,t,n=!1){let r=$i();if(r||Pr){let i=Pr?Pr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var An=Symbol.for(`v-scx`),jn=()=>kn(An);function Mn(e,t,n){return Nn(e,t,n)}function Nn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(aa){if(c===`sync`){let e=jn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=Qi;u.call=(e,t,n)=>rn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{di(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():gn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=en(e,n,u);return aa&&(f?f.push(h):d&&h()),h}function Pn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Fn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=na(this),s=Nn(i,a.bind(r),n);return o(),s}function Fn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var In=Symbol(`_vte`),Ln=e=>e.__isTeleport,Rn=Symbol(`_leaveCb`);function zn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,zn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Bn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Vn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Hn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Un=new WeakMap;function Wn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Wn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Kn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Wn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?ma(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=F(v),b=v===t?i:e=>Hn(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Hn(_,t));if(m!=null&&m!==p){if(Gn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(I(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))nn(p,f,12,[l,_]);else{let t=g(p),n=I(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Un.delete(e)};t.id=-1,Un.set(e,t),di(t,r)}else Gn(e),i()}}}function Gn(e){let t=Un.get(e);t&&(t.flags|=8,Un.delete(e))}ce().requestIdleCallback,ce().cancelIdleCallback;var Kn=e=>!!e.type.__asyncLoader,qn=e=>e.type.__isKeepAlive;function Jn(e,t){Xn(e,`a`,t)}function Yn(e,t){Xn(e,`da`,t)}function Xn(e,t,n=Qi){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Qn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)qn(e.parent.vnode)&&Zn(r,t,n,e),e=e.parent}}function Zn(e,t,n,r){let i=Qn(t,e,r,!0);ar(()=>{c(r[t],i)},n)}function Qn(e,t,n=Qi,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Be();let i=na(n),a=rn(t,n,e,r);return i(),Ve(),a};return r?i.unshift(a):i.push(a),a}}var $n=e=>(t,n=Qi)=>{(!aa||e===`sp`)&&Qn(e,(...e)=>t(...e),n)},er=$n(`bm`),tr=$n(`m`),nr=$n(`bu`),rr=$n(`u`),ir=$n(`bum`),ar=$n(`um`),or=$n(`sp`),sr=$n(`rtg`),cr=$n(`rtc`);function lr(e,t=Qi){Qn(`ec`,e,t)}var ur=Symbol.for(`v-ndc`);function B(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&It(e),r=!1,s=!1;n&&(r=!Rt(e),s=Lt(e),e=$e(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Ht(Vt(e[n])):Vt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var dr=e=>e?ia(e)?ma(e):dr(e.parent):null,fr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>dr(e.parent),$root:e=>dr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>xr(e),$forceUpdate:e=>e.f||=()=>{gn(e.update)},$nextTick:e=>e.n||=mn.bind(e.proxy),$watch:e=>Pn.bind(e)}),pr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),mr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(pr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else gr&&(s[n]=0)}let d=fr[n],f,p;if(d)return n===`$attrs`&&P(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return pr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||pr(n,c)||u(o,c)||u(i,c)||u(fr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function hr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var gr=!0;function _r(e){let t=xr(e),n=e.proxy,i=e.ctx;gr=!1,t.beforeCreate&&yr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:ee,renderTriggered:te,errorCaptured:E,serverPrefetch:ne,expose:D,inheritAttrs:re,components:ie,directives:O,filters:ae}=t;if(u&&vr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Mt(t))}if(gr=!0,o)for(let e in o){let t=o[e],a=K({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)br(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{On(t,e[t])})}f&&yr(f,e,`c`);function k(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(k(er,p),k(tr,m),k(nr,g),k(rr,_),k(Jn,y),k(Yn,b),k(lr,E),k(cr,ee),k(sr,te),k(ir,S),k(ar,w),k(or,ne),d(D))if(D.length){let t=e.exposed||={};D.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};T&&e.render===r&&(e.render=T),re!=null&&(e.inheritAttrs=re),ie&&(e.components=ie),O&&(e.directives=O),ne&&Vn(e)}function vr(e,t,n=r){d(e)&&(e=Er(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?kn(r.from||n,r.default,!0):kn(r.from||n):kn(r),I(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function yr(e,t,n){rn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function br(e,t,n,r){let i=r.includes(`.`)?Fn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Mn(i,n)}else if(h(e))Mn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>br(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Mn(i,r,e)}}function xr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Sr(c,e,o,!0)),Sr(c,t,o)),v(t)&&a.set(t,c),c}function Sr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Sr(e,a,n,!0),i&&i.forEach(t=>Sr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Cr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Cr={data:wr,props:kr,emits:kr,methods:Or,computed:Or,beforeCreate:Dr,created:Dr,beforeMount:Dr,mounted:Dr,beforeUpdate:Dr,updated:Dr,beforeDestroy:Dr,beforeUnmount:Dr,destroyed:Dr,unmounted:Dr,activated:Dr,deactivated:Dr,errorCaptured:Dr,serverPrefetch:Dr,components:Or,directives:Or,watch:Ar,provide:wr,inject:Tr};function wr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Tr(e,t){return Or(Er(e),Er(t))}function Er(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Dr(e,t){return e?[...new Set([].concat(e,t))]:t}function Or(e,t){return e?s(Object.create(null),e,t):t}function kr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),hr(e),hr(t??{})):t}function Ar(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Dr(e[r],t[r]);return n}function jr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Mr=0;function Nr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=jr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Mr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:_a,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||G(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,ma(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(rn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Pr;Pr=l;try{return e()}finally{Pr=t}}};return l}}var Pr=null,Fr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${E(t)}Modifiers`]||e[`${D(t)}Modifiers`];function Ir(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Fr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(oe)));let c,l=i[c=ie(n)]||i[c=ie(E(n))];!l&&o&&(l=i[c=ie(D(n))]),l&&rn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,rn(u,e,6,a)}}var Lr=new WeakMap;function Rr(e,t,n=!1){let r=n?Lr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Rr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function zr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,D(t))||u(e,t))}function Br(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Tn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Wi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Wi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Vr(c)}}catch(t){Di.length=0,an(t,e,1),v=G(Ti)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Hr(y,a)),b=Bi(b,y,!1,!0))}return n.dirs&&(b=Bi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&zn(b,n.transition),v=b,Tn(_),v}var Vr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Hr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ur(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Wr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Gr(o,r,n)&&!zr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Wr(r,o,l):!0:!!o;return!1}function Wr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Gr(t,e,a)&&!zr(n,a))return!0}return!1}function Gr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!ve(r,i):r!==i}function Kr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var qr={},Jr=()=>Object.create(qr),Yr=e=>Object.getPrototypeOf(e)===qr;function Xr(e,t,n,r=!1){let i={},a=Jr();e.propsDefaults=Object.create(null),Qr(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Nt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Zr(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=F(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(zr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=E(o);i[t]=$r(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{Qr(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=D(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=$r(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&Ze(e.attrs,`set`,``)}function Qr(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=E(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:zr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=F(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=$r(a,n,s,i[s],e,!u(i,s))}}return s}function $r(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=na(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===D(n))&&(r=!0))}return r}var ei=new WeakMap;function ti(e,r,i=!1){let a=i?ei:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=ti(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=E(c[e]);ni(n)&&(l[n]=t)}else if(c)for(let e in c){let t=E(e);if(ni(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function ni(e){return e[0]!==`$`&&!T(e)}var ri=e=>e===`_`||e===`_ctx`||e===`$stable`,ii=e=>d(e)?e.map(Wi):[Wi(e)],ai=(e,t,n)=>{if(t._n)return t;let r=z((...e)=>ii(t(...e)),n);return r._c=!1,r},oi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ri(n))continue;let i=e[n];if(h(i))t[n]=ai(n,i,r);else if(i!=null){let e=ii(i);t[n]=()=>e}}},si=(e,t)=>{let n=ii(t);e.slots.default=()=>n},ci=(e,t,n)=>{for(let r in t)(n||!ri(r))&&(e[r]=t[r])},li=(e,t,n)=>{let r=e.slots=Jr();if(e.vnode.shapeFlag&32){let e=t._;e?(ci(r,t,n),n&&k(r,`_`,e,!0)):oi(t,r)}else t&&si(e,t)},ui=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:ci(a,n,r):(o=!n.$stable,oi(n,a)),s=n}else n&&(si(e,n),s={default:1});if(o)for(let e in a)!ri(e)&&s[e]==null&&delete a[e]},di=Ci;function fi(e){return pi(e)}function pi(e,i){let a=ce();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Fi(e,t)&&(r=ve(e),A(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case wi:y(e,t,n,r);break;case Ti:b(e,t,n,r);break;case Ei:e??x(t,n,r,o);break;case V:ie(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?O(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,be)}u!=null&&i?Wn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Wn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ne(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&E(e.children,d,null,r,i,mi(e,a),s,u),_&&Dn(e,null,r,`created`),te(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Ji(f,r,e)}_&&Dn(e,null,r,`beforeMount`);let v=gi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&di(()=>{try{f&&Ji(f,r,e),v&&g.enter(d),_&&Dn(e,null,r,`mounted`)}finally{}},i)},te=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Si(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;te(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},E=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?Gi(e[l]):Wi(e[l]),t,n,r,i,a,o,s)},ne=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&hi(r,!1),(g=h.onVnodeBeforeUpdate)&&Ji(g,r,n,e),f&&Dn(n,e,r,`beforeUpdate`),r&&hi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?D(e.dynamicChildren,d,l,r,i,mi(n,a),o):s||ue(e,n,l,null,r,i,mi(n,a),o,!1),u>0){if(u&16)re(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&re(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&di(()=>{g&&Ji(g,r,n,e),f&&Dn(n,e,r,`updated`)},i)},D=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===V||!Fi(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},re=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ie=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),E(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(D(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&_i(e,t,!0)):ue(e,t,n,f,i,a,s,c,l)},O=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):k(t,n,r,i,a,o,c):oe(e,t,c)},k=(e,t,n,r,i,a,o)=>{let s=e.component=Zi(e,r,i);if(qn(e)&&(s.ctx.renderer=be),oa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,se,o),!e.el){let r=s.subTree=G(Ti);b(null,r,t,n),e.placeholder=r.el}}else se(s,e,t,n,i,a,o)},oe=(e,t,n)=>{let r=t.component=e.component;if(Ur(e,t,n))if(r.asyncDep&&!r.asyncResolved){le(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},se=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=yi(e);if(n){t&&(t.el=c.el,le(e,t,o)),n.asyncDep.then(()=>{di(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;hi(e,!1),t?(t.el=c.el,le(e,t,o)):t=c,n&&ae(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Ji(d,s,t,c),hi(e,!0);let f=Br(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ve(p),e,i,a),t.el=f.el,u===null&&Kr(e,f.el),r&&di(r,i),(d=t.props&&t.props.onVnodeUpdated)&&di(()=>Ji(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Kn(t);if(hi(e,!1),l&&ae(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Ji(o,d,t),hi(e,!0),s&&M){let t=()=>{e.subTree=Br(e),M(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Br(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&di(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;di(()=>Ji(o,d,e),i)}(t.shapeFlag&256||d&&Kn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&di(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Te(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>gn(u),hi(e,!0),l()},le=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Zr(e,t.props,r,n),ui(e,t.children,n),Be(),yn(e),Ve()},ue=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){fe(l,d,n,r,i,a,o,s,c);return}else if(f&256){de(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&_e(l,i,a),d!==l&&p(n,d)):u&16?m&16?fe(l,d,n,r,i,a,o,s,c):_e(l,i,a,!0):(u&8&&p(n,``),m&16&&E(d,n,r,i,a,o,s,c))},de=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?Gi(t[p]):Wi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?_e(e,a,o,!0,!1,f):E(t,r,i,a,o,s,c,l,f)},fe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Gi(t[u]):Wi(t[u]);if(Fi(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Gi(t[p]):Wi(t[p]);if(Fi(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Gi(t[u]):Wi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)A(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Gi(t[u]):Wi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){A(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Fi(n,t[_])){i=_;break}i===void 0?A(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?vi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||xi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?pe(n,r,p,2):_--)}}},pe=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){pe(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,be);return}if(c===V){o(a,t,n);for(let e=0;e<u.length;e++)pe(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Ei){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),di(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Rn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},A=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Be(),Wn(s,null,n,e,!0),Ve()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Kn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Ji(_,t,e),u&6)ge(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Dn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,be,r):l&&!l.hasOnce&&(a!==V||d>0&&d&64)?_e(l,t,n,!1,!0):(a===V&&d&384||!i&&u&16)&&_e(c,t,n),r&&me(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&di(()=>{_&&Ji(_,t,e),h&&Dn(e,null,t,`unmounted`),v&&(e.el=null)},n)},me=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===V){he(n,r);return}if(t===Ei){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},he=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ge=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;bi(c),bi(l),r&&ae(r),i.stop(),a&&(a.flags|=8,A(o,e,t,n)),s&&di(s,t),di(()=>{e.isUnmounted=!0},t)},_e=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)A(e[o],t,n,r,i)},ve=e=>{if(e.shapeFlag&6)return ve(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[In];return n?h(n):t},ye=!1,j=(e,t,n)=>{let r;e==null?t._vnode&&(A(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ye||=(ye=!0,yn(r),bn(),!1)},be={p:v,um:A,m:pe,r:me,mt:k,mc:E,pc:ue,pbc:D,n:ve,o:e},xe,M;return i&&([xe,M]=i(be)),{render:j,hydrate:xe,createApp:Nr(j,xe)}}function mi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function hi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function gi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _i(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Gi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&_i(t,a)),a.type===wi&&(a.patchFlag===-1&&(a=i[e]=Gi(a)),a.el=t.el),a.type===Ti&&!a.el&&(a.el=t.el)}}function vi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function yi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:yi(t)}function bi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function xi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?xi(t.subTree):null}var Si=e=>e.__isSuspense;function Ci(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):vn(e)}var V=Symbol.for(`v-fgt`),wi=Symbol.for(`v-txt`),Ti=Symbol.for(`v-cmt`),Ei=Symbol.for(`v-stc`),Di=[],Oi=null;function H(e=!1){Di.push(Oi=e?null:[])}function ki(){Di.pop(),Oi=Di[Di.length-1]||null}var Ai=1;function ji(e,t=!1){Ai+=e,e<0&&Oi&&t&&(Oi.hasOnce=!0)}function Mi(e){return e.dynamicChildren=Ai>0?Oi||n:null,ki(),Ai>0&&Oi&&Oi.push(e),e}function U(e,t,n,r,i,a){return Mi(W(e,t,n,r,i,a,!0))}function Ni(e,t,n,r,i){return Mi(G(e,t,n,r,i,!0))}function Pi(e){return e?e.__v_isVNode===!0:!1}function Fi(e,t){return e.type===t.type&&e.key===t.key}var Ii=({key:e})=>e??null,Li=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||I(e)||h(e)?{i:Cn,r:e,k:t,f:!!n}:e);function W(e,t=null,n=null,r=0,i=null,a=e===V?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ii(t),ref:t&&Li(t),scopeId:wn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Cn};return s?(Ki(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Ai>0&&!o&&Oi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Oi.push(c),c}var G=Ri;function Ri(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===ur)&&(e=Ti),Pi(e)){let r=Bi(e,t,!0);return n&&Ki(r,n),Ai>0&&!a&&Oi&&(r.shapeFlag&6?Oi[Oi.indexOf(e)]=r:Oi.push(r)),r.patchFlag=-2,r}if(ha(e)&&(e=e.__vccOpts),t){t=zi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=A(e)),v(n)&&(zt(n)&&!d(n)&&(n=s({},n)),t.style=le(n))}let o=g(e)?1:Si(e)?128:Ln(e)?64:v(e)?4:h(e)?2:0;return W(e,t,n,r,i,o,a,!0)}function zi(e){return e?zt(e)||Yr(e)?s({},e):e:null}function Bi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?qi(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ii(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Li(t)):[a,Li(t)]:Li(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==V?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bi(e.ssContent),ssFallback:e.ssFallback&&Bi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&zn(u,c.clone(u)),u}function Vi(e=` `,t=0){return G(wi,null,e,t)}function Hi(e,t){let n=G(Ei,null,e);return n.staticCount=t,n}function Ui(e=``,t=!1){return t?(H(),Ni(Ti,null,e)):G(Ti,null,e)}function Wi(e){return e==null||typeof e==`boolean`?G(Ti):d(e)?G(V,null,e.slice()):Pi(e)?Gi(e):G(wi,null,String(e))}function Gi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bi(e)}function Ki(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Ki(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!Yr(t)?t._ctx=Cn:r===3&&Cn&&(Cn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:Cn},n=32):(t=String(t),r&64?(n=16,t=[Vi(t)]):n=8);e.children=t,e.shapeFlag|=n}function qi(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=A([t.class,r.class]));else if(e===`style`)t.style=le([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Ji(e,t,n,r=null){rn(e,t,7,[n,r])}var Yi=jr(),Xi=0;function Zi(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Yi,o={uid:Xi++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Se(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ti(i,a),emitsOptions:Rr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Ir.bind(null,o),e.ce&&e.ce(o),o}var Qi=null,$i=()=>Qi||Cn,ea,ta;{let e=ce(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ea=t(`__VUE_INSTANCE_SETTERS__`,e=>Qi=e),ta=t(`__VUE_SSR_SETTERS__`,e=>aa=e)}var na=e=>{let t=Qi;return ea(e),e.scope.on(),()=>{e.scope.off(),ea(t)}},ra=()=>{Qi&&Qi.scope.off(),ea(null)};function ia(e){return e.vnode.shapeFlag&4}var aa=!1;function oa(e,t=!1,n=!1){t&&ta(t);let{props:r,children:i}=e.vnode,a=ia(e);Xr(e,r,a,t),li(e,i,n||t);let o=a?sa(e,t):void 0;return t&&ta(!1),o}function sa(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,mr);let{setup:r}=n;if(r){Be();let n=e.setupContext=r.length>1?pa(e):null,i=na(e),a=nn(r,e,0,[e.props,n]),o=y(a);if(Ve(),i(),(o||e.sp)&&!Kn(e)&&Vn(e),o){if(a.then(ra,ra),t)return a.then(n=>{ca(e,n,t)}).catch(t=>{an(t,e,0)});e.asyncDep=a}else ca(e,a,t)}else da(e,t)}function ca(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=qt(t)),da(e,n)}var la,ua;function da(e,t,n){let i=e.type;if(!e.render){if(!t&&la&&!i.render){let t=i.template||xr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=la(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,ua&&ua(e)}{let t=na(e);Be();try{_r(e)}finally{Ve(),t()}}}var fa={get(e,t){return P(e,`get`,``),e[t]}};function pa(e){return{attrs:new Proxy(e.attrs,fa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ma(e){return e.exposed?e.exposeProxy||=new Proxy(qt(Bt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fr)return fr[n](e)},has(e,t){return t in e||t in fr}}):e.proxy}function ha(e){return h(e)&&`__vccOpts`in e}var K=(e,t)=>Yt(e,t,aa);function ga(e,t,n){try{ji(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Pi(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pi(n)&&(n=[n]),G(e,t,n))}finally{ji(1)}}var _a=`3.5.32`,va=void 0,ya=typeof window<`u`&&window.trustedTypes;if(ya)try{va=ya.createPolicy(`vue`,{createHTML:e=>e})}catch{}var ba=va?e=>va.createHTML(e):e=>e,xa=`http://www.w3.org/2000/svg`,Sa=`http://www.w3.org/1998/Math/MathML`,Ca=typeof document<`u`?document:null,wa=Ca&&Ca.createElement(`template`),Ta={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ca.createElementNS(xa,e):t===`mathml`?Ca.createElementNS(Sa,e):n?Ca.createElement(e,{is:n}):Ca.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ca.createTextNode(e),createComment:e=>Ca.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ca.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{wa.innerHTML=ba(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=wa.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ea=Symbol(`_vtc`);function Da(e,t,n){let r=e[Ea];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Oa=Symbol(`_vod`),ka=Symbol(`_vsh`),Aa=Symbol(``),ja=/(?:^|;)\s*display\s*:/;function Ma(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Pa(r,t,``)}else for(let e in t)n[e]??Pa(r,e,``);for(let e in n)e===`display`&&(a=!0),Pa(r,e,n[e])}else if(i){if(t!==n){let e=r[Aa];e&&(n+=`;`+e),r.cssText=n,a=ja.test(n)}}else t&&e.removeAttribute(`style`);Oa in e&&(e[Oa]=a?r.display:``,e[ka]&&(r.display=`none`))}var Na=/\s*!important$/;function Pa(e,t,n){if(d(n))n.forEach(n=>Pa(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=La(e,t);Na.test(n)?e.setProperty(D(r),n.replace(Na,``),`important`):e[r]=n}}var Fa=[`Webkit`,`Moz`,`ms`],Ia={};function La(e,t){let n=Ia[t];if(n)return n;let r=E(t);if(r!==`filter`&&r in e)return Ia[t]=r;r=re(r);for(let n=0;n<Fa.length;n++){let i=Fa[n]+r;if(i in e)return Ia[t]=i}return t}var Ra=`http://www.w3.org/1999/xlink`;function za(e,t,n,r,i,a=he(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ra,t.slice(6,t.length)):e.setAttributeNS(Ra,t,n):n==null||a&&!ge(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ba(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?ba(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ge(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Va(e,t,n,r){e.addEventListener(t,n,r)}function Ha(e,t,n,r){e.removeEventListener(t,n,r)}var Ua=Symbol(`_vei`);function Wa(e,t,n,r,i=null){let a=e[Ua]||(e[Ua]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ka(t);r?Va(e,n,a[t]=Xa(r,i),s):o&&(Ha(e,n,o,s),a[t]=void 0)}}var Ga=/(?:Once|Passive|Capture)$/;function Ka(e){let t;if(Ga.test(e)){t={};let n;for(;n=e.match(Ga);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):D(e.slice(2)),t]}var qa=0,Ja=Promise.resolve(),Ya=()=>qa||=(Ja.then(()=>qa=0),Date.now());function Xa(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;rn(Za(e,n.value),t,5,[e])};return n.value=e,n.attached=Ya(),n}function Za(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var Qa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$a=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Da(e,r,c):t===`style`?Ma(e,n,r):a(t)?o(t)||Wa(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):eo(e,t,r,c))?(Ba(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&za(e,t,r,c,s,t!==`value`)):e._isVueCE&&(to(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ba(e,E(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),za(e,t,r,c))};function eo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Qa(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Qa(t)&&g(n)?!1:t in e}function to(e,t){let n=e._def.props;if(!n)return!1;let r=E(t);return Array.isArray(n)?n.some(e=>E(e)===r):Object.keys(n).some(e=>E(e)===r)}var no=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>ae(t,e):t};function ro(e){e.target.composing=!0}function io(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ao=Symbol(`_assign`);function oo(e,t,n){return t&&(e=e.trim()),n&&(e=oe(e)),e}var so={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ao]=no(i);let a=r||i.props&&i.props.type===`number`;Va(e,t?`change`:`input`,t=>{t.target.composing||e[ao](oo(e.value,n,a))}),(n||a)&&Va(e,`change`,()=>{e.value=oo(e.value,n,a)}),t||(Va(e,`compositionstart`,ro),Va(e,`compositionend`,io),Va(e,`change`,io))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ao]=no(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?oe(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},co={created(e,{value:t},n){e.checked=ve(t,n.props.value),e[ao]=no(n),Va(e,`change`,()=>{e[ao](lo(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[ao]=no(r),t!==n&&(e.checked=ve(t,r.props.value))}};function lo(e){return`_value`in e?e._value:e.value}var uo=s({patchProp:$a},Ta),fo;function po(){return fo||=fi(uo)}var mo=((...e)=>{let t=po().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=go(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,ho(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function ho(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function go(e){return g(e)?document.querySelector(e):e}var _o=typeof document<`u`;function vo(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function yo(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&vo(e.default)}var q=Object.assign;function bo(e,t){let n={};for(let r in t){let i=t[r];n[r]=So(i)?i.map(e):e(i)}return n}var xo=()=>{},So=Array.isArray;function Co(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var J=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),wo=Symbol(``);J.MATCHER_NOT_FOUND,J.NAVIGATION_GUARD_REDIRECT,J.NAVIGATION_ABORTED,J.NAVIGATION_CANCELLED,J.NAVIGATION_DUPLICATED;function To(e,t){return q(Error(),{type:e,[wo]:!0},t)}function Eo(e,t){return e instanceof Error&&wo in e&&(t==null||!!(e.type&t))}var Do=Symbol(``),Oo=Symbol(``),ko=Symbol(``),Ao=Symbol(``),jo=Symbol(``);function Mo(){return kn(ko)}function No(e){return kn(Ao)}var Po=/#/g,Fo=/&/g,Io=/\//g,Lo=/=/g,Ro=/\?/g,zo=/\+/g,Bo=/%5B/g,Vo=/%5D/g,Ho=/%5E/g,Uo=/%60/g,Wo=/%7B/g,Go=/%7C/g,Ko=/%7D/g,qo=/%20/g;function Jo(e){return e==null?``:encodeURI(``+e).replace(Go,`|`).replace(Bo,`[`).replace(Vo,`]`)}function Yo(e){return Jo(e).replace(Wo,`{`).replace(Ko,`}`).replace(Ho,`^`)}function Xo(e){return Jo(e).replace(zo,`%2B`).replace(qo,`+`).replace(Po,`%23`).replace(Fo,`%26`).replace(Uo,"`").replace(Wo,`{`).replace(Ko,`}`).replace(Ho,`^`)}function Zo(e){return Xo(e).replace(Lo,`%3D`)}function Qo(e){return Jo(e).replace(Po,`%23`).replace(Ro,`%3F`)}function $o(e){return Qo(e).replace(Io,`%2F`)}function es(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var ts=/\/$/,ns=e=>e.replace(ts,``);function rs(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=ds(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:es(o)}}function is(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function as(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function os(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ss(t.matched[r],n.matched[i])&&cs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ss(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function cs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!ls(e[n],t[n]))return!1;return!0}function ls(e,t){return So(e)?us(e,t):So(t)?us(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function us(e,t){return So(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function ds(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var fs={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},ps=function(e){return e.pop=`pop`,e.push=`push`,e}({}),ms=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function hs(e){if(!e)if(_o){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),ns(e)}var gs=/^[^#]+#/;function _s(e,t){return e.replace(gs,`#`)+t}function vs(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var ys=()=>({left:window.scrollX,top:window.scrollY});function bs(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=vs(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function xs(e,t){return(history.state?history.state.position-t:-1)+e}var Ss=new Map;function Cs(e,t){Ss.set(e,t)}function ws(e){let t=Ss.get(e);return Ss.delete(e),t}function Ts(e){return typeof e==`string`||e&&typeof e==`object`}function Es(e){return typeof e==`string`||typeof e==`symbol`}function Ds(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(zo,` `),i=r.indexOf(`=`),a=es(i<0?r:r.slice(0,i)),o=i<0?null:es(r.slice(i+1));if(a in t){let e=t[a];So(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Os(e){let t=``;for(let n in e){let r=e[n];if(n=Zo(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(So(r)?r.map(e=>e&&Xo(e)):[r&&Xo(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function ks(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=So(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function As(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function js(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(To(J.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Ts(e)?c(To(J.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Ms(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(vo(s)){let c=(s.__vccOpts||s)[t];c&&a.push(js(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=yo(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&js(c,n,r,o,e,i)()}))}}return a}function Ns(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>ss(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>ss(e,s))||i.push(s))}return[n,r,i]}var Ps=()=>location.protocol+`//`+location.host;function Fs(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),as(n,``)}return as(n,e)+r+i}function Is(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Fs(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:ps.pop,direction:u?u>0?ms.forward:ms.back:ms.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(q({},e.state,{scroll:ys()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Ls(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?ys():null}}function Rs(e){let{history:t,location:n}=window,r={value:Fs(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Ps()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,q({},t.state,Ls(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=q({},i.value,t.state,{forward:e,scroll:ys()});a(o.current,o,!0),a(e,q({},Ls(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function zs(e){e=hs(e);let t=Rs(e),n=Is(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=q({location:``,base:e,go:r,createHref:_s.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}function Bs(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),zs(e)}var Vs=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Y=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Y||{}),Hs={type:Vs.Static,value:``},Us=/[a-zA-Z0-9_]/;function Ws(e){if(!e)return[[]];if(e===`/`)return[[Hs]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Y.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Y.Static?a.push({type:Vs.Static,value:l}):n===Y.Param||n===Y.ParamRegExp||n===Y.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:Vs.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==Y.ParamRegExp){r=n,n=Y.EscapeNext;continue}switch(n){case Y.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Y.Param):f();break;case Y.EscapeNext:f(),n=r;break;case Y.Param:c===`(`?n=Y.ParamRegExp:Us.test(c)?f():(d(),n=Y.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Y.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Y.ParamRegExpEnd:u+=c;break;case Y.ParamRegExpEnd:d(),n=Y.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===Y.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Gs=`[^/]+?`,Ks={sensitive:!1,strict:!1,start:!0,end:!0},qs=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(qs||{}),Js=/[.+*?^${}()[\]/\\]/g;function Ys(e,t){let n=q({},Ks,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[qs.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=qs.Segment+(n.sensitive?qs.BonusCaseSensitive:0);if(o.type===Vs.Static)r||(i+=`/`),i+=o.value.replace(Js,`\\$&`),s+=qs.Static;else if(o.type===Vs.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Gs;if(u!==Gs){s+=qs.BonusCustomRegExp;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=qs.Dynamic,c&&(s+=qs.BonusOptional),n&&(s+=qs.BonusRepeatable),u===`.*`&&(s+=qs.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=qs.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===Vs.Static)n+=e.value;else if(e.type===Vs.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(So(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=So(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Xs(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===qs.Static+qs.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===qs.Static+qs.Segment?1:-1:0}function Zs(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Xs(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Qs(r))return 1;if(Qs(i))return-1}return i.length-r.length}function Qs(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var $s={strict:!1,end:!0,sensitive:!1};function ec(e,t,n){let r=q(Ys(Ws(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function tc(e,t){let n=[],r=new Map;t=Co($s,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=rc(e);s.aliasOf=r&&r.record;let l=Co(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(rc(q({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=ec(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!ac(d)&&o(e.name)),lc(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:xo}function o(e){if(Es(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=sc(e,n);n.splice(t,0,e),e.record.name&&!ac(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw To(J.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=q(nc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&nc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw To(J.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=q({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:oc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function nc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function rc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ic(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function ic(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function ac(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function oc(e){return e.reduce((e,t)=>q(e,t.meta),{})}function sc(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Zs(e,t[i])<0?r=i:n=i+1}let i=cc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function cc(e){let t=e;for(;t=t.parent;)if(lc(t)&&Zs(e,t)===0)return t}function lc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function uc(e){let t=kn(ko),n=kn(Ao),r=K(()=>{let n=R(e.to);return t.resolve(n)}),i=K(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(ss.bind(null,i));if(o>-1)return o;let s=mc(e[t-2]);return t>1&&mc(i)===s&&a[a.length-1].path!==s?a.findIndex(ss.bind(null,e[t-2])):o}),a=K(()=>i.value>-1&&pc(n.params,r.value.params)),o=K(()=>i.value>-1&&i.value===n.matched.length-1&&cs(n.params,r.value.params));function s(n={}){if(fc(n)){let n=t[R(e.replace)?`replace`:`push`](R(e.to)).catch(xo);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:K(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function dc(e){return e.length===1?e[0]:e}var X=Bn({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:uc,setup(e,{slots:t}){let n=Mt(uc(e)),{options:r}=kn(ko),i=K(()=>({[hc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[hc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&dc(t.default(n));return e.custom?r:ga(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function fc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function pc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!So(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function mc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var hc=(e,t,n)=>e??t??n,gc=Bn({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=kn(jo),i=K(()=>e.route||r.value),a=kn(Oo,0),o=K(()=>{let e=R(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=K(()=>i.value.matched[o.value]);On(Oo,K(()=>o.value+1)),On(Do,s),On(jo,i);let c=L();return Mn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!ss(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return _c(n.default,{Component:l,route:r});let u=o.props[a],d=ga(l,q({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return _c(n.default,{Component:d,route:r})||d}}});function _c(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var vc=gc;function yc(e){let t=tc(e.routes,e),n=e.parseQuery||Ds,r=e.stringifyQuery||Os,i=e.history,a=As(),o=As(),s=As(),c=Ut(fs),l=fs;_o&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=bo.bind(null,e=>``+e),d=bo.bind(null,$o),f=bo.bind(null,es);function p(e,n){let r,i;return Es(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=q({},a||c.value),typeof e==`string`){let r=rs(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return q(r,o,{params:f(o.params),hash:es(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=q({},e,{path:rs(n,e.path,a.path).path});else{let t=q({},e.params);for(let e in t)t[e]??delete t[e];o=q({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=is(r,q({},e,{hash:Yo(l),path:s.path})),m=i.createHref(p);return q({fullPath:p,hash:l,query:r===Os?ks(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?rs(n,e,c.value.path):q({},e)}function y(e,t){if(l!==e)return To(J.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(q(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),q({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(q(v(u),{state:typeof u==`object`?q({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&os(r,i,n)&&(f=To(J.NAVIGATION_DUPLICATED,{to:d,from:i}),se(i,i,!0,!1)),(f?Promise.resolve(f):ee(d,i)).catch(e=>Eo(e)?Eo(e,J.NAVIGATION_GUARD_REDIRECT)?e:oe(e):ae(e,d,i)).then(e=>{if(e){if(Eo(e,J.NAVIGATION_GUARD_REDIRECT))return C(q({replace:s},v(e.to),{state:typeof e.to==`object`?q({},a,e.to.state):a,force:o}),t||d)}else e=E(d,i,!0,s,a);return te(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=ue.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ee(e,t){let n,[r,i,s]=Ns(e,t);n=Ms(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(js(r,e,t))});let c=w.bind(null,e,t);return n.push(c),fe(n).then(()=>{n=[];for(let r of a.list())n.push(js(r,e,t));return n.push(c),fe(n)}).then(()=>{n=Ms(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(js(r,e,t))});return n.push(c),fe(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(So(r.beforeEnter))for(let i of r.beforeEnter)n.push(js(i,e,t));else n.push(js(r.beforeEnter,e,t));return n.push(c),fe(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Ms(s,`beforeRouteEnter`,e,t,T),n.push(c),fe(n))).then(()=>{n=[];for(let r of o.list())n.push(js(r,e,t));return n.push(c),fe(n)}).catch(e=>Eo(e,J.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function te(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function E(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===fs,l=_o?history.state:{};n&&(r||s?i.replace(e.fullPath,q({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,se(e,t,n,s),oe()}let ne;function D(){ne||=i.listen((e,t,n)=>{if(!de.listening)return;let r=_(e),a=S(r,de.currentRoute.value);if(a){C(q(a,{replace:!0,force:!0}),r).catch(xo);return}l=r;let o=c.value;_o&&Cs(xs(o.fullPath,n.delta),ys()),ee(r,o).catch(e=>Eo(e,J.NAVIGATION_ABORTED|J.NAVIGATION_CANCELLED)?e:Eo(e,J.NAVIGATION_GUARD_REDIRECT)?(C(q(v(e.to),{force:!0}),r).then(e=>{Eo(e,J.NAVIGATION_ABORTED|J.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===ps.pop&&i.go(-1,!1)}).catch(xo),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ae(e,r,o))).then(e=>{e||=E(r,o,!1),e&&(n.delta&&!Eo(e,J.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===ps.pop&&Eo(e,J.NAVIGATION_ABORTED|J.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),te(r,o,e)}).catch(xo)})}let re=As(),ie=As(),O;function ae(e,t,n){oe(e);let r=ie.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function k(){return O&&c.value!==fs?Promise.resolve():new Promise((e,t)=>{re.add([e,t])})}function oe(e){return O||(O=!e,D(),re.list().forEach(([t,n])=>e?n(e):t()),re.reset()),e}function se(t,n,r,i){let{scrollBehavior:a}=e;if(!_o||!a)return Promise.resolve();let o=!r&&ws(xs(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return mn().then(()=>a(t,n,o)).then(e=>e&&bs(e)).catch(e=>ae(e,t,n))}let ce=e=>i.go(e),le,ue=new Set,de={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ie.add,isReady:k,install(e){e.component(`RouterLink`,X),e.component(`RouterView`,vc),e.config.globalProperties.$router=de,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>R(c)}),_o&&!le&&c.value===fs&&(le=!0,b(i.location).catch(e=>{}));let t={};for(let e in fs)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(ko,de),e.provide(Ao,Nt(t)),e.provide(jo,c);let n=e.unmount;ue.add(e),e.unmount=function(){ue.delete(e),ue.size<1&&(l=fs,ne&&ne(),ne=null,c.value=fs,le=!1,O=!1),n()}}};function fe(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return de}var bc={class:`app-shell`},xc={class:`sidebar`},Sc={class:`nav`},Cc={class:`main-shell`},wc={class:`content`},Tc={__name:`App`,setup(e){return(e,t)=>(H(),U(`div`,bc,[W(`aside`,xc,[t[6]||=Hi(`<div class="sidebar__brand"><p class="sidebar__eyebrow">Presentation Workspace</p><h1>古典密码分析课程演示平台</h1><p class="sidebar__lead"> 这是一个面向课程展示的交互平台，整合了算法演示、图表分析和静态 Markdown 教材浏览。 </p></div><div class="sidebar__cue"><span class="sidebar__cue-tag">建议浏览顺序</span><ol><li>先讲项目目标与整体结构</li><li>再讲凯撒密码如何被频率分析破解</li><li>再讲维吉尼亚密码如何暴露周期</li><li>最后展示静态教材页面</li></ol></div>`,2),W(`nav`,Sc,[G(R(X),{class:`nav__link`,to:`/`},{default:z(()=>[...t[0]||=[W(`strong`,null,`项目主页`,-1),W(`span`,null,`先讲项目定位、结构和答辩路线`,-1)]]),_:1}),G(R(X),{class:`nav__link`,to:`/auto-demo`},{default:z(()=>[...t[1]||=[W(`strong`,null,`自动演示板块`,-1),W(`span`,null,`自动分步骤讲清频率分析与 Kasiski`,-1)]]),_:1}),G(R(X),{class:`nav__link`,to:`/caesar`},{default:z(()=>[...t[2]||=[W(`strong`,null,`凯撒频率分析`,-1),W(`span`,null,`讲单表代换为什么泄露统计特征`,-1)]]),_:1}),G(R(X),{class:`nav__link`,to:`/vigenere`},{default:z(()=>[...t[3]||=[W(`strong`,null,`维吉尼亚 Kasiski`,-1),W(`span`,null,`讲多表代换为什么仍会泄露周期`,-1)]]),_:1}),G(R(X),{class:`nav__link`,to:`/docs`},{default:z(()=>[...t[4]||=[W(`strong`,null,`Markdown 教材页`,-1),W(`span`,null,`讲课程文档如何被静态打包并直接展示`,-1)]]),_:1}),G(R(X),{class:`nav__link`,to:`/cross-learning`},{default:z(()=>[...t[5]||=[W(`strong`,null,`交叉专题新站入口`,-1),W(`span`,null,`进入密码学与信息论交叉学习网站`,-1)]]),_:1})]),t[7]||=W(`div`,{class:`sidebar__footer`},[W(`p`,{class:`sidebar__footer-title`},`项目定位`),W(`p`,null,`本项目把密码分析过程和课程教材内容放进了同一套可交互展示系统里，并支持纯静态托管。`)],-1)]),W(`div`,Cc,[t[8]||=Hi(`<header class="topbar"><div class="topbar__content"><div><p class="topbar__tag">Classical Cryptanalysis Teaching Platform</p><strong>交互演示 + 结构化讲解 + Markdown 教材浏览</strong></div><div class="topbar__pill-group"><span class="topbar__pill">课堂答辩友好</span><span class="topbar__pill">离线可运行</span><span class="topbar__pill">静态站点可部署</span></div></div></header>`,1),W(`main`,wc,[G(R(vc))])])]))}},Ec={class:`page`},Dc={class:`hero-panel hero-panel--showcase`},Oc={class:`hero-panel__content`},kc={class:`hero-action-row`},Ac={class:`card focus-card`},jc={class:`focus-switch`},Mc=[`onClick`],Nc={class:`focus-stage`},Pc={class:`focus-stage__main`},Fc={class:`cue-card__step`},Ic={class:`focus-bullet-grid`},Lc={class:`focus-stage__side`},Rc={class:`speech-card speech-card--compact`},zc={class:`card launchpad-card`},Bc={class:`launchpad-grid`},Vc={class:`card`},Hc={class:`portal-banner`},Uc={class:`portal-banner__aside`},Wc={__name:`HomeView`,setup(e){let t=L(`statistics`),n=[{id:`statistics`,tag:`Focus 1`,title:`统计特征泄露`},{id:`period`,tag:`Focus 2`,title:`周期结构泄露`},{id:`extension`,tag:`Focus 3`,title:`向交叉专题延伸`}],r={statistics:{step:`Key Theme A`,title:`凯撒密码的问题不是“位移太简单”，而是保留了统计结构`,description:`这一视角特别适合课堂第一部分。它能帮助学生理解：语言频率本身就是一种数学结构，而密码分析并不是凭感觉破译，而是在利用结构泄露。`,points:[`观察密文频率图`,`对比英文参考频率`,`说明“换字母”不等于“打散结构”`],classroom:`最适合在首页点一下后，直接跳进凯撒页面。老师可以顺势把“统计规律”与后续信息论里的“冗余、熵、分布”串起来。`,route:`/caesar`,linkLabel:`打开凯撒频率分析页`},period:{step:`Key Theme B`,title:`维吉尼亚密码变复杂了，但密钥周期重复仍然会暴露结构`,description:`这一视角适合课堂第二部分。它能说明：即使加密比凯撒复杂，只要仍然有可重复利用的模式，攻击者就能从重复片段和间距中找线索。`,points:[`寻找重复片段`,`计算间距公因数`,`说明周期为什么会被反推出`],classroom:`这一部分非常适合接在凯撒之后，用来强调“更复杂”不等于“统计上就真的安全”。`,route:`/vigenere`,linkLabel:`打开维吉尼亚 Kasiski 页`},extension:{step:`Key Theme C`,title:`古典密码站可以自然过渡到密码学与信息论交叉专题`,description:`这一视角适合课程后半段或章节切换时使用。学生已经看过统计泄露和周期泄露，再切到交叉专题新站，就更容易理解熵、互信息、完美保密、冗余和纠错。`,points:[`从频率结构过渡到熵`,`从周期泄露过渡到结构隐藏`,`从历史密码过渡到现代设计`],classroom:`这能把原有古典密码课程和新建交叉网站真正串成一条教学链，而不是两个孤立项目。`,route:`/cross-learning`,linkLabel:`打开交叉专题新站入口`}},i=K(()=>r[t.value]);return(e,r)=>(H(),U(`section`,Ec,[W(`header`,Dc,[W(`div`,Oc,[r[3]||=Hi(`<p class="hero-panel__tag">项目总览</p><h2>古典密码分析方法可视化演示平台</h2><p class="hero-panel__lead"> 这个系统把算法演示、统计图表和课程文档展示放在同一个平台里。它不是只给出加密结果，而是把“为什么会暴露统计结构、为什么会泄露周期信息”做成了可观察、可讲解、可课堂演示的过程。 </p><div class="hero-pill-row"><span class="hero-pill">交互演示</span><span class="hero-pill">图表分析</span><span class="hero-pill">静态教材</span><span class="hero-pill">课堂答辩友好</span></div>`,4),W(`div`,kc,[G(R(X),{class:`action-button`,to:`/caesar`},{default:z(()=>[...r[0]||=[Vi(`先看凯撒演示`,-1)]]),_:1}),G(R(X),{class:`action-button action-button--soft`,to:`/auto-demo`},{default:z(()=>[...r[1]||=[Vi(`播放自动讲解`,-1)]]),_:1}),G(R(X),{class:`action-button action-button--ghost`,to:`/cross-learning`},{default:z(()=>[...r[2]||=[Vi(`进入交叉专题新站`,-1)]]),_:1})])]),r[4]||=Hi(`<div class="hero-panel__aside"><div class="hero-panel__note hero-panel__note--floating"><span>本页重点</span><strong>先说明项目目标、系统结构，以及后续展示路径。</strong></div><div class="hero-metric-stack"><div class="hero-metric"><span>核心方法</span><strong>2 种</strong><em>频率分析 / Kasiski 检验</em></div><div class="hero-metric"><span>页面角色</span><strong>3 合 1</strong><em>演示 / 文档 / 讲解</em></div></div></div>`,1)]),r[16]||=Hi(`<section class="speaker-panel"><div class="speaker-panel__header"><div><p class="section-tag">Presentation Notes</p><h3>演示要点</h3></div><span class="speaker-panel__time">建议 40-60 秒</span></div><div class="speaker-grid"><article class="cue-card cue-card--accent"><span class="cue-card__step">Step 1</span><h4>项目目标</h4><p>说明本项目聚焦“把古典密码分析过程做成可视化、可交互、可用于课堂展示的系统”。</p></article><article class="cue-card"><span class="cue-card__step">Step 2</span><h4>系统结构</h4><p>强调前端负责交互、图表和教材渲染，Markdown 会在构建阶段被打包成静态数据。</p></article><article class="cue-card"><span class="cue-card__step">Step 3</span><h4>展示路径</h4><p>交代后续顺序：凯撒页面、维吉尼亚页面、最后是 Markdown 教材页面。</p></article></div></section>`,1),W(`article`,Ac,[r[6]||=W(`div`,{class:`card__header`},[W(`div`,null,[W(`p`,{class:`section-tag`},`Teaching Focus`),W(`h3`,null,`本课最值得强调的三个观察角度`)]),W(`span`,{class:`hint-chip hint-chip--warm`},`交互切换`)],-1),W(`div`,jc,[(H(),U(V,null,B(n,e=>W(`button`,{key:e.id,class:A([`focus-switch__button`,{"focus-switch__button--active":t.value===e.id}]),onClick:n=>t.value=e.id},[W(`span`,null,j(e.tag),1),W(`strong`,null,j(e.title),1)],10,Mc)),64))]),W(`div`,Nc,[W(`div`,Pc,[W(`span`,Fc,j(i.value.step),1),W(`h4`,null,j(i.value.title),1),W(`p`,null,j(i.value.description),1),W(`div`,Ic,[(H(!0),U(V,null,B(i.value.points,e=>(H(),U(`div`,{key:e,class:`focus-bullet`},j(e),1))),128))])]),W(`div`,Lc,[W(`div`,Rc,[W(`p`,null,j(i.value.classroom),1)]),G(R(X),{class:`doc-pager__item focus-stage__link`,to:i.value.route},{default:z(()=>[r[5]||=W(`span`,null,`对应页面`,-1),W(`strong`,null,j(i.value.linkLabel),1)]),_:1},8,[`to`])])])]),r[17]||=Hi(`<div class="grid grid--two"><article class="card feature-card"><h3>系统包含什么</h3><ul class="bullet-list"><li>凯撒密码频率分析演示。</li><li>维吉尼亚密码 Kasiski 检验演示。</li><li>构建阶段生成静态教材数据。</li><li>前端分页渲染课程教材内容。</li><li>适合课堂无网环境下本地答辩。</li></ul></article><article class="card timeline-card"><h3>答辩推荐顺序</h3><div class="timeline"><div class="timeline__item"><strong>1. 项目主页</strong><span>说明目标、结构和整体方案。</span></div><div class="timeline__item"><strong>2. 凯撒页面</strong><span>突出单表代换保留频率结构。</span></div><div class="timeline__item"><strong>3. 维吉尼亚页面</strong><span>突出重复片段暴露密钥周期。</span></div><div class="timeline__item"><strong>4. 文档页面</strong><span>展示系统还能浏览课程教材。</span></div></div></article></div>`,1),W(`article`,zc,[r[11]||=W(`div`,{class:`card__header`},[W(`div`,null,[W(`p`,{class:`section-tag`},`Quick Launch`),W(`h3`,null,`从首页快速进入不同授课模式`)]),W(`span`,{class:`hint-chip`},`入口区`)],-1),W(`div`,Bc,[G(R(X),{class:`launchpad-item`,to:`/caesar`},{default:z(()=>[...r[7]||=[W(`span`,null,`Mode A`,-1),W(`strong`,null,`凯撒频率分析`,-1),W(`p`,null,`适合从“统计特征为什么会泄露”切入。`,-1)]]),_:1}),G(R(X),{class:`launchpad-item`,to:`/vigenere`},{default:z(()=>[...r[8]||=[W(`span`,null,`Mode B`,-1),W(`strong`,null,`维吉尼亚 Kasiski`,-1),W(`p`,null,`适合从“多表代换为什么仍会暴露周期”切入。`,-1)]]),_:1}),G(R(X),{class:`launchpad-item`,to:`/docs`},{default:z(()=>[...r[9]||=[W(`span`,null,`Mode C`,-1),W(`strong`,null,`静态教材阅读`,-1),W(`p`,null,`适合切回文档讲授、复习和答辩说明。`,-1)]]),_:1}),G(R(X),{class:`launchpad-item launchpad-item--accent`,to:`/cross-learning`},{default:z(()=>[...r[10]||=[W(`span`,null,`Next Stage`,-1),W(`strong`,null,`交叉专题新站`,-1),W(`p`,null,`从古典密码基础过渡到密码学与信息论交叉专题。`,-1)]]),_:1})])]),r[18]||=Hi(`<div class="grid grid--two"><article class="card architecture-card"><h3>页面能力分工</h3><div class="architecture-blocks"><div class="architecture-block"><span>Frontend</span><strong>Vue + Vite</strong><p>负责路由、多页面展示、图表渲染、密码分析交互和 Markdown 渲染页面。</p></div><div class="architecture-block"><span>Docs Build</span><strong>Static Bundle</strong><p>负责在构建阶段扫描课程 Markdown 文件夹，生成静态教材数据，部署后不再依赖接口请求。</p></div></div></article><article class="card close-card"><h3>本页结论</h3><blockquote> 本项目不是单纯展示加密结果，而是把密码分析过程和课程教材内容组织成了一套完整、可交互、可静态托管的教学演示系统。 </blockquote></article></div>`,1),W(`article`,Vc,[r[15]||=W(`div`,{class:`card__header`},[W(`h3`,null,`延伸入口`),W(`span`,{class:`hint-chip hint-chip--warm`},`New Site`)],-1),W(`div`,Hc,[r[14]||=W(`div`,{class:`portal-banner__content`},[W(`p`,{class:`portal-banner__eyebrow`},`课程二阶段入口`),W(`h3`,null,`从古典密码分析，走向密码学与信息论交叉`),W(`p`,null,` 如果接下来要继续讲“密码学与信息论交叉”专题，现在就可以从这里切到新网站。新站延续本项目“导学 + 互动演示 + 教材阅读”的教学方式，但内容已经扩展到熵、完美保密、压缩、纠错、随机性和现代密码设计思想。 `)],-1),W(`div`,Uc,[r[13]||=W(`div`,{class:`portal-banner__orbit`},[W(`span`,{class:`portal-banner__orbit-core`},`Cross`),W(`span`,{class:`portal-banner__orbit-ring`})],-1),G(R(X),{class:`portal-banner__cta`,to:`/cross-learning`},{default:z(()=>[...r[12]||=[W(`span`,null,`进入新站入口页`,-1),W(`strong`,null,`密码学与信息论交叉学习网站`,-1)]]),_:1})])])]),r[19]||=W(`article`,{class:`card close-card`},[W(`h3`,null,`本页结论`),W(`blockquote`,null,` 这个首页现在不只是项目说明页，而是一个真正可用于课堂开场的课程门户：它既能引导老师选择讲法，也能引导学生理解从古典密码到交叉专题的学习路线。 `)],-1)]))}},Gc=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``),Kc=[8.17,1.49,2.78,4.25,12.7,2.23,2.02,6.09,6.97,.15,.77,4.03,2.41,6.75,7.51,1.93,.1,5.99,6.33,9.06,2.76,.98,2.36,.15,1.97,.07];function Z(e){return String(e||``).toUpperCase().replace(/[^A-Z]/g,``)}function qc(e){return e.charCodeAt(0)-65}function Jc(e){return String.fromCharCode((e%26+26)%26+65)}function Yc(e,t){return Z(e).split(``).map(e=>Jc(qc(e)+Number(t||0))).join(``)}function Xc(e,t){return Yc(e,-Number(t||0))}function Zc(e){let t=Z(e),n=Array.from({length:26},()=>0);t.split(``).forEach(e=>{n[qc(e)]+=1});let r=t.length||1;return Gc.map((e,t)=>({letter:e,count:n[t],ratio:Number((n[t]/r*100).toFixed(2))}))}function Qc(e){let t=Z(e);return t.length?Zc(t).reduce((e,n,r)=>{let i=Kc[r]/100*t.length,a=n.count-i;return e+a*a/(i||1)},0):1/0}function $c(e){let t=Z(e);return t.length?Zc(t).map((e,n)=>{let r=Kc[n]/100*t.length,i=e.count-r,a=i*i/(r||1);return{letter:e.letter,observed:e.count,expected:Number(r.toFixed(2)),diff:Number(i.toFixed(2)),contribution:Number(a.toFixed(2)),ratio:e.ratio}}).sort((e,t)=>t.contribution-e.contribution||t.observed-e.observed):[]}function el(e){let t=Z(e);return Array.from({length:25},(e,n)=>{let r=n+1,i=Xc(t,r);return{shift:r,score:Number(Qc(i).toFixed(2)),plaintext:i}}).sort((e,t)=>e.score-t.score)}function tl(e,t){let n=Z(e),r=Z(t);return!n.length||!r.length?``:n.split(``).map((e,t)=>r[t%r.length]).join(``)}function nl(e,t){let n=Z(e),r=Z(t);return r.length?n.split(``).map((e,t)=>Jc(qc(e)+qc(r[t%r.length]))).join(``):``}function rl(e,t=3,n=5){let r=Z(e),i=[];for(let e=t;e<=n;e+=1){let t=new Map;for(let n=0;n<=r.length-e;n+=1){let i=r.slice(n,n+e);t.has(i)||t.set(i,[]),t.get(i).push(n)}for(let[e,n]of t.entries())if(n.length>1){let t=[];for(let e=0;e<n.length;e+=1)for(let r=e+1;r<n.length;r+=1)t.push(n[r]-n[e]);i.push({ngram:e,positions:n,distances:[...new Set(t)].sort((e,t)=>e-t),count:n.length})}}return i.sort((e,t)=>t.count-e.count||t.ngram.length-e.ngram.length)}function il(e){let t=new Map;return e.forEach(e=>{for(let n=2;n<=16;n+=1)e%n===0&&t.set(n,(t.get(n)||0)+1)}),[...t.entries()].map(([e,t])=>({length:e,score:t})).sort((e,t)=>t.score-e.score||e.length-t.length)}function al(e,t){let n=Z(e);return!n.length||!t?[]:Array.from({length:t},(e,r)=>{let i=``;for(let e=r;e<n.length;e+=t)i+=n[e];return i}).filter(Boolean)}function ol(e,t=64){let n=Z(e);return n.length>t?`${n.slice(0,t)}...`:n}var sl={class:`page`},cl={class:`grid grid--controls`},ll={class:`field field--wide`},ul={class:`field`},dl={class:`metric-box`},fl={class:`stat-grid`},pl={class:`stat-card`},ml={class:`stat-card`},hl={class:`stat-card`},gl={class:`stat-card`},_l={class:`grid grid--two`},vl={class:`card`},yl={class:`code-card`},bl={class:`code-card`},xl={class:`mapping-grid`},Sl={class:`card`},Cl={class:`explanation`},wl={class:`grid grid--two`},Tl={class:`card`},El={class:`formula-stack`},Dl={class:`formula-card`},Ol={class:`formula-card`},kl={class:`table-shell`},Al={class:`card`},jl={class:`table-shell`},Ml={class:`explanation`},Nl={class:`grid grid--two`},Pl={class:`card`},Fl={class:`table-shell`},Il={key:0},Ll=`When Julius Caesar wanted to protect a message, he shifted every letter by the same distance. This regularity is exactly what frequency analysis can exploit.`,Rl={__name:`CaesarView`,setup(e){let t=L(Ll),n=L(3),r=L(null),i=null,a=K(()=>Z(t.value)),o=K(()=>Yc(a.value,n.value)),s=K(()=>el(o.value)),c=K(()=>s.value[0]),l=K(()=>Zc(o.value)),u=K(()=>l.value.slice().sort((e,t)=>t.count-e.count||t.ratio-e.ratio).slice(0,6).map(e=>({...e,reference:Kc[`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.indexOf(e.letter)].toFixed(2)}))),d=K(()=>c.value?$c(c.value.plaintext).slice(0,6):[]),f=K(()=>a.value.slice(0,18).split(``).map((e,t)=>`${e} → ${o.value[t]}`)),p=K(()=>!o.value.length||!c.value?`当前没有可分析的密文。`:`当前密文中最显著的高频字母是 ${l.value.slice().sort((e,t)=>t.ratio-e.ratio).slice(0,3).map(e=>`${e.letter}(${e.ratio}%)`).join(`、`)}。系统枚举全部位移后，发现位移 ${c.value.shift} 与英文参考频率最接近，因此最可能恢复出正确明文。这说明凯撒密码没有真正打散语言统计特征。`);function m(){!r.value||!window.echarts||(i||=window.echarts.init(r.value),i.setOption({animationDuration:380,tooltip:{trigger:`axis`},grid:{top:48,left:46,right:20,bottom:38},legend:{top:6,textStyle:{color:`#50656f`},data:[`密文字母频率`,`英文参考频率`]},xAxis:{type:`category`,data:l.value.map(e=>e.letter),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`%`,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35, 79, 102, 0.08)`}}},series:[{name:`密文字母频率`,type:`bar`,barWidth:`50%`,data:l.value.map(e=>e.ratio),itemStyle:{color:`#234f66`,borderRadius:[5,5,0,0]}},{name:`英文参考频率`,type:`line`,smooth:!0,data:Kc,lineStyle:{color:`#c46b43`,width:3},itemStyle:{color:`#c46b43`}}]}))}function h(){t.value=Ll,n.value=3}function g(){i?.resize()}return tr(()=>{m(),window.addEventListener(`resize`,g)}),ir(()=>{window.removeEventListener(`resize`,g),i?.dispose()}),Mn([o,n],m,{immediate:!0}),(e,i)=>(H(),U(`section`,sl,[W(`header`,{class:`page-hero`},[i[2]||=W(`div`,null,[W(`p`,{class:`section-tag`},`Caesar Cipher / Frequency Analysis`),W(`h2`,null,`凯撒密码频率分析演示`),W(`p`,{class:`page-hero__lead`},` 这一页要讲清楚一件事：凯撒密码虽然把字母改了，但没有消除语言本身的统计分布，所以可以被频率分析利用。 `)],-1),W(`button`,{class:`action-button`,onClick:h},`加载标准样例`)]),i[26]||=Hi(`<section class="speaker-panel"><div class="speaker-panel__header"><div><p class="section-tag">Presentation Notes</p><h3>演示要点</h3></div><span class="speaker-panel__time">建议 60-90 秒</span></div><div class="speaker-grid"><article class="cue-card cue-card--accent"><span class="cue-card__step">输入流程</span><h4>先加载标准样例</h4><p>先展示系统如何从明文出发，经过规范化和位移运算生成密文。</p></article><article class="cue-card"><span class="cue-card__step">观察重点</span><h4>解释频率图的两层含义</h4><p>蓝色是密文频率，橙色是英文参考频率。虽然字母标签变化了，但分布形状仍然保留。</p></article><article class="cue-card"><span class="cue-card__step">结论指向</span><h4>收束到统计特征泄露</h4><p>突出凯撒密码只是整体平移字母，并没有真正破坏自然语言的统计结构。</p></article></div></section>`,1),W(`div`,cl,[W(`label`,ll,[i[3]||=W(`span`,null,`输入英文文本`,-1),En(W(`textarea`,{"onUpdate:modelValue":i[0]||=e=>t.value=e,rows:`6`},null,512),[[so,t.value]])]),W(`label`,ul,[i[4]||=W(`span`,null,`位移量`,-1),En(W(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`range`,min:`1`,max:`25`},null,512),[[so,n.value]])]),W(`div`,dl,[i[5]||=W(`span`,null,`当前位移`,-1),W(`strong`,null,j(n.value),1)])]),W(`div`,fl,[W(`article`,pl,[i[6]||=W(`span`,null,`规范化长度`,-1),W(`strong`,null,j(a.value.length),1)]),W(`article`,ml,[i[7]||=W(`span`,null,`密文长度`,-1),W(`strong`,null,j(o.value.length),1)]),W(`article`,hl,[i[8]||=W(`span`,null,`最佳猜测位移`,-1),W(`strong`,null,j(c.value?.shift??`-`),1)]),W(`article`,gl,[i[9]||=W(`span`,null,`恢复明文片段`,-1),W(`strong`,null,j(c.value?R(ol)(c.value.plaintext,16):`-`),1)])]),W(`div`,_l,[W(`article`,vl,[i[12]||=W(`div`,{class:`card__header`},[W(`h3`,null,`输入与处理中间状态`),W(`span`,{class:`hint-chip`},`输入区`)],-1),W(`div`,yl,[i[10]||=W(`h4`,null,`规范化明文`,-1),W(`p`,null,j(a.value||`请输入英文，系统会自动过滤空格和标点。`),1)]),W(`div`,bl,[i[11]||=W(`h4`,null,`生成密文`,-1),W(`p`,null,j(o.value||`生成后的密文会显示在这里。`),1)]),W(`div`,xl,[(H(!0),U(V,null,B(f.value,e=>(H(),U(`span`,{key:e,class:`mapping-chip`},j(e),1))),128))])]),W(`article`,Sl,[i[13]||=W(`div`,{class:`card__header`},[W(`h3`,null,`频率图与结论`),W(`span`,{class:`hint-chip hint-chip--warm`},`图表区`)],-1),W(`div`,{ref_key:`chartRef`,ref:r,class:`chart`},null,512),W(`p`,Cl,j(p.value),1)])]),W(`div`,wl,[W(`article`,Tl,[i[19]||=W(`div`,{class:`card__header`},[W(`h3`,null,`数学过程一：频率统计如何得到`),W(`span`,{class:`hint-chip`},`公式与样本`)],-1),W(`div`,El,[W(`div`,Dl,[i[14]||=W(`span`,null,`加密公式`,-1),i[15]||=W(`strong`,null,`C = (P + k) mod 26`,-1),W(`p`,null,"这里的 `k="+j(n.value)+"`，说明每个明文字母都做同样的循环位移。",1)]),W(`div`,Ol,[i[16]||=W(`span`,null,`频率公式`,-1),i[17]||=W(`strong`,null,`f_i = n_i / N × 100%`,-1),W(`p`,null,"当前样本长度 `N="+j(o.value.length)+"`，先统计每个字母出现次数，再换算成百分比。",1)])]),W(`div`,kl,[W(`table`,null,[i[18]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`字母`),W(`th`,null,`出现次数 n_i`),W(`th`,null,`观测频率 f_i`),W(`th`,null,`英文参考频率`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(u.value,e=>(H(),U(`tr`,{key:e.letter},[W(`td`,null,j(e.letter),1),W(`td`,null,j(e.count),1),W(`td`,null,j(e.ratio)+`%`,1),W(`td`,null,j(e.reference)+`%`,1)]))),128))])])])]),W(`article`,Al,[i[21]||=Hi('<div class="card__header"><h3>数学过程二：为什么自动猜测出这个位移</h3><span class="hint-chip hint-chip--warm">χ² 判别</span></div><div class="formula-stack"><div class="formula-card"><span>逆变换公式</span><strong>P_s = (C - s) mod 26</strong><p>系统把 25 个候选位移全部代入，分别解出 25 份候选明文。</p></div><div class="formula-card"><span>评分公式</span><strong>χ²(s) = Σ((O_i - E_i)^2 / E_i)</strong><p>其中 `O_i` 是候选明文中的实际计数，`E_i` 是按英文参考频率推得的期望计数。分数越小，说明越像自然英文。</p></div></div>',2),W(`div`,jl,[W(`table`,null,[i[20]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`字母`),W(`th`,null,`O_i`),W(`th`,null,`E_i`),W(`th`,null,`O_i - E_i`),W(`th`,null,`贡献值`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(d.value,e=>(H(),U(`tr`,{key:e.letter},[W(`td`,null,j(e.letter),1),W(`td`,null,j(e.observed),1),W(`td`,null,j(e.expected),1),W(`td`,null,j(e.diff),1),W(`td`,null,j(e.contribution),1)]))),128))])])]),W(`p`,Ml,` 当前最佳候选位移是 `+j(c.value?.shift??`-`)+`，其 χ² 分数为 `+j(c.value?.score??`-`)+`。这表示该位移对应的候选明文与英文统计分布最接近。 `,1)])]),W(`div`,Nl,[W(`article`,Pl,[i[24]||=W(`h3`,null,`位移猜测前 3 名`,-1),W(`div`,Fl,[W(`table`,null,[i[23]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`排名`),W(`th`,null,`位移`),W(`th`,null,`分数`),W(`th`,null,`候选明文片段`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(s.value.slice(0,3),(e,t)=>(H(),U(`tr`,{key:e.shift},[W(`td`,null,j(t+1),1),W(`td`,null,j(e.shift),1),W(`td`,null,j(e.score),1),W(`td`,null,j(R(ol)(e.plaintext,48)),1)]))),128)),s.value.length?Ui(``,!0):(H(),U(`tr`,Il,[...i[22]||=[W(`td`,{colspan:`4`},`输入文本后会出现自动猜测结果。`,-1)]]))])])])]),i[25]||=W(`article`,{class:`card`},[W(`h3`,null,`本页总结`),W(`div`,{class:`speech-card`},[W(`p`,null,` 凯撒密码的弱点不在于位移规则太简单本身，而在于它保留了自然语言的频率结构。系统通过枚举位移并匹配英文参考分布，可以较稳定地恢复最可能的明文结果。 `)])],-1)])]))}},zl={class:`page`},Bl={class:`mode-switch`},Vl={class:`grid grid--controls`},Hl={key:0,class:`field field--wide`},Ul={key:1,class:`field`},Wl={key:2,class:`field field--wide`},Gl={class:`stat-grid`},Kl={class:`stat-card`},ql={class:`stat-card`},Jl={class:`stat-card`},Yl={class:`stat-card`},Xl={class:`grid grid--two`},Zl={class:`card`},Ql={class:`code-card`},$l={class:`code-card`},eu={class:`code-card`},tu={class:`card`},nu={class:`explanation`},ru={class:`grid grid--two`},iu={class:`card`},au={class:`table-shell`},ou={key:0},su={class:`card`},cu={class:`explanation`},lu=`ATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAY`,uu=`ORANGE`,du=`OKTNPQGOXTKPRWURKXTNOKTNPQGOXTKPRWURKXTNOKTNPQGOXTKPRWURKXTNOKTNPQGOXTKPRWURKXTNOKTNPQGOXTKPRWURKXTNOKTNPQGOXTKPRWURKXTNOKTNPQGOXTKPRWURKXTNOKTNPQGOXTKPRWURKXTN`,fu={__name:`VigenereView`,setup(e){let t=L(`generate`),n=L(lu),r=L(uu),i=L(``),a=L(null),o=L(null),s=null,c=null,l=K(()=>t.value===`generate`?Z(n.value):Z(i.value)),u=K(()=>t.value===`generate`?nl(l.value,r.value):Z(i.value)),d=K(()=>rl(u.value).slice(0,12)),f=K(()=>d.value.flatMap(e=>e.distances)),p=K(()=>il(f.value)),m=K(()=>p.value[0]?.length||0),h=K(()=>al(u.value,m.value).slice(0,8)),g=K(()=>{if(t.value!==`generate`)return`当前为直接分析密文模式，不展示密钥循环。`;let e=Z(n.value).slice(0,64);if(!e.length||!Z(r.value).length)return`请输入明文和密钥后查看。`;let i=tl(e,r.value),a=u.value.slice(0,64);return[`PLAIN : ${e}`,`KEY   : ${i}`,`CIPHER: ${a}`].join(`
`)}),_=K(()=>u.value.length?u.value.length<24?`样本过短`:d.value.length?`分析完成`:`重复不足`:`等待输入`),v=K(()=>u.value.length?u.value.length<24||!d.value.length||!p.value.length?`当前密文较短或重复片段不足，Kasiski 检验无法形成稳定候选长度。这也说明统计分析方法依赖足够长的文本样本。`:`系统根据重复片段的间距统计公因数，得到候选密钥长度前 3 名为 ${p.value.slice(0,3).map(e=>`${e.length}(得分 ${e.score})`).join(`、`)}。由于长度 ${m.value} 得分最高，因此它最可能是密钥周期或其关键因子。`:`请输入明文与密钥，或直接分析密文样例。`),y=K(()=>!h.value.length||!m.value?`当候选长度稳定后，这里会显示按周期拆分后的各组字母频率。`:`按候选长度 ${m.value} 分组后，同组字符共享相同的移位规则，因此每一组开始表现得像独立的凯撒子问题。这说明维吉尼亚密码一旦周期暴露，就能被继续拆分分析。`);function b(){if(!a.value||!window.echarts)return;s||=window.echarts.init(a.value);let e=p.value.length?p.value.slice(0,8):[{length:`-`,score:0}];s.setOption({animationDuration:380,tooltip:{trigger:`axis`},grid:{top:36,left:46,right:16,bottom:38},xAxis:{type:`category`,data:e.map(e=>String(e.length)),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`得分`,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35, 79, 102, 0.08)`}}},series:[{type:`bar`,barWidth:`52%`,data:e.map(e=>e.score),itemStyle:{color:`#234f66`,borderRadius:[5,5,0,0]}}]})}function x(){if(!o.value||!window.echarts)return;c||=window.echarts.init(o.value);let e=h.value.length?h.value:[``];c.setOption({animationDuration:380,tooltip:{trigger:`axis`},grid:{top:46,left:46,right:18,bottom:40},legend:{top:6,textStyle:{color:`#50656f`}},xAxis:{type:`category`,data:`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`%`,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35, 79, 102, 0.08)`}}},series:e.map((e,t)=>({name:`分组 ${t+1}`,type:`line`,smooth:!0,data:Zc(e).map(e=>e.ratio)}))})}function S(){t.value=`generate`,n.value=lu,r.value=uu}function C(){t.value=`ciphertext`,i.value=du}function w(){t.value=`generate`,n.value=`ATTACKATONCE`,r.value=`DOG`}function T(){s?.resize(),c?.resize()}return tr(()=>{b(),x(),window.addEventListener(`resize`,T)}),ir(()=>{window.removeEventListener(`resize`,T),s?.dispose(),c?.dispose()}),Mn([u,p],b,{immediate:!0}),Mn([h,m],x,{immediate:!0}),(e,s)=>(H(),U(`section`,zl,[W(`header`,{class:`page-hero`},[s[5]||=W(`div`,null,[W(`p`,{class:`section-tag`},`Vigenere Cipher / Kasiski Examination`),W(`h2`,null,`维吉尼亚密码 Kasiski 检验演示`),W(`p`,{class:`page-hero__lead`},` 这一页的核心不是直接破解密钥，而是让老师看到：即使是多表代换，只要密钥周期重复，重复片段的间距仍会泄露周期信息。 `)],-1),W(`div`,{class:`action-row`},[W(`button`,{class:`action-button`,onClick:S},`加载生成样例`),W(`button`,{class:`action-button action-button--soft`,onClick:C},`加载密文样例`),W(`button`,{class:`action-button action-button--ghost`,onClick:w},`加载短文本反例`)])]),s[25]||=Hi(`<section class="speaker-panel"><div class="speaker-panel__header"><div><p class="section-tag">Presentation Notes</p><h3>演示要点</h3></div><span class="speaker-panel__time">建议 90-120 秒</span></div><div class="speaker-grid"><article class="cue-card cue-card--accent"><span class="cue-card__step">输入流程</span><h4>先加载“生成样例”</h4><p>先展示明文、密钥循环和密文之间的关系，强调这里使用的是周期性密钥。</p></article><article class="cue-card"><span class="cue-card__step">观察重点</span><h4>指向重复片段和候选长度</h4><p>说明系统先找重复片段，再看它们的间距，再统计这些间距的公因数。</p></article><article class="cue-card"><span class="cue-card__step">结论指向</span><h4>收束到周期泄露</h4><p>维吉尼亚密码比凯撒更强，但只要密钥重复，就仍然会泄露周期结构。</p></article></div></section>`,1),W(`div`,Bl,[W(`label`,null,[En(W(`input`,{"onUpdate:modelValue":s[0]||=e=>t.value=e,type:`radio`,value:`generate`},null,512),[[co,t.value]]),s[6]||=W(`span`,null,`生成并分析`,-1)]),W(`label`,null,[En(W(`input`,{"onUpdate:modelValue":s[1]||=e=>t.value=e,type:`radio`,value:`ciphertext`},null,512),[[co,t.value]]),s[7]||=W(`span`,null,`直接分析密文`,-1)])]),W(`div`,Vl,[t.value===`generate`?(H(),U(`label`,Hl,[s[8]||=W(`span`,null,`输入明文`,-1),En(W(`textarea`,{"onUpdate:modelValue":s[2]||=e=>n.value=e,rows:`6`},null,512),[[so,n.value]])])):Ui(``,!0),t.value===`generate`?(H(),U(`label`,Ul,[s[9]||=W(`span`,null,`密钥`,-1),En(W(`input`,{"onUpdate:modelValue":s[3]||=e=>r.value=e,type:`text`,maxlength:`24`},null,512),[[so,r.value]])])):Ui(``,!0),t.value===`ciphertext`?(H(),U(`label`,Wl,[s[10]||=W(`span`,null,`输入或加载密文`,-1),En(W(`textarea`,{"onUpdate:modelValue":s[4]||=e=>i.value=e,rows:`6`},null,512),[[so,i.value]])])):Ui(``,!0)]),W(`div`,Gl,[W(`article`,Kl,[s[11]||=W(`span`,null,`分析文本长度`,-1),W(`strong`,null,j(u.value.length),1)]),W(`article`,ql,[s[12]||=W(`span`,null,`重复片段数量`,-1),W(`strong`,null,j(d.value.length),1)]),W(`article`,Jl,[s[13]||=W(`span`,null,`首选候选长度`,-1),W(`strong`,null,j(m.value||`-`),1)]),W(`article`,Yl,[s[14]||=W(`span`,null,`当前状态`,-1),W(`strong`,null,j(_.value),1)])]),W(`div`,Xl,[W(`article`,Zl,[s[18]||=W(`div`,{class:`card__header`},[W(`h3`,null,`输入与处理中间状态`),W(`span`,{class:`hint-chip`},`输入区`)],-1),W(`div`,Ql,[s[15]||=W(`h4`,null,`规范化输入`,-1),W(`p`,null,j(l.value||`请输入文本后开始分析。`),1)]),W(`div`,$l,[s[16]||=W(`h4`,null,`密钥循环预览`,-1),W(`pre`,null,j(g.value),1)]),W(`div`,eu,[s[17]||=W(`h4`,null,`用于分析的密文`,-1),W(`p`,null,j(u.value||`密文会显示在这里。`),1)])]),W(`article`,tu,[s[19]||=W(`div`,{class:`card__header`},[W(`h3`,null,`候选密钥长度图`),W(`span`,{class:`hint-chip hint-chip--warm`},`图表区`)],-1),W(`div`,{ref_key:`lengthChartRef`,ref:a,class:`chart`},null,512),W(`p`,nu,j(v.value),1)])]),W(`div`,ru,[W(`article`,iu,[s[22]||=W(`h3`,null,`重复片段与位置间距`,-1),W(`div`,au,[W(`table`,null,[s[21]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`片段`),W(`th`,null,`位置`),W(`th`,null,`间距`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(d.value,e=>(H(),U(`tr`,{key:`${e.ngram}-${e.positions.join(`-`)}`},[W(`td`,null,j(e.ngram),1),W(`td`,null,j(e.positions.join(`, `)),1),W(`td`,null,j(e.distances.join(`, `)),1)]))),128)),d.value.length?Ui(``,!0):(H(),U(`tr`,ou,[...s[20]||=[W(`td`,{colspan:`3`},`当前没有足够重复片段。`,-1)]]))])])])]),s[23]||=W(`article`,{class:`card`},[W(`h3`,null,`本页总结`),W(`div`,{class:`speech-card`},[W(`p`,null,` 维吉尼亚密码通过多表代换削弱了单表频率分析，但只要密钥循环重复，重复片段与间距信息仍会暴露潜在周期。Kasiski 检验的作用，就是从这些结构性痕迹中提取候选密钥长度。 `)])],-1)]),W(`article`,su,[s[24]||=W(`div`,{class:`card__header`},[W(`h3`,null,`按候选长度分组后的频率图`),W(`span`,{class:`hint-chip`},`结果区`)],-1),W(`div`,{ref_key:`groupChartRef`,ref:o,class:`chart chart--wide`},null,512),W(`p`,cu,j(y.value),1)])]))}};function pu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var mu=pu();function hu(e){mu=e}var gu={exec:()=>null};function Q(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(vu.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var _u=(()=>{try{return!0}catch{return!1}})(),vu={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},yu=/^(?:[ \t]*(?:\n|$))+/,bu=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,xu=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Su=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Cu=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,wu=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Tu=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Eu=Q(Tu).replace(/bull/g,wu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Du=Q(Tu).replace(/bull/g,wu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ou=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ku=/^[^\n]+/,Au=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ju=Q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Au).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Mu=Q(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,wu).getRegex(),Nu=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Pu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Fu=Q(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Pu).replace(`tag`,Nu).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Iu=Q(Ou).replace(`hr`,Su).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Nu).getRegex(),Lu={blockquote:Q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Iu).getRegex(),code:bu,def:ju,fences:xu,heading:Cu,hr:Su,html:Fu,lheading:Eu,list:Mu,newline:yu,paragraph:Iu,table:gu,text:ku},Ru=Q(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Su).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Nu).getRegex(),zu={...Lu,lheading:Du,table:Ru,paragraph:Q(Ou).replace(`hr`,Su).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Ru).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Nu).getRegex()},Bu={...Lu,html:Q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Pu).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:gu,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Q(Ou).replace(`hr`,Su).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Eu).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Vu=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Hu=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Uu=/^( {2,}|\\)\n(?!\s*$)/,Wu=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Gu=/[\p{P}\p{S}]/u,Ku=/[\s\p{P}\p{S}]/u,qu=/[^\s\p{P}\p{S}]/u,Ju=Q(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Ku).getRegex(),Yu=/(?!~)[\p{P}\p{S}]/u,Xu=/(?!~)[\s\p{P}\p{S}]/u,Zu=/(?:[^\s\p{P}\p{S}]|~)/u,Qu=Q(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,_u?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),$u=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ed=Q($u,`u`).replace(/punct/g,Gu).getRegex(),td=Q($u,`u`).replace(/punct/g,Yu).getRegex(),nd=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,rd=Q(nd,`gu`).replace(/notPunctSpace/g,qu).replace(/punctSpace/g,Ku).replace(/punct/g,Gu).getRegex(),id=Q(nd,`gu`).replace(/notPunctSpace/g,Zu).replace(/punctSpace/g,Xu).replace(/punct/g,Yu).getRegex(),ad=Q(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,qu).replace(/punctSpace/g,Ku).replace(/punct/g,Gu).getRegex(),od=Q(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,Gu).getRegex(),sd=Q(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,qu).replace(/punctSpace/g,Ku).replace(/punct/g,Gu).getRegex(),cd=Q(/\\(punct)/,`gu`).replace(/punct/g,Gu).getRegex(),ld=Q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ud=Q(Pu).replace(`(?:-->|$)`,`-->`).getRegex(),dd=Q(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,ud).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),fd=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,pd=Q(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,fd).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),md=Q(/^!?\[(label)\]\[(ref)\]/).replace(`label`,fd).replace(`ref`,Au).getRegex(),hd=Q(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Au).getRegex(),gd=Q(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,md).replace(`nolink`,hd).getRegex(),_d=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,vd={_backpedal:gu,anyPunctuation:cd,autolink:ld,blockSkip:Qu,br:Uu,code:Hu,del:gu,delLDelim:gu,delRDelim:gu,emStrongLDelim:ed,emStrongRDelimAst:rd,emStrongRDelimUnd:ad,escape:Vu,link:pd,nolink:hd,punctuation:Ju,reflink:md,reflinkSearch:gd,tag:dd,text:Wu,url:gu},yd={...vd,link:Q(/^!?\[(label)\]\((.*?)\)/).replace(`label`,fd).getRegex(),reflink:Q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,fd).getRegex()},bd={...vd,emStrongRDelimAst:id,emStrongLDelim:td,delLDelim:od,delRDelim:sd,url:Q(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,_d).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Q(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,_d).getRegex()},xd={...bd,br:Q(Uu).replace(`{2,}`,`*`).getRegex(),text:Q(bd.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Sd={normal:Lu,gfm:zu,pedantic:Bu},Cd={normal:vd,gfm:bd,breaks:xd,pedantic:yd},wd={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Td=e=>wd[e];function Ed(e,t){if(t){if(vu.escapeTest.test(e))return e.replace(vu.escapeReplace,Td)}else if(vu.escapeTestNoEncode.test(e))return e.replace(vu.escapeReplaceNoEncode,Td);return e}function Dd(e){try{e=encodeURI(e).replace(vu.percentDecode,`%`)}catch{return null}return e}function Od(e,t){let n=e.replace(vu.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(vu.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(vu.slashPipe,`|`);return n}function kd(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Ad(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&!t[n].trim();)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function jd(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Md(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Nd(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Pd(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Fd=class{options;rules;lexer;constructor(e){this.options=e||mu}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Ad(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Pd(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=kd(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:kd(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:kd(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=kd(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Md(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Ad(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:kd(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Od(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:kd(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Od(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:kd(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=kd(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=jd(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Nd(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Nd(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Id=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||mu,this.options.tokenizer=this.options.tokenizer||new Fd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:vu,block:Sd.normal,inline:Cd.normal};this.options.pedantic?(t.block=Sd.pedantic,t.inline=Cd.pedantic):this.options.gfm&&(t.block=Sd.gfm,this.options.breaks?t.inline=Cd.breaks:t.inline=Cd.gfm),this.tokenizer.rules=t}static get rules(){return{block:Sd,inline:Cd}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(vu.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(vu.tabCharGlobal,`    `).replace(vu.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let a=t.at(-1);n&&a?.type===`paragraph`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},Ld=class{options;parser;constructor(e){this.options=e||mu}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(vu.notSpaceStart)?.[0],i=e.replace(vu.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Ed(r)+`">`+(n?i:Ed(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Ed(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ed(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Dd(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Ed(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Dd(e);if(i===null)return Ed(n);e=i;let a=`<img src="${e}" alt="${Ed(n)}"`;return t&&(a+=` title="${Ed(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Ed(e.text)}},Rd=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},zd=class e{options;renderer;textRenderer;constructor(e){this.options=e||mu,this.options.renderer=this.options.renderer||new Ld,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Rd}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Bd=class{options;block;constructor(e){this.options=e||mu}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Id.lex:Id.lexInline}provideParser(e=this.block){return e?zd.parse:zd.parseInline}},Vd=new class{defaults=pu();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=zd;Renderer=Ld;TextRenderer=Rd;Lexer=Id;Tokenizer=Fd;Hooks=Bd;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Ld(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Fd(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Bd;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Bd.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Bd.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Id.lex(e,t??this.defaults)}parser(e,t){return zd.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?Id.lex:Id.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?zd.parse:zd.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?Id.lex:Id.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?zd.parse:zd.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Ed(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return Vd.parse(e,t)}$.options=$.setOptions=function(e){return Vd.setOptions(e),$.defaults=Vd.defaults,hu($.defaults),$},$.getDefaults=pu,$.defaults=mu,$.use=function(...e){return Vd.use(...e),$.defaults=Vd.defaults,hu($.defaults),$},$.walkTokens=function(e,t){return Vd.walkTokens(e,t)},$.parseInline=Vd.parseInline,$.Parser=zd,$.parser=zd.parse,$.Renderer=Ld,$.TextRenderer=Rd,$.Lexer=Id,$.lexer=Id.lex,$.Tokenizer=Fd,$.Hooks=Bd,$.parse=$,$.options,$.setOptions,$.use,$.walkTokens,$.parseInline,zd.parse,Id.lex;var Hd=[{slug:`01-古典密码学导论`,title:`第一章 古典密码学导论`,filename:`01-古典密码学导论.md`,content:`# 第一章 古典密码学导论

## 1.1 密码学的基本任务

密码学的直接目标，是让消息在不安全信道中传输时仍能保持机密性。发送方把可读消息变成难以理解的形式，接收方再将其恢复。这一过程通常由三部分组成：

1. 明文：原始消息。
2. 加密算法：把明文变为密文的规则。
3. 密钥：控制规则的参数。

如果没有密钥，仅知道算法也难以恢复明文，则说明算法具有一定保密能力。

在现代密码学中，除了机密性，还强调完整性、认证性和不可否认性等目标；但古典密码学主要围绕“保密通信”展开。

## 1.2 古典密码学的研究对象

古典密码学通常指计算机广泛应用之前，以人工、机械或简单数学规则构造的密码系统。其特点包括：

1. 处理对象通常是字母而非二进制比特。
2. 算法结构相对简单，适合手工计算。
3. 主要依赖字符重排、字母替换和简单数学变换。
4. 安全性常受自然语言统计特征影响。

从结构上看，古典密码主要分为两大类：

### 1. 代换密码

代换密码的核心思想是：把明文符号替换成其他符号，但保持位置关系不变。

例如：

- \`A\` 变成 \`D\`
- \`B\` 变成 \`E\`
- \`C\` 变成 \`F\`

这类密码改变的是“符号内容”。

### 2. 置换密码

置换密码的核心思想是：不改变明文符号本身，而是改变它们的排列顺序。

例如：

- 明文：\`TEAM\`
- 经过置换后：\`META\`

这类密码改变的是“符号位置”。

现代很多密码系统，实际上是代换与置换思想的复杂组合。

## 1.3 密码系统的基本模型

一个密码系统通常可以表示为五元组：

\`(P, C, K, E, D)\`

其中：

- \`P\`：明文空间。
- \`C\`：密文空间。
- \`K\`：密钥空间。
- \`E\`：加密变换集合。
- \`D\`：解密变换集合。

对任意密钥 \`k ∈ K\`，应当存在：

- 加密函数 \`E_k: P -> C\`
- 解密函数 \`D_k: C -> P\`

并满足：

\`D_k(E_k(P)) = P\`

这表示：先加密再解密，能够恢复原始消息。

## 1.4 Kerckhoffs 原则

密码学中一个极其重要的原则是 Kerckhoffs 原则，其思想是：

“密码系统的安全性应依赖于密钥，而不应依赖于算法保密。”

这意味着：

1. 即使攻击者知道加密算法，只要不知道密钥，也不应轻易破解。
2. 把“算法保密”当作主要安全来源是危险的。
3. 真正需要保护的核心对象应是密钥。

古典密码中很多系统在历史上依赖“规则不公开”，但随着规则泄露，系统就会迅速失效。这也是古典密码教学中的重要反思点。

## 1.5 古典密码学中的攻击模型

分析一个密码是否安全，不能只看它如何加密，更要看攻击者掌握什么信息。

### 1. 唯密文攻击

攻击者只得到密文，希望推断明文或密钥。

这是最基础的攻击模型。许多古典密码在此模型下就已经不安全，因为自然语言会暴露明显统计特征。

### 2. 已知明文攻击

攻击者知道部分明文及其对应密文，希望推出密钥或其他明文。

例如已知：

- 明文：\`HELLO\`
- 密文：\`KHOOR\`

便可能推出凯撒位移量为 3。

### 3. 选择明文攻击

攻击者可以主动指定明文，并观察其密文结果。

例如让系统加密：

- \`AAAAA\`
- \`BBBBB\`

从结果中推断密钥结构。

对很多古典密码而言，选择明文攻击往往会迅速暴露规则。

## 1.6 字母到数字的映射

为了方便数学处理，古典密码常将字母映射为数字。最常见约定为：

| 字母 | 数值 |
|---|---|
| A | 0 |
| B | 1 |
| C | 2 |
| ... | ... |
| Z | 25 |

这一映射使得很多加密过程可以写成模 26 运算。

例如，如果把 \`C\` 看作 2，向后位移 3 个位置就得到：

\`2 + 3 = 5\`

5 对应 \`F\`。

当结果超过 25 时，采用模 26 回绕。例如：

\`24 + 5 = 29 ≡ 3 (mod 26)\`

即 \`Y\` 向后位移 5 位得到 \`D\`。

## 1.7 模运算在古典密码中的意义

模运算是古典密码的基础数学工具之一。

### 1. 什么是模运算

\`a ≡ b (mod n)\` 表示 \`a\` 和 \`b\` 除以 \`n\` 后余数相同。

例如：

- \`29 ≡ 3 (mod 26)\`
- \`52 ≡ 0 (mod 26)\`

### 2. 为什么密码学需要模运算

字母表是循环结构，\`Z\` 后面又回到 \`A\`。因此，字母位移天然适合用模运算描述。

### 3. 常见用途

- 凯撒密码中的平移。
- 仿射密码中的线性变换。
- Hill 密码中的矩阵乘法。

## 1.8 古典密码的发展脉络

古典密码并不是零散算法的堆积，而是不断演进的结果。

### 1. 早期简单代换

代表：凯撒密码。

特点：规则简单、易于手工使用，但非常容易被穷举或频率分析破解。

### 2. 一般单表代换

特点：把整个字母表做任意置换，密钥空间增大，但仍保留单字母统计特征。

### 3. 多表代换

代表：维吉尼亚密码。

特点：同一明文字母在不同位置可能映射为不同密文字母，从而削弱单字母频率攻击。

### 4. 多字母整体变换

代表：Playfair 密码、Hill 密码。

特点：不再只对单个字母操作，而是按双字母或多字母分组进行变换。

### 5. 与机械密码的过渡

例如转轮机系统，它们可以看成古典密码思想向现代密码工程化过渡的桥梁。

## 1.9 古典密码的优势与局限

### 1. 优势

1. 原理直观，适合教学。
2. 便于理解密钥、算法、攻击三者关系。
3. 能清晰展示数学工具在密码设计中的作用。

### 2. 局限

1. 密钥空间通常较小。
2. 容易泄露语言统计信息。
3. 缺乏现代安全定义与可证明分析。
4. 难以抵抗系统化攻击和计算机辅助分析。

## 1.10 古典密码学对现代密码学的启示

虽然古典密码已不适合作为现实安全方案，但它们留下了宝贵思想：

### 1. 混淆与扩散

Shannon 提出的“混淆”和“扩散”思想，正是对古典密码优缺点的系统总结。

- 混淆：让密钥与密文的关系尽可能复杂。
- 扩散：让明文的统计结构在密文中被打散。

单表代换偏向混淆，置换偏向扩散，现代密码往往将二者结合。

### 2. 统计攻击的重要性

古典密码大量失败的原因，是没有充分抑制明文统计规律泄露。现代密码设计必须考虑统计分析、差分分析、线性分析等更强攻击。

### 3. 数学条件必须严格

例如 Hill 密码要求密钥矩阵可逆；仿射密码要求乘数与 26 互素。这说明密码设计不是“随便定义一个变换”就可以，必须满足严格数学可逆性。

## 1.11 本章小结

本章建立了古典密码学的基本框架：

1. 古典密码学研究的是以字母级变换为主的传统保密方法。
2. 两大基本结构是代换和置换。
3. 关键术语包括明文、密文、密钥、加密、解密。
4. 模运算和字母数字映射是后续章节的数学基础。
5. 学习古典密码必须同时掌握“如何构造”和“如何破解”。

## 1.12 思考题

1. 为什么说代换密码和置换密码分别改变了消息的不同属性？
2. 为什么 Kerckhoffs 原则在今天仍然适用？
3. 如果一个密码算法必须依靠“不公开算法”才安全，这说明了什么问题？
4. 为什么模运算特别适合描述字母表上的加密变换？
`},{slug:`02-单表代换密码`,title:`第二章 单表代换密码`,filename:`02-单表代换密码.md`,content:`# 第二章 单表代换密码

## 2.1 单表代换密码的基本思想

单表代换密码是最典型的一类古典密码。其基本特点是：

1. 为整个字母表建立一个固定替换表。
2. 同一个明文字母在任何位置都映射为同一个密文字母。
3. 加密过程中字符顺序不变，只改变字符内容。

例如若规定：

- \`A -> Q\`
- \`B -> W\`
- \`C -> E\`

则明文中每次出现 \`A\` 都会被替换为 \`Q\`。

“单表”二字的含义就在于：整个加密过程中只使用一张固定映射表。

## 2.2 凯撒密码

### 2.2.1 基本原理

凯撒密码是最简单、最著名的单表代换密码。其思想是：将每个字母在字母表中向后平移固定的位数。

若位移量为 \`k\`，则加密公式为：

\`C = (P + k) mod 26\`

解密公式为：

\`P = (C - k) mod 26\`

其中 \`P\` 和 \`C\` 分别表示明文字母和密文字母对应的数字值。

### 2.2.2 示例

设密钥 \`k = 3\`，采用 \`A=0, B=1, ..., Z=25\`。

明文：\`HELLO\`

转换为数字：

- \`H = 7\`
- \`E = 4\`
- \`L = 11\`
- \`L = 11\`
- \`O = 14\`

加密后：

- \`7 + 3 = 10 -> K\`
- \`4 + 3 = 7 -> H\`
- \`11 + 3 = 14 -> O\`
- \`11 + 3 = 14 -> O\`
- \`14 + 3 = 17 -> R\`

得到密文：

\`KHOOR\`

### 2.2.3 密钥空间

凯撒密码的密钥就是位移量 \`k\`。由于共有 26 个字母，形式上 \`k\` 取值为 \`0\` 到 \`25\`。但：

- \`k = 0\` 表示不加密；
- \`k = 26\` 与 \`k = 0\` 等价。

所以有效密钥空间非常小，只有 25 种非平凡情况。

### 2.2.4 安全性分析

凯撒密码几乎没有实际安全性，原因有两点：

1. 穷举攻击非常容易，只需尝试有限个偏移量。
2. 字母频率结构完全保留，容易通过统计猜测。

例如英文中 \`E\` 最常见，如果密文中 \`H\` 特别常见，就可能猜测这是由 \`E\` 平移而来。

## 2.3 移位密码的一般形式

凯撒密码本质上是移位密码的一种特殊情况。更一般地，移位密码仍可写成：

\`C = (P + k) mod 26\`

只不过 \`k\` 不再固定为 3，而是任意给定的平移量。

从密码学角度看，凯撒密码和一般移位密码本质相同，差异只在于密钥选取范围。

## 2.4 一般单表代换密码

### 2.4.1 定义

一般单表代换密码不再要求“统一平移”，而是允许将字母表做任意一一映射。

例如：

| 明文 | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 密文 | Q | W | E | R | T | Y | U | I | O | P | A | S | D | F | G | H | J | K | L | Z | X | C | V | B | N | M |

只要满足：

1. 每个明文字母都有唯一对应密文字母。
2. 不同明文字母不会映射到同一个密文字母。

那么该映射就可逆。

### 2.4.2 数学本质

从数学上看，一般单表代换密码对应于字母表上的一个置换，即集合 \`{A, B, ..., Z}\` 到自身的双射。

若用数字表示，就是对集合 \`{0,1,...,25}\` 的一个排列。

### 2.4.3 密钥空间

一般单表代换密码的密钥空间大小为：

\`26!\`

这个数远大于凯撒密码的 25，看起来非常大。但密钥空间大并不意味着一定安全，因为结构性弱点仍然存在。

## 2.5 仿射密码

仿射密码是介于简单移位和一般替换之间的一种重要单表代换密码，其数学形式更清晰，也更适合作为教学案例。

### 2.5.1 加密公式

仿射密码的加密公式为：

\`C = (aP + b) mod 26\`

其中：

- \`a\` 为乘法参数；
- \`b\` 为加法参数；
- \`P\` 为明文字母数值；
- \`C\` 为密文字母数值。

解密公式为：

\`P = a^(-1) (C - b) mod 26\`

其中 \`a^(-1)\` 表示 \`a\` 在模 26 下的乘法逆元。

### 2.5.2 可逆条件

仿射密码不是任意取 \`a\` 都可以解密。要使解密存在，必须保证 \`a\` 在模 26 下可逆，即：

\`gcd(a, 26) = 1\`

因此 \`a\` 必须与 26 互素。

模 26 下可选的 \`a\` 有：

\`1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25\`

共 12 个。

### 2.5.3 示例

设：

- \`a = 5\`
- \`b = 8\`

对明文字母 \`H\` 加密：

- \`H = 7\`
- \`C = (5 * 7 + 8) mod 26 = 43 mod 26 = 17\`
- \`17 -> R\`

因此 \`H\` 加密为 \`R\`。

### 2.5.4 解密示例

继续上例，若密文字母为 \`R = 17\`。

由于 \`5 * 21 = 105 ≡ 1 (mod 26)\`，所以 \`5\` 的逆元为 \`21\`。

于是：

\`P = 21 * (17 - 8) mod 26 = 21 * 9 mod 26 = 189 mod 26 = 7\`

\`7 -> H\`

成功恢复明文。

### 2.5.5 密钥空间

仿射密码的密钥由 \`(a, b)\` 构成，其中：

- \`a\` 有 12 种选择；
- \`b\` 有 26 种选择。

因此密钥空间大小为：

\`12 * 26 = 312\`

虽然比凯撒密码大，但仍非常有限。

## 2.6 单表代换密码的统计弱点

单表代换密码最大的结构性问题在于：

同一明文字母总映射成同一密文字母。

这导致明文的统计特征会被保留下来，只是“标签”变了。

### 2.6.1 单字母频率保留

例如英文中常见字母大致包括：

- \`E\`
- \`T\`
- \`A\`
- \`O\`
- \`I\`
- \`N\`

若某段长密文中某个字母出现次数明显最多，它很可能对应 \`E\` 或 \`T\`。

### 2.6.2 双字母和三字母模式保留

英文中常见双字母有：

- \`TH\`
- \`HE\`
- \`IN\`
- \`ER\`
- \`AN\`

常见三字母有：

- \`THE\`
- \`AND\`
- \`ING\`

单表代换虽然替换了字母，但这些重复结构仍以同样的位置模式出现，因此容易被模式匹配利用。

### 2.6.3 单词轮廓保留

例如某个密文单词模式为：

\`ABCCD\`

这说明：

1. 第 3 个和第 4 个字母相同。
2. 其余字母不同。

攻击者可以用这种“重复模式”匹配可能的英文单词。

## 2.7 单表代换密码的破解思路

### 2.7.1 对凯撒密码的破解

方法最简单，直接穷举所有位移量即可。

步骤：

1. 依次假设 \`k = 1, 2, ..., 25\`。
2. 对密文执行逆移位。
3. 观察哪个结果像正常语言。

### 2.7.2 对一般单表代换密码的破解

通常依赖频率分析和模式分析。

基本流程：

1. 统计密文中每个字母的频率。
2. 结合英文常见频率猜测对应关系。
3. 观察重复字母模式和常见词结构。
4. 逐步修正替换表，直到明文可读。

### 2.7.3 对仿射密码的破解

如果知道是仿射密码，可利用以下方式：

1. 穷举所有 312 个可能密钥。
2. 若有两个明文-密文对应关系，可建立方程求出 \`a\` 和 \`b\`。

设已知：

- \`P1 -> C1\`
- \`P2 -> C2\`

则有：

\`aP1 + b ≡ C1 (mod 26)\`

\`aP2 + b ≡ C2 (mod 26)\`

两式相减可求 \`a\`，再回代求 \`b\`。

## 2.8 典型例题

### 例题 1：凯撒密码加密

将明文 \`MATH\` 用位移量 \`k=4\` 加密。

解：

- \`M = 12 -> 16 -> Q\`
- \`A = 0 -> 4 -> E\`
- \`T = 19 -> 23 -> X\`
- \`H = 7 -> 11 -> L\`

密文为：

\`QEXL\`

### 例题 2：仿射密码加密

设仿射密码参数为 \`a=3, b=5\`，求 \`C\` 的密文。

解：

- \`C = 2\`
- \`(3 * 2 + 5) mod 26 = 11\`
- \`11 -> L\`

故密文为 \`L\`。

### 例题 3：判断仿射参数是否合法

问：\`a=13, b=2\` 是否可用于仿射密码？

解：

因为 \`gcd(13, 26) = 13 != 1\`，13 与 26 不互素，所以 13 在模 26 下不可逆。

因此该参数不合法。

## 2.9 本章小结

1. 单表代换密码的核心是固定替换表。
2. 凯撒密码和仿射密码都可表示为模 26 的代数变换。
3. 一般单表代换密码密钥空间很大，但仍存在显著统计弱点。
4. 可逆性是密码设计的基本要求，仿射密码中体现为 \`a\` 必须与 26 互素。
5. 频率分析是破解单表代换密码的主要手段。

## 2.10 课后练习

1. 将明文 \`SECURITY\` 用凯撒密码 \`k=5\` 加密。
2. 设仿射密码参数为 \`a=7, b=2\`，求明文 \`D\` 的密文。
3. 说明为什么一般单表代换密码无法抵抗频率分析。
4. 已知仿射密码中 \`A -> F\`，\`B -> K\`，求参数 \`a, b\`。
5. 比较凯撒密码和一般单表代换密码在密钥空间与统计安全性上的异同。
`},{slug:`03-多表代换密码`,title:`第三章 多表代换密码`,filename:`03-多表代换密码.md`,content:`# 第三章 多表代换密码

## 3.1 为什么需要多表代换

单表代换密码的最大缺陷，是同一个明文字母总被映射成同一个密文字母，因此明文中的频率信息会直接投影到密文中。为缓解这一问题，人们提出了多表代换思想。

多表代换密码的核心是：

同一明文字母在不同位置上，可以加密成不同密文字母。

这样做的效果是：

1. 打散单字母频率。
2. 降低简单频率分析的有效性。
3. 提高攻击者从密文统计中恢复映射关系的难度。

最典型的多表代换密码就是维吉尼亚密码。

## 3.2 维吉尼亚密码的基本原理

### 3.2.1 核心思想

维吉尼亚密码使用一个关键词作为密钥。将关键词重复到与明文等长，然后每个位置按对应密钥字母的位移量进行加密。

如果记：

- 明文字母数值为 \`P\`
- 密钥字母数值为 \`K\`
- 密文字母数值为 \`C\`

则加密公式为：

\`C = (P + K) mod 26\`

解密公式为：

\`P = (C - K) mod 26\`

这与移位密码形式很像，但区别在于 \`K\` 不再是全程固定常数，而是一个周期变化的序列。

### 3.2.2 关键词展开

例如：

- 明文：\`ATTACKATDAWN\`
- 密钥：\`LEMON\`

将密钥重复展开：

- 明文：\`A T T A C K A T D A W N\`
- 密钥：\`L E M O N L E M O N L E\`

逐位加密即可。

## 3.3 维吉尼亚方阵

维吉尼亚密码常借助维吉尼亚方阵说明。该方阵是一个 26 x 26 的字母表：

1. 第一行是正常字母表 \`A...Z\`。
2. 第二行左移一位。
3. 第三行左移两位。
4. 依此类推。

查表方法：

1. 以密钥字母确定行。
2. 以明文字母确定列。
3. 行列交点即为密文字母。

例如：

- 明文字母为 \`T\`
- 密钥字母为 \`E\`

相当于把 \`T\` 向后平移 4 位，得到 \`X\`。

虽然查表直观，但从本质上说仍然是模 26 加法。

## 3.4 维吉尼亚密码的完整示例

设明文为：

\`ATTACKATDAWN\`

密钥为：

\`LEMON\`

字母数字对应：

- \`A=0, T=19, C=2, K=10, D=3, W=22, N=13\`
- \`L=11, E=4, M=12, O=14, N=13\`

逐位计算：

| 明文 | A | T | T | A | C | K | A | T | D | A | W | N |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 数值 \`P\` | 0 | 19 | 19 | 0 | 2 | 10 | 0 | 19 | 3 | 0 | 22 | 13 |
| 密钥 | L | E | M | O | N | L | E | M | O | N | L | E |
| 数值 \`K\` | 11 | 4 | 12 | 14 | 13 | 11 | 4 | 12 | 14 | 13 | 11 | 4 |
| \`C=(P+K) mod 26\` | 11 | 23 | 5 | 14 | 15 | 21 | 4 | 5 | 17 | 13 | 7 | 17 |
| 密文 | L | X | F | O | P | V | E | F | R | N | H | R |

得到密文：

\`LXFOPVEFRNHR\`

## 3.5 维吉尼亚密码的本质理解

维吉尼亚密码可以看成“多个凯撒密码轮流使用”。

例如密钥 \`LEMON\` 对应 5 个偏移量：

- \`L -> 11\`
- \`E -> 4\`
- \`M -> 12\`
- \`O -> 14\`
- \`N -> 13\`

于是明文第 1、6、11... 个字符用偏移量 11；
第 2、7、12... 个字符用偏移量 4；
以此类推。

如果攻击者不知道密钥长度，那么表面上每个位置都像在使用不同规则，这就比单表代换更难分析。

## 3.6 安全性提升在哪里

维吉尼亚密码相对于单表代换的进步，主要在于：

### 1. 单字母频率被分散

明文中的 \`E\` 不再总加密成同一个字母，而是取决于当前位置对应的密钥字母。

### 2. 同一单词不同位置表现不同

相同字母序列在不同位置上，若密钥对齐方式不同，其密文也不同。

### 3. 简单单表频率分析失效

攻击者无法把整段密文当作一个统一替换表来处理。

## 3.7 维吉尼亚密码的根本弱点

虽然维吉尼亚密码比单表代换更强，但它仍不是现代意义上的安全密码。其核心弱点是：

密钥是周期重复的。

这意味着：

1. 第 \`i\` 位和第 \`i + t\` 位若使用同一密钥字母，则加密规则相同，其中 \`t\` 是密钥长度。
2. 一旦攻击者猜出密钥长度，整个密文就会分解成若干组凯撒密码。
3. 每一组又可以单独做频率分析。

所以，攻击维吉尼亚密码的关键，不是直接猜所有替换，而是先找出密钥周期。

## 3.8 Kasiski 检验

### 3.8.1 基本思想

Kasiski 检验用于估计维吉尼亚密码的密钥长度。

原理是：

1. 若明文中某个片段重复出现。
2. 且这两个片段在加密时恰好使用了相同的密钥对齐位置。
3. 那么它们会产生相同的密文片段。

因此，密文中重复片段之间的距离，往往与密钥长度有关。

### 3.8.2 操作步骤

1. 在密文中寻找重复出现的长度为 3 或以上的子串。
2. 记录这些重复子串出现位置之间的距离。
3. 对多个距离求公因数。
4. 高频公因数往往就是密钥长度或其倍数。

### 3.8.3 示例理解

若某重复片段间隔分别为：

- 12
- 24
- 36

则可能的密钥长度为：

- 2
- 3
- 4
- 6
- 12

再结合频率分析，可以进一步判断最可能的长度。

## 3.9 重合指数法

### 3.9.1 基本概念

重合指数（Index of Coincidence, IC）用于衡量一段文本中字母分布是否接近自然语言。

英文自然文本的 IC 通常约为 0.066，而完全均匀随机文本更接近 0.038。

### 3.9.2 在维吉尼亚攻击中的用途

若假设密钥长度为 \`m\`，就可将密文按位置分成 \`m\` 组：

- 第 1 组：位置 \`1, 1+m, 1+2m, ...\`
- 第 2 组：位置 \`2, 2+m, 2+2m, ...\`
- ...

如果 \`m\` 真的是密钥长度，则每组本质上都是凯撒密码密文，其字母分布应更接近自然语言，因此 IC 会较高。

若 \`m\` 取错，则混合了多个偏移规则，IC 往往偏低。

### 3.9.3 意义

重合指数法比单纯找重复串更稳定，尤其在密文较长时效果较好。

## 3.10 维吉尼亚密码的破解流程

一个典型破解流程如下：

1. 用 Kasiski 检验或重合指数估计密钥长度。
2. 按估计长度将密文分组。
3. 把每组当作一个凯撒密码进行频率分析。
4. 求得每组的位移量。
5. 还原出密钥。
6. 解密整段密文。

这说明维吉尼亚密码虽然增强了防护，但其安全性仍依赖密钥周期不被发现；一旦周期暴露，系统会迅速退化。

## 3.11 自动密钥密码与一次一密的对比

为了克服“重复密钥”的问题，历史上出现过自动密钥思想，即让密钥不再简单重复，而是与明文拼接扩展。这样可以减少周期性泄露，但实现与管理更复杂。

更进一步，如果：

1. 密钥长度与明文等长；
2. 密钥真正随机；
3. 密钥只使用一次；
4. 密钥绝对保密；

则可形成一次一密（One-Time Pad）的思想。一次一密从理论上可达到完美保密，但这已属于现代信息论密码学的重要内容，不再属于一般古典密码范畴。

这里的教学重点在于理解：

“重复使用密钥”往往就是统计攻击得以成立的根源。

## 3.12 本章小结

1. 多表代换密码通过让同一明文字母在不同位置上有不同映射，削弱了单表频率分析。
2. 维吉尼亚密码的数学本质是模 26 的逐位加法。
3. 其安全增强来自“规则随位置变化”，其安全弱点来自“规则周期重复”。
4. Kasiski 检验和重合指数是攻击维吉尼亚密码的关键方法。
5. 学习维吉尼亚密码的重点，是理解“统计隐藏”与“周期泄露”之间的矛盾。

## 3.13 课后练习

1. 用密钥 \`KEY\` 加密明文 \`CRYPTOGRAPHY\`。
2. 解释为什么维吉尼亚密码不能简单地看作“更复杂的凯撒密码”。
3. 为什么发现密钥长度后，维吉尼亚密码会退化为多个凯撒密码？
4. Kasiski 检验为什么依赖密文中的重复片段？
5. 比较单表代换与多表代换在抗频率分析能力上的差异。
`},{slug:`04-置换与多字母古典密码`,title:`第四章 置换与多字母古典密码`,filename:`04-置换与多字母古典密码.md`,content:`# 第四章 置换与多字母古典密码

## 4.1 置换密码的基本思想

与代换密码不同，置换密码并不改变字符本身，而是改变字符的位置顺序。

例如：

- 明文：\`ATTACK\`
- 重排后：\`TATACK\`

字符集合没有变，但排列次序发生了变化。

从信息表示角度看：

- 代换改变“符号身份”；
- 置换改变“符号位置”。

这两类思想后来都被现代分组密码吸收。

## 4.2 栅栏密码

### 4.2.1 原理

栅栏密码（Rail Fence Cipher）是一种典型的简单置换密码。其方法是把明文按折线轨迹写入若干“栏”，再按行读出。

例如使用 3 栏，对明文 \`WEAREDISCOVERED\` 写成：

\`\`\`text
W   E   C   R   L
 E R D S O E E
  A   I   V   D
\`\`\`

按行读出可得到密文。

### 4.2.2 特点

1. 算法直观。
2. 手工实现方便。
3. 安全性较低，因为字符频率完全不变。

栅栏密码适合作为“位置变换”概念的启蒙案例。

## 4.3 列置换密码

### 4.3.1 基本步骤

列置换密码是更典型的置换密码。基本方法如下：

1. 选择一个关键词，确定列数。
2. 将明文按行填入矩阵。
3. 按关键词字母的字典序重新排列列顺序。
4. 按新的列顺序逐列读出密文。

### 4.3.2 示例

设关键词为 \`ZEBRA\`，按字母序排序可得：

- \`A\` 第 5 列
- \`B\` 第 3 列
- \`E\` 第 2 列
- \`R\` 第 4 列
- \`Z\` 第 1 列

若明文为：

\`WEAREDISCOVEREDRUN\`

按 5 列写入：

\`\`\`text
Z E B R A
W E A R E
D I S C O
V E R E D
R U N X X
\`\`\`

其中 \`X\` 为填充字符。

再按 \`A B E R Z\` 对应的列顺序读出密文。

### 4.3.3 安全特点

列置换密码不会改变字母频率，但会打乱相邻关系。因此：

1. 单字母频率分析无效，因为频率不提供列次序。
2. 但双字母、三字母结构被打散。
3. 一旦列数或排列规则被猜中，解密并不困难。

## 4.4 置换密码的优缺点

### 优点

1. 不依赖字母替换表。
2. 能打散局部结构。
3. 与代换密码组合后可显著增强复杂度。

### 缺点

1. 单字母频率完全保留。
2. 许多结构仍可通过试排和模式恢复。
3. 若分组方式明显，容易被逆向推断。

这说明单独使用置换通常也不够安全。

## 4.5 Playfair 密码

### 4.5.1 设计动机

Playfair 密码不是对单个字母加密，而是以两个字母为一组进行代换。这样可以减少单字母频率泄露，提高攻击难度。

### 4.5.2 密钥方阵构造

Playfair 通常构造一个 \`5 x 5\` 字母矩阵：

1. 选定关键词。
2. 去除重复字母。
3. 再按字母表顺序填入剩余字母。
4. 通常将 \`I\` 和 \`J\` 合并。

例如关键词为 \`MONARCHY\`，可得到：

\`\`\`text
M O N A R
C H Y B D
E F G I K
L P Q S T
U V W X Z
\`\`\`

### 4.5.3 明文分组规则

明文处理时要注意：

1. 按两个字母一组分组。
2. 若一组中两个字母相同，则插入填充字母（常用 \`X\`）。
3. 若最后剩一个字母，也需补齐。

例如：

- \`BALLOON\`

可能处理为：

- \`BA LX LO ON\`

### 4.5.4 加密规则

对每个双字母组：

1. 若两个字母在同一行，则各自替换为其右侧字母，末尾循环到行首。
2. 若两个字母在同一列，则各自替换为其下方字母，末尾循环到列首。
3. 若两个字母既不同列也不同行，则取它们构成矩形的另外两个角，且保持同行替换。

### 4.5.5 示例说明

以上面方阵为例，加密 \`AR\`：

- \`A\` 与 \`R\` 在同一行。
- \`A\` 右边是 \`R\`，\`R\` 右边循环回 \`M\`。

所以 \`AR -> RM\`。

若加密 \`MC\`：

- \`M\` 和 \`C\` 在同一列。
- \`M\` 下方是 \`C\`，\`C\` 下方是 \`E\`。

所以 \`MC -> CE\`。

### 4.5.6 安全性特点

Playfair 密码的优点是：

1. 基本单位从单字母提升到双字母。
2. 单字母频率攻击不再直接适用。
3. 常见双字母组合被重新映射。

其弱点是：

1. 仍然保留双字母层面的统计规律。
2. 明文预处理规则会引入可识别痕迹。
3. 密钥方阵结构仍可被逐步恢复。

## 4.6 Hill 密码

### 4.6.1 基本思想

Hill 密码是古典密码中最具数学特色的一类。它使用线性代数中的矩阵变换，对多个字母组成的向量进行整体加密。

若分组长度为 \`n\`，则：

\`C = KP mod 26\`

其中：

- \`P\` 是 \`n x 1\` 的明文列向量；
- \`K\` 是 \`n x n\` 的密钥矩阵；
- \`C\` 是 \`n x 1\` 的密文列向量。

### 4.6.2 2 阶 Hill 密码示例

设密钥矩阵为：

\`\`\`text
| 3 3 |
| 2 5 |
\`\`\`

明文取 \`HI\`：

- \`H = 7\`
- \`I = 8\`

表示为列向量：

\`\`\`text
| 7 |
| 8 |
\`\`\`

则：

\`\`\`text
| 3 3 |   | 7 |   | 45 |
| 2 5 | * | 8 | = | 54 |
\`\`\`

模 26 化简：

- \`45 mod 26 = 19\`
- \`54 mod 26 = 2\`

得到：

\`\`\`text
| 19 |
|  2 |
\`\`\`

即密文为：

\`TC\`

### 4.6.3 解密条件

要想解密，必须计算：

\`P = K^(-1) C mod 26\`

这要求密钥矩阵 \`K\` 在模 26 下可逆。

其必要条件是：

\`gcd(det(K), 26) = 1\`

也就是说，矩阵行列式与 26 必须互素。

### 4.6.4 为什么这个条件重要

如果 \`det(K)\` 与 26 不互素，则其模 26 逆元不存在，矩阵 \`K\` 无法在模 26 下求逆，系统就无法唯一解密。

因此 Hill 密码展示了一个非常重要的密码学思想：

“可解密性不是直觉问题，而是严格数学条件问题。”

### 4.6.5 Hill 密码的优点

1. 多个字母一起变换，能更强地打散统计结构。
2. 一个明文字母会影响多个密文字母，体现初步扩散思想。
3. 形式紧凑，便于与线性代数知识结合。

### 4.6.6 Hill 密码的弱点

1. 是线性变换，结构过于规则。
2. 在已知明文攻击下，容易通过线性方程组求解密钥矩阵。
3. 对填充分组方式也较敏感。

## 4.7 多字母古典密码的共同特征

Playfair 和 Hill 虽然结构不同，但都体现了一个共同趋势：

密码基本操作单元不再是单个字母，而是双字母或多字母分组。

这样做的意义在于：

1. 提升统计分析门槛。
2. 让单个明文字母的影响扩展到更大的结构。
3. 增强密文与明文之间的耦合复杂度。

这也是现代分组密码思想的重要前身。

## 4.8 本章小结

1. 置换密码改变位置，不改变符号；代换密码改变符号，不改变位置。
2. 栅栏密码和列置换密码体现了位置重排思想。
3. Playfair 密码通过双字母分组提高了对单字母分析的抵抗力。
4. Hill 密码把矩阵与模运算引入密码学，是古典密码中的代表性数学模型。
5. 多字母整体变换提高了复杂度，但仍无法抵御系统化分析。

## 4.9 课后练习

1. 比较代换密码与置换密码在信息保持方面的差异。
2. 为什么置换密码的单字母频率与明文完全相同？
3. 简述 Playfair 密码中三条加密规则。
4. 为什么 Hill 密码要求密钥矩阵的行列式与 26 互素？
5. 说明 Hill 密码为什么容易受到已知明文攻击。
`},{slug:`05-古典密码分析方法`,title:`第五章 古典密码分析方法`,filename:`05-古典密码分析方法.md`,content:`# 第五章 古典密码分析方法

## 5.1 密码分析的目标

密码分析的任务，是在未知密钥的情况下，尽可能恢复明文、密钥，或等价的解密规则。

对古典密码而言，攻击往往依赖以下信息源：

1. 语言本身的统计规律。
2. 明文书写习惯和格式特征。
3. 密码算法结构过于简单。
4. 密钥空间较小或具有明显限制。

因此，古典密码分析不仅是“算力搜索”，更是“数学规律 + 语言规律 + 结构规律”的综合利用。

## 5.2 频率分析

### 5.2.1 基本思想

频率分析是破解古典密码最著名的方法之一。其基础事实是：自然语言中字母出现频率并不均匀。

以英文为例，常见字母通常包括：

- \`E\`
- \`T\`
- \`A\`
- \`O\`
- \`I\`
- \`N\`

较少见字母包括：

- \`Q\`
- \`X\`
- \`Z\`

如果一个密码系统不能有效隐藏这些频率规律，就可能被统计分析攻破。

### 5.2.2 对单表代换的作用

若密文中字母 \`K\` 出现次数最多，则它可能对应明文中的 \`E\`。当然这不是绝对结论，但可作为初始猜测。

进一步结合常见双字母、三字母组合，可以逐步修正映射关系。

### 5.2.3 局限

1. 密文太短时统计不稳定。
2. 语言类型不同，频率分布不同。
3. 多表代换会削弱单字母频率分析效果。

## 5.3 模式分析

除了单字母频率，还可以分析重复模式。

### 5.3.1 重复字母模式

例如某密文单词结构为：

\`ABCA\`

说明：

1. 第 1 和第 4 个字母相同。
2. 第 2、3 个字母各不相同。

若怀疑该词是某常见单词，可以利用这种重复结构匹配候选明文。

### 5.3.2 常见词模式

在英语中，一些高频词如：

- \`THE\`
- \`AND\`
- \`OF\`
- \`TO\`
- \`IS\`

经常出现。若密文中存在对应长度和重复模式的高频片段，就可能成为突破口。

## 5.4 穷举攻击

### 5.4.1 概念

穷举攻击是对所有可能密钥逐一尝试，直到得到可理解结果。

### 5.4.2 适用条件

当密钥空间较小时，穷举非常有效。

例如：

- 凯撒密码只有 25 种有效位移。
- 仿射密码只有 312 种有效参数组合。

这种情况下，穷举比复杂统计分析更直接。

### 5.4.3 局限

若密钥空间极大，如一般单表代换的 \`26!\`，直接穷举就不现实。但即便如此，统计规律仍可能使系统不安全。

这说明：

“大密钥空间”不是安全的充分条件。

## 5.5 已知明文攻击

### 5.5.1 思想

若攻击者知道部分明文与其对应密文，就可能直接推出密钥规律。

### 5.5.2 例子

对凯撒密码，若已知：

- \`A -> D\`

立刻知道偏移量为 3。

对仿射密码，若知道两个明文-密文对应关系，通常就足以建立方程求出参数。

对 Hill 密码，若知道足够多的明文块与密文块，就可直接解线性方程组恢复密钥矩阵。

### 5.5.3 启示

这表明许多古典密码对已知明文攻击非常脆弱，因为其结构太规则、参数太少、变换关系过于刚性。

## 5.6 选择明文攻击

### 5.6.1 思想

在更强攻击模型下，攻击者可主动选择要加密的内容。

### 5.6.2 古典密码中的效果

对于结构简单的古典密码，选择明文攻击往往非常致命。

例如：

1. 对单表代换，逐个提交 \`A, B, C, ...\` 就能直接读出替换表。
2. 对 Hill 密码，选择线性无关的明文向量就可恢复密钥矩阵。

这说明古典密码通常没有抵抗主动攻击的能力。

## 5.7 Kasiski 检验与周期发现

对维吉尼亚密码，最关键的问题是找出密钥长度。

Kasiski 检验通过寻找密文重复片段的间距，推测密钥周期。这种方法抓住了“周期重复导致重复对齐”的本质弱点。

一旦周期暴露，多表代换就退化为若干个单表代换子问题。

## 5.8 重合指数分析

重合指数的核心作用，是判断一段文字是否更像自然语言还是更像均匀随机串。

在维吉尼亚密码分析中，可通过不同假设长度进行分组，对每组计算 IC，比较哪些分组更接近自然语言，从而估计密钥长度。

这一方法展示了密码分析中的一个重要观念：

即使看不懂内容，也能通过“统计形态”判断结构。

## 5.9 Hill 密码的线性分析

Hill 密码是线性的，因此特别容易被线性代数方法分析。

设分组长度为 \`n\`，若已知 \`n\` 个线性无关的明文列向量组成矩阵 \`P\`，对应密文矩阵为 \`C\`，则：

\`C = KP mod 26\`

若 \`P\` 在模 26 下可逆，则：

\`K = CP^(-1) mod 26\`

这意味着只要拿到足够多的已知明文块，就能直接算出密钥矩阵。

这也是 Hill 密码虽然“数学味很强”，却并不安全的根本原因之一。

## 5.10 从攻击角度理解安全性

判断一个古典密码是否“更安全”，应从以下角度观察：

### 1. 是否隐藏了单字母频率

若没有，则单表频率分析仍然有效。

### 2. 是否存在周期结构

若有，则攻击者可尝试周期检测与分组破解。

### 3. 是否是线性变换

若是，则已知明文攻击可能转化为方程求解问题。

### 4. 密钥空间是否足够小

若足够小，穷举即可解决问题。

### 5. 是否存在格式、填充、分组等附加规律

这些附加规律常常成为现实攻击的重要线索。

## 5.11 古典密码分析的通用流程

面对一段未知古典密文时，可以按如下顺序分析：

1. 观察密文字符集，是纯字母、数字还是混合。
2. 判断是否保留空格、标点和分词。
3. 统计字母频率，查看是否接近自然语言分布。
4. 观察重复字母、重复片段和固定长度分组。
5. 尝试判断是代换型、置换型还是分组线性型。
6. 若怀疑是凯撒或仿射，先做穷举。
7. 若怀疑是维吉尼亚，先估计周期。
8. 若怀疑是 Hill，寻找已知明文或分组线索。

这是一种从“现象”逆推“结构”的分析思路。

## 5.12 古典密码分析对现代密码学的意义

古典密码分析的意义并不只在于破解老算法，更在于训练现代密码思维。

它告诉我们：

1. 安全性不能只靠“看起来复杂”。
2. 统计规律若未被充分抑制，迟早会泄露信息。
3. 线性结构过强会带来致命弱点。
4. 密钥重复使用往往是系统性风险源头。
5. 算法设计必须从攻击者视角反推安全性。

## 5.13 本章小结

1. 古典密码分析依赖统计、结构和数学规律。
2. 频率分析适合单表代换，Kasiski 和 IC 适合维吉尼亚分析。
3. 穷举攻击对小密钥空间密码非常有效。
4. 已知明文和选择明文攻击会迅速暴露许多古典密码的规则。
5. Hill 密码虽形式高级，但因线性结构而易被分析。

## 5.14 课后练习

1. 为什么“密钥空间大”不是“安全性强”的充分条件？
2. 解释频率分析为什么能攻击单表代换密码。
3. 为什么维吉尼亚密码的攻击关键是先求密钥长度？
4. 写出利用已知明文恢复 Hill 密码密钥矩阵的基本思路。
5. 比较穷举攻击、频率分析和已知明文攻击的适用条件。
`},{slug:`05A-古典密码分析方法详解`,title:`第五章附录 古典密码分析方法详解`,filename:`05A-古典密码分析方法详解.md`,content:`# 第五章附录 古典密码分析方法详解

本附录不是对前一章内容的简单重复，而是把古典密码分析中最常用、最容易在课程展示中用到的方法拆得更细。它适合以下几类读者：

1. 已经知道“频率分析”“Kasiski 检验”等名词，但还不够会讲原理的人。
2. 想把算法演示和理论说明结合起来，做课程汇报或答辩的人。
3. 想知道“为什么这一步能推出下一步”的人。

如果说前一章回答的是“有哪些分析方法”，那么本附录回答的是：

1. 每种方法到底利用了什么信息。
2. 每一步操作为什么合理。
3. 哪些情况下分析会成功，哪些情况下会失效。
4. 这些方法与凯撒密码、维吉尼亚密码、Hill 密码分别是什么关系。

---

## 一、古典密码分析的总体思路

古典密码分析并不是凭直觉乱猜，而是沿着一个相对稳定的分析链路推进。

可以把它概括成下面这张“方法路线图”：

\`\`\`text
拿到密文
   |
   v
观察字符集、长度、分组形式
   |
   v
判断更像哪一类密码
   |
   +--> 若像简单位移或仿射 -> 穷举/代数求解
   |
   +--> 若像单表代换      -> 频率分析 + 模式分析
   |
   +--> 若像维吉尼亚      -> 重复片段搜索 + Kasiski + 重合指数
   |
   +--> 若像 Hill         -> 线性代数 + 已知明文攻击
   |
   v
提出候选密钥或候选结构
   |
   v
验证候选是否能恢复自然语言明文
\`\`\`

从方法论角度看，古典密码分析主要依赖四类线索：

| 线索类型 | 典型表现 | 常见方法 |
|---|---|---|
| 统计线索 | 某些字母明显更常见 | 频率分析、重合指数 |
| 结构线索 | 字母重复、词形重复、片段重复 | 模式分析、Kasiski |
| 数学线索 | 变换可写成代数方程或矩阵关系 | 仿射参数求解、Hill 求逆 |
| 攻击模型线索 | 已知明文或可选明文 | 已知明文攻击、选择明文攻击 |

因此，学习“分析方法”时不要把它理解为零散技巧，而应理解为：

> 攻击者在利用密文中残留的信息。

---

## 二、方法总览表

为了先形成整体印象，可以先看下面这张总览表。

| 方法 | 主要适用对象 | 利用的核心信息 | 典型输出 | 主要局限 |
|---|---|---|---|---|
| 穷举攻击 | 凯撒、仿射、小密钥空间密码 | 密钥空间小 | 正确密钥或候选明文 | 密钥空间大时无效 |
| 频率分析 | 单表代换、凯撒 | 字母频率不均匀 | 映射关系或位移量 | 文本短时不稳定 |
| 模式分析 | 单表代换、置换密码 | 重复字母、词形结构 | 候选单词或局部映射 | 依赖语言经验 |
| Kasiski 检验 | 维吉尼亚密码 | 重复片段的间距 | 候选密钥长度 | 短密文或重复不足时不稳 |
| 重合指数 | 维吉尼亚密码 | 分组后的频率聚集程度 | 更可信的密钥长度 | 需要一定文本长度 |
| 已知明文攻击 | 仿射、Hill 等 | 明文-密文对应关系 | 参数或密钥矩阵 | 需要额外信息 |
| 选择明文攻击 | 多数结构简单密码 | 可主动控制输入 | 直接恢复规则 | 实战场景不总能满足 |

---

## 三、频率分析详解

## 3.1 频率分析为什么成立

频率分析成立的根本原因，不在密码算法本身，而在自然语言本身。

以英文为例：

1. 字母出现频率并不平均。
2. 某些字母如 \`E\`、\`T\`、\`A\`、\`O\`、\`N\` 明显更常见。
3. 某些组合如 \`TH\`、\`HE\`、\`ING\` 明显更常见。

如果一个密码系统没有把这些统计特征打散，那么密文中就会残留“语言指纹”。

英文常见单字母频率可近似看作：

\`\`\`text
E  ************
T  *********
A  ********
O  *******
I  *******
N  *******
Q  *
X  *
Z  *
\`\`\`

这里的星号不是精确数值图，而是为了帮助建立“分布不均匀”的直观印象。

## 3.2 频率分析最适合攻击什么

频率分析最适合攻击：

1. 凯撒密码。
2. 一般单表代换密码。
3. 仿射密码。

它们的共同特征是：

> 同一个明文字母，总会映射到同一个密文字母。

这意味着：

- 明文中 \`E\` 最多。
- 密文里“对应 \`E\` 的那个字母”也仍然最多。

所以统计特征没有消失，只是换了标签。

## 3.3 频率分析怎么做

以单表代换为例，典型流程如下：

\`\`\`text
统计密文每个字母出现次数
      |
      v
找出高频字母
      |
      v
猜测它可能对应 E/T/A/O
      |
      v
结合双字母和常见词模式修正猜测
      |
      v
逐步恢复替换表
\`\`\`

如果是凯撒密码，则更简单：

1. 枚举 25 个位移量。
2. 将每个结果与英文频率分布比较。
3. 选择最像正常英文的结果。

## 3.4 一个简化示例

假设某段密文中统计结果如下：

| 字母 | 次数 |
|---|---|
| K | 18 |
| H | 14 |
| O | 12 |
| 其他 | 较少 |

攻击者可能先猜：

1. \`K\` 对应 \`E\`
2. \`H\` 对应 \`T\`
3. \`O\` 对应 \`A\` 或 \`O\`

这不是结论，而是初始猜测。接着还要看：

1. 是否有高频双字母模式。
2. 是否能拼出合理常见词。
3. 是否与整个密文上下文一致。

所以频率分析不是“一眼看出答案”，而是“先给出最有根据的起点”。

## 3.5 频率分析的局限

频率分析并不是无敌的，它失效或变弱的典型情况有：

1. 密文太短，统计波动太大。
2. 文本语言不是英文，而分析者套用了英文频率。
3. 密码不是单表代换，而是多表代换。
4. 明文本身刻意规避了正常语言统计。

因此，频率分析最重要的前提是：

> 密文足够长，且统计特征尚未被有效打散。

---

## 四、模式分析详解

频率分析关注的是“某个字母出现多少次”，而模式分析关注的是“重复关系和排列结构”。

## 4.1 什么是模式

例如一个单词模式写成：

\`ABCCD\`

这表示：

1. 第 3 个和第 4 个字母相同。
2. 其余字母互不相同。

如果密文中某个高频单词也呈现类似模式，就可以和可能的自然语言单词做匹配。

## 4.2 模式分析能利用哪些对象

模式分析常利用：

1. 重复字母模式，如 \`LETTER\` 中的双 \`T\`。
2. 常见短词模式，如 \`THE\`、\`AND\`。
3. 开头和结尾习惯。
4. 重复片段与固定词形。

## 4.3 一个简单例子

若密文中某个 3 字母高频词反复出现，且模式为：

\`ABC\`

它有可能对应：

- \`THE\`
- \`AND\`
- \`FOR\`
- \`YOU\`

若另一个高频 2 字母词模式为：

\`AB\`

可能对应：

- \`OF\`
- \`TO\`
- \`IN\`
- \`IS\`

频率分析和模式分析结合后，就可以逐步缩小候选范围。

---

## 五、穷举攻击详解

穷举攻击的本质最直接：

> 把所有可能密钥都试一遍。

## 5.1 为什么穷举在古典密码中有效

很多古典密码的密钥空间非常小。

例如：

| 密码 | 有效密钥规模 |
|---|---|
| 凯撒密码 | 25 |
| 仿射密码 | 312 |

对这种规模，计算机枚举几乎是瞬间完成。

## 5.2 穷举的判断标准

穷举之后，如何知道哪个结果是对的？

一般依靠：

1. 结果是否像自然语言。
2. 是否出现常见词。
3. 与字母频率是否匹配。

因此，穷举与频率分析并不是完全分开的，它们常常配合使用。

---

## 六、Kasiski 检验详解

Kasiski 检验是攻击维吉尼亚密码最经典的方法之一。它并不直接求密钥，而是先求：

> 密钥长度。

## 6.1 为什么要求密钥长度

维吉尼亚密码的加密公式是逐位加法，但密钥会周期重复。

如果密钥长度为 \`m\`，那么：

- 第 1、\`1+m\`、\`1+2m\` 位用的是同一个密钥字母。
- 第 2、\`2+m\`、\`2+2m\` 位也用的是另一个固定密钥字母。

一旦知道 \`m\`，就可以把密文按位置分组，每组变成一个凯撒子问题。

所以攻击思路是：

\`\`\`text
先求密钥长度
    |
    v
再按长度分组
    |
    v
每组分别做频率分析
\`\`\`

## 6.2 Kasiski 的核心观察

假设明文里某个片段重复出现，例如：

\`ATTACK ... ATTACK\`

如果这两个重复片段在加密时恰好与密钥对齐方式相同，那么它们会加密成相同的密文片段。

于是攻击者会在密文中观察到：

1. 相同片段重复出现。
2. 这些重复片段之间的距离往往与密钥长度有关。

## 6.3 操作流程

\`\`\`text
在密文中搜索重复片段（通常长度 3~5）
         |
         v
记录每个重复片段的出现位置
         |
         v
计算这些位置之间的间距
         |
         v
寻找这些间距的公因数
         |
         v
把高频公因数作为候选密钥长度
\`\`\`

## 6.4 示例

设密文中发现片段 \`ABC\` 重复出现于位置：

- 10
- 22
- 34

则间距为：

- \`22 - 10 = 12\`
- \`34 - 22 = 12\`
- \`34 - 10 = 24\`

这些间距的公因数包括：

- 2
- 3
- 4
- 6
- 12

如果在其他重复片段中也反复出现 6 或 12，那么它们就会成为更强候选。

## 6.5 为什么 Kasiski 不是直接给出答案

因为重复片段间距可能有以下问题：

1. 重复来自巧合，不一定真由相同明文片段造成。
2. 密钥长度的倍数也会成为候选。
3. 文本较短时，重复片段太少，统计不稳定。

所以 Kasiski 给出的不是“答案”，而是：

> 候选密钥长度集合。

---

## 七、重合指数详解

重合指数（Index of Coincidence, IC）是另一个常用于维吉尼亚分析的方法。

## 7.1 基本想法

若一段文本更接近自然语言，则某些字母会更常见，分布不均匀；
若一段文本更接近随机串，则分布会更平均。

重合指数就是在衡量：

> 这段文本更像自然语言，还是更像均匀随机串。

## 7.2 在维吉尼亚攻击中的作用

假设猜测密钥长度是 \`m\`，就把密文拆成 \`m\` 组：

| 组号 | 取出的字符位置 |
|---|---|
| 第 1 组 | 1, 1+m, 1+2m, ... |
| 第 2 组 | 2, 2+m, 2+2m, ... |
| ... | ... |

如果 \`m\` 猜对了，则每组都更像一个凯撒密文，其统计分布更接近自然语言，IC 会偏高。

如果 \`m\` 猜错了，则每组混杂多个移位规则，IC 会偏低。

## 7.3 Kasiski 与 IC 的关系

二者关系可以理解为：

| 方法 | 作用 |
|---|---|
| Kasiski | 根据重复片段先提出候选长度 |
| IC | 对候选长度做进一步统计验证 |

所以在实际分析中，常常是：

1. 先用 Kasiski 找若干候选。
2. 再用 IC 判断哪个更合理。

---

## 八、已知明文攻击详解

已知明文攻击指的是：

> 攻击者知道一部分明文，以及它对应的密文。

这在古典密码中通常非常致命。

## 8.1 对凯撒密码

若已知：

- \`A -> D\`

那么立刻知道位移量是 3。

## 8.2 对仿射密码

若已知两组对应关系：

- \`P1 -> C1\`
- \`P2 -> C2\`

就能列方程：

\`aP1 + b ≡ C1 (mod 26)\`

\`aP2 + b ≡ C2 (mod 26)\`

从而求出 \`a\` 和 \`b\`。

## 8.3 对 Hill 密码

Hill 密码是线性变换：

\`C = KP mod 26\`

如果拿到足够多的明文块和密文块，就可能通过矩阵求解恢复 \`K\`。

这说明：

> 数学形式越规整，已知明文攻击往往越容易方程化。

---

## 九、选择明文攻击详解

选择明文攻击比已知明文攻击更强，指攻击者能主动提交想加密的内容。

## 9.1 对单表代换

如果能要求系统加密：

- \`A\`
- \`B\`
- \`C\`
- ...

那么整个替换表几乎会被直接读出。

## 9.2 对 Hill 密码

如果可以选择若干线性无关的明文向量，再观察对应密文，就能直接建立矩阵关系并恢复密钥矩阵。

这也是为什么很多古典密码在主动攻击模型下几乎没有抵抗能力。

---

## 十、如何把这些方法讲清楚

如果你要汇报或答辩，可以按下面这个顺序来讲“分析方法”，会更有逻辑。

## 10.1 先讲“利用了什么信息”

例如：

- 频率分析利用字母分布不均匀。
- Kasiski 利用重复片段间距。
- Hill 已知明文攻击利用线性关系。

## 10.2 再讲“为什么这条信息没被隐藏”

例如：

- 凯撒密码没有打散频率。
- 维吉尼亚密码没有避免密钥周期重复。
- Hill 密码是线性的。

## 10.3 再讲“方法步骤”

老师最容易接受的表达是：

1. 先观察什么。
2. 再计算什么。
3. 最后得出什么候选结果。

## 10.4 最后讲“方法边界”

一定要说明：

1. 文本太短时为什么不稳。
2. 为什么有时只能得到候选，而不是唯一答案。
3. 为什么方法依赖具体密码结构。

这会让你的分析显得更成熟。

---

## 十一、课堂展示版总结图

如果要在一页里快速总结，可以用下面这张表：

| 方法 | 一句话理解 | 最适合讲解的密码 | 最关键的弱点 |
|---|---|---|---|
| 频率分析 | 看统计分布有没有被保留 | 凯撒、单表代换 | 统计结构泄露 |
| 模式分析 | 看重复关系和词形结构 | 单表代换 | 重复模式泄露 |
| 穷举攻击 | 把所有密钥都试一遍 | 凯撒、仿射 | 密钥空间太小 |
| Kasiski 检验 | 先猜密钥长度 | 维吉尼亚 | 周期结构泄露 |
| 重合指数 | 判断分组后像不像自然语言 | 维吉尼亚 | 分组统计可分离 |
| 已知明文攻击 | 已知对应关系就能反推参数 | 仿射、Hill | 数学关系太规整 |
| 选择明文攻击 | 主动输入最能暴露规则 | 多数古典密码 | 规则可被探测 |

---

## 十二、本附录小结

通过本附录，应当建立起这样一个认识：

1. 古典密码分析不是“瞎猜”，而是对信息泄露的系统利用。
2. 每一种分析方法，都对应一种特定的“未被隐藏的结构”。
3. 频率分析对应统计泄露，Kasiski 对应周期泄露，已知明文攻击对应数学关系泄露。
4. 真正高水平的讲解，不只是说“它能破”，而是要说清“为什么能破”“怎么一步步破”“什么时候破不动”。

如果把这些关系讲清楚，那么古典密码分析方法这一部分就不只是会做题，而是真正理解了。
`},{slug:`06-习题与综合训练`,title:`第六章 习题与综合训练`,filename:`06-习题与综合训练.md`,content:`# 第六章 习题与综合训练

本章用于巩固前五章内容。习题按照“基础计算题、理解题、分析题、综合题”组织，适合课堂练习、自学检测和考试复习。

## 6.1 基础计算题

### 1. 凯撒密码计算

将明文 \`ATTACK\` 用凯撒密码 \`k=7\` 加密。

要求：

1. 写出每个字母对应数值。
2. 写出模 26 运算过程。
3. 给出最终密文。

### 2. 仿射密码计算

设仿射密码参数为 \`a=5, b=7\`。

1. 求明文 \`B\`、\`Y\` 的密文。
2. 写出解密公式。
3. 说明为什么该参数合法。

### 3. 维吉尼亚密码计算

用密钥 \`MATH\` 加密明文 \`SECURITY\`。

要求写出：

1. 密钥展开过程。
2. 每一位加密的数值计算。
3. 最终密文。

### 4. Hill 密码计算

设 2 阶 Hill 密码密钥矩阵为：

\`\`\`text
| 1 2 |
| 3 5 |
\`\`\`

求明文 \`NO\` 的密文。

提示：先把字母转成数值列向量，再进行矩阵乘法，最后模 26 化简。

## 6.2 概念理解题

1. 什么是代换密码？什么是置换密码？二者的本质区别是什么？
2. 为什么单表代换密码容易受到频率分析攻击？
3. 为什么维吉尼亚密码比凯撒密码更强，但依然不安全？
4. 为什么 Hill 密码要求密钥矩阵在模 26 下可逆？
5. 什么是 Kerckhoffs 原则？它为什么重要？

## 6.3 判断与说明题

请判断下列说法是否正确，并说明理由。

1. 密钥空间越大，密码一定越安全。
2. 置换密码会改变字母频率分布。
3. 若仿射密码中 \`a\` 与 26 不互素，则可能无法解密。
4. 维吉尼亚密码的主要弱点在于密钥周期重复。
5. Hill 密码由于使用矩阵，看起来复杂，因此能抵抗已知明文攻击。

## 6.4 分析题

### 1. 分析单表代换的弱点

请从以下角度分析一般单表代换密码为什么仍可能被攻破：

1. 单字母频率。
2. 常见双字母和三字母模式。
3. 单词轮廓。
4. 人工试探与逐步修正。

### 2. 分析维吉尼亚密码的攻击流程

请按步骤说明如何从一段较长密文出发破解维吉尼亚密码，要求涉及：

1. 重复片段搜索。
2. Kasiski 检验。
3. 密钥长度推测。
4. 分组凯撒分析。
5. 密钥恢复。

### 3. 分析 Hill 密码的数学弱点

请说明：

1. 为什么 Hill 密码本质上是线性变换。
2. 为什么线性结构在已知明文场景下会成为弱点。
3. 为什么“数学形式复杂”不等于“安全性高”。

## 6.5 综合训练题

### 综合题 1：比较题

比较以下密码在“加密结构、数学工具、主要优点、主要弱点、典型攻击方法”五个方面的差异：

1. 凯撒密码
2. 仿射密码
3. 维吉尼亚密码
4. Playfair 密码
5. Hill 密码

### 综合题 2：设计题

假设你只能使用古典密码思想设计一个简单保密方案，请回答：

1. 你会选择代换、置换还是二者结合？
2. 你将如何尽量减少统计特征泄露？
3. 你预期攻击者会从哪些方向攻击？
4. 你的方案仍有哪些先天不足？

此题的重点不在于“设计绝对安全的方案”，而在于训练从设计者和攻击者双视角思考。

### 综合题 3：教材总结题

请用自己的话回答：

1. 古典密码学最核心的三条思想是什么？
2. 古典密码为什么会逐步被现代密码学取代？
3. 学习古典密码对现代信息安全专业学生有什么价值？

## 6.6 参考解题提示

### 提示 1：凯撒与仿射题

关键在于先完成字母到数字的转换，再进行模 26 运算，不要直接凭字母直觉跳步。

### 提示 2：维吉尼亚题

注意密钥是重复展开的，而不是只使用一次。每一位都要使用与之对齐的密钥字母。

### 提示 3：Hill 题

矩阵乘法完成后必须再取模 26；解密时还要判断矩阵是否可逆。

### 提示 4：分析题

不要只写“因为它不安全”，应说明“不安全”是如何产生的，例如：

1. 是否泄露统计规律。
2. 是否存在周期。
3. 是否是线性结构。
4. 是否容易穷举。

## 6.7 模块总复习提纲

考试复习时，可以围绕以下提纲快速回顾：

1. 基本术语：明文、密文、密钥、加密、解密、攻击模型。
2. 两大结构：代换与置换。
3. 凯撒密码：公式、密钥空间、穷举破解。
4. 仿射密码：公式、逆元、合法参数条件。
5. 一般单表代换：密钥空间大但频率泄露严重。
6. 维吉尼亚密码：周期密钥、多表代换、Kasiski、IC。
7. Playfair：双字母分组、矩形替换规则。
8. Hill：矩阵加密、可逆条件、线性弱点。
9. 攻击方法：频率分析、模式分析、穷举、已知明文、选择明文。
10. 核心结论：古典密码是现代密码学的重要起点，但远不足以满足现代安全需求。

## 6.8 结语

如果说现代密码学是高楼，那么古典密码学就是地基中的第一层。它不以现实强安全见长，却以“概念清晰、结构典型、弱点鲜明”而成为密码学教学不可替代的一部分。

真正学会古典密码，不是会背几种算法名字，而是能够回答三个问题：

1. 它为什么这样设计？
2. 它为什么会被破解？
3. 它给现代密码留下了什么思想遗产？

当这三个问题都能回答清楚时，古典密码学模块就真正学明白了。
`},{slug:`07-课程答辩讲稿`,title:`古典密码分析可视化演示课程答辩讲稿`,filename:`07-课程答辩讲稿.md`,content:`# 古典密码分析可视化演示课程答辩讲稿

## 一、使用说明

这份讲稿面向本项目的课程作业答辩，适合配合网页演示系统一起使用。整体建议控制在 6 到 8 分钟，重点不是把所有知识点都讲完，而是讲清楚两件事：

1. 为什么凯撒密码会被频率分析击破。
2. 为什么维吉尼亚密码虽然比凯撒复杂，但仍会因为周期泄露而被 Kasiski 检验分析。

讲的时候建议保持一个主线：

\`先说明对象 -> 再说明弱点 -> 再展示计算过程 -> 最后给出结论\`

---

## 二、开场讲稿

各位老师好，我这次展示的课题是“古典密码分析方法可视化演示”。

本项目不是做一个复杂的软件系统，而是做一个适合课堂讲解和课程答辩的教学型网页。它聚焦两类最典型的古典密码对象，也就是凯撒密码和维吉尼亚密码；对应展示两种经典分析方法，也就是频率分析和 Kasiski 检验。

我希望通过这个项目说明一个核心问题：古典密码之所以会被攻破，不只是因为规则简单，更重要的是它们在加密之后仍然泄露了可被利用的统计结构或者周期结构。

接下来我会先演示凯撒密码的频率分析，再演示维吉尼亚密码的 Kasiski 检验，最后做一个总结。

---

## 三、项目简介页讲稿

现在看到的是项目首页。

这一页主要说明项目目标和整体流程。整个系统采用前后端分离实现，前端使用 \`Vue + Vite\`，后端使用 \`Python\` 提供 Markdown 教材读取接口。页面中既有交互式演示，也有教材化内容，方便把“看结果”和“讲原理”结合起来。

这个项目的核心流程可以概括为四步：

1. 先输入样例或加载预置样例。
2. 然后生成密文。
3. 再对密文执行分析方法。
4. 最后把图表结果、计算过程和文字解释一起展示出来。

这样做的目的，是避免演示只停留在“能跑出结果”，而是把“为什么得到这个结果”也一起展示出来。

---

## 四、凯撒密码页面讲稿

下面我先演示凯撒密码。

凯撒密码本质上是一种单表代换密码。它的加密规则非常简单，就是把每个字母统一向后移动固定的位数。它的数学表达式可以写成：

\`C = (P + k) mod 26\`

其中 \`P\` 表示明文字母对应的数字，\`k\` 表示位移量，\`C\` 表示密文字母对应的数字。

这里我先加载一个标准样例。系统会先对输入文本做规范化处理，也就是只保留 \`A-Z\` 并统一转成大写。这样做是因为后面的频率统计只能建立在统一的字母序列上。

然后页面会展示明文到密文的逐字符映射。这里想说明的是，凯撒密码虽然把字母标签改掉了，但是它没有打乱语言本身的统计分布。比如在英文里本来高频的字母，经过固定平移以后，仍然会以另一个字母的形式继续高频出现。

接着看右边这张频率图。蓝色柱状图表示当前密文的字母频率，橙色曲线表示英文参考频率。这里要强调一个关键点：频率分析关注的不是某一个单独字母，而是整个分布形状。

系统这里还给出了频率统计公式：

\`f_i = n_i / N × 100%\`

也就是先统计每个字母的出现次数 \`n_i\`，再除以样本总长度 \`N\`，得到该字母的观测频率。

接下来再看下面的数学过程。系统会把 25 种可能的位移全部枚举一遍，对每个候选位移都先做逆变换：

\`P_s = (C - s) mod 26\`

然后再用 \`χ²\` 统计量衡量这个候选明文和英文参考分布之间的接近程度：

\`χ²(s) = Σ((O_i - E_i)^2 / E_i)\`

这里 \`O_i\` 是候选明文中的实际计数，\`E_i\` 是根据英文参考频率得到的期望计数。分数越小，说明它越接近自然英文。

所以，凯撒密码可以被较稳定地破解，不只是因为密钥空间很小，还因为它保留了自然语言的统计结构。也就是说，它既容易穷举，也容易被频率分析利用。

---

## 五、自动演示页中凯撒部分讲稿

如果需要更细一点地讲，我会切到自动演示页。

这一页把频率分析拆成了四个连续步骤：

1. 输入规范化。
2. 生成密文映射。
3. 频率分布对比。
4. 枚举位移并评分。

这里的价值在于，它不是一下子把结果丢出来，而是把分析过程完整展开。特别是在步骤三和步骤四，现在页面里已经补充了频率统计表和 \`χ²\` 计算展开表，能更直观地说明“为什么系统判断这个位移最合理”。

如果老师追问“你这个系统做的到底是演示，还是计算”，这里就可以回答：它不是静态讲解页，而是把计算过程和讲解过程绑定在一起，参数一变，图表和统计表都会重新计算。

---

## 六、维吉尼亚密码页面讲稿

下面我演示维吉尼亚密码。

维吉尼亚密码和凯撒密码不同，它不是始终使用同一个位移量，而是根据密钥字母循环变化，所以它属于多表代换密码。正因为同一个明文字母在不同位置可能会被加密成不同字母，所以单纯的单表频率分析效果会明显下降。

但是，这并不意味着它就安全了。它的关键弱点在于密钥是周期重复使用的。只要密钥周期存在，密文中就可能留下重复对齐带来的结构性痕迹。

在这个页面里，系统会先展示明文、密钥循环和密文三者的对应关系。这个环节的重点，是让人看到“周期性”到底来自哪里，而不是把它当成一个抽象结论。

---

## 七、Kasiski 检验讲稿

接下来进入 Kasiski 检验。

Kasiski 检验不是直接求密钥本身，而是先估计密钥长度。它的核心观察是：如果某段明文重复出现，并且两次出现时密钥对齐方式相同，那么加密后就可能形成相同的密文片段。于是，这些重复片段之间的间距，往往和密钥长度有关。

系统的第一步，是自动搜索长度 3 到 5 的重复片段，并把它们用不同颜色高亮标出来。这样做的目的是让重复结构不只是显示在表格里，而是直接出现在密文上，便于观察。

第二步，是计算这些重复片段的出现位置和位置差。比如某个片段分别出现在位置 \`a\` 和 \`b\`，那么它们的间距就是 \`d = b - a\`。

第三步，是对这些间距做因数统计。如果某个长度反复整除多个间距，那么它就更可能是真实密钥长度或它的倍数。页面中现在已经把这个计算过程展示出来了，不只是给一个排序结果，而是把“片段、位置对、间距、可整除候选长度”全部列出来。

第四步，是把密文按候选密钥长度重新分组。比如如果候选长度是 6，就把第 1、7、13 个字符分到一组，把第 2、8、14 个字符分到一组，以此类推。这样拆完以后，每一组实际上都更接近一个单独的凯撒问题。此时再观察每组的频率，就会发现自然语言的统计特征重新开始聚集。

所以，Kasiski 检验的意义在于：它把一个看起来复杂的多表代换问题，重新拆解成若干个相对简单的单表问题。

---

## 八、方法对比页讲稿

接下来可以用方法对比页做一个收束。

凯撒密码的问题在于，它保留了单表代换下的统计结构，所以频率分析可以直接起作用。

维吉尼亚密码虽然削弱了单字母频率分析，但由于密钥周期重复，周期结构仍然泄露出来，所以 Kasiski 检验仍然可以先从重复片段和间距中得到候选密钥长度。

也就是说，这两种方法攻击的不是同一种弱点：

1. 频率分析针对的是统计结构泄露。
2. Kasiski 检验针对的是周期结构泄露。

这也正是我这个项目想表达的重点：密码分析不是“碰运气猜答案”，而是寻找密文中被算法保留下来的结构信息。

---

## 九、结尾讲稿

最后做一个总结。

本项目通过网页可视化的方式，把古典密码分析中的两个经典方法做成了可操作、可观察、可解释的演示流程。它不仅展示了结果，还展示了中间的统计过程和数学依据。

通过凯撒密码的演示，可以看到单表代换虽然改变了字母，但没有打散语言统计分布，所以会被频率分析利用。

通过维吉尼亚密码的演示，可以看到多表代换虽然增强了复杂度，但只要密钥周期重复，重复片段和间距信息仍然会泄露，从而被 Kasiski 检验利用。

这个项目的局限也很明确：它目前聚焦在课堂教学和课程答辩场景，主要支持英文文本，分析方法也只覆盖了最核心的两种经典方法。后续如果继续扩展，可以补充重合指数、单表代换更复杂的模式分析，以及更多古典密码对象。

我的汇报到这里结束，谢谢各位老师。

---

## 十、答辩时容易被问到的问题

### 1. 为什么不用中文演示

因为频率分析和 Kasiski 检验在古典密码教学中通常基于英文字母系统展开，英文 26 个字母的统计分布更稳定，也更容易和标准参考频率对应。

### 2. 为什么凯撒密码既能穷举又能频率分析

因为它同时存在两个弱点：一是位移量只有 25 种可能，二是它保留了自然语言的频率结构。

### 3. 为什么维吉尼亚密码不能直接用单表频率分析

因为同一个明文字母在不同位置不一定映射成同一个密文字母，所以单字母统计被打散了。但如果先用 Kasiski 找到周期，再分组，就又能转化为若干个凯撒问题。

### 4. Kasiski 检验为什么有时不稳定

因为它依赖足够长的密文和足够多的重复片段。如果文本太短，或者重复结构太少，间距统计就不稳定，候选长度可能不明显。

### 5. 你的系统和普通 PPT 的区别是什么

普通 PPT 往往只能静态展示结果，而这个系统把参数输入、图表变化、重复片段高亮、间距计算和文字解释结合起来，更适合演示“分析过程”本身。

---

## 十一、一句话版收尾

如果答辩快结束，或者老师希望你简短总结，可以直接说：

本项目的核心结论是，古典密码被攻破，往往不是因为看起来不够复杂，而是因为它在加密后仍然保留了可利用的统计结构或周期结构；我做的这个系统，就是把这种“结构泄露如何一步步导致破解”可视化地展示出来。
`},{slug:`README`,title:`信息安全古典密码学模块`,filename:`README.md`,content:`# 信息安全古典密码学模块

本模块面向信息安全、密码学、网络空间安全及相关专业的学习者，系统介绍古典密码学的基本概念、典型算法、数学原理与分析方法。整体写作风格尽量接近教材：强调概念定义、原理推导、算法步骤、实例演示和攻击思路，兼顾专业性与可读性。

## 一、模块定位

古典密码学是现代密码学的重要历史基础。尽管凯撒密码、维吉尼亚密码、Playfair 密码、Hill 密码等算法在今天已不适合作为实际安全系统使用，但它们在以下方面仍具有重要教学价值：

1. 帮助理解“明文、密文、密钥、加密、解密、攻击”这些密码学基本概念。
2. 帮助建立“代换”和“置换”两类核心设计思想。
3. 帮助理解模运算、矩阵、频率统计等数学工具在密码学中的应用。
4. 帮助理解现代分组密码和流密码中“混淆”和“扩散”的思想来源。

## 二、学习目标

学完本模块后，应能够：

1. 准确定义古典密码学中的基本术语与安全模型。
2. 掌握单表代换、多表代换、置换密码等基本结构。
3. 能够手工实现典型古典密码的加密与解密过程。
4. 理解仿射密码、Hill 密码等算法背后的数学条件。
5. 能够运用频率分析、重合指数、Kasiski 检验等方法进行密码分析。
6. 从历史与工程视角理解古典密码的局限以及对现代密码的启示。

## 三、章节安排

1. [01-古典密码学导论](./01-古典密码学导论.md)
2. [02-单表代换密码](./02-单表代换密码.md)
3. [03-多表代换密码](./03-多表代换密码.md)
4. [04-置换与多字母古典密码](./04-置换与多字母古典密码.md)
5. [05-古典密码分析方法](./05-古典密码分析方法.md)
6. [05A-古典密码分析方法详解](./05A-古典密码分析方法详解.md)
7. [06-习题与综合训练](./06-习题与综合训练.md)
8. [07-课程答辩讲稿](./07-课程答辩讲稿.md)

## 四、建议学习路径

建议按如下顺序学习：

1. 先阅读“导论”，建立术语和历史背景。
2. 再学习“单表代换密码”，这是最基本的古典密码类型。
3. 然后学习“多表代换密码”，理解如何增强对频率分析的抵抗能力。
4. 接着学习“置换与多字母古典密码”，理解分组、坐标化和线性变换思想。
5. 最后学习“古典密码分析方法”，将前面的算法与攻击对应起来。
6. 再阅读“古典密码分析方法详解”，把核心分析方法的原理、步骤和适用条件串起来。
7. 通过习题与综合训练完成知识内化。
8. 答辩前阅读“课程答辩讲稿”，把系统演示流程和方法讲解顺一遍。

## 五、先修知识

为获得较好的学习效果，建议具备以下基础：

1. 初等代数知识。
2. 模运算基础。
3. 矩阵乘法与行列式基础。
4. 英文字母频率分布的基本认知。

## 六、模块核心主线

整个模块可以围绕三条主线理解：

### 1. 加密结构主线

- 代换：改变字符“是什么”。
- 置换：改变字符“在什么位置”。
- 组合：同时改变内容和位置，从而提高复杂度。

### 2. 数学工具主线

- 模运算：用于字母与数字之间的循环映射。
- 线性代数：用于 Hill 密码等线性变换模型。
- 统计分析：用于频率攻击和模式识别。

### 3. 安全分析主线

- 密钥空间是否足够大。
- 密文是否泄露统计结构。
- 明文结构是否容易被利用。
- 是否可被已知明文、选择明文等攻击击破。

## 七、学习提醒

1. 古典密码的核心不在“能否实际安全使用”，而在“帮助建立密码学思维”。
2. 学习时不要只记公式，应同时关注其设计动机与安全弱点。
3. 手工演算非常重要，尤其是凯撒、仿射、维吉尼亚、Hill 等密码。
4. 当你能同时回答“它如何加密”和“它为何会被攻破”时，才算真正掌握。

## 八、术语约定

本模块默认使用如下记号：

- 明文：加密前的消息，记为 \`P\` 或 plaintext。
- 密文：加密后的消息，记为 \`C\` 或 ciphertext。
- 密钥：控制加密/解密规则的参数，记为 \`K\`。
- 加密函数：\`E_K(P)\`。
- 解密函数：\`D_K(C)\`。
- 字母映射：常用 \`A=0, B=1, ..., Z=25\`。

## 九、延伸思考

在学习过程中可以持续思考以下问题：

1. 为什么“看起来很乱”的密文不一定安全？
2. 为什么“密钥空间增大”并不总能解决根本安全问题？
3. 为什么语言统计特征会成为密码攻击的突破口？
4. 古典密码中的哪些设计思想被现代密码继承和发展？

带着这些问题进入各章节，会更容易形成体系化理解。
`}],Ud=new Map(Hd.map(e=>[e.slug,e])),Wd=[...Hd];function Gd(){return Promise.resolve({docs:Wd.map(({slug:e,title:t,filename:n})=>({slug:e,title:t,filename:n}))})}function Kd(e){let t=Ud.get(e);return t?Promise.resolve({slug:t.slug,title:t.title,filename:t.filename,content:t.content}):Promise.reject(Error(`Document not found: ${e}`))}var qd={class:`page`},Jd={class:`page-hero`},Yd={class:`docs-layout`},Xd={class:`docs-sidebar card`},Zd={class:`doc-links`},Qd={class:`doc-link__index`},$d={class:`card markdown-card`},ef={key:0},tf={key:1},nf={class:`markdown-card__header`},rf={class:`status-pill status-pill--ok`},af=[`innerHTML`],of={class:`doc-pager`},sf={key:1,class:`doc-pager__item doc-pager__item--empty`},cf={key:3,class:`doc-pager__item doc-pager__item--empty`},lf={key:3},uf={key:0,class:`toc-sidebar card`},df={class:`toc-links`},ff=[`href`],pf={__name:`DocsView`,setup(e){$.setOptions({gfm:!0,breaks:!0});function t(e){return e.toLowerCase().replace(/[`~!@#$%^&*()+=|{}[\]:;"'<>,.?/\\]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`).replace(/^-|-$/g,``)}function n(e){let n=e||``,r=[],i=new Map,a=new $.Renderer;return a.heading=({tokens:e,depth:n})=>{let a=e.map(e=>e.raw||``).join(``).trim(),o=t(a)||`section-${r.length+1}`,s=i.get(o)||0;i.set(o,s+1);let c=s?`${o}-${s+1}`:o;return n<=3&&r.push({id:c,text:a,level:n}),`<h${n} id="${c}">${$.Parser.parseInline(e)}</h${n}>`},{toc:r,html:$.parse(n,{renderer:a})}}let r=No(),i=Mo(),a=L([]),o=L(null),s=L(!0),c=L(``),l=K(()=>r.params.slug||``),u=K(()=>a.value.findIndex(e=>e.slug===l.value)),d=K(()=>u.value>0?a.value[u.value-1]:null),f=K(()=>u.value>=0&&u.value<a.value.length-1?a.value[u.value+1]:null),p=K(()=>n(o.value?.content||``)),m=K(()=>p.value.html),h=K(()=>{let e=p.value.toc;return e.length?e[0].level===1?e.slice(1):e:[]});function g(e){return String(e).padStart(2,`0`)}async function _(){s.value=!0,c.value=``;try{if(a.value=(await Gd()).docs||[],!a.value.length){o.value=null;return}let e=l.value||a.value[0].slug;if(!l.value){i.replace(`/docs/${encodeURIComponent(e)}`);return}await v(e)}catch{c.value=`无法读取已打包的 Markdown 静态资源，请确认构建过程包含教材文件。`}finally{s.value=!1}}async function v(e){if(e){s.value=!0,c.value=``;try{o.value=await Kd(e)}catch{c.value=`文档加载失败，可能是 slug 无效或该静态资源未被构建进站点。`,o.value=null}finally{s.value=!1}}}return Mn(()=>r.params.slug,async e=>{typeof e==`string`&&await v(e)}),tr(_),(e,t)=>(H(),U(`section`,qd,[W(`header`,Jd,[t[0]||=W(`div`,null,[W(`p`,{class:`section-tag`},`Markdown Docs / Static Bundle`),W(`h2`,null,`课程 Markdown 分页面浏览`),W(`p`,{class:`page-hero__lead`},` 这一页展示的是静态教材系统。项目会在构建阶段自动收集 Markdown 教材，并把它们直接打进前端包中，因此部署到 GitHub Pages 后也能完整浏览。 `)],-1),W(`div`,{class:A([`status-pill`,{"status-pill--ok":!c.value}])},j(c.value?`静态资源异常`:`静态教材已加载`),3)]),t[10]||=Hi(`<section class="speaker-panel"><div class="speaker-panel__header"><div><p class="section-tag">Presentation Notes</p><h3>演示要点</h3></div><span class="speaker-panel__time">建议 45-60 秒</span></div><div class="speaker-grid"><article class="cue-card cue-card--accent"><span class="cue-card__step">结构说明</span><h4>强调教材已静态打包</h4><p>左侧目录不是手工写死，而是构建阶段自动扫描 Markdown 后生成的静态数据。</p></article><article class="cue-card"><span class="cue-card__step">观察重点</span><h4>点开任意章节</h4><p>说明前端直接读取已打包的 Markdown 正文，再把它渲染成可读页面。</p></article><article class="cue-card"><span class="cue-card__step">结论指向</span><h4>收束到完整静态托管</h4><p>系统不仅能演示算法，也已经具备纯静态托管教材页的能力。</p></article></div></section>`,1),W(`div`,Yd,[W(`aside`,Xd,[t[1]||=W(`div`,{class:`card__header`},[W(`h3`,null,`文档目录`),W(`span`,{class:`hint-chip`},`目录区`)],-1),t[2]||=W(`p`,{class:`soft-text`},[Vi(` 构建阶段会优先扫描项目内的 `),W(`code`,null,`markdown教材`),Vi(` 文件夹，并把 Markdown 一起打进前端静态资源中。 `)],-1),W(`div`,Zd,[(H(!0),U(V,null,B(a.value,(e,t)=>(H(),Ni(R(X),{key:e.slug,class:A([`doc-link`,{"doc-link--active":e.slug===l.value}]),to:`/docs/${encodeURIComponent(e.slug)}`},{default:z(()=>[W(`em`,Qd,j(g(t+1)),1),W(`strong`,null,j(e.title),1),W(`span`,null,j(e.filename),1)]),_:2},1032,[`class`,`to`]))),128))])]),W(`article`,$d,[s.value?(H(),U(`p`,ef,`正在加载 Markdown 内容...`)):c.value?(H(),U(`p`,tf,j(c.value),1)):o.value?(H(),U(V,{key:2},[W(`header`,nf,[W(`div`,null,[t[3]||=W(`p`,{class:`section-tag`},`当前文档`,-1),W(`h3`,null,j(o.value.title),1)]),W(`span`,rf,j(o.value.filename),1)]),t[8]||=W(`div`,{class:`speech-card speech-card--compact`},[W(`p`,null,` 本页展示的是课程教材文档页面。左侧章节列表与右侧正文都来自构建阶段静态收集的 Markdown 资源，浏览器打开后即可直接渲染，因此这个站点已经可以脱离 Python 接口，直接由 GitHub Pages 完整托管。 `)],-1),W(`div`,{class:`markdown-body`,innerHTML:m.value},null,8,af),W(`div`,of,[d.value?(H(),Ni(R(X),{key:0,class:`doc-pager__item`,to:`/docs/${encodeURIComponent(d.value.slug)}`},{default:z(()=>[t[4]||=W(`span`,null,`上一篇`,-1),W(`strong`,null,j(d.value.title),1)]),_:1},8,[`to`])):(H(),U(`div`,sf,[...t[5]||=[W(`span`,null,`上一篇`,-1),W(`strong`,null,`已经是第一篇`,-1)]])),f.value?(H(),Ni(R(X),{key:2,class:`doc-pager__item`,to:`/docs/${encodeURIComponent(f.value.slug)}`},{default:z(()=>[t[6]||=W(`span`,null,`下一篇`,-1),W(`strong`,null,j(f.value.title),1)]),_:1},8,[`to`])):(H(),U(`div`,cf,[...t[7]||=[W(`span`,null,`下一篇`,-1),W(`strong`,null,`已经是最后一篇`,-1)]]))])],64)):(H(),U(`p`,lf,`没有可显示的 Markdown 文档。`))]),o.value&&h.value.length?(H(),U(`aside`,uf,[t[9]||=W(`div`,{class:`card__header`},[W(`h3`,null,`本页目录`),W(`span`,{class:`hint-chip`},`锚点区`)],-1),W(`div`,df,[(H(!0),U(V,null,B(h.value,e=>(H(),U(`a`,{key:e.id,class:A([`toc-link`,[`toc-link--level-${e.level}`]]),href:`#${e.id}`},j(e.text),11,ff))),128))])])):Ui(``,!0)])]))}},mf={class:`page`},hf={class:`card auto-lesson`},gf={class:`card__header`},_f={class:`auto-controls`},vf={class:`lesson-summary`},yf={class:`summary-pill`},bf={class:`auto-progress`},xf=[`onClick`],Sf={class:`grid grid--two`},Cf={class:`card auto-stage`},wf={class:`card__header`},Tf={class:`auto-stage__panel`},Ef={key:0,class:`auto-visual`},Df={class:`code-card`},Of={key:1,class:`auto-visual`},kf={class:`code-card`},Af={class:`mapping-grid`},jf={class:`code-card`},Mf={key:2,class:`auto-visual`},Nf={class:`grid grid--two auto-math-grid`},Pf={class:`code-card`},Ff={class:`table-shell`},If={class:`code-card`},Lf={key:3,class:`auto-visual`},Rf={class:`table-shell`},zf={class:`code-card`},Bf={class:`table-shell`},Vf={class:`card auto-explain`},Hf={class:`method-callout`},Uf={class:`method-callout`},Wf={class:`method-callout`},Gf={class:`speech-card`},Kf={class:`card auto-lesson`},qf={class:`card__header`},Jf={class:`auto-controls`},Yf={class:`lesson-summary`},Xf={class:`summary-pill`},Zf={class:`auto-progress`},Qf=[`onClick`],$f={class:`grid grid--two`},ep={class:`card auto-stage`},tp={class:`card__header`},np={class:`auto-stage__panel`},rp={key:0,class:`auto-visual`},ip={class:`code-card`},ap={class:`code-card`},op={key:1,class:`auto-visual`},sp={class:`code-card`},cp={class:`repeat-badges`},lp={class:`code-card`},up=[`innerHTML`],dp={key:2,class:`auto-visual`},fp={class:`code-card`},pp={class:`table-shell`},mp={key:3,class:`auto-visual`},hp={class:`code-card`},gp={class:`table-shell`},_p={class:`card auto-explain`},vp={class:`method-callout`},yp={class:`method-callout`},bp={class:`method-callout`},xp={class:`speech-card`},Sp=`When Julius Caesar wanted to protect a message, he shifted every letter by the same distance. This regularity is exactly what frequency analysis can exploit.`,Cp=3,wp=`ORANGE`,Tp={__name:`AutoDemoView`,setup(e){let t=Z(Sp),n=Yc(t,Cp),r=el(n),i=Zc(n),a=K(()=>r[0]||null),o=t.slice(0,18).split(``).map((e,t)=>`${e} → ${n[t]}`),s=K(()=>i.slice().sort((e,t)=>t.count-e.count||t.ratio-e.ratio).slice(0,6).map(e=>({...e,reference:Kc[`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.indexOf(e.letter)].toFixed(2)}))),c=K(()=>s.value.slice(0,3).map(e=>`${e.letter}(${e.ratio}%)`).join(`、`)),l=K(()=>a.value?$c(a.value.plaintext).slice(0,6):[]),u=Z(`ATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAYATTACKTHECITYATDAWNTODAY`),d=nl(u,wp),f=rl(d).slice(0,12),p=il(f.flatMap(e=>e.distances)),m=p[0]?.length||0,h=al(d,m).slice(0,6),g=[`#d97706`,`#2563eb`,`#059669`,`#dc2626`,`#7c3aed`,`#0f766e`],_=[`PLAIN : ${u.slice(0,60)}`,`KEY   : ${tl(u.slice(0,60),wp)}`,`CIPHER: ${d.slice(0,60)}`].join(`
`),v=K(()=>f.slice(0,6).map((e,t)=>({...e,color:g[t%g.length]}))),y=K(()=>{let e=[],t=new Set(p.slice(0,5).map(e=>e.length));return v.value.forEach(n=>{for(let r=0;r<n.positions.length;r+=1)for(let i=r+1;i<n.positions.length;i+=1){let a=n.positions[r],o=n.positions[i],s=o-a,c=[];t.forEach(e=>{s%e===0&&c.push(e)}),e.push({ngram:n.ngram,color:n.color,pair:`${a} → ${o}`,distance:s,factors:c.sort((e,t)=>e-t)})}}),e.slice(0,12)}),b=K(()=>m?h.map((e,t)=>{let n=[];for(let e=t+1;e<=d.length&&(n.push(e),!(n.length>=8));e+=m);let r=n.join(`, `)+(d.length>n[n.length-1]?`, ...`:``);return{group:t+1,positions:r,sample:e.slice(0,36)+(e.length>36?`...`:``)}}):[]),x=K(()=>{let e=d;if(!e.length)return``;let t=Array.from({length:e.length},()=>null);v.value.forEach((e,n)=>{let r=e.ngram.length;e.positions.forEach(e=>{for(let i=e;i<e+r&&i<t.length;i+=1)t[i]===null&&(t[i]=n)})});let n=[],r=t[0],i=e[0]||``;for(let a=1;a<e.length;a+=1)t[a]===r?i+=e[a]:(n.push({text:i,owner:r}),i=e[a],r=t[a]);return i&&n.push({text:i,owner:r}),n.map(e=>e.owner===null?`<span>${e.text}</span>`:`<mark class="cipher-highlight__mark" style="--highlight:${v.value[e.owner]?.color||g[0]}">${e.text}</mark>`).join(``)}),S=[{short:`输入规范化`,title:`步骤一：观察输入如何进入分析流程`,principle:`频率分析不是直接从原始文本开始，而是先把文本转换为统一可统计的字母序列。`,action:`系统会先去除空格、标点和大小写差异，只保留 A-Z，以保证后续统计对象一致。`,reason:`如果输入格式不统一，统计结果会被噪声干扰，无法准确体现字母分布。`,conclusion:`因此，规范化不是附属步骤，而是统计分析成立的前提。`},{short:`生成密文`,title:`步骤二：展示凯撒密码如何形成密文`,principle:`凯撒密码对每个字母执行固定偏移，因此加密规则简单但高度规则化。`,action:`页面展示明文到密文的逐字符映射，说明这是统一平移而不是随机替换。`,reason:`由于每次遇到同一个字母都执行同样偏移，所以其出现次数不会消失，只会换成另一个字母标签。`,conclusion:`这意味着明文中的统计高频字母，在密文中仍然会以另一种形式保留下来。`},{short:`频率对比`,title:`步骤三：把密文字母频率与英文参考分布对比`,principle:`自然语言中不同字母的出现频率并不平均，英文尤其明显。`,action:`系统统计 26 个字母在密文中的比例，再与标准英文频率曲线进行同图比较。`,reason:`如果某种加密没有打散统计结构，那么密文的整体分布形状就仍会接近自然语言。`,conclusion:`频率分析抓住的不是单个字母本身，而是整体分布形状。`},{short:`枚举猜测`,title:`步骤四：枚举全部位移并找出最可能明文`,principle:`凯撒密码的密钥空间只有 25 种有效位移，可以全部尝试。`,action:`系统对每个候选位移进行逆变换，并计算其与英文参考分布的接近程度，再排序给出前几名结果。`,reason:`正确位移往往能恢复出最接近自然英文分布的文本，因此统计分数会最优。`,conclusion:`凯撒密码的可破解性，来自小密钥空间和频率结构保留的双重弱点。`}],C=[{short:`周期输入`,title:`步骤一：展示维吉尼亚密码的周期性密钥`,principle:`维吉尼亚密码的强度来自多表代换，但它不是随机变化，而是由密钥周期控制。`,action:`页面同时显示明文、密钥循环和对应密文，帮助观察每一位使用的移位规则来自哪里。`,reason:`只要密钥是重复使用的，同一位置模周期的字符就会共享同一组加密规则。`,conclusion:`因此，维吉尼亚密码的核心矛盾是：规则比凯撒复杂，但周期比凯撒更可利用。`},{short:`重复片段`,title:`步骤二：搜索密文中的重复片段`,principle:`如果明文片段重复，且两次出现时密钥对齐方式相同，那么密文中也会出现重复片段。`,action:`系统自动搜索长度 3 到 5 的重复子串，并列出它们的出现位置。`,reason:`这些重复片段并不一定都有效，但它们为推测密钥周期提供了直接线索。`,conclusion:`Kasiski 检验的入口不是频率，而是重复结构。`},{short:`长度候选`,title:`步骤三：根据片段间距统计候选密钥长度`,principle:`若某段重复密文来自同一密钥对齐方式，则两次出现的间距通常与密钥长度有关。`,action:`系统计算重复片段位置间距，并统计这些间距在 2 到 16 范围内的公因数命中次数。`,reason:`真正的密钥长度或其倍数，往往会在多个间距中反复出现，因此得分更高。`,conclusion:`Kasiski 检验输出的不是密钥本身，而是候选密钥长度。`},{short:`分组验证`,title:`步骤四：按候选长度分组并观察频率重新聚集`,principle:`一旦猜出密钥长度，就可把密文按周期拆成若干组，每组都接近一个单独的凯撒问题。`,action:`系统按最佳候选长度分组，并绘制每组的字母频率曲线。`,reason:`当长度猜对时，同组字符共享同一移位规则，频率分布就会重新表现出自然语言特征。`,conclusion:`这说明维吉尼亚密码虽然削弱了单表频率分析，但仍会因为周期泄露而被分解。`}],w=L(0),T=L(0),ee=L(!0),te=L(!0),E=null,ne=null,D=L(null),re=L(null),ie=L(null),O=null,ae=null,k=null;function oe(e){return String(e).padStart(2,`0`)}function se(e){return{"--repeat-color":e}}function ce(){clearInterval(E),ee.value&&(E=setInterval(()=>{w.value=(w.value+1)%S.length},4200))}function ue(){clearInterval(ne),te.value&&(ne=setInterval(()=>{T.value=(T.value+1)%C.length},5200))}function de(){ee.value=!ee.value}function fe(){te.value=!te.value}function pe(){w.value=0,ee.value=!0}function me(){T.value=0,te.value=!0}function he(e,t){return!e?.value||!window.echarts?null:(t&&t.getDom()!==e.value&&(t.dispose(),t=null),t||=window.echarts.init(e.value),t)}function ge(){O=he(D,O),O&&O.setOption({animationDuration:500,tooltip:{trigger:`axis`},legend:{top:8,textStyle:{color:`#50656f`},data:[`密文字母频率`,`英文参考频率`]},grid:{top:48,left:46,right:18,bottom:36},xAxis:{type:`category`,data:i.map(e=>e.letter),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`%`,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35,79,102,0.08)`}}},series:[{name:`密文字母频率`,type:`bar`,barWidth:`48%`,data:i.map(e=>e.ratio),itemStyle:{color:`#234f66`,borderRadius:[5,5,0,0]}},{name:`英文参考频率`,type:`line`,smooth:!0,data:Kc,lineStyle:{color:`#c46b43`,width:3},itemStyle:{color:`#c46b43`}}]})}function _e(){if(ae=he(re,ae),!ae)return;let e=p.slice(0,8);ae.setOption({animationDuration:500,tooltip:{trigger:`axis`},grid:{top:36,left:46,right:18,bottom:36},xAxis:{type:`category`,data:e.map(e=>String(e.length)),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`得分`,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35,79,102,0.08)`}}},series:[{type:`bar`,barWidth:`52%`,data:e.map(e=>e.score),itemStyle:{color:`#234f66`,borderRadius:[5,5,0,0]}}]})}function ve(){k=he(ie,k),k&&k.setOption({animationDuration:500,tooltip:{trigger:`axis`},legend:{top:8,textStyle:{color:`#50656f`}},grid:{top:48,left:46,right:18,bottom:36},xAxis:{type:`category`,data:`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`%`,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35,79,102,0.08)`}}},series:h.map((e,t)=>({name:`分组 ${t+1}`,type:`line`,smooth:!0,data:Zc(e).map(e=>e.ratio)}))})}function ye(){O?.resize(),ae?.resize(),k?.resize()}return Mn(ee,ce,{immediate:!0}),Mn(te,ue,{immediate:!0}),Mn(w,async()=>{w.value===2&&(await mn(),ge())}),Mn(T,async()=>{T.value===2&&(await mn(),_e()),T.value===3&&(await mn(),ve())}),tr(()=>{window.addEventListener(`resize`,ye),ge(),_e(),ve()}),ir(()=>{clearInterval(E),clearInterval(ne),window.removeEventListener(`resize`,ye),O?.dispose(),ae?.dispose(),k?.dispose()}),(e,i)=>(H(),U(`section`,mf,[i[38]||=Hi(`<header class="page-hero"><div><p class="section-tag">Auto Demo / Rich Media Lesson</p><h2>分析方法自动演示板块</h2><p class="page-hero__lead"> 这个板块把两种核心分析方法拆成自动播放的讲解流程。页面会依次展示输入、处理中间状态、统计图表和方法结论， 让用户不依赖人工讲解也能理解“方法为什么成立、步骤如何推进、结论如何得出”。 </p></div><div class="topbar__pill-group"><span class="topbar__pill">自动播放</span><span class="topbar__pill">图表联动</span><span class="topbar__pill">逐步讲解</span></div></header>`,1),W(`article`,hf,[W(`div`,gf,[i[0]||=W(`div`,null,[W(`p`,{class:`section-tag`},`Lesson A`),W(`h3`,null,`频率分析自动演示`)],-1),W(`div`,_f,[W(`button`,{class:`action-button`,onClick:de},j(ee.value?`暂停`:`播放`),1),W(`button`,{class:`action-button action-button--ghost`,onClick:pe},`重置`)])]),W(`div`,vf,[i[2]||=W(`div`,{class:`summary-pill`},[W(`span`,null,`分析对象`),W(`strong`,null,`凯撒密码`)],-1),i[3]||=W(`div`,{class:`summary-pill`},[W(`span`,null,`核心弱点`),W(`strong`,null,`频率结构保留`)],-1),W(`div`,yf,[i[1]||=W(`span`,null,`当前步骤`,-1),W(`strong`,null,j(S[w.value].title),1)])]),W(`div`,bf,[(H(),U(V,null,B(S,(e,t)=>W(`button`,{key:e.title,class:A([`auto-progress__step`,{"auto-progress__step--active":t===w.value}]),onClick:e=>w.value=t},[W(`em`,null,j(oe(t+1)),1),W(`span`,null,j(e.short),1)],10,xf)),64))]),W(`div`,Sf,[W(`article`,Cf,[W(`div`,wf,[W(`h4`,null,j(S[w.value].title),1),i[4]||=W(`span`,{class:`hint-chip`},`自动讲解`,-1)]),W(`div`,Tf,[w.value===0?(H(),U(`div`,Ef,[W(`div`,{class:`code-card`},[i[5]||=W(`h4`,null,`原始明文`,-1),W(`p`,null,j(Sp))]),W(`div`,Df,[i[6]||=W(`h4`,null,`规范化结果`,-1),W(`p`,null,j(R(t)),1)])])):w.value===1?(H(),U(`div`,Of,[W(`div`,kf,[i[7]||=W(`h4`,null,`明文 → 密文映射`,-1),W(`div`,Af,[(H(!0),U(V,null,B(R(o),e=>(H(),U(`span`,{key:e,class:`mapping-chip`},j(e),1))),128))])]),W(`div`,jf,[i[8]||=W(`h4`,null,`生成密文`,-1),W(`p`,null,j(R(n)),1)])])):w.value===2?(H(),U(`div`,Mf,[W(`div`,{ref_key:`caesarChartRef`,ref:D,class:`chart chart--wide`},null,512),W(`div`,Nf,[W(`div`,Pf,[i[10]||=W(`h4`,null,`频率统计公式`,-1),i[11]||=W(`p`,null,"先对密文统计每个字母出现次数 `n_i`，再按公式 `f_i = n_i / N × 100%` 转成频率。",-1),W(`p`,null,"当前样本长度 `N = "+j(R(n).length)+"`，最高频的几个字母如下。",1),W(`div`,Ff,[W(`table`,null,[i[9]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`字母`),W(`th`,null,`n_i`),W(`th`,null,`f_i`),W(`th`,null,`英文参考`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(s.value,e=>(H(),U(`tr`,{key:e.letter},[W(`td`,null,j(e.letter),1),W(`td`,null,j(e.count),1),W(`td`,null,j(e.ratio)+`%`,1),W(`td`,null,j(e.reference)+`%`,1)]))),128))])])])]),W(`div`,If,[i[12]||=W(`h4`,null,`这一图到底在比较什么`,-1),i[13]||=W(`p`,null,"凯撒加密满足 `C = (P + k) mod 26`。它改变的是字母标签，不改变整段文本“谁高频、谁低频”的总体形状。",-1),W(`p`,null,` 因此图中真正有意义的不是某一个柱子本身，而是整条分布曲线是否仍接近英文参考分布。 当前最显著的密文字母为 `+j(c.value)+`。 `,1)])])])):(H(),U(`div`,Lf,[W(`div`,Rf,[W(`table`,null,[i[14]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`排名`),W(`th`,null,`位移`),W(`th`,null,`分数`),W(`th`,null,`候选明文`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(R(r).slice(0,3),(e,t)=>(H(),U(`tr`,{key:e.shift},[W(`td`,null,j(t+1),1),W(`td`,null,j(e.shift),1),W(`td`,null,j(e.score),1),W(`td`,null,j(R(ol)(e.plaintext,44)),1)]))),128))])])]),W(`div`,zf,[i[16]||=W(`h4`,null,`最佳候选的 χ² 计算展开`,-1),i[17]||=W(`p`,null," 对每个候选位移 `s`，系统先按 `P_s = (C - s) mod 26` 解出候选明文，再计算 `χ²(s) = Σ((O_i - E_i)^2 / E_i)`。分数越小，越接近英文。 ",-1),W(`div`,Bf,[W(`table`,null,[i[15]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`字母`),W(`th`,null,`O_i`),W(`th`,null,`E_i`),W(`th`,null,`差值`),W(`th`,null,`贡献值`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(l.value,e=>(H(),U(`tr`,{key:e.letter},[W(`td`,null,j(e.letter),1),W(`td`,null,j(e.observed),1),W(`td`,null,j(e.expected),1),W(`td`,null,j(e.diff),1),W(`td`,null,j(e.contribution),1)]))),128))])])])])]))])]),W(`article`,Vf,[i[21]||=W(`div`,{class:`card__header`},[W(`h4`,null,`方法说明`),W(`span`,{class:`hint-chip hint-chip--warm`},`详细说明`)],-1),W(`div`,Hf,[i[18]||=W(`h5`,null,`原理`,-1),W(`p`,null,j(S[w.value].principle),1)]),W(`div`,Uf,[i[19]||=W(`h5`,null,`当前操作`,-1),W(`p`,null,j(S[w.value].action),1)]),W(`div`,Wf,[i[20]||=W(`h5`,null,`为什么有效`,-1),W(`p`,null,j(S[w.value].reason),1)]),W(`div`,Gf,[W(`p`,null,j(S[w.value].conclusion),1)])])])]),W(`article`,Kf,[W(`div`,qf,[i[22]||=W(`div`,null,[W(`p`,{class:`section-tag`},`Lesson B`),W(`h3`,null,`Kasiski 检验自动演示`)],-1),W(`div`,Jf,[W(`button`,{class:`action-button`,onClick:fe},j(te.value?`暂停`:`播放`),1),W(`button`,{class:`action-button action-button--ghost`,onClick:me},`重置`)])]),W(`div`,Yf,[i[24]||=W(`div`,{class:`summary-pill`},[W(`span`,null,`分析对象`),W(`strong`,null,`维吉尼亚密码`)],-1),i[25]||=W(`div`,{class:`summary-pill`},[W(`span`,null,`核心弱点`),W(`strong`,null,`密钥周期重复`)],-1),W(`div`,Xf,[i[23]||=W(`span`,null,`当前步骤`,-1),W(`strong`,null,j(C[T.value].title),1)])]),W(`div`,Zf,[(H(),U(V,null,B(C,(e,t)=>W(`button`,{key:e.title,class:A([`auto-progress__step`,{"auto-progress__step--active":t===T.value}]),onClick:e=>T.value=t},[W(`em`,null,j(oe(t+1)),1),W(`span`,null,j(e.short),1)],10,Qf)),64))]),W(`div`,$f,[W(`article`,ep,[W(`div`,tp,[W(`h4`,null,j(C[T.value].title),1),i[26]||=W(`span`,{class:`hint-chip`},`自动讲解`,-1)]),W(`div`,np,[T.value===0?(H(),U(`div`,rp,[W(`div`,ip,[i[27]||=W(`h4`,null,`规范化明文`,-1),W(`p`,null,j(R(u)),1)]),W(`div`,ap,[i[28]||=W(`h4`,null,`密钥循环`,-1),W(`pre`,null,j(R(_)),1)])])):T.value===1?(H(),U(`div`,op,[W(`div`,sp,[i[29]||=W(`h4`,null,`重复片段`,-1),W(`div`,cp,[(H(!0),U(V,null,B(v.value,e=>(H(),U(`span`,{key:`${e.ngram}-${e.positions.join(`-`)}`,class:`repeat-badge`,style:le(se(e.color))},j(e.ngram)+` · `+j(e.positions.join(`/`)),5))),128))])]),W(`div`,lp,[i[30]||=W(`h4`,null,`分析密文（重复片段高亮）`,-1),W(`p`,{class:`cipher-highlight`,innerHTML:x.value},null,8,up)])])):T.value===2?(H(),U(`div`,dp,[W(`div`,fp,[i[32]||=W(`h4`,null,`间距与候选长度计算`,-1),W(`div`,pp,[W(`table`,null,[i[31]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`重复片段`),W(`th`,null,`位置对`),W(`th`,null,`间距`),W(`th`,null,`可整除候选长度`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(y.value,e=>(H(),U(`tr`,{key:`${e.ngram}-${e.pair}-${e.distance}`},[W(`td`,null,[W(`span`,{class:`repeat-badge`,style:le(se(e.color))},j(e.ngram),5)]),W(`td`,null,j(e.pair),1),W(`td`,null,j(e.distance),1),W(`td`,null,j(e.factors.join(`、`)||`-`),1)]))),128))])])])]),W(`div`,{ref_key:`vigenereLengthChartRef`,ref:re,class:`chart chart--wide`},null,512)])):(H(),U(`div`,mp,[W(`div`,hp,[W(`h4`,null,`按候选长度 `+j(R(m))+` 分组`,1),W(`div`,gp,[W(`table`,null,[i[33]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`分组`),W(`th`,null,`取字符位置`),W(`th`,null,`组内样本`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(b.value,e=>(H(),U(`tr`,{key:e.group},[W(`td`,null,`分组 `+j(e.group),1),W(`td`,null,j(e.positions),1),W(`td`,null,j(e.sample),1)]))),128))])])])]),W(`div`,{ref_key:`vigenereGroupChartRef`,ref:ie,class:`chart chart--wide`},null,512)]))])]),W(`article`,_p,[i[37]||=W(`div`,{class:`card__header`},[W(`h4`,null,`方法说明`),W(`span`,{class:`hint-chip hint-chip--warm`},`详细说明`)],-1),W(`div`,vp,[i[34]||=W(`h5`,null,`原理`,-1),W(`p`,null,j(C[T.value].principle),1)]),W(`div`,yp,[i[35]||=W(`h5`,null,`当前操作`,-1),W(`p`,null,j(C[T.value].action),1)]),W(`div`,bp,[i[36]||=W(`h5`,null,`为什么有效`,-1),W(`p`,null,j(C[T.value].reason),1)]),W(`div`,xp,[W(`p`,null,j(C[T.value].conclusion),1)])])])])]))}},Ep={class:`page`},Dp=`http://127.0.0.1:5174/`,Op=`../密码学与信息论交叉学习网站/frontend/dist/index.html`,kp=`cd d:\\Users\\printf\\Downloads\\信息安全数学\\密码学与信息论交叉学习网站\\frontend\\nnpm run dev`,Ap=`cd d:\\Users\\printf\\Downloads\\信息安全数学\\密码学与信息论交叉学习网站\\frontend\\nnpm run build`,jp=yc({history:Bs(`/classical-crypto/`),routes:[{path:`/`,name:`home`,component:Wc},{path:`/auto-demo`,name:`auto-demo`,component:Tp},{path:`/caesar`,name:`caesar`,component:Rl},{path:`/vigenere`,name:`vigenere`,component:fu},{path:`/cross-learning`,name:`cross-learning`,component:{__name:`CrossPortalView`,setup(e){return(e,t)=>(H(),U(`section`,Ep,[W(`header`,{class:`page-hero`},[t[0]||=W(`div`,null,[W(`p`,{class:`section-tag`},`New Course Portal`),W(`h2`,null,`密码学与信息论交叉学习网站入口`),W(`p`,{class:`page-hero__lead`},` 这里是从原有古典密码课程站进入新专题站的入口页。新站延续了当前网站“导学 + 互动演示 + 教材阅读”的教学方式，但主题已经扩展到密码学与信息论交叉。 `)],-1),W(`div`,{class:`action-row`},[W(`a`,{class:`action-button`,href:Dp,target:`_blank`,rel:`noreferrer`},`打开本地新站`),W(`a`,{class:`action-button action-button--ghost`,href:Op,target:`_blank`,rel:`noreferrer`},`尝试打开静态首页`)])]),t[5]||=Hi(`<section class="speaker-panel"><div class="speaker-panel__header"><div><p class="section-tag">Presentation Notes</p><h3>入口说明</h3></div><span class="speaker-panel__time">建议 20-30 秒</span></div><div class="speaker-grid"><article class="cue-card cue-card--accent"><span class="cue-card__step">入口定位</span><h4>旧站继续保留</h4><p>古典密码站仍然负责原有课程展示，新站作为交叉专题的独立学习网站存在。</p></article><article class="cue-card"><span class="cue-card__step">新站内容</span><h4>主题已扩展</h4><p>新站重点讲熵、完美保密、压缩、纠错、随机性、信息泄露与现代密码设计思想。</p></article><article class="cue-card"><span class="cue-card__step">使用方式</span><h4>可本地并行运行</h4><p>新站默认开发端口为 5174，因此可以与当前古典密码站同时本地启动。</p></article></div></section>`,1),W(`div`,{class:`grid grid--two`},[t[4]||=W(`article`,{class:`card feature-card`},[W(`h3`,null,`新站包含什么`),W(`ul`,{class:`bullet-list`},[W(`li`,null,`首页导学与学习路径。`),W(`li`,null,`交叉概念互动页。`),W(`li`,null,`自动演示板块。`),W(`li`,null,`静态 Markdown 教材页。`),W(`li`,null,`课堂练习与讨论页。`)])],-1),W(`article`,{class:`card`},[t[3]||=W(`h3`,null,`本地打开方式`,-1),W(`div`,{class:`code-card`},[t[1]||=W(`h4`,null,`开发模式`,-1),W(`pre`,null,j(kp))]),W(`div`,{class:`code-card`},[t[2]||=W(`h4`,null,`静态构建`,-1),W(`pre`,null,j(Ap))])])]),t[6]||=W(`article`,{class:`card close-card`},[W(`h3`,null,`本页结论`),W(`blockquote`,null,` 原有古典密码站现在已经提供了进入“密码学与信息论交叉学习网站”的入口。课堂上你可以先用古典密码站讲历史基础，再从这里切到新站讲交叉专题。 `)],-1)]))}}},{path:`/docs/:slug?`,name:`docs`,component:pf,props:!0}],scrollBehavior(){return{top:0}}});mo(Tc).use(jp).mount(`#app`);