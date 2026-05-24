(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,ie=te(e=>e.replace(re,`-$1`).toLowerCase()),ae=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),oe=te(e=>e?`on${ae(e)}`:``),E=(e,t)=>!Object.is(e,t),se=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},D=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ce=e=>{let t=parseFloat(e);return isNaN(t)?e:t},le,ue=()=>le||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function de(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?he(r):de(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var fe=/;(?![^(]*\))/g,pe=/:([^]+)/,me=/\/\*[^]*?\*\//g;function he(e){let t={};return e.replace(me,``).split(fe).forEach(e=>{if(e){let n=e.split(pe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ge(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=ge(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var _e=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ve=e(_e);_e+``;function ye(e){return!!e||e===``}function be(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=xe(e[r],t[r]);return n}function xe(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?be(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!xe(e[n],t[n]))return!1}}return String(e)===String(t)}function Se(e,t){return e.findIndex(e=>xe(e,t))}var Ce=e=>!!(e&&e.__v_isRef===!0),O=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?Ce(e)?O(e.value):JSON.stringify(e,we,2):String(e),we=(e,t)=>Ce(t)?we(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Te(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Te(e))}:_(t)?Te(t):v(t)&&!d(t)&&!C(t)?String(t):t,Te=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,Ee,De=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=Ee;try{return Ee=this,e()}finally{Ee=t}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){this._on>0&&--this._on===0&&(Ee=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Oe(){return Ee}var k,ke=new WeakSet,Ae=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ke.has(this)&&(ke.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qe(this),Le(this);let e=k,t=Ue;k=this,Ue=!0;try{return this.fn()}finally{Re(this),k=e,Ue=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ve(e);this.deps=this.depsTail=void 0,qe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ke.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ze(this)&&this.run()}get dirty(){return ze(this)}},je=0,Me,Ne;function Pe(e,t=!1){if(e.flags|=8,t){e.next=Ne,Ne=e;return}e.next=Me,Me=e}function Fe(){je++}function Ie(){if(--je>0)return;if(Ne){let e=Ne;for(Ne=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Me;){let t=Me;for(Me=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Le(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Re(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ve(r),He(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function ze(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Be(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Be(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Je)||(e.globalVersion=Je,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ze(e))))return;e.flags|=2;let t=e.dep,n=k,r=Ue;k=e,Ue=!0;try{Le(e);let n=e.fn(e._value);(t.version===0||E(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{k=n,Ue=r,Re(e),e.flags&=-3}}function Ve(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ve(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function He(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ue=!0,We=[];function Ge(){We.push(Ue),Ue=!1}function Ke(){let e=We.pop();Ue=e===void 0?!0:e}function qe(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=k;k=void 0;try{t()}finally{k=e}}}var Je=0,Ye=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Xe=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!k||!Ue||k===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==k)t=this.activeLink=new Ye(k,this),k.deps?(t.prevDep=k.depsTail,k.depsTail.nextDep=t,k.depsTail=t):k.deps=k.depsTail=t,Ze(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=k.depsTail,t.nextDep=void 0,k.depsTail.nextDep=t,k.depsTail=t,k.deps===t&&(k.deps=e)}return t}trigger(e){this.version++,Je++,this.notify(e)}notify(e){Fe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ie()}}};function Ze(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ze(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Qe=new WeakMap,$e=Symbol(``),et=Symbol(``),tt=Symbol(``);function A(e,t,n){if(Ue&&k){let t=Qe.get(e);t||Qe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Xe),r.map=t,r.key=n),r.track()}}function nt(e,t,n,r,i,a){let o=Qe.get(e);if(!o){Je++;return}let s=e=>{e&&e.trigger()};if(Fe(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===tt||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(tt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get($e)),f(e)&&s(o.get(et)));break;case`delete`:i||(s(o.get($e)),f(e)&&s(o.get(et)));break;case`set`:f(e)&&s(o.get($e));break}}Ie()}function rt(e){let t=j(e);return t===e?t:(A(t,`iterate`,tt),Ut(e)?t:t.map(Kt))}function it(e){return A(e=j(e),`iterate`,tt),e}function at(e,t){return Ht(e)?qt(Vt(e)?Kt(t):t):Kt(t)}var ot={__proto__:null,[Symbol.iterator](){return st(this,Symbol.iterator,e=>at(this,e))},concat(...e){return rt(this).concat(...e.map(e=>d(e)?rt(e):e))},entries(){return st(this,`entries`,e=>(e[1]=at(this,e[1]),e))},every(e,t){return lt(this,`every`,e,t,void 0,arguments)},filter(e,t){return lt(this,`filter`,e,t,e=>e.map(e=>at(this,e)),arguments)},find(e,t){return lt(this,`find`,e,t,e=>at(this,e),arguments)},findIndex(e,t){return lt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return lt(this,`findLast`,e,t,e=>at(this,e),arguments)},findLastIndex(e,t){return lt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return lt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return dt(this,`includes`,e)},indexOf(...e){return dt(this,`indexOf`,e)},join(e){return rt(this).join(e)},lastIndexOf(...e){return dt(this,`lastIndexOf`,e)},map(e,t){return lt(this,`map`,e,t,void 0,arguments)},pop(){return ft(this,`pop`)},push(...e){return ft(this,`push`,e)},reduce(e,...t){return ut(this,`reduce`,e,t)},reduceRight(e,...t){return ut(this,`reduceRight`,e,t)},shift(){return ft(this,`shift`)},some(e,t){return lt(this,`some`,e,t,void 0,arguments)},splice(...e){return ft(this,`splice`,e)},toReversed(){return rt(this).toReversed()},toSorted(e){return rt(this).toSorted(e)},toSpliced(...e){return rt(this).toSpliced(...e)},unshift(...e){return ft(this,`unshift`,e)},values(){return st(this,`values`,e=>at(this,e))}};function st(e,t,n){let r=it(e),i=r[t]();return r!==e&&!Ut(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ct=Array.prototype;function lt(e,t,n,r,i,a){let o=it(e),s=o!==e&&!Ut(e),c=o[t];if(c!==ct[t]){let t=c.apply(e,a);return s?Kt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,at(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ut(e,t,n,r){let i=it(e),a=i!==e&&!Ut(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=at(e,t)),n.call(this,t,at(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?at(e,c):c}function dt(e,t,n){let r=j(e);A(r,`iterate`,tt);let i=r[t](...n);return(i===-1||i===!1)&&Wt(n[0])?(n[0]=j(n[0]),r[t](...n)):i}function ft(e,t,n=[]){Ge(),Fe();let r=j(e)[t].apply(e,n);return Ie(),Ke(),r}var pt=e(`__proto__,__v_isRef,__isVue`),mt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ht(e){_(e)||(e=String(e));let t=j(this);return A(t,`has`,e),t.hasOwnProperty(e)}var gt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Pt:Nt:i?Mt:jt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=ot[t]))return e;if(t===`hasOwnProperty`)return ht}let o=Reflect.get(e,t,M(e)?e:n);if((_(t)?mt.has(t):pt(t))||(r||A(e,`get`,t),i))return o;if(M(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?zt(e):e}return v(o)?r?zt(o):Lt(o):o}},_t=class extends gt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Ht(i);if(!Ut(n)&&!Ht(n)&&(i=j(i),n=j(n)),!a&&M(i)&&!M(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,M(e)?e:r);return e===j(r)&&(o?E(n,i)&&nt(e,`set`,t,n,i):nt(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&nt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!mt.has(t))&&A(e,`has`,t),n}ownKeys(e){return A(e,`iterate`,d(e)?`length`:$e),Reflect.ownKeys(e)}},vt=class extends gt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},yt=new _t,bt=new vt,xt=new _t(!0),St=e=>e,Ct=e=>Reflect.getPrototypeOf(e);function wt(e,t,n){return function(...r){let i=this.__v_raw,a=j(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?St:t?qt:Kt;return!t&&A(a,`iterate`,l?et:$e),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Tt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Et(e,t){let n={get(n){let r=this.__v_raw,i=j(r),a=j(n);e||(E(n,a)&&A(i,`get`,n),A(i,`get`,a));let{has:o}=Ct(i),s=t?St:e?qt:Kt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&A(j(t),`iterate`,$e),t.size},has(t){let n=this.__v_raw,r=j(n),i=j(t);return e||(E(t,i)&&A(r,`has`,t),A(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=j(a),s=t?St:e?qt:Kt;return!e&&A(o,`iterate`,$e),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Tt(`add`),set:Tt(`set`),delete:Tt(`delete`),clear:Tt(`clear`)}:{add(e){let n=j(this),r=Ct(n),i=j(e),a=!t&&!Ut(e)&&!Ht(e)?i:e;return r.has.call(n,a)||E(e,a)&&r.has.call(n,e)||E(i,a)&&r.has.call(n,i)||(n.add(a),nt(n,`add`,a,a)),this},set(e,n){!t&&!Ut(n)&&!Ht(n)&&(n=j(n));let r=j(this),{has:i,get:a}=Ct(r),o=i.call(r,e);o||=(e=j(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?E(n,s)&&nt(r,`set`,e,n,s):nt(r,`add`,e,n),this},delete(e){let t=j(this),{has:n,get:r}=Ct(t),i=n.call(t,e);i||=(e=j(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&nt(t,`delete`,e,void 0,a),o},clear(){let e=j(this),t=e.size!==0,n=e.clear();return t&&nt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=wt(r,e,t)}),n}function Dt(e,t){let n=Et(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Ot={get:Dt(!1,!1)},kt={get:Dt(!1,!0)},At={get:Dt(!0,!1)},jt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap;function Ft(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function It(e){return e.__v_skip||!Object.isExtensible(e)?0:Ft(S(e))}function Lt(e){return Ht(e)?e:Bt(e,!1,yt,Ot,jt)}function Rt(e){return Bt(e,!1,xt,kt,Mt)}function zt(e){return Bt(e,!0,bt,At,Nt)}function Bt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=It(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Vt(e){return Ht(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function Ut(e){return!!(e&&e.__v_isShallow)}function Wt(e){return e?!!e.__v_raw:!1}function j(e){let t=e&&e.__v_raw;return t?j(t):e}function Gt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&D(e,`__v_skip`,!0),e}var Kt=e=>v(e)?Lt(e):e,qt=e=>v(e)?zt(e):e;function M(e){return e?e.__v_isRef===!0:!1}function N(e){return Yt(e,!1)}function Jt(e){return Yt(e,!0)}function Yt(e,t){return M(e)?e:new Xt(e,t)}var Xt=class{constructor(e,t){this.dep=new Xe,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:j(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Ut(e)||Ht(e);e=n?e:j(e),E(e,t)&&(this._rawValue=e,this._value=n?e:Kt(e),this.dep.trigger())}};function P(e){return M(e)?e.value:e}var Zt={get:(e,t,n)=>t===`__v_raw`?e:P(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return M(i)&&!M(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Qt(e){return Vt(e)?e:new Proxy(e,Zt)}var $t=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Je-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&k!==this)return Pe(this,!0),!0}get value(){let e=this.dep.track();return Be(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function en(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new $t(r,i,n)}var tn={},nn=new WeakMap,rn=void 0;function an(e,t=!1,n=rn){if(n){let t=nn.get(n);t||nn.set(n,t=[]),t.push(e)}}function on(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Ut(e)||o===!1||o===0?sn(e,1):sn(e),m,g,_,v,y=!1,b=!1;if(M(e)?(g=()=>e.value,y=Ut(e)):Vt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Vt(e)||Ut(e)),g=()=>e.map(e=>{if(M(e))return e.value;if(Vt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ge();try{_()}finally{Ke()}}let t=rn;rn=m;try{return f?f(e,3,[v]):e(v)}finally{rn=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>sn(e(),t)}let x=Oe(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(tn):tn,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>E(e,C[t])):E(e,C))){_&&_();let t=rn;rn=m;try{let t=[e,C===tn?void 0:b&&C[0]===tn?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{rn=t}}}else m.run()};return u&&u(w),m=new Ae(g),m.scheduler=l?()=>l(w,!1):w,v=e=>an(e,!1,m),_=m.onStop=()=>{let e=nn.get(m);if(e){if(f)f(e,4);else for(let t of e)t();nn.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function sn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,M(e))sn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)sn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{sn(e,t,n)});else if(C(e)){for(let r in e)sn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&sn(e[r],t,n)}return e}function cn(e,t,n,r){try{return r?e(...r):e()}catch(e){un(e,t,n)}}function ln(e,t,n,r){if(h(e)){let i=cn(e,t,n,r);return i&&y(i)&&i.catch(e=>{un(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(ln(e[a],t,n,r));return i}}function un(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ge(),cn(o,null,10,[e,i,a]),Ke();return}}dn(e,r,a,i,s)}function dn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var F=[],fn=-1,pn=[],mn=null,hn=0,gn=Promise.resolve(),_n=null;function vn(e){let t=_n||gn;return e?t.then(this?e.bind(this):e):t}function yn(e){let t=fn+1,n=F.length;for(;t<n;){let r=t+n>>>1,i=F[r],a=Tn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function bn(e){if(!(e.flags&1)){let t=Tn(e),n=F[F.length-1];!n||!(e.flags&2)&&t>=Tn(n)?F.push(e):F.splice(yn(t),0,e),e.flags|=1,xn()}}function xn(){_n||=gn.then(En)}function Sn(e){d(e)?pn.push(...e):mn&&e.id===-1?mn.splice(hn+1,0,e):e.flags&1||(pn.push(e),e.flags|=1),xn()}function Cn(e,t,n=fn+1){for(;n<F.length;n++){let t=F[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;F.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function wn(e){if(pn.length){let e=[...new Set(pn)].sort((e,t)=>Tn(e)-Tn(t));if(pn.length=0,mn){mn.push(...e);return}for(mn=e,hn=0;hn<mn.length;hn++){let e=mn[hn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}mn=null,hn=0}}var Tn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function En(e){try{for(fn=0;fn<F.length;fn++){let e=F[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<F.length;fn++){let e=F[fn];e&&(e.flags&=-2)}fn=-1,F.length=0,wn(e),_n=null,(F.length||pn.length)&&En(e)}}var I=null,Dn=null;function On(e){let t=I;return I=e,Dn=e&&e.type.__scopeId||null,t}function L(e,t=I,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Pi(-1);let i=On(t),a;try{a=e(...n)}finally{On(i),r._d&&Pi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function R(e,n){if(I===null)return e;let r=_a(I),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&sn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function kn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ge(),ln(c,n,8,[e.el,s,e,t]),Ke())}}function An(e,t){if(ta){let n=ta.provides,r=ta.parent&&ta.parent.provides;r===n&&(n=ta.provides=Object.create(r)),n[e]=t}}function jn(e,t,n=!1){let r=na();if(r||Lr){let i=Lr?Lr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Mn=Symbol.for(`v-scx`),Nn=()=>jn(Mn);function z(e,t,n){return Pn(e,t,n)}function Pn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(ca){if(c===`sync`){let e=Nn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=ta;u.call=(e,t,n)=>ln(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{mi(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():bn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=on(e,n,u);return ca&&(f?f.push(h):d&&h()),h}function Fn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?In(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=aa(this),s=Pn(i,a.bind(r),n);return o(),s}function In(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Ln=Symbol(`_vte`),Rn=e=>e.__isTeleport,zn=Symbol(`_leaveCb`);function Bn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Bn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Hn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Un(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Wn=new WeakMap;function Gn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Gn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(qn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Gn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?_a(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=j(v),b=v===t?i:e=>Un(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Un(_,t));if(m!=null&&m!==p){if(Kn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(M(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))cn(p,f,12,[l,_]);else{let t=g(p),n=M(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Wn.delete(e)};t.id=-1,Wn.set(e,t),mi(t,r)}else Kn(e),i()}}}function Kn(e){let t=Wn.get(e);t&&(t.flags|=8,Wn.delete(e))}ue().requestIdleCallback,ue().cancelIdleCallback;var qn=e=>!!e.type.__asyncLoader,Jn=e=>e.type.__isKeepAlive;function Yn(e,t){Zn(e,`a`,t)}function Xn(e,t){Zn(e,`da`,t)}function Zn(e,t,n=ta){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if($n(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Jn(e.parent.vnode)&&Qn(r,t,n,e),e=e.parent}}function Qn(e,t,n,r){let i=$n(t,e,r,!0);or(()=>{c(r[t],i)},n)}function $n(e,t,n=ta,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ge();let i=aa(n),a=ln(t,n,e,r);return i(),Ke(),a};return r?i.unshift(a):i.push(a),a}}var er=e=>(t,n=ta)=>{(!ca||e===`sp`)&&$n(e,(...e)=>t(...e),n)},tr=er(`bm`),nr=er(`m`),rr=er(`bu`),ir=er(`u`),ar=er(`bum`),or=er(`um`),sr=er(`sp`),cr=er(`rtg`),lr=er(`rtc`);function ur(e,t=ta){$n(`ec`,e,t)}var dr=Symbol.for(`v-ndc`);function B(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Vt(e),r=!1,s=!1;n&&(r=!Ut(e),s=Ht(e),e=it(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?qt(Kt(e[n])):Kt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function fr(e,t,n={},r,i){if(I.ce||I.parent&&qn(I.parent)&&I.parent.ce){let e=Object.keys(n).length>0;return t!==`default`&&(n.name=t),H(),Ii(V,null,[G(`slot`,n,r&&r())],e?-2:64)}let a=e[t];a&&a._c&&(a._d=!1),H();let o=a&&pr(a(n)),s=n.key||o&&o.key,c=Ii(V,{key:(s&&!_(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function pr(e){return e.some(e=>Li(e)?!(e.type===Oi||e.type===V&&!pr(e.children)):!0)?e:null}var mr=e=>e?sa(e)?_a(e):mr(e.parent):null,hr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>mr(e.parent),$root:e=>mr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wr(e),$forceUpdate:e=>e.f||=()=>{bn(e.update)},$nextTick:e=>e.n||=vn.bind(e.proxy),$watch:e=>Fn.bind(e)}),gr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),_r={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(gr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else yr&&(s[n]=0)}let d=hr[n],f,p;if(d)return n===`$attrs`&&A(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return gr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||gr(n,c)||u(o,c)||u(i,c)||u(hr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function vr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var yr=!0;function br(e){let t=wr(e),n=e.proxy,i=e.ctx;yr=!1,t.beforeCreate&&Sr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:ie,inheritAttrs:ae,components:oe,directives:E,filters:se}=t;if(u&&xr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Lt(t))}if(yr=!0,o)for(let e in o){let t=o[e],a=K({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Cr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{An(t,e[t])})}f&&Sr(f,e,`c`);function D(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(D(tr,p),D(nr,m),D(rr,g),D(ir,_),D(Yn,y),D(Xn,b),D(ur,T),D(lr,te),D(cr,ne),D(ar,S),D(or,w),D(sr,re),d(ie))if(ie.length){let t=e.exposed||={};ie.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};ee&&e.render===r&&(e.render=ee),ae!=null&&(e.inheritAttrs=ae),oe&&(e.components=oe),E&&(e.directives=E),re&&Hn(e)}function xr(e,t,n=r){d(e)&&(e=kr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?jn(r.from||n,r.default,!0):jn(r.from||n):jn(r),M(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Sr(e,t,n){ln(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Cr(e,t,n,r){let i=r.includes(`.`)?In(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&z(i,n)}else if(h(e))z(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Cr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&z(i,r,e)}}function wr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Tr(c,e,o,!0)),Tr(c,t,o)),v(t)&&a.set(t,c),c}function Tr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Tr(e,a,n,!0),i&&i.forEach(t=>Tr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Er[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Er={data:Dr,props:Mr,emits:Mr,methods:jr,computed:jr,beforeCreate:Ar,created:Ar,beforeMount:Ar,mounted:Ar,beforeUpdate:Ar,updated:Ar,beforeDestroy:Ar,beforeUnmount:Ar,destroyed:Ar,unmounted:Ar,activated:Ar,deactivated:Ar,errorCaptured:Ar,serverPrefetch:Ar,components:jr,directives:jr,watch:Nr,provide:Dr,inject:Or};function Dr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Or(e,t){return jr(kr(e),kr(t))}function kr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ar(e,t){return e?[...new Set([].concat(e,t))]:t}function jr(e,t){return e?s(Object.create(null),e,t):t}function Mr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),vr(e),vr(t??{})):t}function Nr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Ar(e[r],t[r]);return n}function Pr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Fr=0;function Ir(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Pr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Fr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ba,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||G(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,_a(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(ln(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Lr;Lr=l;try{return e()}finally{Lr=t}}};return l}}var Lr=null,Rr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${ie(t)}Modifiers`];function zr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Rr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(ce)));let c,l=i[c=oe(n)]||i[c=oe(T(n))];!l&&o&&(l=i[c=oe(ie(n))]),l&&ln(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ln(u,e,6,a)}}var Br=new WeakMap;function Vr(e,t,n=!1){let r=n?Br:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Vr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Hr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,ie(t))||u(e,t))}function Ur(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=On(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=qi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=qi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Wr(c)}}catch(t){Ai.length=0,un(t,e,1),v=G(Oi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Gr(y,a)),b=Ui(b,y,!1,!0))}return n.dirs&&(b=Ui(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Bn(b,n.transition),v=b,On(_),v}var Wr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Gr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Kr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?qr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Jr(o,r,n)&&!Hr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?qr(r,o,l):!0:!!o;return!1}function qr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Jr(t,e,a)&&!Hr(n,a))return!0}return!1}function Jr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!xe(r,i):r!==i}function Yr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Xr={},Zr=()=>Object.create(Xr),Qr=e=>Object.getPrototypeOf(e)===Xr;function $r(e,t,n,r=!1){let i={},a=Zr();e.propsDefaults=Object.create(null),ti(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Rt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ei(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=j(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Hr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=ni(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ti(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=ie(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ni(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&nt(e.attrs,`set`,``)}function ti(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Hr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=j(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ni(a,n,s,i[s],e,!u(i,s))}}return s}function ni(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=aa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ie(n))&&(r=!0))}return r}var ri=new WeakMap;function ii(e,r,i=!1){let a=i?ri:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=ii(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);ai(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(ai(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function ai(e){return e[0]!==`$`&&!ee(e)}var oi=e=>e===`_`||e===`_ctx`||e===`$stable`,si=e=>d(e)?e.map(qi):[qi(e)],ci=(e,t,n)=>{if(t._n)return t;let r=L((...e)=>si(t(...e)),n);return r._c=!1,r},li=(e,t,n)=>{let r=e._ctx;for(let n in e){if(oi(n))continue;let i=e[n];if(h(i))t[n]=ci(n,i,r);else if(i!=null){let e=si(i);t[n]=()=>e}}},ui=(e,t)=>{let n=si(t);e.slots.default=()=>n},di=(e,t,n)=>{for(let r in t)(n||!oi(r))&&(e[r]=t[r])},fi=(e,t,n)=>{let r=e.slots=Zr();if(e.vnode.shapeFlag&32){let e=t._;e?(di(r,t,n),n&&D(r,`_`,e,!0)):li(t,r)}else t&&ui(e,t)},pi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:di(a,n,r):(o=!n.$stable,li(n,a)),s=n}else n&&(ui(e,n),s={default:1});if(o)for(let e in a)!oi(e)&&s[e]==null&&delete a[e]},mi=Ei;function hi(e){return gi(e)}function gi(e,i){let a=ue();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ri(e,t)&&(r=xe(e),ge(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Di:y(e,t,n,r);break;case Oi:b(e,t,n,r);break;case ki:e??x(t,n,r,o);break;case V:oe(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?E(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,O)}u!=null&&i?Gn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Gn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,_i(e,a),s,u),_&&kn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Zi(f,r,e)}_&&kn(e,null,r,`beforeMount`);let v=yi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&mi(()=>{try{f&&Zi(f,r,e),v&&g.enter(d),_&&kn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ti(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?Ji(e[l]):qi(e[l]),t,n,r,i,a,o,s)},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&vi(r,!1),(g=h.onVnodeBeforeUpdate)&&Zi(g,r,n,e),f&&kn(n,e,r,`beforeUpdate`),r&&vi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?ie(e.dynamicChildren,d,l,r,i,_i(n,a),o):s||fe(e,n,l,null,r,i,_i(n,a),o,!1),u>0){if(u&16)ae(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&ae(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&mi(()=>{g&&Zi(g,r,n,e),f&&kn(n,e,r,`updated`)},i)},ie=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===V||!Ri(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},ae=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},oe=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(ie(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&bi(e,t,!0)):fe(e,t,n,f,i,a,s,c,l)},E=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):D(t,n,r,i,a,o,c):ce(e,t,c)},D=(e,t,n,r,i,a,o)=>{let s=e.component=ea(e,r,i);if(Jn(e)&&(s.ctx.renderer=O),la(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,le,o),!e.el){let r=s.subTree=G(Oi);b(null,r,t,n),e.placeholder=r.el}}else le(s,e,t,n,i,a,o)},ce=(e,t,n)=>{let r=t.component=e.component;if(Kr(e,t,n))if(r.asyncDep&&!r.asyncResolved){de(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},le=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Si(e);if(n){t&&(t.el=c.el,de(e,t,o)),n.asyncDep.then(()=>{mi(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;vi(e,!1),t?(t.el=c.el,de(e,t,o)):t=c,n&&se(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Zi(d,s,t,c),vi(e,!0);let f=Ur(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),xe(p),e,i,a),t.el=f.el,u===null&&Yr(e,f.el),r&&mi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&mi(()=>Zi(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=qn(t);if(vi(e,!1),l&&se(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Zi(o,d,t),vi(e,!0),s&&Te){let t=()=>{e.subTree=Ur(e),Te(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Ur(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&mi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;mi(()=>Zi(o,d,e),i)}(t.shapeFlag&256||d&&qn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&mi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ae(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>bn(u),vi(e,!0),l()},de=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ei(e,t.props,r,n),pi(e,t.children,n),Ge(),Cn(e),Ke()},fe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){me(l,d,n,r,i,a,o,s,c);return}else if(f&256){pe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&be(l,i,a),d!==l&&p(n,d)):u&16?m&16?me(l,d,n,r,i,a,o,s,c):be(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},pe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?Ji(t[p]):qi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?be(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},me=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Ji(t[u]):qi(t[u]);if(Ri(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Ji(t[p]):qi(t[p]);if(Ri(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Ji(t[u]):qi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)ge(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Ji(t[u]):qi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){ge(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ri(n,t[_])){i=_;break}i===void 0?ge(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?xi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||wi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?he(n,r,p,2):_--)}}},he=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){he(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,O);return}if(c===V){o(a,t,n);for(let e=0;e<u.length;e++)he(u[e],t,n,r);o(e.anchor,t,n);return}if(c===ki){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),mi(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[zn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},ge=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ge(),Gn(s,null,n,e,!0),Ke()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!qn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Zi(_,t,e),u&6)ye(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&kn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,O,r):l&&!l.hasOnce&&(a!==V||d>0&&d&64)?be(l,t,n,!1,!0):(a===V&&d&384||!i&&u&16)&&be(c,t,n),r&&_e(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&mi(()=>{_&&Zi(_,t,e),h&&kn(e,null,t,`unmounted`),v&&(e.el=null)},n)},_e=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===V){ve(n,r);return}if(t===ki){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ve=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ye=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ci(c),Ci(l),r&&se(r),i.stop(),a&&(a.flags|=8,ge(o,e,t,n)),s&&mi(s,t),mi(()=>{e.isUnmounted=!0},t)},be=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ge(e[o],t,n,r,i)},xe=e=>{if(e.shapeFlag&6)return xe(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Ln];return n?h(n):t},Se=!1,Ce=(e,t,n)=>{let r;e==null?t._vnode&&(ge(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,Se||=(Se=!0,Cn(r),wn(),!1)},O={p:v,um:ge,m:he,r:_e,mt:D,mc:T,pc:fe,pbc:ie,n:xe,o:e},we,Te;return i&&([we,Te]=i(O)),{render:Ce,hydrate:we,createApp:Ir(Ce,we)}}function _i({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function vi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function yi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ji(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&bi(t,a)),a.type===Di&&(a.patchFlag===-1&&(a=i[e]=Ji(a)),a.el=t.el),a.type===Oi&&!a.el&&(a.el=t.el)}}function xi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Si(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Si(t)}function Ci(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function wi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?wi(t.subTree):null}var Ti=e=>e.__isSuspense;function Ei(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):Sn(e)}var V=Symbol.for(`v-fgt`),Di=Symbol.for(`v-txt`),Oi=Symbol.for(`v-cmt`),ki=Symbol.for(`v-stc`),Ai=[],ji=null;function H(e=!1){Ai.push(ji=e?null:[])}function Mi(){Ai.pop(),ji=Ai[Ai.length-1]||null}var Ni=1;function Pi(e,t=!1){Ni+=e,e<0&&ji&&t&&(ji.hasOnce=!0)}function Fi(e){return e.dynamicChildren=Ni>0?ji||n:null,Mi(),Ni>0&&ji&&ji.push(e),e}function U(e,t,n,r,i,a){return Fi(W(e,t,n,r,i,a,!0))}function Ii(e,t,n,r,i){return Fi(G(e,t,n,r,i,!0))}function Li(e){return e?e.__v_isVNode===!0:!1}function Ri(e,t){return e.type===t.type&&e.key===t.key}var zi=({key:e})=>e??null,Bi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||M(e)||h(e)?{i:I,r:e,k:t,f:!!n}:e);function W(e,t=null,n=null,r=0,i=null,a=e===V?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zi(t),ref:t&&Bi(t),scopeId:Dn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:I};return s?(Yi(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Ni>0&&!o&&ji&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&ji.push(c),c}var G=Vi;function Vi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===dr)&&(e=Oi),Li(e)){let r=Ui(e,t,!0);return n&&Yi(r,n),Ni>0&&!a&&ji&&(r.shapeFlag&6?ji[ji.indexOf(e)]=r:ji.push(r)),r.patchFlag=-2,r}if(va(e)&&(e=e.__vccOpts),t){t=Hi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=ge(e)),v(n)&&(Wt(n)&&!d(n)&&(n=s({},n)),t.style=de(n))}let o=g(e)?1:Ti(e)?128:Rn(e)?64:v(e)?4:h(e)?2:0;return W(e,t,n,r,i,o,a,!0)}function Hi(e){return e?Wt(e)||Qr(e)?s({},e):e:null}function Ui(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Xi(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&zi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Bi(t)):[a,Bi(t)]:Bi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==V?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ui(e.ssContent),ssFallback:e.ssFallback&&Ui(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Bn(u,c.clone(u)),u}function Wi(e=` `,t=0){return G(Di,null,e,t)}function Gi(e,t){let n=G(ki,null,e);return n.staticCount=t,n}function Ki(e=``,t=!1){return t?(H(),Ii(Oi,null,e)):G(Oi,null,e)}function qi(e){return e==null||typeof e==`boolean`?G(Oi):d(e)?G(V,null,e.slice()):Li(e)?Ji(e):G(Di,null,String(e))}function Ji(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ui(e)}function Yi(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Yi(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!Qr(t)?t._ctx=I:r===3&&I&&(I.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:I},n=32):(t=String(t),r&64?(n=16,t=[Wi(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xi(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=ge([t.class,r.class]));else if(e===`style`)t.style=de([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Zi(e,t,n,r=null){ln(e,t,7,[n,r])}var Qi=Pr(),$i=0;function ea(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Qi,o={uid:$i++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new De(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ii(i,a),emitsOptions:Vr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=zr.bind(null,o),e.ce&&e.ce(o),o}var ta=null,na=()=>ta||I,ra,ia;{let e=ue(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ra=t(`__VUE_INSTANCE_SETTERS__`,e=>ta=e),ia=t(`__VUE_SSR_SETTERS__`,e=>ca=e)}var aa=e=>{let t=ta;return ra(e),e.scope.on(),()=>{e.scope.off(),ra(t)}},oa=()=>{ta&&ta.scope.off(),ra(null)};function sa(e){return e.vnode.shapeFlag&4}var ca=!1;function la(e,t=!1,n=!1){t&&ia(t);let{props:r,children:i}=e.vnode,a=sa(e);$r(e,r,a,t),fi(e,i,n||t);let o=a?ua(e,t):void 0;return t&&ia(!1),o}function ua(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,_r);let{setup:r}=n;if(r){Ge();let n=e.setupContext=r.length>1?ga(e):null,i=aa(e),a=cn(r,e,0,[e.props,n]),o=y(a);if(Ke(),i(),(o||e.sp)&&!qn(e)&&Hn(e),o){if(a.then(oa,oa),t)return a.then(n=>{da(e,n,t)}).catch(t=>{un(t,e,0)});e.asyncDep=a}else da(e,a,t)}else ma(e,t)}function da(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Qt(t)),ma(e,n)}var fa,pa;function ma(e,t,n){let i=e.type;if(!e.render){if(!t&&fa&&!i.render){let t=i.template||wr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=fa(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,pa&&pa(e)}{let t=aa(e);Ge();try{br(e)}finally{Ke(),t()}}}var ha={get(e,t){return A(e,`get`,``),e[t]}};function ga(e){return{attrs:new Proxy(e.attrs,ha),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function _a(e){return e.exposed?e.exposeProxy||=new Proxy(Qt(Gt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hr)return hr[n](e)},has(e,t){return t in e||t in hr}}):e.proxy}function va(e){return h(e)&&`__vccOpts`in e}var K=(e,t)=>en(e,t,ca);function ya(e,t,n){try{Pi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Li(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Li(n)&&(n=[n]),G(e,t,n))}finally{Pi(1)}}var ba=`3.5.32`,xa=void 0,Sa=typeof window<`u`&&window.trustedTypes;if(Sa)try{xa=Sa.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ca=xa?e=>xa.createHTML(e):e=>e,wa=`http://www.w3.org/2000/svg`,Ta=`http://www.w3.org/1998/Math/MathML`,Ea=typeof document<`u`?document:null,Da=Ea&&Ea.createElement(`template`),Oa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ea.createElementNS(wa,e):t===`mathml`?Ea.createElementNS(Ta,e):n?Ea.createElement(e,{is:n}):Ea.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ea.createTextNode(e),createComment:e=>Ea.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ea.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Da.innerHTML=Ca(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Da.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ka=Symbol(`_vtc`);function Aa(e,t,n){let r=e[ka];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var ja=Symbol(`_vod`),Ma=Symbol(`_vsh`),Na=Symbol(``),Pa=/(?:^|;)\s*display\s*:/;function Fa(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??La(r,t,``)}else for(let e in t)n[e]??La(r,e,``);for(let e in n)e===`display`&&(a=!0),La(r,e,n[e])}else if(i){if(t!==n){let e=r[Na];e&&(n+=`;`+e),r.cssText=n,a=Pa.test(n)}}else t&&e.removeAttribute(`style`);ja in e&&(e[ja]=a?r.display:``,e[Ma]&&(r.display=`none`))}var Ia=/\s*!important$/;function La(e,t,n){if(d(n))n.forEach(n=>La(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Ba(e,t);Ia.test(n)?e.setProperty(ie(r),n.replace(Ia,``),`important`):e[r]=n}}var Ra=[`Webkit`,`Moz`,`ms`],za={};function Ba(e,t){let n=za[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return za[t]=r;r=ae(r);for(let n=0;n<Ra.length;n++){let i=Ra[n]+r;if(i in e)return za[t]=i}return t}var Va=`http://www.w3.org/1999/xlink`;function Ha(e,t,n,r,i,a=ve(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Va,t.slice(6,t.length)):e.setAttributeNS(Va,t,n):n==null||a&&!ye(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ua(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ca(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ye(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Wa(e,t,n,r){e.addEventListener(t,n,r)}function Ga(e,t,n,r){e.removeEventListener(t,n,r)}var Ka=Symbol(`_vei`);function qa(e,t,n,r,i=null){let a=e[Ka]||(e[Ka]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ya(t);r?Wa(e,n,a[t]=$a(r,i),s):o&&(Ga(e,n,o,s),a[t]=void 0)}}var Ja=/(?:Once|Passive|Capture)$/;function Ya(e){let t;if(Ja.test(e)){t={};let n;for(;n=e.match(Ja);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):ie(e.slice(2)),t]}var Xa=0,Za=Promise.resolve(),Qa=()=>Xa||=(Za.then(()=>Xa=0),Date.now());function $a(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;ln(eo(e,n.value),t,5,[e])};return n.value=e,n.attached=Qa(),n}function eo(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var to=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,no=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Aa(e,r,c):t===`style`?Fa(e,n,r):a(t)?o(t)||qa(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):ro(e,t,r,c))?(Ua(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ha(e,t,r,c,s,t!==`value`)):e._isVueCE&&(io(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ua(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ha(e,t,r,c))};function ro(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&to(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return to(t)&&g(n)?!1:t in e}function io(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var ao=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>se(t,e):t};function oo(e){e.target.composing=!0}function so(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var co=Symbol(`_assign`);function lo(e,t,n){return t&&(e=e.trim()),n&&(e=ce(e)),e}var uo={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[co]=ao(i);let a=r||i.props&&i.props.type===`number`;Wa(e,t?`change`:`input`,t=>{t.target.composing||e[co](lo(e.value,n,a))}),(n||a)&&Wa(e,`change`,()=>{e.value=lo(e.value,n,a)}),t||(Wa(e,`compositionstart`,oo),Wa(e,`compositionend`,so),Wa(e,`change`,so))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[co]=ao(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?ce(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},fo={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=p(t);Wa(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?ce(mo(e)):mo(e));e[co](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,vn(()=>{e._assigning=!1})}),e[co]=ao(r)},mounted(e,{value:t}){po(e,t)},beforeUpdate(e,t,n){e[co]=ao(n)},updated(e,{value:t}){e._assigning||po(e,t)}};function po(e,t){let n=e.multiple,r=d(t);if(!(n&&!r&&!p(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=mo(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=Se(t,o)>-1}else a.selected=t.has(o);else if(xe(mo(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function mo(e){return`_value`in e?e._value:e.value}var ho=s({patchProp:no},Oa),go;function _o(){return go||=hi(ho)}var vo=((...e)=>{let t=_o().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=bo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,yo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function yo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function bo(e){return g(e)?document.querySelector(e):e}var xo=typeof document<`u`;function So(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Co(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&So(e.default)}var q=Object.assign;function wo(e,t){let n={};for(let r in t){let i=t[r];n[r]=Eo(i)?i.map(e):e(i)}return n}var To=()=>{},Eo=Array.isArray;function Do(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var J=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Oo=Symbol(``);J.MATCHER_NOT_FOUND,J.NAVIGATION_GUARD_REDIRECT,J.NAVIGATION_ABORTED,J.NAVIGATION_CANCELLED,J.NAVIGATION_DUPLICATED;function ko(e,t){return q(Error(),{type:e,[Oo]:!0},t)}function Ao(e,t){return e instanceof Error&&Oo in e&&(t==null||!!(e.type&t))}var jo=Symbol(``),Mo=Symbol(``),No=Symbol(``),Po=Symbol(``),Fo=Symbol(``);function Io(){return jn(No)}function Lo(e){return jn(Po)}var Ro=/#/g,zo=/&/g,Bo=/\//g,Vo=/=/g,Ho=/\?/g,Uo=/\+/g,Wo=/%5B/g,Go=/%5D/g,Ko=/%5E/g,qo=/%60/g,Jo=/%7B/g,Yo=/%7C/g,Xo=/%7D/g,Zo=/%20/g;function Qo(e){return e==null?``:encodeURI(``+e).replace(Yo,`|`).replace(Wo,`[`).replace(Go,`]`)}function $o(e){return Qo(e).replace(Jo,`{`).replace(Xo,`}`).replace(Ko,`^`)}function es(e){return Qo(e).replace(Uo,`%2B`).replace(Zo,`+`).replace(Ro,`%23`).replace(zo,`%26`).replace(qo,"`").replace(Jo,`{`).replace(Xo,`}`).replace(Ko,`^`)}function ts(e){return es(e).replace(Vo,`%3D`)}function ns(e){return Qo(e).replace(Ro,`%23`).replace(Ho,`%3F`)}function rs(e){return ns(e).replace(Bo,`%2F`)}function is(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var as=/\/$/,os=e=>e.replace(as,``);function ss(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=hs(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:is(o)}}function cs(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function ls(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function us(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ds(t.matched[r],n.matched[i])&&fs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ds(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function fs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!ps(e[n],t[n]))return!1;return!0}function ps(e,t){return Eo(e)?ms(e,t):Eo(t)?ms(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function ms(e,t){return Eo(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function hs(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var gs={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},_s=function(e){return e.pop=`pop`,e.push=`push`,e}({}),vs=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function ys(e){if(!e)if(xo){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),os(e)}var bs=/^[^#]+#/;function xs(e,t){return e.replace(bs,`#`)+t}function Ss(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Cs=()=>({left:window.scrollX,top:window.scrollY});function ws(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Ss(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Ts(e,t){return(history.state?history.state.position-t:-1)+e}var Es=new Map;function Ds(e,t){Es.set(e,t)}function Os(e){let t=Es.get(e);return Es.delete(e),t}function ks(e){return typeof e==`string`||e&&typeof e==`object`}function As(e){return typeof e==`string`||typeof e==`symbol`}function js(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Uo,` `),i=r.indexOf(`=`),a=is(i<0?r:r.slice(0,i)),o=i<0?null:is(r.slice(i+1));if(a in t){let e=t[a];Eo(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Ms(e){let t=``;for(let n in e){let r=e[n];if(n=ts(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Eo(r)?r.map(e=>e&&es(e)):[r&&es(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Ns(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Eo(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function Ps(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Fs(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(ko(J.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):ks(e)?c(ko(J.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Is(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(So(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Fs(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Co(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Fs(c,n,r,o,e,i)()}))}}return a}function Ls(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>ds(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>ds(e,s))||i.push(s))}return[n,r,i]}var Rs=()=>location.protocol+`//`+location.host;function zs(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),ls(n,``)}return ls(n,e)+r+i}function Bs(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=zs(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:_s.pop,direction:u?u>0?vs.forward:vs.back:vs.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(q({},e.state,{scroll:Cs()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Vs(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Cs():null}}function Hs(e){let{history:t,location:n}=window,r={value:zs(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Rs()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,q({},t.state,Vs(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=q({},i.value,t.state,{forward:e,scroll:Cs()});a(o.current,o,!0),a(e,q({},Vs(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Us(e){e=ys(e);let t=Hs(e),n=Bs(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=q({location:``,base:e,go:r,createHref:xs.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}function Ws(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),Us(e)}var Gs=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Y=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Y||{}),Ks={type:Gs.Static,value:``},qs=/[a-zA-Z0-9_]/;function Js(e){if(!e)return[[]];if(e===`/`)return[[Ks]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Y.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Y.Static?a.push({type:Gs.Static,value:l}):n===Y.Param||n===Y.ParamRegExp||n===Y.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:Gs.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==Y.ParamRegExp){r=n,n=Y.EscapeNext;continue}switch(n){case Y.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Y.Param):f();break;case Y.EscapeNext:f(),n=r;break;case Y.Param:c===`(`?n=Y.ParamRegExp:qs.test(c)?f():(d(),n=Y.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Y.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Y.ParamRegExpEnd:u+=c;break;case Y.ParamRegExpEnd:d(),n=Y.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===Y.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Ys=`[^/]+?`,Xs={sensitive:!1,strict:!1,start:!0,end:!0},Zs=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(Zs||{}),Qs=/[.+*?^${}()[\]/\\]/g;function $s(e,t){let n=q({},Xs,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[Zs.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=Zs.Segment+(n.sensitive?Zs.BonusCaseSensitive:0);if(o.type===Gs.Static)r||(i+=`/`),i+=o.value.replace(Qs,`\\$&`),s+=Zs.Static;else if(o.type===Gs.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Ys;if(u!==Ys){s+=Zs.BonusCustomRegExp;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=Zs.Dynamic,c&&(s+=Zs.BonusOptional),n&&(s+=Zs.BonusRepeatable),u===`.*`&&(s+=Zs.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=Zs.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===Gs.Static)n+=e.value;else if(e.type===Gs.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Eo(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Eo(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function ec(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Zs.Static+Zs.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Zs.Static+Zs.Segment?1:-1:0}function tc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=ec(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(nc(r))return 1;if(nc(i))return-1}return i.length-r.length}function nc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var rc={strict:!1,end:!0,sensitive:!1};function ic(e,t,n){let r=q($s(Js(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function ac(e,t){let n=[],r=new Map;t=Do(rc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=sc(e);s.aliasOf=r&&r.record;let l=Do(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(sc(q({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=ic(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!lc(d)&&o(e.name)),pc(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:To}function o(e){if(As(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=dc(e,n);n.splice(t,0,e),e.record.name&&!lc(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw ko(J.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=q(oc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&oc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw ko(J.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=q({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:uc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function oc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function sc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:cc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function cc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function lc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function uc(e){return e.reduce((e,t)=>q(e,t.meta),{})}function dc(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;tc(e,t[i])<0?r=i:n=i+1}let i=fc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function fc(e){let t=e;for(;t=t.parent;)if(pc(t)&&tc(e,t)===0)return t}function pc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function mc(e){let t=jn(No),n=jn(Po),r=K(()=>{let n=P(e.to);return t.resolve(n)}),i=K(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(ds.bind(null,i));if(o>-1)return o;let s=yc(e[t-2]);return t>1&&yc(i)===s&&a[a.length-1].path!==s?a.findIndex(ds.bind(null,e[t-2])):o}),a=K(()=>i.value>-1&&vc(n.params,r.value.params)),o=K(()=>i.value>-1&&i.value===n.matched.length-1&&fs(n.params,r.value.params));function s(n={}){if(_c(n)){let n=t[P(e.replace)?`replace`:`push`](P(e.to)).catch(To);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:K(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function hc(e){return e.length===1?e[0]:e}var gc=Vn({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:mc,setup(e,{slots:t}){let n=Lt(mc(e)),{options:r}=jn(No),i=K(()=>({[bc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[bc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&hc(t.default(n));return e.custom?r:ya(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function _c(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function vc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Eo(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function yc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var bc=(e,t,n)=>e??t??n,xc=Vn({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=jn(Fo),i=K(()=>e.route||r.value),a=jn(Mo,0),o=K(()=>{let e=P(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=K(()=>i.value.matched[o.value]);An(Mo,K(()=>o.value+1)),An(jo,s),An(Fo,i);let c=N();return z(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!ds(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Sc(n.default,{Component:l,route:r});let u=o.props[a],d=ya(l,q({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Sc(n.default,{Component:d,route:r})||d}}});function Sc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Cc=xc;function wc(e){let t=ac(e.routes,e),n=e.parseQuery||js,r=e.stringifyQuery||Ms,i=e.history,a=Ps(),o=Ps(),s=Ps(),c=Jt(gs),l=gs;xo&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=wo.bind(null,e=>``+e),d=wo.bind(null,rs),f=wo.bind(null,is);function p(e,n){let r,i;return As(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=q({},a||c.value),typeof e==`string`){let r=ss(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return q(r,o,{params:f(o.params),hash:is(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=q({},e,{path:ss(n,e.path,a.path).path});else{let t=q({},e.params);for(let e in t)t[e]??delete t[e];o=q({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=cs(r,q({},e,{hash:$o(l),path:s.path})),m=i.createHref(p);return q({fullPath:p,hash:l,query:r===Ms?Ns(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?ss(n,e,c.value.path):q({},e)}function y(e,t){if(l!==e)return ko(J.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(q(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),q({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(q(v(u),{state:typeof u==`object`?q({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&us(r,i,n)&&(f=ko(J.NAVIGATION_DUPLICATED,{to:d,from:i}),le(i,i,!0,!1)),(f?Promise.resolve(f):te(d,i)).catch(e=>Ao(e)?Ao(e,J.NAVIGATION_GUARD_REDIRECT)?e:ce(e):se(e,d,i)).then(e=>{if(e){if(Ao(e,J.NAVIGATION_GUARD_REDIRECT))return C(q({replace:s},v(e.to),{state:typeof e.to==`object`?q({},a,e.to.state):a,force:o}),t||d)}else e=T(d,i,!0,s,a);return ne(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function ee(e){let t=fe.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function te(e,t){let n,[r,i,s]=Ls(e,t);n=Is(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Fs(r,e,t))});let c=w.bind(null,e,t);return n.push(c),me(n).then(()=>{n=[];for(let r of a.list())n.push(Fs(r,e,t));return n.push(c),me(n)}).then(()=>{n=Is(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Fs(r,e,t))});return n.push(c),me(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Eo(r.beforeEnter))for(let i of r.beforeEnter)n.push(Fs(i,e,t));else n.push(Fs(r.beforeEnter,e,t));return n.push(c),me(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Is(s,`beforeRouteEnter`,e,t,ee),n.push(c),me(n))).then(()=>{n=[];for(let r of o.list())n.push(Fs(r,e,t));return n.push(c),me(n)}).catch(e=>Ao(e,J.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function ne(e,t,n){s.list().forEach(r=>ee(()=>r(e,t,n)))}function T(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===gs,l=xo?history.state:{};n&&(r||s?i.replace(e.fullPath,q({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,le(e,t,n,s),ce()}let re;function ie(){re||=i.listen((e,t,n)=>{if(!pe.listening)return;let r=_(e),a=S(r,pe.currentRoute.value);if(a){C(q(a,{replace:!0,force:!0}),r).catch(To);return}l=r;let o=c.value;xo&&Ds(Ts(o.fullPath,n.delta),Cs()),te(r,o).catch(e=>Ao(e,J.NAVIGATION_ABORTED|J.NAVIGATION_CANCELLED)?e:Ao(e,J.NAVIGATION_GUARD_REDIRECT)?(C(q(v(e.to),{force:!0}),r).then(e=>{Ao(e,J.NAVIGATION_ABORTED|J.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===_s.pop&&i.go(-1,!1)}).catch(To),Promise.reject()):(n.delta&&i.go(-n.delta,!1),se(e,r,o))).then(e=>{e||=T(r,o,!1),e&&(n.delta&&!Ao(e,J.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===_s.pop&&Ao(e,J.NAVIGATION_ABORTED|J.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ne(r,o,e)}).catch(To)})}let ae=Ps(),oe=Ps(),E;function se(e,t,n){ce(e);let r=oe.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function D(){return E&&c.value!==gs?Promise.resolve():new Promise((e,t)=>{ae.add([e,t])})}function ce(e){return E||(E=!e,ie(),ae.list().forEach(([t,n])=>e?n(e):t()),ae.reset()),e}function le(t,n,r,i){let{scrollBehavior:a}=e;if(!xo||!a)return Promise.resolve();let o=!r&&Os(Ts(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return vn().then(()=>a(t,n,o)).then(e=>e&&ws(e)).catch(e=>se(e,t,n))}let ue=e=>i.go(e),de,fe=new Set,pe={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:oe.add,isReady:D,install(e){e.component(`RouterLink`,gc),e.component(`RouterView`,Cc),e.config.globalProperties.$router=pe,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>P(c)}),xo&&!de&&c.value===gs&&(de=!0,b(i.location).catch(e=>{}));let t={};for(let e in gs)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(No,pe),e.provide(Po,Rt(t)),e.provide(Fo,c);let n=e.unmount;fe.add(e),e.unmount=function(){fe.delete(e),fe.size<1&&(l=gs,re&&re(),re=null,c.value=gs,de=!1,E=!1),n()}}};function me(e){return e.reduce((e,t)=>e.then(()=>ee(t)),Promise.resolve())}return pe}var Tc={class:`app-shell`},Ec={class:`sidebar`},Dc={class:`nav`},Oc={class:`main-shell`},kc={class:`content`},Ac={__name:`App`,setup(e){return(e,t)=>(H(),U(`div`,Tc,[W(`aside`,Ec,[t[6]||=Gi(`<div class="sidebar__brand"><p class="sidebar__eyebrow">Crypto × Information Theory</p><h1>密码学与信息论交叉学习网站</h1><p class="sidebar__lead"> 这是一个面向本科课堂的交互教学平台，把概念导学、半实验演示、自动讲解和静态教材放在同一套网站里。 </p></div><div class="sidebar__cue"><span class="sidebar__cue-tag">建议学习路径</span><ol><li>先看课程首页，理解三条主线</li><li>再进互动学习页，逐个掌握核心交叉问题</li><li>需要课堂演示时使用自动演示板块</li><li>最后回到教材页和练习页完成巩固</li></ol></div><div class="sidebar__cue"><span class="sidebar__cue-tag">三条主线</span><ul class="sidebar__lines"><li>信息有多少：熵、信息量、互信息、冗余</li><li>信息能不能保住：完美保密、随机性、泄露</li><li>信息能不能传到：噪声、纠错、可靠通信</li></ul></div>`,3),W(`nav`,Dc,[G(P(gc),{class:`nav__link`,to:`/`},{default:L(()=>[...t[0]||=[W(`strong`,null,`首页导学`,-1),W(`span`,null,`先看课程目标、学习路径和核心问题`,-1)]]),_:1}),G(P(gc),{class:`nav__link`,to:`/lessons`},{default:L(()=>[...t[1]||=[W(`strong`,null,`互动学习`,-1),W(`span`,null,`从熵到完美保密，再到现代设计思想`,-1)]]),_:1}),G(P(gc),{class:`nav__link`,to:`/auto-demo`},{default:L(()=>[...t[2]||=[W(`strong`,null,`自动演示板块`,-1),W(`span`,null,`自动分步骤讲解熵、完美保密和安全通信`,-1)]]),_:1}),G(P(gc),{class:`nav__link`,to:`/docs`},{default:L(()=>[...t[3]||=[W(`strong`,null,`教材阅读`,-1),W(`span`,null,`直接浏览交叉专题 Markdown 教材`,-1)]]),_:1}),G(P(gc),{class:`nav__link`,to:`/practice`},{default:L(()=>[...t[4]||=[W(`strong`,null,`课堂练习`,-1),W(`span`,null,`概念辨析、情境题和系统拆解题`,-1)]]),_:1}),G(P(gc),{class:`nav__link`,to:`/about`},{default:L(()=>[...t[5]||=[W(`strong`,null,`关于本课`,-1),W(`span`,null,`看网站定位、适用课程和章节映射`,-1)]]),_:1})]),t[7]||=W(`div`,{class:`sidebar__footer`},[W(`p`,{class:`sidebar__footer-title`},`课程定位`),W(`p`,null,`本网站服务于“信息安全数学 / 信息安全导论 / 密码学基础”中的交叉专题教学，强调专业但易懂。`)],-1)]),W(`div`,Oc,[t[8]||=Gi(`<header class="topbar"><div class="topbar__content"><div><p class="topbar__tag">Undergraduate Teaching Platform</p><strong>导学首页 + 互动学习 + 自动演示 + 教材阅读</strong></div><div class="topbar__pill-group"><span class="topbar__pill">课堂授课友好</span><span class="topbar__pill">学生自学友好</span><span class="topbar__pill">静态站点可部署</span></div></div></header>`,1),W(`main`,kc,[G(P(Cc))])])]))}},jc={class:`card`},Mc={class:`speech-card`},Nc={__name:`ConclusionCard`,props:{title:{type:String,default:`本页总结`},text:{type:String,default:``}},setup(e){return(t,n)=>(H(),U(`article`,jc,[W(`h3`,null,O(e.title),1),W(`div`,Mc,[W(`p`,null,O(e.text),1)])]))}},Pc={class:`page-hero`},Fc={class:`section-tag`},Ic={class:`page-hero__lead`},Lc={key:0,class:`topbar__pill-group`},Rc={__name:`LessonHero`,props:{tag:{type:String,default:``},title:{type:String,default:``},lead:{type:String,default:``},badges:{type:Array,default:()=>[]}},setup(e){return(t,n)=>(H(),U(`header`,Pc,[W(`div`,null,[W(`p`,Fc,O(e.tag),1),W(`h2`,null,O(e.title),1),W(`p`,Ic,O(e.lead),1)]),e.badges?.length?(H(),U(`div`,Lc,[(H(!0),U(V,null,B(e.badges,e=>(H(),U(`span`,{key:e,class:`topbar__pill`},O(e),1))),128))])):Ki(``,!0)]))}},zc={class:`speaker-panel`},Bc={class:`speaker-panel__header`},Vc={class:`speaker-panel__time`},Hc={class:`speaker-grid`},Uc={class:`cue-card__step`},Wc={__name:`SpeakerPanel`,props:{title:{type:String,default:`演示要点`},duration:{type:String,default:`建议 60-90 秒`},items:{type:Array,default:()=>[]}},setup(e){return(t,n)=>(H(),U(`section`,zc,[W(`div`,Bc,[W(`div`,null,[n[0]||=W(`p`,{class:`section-tag`},`Presentation Notes`,-1),W(`h3`,null,O(e.title),1)]),W(`span`,Vc,O(e.duration),1)]),W(`div`,Hc,[(H(!0),U(V,null,B(e.items,(e,t)=>(H(),U(`article`,{key:e.title,class:ge([`cue-card`,{"cue-card--accent":t===0}])},[W(`span`,Uc,O(e.step),1),W(`h4`,null,O(e.title),1),W(`p`,null,O(e.text),1)],2))),128))])]))}},Gc=[{slug:`entropy`,route:`/lesson/entropy`,title:`熵、信息量与不确定性`,tagline:`解释为什么“结果种类多”不一定意味着更难猜。`,learningGoal:`理解熵、最小熵和分布偏斜之间的关系。`,speakerDuration:`建议 4-6 分钟`},{slug:`perfect-secrecy`,route:`/lesson/perfect-secrecy`,title:`完美保密与一次一密`,tagline:`解释一次一密为什么强，以及密钥复用为什么会塌。`,learningGoal:`理解完美保密、互信息直觉和密钥复用风险。`,speakerDuration:`建议 5-7 分钟`},{slug:`compression-redundancy`,route:`/lesson/compression-redundancy`,title:`压缩、冗余与密码分析`,tagline:`说明压缩器和攻击者都在找规律。`,learningGoal:`理解冗余如何同时服务压缩和攻击分析。`,speakerDuration:`建议 4-6 分钟`},{slug:`channel-security`,route:`/lesson/channel-security`,title:`信道、噪声、纠错与安全通信`,tagline:`区分可靠性机制和保密性机制。`,learningGoal:`理解噪声、纠错冗余和安全通信的关系。`,speakerDuration:`建议 5-7 分钟`},{slug:`randomness-leakage`,route:`/lesson/randomness-leakage`,title:`随机性、密钥与信息泄露`,tagline:`说明密钥空间大不等于真实熵高。`,learningGoal:`理解弱分布、猜测成功率和副信息泄露。`,speakerDuration:`建议 4-6 分钟`},{slug:`modern-design`,route:`/lesson/modern-design`,title:`现代密码中的信息论思想`,tagline:`用玩具模型观察混淆、扩散和雪崩效应。`,learningGoal:`理解 Shannon 思想如何变成现代设计直觉。`,speakerDuration:`建议 5-7 分钟`}],Kc=[{type:`概念辨析`,prompt:`为什么“密码很长”不等于“密码熵很高”？`,answerGuide:`长度只描述形式空间，熵还取决于用户实际选择分布是否集中。`,teachingPoint:`把“理论密钥空间”和“真实分布”区分开。`},{type:`情境分析`,prompt:`为什么压缩通常放在加密之前，而不是之后？`,answerGuide:`压缩依赖冗余规律；好的密文近似随机，几乎没有再压缩空间。`,teachingPoint:`帮助学生把压缩与冗余、加密与结构隐藏串起来。`},{type:`系统拆解`,prompt:`请用压缩、纠错、加密、元数据四个角度分析一个聊天软件。`,answerGuide:`回答应覆盖消息编码、可靠传输、端到端保护和时序/长度泄露。`,teachingPoint:`训练学生把单点概念还原回完整系统。`},{type:`课堂讨论`,prompt:`如果验证码只有 6 位数字，为什么系统还敢在线上使用？`,answerGuide:`因为会配合限时、限次、设备绑定和风控，协议层补足低熵秘密的弱点。`,teachingPoint:`让学生看到低熵对象如何被系统设计补强。`}],qc=[`00-教师备课说明.md`,`01-为什么密码学离不开信息论.md`,`02-熵、信息量与不确定性.md`,`03-完美保密、一次一密与香农视角.md`,`04-压缩、冗余与密码分析.md`,`05-信道、噪声、纠错与安全通信.md`,`06-随机性、密钥与信息泄露.md`,`07-现代密码中的信息论思想.md`,`08-生活案例、综合练习与课程总结.md`,`09-术语速查与进阶补充.md`],Jc={class:`page`},Yc={class:`card`},Xc={class:`lessons-grid`},Zc={class:`lesson-link-card__tag`},Qc={class:`grid grid--two`},$c={__name:`HomeView`,setup(e){let t=[{step:`Step 1`,title:`先讲课程定位`,text:`说明这是一套本科级交叉专题网站，不是单独的信息论站，也不是单独的密码学站。`},{step:`Step 2`,title:`再讲三条主线`,text:`让学生先看到‘信息有多少、能不能保住、能不能传到’三条主线。`},{step:`Step 3`,title:`最后讲怎么学`,text:`告诉学生先看互动页，再回教材页和练习页完成知识内化。`}];return(e,n)=>(H(),U(`section`,Jc,[G(Rc,{tag:`Course Overview`,title:`密码学与信息论交叉学习平台`,lead:`这门课不把信息论和密码学割裂来看，而是围绕‘信息有多少、能不能保住、能不能可靠传到’三条主线，把课堂导学、互动实验和教材阅读放在一起。`,badges:[`本科标准`,`课堂授课`,`学生自学`]}),G(Wc,{duration:`建议 60-90 秒`,items:t}),n[2]||=Gi(`<div class="grid grid--two"><article class="card feature-card"><h3>网站怎么用</h3><ul class="bullet-list"><li>先在首页建立整体图景，再进入互动学习理解核心概念。</li><li>教师课堂可直接使用自动演示板块，按步骤推进讲解。</li><li>学生课后可回到教材阅读页和练习页完成复习。</li><li>整站支持静态部署，适合本地演示和无网课堂。</li></ul></article><article class="card timeline-card"><h3>推荐授课顺序</h3><div class="timeline"><div class="timeline__item"><strong>1. 建立主线</strong><span>先解释高效、可靠、安全三种目标为何会在一门课里相遇。</span></div><div class="timeline__item"><strong>2. 进入概念</strong><span>从熵、互信息、完美保密开始，搭起交叉专题的骨架。</span></div><div class="timeline__item"><strong>3. 看系统行为</strong><span>再讲压缩、纠错、随机性和泄露，回到真实信息系统。</span></div><div class="timeline__item"><strong>4. 回到现代设计</strong><span>最后再理解混淆、扩散和现代密码中的信息论思想。</span></div></div></article></div><div class="grid grid--three"><article class="card topic-card"><p class="section-tag">Main Line A</p><h3>信息有多少</h3><p>熵、信息量、条件熵、互信息、冗余、压缩极限。</p></article><article class="card topic-card"><p class="section-tag">Main Line B</p><h3>信息能不能保住</h3><p>完美保密、一次一密、随机性、泄露、结构隐藏、元数据风险。</p></article><article class="card topic-card"><p class="section-tag">Main Line C</p><h3>信息能不能传到</h3><p>噪声、纠错、误码率、可靠性、保密通信与信道差异。</p></article></div>`,2),W(`article`,Yc,[n[0]||=W(`div`,{class:`card__header`},[W(`h3`,null,`互动学习入口`),W(`span`,{class:`hint-chip`},`Lessons`)],-1),W(`div`,Xc,[(H(!0),U(V,null,B(P(Gc),e=>(H(),Ii(P(gc),{key:e.slug,to:e.route,class:`lesson-link-card`},{default:L(()=>[W(`span`,Zc,O(e.speakerDuration),1),W(`strong`,null,O(e.title),1),W(`p`,null,O(e.tagline),1)]),_:2},1032,[`to`]))),128))])]),W(`div`,Qc,[G(Nc,{title:`本页结论`,text:`这不是一个只展示公式的站点，而是一套按本科课堂节奏设计的交叉学习网站：先搭主线，再做互动，再回教材和练习。`}),n[1]||=W(`article`,{class:`card close-card`},[W(`h3`,null,`适合谁使用`),W(`blockquote`,null,` 本站适合“信息安全数学 / 信息安全导论 / 密码学基础”中的交叉专题讲授，强调专业但不拗口。 `)],-1)])]))}},el={class:`page`},tl={class:`card`},nl={class:`lessons-grid`},rl={class:`lesson-link-card__tag`},il={class:`lesson-link-card__goal`},al={__name:`LessonsView`,setup(e){return(e,t)=>(H(),U(`section`,el,[G(Rc,{tag:`Interactive Lessons`,title:`互动学习总览`,lead:`每一页都围绕一个交叉核心问题组织，遵循‘问题场景 → 中间过程 → 图表观察 → 课堂结论’的节奏，适合课堂投屏和课后自学。`,badges:[`参数可调`,`图表联动`,`公式直觉`]}),W(`article`,tl,[t[0]||=W(`div`,{class:`card__header`},[W(`h3`,null,`课程模块`),W(`span`,{class:`hint-chip`},`6 Lessons`)],-1),W(`div`,nl,[(H(!0),U(V,null,B(P(Gc),e=>(H(),Ii(P(gc),{key:e.slug,to:e.route,class:`lesson-link-card lesson-link-card--wide`},{default:L(()=>[W(`span`,rl,O(e.speakerDuration),1),W(`strong`,null,O(e.title),1),W(`p`,null,O(e.tagline),1),W(`span`,il,`学习目标：`+O(e.learningGoal),1)]),_:2},1032,[`to`]))),128))])])]))}},ol={class:`card`},sl={class:`card__header`},cl={class:`hint-chip hint-chip--warm`},ll={key:0,class:`explanation`},ul={__name:`ChartPanel`,props:{title:{type:String,default:``},hint:{type:String,default:`图表区`},explanation:{type:String,default:``}},setup(e){return(t,n)=>(H(),U(`article`,ol,[W(`div`,sl,[W(`h3`,null,O(e.title),1),W(`span`,cl,O(e.hint),1)]),fr(t.$slots,`default`),e.explanation?(H(),U(`p`,ll,O(e.explanation),1)):Ki(``,!0)]))}},dl={class:`formula-stack`},fl={__name:`FormulaCardStack`,props:{items:{type:Array,default:()=>[]}},setup(e){return(t,n)=>(H(),U(`div`,dl,[(H(!0),U(V,null,B(e.items,e=>(H(),U(`div`,{key:e.label,class:`formula-card`},[W(`span`,null,O(e.label),1),W(`strong`,null,O(e.formula),1),W(`p`,null,O(e.text),1)]))),128))]))}},pl={class:`card`},ml={class:`card__header`},hl={class:`hint-chip`},gl={class:`controls-panel`},_l={__name:`InteractiveControlPanel`,props:{title:{type:String,default:`交互控制`},hint:{type:String,default:`参数区`}},setup(e){return(t,n)=>(H(),U(`section`,pl,[W(`div`,ml,[W(`h3`,null,O(e.title),1),W(`span`,hl,O(e.hint),1)]),W(`div`,gl,[fr(t.$slots,`default`)])]))}},vl={class:`stat-grid`},yl={__name:`StatCardGrid`,props:{items:{type:Array,default:()=>[]}},setup(e){return(t,n)=>(H(),U(`div`,vl,[(H(!0),U(V,null,B(e.items,e=>(H(),U(`article`,{key:e.label,class:`stat-card`},[W(`span`,null,O(e.label),1),W(`strong`,null,O(e.value),1)]))),128))]))}},bl=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``);function xl(e,t,n){return Math.min(n,Math.max(t,e))}function X(e,t=2){return Number(e.toFixed(t))}function Sl(e){return String(e||``).toUpperCase().replace(/[^A-Z]/g,``)}function Cl(e){let t=xl(Number(e||.5),.01,.99);return[{label:`0`,probability:X(1-t,4)},{label:`1`,probability:X(t,4)}]}function wl(e=.55){let t=xl(Number(e||.55),.26,.88),n=(1-t)/3;return[{label:`A`,probability:X(t,4)},{label:`B`,probability:X(n,4)},{label:`C`,probability:X(n,4)},{label:`D`,probability:X(n,4)}]}function Tl(e){return X(e.reduce((e,t)=>t.probability?e-t.probability*Math.log2(t.probability):e,0),3)}function El(e){let t=Math.max(...e.map(e=>e.probability),0);return X(-Math.log2(t||1),3)}function Dl(e){return e.map(e=>({label:e.label,probability:e.probability,info:X(-Math.log2(e.probability||1),3)}))}function Ol(e){let t=Sl(e),n=Array.from({length:26},()=>0);t.split(``).forEach(e=>{n[e.charCodeAt(0)-65]+=1});let r=t.length||1;return bl.map((e,t)=>({letter:e,count:n[t],ratio:X(n[t]/r*100,2)}))}function kl(e){let t=Sl(e);return t.length?Tl(Ol(t).filter(e=>e.count>0).map(e=>({label:e.letter,probability:e.count/t.length}))):0}function Al(e,t=2){let n=Sl(e),r=new Map;for(let e=0;e<=n.length-t;e+=1){let i=n.slice(e,e+t);r.set(i,(r.get(i)||0)+1)}return[...r.entries()].filter(([,e])=>e>1).sort((e,t)=>t[1]-e[1]).slice(0,8).map(([e,t])=>({fragment:e,count:t}))}function jl(e){let t=Sl(e);if(!t.length)return 0;let n=kl(t),r=t.length*8;return X(t.length*n/r,3)}function Ml(e=120){return Array.from({length:e},()=>bl[Math.floor(Math.random()*bl.length)]).join(``)}function Nl(e){return e.charCodeAt(0)-65}function Pl(e){return String.fromCharCode((e%26+26)%26+65)}function Fl(e){return Ml(e)}function Il(e,t){let n=Sl(e),r=Sl(t);return!n.length||!r.length?``:n.split(``).map((e,t)=>Pl(Nl(e)+Nl(r[t%r.length]))).join(``)}function Ll(e,t){let n=Sl(e),r=Sl(t),i=Math.min(n.length,r.length);return Array.from({length:i},(e,t)=>Pl(Nl(n[t])-Nl(r[t]))).join(``)}function Rl(e,t){return Math.random()<t?e===`1`?`0`:`1`:e}function zl(e,t){return e.split(``).map(e=>e.repeat(t)).join(``)}function Bl(e,t){return e.split(``).map(e=>Rl(e,t)).join(``)}function Vl(e,t){if(!e.length||t<=1)return e;let n=[];for(let r=0;r<e.length;r+=t){let i=e.slice(r,r+t).split(``).filter(e=>e===`1`).length;n.push(i>=Math.ceil(t/2)?`1`:`0`)}return n.join(``)}function Hl(e,t){let n=Math.min(e.length,t.length);if(!n)return 0;let r=0;for(let i=0;i<n;i+=1)e[i]!==t[i]&&(r+=1);return X(r/n,3)}function Ul(e,t,n){let r=String(e||``).replace(/[^01]/g,``),i=Bl(r,t),a=zl(r,n),o=Bl(a,t),s=Vl(o,n);return{clean:r,rawNoisy:i,encoded:a,codedNoisy:o,decoded:s,rawBer:Hl(r,i),codedBer:Hl(r,s)}}function Wl(e){return Array.from({length:9},(e,t)=>X(t*.05,2)).map(t=>{let n=0,r=0;for(let i=0;i<60;i+=1){let i=Ul(`101101001110101001011011001010101100101011010010`,t,e);n+=i.rawBer,r+=i.codedBer}return{noise:t,raw:X(n/60,3),coded:X(r/60,3)}})}function Gl(){return[{label:`123456`,probability:.24},{label:`PASSWORD`,probability:.18},{label:`QWERTY`,probability:.12},{label:`111111`,probability:.08},{label:`ABC123`,probability:.07},{label:`其它`,probability:.31}]}function Kl(e=6){let t=1/e;return Array.from({length:e},(e,n)=>({label:`候选${n+1}`,probability:X(t,4)}))}function ql(e,t){let n=[...e].sort((e,t)=>t.probability-e.probability);return Array.from({length:t},(e,t)=>{let r=n.slice(0,t+1).reduce((e,t)=>e+t.probability,0);return{attempt:t+1,success:X(r,3)}})}function Jl(e,t){return X(Math.min(1,t/10**e),6)}var Yl=[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7];function Xl(e){return Yl[parseInt(e,2)].toString(2).padStart(4,`0`)}function Zl(e,t){return e.split(``).map((e,n)=>e===t[n]?`0`:`1`).join(``)}function Ql(e){return[0,2,4,6,1,3,5,7].map(t=>e[t]).join(``)}function $l(e,t){let n=Zl(e,t);return Ql(Xl(n.slice(0,4))+Xl(n.slice(4,8)))}function eu(e,t,n=0,r=4){let i=String(e||`11001010`).replace(/[^01]/g,``).padEnd(8,`0`).slice(0,8),a=String(t||`10110110`).replace(/[^01]/g,``).padEnd(8,`1`).slice(0,8),o=i.split(``);o[n]=o[n]===`1`?`0`:`1`;let s=i,c=o.join(``),l=[];for(let e=0;e<r;e+=1){s=$l(s,a),c=$l(c,a);let t=s.split(``).map((e,t)=>e===c[t]?`0`:`1`).join(``);l.push({round:e+1,original:s,changed:c,diffBits:t,changedCount:t.split(``).filter(e=>e===`1`).length})}return{clean:i,flipped:o.join(``),key:a,trace:l}}var tu={class:`page`},nu={class:`grid grid--controls-lesson`},ru={class:`field`},iu={class:`field`},au=[`min`,`max`],ou={class:`metric-box`},su={class:`grid grid--two`},cu={class:`card`},lu={class:`table-shell`},uu={__name:`EntropyLessonView`,setup(e){let t=N(`coin`),n=N(50),r=N(null),i=null,a=K(()=>t.value===`coin`?Cl(n.value/100):wl(n.value/100)),o=K(()=>Dl(a.value)),s=K(()=>Tl(a.value)),c=K(()=>El(a.value)),l=K(()=>`${n.value}%`),u=K(()=>[...a.value].sort((e,t)=>t.probability-e.probability)[0]?.label||`-`),d=K(()=>[{label:`结果个数`,value:a.value.length},{label:`香农熵`,value:`${s.value} bit`},{label:`最小熵`,value:`${c.value} bit`},{label:`最可能结果`,value:u.value}]),f=[{label:`信息量`,formula:`I(x) = -log2 P(x)`,text:`事件越少见，信息量越大，因此小概率结果更“意外”。`},{label:`熵`,formula:`H(X) = -Σ p(x) log2 p(x)`,text:`熵是平均不确定性，描述整体上有多难猜。`},{label:`最小熵`,formula:`H∞(X) = -log2 pmax`,text:`它盯的是最容易被先手猜中的结果，非常适合描述弱口令风险。`}],p=K(()=>t.value===`coin`?`当前是二元分布。当某个结果概率升高到 ${l.value} 时，平均不确定性下降到 ${s.value} bit，说明“更偏斜”就更好猜。`:`当前四元分布里，最可能结果占 ${l.value}。虽然仍有 4 个结果，但由于分布高度集中，熵只有 ${s.value} bit，并不等于“4 个结果就一定很难猜”。`),m=[{step:`场景`,title:`先问学生为什么 123456 不安全`,text:`用弱口令引入“长度一样，不确定性却完全不同”的问题。`},{step:`观察`,title:`再切换概率分布`,text:`让学生看到分布越偏，熵越低，最小熵也越低。`},{step:`结论`,title:`最后回到密码学`,text:`说明安全系统喜欢高熵秘密，而不是只看表面字符空间。`}];function h(){!r.value||!window.echarts||(i||=window.echarts.init(r.value),i.setOption({animationDuration:320,tooltip:{trigger:`axis`},legend:{top:6,textStyle:{color:`#50656f`},data:[`概率`,`单次信息量`]},grid:{top:42,left:48,right:22,bottom:36},xAxis:{type:`category`,data:o.value.map(e=>e.label),axisLabel:{color:`#50656f`}},yAxis:[{type:`value`,name:`概率`,max:1,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35,79,102,0.08)`}}},{type:`value`,name:`bit`,axisLabel:{color:`#50656f`}}],series:[{name:`概率`,type:`bar`,data:o.value.map(e=>e.probability),itemStyle:{color:`#234f66`,borderRadius:[5,5,0,0]}},{name:`单次信息量`,type:`line`,smooth:!0,yAxisIndex:1,data:o.value.map(e=>e.info),lineStyle:{color:`#c46b43`,width:3},itemStyle:{color:`#c46b43`}}]}))}function g(){i?.resize()}return nr(()=>{h(),window.addEventListener(`resize`,g)}),ar(()=>{window.removeEventListener(`resize`,g),i?.dispose()}),z([a,t],h,{immediate:!0}),(e,i)=>(H(),U(`section`,tu,[G(Rc,{tag:`Entropy / Uncertainty`,title:`熵、信息量与不确定性`,lead:`这一页要讲清楚一件事：结果种类多不等于更难猜，真正决定不确定性的关键是概率分布。`,badges:[`分布切换`,`熵联动`,`最小熵`]}),G(Wc,{duration:`建议 90-120 秒`,items:m}),G(_l,{title:`参数与场景`,hint:`控制区`},{default:L(()=>[W(`div`,nu,[W(`label`,ru,[i[3]||=W(`span`,null,`分布类型`,-1),R(W(`select`,{"onUpdate:modelValue":i[0]||=e=>t.value=e},[...i[2]||=[W(`option`,{value:`coin`},`二元分布`,-1),W(`option`,{value:`skewed4`},`四元偏斜分布`,-1)]],512),[[fo,t.value]])]),W(`label`,iu,[W(`span`,null,O(t.value===`coin`?`事件 1 的概率`:`最高频结果的概率`),1),R(W(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`range`,min:t.value===`coin`?1:26,max:t.value===`coin`?99:88},null,8,au),[[uo,n.value]])]),W(`div`,ou,[i[4]||=W(`span`,null,`当前参数`,-1),W(`strong`,null,O(l.value),1)])])]),_:1}),G(yl,{items:d.value},null,8,[`items`]),W(`div`,su,[W(`article`,cu,[i[6]||=W(`div`,{class:`card__header`},[W(`h3`,null,`分布与信息量`),W(`span`,{class:`hint-chip`},`中间状态`)],-1),W(`div`,lu,[W(`table`,null,[i[5]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`结果`),W(`th`,null,`概率`),W(`th`,null,`单次信息量`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(o.value,e=>(H(),U(`tr`,{key:e.label},[W(`td`,null,O(e.label),1),W(`td`,null,O(e.probability),1),W(`td`,null,O(e.info)+` bit`,1)]))),128))])])]),G(fl,{items:f})]),G(ul,{title:`概率分布与信息量曲线`,hint:`图表区`,explanation:p.value},{default:L(()=>[W(`div`,{ref_key:`chartRef`,ref:r,class:`chart`},null,512)]),_:1},8,[`explanation`])]),G(Nc,{text:`熵衡量的是平均不确定性，不是结果名字有多少个。分布越集中，最可能结果越容易被先手猜中，熵和最小熵都会下降。`})]))}},du={class:`page`},fu={class:`grid grid--controls-lesson`},pu={class:`field field--wide`},mu={class:`field`},hu={key:0,class:`grid grid--controls-lesson extra-gap`},gu={class:`field field--wide`},_u={class:`grid grid--two`},vu={class:`card`},yu={class:`code-card`},bu={class:`code-card`},xu={class:`code-card`},Su={key:0,class:`code-card`},Cu={__name:`PerfectSecrecyLessonView`,setup(e){let t=N(`MEETATDAWN`),n=N(`SENDSUPPLY`),r=N(!1),i=N(``),a=N(null),o=null,s=K(()=>Sl(t.value)),c=K(()=>Sl(n.value)),l=K(()=>r.value?Math.max(s.value.length,c.value.length):s.value.length),u=K(()=>i.value.slice(0,l.value)),d=K(()=>Il(s.value,u.value)),f=K(()=>r.value?Il(c.value,u.value):``),p=K(()=>r.value&&d.value&&f.value?`C1 - C2 = ${Ll(d.value,f.value)}`:``),m=K(()=>bl.slice(0,8).map(e=>({letter:e,prior:b(1/8),posterior:b(1/8)}))),h=K(()=>[{label:`明文 A 长度`,value:s.value.length||0},{label:`密钥长度`,value:u.value.length||0},{label:`每个位置候选`,value:`26 种`},{label:`当前风险`,value:r.value?`复用暴露关联`:`后验不变`}]),g=K(()=>[{label:`加密公式`,formula:`C = (P + K) mod 26`,text:`这里用字母模 26 的形式展示一次一密思想，便于课堂说明。`},{label:`完美保密`,formula:`P(M|C) = P(M)`,text:`看到密文前后，明文分布不变，说明密文没有新增可利用信息。`},{label:r.value?`复用风险`:`互信息直觉`,formula:r.value?`C1 - C2 = M1 - M2 (mod 26)`:`I(M; C) = 0`,text:r.value?`同一密钥复用后，两条密文被绑在一起，攻击者会得到明文之间的结构关系。`:`理想一次一密的目标是让密文不减少攻击者对明文的不确定性。`}]),_=K(()=>r.value?`左图仍保留“一条密文对应多种明文解释”的直觉，但一旦同一密钥被复用，攻击者就能通过两条密文之间的关系观察到明文差分结构。`:`这里把候选明文的先验和后验画成同样的均匀分布。它要表达的不是“密文没有值”，而是“看到密文后，没有偏向某个特定明文解释”。`),v=K(()=>r.value?`一次一密真正难的地方不在公式，而在于密钥必须随机、等长且绝不复用。一旦复用，同一把密钥会把两条密文绑在一起，安全性会迅速塌陷。`:`一次一密之所以被称为信息论安全的经典例子，是因为它追求的不是“攻击者算不过来”，而是“攻击者看了密文以后也没有获得额外信息”。`),y=[{step:`输入`,title:`先让学生看明文和随机密钥`,text:`强调关键不在公式形式，而在密钥随机、等长、一次性。`},{step:`观察`,title:`再看先验与后验分布`,text:`帮助学生建立“看到密文前后，不确定性没有下降”的直觉。`},{step:`反例`,title:`最后打开密钥复用`,text:`让学生看到同一把密钥一旦复用，结构关系会立刻泄露出来。`}];function b(e){return Number(e.toFixed(3))}function x(){i.value=Fl(Math.max(l.value||1,12))}function S(){i.value.length<l.value&&(i.value+=Fl(l.value-i.value.length))}function C(){!a.value||!window.echarts||(o||=window.echarts.init(a.value),o.setOption({animationDuration:320,tooltip:{trigger:`axis`},legend:{top:6,textStyle:{color:`#50656f`},data:[`看到密文前`,`看到密文后`]},grid:{top:42,left:48,right:18,bottom:36},xAxis:{type:`category`,data:m.value.map(e=>e.letter),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`概率`,max:.18,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35,79,102,0.08)`}}},series:[{name:`看到密文前`,type:`bar`,data:m.value.map(e=>e.prior),itemStyle:{color:`#234f66`,borderRadius:[5,5,0,0]}},{name:`看到密文后`,type:`line`,smooth:!0,data:m.value.map(e=>e.posterior),lineStyle:{color:`#c46b43`,width:3},itemStyle:{color:`#c46b43`}}]}))}function w(){o?.resize()}return z([s,c,r],S,{immediate:!0}),nr(()=>{x(),C(),window.addEventListener(`resize`,w)}),ar(()=>{window.removeEventListener(`resize`,w),o?.dispose()}),z([r,u],C,{immediate:!0}),(e,i)=>(H(),U(`section`,du,[G(Rc,{tag:`Perfect Secrecy / OTP`,title:`完美保密与一次一密`,lead:`这一页的重点不是异或公式本身，而是让学生看见：当密钥随机、等长且只使用一次时，看到密文并不会减少对明文的不确定性。`,badges:[`一次一密`,`密钥复用对比`,`后验直觉`]}),G(Wc,{duration:`建议 100-130 秒`,items:y}),G(_l,{title:`明文、密钥与复用设置`,hint:`控制区`},{default:L(()=>[W(`div`,fu,[W(`label`,pu,[i[3]||=W(`span`,null,`第一条明文`,-1),R(W(`input`,{"onUpdate:modelValue":i[0]||=e=>t.value=e,type:`text`},null,512),[[uo,t.value]])]),W(`label`,mu,[i[5]||=W(`span`,null,`是否复用同一把密钥`,-1),R(W(`select`,{"onUpdate:modelValue":i[1]||=e=>r.value=e},[...i[4]||=[W(`option`,{value:!1},`不复用`,-1),W(`option`,{value:!0},`复用`,-1)]],512),[[fo,r.value]])]),W(`button`,{class:`action-button`,onClick:x},`重生成密钥`)]),r.value?(H(),U(`div`,hu,[W(`label`,gu,[i[6]||=W(`span`,null,`第二条明文`,-1),R(W(`input`,{"onUpdate:modelValue":i[2]||=e=>n.value=e,type:`text`},null,512),[[uo,n.value]])])])):Ki(``,!0)]),_:1}),G(yl,{items:h.value},null,8,[`items`]),W(`div`,_u,[W(`article`,vu,[i[11]||=W(`div`,{class:`card__header`},[W(`h3`,null,`中间状态与关系`),W(`span`,{class:`hint-chip`},`过程区`)],-1),W(`div`,yu,[i[7]||=W(`h4`,null,`规范化明文 A`,-1),W(`p`,null,O(s.value||`请输入英文字符串。`),1)]),W(`div`,bu,[i[8]||=W(`h4`,null,`当前密钥`,-1),W(`p`,null,O(u.value||`点击按钮生成密钥。`),1)]),W(`div`,xu,[i[9]||=W(`h4`,null,`生成密文 A`,-1),W(`p`,null,O(d.value||`密文会显示在这里。`),1)]),r.value?(H(),U(`div`,Su,[i[10]||=W(`h4`,null,`复用时的差分关系`,-1),W(`p`,null,O(p.value||`等待第二条明文。`),1)])):Ki(``,!0),G(fl,{items:g.value},null,8,[`items`])]),G(ul,{title:`先验与后验分布直觉`,hint:`图表区`,explanation:_.value},{default:L(()=>[W(`div`,{ref_key:`chartRef`,ref:a,class:`chart`},null,512)]),_:1},8,[`explanation`])]),G(Nc,{text:v.value},null,8,[`text`])]))}},wu={class:`page`},Tu={class:`grid grid--controls-lesson`},Eu={class:`field field--wide`},Du={class:`field`},Ou={class:`grid grid--two`},ku={class:`card`},Au={class:`code-card`},ju={class:`code-card`},Mu={class:`table-shell`},Nu={__name:`CompressionLessonView`,setup(e){let t=N(`When we speak in natural language, some letters and fragments repeat much more often than others. That is exactly why compression works and why weak ciphers leak structure.`),n=N(120),r=N(``),i=N(null),a=null,o=K(()=>Sl(t.value)),s=K(()=>kl(o.value)),c=K(()=>kl(r.value)),l=K(()=>jl(o.value)),u=K(()=>jl(r.value)),d=K(()=>Al(o.value,2)),f=K(()=>Al(r.value,2)),p=K(()=>Ol(o.value)),m=K(()=>Ol(r.value)),h=K(()=>[{label:`自然语言熵`,value:`${s.value} bit/char`},{label:`随机串熵`,value:`${c.value} bit/char`},{label:`自然语言估计压缩比`,value:l.value},{label:`随机串估计压缩比`,value:u.value}]),g=K(()=>[{label:`长度`,natural:o.value.length,random:r.value.length},{label:`重复二元片段数`,natural:d.value.length,random:f.value.length},{label:`最显著重复片段`,natural:d.value[0]?`${d.value[0].fragment} × ${d.value[0].count}`:`-`,random:f.value[0]?`${f.value[0].fragment} × ${f.value[0].count}`:`-`},{label:`估计可压缩性`,natural:l.value,random:u.value}]),_=[{label:`熵率直觉`,formula:`平均每个字符带来多少新信息`,text:`熵越低，说明长期看结构越明显，也就越有压缩空间。`},{label:`压缩直觉`,formula:`规律越强 → 压缩越有效`,text:`自然语言比真随机串更容易被压缩，因为里面有高频字母和常见搭配。`},{label:`攻击直觉`,formula:`规律越强 → 越容易被利用`,text:`攻击者也会抓住这些重复、偏好和结构来缩小明文猜测空间。`}],v=K(()=>{let e=[...p.value].sort((e,t)=>t.ratio-e.ratio)[0],t=[...m.value].sort((e,t)=>t.ratio-e.ratio)[0];return`当前自然语言中最高频字母是 ${e?.letter||`-`}(${e?.ratio||0}%)，随机串中最高频字母是 ${t?.letter||`-`}(${t?.ratio||0}%)。前者更集中，因此更有结构，也更有可被利用的冗余。`}),y=[{step:`对比`,title:`先把自然语言和随机串并排放`,text:`让学生第一眼看到“可读文本”和“乱串”在结构上不是一回事。`},{step:`观察`,title:`再看熵和重复片段`,text:`说明为什么自然语言更容易被压缩，也更容易被统计攻击。`},{step:`收束`,title:`最后回到密码学设计`,text:`强调好的密文通常应尽量不保留太多可被压缩器或攻击者抓住的规律。`}];function b(){r.value=Ml(Number(n.value))}function x(){!i.value||!window.echarts||(a||=window.echarts.init(i.value),a.setOption({animationDuration:320,tooltip:{trigger:`axis`},legend:{top:6,textStyle:{color:`#50656f`},data:[`自然语言频率`,`随机串频率`]},grid:{top:42,left:46,right:18,bottom:36},xAxis:{type:`category`,data:p.value.map(e=>e.letter),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`%`,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35,79,102,0.08)`}}},series:[{name:`自然语言频率`,type:`bar`,data:p.value.map(e=>e.ratio),itemStyle:{color:`#234f66`,borderRadius:[5,5,0,0]}},{name:`随机串频率`,type:`line`,smooth:!0,data:m.value.map(e=>e.ratio),lineStyle:{color:`#c46b43`,width:3},itemStyle:{color:`#c46b43`}}]}))}function S(){a?.resize()}return nr(()=>{b(),x(),window.addEventListener(`resize`,S)}),ar(()=>{window.removeEventListener(`resize`,S),a?.dispose()}),z([t,r],x,{immediate:!0}),z(n,b),(e,a)=>(H(),U(`section`,wu,[G(Rc,{tag:`Compression / Redundancy`,title:`压缩、冗余与密码分析`,lead:`这一页要说明：压缩器和攻击者都在找规律。一个在利用规律减少长度，另一个在利用规律恢复秘密。`,badges:[`自然语言对比`,`随机串对比`,`冗余结构`]}),G(Wc,{duration:`建议 90-120 秒`,items:y}),G(_l,{title:`文本与随机样本`,hint:`控制区`},{default:L(()=>[W(`div`,Tu,[W(`label`,Eu,[a[2]||=W(`span`,null,`自然语言样本`,-1),R(W(`textarea`,{"onUpdate:modelValue":a[0]||=e=>t.value=e,rows:`5`},null,512),[[uo,t.value]])]),W(`label`,Du,[a[3]||=W(`span`,null,`随机串长度`,-1),R(W(`input`,{"onUpdate:modelValue":a[1]||=e=>n.value=e,type:`range`,min:`40`,max:`220`},null,512),[[uo,n.value]])]),W(`button`,{class:`action-button`,onClick:b},`重生成随机串`)])]),_:1}),G(yl,{items:h.value},null,8,[`items`]),W(`div`,Ou,[W(`article`,ku,[a[7]||=W(`div`,{class:`card__header`},[W(`h3`,null,`两段文本的可压缩特征`),W(`span`,{class:`hint-chip`},`中间状态`)],-1),W(`div`,Au,[a[4]||=W(`h4`,null,`自然语言规范化`,-1),W(`p`,null,O(o.value),1)]),W(`div`,ju,[a[5]||=W(`h4`,null,`随机串样本`,-1),W(`p`,null,O(r.value),1)]),W(`div`,Mu,[W(`table`,null,[a[6]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`指标`),W(`th`,null,`自然语言`),W(`th`,null,`随机串`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(g.value,e=>(H(),U(`tr`,{key:e.label},[W(`td`,null,O(e.label),1),W(`td`,null,O(e.natural),1),W(`td`,null,O(e.random),1)]))),128))])])]),G(fl,{items:_})]),G(ul,{title:`字符频率与结构差异`,hint:`图表区`,explanation:v.value},{default:L(()=>[W(`div`,{ref_key:`chartRef`,ref:i,class:`chart`},null,512)]),_:1},8,[`explanation`])]),G(Nc,{text:`压缩之所以有效，是因为数据里存在可预测结构；统计攻击之所以有效，也是因为明文或系统行为里存在可预测结构。好的加密设计需要尽量隐藏这些结构。`})]))}},Pu={class:`page`},Fu={class:`grid grid--controls-lesson`},Iu={class:`field field--wide`},Lu={class:`field`},Ru={class:`field`},zu={class:`grid grid--two`},Bu={class:`card`},Vu={class:`code-card`},Hu={class:`code-card`},Uu={class:`code-card`},Wu={class:`code-card`},Gu={__name:`ChannelLessonView`,setup(e){let t=N(`10110100111010100101101100101010`),n=N(15),r=N(3),i=N(0),a=N(null),o=null,s=K(()=>(i.value,Ul(t.value,n.value/100,Number(r.value)))),c=K(()=>Wl(Number(r.value))),l=K(()=>[{label:`噪声概率`,value:`${n.value}%`},{label:`重复码因子`,value:r.value},{label:`直接传输误码率`,value:s.value.rawBer},{label:`纠错后误码率`,value:s.value.codedBer}]),u=K(()=>[{label:`重复编码`,formula:`0 → ${`0`.repeat(Number(r.value))}，1 → ${`1`.repeat(Number(r.value))}`,text:`这里用最简单的重复码演示“主动加冗余换可靠性”的直觉。`},{label:`多数表决`,formula:`一个分组里 1 多就判 1，0 多就判 0`,text:`只要噪声没有把大多数位都翻掉，接收方就还有机会纠正错误。`},{label:`课堂结论`,formula:`可靠性 ≠ 保密性`,text:`纠错是为了让自己人收得回来，不是为了让别人看不懂。`}]),d=K(()=>`当前噪声为 ${n.value}% 时，直接传输误码率约为 ${s.value.rawBer}，加入重复码后误码率约为 ${s.value.codedBer}。这说明适量冗余可以显著提高可靠性，但它解决的不是保密问题。`),f=[{step:`引入`,title:`先问二维码为什么脏一点还能扫`,text:`帮助学生先接受“系统有时需要主动加冗余”这个事实。`},{step:`观察`,title:`再拖动噪声滑块`,text:`让学生直观看到未编码和编码后误码率的差异。`},{step:`结论`,title:`最后区分纠错和加密`,text:`强调可靠传输与保密传输的服务对象和目标都不同。`}];function p(){i.value+=1}function m(){!a.value||!window.echarts||(o||=window.echarts.init(a.value),o.setOption({animationDuration:320,tooltip:{trigger:`axis`},legend:{top:6,textStyle:{color:`#50656f`},data:[`直接传输`,`重复码纠错`]},grid:{top:42,left:48,right:18,bottom:36},xAxis:{type:`category`,data:c.value.map(e=>`${Math.round(e.noise*100)}%`),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`BER`,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35,79,102,0.08)`}}},series:[{name:`直接传输`,type:`line`,smooth:!0,data:c.value.map(e=>e.raw),lineStyle:{color:`#c46b43`,width:3},itemStyle:{color:`#c46b43`}},{name:`重复码纠错`,type:`line`,smooth:!0,data:c.value.map(e=>e.coded),lineStyle:{color:`#234f66`,width:3},itemStyle:{color:`#234f66`}}]}))}function h(){o?.resize()}return nr(()=>{m(),window.addEventListener(`resize`,h)}),ar(()=>{window.removeEventListener(`resize`,h),o?.dispose()}),z([c,n,r],m,{immediate:!0}),(e,i)=>(H(),U(`section`,Pu,[G(Rc,{tag:`Channel / Noise / Coding`,title:`信道、噪声、纠错与安全通信`,lead:`这一页要讲清楚：可靠传输和保密传输不是一回事。加密解决的是别人看不懂，纠错解决的是自己人能不能在噪声下收回来。`,badges:[`误码率`,`重复码`,`噪声滑块`]}),G(Wc,{duration:`建议 100-130 秒`,items:f}),G(_l,{title:`噪声与重复码设置`,hint:`控制区`},{default:L(()=>[W(`div`,Fu,[W(`label`,Iu,[i[3]||=W(`span`,null,`输入二进制消息`,-1),R(W(`input`,{"onUpdate:modelValue":i[0]||=e=>t.value=e,type:`text`},null,512),[[uo,t.value]])]),W(`label`,Lu,[i[4]||=W(`span`,null,`噪声概率`,-1),R(W(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`range`,min:`0`,max:`40`},null,512),[[uo,n.value]])]),W(`label`,Ru,[i[5]||=W(`span`,null,`重复码因子`,-1),R(W(`input`,{"onUpdate:modelValue":i[2]||=e=>r.value=e,type:`range`,min:`1`,max:`7`,step:`2`},null,512),[[uo,r.value]])]),W(`button`,{class:`action-button`,onClick:p},`重新抽样`)])]),_:1}),G(yl,{items:l.value},null,8,[`items`]),W(`div`,zu,[W(`article`,Bu,[i[10]||=W(`div`,{class:`card__header`},[W(`h3`,null,`原始传输与纠错传输`),W(`span`,{class:`hint-chip`},`过程区`)],-1),W(`div`,Vu,[i[6]||=W(`h4`,null,`原始消息`,-1),W(`p`,null,O(s.value.clean),1)]),W(`div`,Hu,[i[7]||=W(`h4`,null,`未编码直接经过噪声`,-1),W(`p`,null,O(s.value.rawNoisy),1)]),W(`div`,Uu,[i[8]||=W(`h4`,null,`重复码编码后经过噪声`,-1),W(`p`,null,O(s.value.codedNoisy),1)]),W(`div`,Wu,[i[9]||=W(`h4`,null,`多数表决解码结果`,-1),W(`p`,null,O(s.value.decoded),1)]),G(fl,{items:u.value},null,8,[`items`])]),G(ul,{title:`噪声变化下的误码率`,hint:`图表区`,explanation:d.value},{default:L(()=>[W(`div`,{ref_key:`chartRef`,ref:a,class:`chart`},null,512)]),_:1},8,[`explanation`])]),G(Nc,{text:`纠错机制是在主动加入冗余，目的是让合法接收方在有噪声时恢复信息；加密机制是在隐藏结构，目的是让窃听者即使截获也看不懂。二者服务的不是同一个目标。`})]))}},Ku={class:`page`},qu={class:`grid grid--controls-lesson`},Ju={class:`field`},Yu={class:`field`},Xu={class:`field`},Zu={class:`grid grid--two`},Qu={class:`card`},$u={class:`table-shell`},ed={__name:`RandomnessLessonView`,setup(e){let t=N(3),n=N(6),r=N(3),i=N(null),a=null,o=Gl(),s=Kl(o.length),c=K(()=>ql(o,Number(t.value))),l=K(()=>ql(s,Number(t.value))),u=Tl(o),d=El(o),f=Tl(s),p=K(()=>Jl(Number(n.value),Number(r.value))),m=o.map((e,t)=>({label:e.label,weak:e.probability,uniform:s[t].probability})),h=K(()=>[{label:`弱口令熵`,value:`${u} bit`},{label:`弱口令最小熵`,value:`${d} bit`},{label:`均匀分布熵`,value:`${f} bit`},{label:`验证码当前命中率`,value:p.value}]),g=[{label:`最小熵`,formula:`H∞(X) = -log2 pmax`,text:`它直接盯最可能结果，有多适合攻击者先手猜测。`},{label:`累计猜测成功率`,formula:`按概率从高到低排序后累加`,text:`攻击者从不均匀分布中受益，因为他可以优先试最常见候选。`},{label:`验证码补强`,formula:`低熵秘密 + 限时/限次/风控`,text:`这说明协议层设计常常在帮低熵对象补安全性。`}],_=K(()=>`允许 ${t.value} 次优先猜测时，弱口令分布下的累计成功率明显高于均匀分布。与此同时，${n.value} 位验证码在允许 ${r.value} 次尝试时的单会话命中率约为 ${p.value}，所以系统必须叠加限时、限次和风控。`),v=[{step:`引入`,title:`先问为什么 123456 不安全`,text:`帮助学生把“真实分布”放到比“理论空间”更重要的位置。`},{step:`观察`,title:`再看累计猜中概率`,text:`让学生直观看到弱分布会让攻击者用很少尝试就获得高成功率。`},{step:`延伸`,title:`最后解释验证码为什么还能用`,text:`强调低熵秘密不是不能用，而是必须靠协议层策略补强。`}];function y(){!i.value||!window.echarts||(a||=window.echarts.init(i.value),a.setOption({animationDuration:320,tooltip:{trigger:`axis`},legend:{top:6,textStyle:{color:`#50656f`},data:[`弱口令分布`,`均匀分布`]},grid:{top:42,left:46,right:18,bottom:36},xAxis:{type:`category`,data:c.value.map(e=>`第${e.attempt}次`),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`成功率`,max:1,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35,79,102,0.08)`}}},series:[{name:`弱口令分布`,type:`line`,smooth:!0,data:c.value.map(e=>e.success),lineStyle:{color:`#c46b43`,width:3},itemStyle:{color:`#c46b43`}},{name:`均匀分布`,type:`line`,smooth:!0,data:l.value.map(e=>e.success),lineStyle:{color:`#234f66`,width:3},itemStyle:{color:`#234f66`}}]}))}function b(){a?.resize()}return nr(()=>{y(),window.addEventListener(`resize`,b)}),ar(()=>{window.removeEventListener(`resize`,b),a?.dispose()}),z([t],y,{immediate:!0}),(e,a)=>(H(),U(`section`,Ku,[G(Rc,{tag:`Randomness / Leakage`,title:`随机性、密钥与信息泄露`,lead:`这一页要让学生真正接受：理论密钥空间看起来很大，不代表攻击者面对的是一个均匀分布。真正的问题是分布偏不偏、最常见候选有多容易被先手猜中。`,badges:[`弱口令对比`,`猜测成功率`,`验证码补强`]}),G(Wc,{duration:`建议 90-120 秒`,items:v}),G(_l,{title:`猜测能力与验证码参数`,hint:`控制区`},{default:L(()=>[W(`div`,qu,[W(`label`,Ju,[a[3]||=W(`span`,null,`最多允许猜测次数`,-1),R(W(`input`,{"onUpdate:modelValue":a[0]||=e=>t.value=e,type:`range`,min:`1`,max:`6`},null,512),[[uo,t.value]])]),W(`label`,Yu,[a[4]||=W(`span`,null,`验证码位数`,-1),R(W(`input`,{"onUpdate:modelValue":a[1]||=e=>n.value=e,type:`range`,min:`4`,max:`8`},null,512),[[uo,n.value]])]),W(`label`,Xu,[a[5]||=W(`span`,null,`验证码尝试次数`,-1),R(W(`input`,{"onUpdate:modelValue":a[2]||=e=>r.value=e,type:`range`,min:`1`,max:`10`},null,512),[[uo,r.value]])])])]),_:1}),G(yl,{items:h.value},null,8,[`items`]),W(`div`,Zu,[W(`article`,Qu,[a[7]||=W(`div`,{class:`card__header`},[W(`h3`,null,`弱分布与均匀分布`),W(`span`,{class:`hint-chip`},`中间状态`)],-1),W(`div`,$u,[W(`table`,null,[a[6]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`候选`),W(`th`,null,`弱口令概率`),W(`th`,null,`均匀分布概率`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(P(m),e=>(H(),U(`tr`,{key:e.label},[W(`td`,null,O(e.label),1),W(`td`,null,O(e.weak),1),W(`td`,null,O(e.uniform),1)]))),128))])])]),G(fl,{items:g})]),G(ul,{title:`累计猜中概率`,hint:`图表区`,explanation:_.value},{default:L(()=>[W(`div`,{ref_key:`chartRef`,ref:i,class:`chart`},null,512)]),_:1},8,[`explanation`])]),G(Nc,{text:`系统安全不只看‘理论上能有多少种’，更要看‘现实中大家实际怎么选’。这也是为什么验证码、口令策略、限次风控和随机数质量在安全设计里都非常关键。`})]))}},td={class:`page`},nd={class:`grid grid--controls-lesson`},rd={class:`field`},id={class:`field`},ad={class:`field`},od={class:`field`},sd={class:`grid grid--two`},cd={class:`card`},ld={class:`code-card`},ud={class:`code-card`},dd={class:`table-shell`},fd={__name:`ModernDesignLessonView`,setup(e){let t=N(`11001010`),n=N(`10110110`),r=N(3),i=N(4),a=N(null),o=null,s=K(()=>eu(t.value,n.value,Number(r.value)-1,Number(i.value))),c=K(()=>[{label:`输入位翻转位置`,value:r.value},{label:`轮数`,value:i.value},{label:`最终不同位数`,value:s.value.trace.at(-1)?.changedCount||0},{label:`当前轮密钥`,value:s.value.key}]),l=[{label:`混淆`,formula:`密钥与输出关系尽量复杂`,text:`让攻击者难以从局部输出反推密钥结构。`},{label:`扩散`,formula:`局部变化影响尽量摊开`,text:`让明文的一点结构不要在密文里局部保留下来。`},{label:`雪崩效应`,formula:`输入改 1 位 → 输出改很多位`,text:`这是现代密码想要的外在表现之一。`}],u=K(()=>`这里把输入块的第 ${r.value} 位翻转后，观察每一轮的输出差异。若轮数增加时不同位数逐步扩散，说明局部变化正在被打散，这就是课堂上常说的雪崩效应直觉。`),d=[{step:`引入`,title:`先强调这是玩具模型`,text:`目标不是构造真实安全算法，而是帮助学生看懂扩散和混淆的方向。`},{step:`观察`,title:`再翻转一位输入`,text:`让学生观察为什么输出不能只在原位置附近变化。`},{step:`收束`,title:`最后连回 Shannon 思想`,text:`说明现代密码为什么会反复强调扩散、混淆和雪崩效应。`}];function f(){!a.value||!window.echarts||(o||=window.echarts.init(a.value),o.setOption({animationDuration:320,tooltip:{trigger:`axis`},grid:{top:36,left:46,right:18,bottom:36},xAxis:{type:`category`,data:s.value.trace.map(e=>`第${e.round}轮`),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`不同位数`,max:8,axisLabel:{color:`#50656f`},splitLine:{lineStyle:{color:`rgba(35,79,102,0.08)`}}},series:[{type:`bar`,data:s.value.trace.map(e=>e.changedCount),itemStyle:{color:`#234f66`,borderRadius:[5,5,0,0]}}]}))}function p(){o?.resize()}return nr(()=>{f(),window.addEventListener(`resize`,p)}),ar(()=>{window.removeEventListener(`resize`,p),o?.dispose()}),z([s],f,{immediate:!0}),(e,o)=>(H(),U(`section`,td,[G(Rc,{tag:`Shannon / Diffusion / Confusion`,title:`现代密码中的信息论思想`,lead:`这一页通过一个玩具级的替代-置换过程，让学生直观看到：为什么现代密码希望输入只改一位，输出就出现大范围变化。`,badges:[`玩具模型`,`雪崩效应`,`扩散观察`]}),G(Wc,{duration:`建议 100-130 秒`,items:d}),G(_l,{title:`玩具分组参数`,hint:`控制区`},{default:L(()=>[W(`div`,nd,[W(`label`,rd,[o[4]||=W(`span`,null,`8 位输入块`,-1),R(W(`input`,{"onUpdate:modelValue":o[0]||=e=>t.value=e,type:`text`},null,512),[[uo,t.value]])]),W(`label`,id,[o[5]||=W(`span`,null,`8 位轮密钥`,-1),R(W(`input`,{"onUpdate:modelValue":o[1]||=e=>n.value=e,type:`text`},null,512),[[uo,n.value]])]),W(`label`,ad,[o[6]||=W(`span`,null,`翻转第几位`,-1),R(W(`input`,{"onUpdate:modelValue":o[2]||=e=>r.value=e,type:`range`,min:`1`,max:`8`},null,512),[[uo,r.value]])]),W(`label`,od,[o[7]||=W(`span`,null,`轮数`,-1),R(W(`input`,{"onUpdate:modelValue":o[3]||=e=>i.value=e,type:`range`,min:`1`,max:`4`},null,512),[[uo,i.value]])])])]),_:1}),G(yl,{items:c.value},null,8,[`items`]),W(`div`,sd,[W(`article`,cd,[o[11]||=W(`div`,{class:`card__header`},[W(`h3`,null,`逐轮变化过程`),W(`span`,{class:`hint-chip`},`过程区`)],-1),W(`div`,ld,[o[8]||=W(`h4`,null,`原始输入`,-1),W(`p`,null,O(s.value.clean),1)]),W(`div`,ud,[o[9]||=W(`h4`,null,`翻转一位后的输入`,-1),W(`p`,null,O(s.value.flipped),1)]),W(`div`,dd,[W(`table`,null,[o[10]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`轮数`),W(`th`,null,`原输出`),W(`th`,null,`翻转后输出`),W(`th`,null,`不同位数`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(s.value.trace,e=>(H(),U(`tr`,{key:e.round},[W(`td`,null,O(e.round),1),W(`td`,null,O(e.original),1),W(`td`,null,O(e.changed),1),W(`td`,null,O(e.changedCount),1)]))),128))])])]),G(fl,{items:l})]),G(ul,{title:`雪崩效应观察`,hint:`图表区`,explanation:u.value},{default:L(()=>[W(`div`,{ref_key:`chartRef`,ref:a,class:`chart`},null,512)]),_:1},8,[`explanation`])]),G(Nc,{text:`现代密码设计不希望输入中的局部变化只在输出中留下局部痕迹。扩散让影响摊开，混淆让关系复杂化，这正是 Shannon 思想对后续密码设计最重要的启发之一。`})]))}};function pd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var md=pd();function hd(e){md=e}var gd={exec:()=>null};function Z(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Q.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var _d=(()=>{try{return!0}catch{return!1}})(),Q={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},vd=/^(?:[ \t]*(?:\n|$))+/,yd=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,bd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,xd=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Sd=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Cd=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,wd=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Td=Z(wd).replace(/bull/g,Cd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Ed=Z(wd).replace(/bull/g,Cd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Dd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Od=/^[^\n]+/,kd=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ad=Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,kd).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),jd=Z(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Cd).getRegex(),Md=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Nd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Pd=Z(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Nd).replace(`tag`,Md).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Fd=Z(Dd).replace(`hr`,xd).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Md).getRegex(),Id={blockquote:Z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Fd).getRegex(),code:yd,def:Ad,fences:bd,heading:Sd,hr:xd,html:Pd,lheading:Td,list:jd,newline:vd,paragraph:Fd,table:gd,text:Od},Ld=Z(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,xd).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Md).getRegex(),Rd={...Id,lheading:Ed,table:Ld,paragraph:Z(Dd).replace(`hr`,xd).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Ld).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Md).getRegex()},zd={...Id,html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Nd).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:gd,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Z(Dd).replace(`hr`,xd).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Td).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Bd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Vd=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Hd=/^( {2,}|\\)\n(?!\s*$)/,Ud=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Wd=/[\p{P}\p{S}]/u,Gd=/[\s\p{P}\p{S}]/u,Kd=/[^\s\p{P}\p{S}]/u,qd=Z(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Gd).getRegex(),Jd=/(?!~)[\p{P}\p{S}]/u,Yd=/(?!~)[\s\p{P}\p{S}]/u,Xd=/(?:[^\s\p{P}\p{S}]|~)/u,Zd=Z(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,_d?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Qd=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,$d=Z(Qd,`u`).replace(/punct/g,Wd).getRegex(),ef=Z(Qd,`u`).replace(/punct/g,Jd).getRegex(),tf=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,nf=Z(tf,`gu`).replace(/notPunctSpace/g,Kd).replace(/punctSpace/g,Gd).replace(/punct/g,Wd).getRegex(),rf=Z(tf,`gu`).replace(/notPunctSpace/g,Xd).replace(/punctSpace/g,Yd).replace(/punct/g,Jd).getRegex(),af=Z(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Kd).replace(/punctSpace/g,Gd).replace(/punct/g,Wd).getRegex(),of=Z(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,Wd).getRegex(),sf=Z(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Kd).replace(/punctSpace/g,Gd).replace(/punct/g,Wd).getRegex(),cf=Z(/\\(punct)/,`gu`).replace(/punct/g,Wd).getRegex(),lf=Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),uf=Z(Nd).replace(`(?:-->|$)`,`-->`).getRegex(),df=Z(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,uf).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ff=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,pf=Z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,ff).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),mf=Z(/^!?\[(label)\]\[(ref)\]/).replace(`label`,ff).replace(`ref`,kd).getRegex(),hf=Z(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,kd).getRegex(),gf=Z(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,mf).replace(`nolink`,hf).getRegex(),_f=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,vf={_backpedal:gd,anyPunctuation:cf,autolink:lf,blockSkip:Zd,br:Hd,code:Vd,del:gd,delLDelim:gd,delRDelim:gd,emStrongLDelim:$d,emStrongRDelimAst:nf,emStrongRDelimUnd:af,escape:Bd,link:pf,nolink:hf,punctuation:qd,reflink:mf,reflinkSearch:gf,tag:df,text:Ud,url:gd},yf={...vf,link:Z(/^!?\[(label)\]\((.*?)\)/).replace(`label`,ff).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,ff).getRegex()},bf={...vf,emStrongRDelimAst:rf,emStrongLDelim:ef,delLDelim:of,delRDelim:sf,url:Z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,_f).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Z(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,_f).getRegex()},xf={...bf,br:Z(Hd).replace(`{2,}`,`*`).getRegex(),text:Z(bf.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Sf={normal:Id,gfm:Rd,pedantic:zd},Cf={normal:vf,gfm:bf,breaks:xf,pedantic:yf},wf={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Tf=e=>wf[e];function Ef(e,t){if(t){if(Q.escapeTest.test(e))return e.replace(Q.escapeReplace,Tf)}else if(Q.escapeTestNoEncode.test(e))return e.replace(Q.escapeReplaceNoEncode,Tf);return e}function Df(e){try{e=encodeURI(e).replace(Q.percentDecode,`%`)}catch{return null}return e}function Of(e,t){let n=e.replace(Q.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Q.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(Q.slashPipe,`|`);return n}function kf(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Af(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&!t[n].trim();)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function jf(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Mf(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Nf(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Pf(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Ff=class{options;rules;lexer;constructor(e){this.options=e||md}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Af(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Pf(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=kf(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:kf(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:kf(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=kf(t[0],`
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
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Mf(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Af(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:kf(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Of(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:kf(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Of(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:kf(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=kf(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=jf(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Nf(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Nf(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},If=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||md,this.options.tokenizer=this.options.tokenizer||new Ff,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:Q,block:Sf.normal,inline:Cf.normal};this.options.pedantic?(t.block=Sf.pedantic,t.inline=Cf.pedantic):this.options.gfm&&(t.block=Sf.gfm,this.options.breaks?t.inline=Cf.breaks:t.inline=Cf.gfm),this.tokenizer.rules=t}static get rules(){return{block:Sf,inline:Cf}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Q.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Q.tabCharGlobal,`    `).replace(Q.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
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
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},Lf=class{options;parser;constructor(e){this.options=e||md}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Q.notSpaceStart)?.[0],i=e.replace(Q.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Ef(r)+`">`+(n?i:Ef(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Ef(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ef(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Df(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Ef(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Df(e);if(i===null)return Ef(n);e=i;let a=`<img src="${e}" alt="${Ef(n)}"`;return t&&(a+=` title="${Ef(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Ef(e.text)}},Rf=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},zf=class e{options;renderer;textRenderer;constructor(e){this.options=e||md,this.options.renderer=this.options.renderer||new Lf,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Rf}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Bf=class{options;block;constructor(e){this.options=e||md}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?If.lex:If.lexInline}provideParser(e=this.block){return e?zf.parse:zf.parseInline}},Vf=new class{defaults=pd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=zf;Renderer=Lf;TextRenderer=Rf;Lexer=If;Tokenizer=Ff;Hooks=Bf;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Lf(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Ff(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Bf;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Bf.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Bf.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return If.lex(e,t??this.defaults)}parser(e,t){return zf.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?If.lex:If.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?zf.parse:zf.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?If.lex:If.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?zf.parse:zf.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Ef(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return Vf.parse(e,t)}$.options=$.setOptions=function(e){return Vf.setOptions(e),$.defaults=Vf.defaults,hd($.defaults),$},$.getDefaults=pd,$.defaults=md,$.use=function(...e){return Vf.use(...e),$.defaults=Vf.defaults,hd($.defaults),$},$.walkTokens=function(e,t){return Vf.walkTokens(e,t)},$.parseInline=Vf.parseInline,$.Parser=zf,$.parser=zf.parse,$.Renderer=Lf,$.TextRenderer=Rf,$.Lexer=If,$.lexer=If.lex,$.Tokenizer=Ff,$.Hooks=Bf,$.parse=$,$.options,$.setOptions,$.use,$.walkTokens,$.parseInline,zf.parse,If.lex;var Hf={class:`docs-sidebar card`},Uf={class:`soft-text`},Wf={class:`doc-links`},Gf={class:`doc-link__index`},Kf={__name:`DocSidebar`,props:{docs:{type:Array,default:()=>[]},currentSlug:{type:String,default:``},note:{type:String,default:`构建阶段会扫描项目内的 Markdown 教材，并把正文静态打进前端资源。`}},setup(e){function t(e){return String(e).padStart(2,`0`)}return(n,r)=>(H(),U(`aside`,Hf,[r[0]||=W(`div`,{class:`card__header`},[W(`h3`,null,`文档目录`),W(`span`,{class:`hint-chip`},`目录区`)],-1),W(`p`,Uf,O(e.note),1),W(`div`,Wf,[(H(!0),U(V,null,B(e.docs,(n,r)=>(H(),Ii(P(gc),{key:n.slug,class:ge([`doc-link`,{"doc-link--active":n.slug===e.currentSlug}]),to:`/docs/${encodeURIComponent(n.slug)}`},{default:L(()=>[W(`em`,Gf,O(t(r+1)),1),W(`strong`,null,O(n.title),1),W(`span`,null,O(n.filename),1)]),_:2},1032,[`class`,`to`]))),128))])]))}},qf=[{slug:`00-教师备课说明`,title:`00 教师备课说明`,filename:`00-教师备课说明.md`,content:`# 00 教师备课说明

这套材料虽然写成教材形态，但这份文件专门服务于“信息安全数学”备课。它的目标不是补充更多定义，而是帮助老师判断：这一章该怎么开头、哪里最容易把学生讲糊涂、哪些生活例子最适合把抽象概念落下来。

## 一、这套课最适合怎么讲

最建议的讲法不是“先定义、再公式、再证明”，而是：

1. 先用学生熟悉的场景提问。
2. 再指出场景中真正的问题是什么。
3. 再引出信息论概念。
4. 最后说明它在密码学里到底有什么用。

例如，不要一上来就写熵公式，而可以先问：

- 为什么 \`123456\` 明明也有 6 位，却大家都说它不安全？
- 为什么压缩包通常先压缩再加密？
- 为什么二维码脏了一块还能扫出来？

学生一旦先接受了问题场景，后面的概念就不再是“空中公式”。

## 二、这门交叉专题最怕什么

最怕三件事：

### 1. 只讲公式，不讲直觉

学生可能能抄下 \`H(X)\`、\`I(X;Y)\`，但并不知道它们到底在说什么。

### 2. 只讲信息论，不回到密码学

如果学生听完一章后仍回答不出“这个概念为什么对密码学有用”，那交叉专题就没有真正成立。

### 3. 例子太远离生活

如果全程都用抽象消息源、理想信道、符号系统，学生很容易把这门课理解成“又一套符号推导”。一定要频繁回到他们每天都在使用的对象，例如聊天软件、验证码、Wi-Fi、二维码、压缩包、网盘、支付系统。

## 三、每章最推荐的课堂切入点

### 第 1 章 为什么密码学离不开信息论

推荐开场问题：

- 聊天软件发一张图，背后为什么既要压缩，又要纠错，还要加密？

这章的任务不是推导，而是搭地图。一定要让学生先看见“三条主线”：

- 高效
- 可靠
- 安全

只要这张图立住了，后面章节就不容易散。

### 第 2 章 熵、信息量与不确定性

推荐开场问题：

- 为什么 \`123456\` 和“随机 6 位串”长度一样，安全感却完全不同？

这章最容易卡住的地方，是学生会把“结果个数多”误认为“熵一定大”。一定要反复强调：**关键不是取值个数，而是概率分布。**

建议讲课顺序：

1. 先讲“越难猜，信息量越大”。
2. 再讲熵是平均不确定性。
3. 最后再讲条件熵和互信息，把它们和“泄露多少”关联起来。

### 第 3 章 完美保密、一次一密与香农视角

推荐开场问题：

- 有没有一种加密方法，攻击者截获密文以后，理论上什么也没多知道？

这章是全套课的重心。一定不要把它讲成“异或技巧课”，而要讲成“信息论安全最经典的思想实验”。

学生最容易误解的点：

- 误以为一次一密安全是因为“公式很高级”
- 忽略“一次”这两个字

一定要把“复用密钥为什么会塌”讲透。

### 第 4 章 压缩、冗余与密码分析

推荐开场问题：

- 为什么加密后的文件通常很难再压缩？

这章非常适合用“压缩器和攻击者都爱找规律”这一句话来统领。

课堂上最值得反复强调的是：

- 压缩利用冗余
- 攻击利用冗余
- 好的加密要尽量不把这些规律裸露出来

### 第 5 章 信道、噪声、纠错与安全通信

推荐开场问题：

- 为什么二维码破了一点还能扫，但加密内容破了一点却可能整段报错？

这章最容易和第四章混淆。建议明确对比：

- 压缩是在减冗余
- 纠错是在加冗余

让学生先接受“目标不同，所以做法相反”，后面就顺了。

### 第 6 章 随机性、密钥与信息泄露

推荐开场问题：

- 为什么很多安全事故不是算法被数学攻破，而是随机数出问题？

这章讲课时，一定要让学生明白“密钥长度”不是全部，“随机分布质量”同样关键。最适合的生活例子就是弱口令、时间戳种子、短信验证码和登录风控。

### 第 7 章 现代密码中的信息论思想

推荐开场问题：

- 为什么现代密码要追求“改一位，输出大变”？

这章不要上来堆理论术语，可以先从图片马赛克、重复图案暴露轮廓、固定模式暴露结构这些可视化直觉切入，再讲混淆、扩散和雪崩效应。

### 第 8 章 生活案例、综合练习与课程总结

这章最适合作为串讲课、复习课或展示课。建议让学生做两件事：

1. 选一个自己每天在用的系统。
2. 从压缩、纠错、加密、元数据四个角度去拆它。

这样学生会从“听懂”真正走向“会说”。

## 四、板书和 PPT 最好怎么组织

建议每章板书都尽量保持三层结构：

1. 一个现实问题
2. 一个核心概念
3. 一个密码学落点

例如讲互信息时，板书可以是：

- 现实问题：密文到底泄露了多少
- 核心概念：不确定性的减少量
- 密码学落点：完美保密要求泄露为零

这样学生记住的不是孤立符号，而是一条逻辑链。

## 五、哪些地方要放慢

以下地方最值得放慢讲：

- 熵不是“种类数”，而是“平均不确定性”
- 一次一密的安全不在异或，而在随机、等长、一次性
- 压缩和纠错为什么一个减冗余、一个加冗余
- 元数据为什么也算信息泄露
- 随机数质量为什么是密钥安全的源头

## 六、哪些地方可以少讲公式，多讲图景

如果课时紧张，下面这些内容建议优先保留直觉，不必深推：

- 互信息的形式化推导
- 保密容量的严格定义
- KL 散度的数学细节
- 熵率的精细计算

但它们的直觉用途最好还是点到：

- 互信息对应泄露量
- 保密容量对应“带窃听者时还能安全传多快”
- KL 散度对应“两个分布有多好区分”
- 熵率对应“长序列平均每个符号还有多少新信息”

## 七、最适合留给学生的课后任务

建议少出纯定义背诵题，多出“联系现实”的任务，例如：

- 为什么压缩通常放在加密前面？
- 为什么验证码不长，却还能在现实中够用？
- 为什么 Wi-Fi、二维码、聊天软件都同时需要可靠性与安全性？
- 为什么“看起来像乱码”不等于“已经安全”？

这类题能逼着学生把概念真正用起来。

## 八、一句话备课提醒

这套专题课最重要的，不是把信息论和密码学各讲一遍，而是始终抓住一句话：

**信息论负责回答“信息长什么样、能传多少、泄露多少”，密码学负责回答“怎样让这些信息在敌手存在时仍然安全”。**
`},{slug:`01-为什么密码学离不开信息论`,title:`第一章 为什么密码学离不开信息论`,filename:`01-为什么密码学离不开信息论.md`,content:`# 第一章 为什么密码学离不开信息论

## 本章导学

如果这是课堂第一讲，最适合先问学生一句话：**“我们发一条消息出去，系统为什么不是只做加密，而是还要压缩、纠错、校验？”**  
这句话能立刻把学生从“密码学是一门只管加密的课”拉回到真实信息系统视角。

本章不要急着讲公式，先让学生建立三条主线：

- 信息要尽量高效地表示
- 信息要可靠地到达
- 信息要安全地被保护

学生只要先看懂这张图，后面各章就更容易听进去。

## 1.1 两门课看起来不同，其实在研究同一个对象

密码学研究的是“怎样保护信息”，信息论研究的是“信息本身有什么规律”。前者更像安全工程，后者更像度量科学；前者关心攻击者，后者关心概率分布；前者讨论密钥、算法、对手模型，后者讨论熵、信道、压缩极限、噪声极限。表面上看，两门课说的话不太一样，但它们研究的其实都是同一个核心对象：**信息**。

如果离开信息论，密码学会失去很多判断标准。我们会知道某个算法“看起来很乱”，却不清楚它到底泄露了多少规律；会知道某个密钥“似乎很复杂”，却说不清它到底有多少不确定性；会知道某段密文“不好猜”，却很难精确表达攻击者到底还剩下多少信息没有得到。

反过来，如果离开密码学，信息论也会少掉一个非常重要的应用方向。信息论告诉我们怎样描述信息、怎样衡量信息、怎样分析通信过程，而密码学把这些思想推向了“在敌手存在时如何传输信息”的更强场景。

## 1.2 三个关键词：高效、可靠、安全

信息系统通常有三类目标：

- 高效：尽量少占存储和带宽。
- 可靠：即使有噪声和错误，也能把信息恢复出来。
- 安全：即使被别人截获，也不能让对方理解或伪造。

这三类目标分别对应了三条经典理论线索：

- **源编码**解决高效问题，也就是压缩问题。
- **信道编码**解决可靠问题，也就是纠错问题。
- **密码编码**解决安全问题，也就是保密和认证问题。

课堂上常常把它们拆开教，但在真实系统里，它们经常同时出现。比如我们发一张照片到聊天软件时，图片会先被压缩；在网络上传输时，底层协议会处理丢包、重传和纠错；为了保护隐私，应用层还会进行加密。你看到的是“发了一张图”，系统做的却是“压缩 + 纠错 + 加密”的组合工程。

## 1.3 为什么信息论能帮助理解密码安全

密码学最关心的一个问题是：**攻击者从密文里到底知道了多少关于明文的信息？**

这句话本身就是信息论味道非常浓的问题。因为“知道多少”不是简单的是非判断，而是一个可以度量的量。比如：

- 如果密文完全不泄露明文信息，那么从信息论角度看，攻击者获得的关于明文的信息增量为零。
- 如果密文只泄露了明文长度、消息格式、语言类别，那么攻击者并不是一无所知，而是获得了部分信息。
- 如果一个系统虽然没有直接泄露明文，但泄露了足够多的统计结构，那么攻击者仍有机会逐步恢复原文。

因此，信息论为密码学提供了一种更精细的语言：不是只说“安全”或“不安全”，而是说“泄露量是多少”“剩余不确定性有多少”“密钥带来了多大保护”。

## 1.4 一个最典型的交叉问题：为什么一次一密是完美保密

一次一密是交叉教材中必须讲透的例子，因为它几乎把两门课最核心的思想接在了一起。

密码学角度说，一次一密使用与明文等长、真正随机且只使用一次的密钥，因此攻击者无法仅凭密文恢复明文。

信息论角度说，给定任意一个密文，它可以由许多不同的明文配合不同的密钥产生；只要密钥均匀随机，观察密文前后，明文的概率分布不会改变。也就是说，**看到密文并没有减少攻击者对明文的不确定性**。这就是完美保密的本质。

所以，一次一密并不是“因为它很复杂所以安全”，而是“因为从信息量上看，它没有给攻击者新增任何关于明文的可用信息”。

## 1.5 冗余为什么既是朋友，也是敌人

信息论里，冗余通常意味着消息中存在可预测部分，因此还有压缩空间。比如中文里某些词经常连着出现，英文里 \`q\` 后面大概率跟 \`u\`，日常短信里“收到”“好的”“在吗”这类短语出现频率很高。这些规律意味着消息不是完全随机的。

从可靠传输角度看，冗余有好处。因为有冗余，哪怕个别字符听错、看错、传错，人也常常能“脑补回来”。例如你在地铁里听朋友发来的语音，信号断断续续，但依靠上下文，仍可能猜出大意。

但从密码学角度看，冗余又很危险。因为攻击者也能利用这些规律。古典密码为什么容易被频率分析攻破？就是因为自然语言不是随机字母流，而是带有明显统计结构。现代密码为什么要做扩散？本质上就是要把这些可利用的统计特征打散。

所以，冗余在交叉视角里很有意思：**纠错喜欢冗余，压缩消灭冗余，密码分析利用冗余，安全设计则设法隐藏或打散冗余。**

## 1.6 生活中的交叉现象

### 例 1：压缩包为什么通常先压缩后加密

如果你把一堆文档打成 \`zip\` 包，再设置密码，通常会先做压缩再做加密。原因很简单：压缩依赖数据中的冗余规律，而加密后的数据看起来近似随机，几乎没有可压缩空间。如果顺序反过来，效果会很差。

这个现象背后正是信息论和密码学的分工：压缩负责去掉可预测结构，加密负责隐藏剩余内容。

### 例 2：验证码短信为什么很短

短信验证码常见为 4 位或 6 位数字。它的信息量并不高，攻击空间也不算大，所以系统通常会叠加其他保护措施，例如短时有效、次数限制、设备绑定。这里体现出一个基本原则：**当消息或密钥本身的信息量不够大时，系统必须靠协议层补强。**

### 例 3：为什么口令“123456”不安全

很多人会误以为“六位数字也不少”，但真正的问题不在长度本身，而在分布。用户口令往往不是均匀随机选择的，而是高度集中在少数常见模式上。也就是说，表面上字符空间很大，实际上熵很低。这是一个非常典型的信息论视角。

## 1.7 Shannon 的历史意义

Claude Shannon 同时深刻影响了信息论和密码学。他在通信理论中提出了熵、信道容量等概念，奠定了现代信息论基础；又在保密系统研究中提出了完美保密、混淆、扩散等关键思想，对现代密码学影响极深。

对学生来说，Shannon 最值得记住的不只是“提出了某些公式”，而是他把很多看似模糊的问题变成了可以度量、可以比较、可以推导的问题。例如：

- 一条消息平均包含多少信息？
- 一个信道最多能稳定传多少信息？
- 一个密钥至少要有多少随机性才可能达到某种保密级别？
- 一个密文究竟泄露了多少明文结构？

这些都是“交叉思维”的起点。

## 1.8 学习本专题时最容易犯的三个误区

### 误区 1：把“看起来乱”当成“安全”

有些密文肉眼看起来非常杂乱，但这不代表它不泄露信息。统计结构的泄露未必人眼能看出来，却可能被程序高效利用。

### 误区 2：把“公式会写”当成“概念懂了”

例如很多学生会写熵的公式，却不知道熵为什么能描述“不确定性”；会写互信息符号，却不知道它为什么适合描述“泄露了多少”；会背完美保密定义，却不知道它为什么比“很难破译”强得多。

### 误区 3：把压缩、纠错、加密当成彼此独立的模块

现实系统不是三门课程的顺序播放，而是一个联合设计问题。很多协议、应用和工程经验，只有放在交叉框架下才真正容易理解。

## 1.9 本章小结

本章的目标不是推公式，而是先建立整体地图。你需要先看清两门课交叉的地方，再去学后面的细节。

可以先记住以下几点：

1. 信息论研究信息的数量、结构、压缩性和可传输性。
2. 密码学研究信息在敌手存在下如何被保护。
3. 两者在“保密性如何度量、泄露量如何描述、冗余如何影响安全、随机性如何决定密钥质量”等问题上深度交叉。
4. 真实系统通常同时追求高效、可靠和安全，这正对应压缩、纠错和加密三类机制。

## 1.10 教学提醒

这一章最适合作为“开地图”的一章，不适合讲得太技术化。讲课时可以反复回到学生熟悉的对象，例如：

- 微信或 QQ 传图
- 网盘上传文件
- 扫二维码
- 校园网登录

只要学生开始意识到“安全系统不是只有加密一个动作”，本章目标就达到了。

## 1.11 思考题

1. 为什么说“攻击者知道多少信息”比“攻击者能不能马上破译”更适合作为交叉研究问题？
2. 为什么压缩通常放在加密之前，而不是之后？
3. 自然语言中的冗余为什么既能帮助人类纠错，也能帮助攻击者做统计分析？
4. 你能否举出一个现实系统，同时用到了压缩、纠错和加密？
`},{slug:`02-熵、信息量与不确定性`,title:`第二章 熵、信息量与不确定性`,filename:`02-熵、信息量与不确定性.md`,content:`# 第二章 熵、信息量与不确定性

## 本章导学

这一章最容易把学生讲抽象，所以建议始终围绕一个生活问题展开：**“为什么 \`123456\` 和一个随机 6 位串长度一样，但安全程度明显不同？”**

本章最重要的不是公式本身，而是让学生接受三个朴素判断：

- 越难猜，信息量越大
- 越分散，平均不确定性越高
- 知道额外信息以后，不确定性会下降

## 2.1 为什么要先学“信息有多少”

在密码学里，我们总会碰到类似说法：“这个密钥太弱”“这个口令熵太低”“这个系统泄露了部分信息”。这些话如果没有信息论基础，就容易变成模糊描述。信息论的贡献就在于，它给出了衡量“不确定性”和“信息增量”的工具。

我们可以把它理解成：信息论不是在问“消息重要不重要”，而是在问“消息出现之前，我们有多不确定；消息出现之后，我们减少了多少不确定”。

## 2.2 单个事件的信息量

如果一件事越少见，它一旦发生，带给我们的“惊讶感”越强，信息量就越大。

例如：

- “太阳今天从东边升起”几乎没有信息量，因为人人都预期如此。
- “今天突然停课”信息量比前一句大得多，因为它不常发生。
- “彩票开奖头奖号码是多少”在开奖前对大多数人来说更难预测，因此信息量更大。

信息论把这种直觉形式化为：事件概率越小，信息量越大。常见记法是：

\`I(x) = -log2 P(x)\`

这里的 \`I(x)\` 表示事件 \`x\` 的信息量。如果某事件概率是 \`1/2\`，它的信息量是 1 比特；如果概率是 \`1/8\`，信息量是 3 比特。

这说明“比特”本质上不是“二进制位”那么简单，它也是一种不确定性的计量单位。

## 2.3 熵：平均不确定性

单个事件的信息量只是第一步。更常见的场景是：一个消息源会不断产生消息，我们关心的是它**平均**带来多少不确定性。这就引出了熵。

离散随机变量 \`X\` 的熵定义为：

\`H(X) = -Σ p(x) log2 p(x)\`

直观理解：

- 熵大，表示结果更难预测，平均不确定性更高。
- 熵小，表示结果更集中，平均不确定性更低。

### 生活例子：抛硬币和考试答案

一枚真正均匀的硬币，正反面各半，熵较高，因为每次都不好预测。

如果一枚硬币被做过手脚，90% 出正面，10% 出反面，那么虽然“还是两个结果”，但其实更好猜，熵就更低。

同样，若某次单选题考试中，学生几乎都选 \`A\`，说明分布很偏，熵较低；若四个选项接近平均，说明结果更分散，熵较高。

这里要特别注意：**结果种类多，不等于熵一定大；关键看概率分布是否均匀。**

## 2.4 密钥空间大，不代表密钥熵一定大

这是密码学里非常容易混淆的一点。

很多人看到一个系统支持“8 位密码、大小写字母加数字、理论空间很大”，就会觉得安全。但信息论提醒我们：不能只看“可能有多少种”，还要看“用户实际上怎么选”。

比如一个网站允许用户设置 8 位密码，看起来空间很大，但如果大量用户都爱用：

- \`12345678\`
- \`password\`
- \`qwerty\`
- 生日组合

那么实际分布就会高度集中，真实熵远小于理论最大值。也就是说，**攻击者猜密码时面对的不是均匀分布，而是一个偏得很厉害的分布。**

这也是为什么现代系统经常引入口令策略、黑名单词典、二次认证和限速机制。

## 2.5 条件熵：知道一些信息后，还剩多少不确定性

密码学里最关键的问题之一，是攻击者知道部分信息之后，秘密还剩多少不确定性。这正好由条件熵描述。

\`H(X|Y)\` 表示：在已经知道 \`Y\` 的情况下，\`X\` 还剩下多少平均不确定性。

### 生活例子：猜外卖

如果你只知道“室友点了外卖”，你对外卖种类的猜测空间可能很大。

如果再告诉你“今天下雨、他刚运动完、最近在减脂”，你对“他点的是不是热汤面或者轻食”的判断就会更集中。也就是说，附加信息 \`Y\` 让你对目标 \`X\` 的不确定性下降了。

在密码场景中：

- \`X\` 可以是明文。
- \`Y\` 可以是密文、消息长度、格式特征、部分已知字段等。

条件熵越小，说明攻击者在拿到这些附加信息后，对明文越容易判断。

## 2.6 互信息：到底泄露了多少

如果说条件熵描述“还剩多少不确定性”，那么互信息描述的就是“到底减少了多少不确定性”。

\`I(X;Y) = H(X) - H(X|Y)\`

它表示变量 \`Y\` 中包含了多少关于变量 \`X\` 的信息。

在交叉专题里，一个非常自然的解释就是：

- \`X\` 是明文；
- \`Y\` 是攻击者观察到的东西，例如密文。

那么 \`I(X;Y)\` 就可以理解为：**攻击者通过观察 \`Y\`，平均获得了多少关于明文 \`X\` 的信息。**

如果互信息为零，就说明从统计意义上看，观察 \`Y\` 并没有帮助攻击者了解 \`X\`。这正是后面讲完美保密时最关键的思想。

## 2.7 冗余：可预测结构的另一种说法

现实中的消息很少达到最大熵。自然语言、图像、音频、日志、程序代码，都充满规律。这些规律让数据看起来“有结构”，从信息论角度说，就是存在冗余。

冗余可以简单理解为：**本来不必说这么多，但为了表达、习惯、容错、格式化等原因，消息里多带了一些可预测成分。**

### 常见例子

- 你说“今天晚上八点整准时到”，其中“晚上”“八点”“准时”有些语义部分是互相补充甚至重复的。
- 英文里 \`th\`、\`ing\` 经常成对出现。
- 手机照片中，大块天空颜色接近，因此像素之间高度相关。

这些冗余有两个重要后果：

1. 它们让压缩成为可能。
2. 它们让统计分析成为可能。

这也解释了为什么压缩和密码分析都非常关心“数据里有没有模式”。

## 2.8 最大熵直觉：最难猜的分布往往更安全

在很多安全场景下，我们希望秘密尽量难猜。直觉上，如果在固定取值范围内，每个结果都差不多可能，那么攻击者最难利用偏好和习惯来加速猜测。

例如：

- 真正均匀随机生成的 128 位密钥，攻击者无法优先押注某一小部分结果。
- 用户自己编的 8 位口令，通常会落入大量常见模式，从而被词典攻击优先命中。

因此，从信息论视角看，**安全系统喜欢高熵秘密，不喜欢“看似种类很多、实际选择很集中”的秘密。**

## 2.9 最小熵：从“最容易猜中哪一个”来衡量风险

除了普通熵，在密码学里还常提到一个更偏攻击视角的量：最小熵。

它关注的不是平均不确定性，而是攻击者一次猜中最可能值的难度。若某个结果的最大概率为 \`pmax\`，则最小熵常写作：

\`H∞(X) = -log2 pmax\`

它特别适合描述：

- 口令是否容易被先手猜中
- 随机源是否被某些偏差严重污染
- 一次尝试成功率到底有多大

### 例子

如果某系统的 6 位验证码中，数字 \`000000\` 因为实现错误而出现概率远高于其他值，那么平均熵也许仍不算太低，但从攻击者“一次先猜最可能值”的角度看，风险已经显著上升了。最小熵就比普通熵更敏感。

## 2.10 从熵到安全判断的三个常见结论

### 结论 1：高熵不等于绝对安全

高熵只是说“更难预测”，但系统还可能通过协议、实现、侧信道、重放等其他方式出问题。

### 结论 2：低熵往往意味着风险会被快速放大

尤其是在离线攻击中，攻击者可以高效试探高概率候选。分布只要明显不均匀，安全性就会大打折扣。

### 结论 3：泄露往往不是全有或全无

攻击者未必一下子知道全部明文，但哪怕只知道部分统计信息、格式信息、长度信息，也可能逐步减少不确定性。信息论正适合描述这种“部分泄露”。

## 2.11 本章小结

本章需要真正掌握的不是符号，而是以下几层意思：

1. 单个罕见事件带来的信息量更大。
2. 熵描述平均不确定性。
3. 条件熵描述在已知部分信息后，还剩下多少不确定性。
4. 互信息描述观察结果到底泄露了多少信息。
5. 冗余代表数据中存在可预测结构，它既能帮助压缩，也可能帮助攻击。
6. 密钥空间大小只是表面，真正决定安全感受的是分布和熵。

## 2.12 教学提醒

这一章最容易出现两个误会：

- 学生把“可能结果多”误认成“熵一定大”
- 学生把“熵高”误认成“绝对安全”

建议课堂上多做“均匀分布”和“偏斜分布”的对比，而不是只写定义。哪怕只用抛硬币、猜密码、验证码这三个例子，也足够把直觉立起来。

## 2.13 思考题

1. 为什么“密码长度长”不一定意味着“密码熵高”？
2. 为什么自然语言比真正随机字符串更容易被统计分析？
3. 如果某密文泄露了文件长度和文件类型，但没有泄露具体内容，这算不算信息泄露？可以用哪个概念来理解？
4. 在验证码、口令、随机数种子这三类对象中，最小熵的意义分别体现在哪里？
`},{slug:`03-完美保密、一次一密与香农视角`,title:`第三章 完美保密、一次一密与香农视角`,filename:`03-完美保密、一次一密与香农视角.md`,content:`# 第三章 完美保密、一次一密与香农视角

## 本章导学

这章是整套材料里最值得慢讲的一章。建议一开始就抛出问题：**“有没有一种加密，敌手拿到密文以后，理论上还是和没看见一样？”**

学生如果先被这个问题勾住，后面再讲完美保密和一次一密，就会觉得是在回答一个真正有意思的问题，而不是在背定义。

## 3.1 什么叫“完美保密”

很多人理解安全时，会说“攻击者很难破解”。但“很难”通常意味着还存在某种机会，只是成本高。信息论给出了一个更强、更干净的概念：**完美保密**。

完美保密的核心意思是：攻击者即使拿到了密文，对明文的判断也不会因此变得更有把握。也就是说，看到密文前后，明文的概率分布不变。

如果用条件概率表达，就是对任意可能的明文 \`m\` 和密文 \`c\`，只要 \`P(C=c) > 0\`，都有：

\`P(M=m | C=c) = P(M=m)\`

这句话不要死背，真正要理解的是它的含义：**密文没有给攻击者新增任何关于明文的统计优势。**

## 3.2 为什么这个定义这么强

这个定义强在它不是“某个算法目前还没被攻破”，也不是“攻击者算不过来”，而是直接说：**从信息上看，你没有学到新东西。**

这意味着：

- 不依赖攻击者算力强弱。
- 不依赖当前计算机水平。
- 不依赖攻击者是否足够聪明。

只要定义成立，不管攻击者多努力，单凭密文都无法缩小对明文的判断范围。

这就是为什么完美保密常被称为信息论安全的经典目标。

## 3.3 一次一密为什么满足完美保密

一次一密通常写成：

\`C = M ⊕ K\`

这里 \`M\` 是明文，\`K\` 是与明文等长、真正随机、只使用一次的密钥，\`C\` 是密文。

为什么它安全？最重要的原因不是“异或运算很神秘”，而是下面这个事实：

对任意给定的明文 \`M\` 和密文 \`C\`，总能唯一对应出一个密钥 \`K = M ⊕ C\`。反过来，对任意候选明文，也都能找到一个与之匹配的候选密钥来解释当前密文。

如果密钥是均匀随机的，那么所有这些解释在统计上是平等的。于是攻击者即使拿到了密文，也无法偏向某个明文解释。

### 一个简单例子

假设只有 2 位二进制消息：

- 明文可能是 \`00\`、\`01\`、\`10\`、\`11\`
- 密钥也在这四种情况里均匀随机

若攻击者看到密文 \`10\`，那么：

- 若明文是 \`00\`，密钥应为 \`10\`
- 若明文是 \`01\`，密钥应为 \`11\`
- 若明文是 \`10\`，密钥应为 \`00\`
- 若明文是 \`11\`，密钥应为 \`01\`

每个明文都能被一个同样可能的密钥解释，所以攻击者并不能从密文本身偏向某一种明文。

## 3.4 完美保密的互信息表达

如果从第二章的术语出发，完美保密可以写成：

\`I(M; C) = 0\`

这表示密文 \`C\` 与明文 \`M\` 之间的互信息为零。也就是：密文中不包含关于明文的可利用信息。

这是信息论和密码学交叉得最漂亮的地方之一。密码学中的保密目标，可以直接用信息论里的互信息语言表达出来。

## 3.5 香农告诉我们：完美保密是有代价的

很多学生第一次学完一次一密都会很兴奋，觉得“既然它这么安全，那为什么现实里不都用它？”答案是：**代价太高。**

Shannon 的经典结论告诉我们，若想实现完美保密，密钥至少要足够大。直观地说，密钥的不确定性不能小于消息的不确定性，否则它不可能完全遮住明文。

常见直觉表达是：

- 如果要保护的信息很多，密钥就必须同样“信息量充足”。
- 如果密钥太短，却想遮住很长、很复杂的消息，就像一张很小的布想盖住一整张桌子，终究会露出边角。

一次一密之所以能做到完美保密，就是因为它把代价付到了极致：**密钥与消息等长，而且绝不重复。**

## 3.6 为什么“一次”这两个字不能丢

很多初学者容易忽略“一次一密”里的“一次”。如果同一个密钥被重复使用，安全性会迅速崩塌。

假设有两条消息：

- \`C1 = M1 ⊕ K\`
- \`C2 = M2 ⊕ K\`

那么攻击者可以计算：

\`C1 ⊕ C2 = M1 ⊕ M2\`

这样虽然没有直接得到任何一条完整明文，但已经把两条明文绑在一起了。若其中一条消息部分已知，另一条就会被迅速拖出来。

### 生活化理解

这就像你每次藏东西都用同一块透明度固定、花纹固定的布去盖。第一次别人可能看不清，但盖的次数多了，对方把不同场景叠在一起观察，就能慢慢看出底下物体的轮廓规律。

所以，一次一密真正难的地方不只是“生成随机密钥”，而是“生成大量随机密钥并确保绝不复用”。这在现实系统里非常昂贵。

## 3.7 完美保密与计算安全的区别

现实中很多密码系统并不追求完美保密，而追求**计算安全**。意思是：

- 从信息上看，系统不一定做到零泄露；
- 但从现实计算资源看，攻击者在可接受时间内无法恢复秘密。

例如现代分组密码和公钥密码多数属于这种思路。它们的安全依赖于复杂性假设、密钥长度、攻击成本，而不是像一次一密那样在信息论层面做到绝对不泄露。

这并不意味着它们“不好”，而是意味着它们在工程上做了更实用的取舍：

- 愿意接受“理论上不是零泄露”
- 换来“密钥更短、部署更方便、密钥管理更可行”

## 3.8 长度泄露、格式泄露也算泄露

有些同学会想：“如果攻击者看不懂内容，那就够了吧？”其实未必。

现实系统常常会泄露：

- 消息长度
- 文件类型
- 发送时间
- 频率模式
- 通信双方关系

这些信息虽不是正文内容，但仍可能显著帮助攻击者缩小猜测空间。

例如：

- 一条只有 6 位数字的消息，很可能是验证码。
- 一个固定大小、固定时间发出的数据包，可能对应某种标准协议握手。
- 每天深夜规律性上传的加密文件，可能意味着固定备份任务。

从信息论视角看，只要它降低了攻击者的不确定性，就属于有意义的信息泄露。

## 3.9 现实中哪里能看到“一次一密的影子”

虽然真正严格的一次一密很少在大规模民用系统中直接使用，但它的思想影响很大。

### 场景 1：会话密钥

现代协议通常不会长期使用同一把主密钥去直接加密所有内容，而是通过握手阶段派生短期会话密钥。虽然这不等于一次一密，但“尽量避免长期重复使用同一密钥材料”的思路是一致的。

### 场景 2：随机数必须高质量

一次一密依赖真正随机密钥，这提醒我们：任何现代密码系统只要随机性出了问题，安全性就会急剧下降。

### 场景 3：密钥管理永远是核心难题

一次一密最不现实的地方恰恰不是加密公式，而是密钥分发和保存。这件事在现代系统中依然成立。很多安全事故不是算法被数学攻破，而是密钥管理出了问题。

## 3.10 一个学生最该带走的直觉

学习完美保密，最重要的收获不是会写定义，而是理解下面这层逻辑：

1. 安全不只是“别人暂时算不出来”，还可以追求“别人根本没有获得额外信息”。
2. 这样的安全非常强，但成本也非常高。
3. 密钥随机性、密钥长度和密钥复用问题，本质上都是信息量分配问题。

## 3.11 本章小结

本章是整套教材的交叉核心之一，可以总结为：

1. 完美保密意味着密文不会减少攻击者对明文的不确定性。
2. 从互信息角度看，完美保密等价于 \`I(M; C)=0\`。
3. 一次一密之所以安全，是因为真正随机、等长、一次性的密钥把所有明文解释都保持为统计上等可能。
4. 完美保密很强，但代价是密钥管理极其昂贵。
5. 现实密码系统更多采用计算安全路线，而不是严格追求完美保密。

## 3.12 教学提醒

这章最重要的不是让学生记住条件概率式子，而是记住两句话：

- 完美保密的本质是“密文没有减少明文的不确定性”
- 一次一密的关键不是异或，而是随机、等长、只用一次

课堂上一定要把“密钥复用为什么危险”讲透，因为这是学生最容易一知半解的地方。

## 3.13 思考题

1. 为什么说“一次一密”的关键不是“异或”，而是“随机、等长、只用一次”？
2. 如果一个系统使用高质量随机密钥，但重复加密很多消息，它为什么仍然可能出问题？
3. 你如何用“条件熵”或“互信息”的语言解释完美保密？
4. 现实系统为什么很难大规模采用真正的一次一密？
`},{slug:`04-压缩、冗余与密码分析`,title:`第四章 压缩、冗余与密码分析`,filename:`04-压缩、冗余与密码分析.md`,content:`# 第四章 压缩、冗余与密码分析

## 本章导学

这一章建议从最朴素的经验切入：**“为什么压缩包常常先压缩再加密，而不是反过来？”**

学生一旦接受“压缩器和攻击者都在找规律”这个视角，就能很快理解为什么压缩、冗余和密码分析会放在一起讲。

## 4.1 为什么压缩和密码分析会在同一章里出现

很多学生第一次接触这一章时会觉得奇怪：压缩看起来是为了节省空间，密码分析看起来是为了破译密文，它们怎么会放在一起？

答案是：二者都高度依赖对“数据模式”的理解。

- 压缩想要发现并消除可预测结构。
- 密码分析想要发现并利用可预测结构。

换句话说，压缩是在问“哪里有冗余，可以删掉”，密码分析是在问“哪里有规律，可以利用”。两者都在盯着同一件事：消息并不完全随机。

## 4.2 源编码的直觉：为什么能压缩

如果一段数据没有任何规律，理论上就很难继续压缩。真正能被压缩的数据，必然含有某种重复、偏好、相关性或结构。

### 生活例子：聊天记录和噪声串

比较下面两段内容：

1. “今天晚上到图书馆吗我大概八点到”
2. “x7Q@1mZp#L2t$9Ks”

第一段像正常语言，里面有常见词、语法、上下文结构，因此有压缩空间。

第二段若是真随机串，几乎没有可利用模式，就很难继续压缩。

这说明压缩其实是在“吃掉规律”。越有规律，越容易压缩；越接近随机，越难压缩。

## 4.3 自然语言冗余为什么对攻击者有利

古典密码分析最经典的突破点之一，就是语言统计规律。

例如英文中：

- \`e\`、\`t\`、\`a\`、\`o\` 等字母出现频率较高；
- 某些双字母组合更常见；
- 单词长度和句法结构也有典型模式。

如果一个加密方案不能有效打散这些规律，那么攻击者就能从密文中的频率、重复片段、结构特征中反推明文甚至密钥。

### 日常类比

想象有人把一篇文章中的每个汉字都统一替换成别的汉字，但保持每个字出现次数不变。虽然你一眼看不懂内容，但你仍可以通过高频字、常见搭配、标点位置去慢慢猜。

这就是为什么“只换名字，不打散结构”的方案通常不够安全。

## 4.4 Shannon 的源编码观点对安全有什么启发

信息论告诉我们：一个消息源若存在冗余，就存在压缩空间。安全角度的启发是：**如果明文中仍保留大量冗余，而加密过程又不能有效隐藏这些冗余，那么攻击者就更容易从统计结构中找到突破口。**

这也解释了现代密码设计中一个很重要的方向：尽量让密文看起来像高熵、低结构、近似随机的数据流。

当然，这里要强调两点：

1. “看起来像随机”只是表象，真正重要的是统计上难以区分、难以利用。
2. 把明文先压缩再加密，往往能减少显性冗余，但并不自动等于安全，仍要看加密算法本身是否可靠。

## 4.5 为什么通常是“先压缩，再加密”

这是信息论与密码工程里最常见的流程之一。

### 原因 1：加密后数据通常难再压缩

一个好的密文应尽量接近随机序列，而随机序列几乎没有冗余可压缩。所以若先加密再压缩，压缩效果通常很差。

### 原因 2：压缩先去掉显性结构

先压缩可以减少明文中的重复模式、格式冗余和统计偏差，某种程度上有利于降低直接暴露的结构特征。

### 原因 3：工程上更高效

压缩后数据更短，后续加密和传输的开销也更低。

### 生活例子

你把很多照片和文档打包发给别人时，常见做法就是先压缩成一个包，再设置密码。如果先把每个文件都加密成随机样子，再想压缩，几乎压不动。

## 4.6 但“压缩先于加密”也可能带来新问题

这里需要非常谨慎，因为真实系统中，压缩并不总是绝对利好。某些协议若把秘密和攻击者可控输入一起压缩，再把压缩长度暴露给对手，就可能形成侧信道。

直观地说，如果攻击者能不断试探输入，并观察压缩后长度的细微变化，就可能间接猜测秘密内容中是否出现了相同片段。

### 生活化理解

好比你把一份藏有暗号的文稿和别人提交的文本一起做“去重打包”，再把打包后的长度告诉对方。对方只要不断试不同文本，看哪一次打包后更短，就可能推测自己的猜测是否和暗号部分“撞上了”。

因此，压缩本身不是安全机制，它只是信息处理机制。它有时会减少显性冗余，有时也可能成为可观测信号的一部分。

## 4.7 冗余与纠错为什么方向相反

这里很适合和第五章做一个提前连接。

- 压缩的目标是尽量减少冗余。
- 纠错的目标是主动加入冗余。

这看起来矛盾，实际上是因为目标不同：

- 当我们关心存储和带宽时，希望尽量精简。
- 当我们担心传输中出错时，希望多带一些“保险信息”。

密码学在这两者之间的位置比较特殊。它既不单纯消灭冗余，也不单纯添加冗余，而是关心**可被敌手利用的结构是否被隐藏、打散或伪装掉了。**

## 4.8 为什么很多加密输出看起来像“压不动的乱码”

一个设计良好的加密输出通常满足这样的直觉特征：

- 频率分布较平；
- 重复模式不明显；
- 与原文的结构联系不直观；
- 再压缩几乎没效果。

这并不是说“凡是压不动的乱码都安全”，而是说：**一个好密文通常不会保留太多容易被压缩器或统计工具抓住的规律。**

因此，“再压缩效果几乎没有”常常是密文近似随机的一个外在表现，但绝不能把它当成正式安全证明。

## 4.9 文件格式、模板和固定头部会怎样影响安全

现实数据常常不是纯自由文本，而是有明显格式的文件，比如：

- PDF 有固定结构
- 图片有文件头
- 办公文档有模板字段
- 网络报文有协议头

这些格式本身就是规律。若加密方案处理不当，攻击者可能利用：

- 固定头部
- 已知字段
- 常见模板
- 重复块模式

来推断明文或判断不同密文之间的关系。

### 生活例子

如果你总是把“会议纪要模板”导出成同一种格式，再用一个不够好的方式加密，攻击者虽然看不到正文，也可能从固定头部、段落布局甚至长度分布里判断出文件类型和大致用途。

## 4.10 本章最重要的一句话

把本章内容压缩成一句话就是：

**压缩在消灭冗余，密码分析在利用冗余，而现代安全设计必须警惕明文中的冗余通过密文或长度、格式等副信息泄露出去。**

## 4.11 本章小结

1. 数据之所以能压缩，是因为其中存在规律和冗余。
2. 攻击者之所以能做统计分析，也是因为明文或系统行为存在规律。
3. 先压缩后加密通常更合理，因为加密后数据接近随机，难以继续压缩。
4. 但压缩过程本身也可能在某些场景中暴露侧信道，不能把“压缩”误当成安全保证。
5. 现代密码设计的重要任务之一，就是让可利用结构不容易从输出中被观察到。

## 4.12 教学提醒

这章最适合用对比法讲：

- 压缩在利用规律减少长度
- 攻击在利用规律恢复秘密

只要这层共同点讲清楚，学生就会意识到“冗余”不是一个中性词，而是会在不同目标下扮演完全不同角色。

## 4.13 思考题

1. 为什么“有压缩空间”与“有被分析空间”在很多情况下是同一件事的两面？
2. 为什么理想密文通常难以再被压缩？
3. 文件长度、文件头、固定模板属于哪种类型的信息泄露？
4. 为什么说压缩能减少冗余，但不能替代加密？
`},{slug:`05-信道、噪声、纠错与安全通信`,title:`第五章 信道、噪声、纠错与安全通信`,filename:`05-信道、噪声、纠错与安全通信.md`,content:`# 第五章 信道、噪声、纠错与安全通信

## 本章导学

这章最好不要从抽象信道模型开头，而是先问：**“为什么二维码脏了一块还能扫出来，但有些加密数据只错一点点就直接报错？”**

这样学生能立刻意识到：可靠性和保密性不是一个问题，纠错和加密也不是同一类机制。

## 5.1 只保密还不够，信息还得传得过去

很多初学者一提“安全通信”，第一反应就是加密。但真实通信系统面临的困难不止窃听，还有噪声、丢包、误码、干扰、设备故障等问题。也就是说，信息不只是要“别人看不懂”，还要“自己人能正确收到”。

这就是为什么信息论中的信道模型、信道容量、纠错编码与密码学存在天然交叉。

## 5.2 什么是信道

信道可以理解为信息通过的路径。它不一定非得是“电线”或“无线电波”，也可以是：

- 手机网络
- Wi-Fi
- 蓝牙
- 光纤
- 二维码扫描过程
- 甚至是人工口头传话

只要消息从一方传到另一方，中间就存在某种“信道”。

## 5.3 噪声是什么

噪声是指在传输过程中引入的不确定干扰。它可能来自外部环境，也可能来自设备本身。

### 常见生活例子

- 打电话时的杂音和断续
- Wi-Fi 信号弱导致的视频卡顿
- 扫二维码时因光线问题识别失败
- U 盘文件拷贝时偶发位翻转

这些都意味着：发送端发出的内容，接收端看到的内容可能被改动了。

## 5.4 为什么要主动加冗余

第四章说压缩喜欢去掉冗余，但在有噪声的信道中，我们反而常常要主动加一些冗余，帮助接收方发现甚至纠正错误。

### 一个简单类比

如果你在很吵的食堂里对朋友喊一句“晚上八点图书馆，八点，图书馆”，虽然重复让句子变长了，但它提高了对方听清楚的概率。

这就是纠错编码的直觉：**用适量冗余换取可靠性。**

## 5.5 信道容量：信道有它的极限

信息论告诉我们，任何带噪信道都有一个极限传输率，叫做信道容量。直观地说：

- 低于这个速率，理论上可以通过合适编码把误码率压得很低。
- 高于这个速率，再怎么编码也难以稳定可靠。

这个结论非常重要，因为它说明“可靠通信”不是靠运气，而是有理论边界的。

### 生活化理解

你在一条非常嘈杂的语音通道里讲话，如果说得太快、信息量太密，对方总会听漏。你可以慢一点、重复一点、分段一点，这就像降低有效传输速率并增加编码保护。

## 5.6 纠错和加密的关系：谁先谁后

在实际系统里，纠错和加密常常同时存在，但它们的顺序和层次设计很有讲究。

一个直观思路是：

- 纠错关注“传输中别出错”；
- 加密关注“别人截获也看不懂”。

二者并不互相替代。

### 常见理解误区

误区是认为“加密之后既然别人看不懂，那就不用纠错了”。这显然不对。因为密文虽然保密，但若在传输中被噪声破坏，接收方同样无法正确解密。

反过来，只有纠错没有加密，也不够。因为消息即使完整到达，也可能被第三方完全读懂。

## 5.7 为什么密文中的一点错误有时会带来大影响

有些加密模式对传输错误非常敏感。原因在于：

- 有的模式会让单个比特错误只影响局部；
- 有的模式会让局部错误扩散到更大范围；
- 认证机制还可能因为少量篡改而直接判定整段消息无效。

从安全角度看，这种“敏感性”未必是坏事，因为篡改被放大、被检测，有时反而能帮助发现攻击。

### 生活例子

一封加密邮件如果有少数位被篡改，系统可能不是“只错几个字”，而是直接提示“内容损坏或校验失败”。这正说明现代系统不仅关心保密，还关心完整性。

## 5.8 保密性和可靠性有时会互相拉扯

这是交叉主题里很有意思的地方。

- 为了可靠传输，我们愿意加冗余。
- 为了防止泄露，我们又不希望这些冗余形成可利用结构。

所以系统设计时需要平衡：

- 冗余要足够帮助纠错；
- 但输出又要尽量不暴露明文规律；
- 协议还要考虑重传、确认、时序等额外信号是否泄露信息。

这说明安全通信不是“加一个算法”那么简单，而是一个联合系统设计问题。

## 5.9 窃听信道模型：可靠不等于保密

信息论里有一个很重要的交叉模型，通常称为窃听信道模型。直观场景是：

- 合法接收方看到的是一个质量较好的信道输出；
- 窃听者看到的是一个质量更差的信道输出。

这带来一个很有趣的想法：有时我们不仅能靠密钥保护信息，还能利用**信道条件差异**来获得额外保密性。

比如在无线环境中，合法双方距离近、信道质量高，而窃听者位置不佳、信号更差。在某些理论模型下，可以由此定义“保密容量”，表示在不让窃听者获得有效信息的前提下，合法双方还能安全传输多少信息。

这不是日常应用最先接触的内容，但它非常能体现密码学与信息论的深度交汇。

## 5.10 二维码为什么能扫坏一部分还原出来

这是一个学生非常容易产生直觉的例子。

二维码并不是简单地把黑白块硬塞进去，它内部带有纠错设计。因此即使局部污损、轻微遮挡、印刷不清，也常能恢复原始信息。

如果二维码中放的是支付链接、登录信息或票务信息，那么实际系统通常还会配合签名、校验或加密来防止伪造和窃取。

这个例子非常适合说明：

- 纠错解决“扫得出来”；
- 密码机制解决“别人改不了、伪造不了、看不懂”。

## 5.11 从工程角度看一条安全通信链路

我们可以把一条现实链路粗略看成如下过程：

1. 原始消息先被格式化或压缩。
2. 系统进行加密和认证。
3. 链路层、物理层或存储介质层加入纠错保护。
4. 经过带噪信道传输。
5. 接收端先恢复可靠比特，再完成认证和解密。

不同系统实现方式不同，但大体都会面对同一个问题：**既要让合法接收方稳定收到，又要让攻击者难以利用。**

## 5.12 本章小结

1. 安全通信不仅要保密，还要可靠。
2. 信道中的噪声会导致错误，因此需要纠错编码。
3. 纠错靠加入冗余，压缩靠减少冗余，二者目标不同。
4. 加密和纠错不能互相替代，现实系统往往同时需要它们。
5. 窃听信道模型说明，信道差异本身也可能成为保密资源。

## 5.13 教学提醒

这一章的核心不是把编码理论全讲一遍，而是让学生明白：

- 压缩在减冗余
- 纠错在加冗余
- 加密在隐藏结构

三个动作都和“信息”有关，但目标不同，所以方法也不同。

## 5.14 思考题

1. 为什么“能纠错”与“能保密”是两种不同能力？
2. 为什么二维码系统往往既需要纠错设计，也需要安全机制？
3. 在有噪声的环境中，只加密不纠错会有什么问题？
4. 为什么说安全通信是一个联合设计问题，而不是单独挑一个算法就结束？
`},{slug:`06-随机性、密钥与信息泄露`,title:`第六章 随机性、密钥与信息泄露`,filename:`06-随机性、密钥与信息泄露.md`,content:`# 第六章 随机性、密钥与信息泄露

## 本章导学

这章最好的切入问题是：**“为什么很多安全事故不是算法太弱，而是随机数太差？”**

只要学生接受“密钥安全首先取决于它难不难猜”，后面的熵、条件熵、元数据泄露和侧信道就都好讲了。

## 6.1 密钥真正重要的不是“长”，而是“难猜”

很多人一说密钥安全，就先看位数。位数当然重要，但更根本的问题是：密钥是否来自足够随机、足够分散的分布。

从信息论角度看，真正决定攻击难度的不是“这个集合理论上有多大”，而是“系统实际从中选出密钥时有多不均匀”。如果生成过程有偏差、可预测、可重复、熵不足，那么哪怕名义上是 128 位密钥，也可能远没有想象中安全。

## 6.2 真随机、伪随机与安全直觉

### 真随机

真随机通常来自物理过程，例如热噪声、振荡抖动、量子过程等。它的价值在于不可预测。

### 伪随机

伪随机由确定性算法产生，看起来很乱，但本质上由种子决定。若种子保密且足够随机，伪随机序列在工程上可非常有用。

### 最关键的提醒

伪随机“不怕是算法生成的”，怕的是：

- 种子太短
- 种子可预测
- 种子重复使用
- 实现存在偏差

### 生活例子

如果一个系统把“当前秒级时间戳”直接拿来做随机种子，那么对攻击者来说，候选空间可能非常小。看起来程序里调用了“随机函数”，实际上随机性很弱。

## 6.3 随机数质量为什么是密码系统的命门

很多著名安全事故，根源并不是加密算法数学上有问题，而是随机数不好。

例如：

- 会话密钥可预测
- 初始化向量重复
- 签名随机数复用
- 验证码分布偏斜

这些问题都可以从信息论角度理解为：**本应高熵的秘密材料，实际不确定性不足。**

这也是为什么安全系统非常重视熵源、随机池、种子管理和启动阶段的随机性收集。

## 6.4 条件熵视角下的密钥安全

设 \`K\` 是密钥，\`Z\` 是攻击者观察到的信息，那么 \`H(K|Z)\` 就表示攻击者知道 \`Z\` 后，密钥还剩多少不确定性。

这比单看 \`H(K)\` 更贴近真实安全，因为攻击者常常并不是“完全盲猜”，而是已经知道一些东西，例如：

- 设备型号
- 启动时间
- 部分协议参数
- 历史会话关联信息

若这些信息与密钥生成过程相关，那么攻击者面前的密钥不确定性就会下降。

### 生活类比

你让别人猜你今天穿什么衣服，对方若什么都不知道，很难猜；但如果他知道今天温度很低、你要去面试、你常穿深色西装，那么可选范围就大幅缩小了。

## 6.5 信息泄露不只是“明文泄露”

学生常把信息泄露理解成“正文被看见了”。实际上，现代系统泄露的内容可能非常多样：

- 明文长度
- 数据包个数
- 发送时间
- 访问模式
- 密钥更新频率
- 错误提示类型
- 重试次数

这些都可能帮助攻击者建立更准确的推断模型。

### 生活例子

即使聊天内容加密了，若某人每天固定时间向同一对象发送大量短消息，外部观察者仍可能推断出两人的通信关系和行为模式。这说明**元数据也是信息**。

## 6.6 侧信道为什么也能放进信息论框架

侧信道指的是系统通过非设计目标的途径泄露信息，例如：

- 运算时间
- 功耗
- 电磁辐射
- 缓存访问模式
- 报错信息差异

这些量本身未必是明文或密钥，但它们可能与秘密存在统计相关。只要相关性存在，攻击者就可能通过多次观测减少不确定性。

从信息论角度看，侧信道分析本质上仍在做同一件事：**寻找一个可观测变量，与秘密之间是否存在非零互信息。**

## 6.7 隐私放大：把“不太干净的随机”尽量提纯

在一些场景中，双方可能共享一段部分保密、部分泄露、质量一般的随机材料。此时一个重要思路是：通过公开协商和适当处理，把它压缩成更短但更安全的密钥。

直观理解就是：

- 原料不完美，但还有一部分真正未知成分；
- 通过合适提取，可以牺牲长度，换来更强的保密性。

这类思想在密钥协商、物理层密钥生成、量子密钥分发等领域都非常重要。

### 生活类比

像从一桶混有杂质的水中蒸馏出更少但更纯的水。虽然量变少了，但质量变高了。

## 6.8 为什么“限制攻击次数”在信息论上也说得通

若一个秘密熵并不高，例如短信验证码只有 6 位数字，那么系统通常会：

- 设置很短有效期
- 限制尝试次数
- 绑定设备或会话
- 触发风控

原因在于：当秘密本身的信息量有限时，协议层必须控制攻击者每次试探所能获得的新增信息，避免其逐步把剩余不确定性耗尽。

因此，限次策略并不是“附带功能”，而是低熵秘密场景中的必要补强。

## 6.9 安全设计中常见的三个随机性误区

### 误区 1：调用了随机函数就等于随机足够

真正要问的是随机源来自哪里，种子怎么来，是否可预测，是否会复用。

### 误区 2：理论空间很大就不怕猜

如果实际分布高度集中，攻击者优先猜高概率区域就行。

### 误区 3：只要正文加密，其他信息泄露无所谓

很多实际攻击利用的恰恰是长度、时序、错误反馈、缓存模式等副信息。

## 6.10 本章小结

1. 密钥安全的关键不仅是长度，更是熵和分布。
2. 随机数质量是密码系统的核心生命线之一。
3. 条件熵更适合描述攻击者已知部分信息后的真实安全状态。
4. 泄露不只发生在正文内容上，元数据和侧信道同样重要。
5. 当秘密熵有限时，必须依靠协议层策略补强。

## 6.11 教学提醒

这章最适合多举现实例子，少空讲概念。推荐反复使用：

- 弱口令
- 时间戳种子
- 短信验证码
- 登录限次

学生最容易通过这些例子真正理解“理论空间大”和“真实熵高”不是一回事。

## 6.12 思考题

1. 为什么一个理论空间很大的密码系统仍可能因为分布偏斜而不安全？
2. 为什么时间戳、设备信息等看似无关的因素可能影响密钥安全？
3. 侧信道为什么也可以用“减少不确定性”的语言来理解？
4. 为什么 6 位短信验证码必须搭配限时和限次机制？
`},{slug:`07-现代密码中的信息论思想`,title:`第七章 现代密码中的信息论思想`,filename:`07-现代密码中的信息论思想.md`,content:`# 第七章 现代密码中的信息论思想

## 本章导学

这章容易显得“概念很高级但不落地”，所以建议先从图像和结构直觉切入。最适合的开场问题是：**“为什么好的加密应该让输入改一小点，输出就大变样？”**

把这个问题讲明白后，再引出混淆、扩散和雪崩效应，学生会更容易把它们当成“设计思想”，而不是生硬术语。

## 7.1 现代密码不再只盯着“会不会被穷举”

现代密码学相比古典密码学进步很大，其中一个关键变化就是：设计者越来越重视输出的统计性质、信息泄露路径和敌手可观测能力。很多现代思想，虽然最终落在算法和协议上，但其深层直觉明显带有信息论色彩。

## 7.2 混淆与扩散：Shannon 给现代密码的设计语言

Shannon 提出的两个关键词对后来的分组密码设计影响极大：

### 混淆

混淆强调让密钥与密文之间的关系尽量复杂，不让攻击者轻易从输出规律倒推密钥结构。

### 扩散

扩散强调把明文中的局部统计特征尽量打散，让明文的一点规律不要在密文中局部保留下来。

### 生活化理解

如果把明文想成一杯颜色不均匀的液体，那么扩散就像不停搅拌，直到原本局部很深的颜色被均匀摊开；混淆则像再换一个复杂容器和流动规则，让外部观察者更难根据最终形态反推最初状态和控制参数。

这两个思想本质上都在对抗“可利用信息结构”的残留。

## 7.3 雪崩效应为什么重要

现代密码常强调雪崩效应：明文或密钥只改动一小位，输出就应当有大范围变化。

这背后的信息论直觉是：

- 不希望输入中的局部变化在输出中只产生局部、可追踪的反应；
- 不希望攻击者能够通过少量输出变化定位输入中哪一部分被修改。

如果一个系统缺乏足够扩散，那么局部结构就容易残留，从而被建立起统计对应关系。

### 生活例子

想象你往平静水面滴一滴墨水。如果墨水只在一点附近扩散，很容易看出滴点位置；若整个水体很快被扰动混匀，追踪原始落点就难得多。

## 7.4 分组模式为什么也体现信息泄露思想

即便同一种分组密码内核，使用不同工作模式，泄露特征也会不同。

如果一种模式让相同明文块对应相同密文块，那么重复结构就会明显暴露；若模式设计得更好，就能减少这种结构显现。

这件事说明：现代密码不仅关心“单个块怎么变换”，还关心“输出整体是否暴露跨块规律”。这是一个非常典型的统计泄露问题。

### 生活例子

如果你把一面带重复图案的墙拍照后做一种“只按固定小块上色”的伪加密，远看可能仍能看出原图轮廓。说明局部块虽然变化了，但全局结构没有被真正隐藏。

## 7.5 认证与完整性：不仅要少泄露，还要防伪造

信息论与密码学的交叉不只在“看不看得懂”，也在“能不能伪造”。当攻击者能从系统反馈中学到规律时，他不仅可能推断明文，还可能尝试构造能通过验证的篡改结果。

因此现代系统通常同时关心：

- 保密性
- 完整性
- 认证性

从交叉角度看，完整性机制也是在控制攻击者可获得的有效信息和可利用反馈，避免系统成为“可交互学习秘密规律”的对象。

## 7.6 语义安全与信息泄露直觉

现代密码理论中有一个重要目标叫语义安全。通俗地说，它要求攻击者即使看到密文，也无法从中获得关于明文的任何“有意义优势”。

它不是简单照搬完美保密，但延续了同一种精神：**观察密文不应让攻击者有效地区分、推断或预测明文的性质。**

因此可以把它看成信息论保密思想在计算安全框架中的现代继承。

## 7.7 哈希、压缩和“提取”的共同味道

很多现代机制都包含一种“把复杂输入变成短而固定的输出”的操作，例如哈希。它与通常意义上的可逆压缩不同，但在直觉上都涉及“提取特征、浓缩表示”。

在安全场景里，这种浓缩并不是为了恢复原文，而是为了：

- 校验完整性
- 生成摘要
- 派生密钥
- 把较长输入压成固定长度安全材料

如果从信息论角度看，这里面经常出现的核心问题是：输出保留了哪些信息，丢掉了哪些信息，攻击者能否利用保留部分反推输入或制造碰撞。

## 7.8 现代协议为什么越来越重视“泄露面”

以前很多人把安全理解成“算法够强就行”。现代工程更重视“泄露面”这个整体概念，包括：

- 长度泄露
- 时间泄露
- 缓存模式泄露
- 错误信息泄露
- 流量模式泄露

这说明安全不再只是一个函数，而是一整条信息处理链路。哪怕核心算法没问题，只要外围行为与秘密存在统计相关，攻击者就可能逐步学到东西。

## 7.9 一个总的现代视角

如果把古典密码学的典型问题概括成“怎样把消息藏起来”，那么现代密码学更像在回答：

**怎样在复杂系统中，让攻击者无论观察内容、长度、频率、反馈、模式还是实现细节，都学不到足够有用的信息。**

这种“控制信息流”的思想，本质上就是密码学与信息论在现代系统中的深度融合。

## 7.10 本章小结

1. 现代密码设计深受 Shannon 的混淆与扩散思想影响。
2. 雪崩效应本质上是在减少输入与输出之间可局部追踪的结构关系。
3. 分组模式、认证机制和协议反馈都关系到统计泄露问题。
4. 语义安全可以看作信息论保密精神在计算安全框架中的延续。
5. 现代安全工程的重点越来越从“单算法强度”扩展到“整个系统的泄露面控制”。

## 7.11 教学提醒

这一章建议少堆抽象术语，多用可视化比喻，例如：

- 墨水扩散
- 马赛克图案
- 重复墙砖暴露轮廓

这些例子很适合帮助学生把“扩散”“混淆”“结构泄露”真正想象出来。

## 7.12 思考题

1. 为什么“相同输入得到相同局部输出”会成为风险？
2. 雪崩效应为什么有助于降低统计分析价值？
3. 为什么现代系统要同时关注算法、模式、协议和实现层的泄露？
4. 你如何用“控制信息流”的语言概括现代密码设计目标？
`},{slug:`08-生活案例、综合练习与课程总结`,title:`第八章 生活案例、综合练习与课程总结`,filename:`08-生活案例、综合练习与课程总结.md`,content:`# 第八章 生活案例、综合练习与课程总结

## 本章导学

这章最适合作为复习课、串讲课或课堂展示材料。讲法上建议让学生不断回答一个问题：**“如果把某个真实系统拆开看，压缩、纠错、加密和泄露各自发生在哪里？”**

这能帮助学生把前面分散的概念真正装回一个完整系统里。

## 8.1 先把整套课串成一句话

如果只允许用一句话概括整套教材，那么最合适的表达是：

**信息论告诉我们怎样度量信息、冗余、噪声和泄露，密码学告诉我们怎样利用这些认识去设计保密而可靠的通信系统。**

下面我们用几个生活案例，把前面七章的知识重新串起来。

## 8.2 案例一：聊天软件为什么这么“忙”

当你在手机上发送一段文字或图片时，背后通常同时发生多件事：

1. 文本、图片或语音先被编码，有时还会压缩。
2. 应用层进行加密和认证，保护内容隐私与完整性。
3. 网络传输过程中，底层协议处理丢包、重传、校验。
4. 接收方收到后解密、校验并显示内容。

这里几乎把整套教材都用上了：

- 压缩利用了冗余。
- 加密隐藏了内容。
- 认证防止被改。
- 纠错和重传保证能到。
- 长度、发送时序等元数据仍可能形成侧面信息。

这说明现实系统不是单个知识点在工作，而是多个信息处理机制协同工作。

## 8.3 案例二：短信验证码为什么不算“高强度秘密”

短信验证码通常只有几位数字，信息量有限，攻击者理论上并不需要太多试探就能覆盖全部可能性。所以系统必须在协议层加约束：

- 短时有效
- 限制尝试次数
- 绑定会话
- 配合设备识别与风控

这个案例能帮助学生理解：**当秘密本身熵不高时，安全不能只靠“保密字符串”本身。**

## 8.4 案例三：压缩包加密码为什么常比单文件密码更常见

用户常把多个文件打成压缩包，再统一设置密码。这背后的原因有三层：

1. 先压缩可以减少冗余，提高存储与传输效率。
2. 压缩后的整体结构更便于统一加密和管理。
3. 加密后的数据通常难再压缩，因此流程顺序自然是先压缩后加密。

这个例子非常适合说明第四章的核心思想。

## 8.5 案例四：二维码为什么“脏一点也能扫”

二维码能在部分污损时仍被识别，是因为内部加入了纠错设计。若其中承载的是支付、登录或验票信息，实际系统通常还会叠加签名、校验或加密。

这个案例让学生看到：

- 纠错解决可读性与可靠性；
- 加密和签名解决保密性与真实性；
- 它们服务的是不同目标。

## 8.6 案例五：为什么很多安全事故其实是随机数事故

很多时候，并不是算法太弱，而是随机性太差。例如：

- 验证码模式被猜出
- 会话令牌生成规律可预测
- 密钥种子过于简单
- 随机源在启动时熵不足

这些现象共同说明：随机性不足会直接降低密钥或秘密的不确定性，从而让攻击者更容易猜测和复现。

## 8.7 课程知识图谱式总结

可以把整套课压缩为下列逻辑链：

1. 消息源有概率分布，因此有熵。
2. 熵不满说明存在冗余，因此可能压缩。
3. 冗余一方面帮助纠错，另一方面也可能帮助攻击。
4. 若密文不能有效打散明文规律，攻击者就能利用统计结构。
5. 若希望极强保密，可用完美保密思想，但代价通常很高。
6. 现实系统采用计算安全，同时尽量控制泄露面。
7. 随机性、协议设计、实现细节与元数据管理，都会影响最终安全。

## 8.8 复习提纲

以下问题适合考前快速回看：

1. 信息量和熵分别描述什么？
2. 条件熵和互信息在密码学里对应什么直觉？
3. 为什么一次一密能达到完美保密？
4. 为什么先压缩再加密通常更合理？
5. 为什么纠错需要加冗余，而压缩要去冗余？
6. 为什么密钥空间大不等于密钥熵高？
7. 为什么现代安全设计越来越重视长度、时间和流量模式等副信息？

## 8.9 综合练习

### 练习 1：概念辨析

请分别用一句话解释以下术语，并指出它们在密码学中的作用：

- 熵
- 条件熵
- 互信息
- 冗余
- 完美保密

### 练习 2：生活分析

请从“压缩、纠错、加密、元数据泄露”四个角度，分析你每天使用的一种应用，例如微信、钉钉、网盘、外卖平台或短视频平台。

### 练习 3：判断题思考

判断并说明理由：

1. 一个密码越长，安全性一定越高。
2. 一个密文只要人眼看不懂，就说明没有信息泄露。
3. 加密后数据通常不容易再压缩。
4. 验证码位数不长，所以不需要其他保护机制。

### 练习 4：简答题

请解释为什么“冗余”在不同系统目标下会呈现出完全不同的角色。

### 练习 5：综合论述题

以“聊天软件中的信息论与密码学协同机制”为题，写一段 500 到 800 字的小论文，要求包含：

- 消息压缩或编码
- 传输噪声与可靠性
- 加密与认证
- 元数据可能带来的泄露

## 8.10 给学生的最后提醒

这类交叉专题最怕只记关键词，不建立联系。真正学会的标志，不是你能背出多少定义，而是你能不能回答下面这些问题：

- 这个信息论概念在密码学里到底有什么用？
- 这个密码机制在信息论上到底改变了什么？
- 这个现实系统为什么既要压缩，又要纠错，还要加密？
- 它除了正文内容，还可能通过哪些地方泄露信息？

如果你能把这些问题讲清楚，这门交叉专题就算真正掌握了。

## 8.11 全书总结

到这里，我们已经可以把密码学和信息论的交叉关系概括得比较完整了。

信息论提供了描述语言：信息量、熵、条件熵、互信息、冗余、信道容量。密码学提供了保护机制：密钥、加密、认证、随机性管理、协议设计。两者相遇之后，就形成了一个更完整的视角：既研究信息有多少、能传多快、能否纠错，也研究信息会不会泄露、会不会被篡改、是否还能保持隐私与真实性。

这正是现代信息安全系统的基础思维方式。

## 8.12 教学提醒

这章非常适合把讲台交给学生一部分。可以让学生任选一个对象来拆解，例如：

- 微信发消息
- 网盘上传文件
- 二维码支付
- 校园网登录

只要学生能用自己的话把这些系统和“熵、冗余、纠错、加密、泄露”连起来，说明这套课就真正讲进去了。
`},{slug:`09-术语速查与进阶补充`,title:`第九章 术语速查与进阶补充`,filename:`09-术语速查与进阶补充.md`,content:`# 第九章 术语速查与进阶补充

本章不是新的主线章节，而是供复习和拓展使用的“术语补充站”。前八章已经把核心思想讲清楚了，这一章进一步把一些课堂上经常出现、但初学者容易混淆的术语集中整理起来。

## 9.1 联合熵

联合熵 \`H(X, Y)\` 描述的是两个随机变量放在一起时的总不确定性。

直观理解：

- 如果 \`X\` 和 \`Y\` 几乎互不相关，那么一起看时不确定性会比较大。
- 如果 \`Y\` 基本由 \`X\` 决定，那么二者放在一起并不会比只看 \`X\` 多出太多不确定性。

### 在密码学里的意义

它常帮助我们理解“明文、密钥、密文”作为整体系统时的信息关系。例如一次一密之所以特别强，就是因为在联合分布层面上，密文并没有给明文带来额外可利用偏向。

## 9.2 条件熵与疑义度

在保密系统讨论中，\`H(M|C)\` 经常被称作**疑义度**，表示攻击者看到密文 \`C\` 之后，对明文 \`M\` 还剩下多少不确定性。

直观理解：

- 疑义度高，说明密文看完之后还是很迷糊。
- 疑义度低，说明密文已经让攻击者缩小了很多范围。

### 为什么这个词很贴切

“疑义度”不是说攻击者完全无从下手，而是说他心里还剩下多少“拿不准”的部分。它是信息论语言对“还有多少没暴露”的一种表达。

## 9.3 互信息与泄露量

互信息 \`I(M;C)\` 可以看成“密文平均泄露了多少关于明文的信息”。

它和疑义度之间有自然关系：

\`I(M;C) = H(M) - H(M|C)\`

也就是说：

- 原来对明文的不确定性有多少；
- 看到密文以后还剩多少；
- 两者差值就是密文帮攻击者减少了多少不确定性。

这也是为什么很多人会把互信息看作一种“平均泄露量”。

## 9.4 相对熵与分布差异

相对熵也常称为 KL 散度，常用于衡量两个概率分布之间差得有多远。

直观理解：

- 如果两个分布几乎一样，那么一个系统的输出就“不容易被区分成来自哪边”。
- 如果两个分布差异明显，攻击者就更容易据此进行判断和区分。

### 在交叉主题里的意义

它有助于理解这样一类问题：

- 某个密文输出是否“像随机输出”
- 两种输入是否会在输出分布上留下可分辨差别
- 某种副信息是否足以帮助分类和识别

虽然在入门课中未必深入推导，但知道它在描述“分布可区分性”非常有帮助。

## 9.5 熵率

熵率描述的是一个序列型信息源“平均每个符号带来多少新信息”。

它适合分析：

- 自然语言
- 长文本
- 音频序列
- 时间序列日志

### 为什么它和密码分析有关

因为很多真实明文不是彼此独立的单字符，而是带上下文依赖的序列。若一个消息源熵率较低，说明长期看它包含较多结构和可预测性，这对压缩有利，也可能对统计攻击有利。

## 9.6 唯一解距离

唯一解距离是保密系统中的经典概念，尤其常见于古典密码分析。它大致表示：当攻击者截获足够长的密文后，凭借语言冗余和统计规律，理论上可能把正确明文与其他错误候选区分开来的那个长度尺度。

### 直观理解

如果密文特别短，可能很多明文都说得通；
如果密文越来越长，语言规律会越来越明显，错误候选会逐渐被排除，最后可能只剩下一个“最合理”的解释。

### 它为什么是交叉概念

因为它同时依赖：

- 密钥空间大小
- 明文语言冗余
- 攻击者统计分析能力

换句话说，它把密码学中的“破译”与信息论中的“冗余”直接连在了一起。

## 9.7 最小熵

前面已经讲过最小熵，这里再用一句更考试化的话概括：

最小熵关注的是“攻击者优先猜最可能值时有多容易成功”，因此非常适合描述口令、验证码、弱随机源等对象的风险。

它比普通熵更偏最坏情况思维，也更贴近很多现实攻击场景。

## 9.8 保密容量

保密容量可以理解为：在存在窃听者的情况下，合法双方还能以多大速率进行安全传输，并让窃听者几乎得不到有用信息。

### 为什么这个概念很有代表性

它把“容量”这个通信概念和“保密”这个密码概念融合到了一起，充分说明：

- 有时安全不只来自密钥；
- 也可能部分来自信道条件和观测差异。

这是密码学与信息论交叉研究中非常有代表性的理论成果。

## 9.9 隐私放大

隐私放大指的是：从一段部分保密、带噪或带泄露的共享随机材料中，提炼出更短但更安全的密钥。

它的重要性在于：

- 原始材料未必完美；
- 但只要其中仍有足够多攻击者不知道的成分，就可能通过适当处理提取出可用密钥。

这一思想在现代密钥协商、量子密钥分发和物理层安全中都很重要。

## 9.10 语义安全与完美保密的区别

这两个概念容易混淆：

- 完美保密是信息论意义上的极强目标，强调密文不泄露任何关于明文的统计信息。
- 语义安全是现代计算密码学中的主流目标，强调攻击者即使看到密文，也不能获得任何现实可用的区分优势。

### 应该怎么记

可以把完美保密理解成“零信息增益”的理想上限，把语义安全理解成“在可计算世界里尽量逼近这种理想”的工程化目标。

## 9.11 一页速记版

如果你临考前只有几分钟，可以优先记住下面这组对应关系：

- 熵：平均不确定性
- 条件熵：知道部分信息后还剩多少不确定性
- 互信息：观察结果泄露了多少信息
- 冗余：可预测结构
- 一次一密：信息论安全的经典例子
- 唯一解距离：语言冗余帮助破译所需的大致密文长度尺度
- 最小熵：最容易被先手猜中的风险刻画
- 保密容量：有窃听者时仍能安全传输的理论速率上限

## 9.12 本章小结

本章的作用是把主线教材中已经出现或即将遇到的进阶术语统一收束起来。读完后，学生应至少能做到：

1. 看到术语时不陌生。
2. 知道每个术语在交叉主题中大致解决什么问题。
3. 能区分“衡量不确定性”“衡量泄露”“衡量冗余”“衡量可区分性”“衡量安全传输能力”这几类不同功能。
`},{slug:`README`,title:`密码学与信息论交叉教材`,filename:`README.md`,content:`# 密码学与信息论交叉教材

本教材面向信息安全、密码学、网络空间安全、计算机科学与数学相关专业学生，主题聚焦在“密码学和信息论的交叉地带”。它不是把两门课简单拼接在一起，而是围绕一个核心问题展开：**当我们想安全、可靠、高效地传输信息时，信息论告诉我们“信息是什么、能压缩到什么程度、能抵抗多少噪声”，密码学告诉我们“怎样让别人看不懂、改不了、伪造不了”。**

很多学生在分别学习这两门课时，会觉得它们像两条平行线。实际上，两者之间有非常紧密的联系。例如：

- 为什么一次一密会被称为“完美保密”？
- 为什么自然语言中的冗余一方面有助于纠错，另一方面又会帮助攻击者做密码分析？
- 为什么现代分组密码要强调“扩散”和“混淆”？
- 为什么通信系统既需要纠错码，又需要加密算法？
- 为什么“随机数质量”会直接决定密钥是否安全？

这些问题都位于密码学与信息论的交叉处。本教材希望把这些交叉知识点讲清楚，并用尽量贴近日常生活的例子帮助学生建立直觉。

## 一、教材定位

本教材适合作为以下场景的学习材料：

- 本科生《密码学》《信息论基础》《信息安全数学基础》的配套阅读材料
- 课程设计、课堂展示、复习串讲时的交叉专题资料
- 对“保密性、可靠性、压缩性”三者关系感兴趣的初学者自学读物
- 教师进行“信息安全数学”交叉专题备课时的讲义底稿

本教材的风格尽量接近课堂讲义和基础教材之间的中间形态：既保持概念准确，也尽量避免上来就堆砌抽象定义。

考虑到本套材料会用于备课，教材写作特别加入了三类设计：

- 尽量先讲直觉，再讲定义，避免学生一上来被公式吓住。
- 每章都优先选择学生熟悉的生活场景，例如聊天软件、验证码、压缩包、二维码、Wi-Fi。
- 章节之间强调“为什么这个概念在密码学里有用”，而不是把信息论概念孤立摆放。

## 二、学习目标

学完本教材后，应能够做到：

1. 理解信息量、熵、条件熵、互信息、冗余等信息论基本概念，并知道它们在密码分析中的意义。
2. 理解完美保密、一次一密、密钥熵、泄露量等概念，并能从信息论角度解释其安全性。
3. 理解压缩与加密、冗余与纠错、噪声与保密之间的关系。
4. 能够说明 Shannon 的“混淆”和“扩散”思想为何成为现代密码设计的重要理念。
5. 能把日常生活中的通信、验证码、Wi-Fi、聊天软件、二维码、压缩包等现象与课程知识联系起来。

## 三、章节安排

1. [00-教师备课说明](./00-教师备课说明.md)
2. [01-为什么密码学离不开信息论](./01-为什么密码学离不开信息论.md)
3. [02-熵、信息量与不确定性](./02-熵、信息量与不确定性.md)
4. [03-完美保密、一次一密与香农视角](./03-完美保密、一次一密与香农视角.md)
5. [04-压缩、冗余与密码分析](./04-压缩、冗余与密码分析.md)
6. [05-信道、噪声、纠错与安全通信](./05-信道、噪声、纠错与安全通信.md)
7. [06-随机性、密钥与信息泄露](./06-随机性、密钥与信息泄露.md)
8. [07-现代密码中的信息论思想](./07-现代密码中的信息论思想.md)
9. [08-生活案例、综合练习与课程总结](./08-生活案例、综合练习与课程总结.md)
10. [09-术语速查与进阶补充](./09-术语速查与进阶补充.md)

## 四、建议学习路径

建议按以下顺序阅读：

1. 教师备课时，建议先看 \`00-教师备课说明\`，快速掌握每章应该怎么讲、哪些地方要放慢、哪些例子最适合带入课堂。
2. 再读第 1 章，建立“为什么这两门课必须放在一起看”的整体图景。
3. 然后读第 2 章，打好熵、互信息、冗余这些最关键的概念基础。
4. 第 3 章是交叉核心，重点理解一次一密和完美保密。
5. 第 4 章和第 5 章分别从“高效传输”和“可靠传输”两个方向展开。
6. 第 6 章和第 7 章把视角推进到现代密码设计和现实系统。
7. 通过第 8 章的案例和练习，把知识真正串成体系。
8. 第 9 章适合考前速查，或作为老师课堂延伸讲解的补充材料。

## 五、先修知识

建议具备以下基础：

- 初等概率论
- 对数运算与指数函数
- 离散数学基础
- 对通信系统、加密、压缩有非常初步的常识性认识

如果这些基础不牢，也不影响阅读。遇到公式时，建议先抓住“它在描述什么现象”，再去看符号细节。

## 六、整套教材的主线

整套教材围绕三条主线展开：

### 1. 信息有多少

这一条线由信息论负责。它关心的是：

- 一条消息有多“意外”
- 一个消息源平均带来多少信息
- 一段数据还有多少可压缩空间
- 一个系统究竟泄露了多少信息

### 2. 信息能不能保住

这一条线由密码学负责。它关心的是：

- 攻击者能不能看懂密文
- 密钥是否足够随机
- 系统是否会在统计意义上暴露规律
- 算法是否把明文特征打散了

### 3. 信息能不能传到

这一条线更多体现为通信理论与编码理论的任务。它关心的是：

- 信道里有噪声怎么办
- 数据丢包、翻转、干扰之后如何恢复
- 在可靠性和安全性之间如何协同设计

## 七、学习提醒

1. 不要把“压缩”“纠错”“加密”看成三件完全无关的事。它们都在处理信息，只是目标不同。
2. 不要只背定义。尤其是熵、互信息、完美保密，如果没有直觉，记住公式也没用。
3. 学到交叉部分时，最重要的问题不是“这章讲了什么”，而是“这个信息论概念在密码学里到底起了什么作用”。

## 八、一个总的直观比喻

如果把信息传输比作寄快递，那么：

- **信息论中的压缩**像是把包裹尽量打包紧凑，减少体积。
- **编码理论中的纠错**像是在包裹外加缓冲层和防撞结构，防止运输中损坏。
- **密码学中的加密**像是给包裹加锁并伪装内容，让别人拿到也看不懂。

而真正的工程系统，往往是这三件事同时做。

带着这个总图去读后面的章节，很多知识点会更容易串起来。
`}],Jf=new Map(qf.map(e=>[e.slug,e])),Yf=[...qf];function Xf(){return Promise.resolve({docs:Yf.map(({slug:e,title:t,filename:n})=>({slug:e,title:t,filename:n}))})}function Zf(e){let t=Jf.get(e);return t?Promise.resolve({slug:t.slug,title:t.title,filename:t.filename,content:t.content}):Promise.reject(Error(`Document not found: ${e}`))}var Qf={class:`page`},$f={class:`docs-layout`},ep={class:`card markdown-card`},tp={key:0},np={key:1},rp={class:`markdown-card__header`},ip={class:`status-pill status-pill--ok`},ap=[`innerHTML`],op={class:`doc-pager`},sp={key:1,class:`doc-pager__item doc-pager__item--empty`},cp={key:3,class:`doc-pager__item doc-pager__item--empty`},lp={key:3},up={key:0,class:`toc-sidebar card`},dp={class:`toc-links`},fp=[`href`],pp={__name:`DocsView`,setup(e){$.setOptions({gfm:!0,breaks:!0});function t(e){return e.toLowerCase().replace(/[`~!@#$%^&*()+=|{}[\]:;"'<>,.?/\\]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`).replace(/^-|-$/g,``)}function n(e){let n=e||``,r=[],i=new Map,a=new $.Renderer;return a.heading=({tokens:e,depth:n})=>{let a=e.map(e=>e.raw||``).join(``).trim(),o=t(a)||`section-${r.length+1}`,s=i.get(o)||0;i.set(o,s+1);let c=s?`${o}-${s+1}`:o;return n<=3&&r.push({id:c,text:a,level:n}),`<h${n} id="${c}">${$.Parser.parseInline(e)}</h${n}>`},{toc:r,html:$.parse(n,{renderer:a})}}let r=Lo(),i=Io(),a=N([]),o=N(null),s=N(!0),c=N(``),l=K(()=>r.params.slug||``),u=K(()=>a.value.findIndex(e=>e.slug===l.value)),d=K(()=>u.value>0?a.value[u.value-1]:null),f=K(()=>u.value>=0&&u.value<a.value.length-1?a.value[u.value+1]:null),p=K(()=>n(o.value?.content||``)),m=K(()=>p.value.html),h=K(()=>{let e=p.value.toc;return e.length?e[0].level===1?e.slice(1):e:[]}),g=[{step:`结构说明`,title:`强调教材已静态打包`,text:`左侧目录不是手工写死，而是构建阶段扫描 Markdown 后生成的静态数据。`},{step:`观察重点`,title:`点开任意章节`,text:`说明前端直接读取已打包的 Markdown 正文，再渲染成教材页面。`},{step:`结论指向`,title:`收束到课堂可用性`,text:`这意味着整站既能做互动课件，也能直接承担教材浏览功能。`}];async function _(){s.value=!0,c.value=``;try{if(a.value=(await Xf()).docs||[],!a.value.length){o.value=null;return}let e=l.value||a.value[0].slug;if(!l.value){i.replace(`/docs/${encodeURIComponent(e)}`);return}await v(e)}catch{c.value=`无法读取已打包的教材资源，请确认构建阶段已经生成 docs-data。`}finally{s.value=!1}}async function v(e){if(e){s.value=!0,c.value=``;try{o.value=await Zf(e)}catch{c.value=`文档加载失败，可能是 slug 无效或该资源尚未被打包。`,o.value=null}finally{s.value=!1}}}return z(()=>r.params.slug,async e=>{typeof e==`string`&&await v(e)}),nr(_),(e,t)=>(H(),U(`section`,Qf,[G(Rc,{tag:`Markdown Docs / Static Bundle`,title:`交叉教材分页面阅读`,lead:`这一页直接承载“密码学与信息论交叉教材”。构建阶段会把 Markdown 教材打包进前端资源，因此部署成纯静态站点后也能完整浏览。`,badges:[c.value?`资源异常`:`静态教材已加载`,`Docs`,`Anchor TOC`]},null,8,[`badges`]),G(Wc,{duration:`建议 45-60 秒`,items:g}),W(`div`,$f,[G(Kf,{docs:a.value,"current-slug":l.value,note:`这里承载的是备课版交叉教材，左侧目录和右侧正文都来自构建阶段静态收集的 Markdown 资源。`},null,8,[`docs`,`current-slug`]),W(`article`,ep,[s.value?(H(),U(`p`,tp,`正在加载 Markdown 内容...`)):c.value?(H(),U(`p`,np,O(c.value),1)):o.value?(H(),U(V,{key:2},[W(`header`,rp,[W(`div`,null,[t[0]||=W(`p`,{class:`section-tag`},`当前文档`,-1),W(`h3`,null,O(o.value.title),1)]),W(`span`,ip,O(o.value.filename),1)]),t[5]||=W(`div`,{class:`speech-card speech-card--compact`},[W(`p`,null,` 这一页既可以给学生当作分章节教材，也可以给老师当作备课底稿。左侧目录、正文和页内锚点都是静态打包出来的，因此整站可以脱离后端直接托管。 `)],-1),W(`div`,{class:`markdown-body`,innerHTML:m.value},null,8,ap),W(`div`,op,[d.value?(H(),Ii(P(gc),{key:0,class:`doc-pager__item`,to:`/docs/${encodeURIComponent(d.value.slug)}`},{default:L(()=>[t[1]||=W(`span`,null,`上一篇`,-1),W(`strong`,null,O(d.value.title),1)]),_:1},8,[`to`])):(H(),U(`div`,sp,[...t[2]||=[W(`span`,null,`上一篇`,-1),W(`strong`,null,`已经是第一篇`,-1)]])),f.value?(H(),Ii(P(gc),{key:2,class:`doc-pager__item`,to:`/docs/${encodeURIComponent(f.value.slug)}`},{default:L(()=>[t[3]||=W(`span`,null,`下一篇`,-1),W(`strong`,null,O(f.value.title),1)]),_:1},8,[`to`])):(H(),U(`div`,cp,[...t[4]||=[W(`span`,null,`下一篇`,-1),W(`strong`,null,`已经是最后一篇`,-1)]]))])],64)):(H(),U(`p`,lp,`没有可显示的 Markdown 文档。`))]),o.value&&h.value.length?(H(),U(`aside`,up,[t[6]||=W(`div`,{class:`card__header`},[W(`h3`,null,`本页目录`),W(`span`,{class:`hint-chip`},`锚点区`)],-1),W(`div`,dp,[(H(!0),U(V,null,B(h.value,e=>(H(),U(`a`,{key:e.id,class:ge([`toc-link`,[`toc-link--level-${e.level}`]]),href:`#${e.id}`},O(e.text),11,fp))),128))])])):Ki(``,!0)])]))}},mp={class:`auto-progress`},hp=[`onClick`],gp={__name:`AutoPlayStepper`,props:{steps:{type:Array,default:()=>[]},currentStep:{type:Number,default:0}},emits:[`update:currentStep`],setup(e){function t(e){return String(e).padStart(2,`0`)}return(n,r)=>(H(),U(`div`,mp,[(H(!0),U(V,null,B(e.steps,(r,i)=>(H(),U(`button`,{key:r.title,class:ge([`auto-progress__step`,{"auto-progress__step--active":i===e.currentStep}]),onClick:e=>n.$emit(`update:currentStep`,i)},[W(`em`,null,O(t(i+1)),1),W(`span`,null,O(r.short),1)],10,hp))),128))]))}},_p={class:`page`},vp={class:`card auto-lesson`},yp={class:`card__header`},bp={class:`auto-controls`},xp={class:`lesson-summary`},Sp={class:`summary-pill`},Cp={class:`grid grid--two`},wp={class:`card auto-stage`},Tp={class:`card__header`},Ep={class:`auto-stage__panel`},Dp={key:0,class:`code-card`},Op={key:1,class:`table-shell`},kp={key:2},Ap={key:3,class:`speech-card`},jp={class:`card auto-explain`},Mp={class:`method-callout`},Np={class:`method-callout`},Pp={class:`method-callout`},Fp={class:`speech-card`},Ip={class:`card auto-lesson`},Lp={class:`card__header`},Rp={class:`auto-controls`},zp={class:`lesson-summary`},Bp={class:`summary-pill`},Vp={class:`grid grid--two`},Hp={class:`card auto-stage`},Up={class:`card__header`},Wp={class:`auto-stage__panel`},Gp={key:0,class:`code-card`},Kp={key:1,class:`code-card`},qp={key:2},Jp={key:3,class:`code-card`},Yp={class:`card auto-explain`},Xp={class:`method-callout`},Zp={class:`method-callout`},Qp={class:`method-callout`},$p={class:`speech-card`},em={class:`card auto-lesson`},tm={class:`card__header`},nm={class:`auto-controls`},rm={class:`lesson-summary`},im={class:`summary-pill`},am={class:`grid grid--two`},om={class:`card auto-stage`},sm={class:`card__header`},cm={class:`auto-stage__panel`},lm={key:0,class:`code-card`},um={key:1,class:`code-card`},dm={key:2,class:`code-card`},fm={key:3},pm={class:`card auto-explain`},mm={class:`method-callout`},hm={class:`method-callout`},gm={class:`method-callout`},_m={class:`speech-card`},vm={__name:`AutoDemoView`,setup(e){let t=Dl(Cl(.7)),n=Sl(`MEETATDAWN`),r=Sl(`QWERTYASDF`),i=Il(n,r),a=Ll(i,Il(Sl(`SENDSUPPLY`),r)),o=K(()=>Wl(3)),s=[{short:`现实问题`,title:`步骤一：从弱口令问题切入`,principle:`学生先要接受“长度相同，不确定性却不同”的现实现象。`,action:"用 `123456` 和随机串作对比，引出分布而不是长度才是关键。",reason:`这能帮助学生把熵理解成“难猜程度”，而不是纯符号公式。`,conclusion:`熵的任务是衡量平均不确定性。`},{short:`看概率`,title:`步骤二：把概率和信息量对应起来`,principle:`罕见事件更意外，因此信息量更大。`,action:`展示二元分布里不同结果的概率和单次信息量。`,reason:"学生会更容易接受 `I(x) = -log2 P(x)` 的直觉来源。",conclusion:`信息量是单事件视角，熵是平均视角。`},{short:`看图`,title:`步骤三：观察偏斜分布的图形`,principle:`分布越偏斜，平均不确定性越低。`,action:`用柱状图展示 0.3/0.7 分布下的概率和信息量差异。`,reason:`图比公式更容易让学生看懂“偏斜”在干什么。`,conclusion:`结果种类多不等于熵高。`},{short:`回密码学`,title:`步骤四：收束到密钥和口令安全`,principle:`安全系统更关心真实分布，而不是表面空间。`,action:`把熵概念重新落到口令、密钥和验证码场景里。`,reason:`这一步决定学生能否把信息论概念用回密码学。`,conclusion:`真实分布比理论空间更关键。`}],c=[{short:`输入`,title:`步骤一：先看明文和随机密钥`,principle:`一次一密的关键在随机、等长和只使用一次。`,action:`展示明文和随机密钥，而不是先讲公式。`,reason:`这样学生不会误以为安全来自某个神秘运算。`,conclusion:`安全前提在密钥条件，不在表面形式。`},{short:`形成密文`,title:`步骤二：展示密文如何生成`,principle:`每个明文字母都与一位随机密钥结合，得到密文。`,action:`展示明文、密钥、密文三者关系。`,reason:`这为后面的“多种明文解释都说得通”做准备。`,conclusion:`密文本身不会偏向某个唯一明文。`},{short:`后验直觉`,title:`步骤三：看先验与后验分布`,principle:`完美保密要求看到密文前后，明文分布不变。`,action:`用均匀分布图表示“看到密文后没有新增偏向”。`,reason:`这能把完美保密从一句定义变成可视化直觉。`,conclusion:`I(M;C)=0 的直觉是“后验不变”。`},{short:`复用反例`,title:`步骤四：再看密钥复用会怎样`,principle:`同一密钥复用会把两条密文绑在一起。`,action:"展示 `C1-C2` 暴露明文差分结构。",reason:`学生最容易忽略的正是“一次”这两个字。`,conclusion:`一次一密最怕密钥复用。`}],l=[{short:`原始消息`,title:`步骤一：从真实通信系统出发`,principle:`信息系统不只是“发出去”，还要考虑带宽、噪声和敌手。`,action:`先摆出一条含重复结构的消息。`,reason:`这让压缩、纠错和加密都能有自然出场位置。`,conclusion:`真实系统通常同时追求高效、可靠和安全。`},{short:`压缩`,title:`步骤二：解释为什么先压缩`,principle:`压缩利用的是冗余。`,action:`说明重复结构越多，越有机会减少长度。`,reason:`这是学生理解“压缩器也在找规律”的关键。`,conclusion:`压缩在减冗余。`},{short:`纠错`,title:`步骤三：解释为什么还要加冗余`,principle:`有噪声的信道里，系统反而需要主动加入可靠性冗余。`,action:`说明纠错和压缩方向相反，但目标不同。`,reason:`这一步是交叉专题里最容易混淆的点之一。`,conclusion:`纠错在加冗余。`},{short:`加密`,title:`步骤四：再把保密性放回系统里`,principle:`加密处理的是结构隐藏和敌手观察。`,action:`配合误码率曲线，强调纠错解决可靠性、加密解决保密性。`,reason:`学生此时最容易形成完整系统视角。`,conclusion:`高效、可靠、安全是并行设计目标。`}],u=N(0),d=N(0),f=N(0),p=N(!0),m=N(!0),h=N(!0),g=N(null),_=N(null),v=N(null),y=null,b=null,x=null;function S(e,t){return!e?.value||!window.echarts?null:(t&&t.getDom()!==e.value&&(t.dispose(),t=null),t||=window.echarts.init(e.value),t)}function C(){y=S(g,y),y&&y.setOption({animationDuration:400,tooltip:{trigger:`axis`},grid:{top:36,left:46,right:18,bottom:36},xAxis:{type:`category`,data:t.map(e=>e.label),axisLabel:{color:`#50656f`}},yAxis:[{type:`value`,name:`概率`,max:1,axisLabel:{color:`#50656f`}},{type:`value`,name:`bit`,axisLabel:{color:`#50656f`}}],series:[{type:`bar`,data:t.map(e=>e.probability),itemStyle:{color:`#234f66`,borderRadius:[5,5,0,0]}},{type:`line`,yAxisIndex:1,smooth:!0,data:t.map(e=>e.info),lineStyle:{color:`#c46b43`,width:3},itemStyle:{color:`#c46b43`}}]})}function w(){b=S(_,b),b&&b.setOption({animationDuration:400,tooltip:{trigger:`axis`},legend:{top:6,textStyle:{color:`#50656f`},data:[`先验`,`后验`]},grid:{top:40,left:46,right:18,bottom:36},xAxis:{type:`category`,data:[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`],axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`概率`,max:.18,axisLabel:{color:`#50656f`}},series:[{name:`先验`,type:`bar`,data:Array.from({length:8},()=>.125),itemStyle:{color:`#234f66`,borderRadius:[5,5,0,0]}},{name:`后验`,type:`line`,smooth:!0,data:Array.from({length:8},()=>.125),lineStyle:{color:`#c46b43`,width:3},itemStyle:{color:`#c46b43`}}]})}function ee(){x=S(v,x),x&&x.setOption({animationDuration:400,tooltip:{trigger:`axis`},legend:{top:6,textStyle:{color:`#50656f`},data:[`直接传输`,`纠错后`]},grid:{top:40,left:46,right:18,bottom:36},xAxis:{type:`category`,data:o.value.map(e=>`${Math.round(e.noise*100)}%`),axisLabel:{color:`#50656f`}},yAxis:{type:`value`,name:`BER`,axisLabel:{color:`#50656f`}},series:[{name:`直接传输`,type:`line`,smooth:!0,data:o.value.map(e=>e.raw),lineStyle:{color:`#c46b43`,width:3},itemStyle:{color:`#c46b43`}},{name:`纠错后`,type:`line`,smooth:!0,data:o.value.map(e=>e.coded),lineStyle:{color:`#234f66`,width:3},itemStyle:{color:`#234f66`}}]})}function te(e,t,n,r){clearInterval(r.value),e.value&&(r.value=setInterval(()=>{t.value=(t.value+1)%n},4200))}let ne=N(null),T=N(null),re=N(null);function ie(){p.value=!p.value}function ae(){m.value=!m.value}function oe(){h.value=!h.value}function E(){u.value=0,p.value=!0}function se(){d.value=0,m.value=!0}function D(){f.value=0,h.value=!0}function ce(){y?.resize(),b?.resize(),x?.resize()}return z(p,()=>te(p,u,s.length,ne),{immediate:!0}),z(m,()=>te(m,d,c.length,T),{immediate:!0}),z(h,()=>te(h,f,l.length,re),{immediate:!0}),z(u,async()=>{u.value===2&&(await vn(),C())}),z(d,async()=>{d.value===2&&(await vn(),w())}),z(f,async()=>{f.value===3&&(await vn(),ee())}),nr(()=>{C(),w(),ee(),window.addEventListener(`resize`,ce)}),ar(()=>{clearInterval(ne.value),clearInterval(T.value),clearInterval(re.value),window.removeEventListener(`resize`,ce),y?.dispose(),b?.dispose(),x?.dispose()}),(e,o)=>(H(),U(`section`,_p,[G(Rc,{tag:`Auto Demo / Guided Lesson`,title:`自动演示板块`,lead:`这个板块把三段最容易课堂卡住的内容做成自动播放流程：熵与分布、完美保密与一次一密、压缩纠错加密的协同关系。老师可以顺播，学生也可以课后回看。`,badges:[`自动播放`,`逐步讲解`,`图表联动`]}),W(`article`,vp,[W(`div`,yp,[o[3]||=W(`div`,null,[W(`p`,{class:`section-tag`},`Lesson A`),W(`h3`,null,`熵与分布自动演示`)],-1),W(`div`,bp,[W(`button`,{class:`action-button`,onClick:ie},O(p.value?`暂停`:`播放`),1),W(`button`,{class:`action-button action-button--ghost`,onClick:E},`重置`)])]),W(`div`,xp,[o[5]||=W(`div`,{class:`summary-pill`},[W(`span`,null,`分析对象`),W(`strong`,null,`概率分布`)],-1),o[6]||=W(`div`,{class:`summary-pill`},[W(`span`,null,`核心结论`),W(`strong`,null,`结果种类多 ≠ 熵一定大`)],-1),W(`div`,Sp,[o[4]||=W(`span`,null,`当前步骤`,-1),W(`strong`,null,O(s[u.value].title),1)])]),G(gp,{steps:s,"current-step":u.value,"onUpdate:currentStep":o[0]||=e=>u.value=e},null,8,[`current-step`]),W(`div`,Cp,[W(`article`,wp,[W(`div`,Tp,[W(`h4`,null,O(s[u.value].title),1),o[7]||=W(`span`,{class:`hint-chip`},`自动讲解`,-1)]),W(`div`,Ep,[u.value===0?(H(),U(`div`,Dp,[...o[8]||=[W(`h4`,null,`现实问题`,-1),W(`p`,null,"为什么 `123456` 和一个随机 6 位串长度相同，但大家都觉得前者更不安全？",-1)]])):u.value===1?(H(),U(`div`,Op,[W(`table`,null,[o[9]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`结果`),W(`th`,null,`概率`),W(`th`,null,`信息量`)])],-1),W(`tbody`,null,[(H(!0),U(V,null,B(P(t),e=>(H(),U(`tr`,{key:e.label},[W(`td`,null,O(e.label),1),W(`td`,null,O(e.probability),1),W(`td`,null,O(e.info)+` bit`,1)]))),128))])])])):u.value===2?(H(),U(`div`,kp,[W(`div`,{ref_key:`entropyChartRef`,ref:g,class:`chart chart--wide`},null,512)])):(H(),U(`div`,Ap,[...o[10]||=[W(`p`,null,`当分布变得偏斜时，平均不确定性下降，最容易被先手猜中的结果也更集中。这就是为什么安全系统更在意真实熵，而不是只看表面长度。`,-1)]]))])]),W(`article`,jp,[o[14]||=W(`div`,{class:`card__header`},[W(`h4`,null,`方法说明`),W(`span`,{class:`hint-chip hint-chip--warm`},`详细说明`)],-1),W(`div`,Mp,[o[11]||=W(`h5`,null,`原理`,-1),W(`p`,null,O(s[u.value].principle),1)]),W(`div`,Np,[o[12]||=W(`h5`,null,`当前操作`,-1),W(`p`,null,O(s[u.value].action),1)]),W(`div`,Pp,[o[13]||=W(`h5`,null,`为什么有效`,-1),W(`p`,null,O(s[u.value].reason),1)]),W(`div`,Fp,[W(`p`,null,O(s[u.value].conclusion),1)])])])]),W(`article`,Ip,[W(`div`,Lp,[o[15]||=W(`div`,null,[W(`p`,{class:`section-tag`},`Lesson B`),W(`h3`,null,`一次一密与完美保密自动演示`)],-1),W(`div`,Rp,[W(`button`,{class:`action-button`,onClick:ae},O(m.value?`暂停`:`播放`),1),W(`button`,{class:`action-button action-button--ghost`,onClick:se},`重置`)])]),W(`div`,zp,[o[17]||=W(`div`,{class:`summary-pill`},[W(`span`,null,`分析对象`),W(`strong`,null,`一次一密`)],-1),o[18]||=W(`div`,{class:`summary-pill`},[W(`span`,null,`核心结论`),W(`strong`,null,`后验不变`)],-1),W(`div`,Bp,[o[16]||=W(`span`,null,`当前步骤`,-1),W(`strong`,null,O(c[d.value].title),1)])]),G(gp,{steps:c,"current-step":d.value,"onUpdate:currentStep":o[1]||=e=>d.value=e},null,8,[`current-step`]),W(`div`,Vp,[W(`article`,Hp,[W(`div`,Up,[W(`h4`,null,O(c[d.value].title),1),o[19]||=W(`span`,{class:`hint-chip`},`自动讲解`,-1)]),W(`div`,Wp,[d.value===0?(H(),U(`div`,Gp,[o[20]||=W(`h4`,null,`明文与密钥`,-1),W(`p`,null,`明文：`+O(P(n)),1),W(`p`,null,`密钥：`+O(P(r)),1)])):d.value===1?(H(),U(`div`,Kp,[o[21]||=W(`h4`,null,`生成密文`,-1),W(`p`,null,O(P(i)),1)])):d.value===2?(H(),U(`div`,qp,[W(`div`,{ref_key:`otpChartRef`,ref:_,class:`chart chart--wide`},null,512)])):(H(),U(`div`,Jp,[o[22]||=W(`h4`,null,`复用后的风险`,-1),W(`p`,null,`若同一密钥再次加密另一条消息，攻击者可观察到：`+O(P(a)),1)]))])]),W(`article`,Yp,[o[26]||=W(`div`,{class:`card__header`},[W(`h4`,null,`方法说明`),W(`span`,{class:`hint-chip hint-chip--warm`},`详细说明`)],-1),W(`div`,Xp,[o[23]||=W(`h5`,null,`原理`,-1),W(`p`,null,O(c[d.value].principle),1)]),W(`div`,Zp,[o[24]||=W(`h5`,null,`当前操作`,-1),W(`p`,null,O(c[d.value].action),1)]),W(`div`,Qp,[o[25]||=W(`h5`,null,`为什么有效`,-1),W(`p`,null,O(c[d.value].reason),1)]),W(`div`,$p,[W(`p`,null,O(c[d.value].conclusion),1)])])])]),W(`article`,em,[W(`div`,tm,[o[27]||=W(`div`,null,[W(`p`,{class:`section-tag`},`Lesson C`),W(`h3`,null,`压缩、纠错与加密自动演示`)],-1),W(`div`,nm,[W(`button`,{class:`action-button`,onClick:oe},O(h.value?`暂停`:`播放`),1),W(`button`,{class:`action-button action-button--ghost`,onClick:D},`重置`)])]),W(`div`,rm,[o[29]||=W(`div`,{class:`summary-pill`},[W(`span`,null,`分析对象`),W(`strong`,null,`通信系统`)],-1),o[30]||=W(`div`,{class:`summary-pill`},[W(`span`,null,`核心结论`),W(`strong`,null,`高效、可靠、安全并行出现`)],-1),W(`div`,im,[o[28]||=W(`span`,null,`当前步骤`,-1),W(`strong`,null,O(l[f.value].title),1)])]),G(gp,{steps:l,"current-step":f.value,"onUpdate:currentStep":o[2]||=e=>f.value=e},null,8,[`current-step`]),W(`div`,am,[W(`article`,om,[W(`div`,sm,[W(`h4`,null,O(l[f.value].title),1),o[31]||=W(`span`,{class:`hint-chip`},`自动讲解`,-1)]),W(`div`,cm,[f.value===0?(H(),U(`div`,lm,[...o[32]||=[W(`h4`,null,`原始消息`,-1),W(`p`,null,`HELLOHELLOHELLO`,-1)]])):f.value===1?(H(),U(`div`,um,[...o[33]||=[W(`h4`,null,`压缩后的核心直觉`,-1),W(`p`,null,`重复结构越明显，越有压缩空间。压缩是在减少冗余。`,-1)]])):f.value===2?(H(),U(`div`,dm,[...o[34]||=[W(`h4`,null,`纠错后的核心直觉`,-1),W(`p`,null,`为了对抗噪声，系统要重新加入部分冗余。纠错是在增加可靠性冗余。`,-1)]])):(H(),U(`div`,fm,[W(`div`,{ref_key:`systemChartRef`,ref:v,class:`chart chart--wide`},null,512)]))])]),W(`article`,pm,[o[38]||=W(`div`,{class:`card__header`},[W(`h4`,null,`方法说明`),W(`span`,{class:`hint-chip hint-chip--warm`},`详细说明`)],-1),W(`div`,mm,[o[35]||=W(`h5`,null,`原理`,-1),W(`p`,null,O(l[f.value].principle),1)]),W(`div`,hm,[o[36]||=W(`h5`,null,`当前操作`,-1),W(`p`,null,O(l[f.value].action),1)]),W(`div`,gm,[o[37]||=W(`h5`,null,`为什么有效`,-1),W(`p`,null,O(l[f.value].reason),1)]),W(`div`,_m,[W(`p`,null,O(l[f.value].conclusion),1)])])])])]))}},ym={class:`page`},bm={class:`card`},xm={class:`practice-list`},Sm={class:`cue-card__step`},Cm={__name:`PracticeView`,setup(e){return(e,t)=>(H(),U(`section`,ym,[G(Rc,{tag:`Practice`,title:`课堂练习与讨论题`,lead:`这一页不是堆答案，而是帮助老师组织课堂提问，帮助学生把概念重新放回真实系统里。`,badges:[`概念辨析`,`情境题`,`系统拆解`]}),W(`article`,bm,[t[2]||=W(`div`,{class:`card__header`},[W(`h3`,null,`练习清单`),W(`span`,{class:`hint-chip`},`Practice`)],-1),W(`div`,xm,[(H(!0),U(V,null,B(P(Kc),e=>(H(),U(`article`,{key:e.prompt,class:`practice-card`},[W(`span`,Sm,O(e.type),1),W(`h4`,null,O(e.prompt),1),W(`p`,null,[t[0]||=W(`strong`,null,`答题提示：`,-1),Wi(O(e.answerGuide),1)]),W(`p`,null,[t[1]||=W(`strong`,null,`教学点：`,-1),Wi(O(e.teachingPoint),1)])]))),128))])])]))}},wm={class:`page`},Tm={class:`card`},Em={class:`doc-links`},Dm=wc({history:Ws(`/cross-learning/`),routes:[{path:`/`,name:`home`,component:$c},{path:`/lessons`,name:`lessons`,component:al},{path:`/lesson/entropy`,name:`lesson-entropy`,component:uu},{path:`/lesson/perfect-secrecy`,name:`lesson-perfect-secrecy`,component:Cu},{path:`/lesson/compression-redundancy`,name:`lesson-compression-redundancy`,component:Nu},{path:`/lesson/channel-security`,name:`lesson-channel-security`,component:Gu},{path:`/lesson/randomness-leakage`,name:`lesson-randomness-leakage`,component:ed},{path:`/lesson/modern-design`,name:`lesson-modern-design`,component:fd},{path:`/auto-demo`,name:`auto-demo`,component:vm},{path:`/docs/:slug?`,name:`docs`,component:pp,props:!0},{path:`/practice`,name:`practice`,component:Cm},{path:`/about`,name:`about`,component:{__name:`AboutView`,setup(e){return(e,t)=>(H(),U(`section`,wm,[G(Rc,{tag:`About`,title:`关于本课与网站使用说明`,lead:`这套网站服务的是本科交叉专题教学，重点是让学生把信息论概念真正用到密码学场景里，而不是把两门课简单并排放置。`,badges:[`本科标准`,`教师备课`,`静态部署`]}),t[1]||=Gi(`<div class="grid grid--two"><article class="card"><h3>适用课程</h3><ul class="bullet-list"><li>信息安全数学</li><li>信息安全导论</li><li>密码学基础</li><li>网络空间安全基础课程中的交叉专题课</li></ul></article><article class="card"><h3>网站角色</h3><ul class="bullet-list"><li>课堂授课时的互动课件</li><li>教师备课时的节奏参考</li><li>学生课后的教材与练习入口</li></ul></article></div>`,1),W(`article`,Tm,[t[0]||=W(`div`,{class:`card__header`},[W(`h3`,null,`教材章节映射`),W(`span`,{class:`hint-chip`},`Docs`)],-1),W(`div`,Em,[(H(!0),U(V,null,B(P(qc),e=>(H(),U(`div`,{key:e,class:`doc-link`},[W(`strong`,null,O(e),1)]))),128))])])]))}}}],scrollBehavior(){return{top:0}}});vo(Ac).use(Dm).mount(`#app`);