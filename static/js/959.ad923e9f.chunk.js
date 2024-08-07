/*! For license information please see 959.ad923e9f.chunk.js.LICENSE.txt */
(self.webpackChunklab3=self.webpackChunklab3||[]).push([[959],{2959:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var n=r(5043),i=r(3003),s=r(5587),a=r(4282),o=r(8139),d=r.n(o),c=r(7852),l=r(579);const u=n.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,striped:i,bordered:s,borderless:a,hover:o,size:u,variant:x,responsive:h,...p}=e;const f=(0,c.oU)(r,"table"),v=d()(n,f,x&&`${f}-${x}`,u&&`${f}-${u}`,i&&`${f}-${"string"===typeof i?`striped-${i}`:"striped"}`,s&&`${f}-bordered`,a&&`${f}-borderless`,o&&`${f}-hover`),b=(0,l.jsx)("table",{...p,className:v,ref:t});if(h){let e=`${f}-responsive`;return"string"===typeof h&&(e=`${e}-${h}`),(0,l.jsx)("div",{className:e,children:b})}return b}));const x=function(){const e=(0,i.d4)((e=>e.cart.items));console.log(e);const t=(0,i.wA)(),r=e.reduce(((e,t)=>e+t.price*t.quantity),0).toFixed(2);return(0,l.jsx)("div",{children:0===e.length?(0,l.jsx)("p",{className:"desc",children:"Your cart is empty."}):(0,l.jsxs)("div",{children:[(0,l.jsxs)(u,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"container  mt-5",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Image"}),(0,l.jsx)("th",{children:"Title"}),(0,l.jsx)("th",{children:"Description"}),(0,l.jsx)("th",{children:"Price Piece"}),(0,l.jsx)("th",{children:"Total Price"}),(0,l.jsx)("th",{children:"Quantity"}),(0,l.jsx)("th",{children:"Actions"})]})}),(0,l.jsx)("tbody",{children:e.map((e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("img",{src:e.imgSrc,alt:e.title,style:{width:"100px",height:"100px"}})}),(0,l.jsx)("td",{children:e.title}),(0,l.jsx)("td",{children:e.description}),(0,l.jsx)("td",{children:e.price}),(0,l.jsx)("td",{children:(e.price*e.quantity).toFixed(2)}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"quantity-controls",children:[(0,l.jsx)(a.A,{variant:"secondary",onClick:()=>{return r=e.id,void t((0,s.CG)({id:r}));var r},children:"-"}),(0,l.jsx)("span",{className:"quantity",children:e.quantity}),(0,l.jsx)(a.A,{variant:"secondary",onClick:()=>{return r=e.id,void t((0,s.o7)({id:r}));var r},children:"+"})]})}),(0,l.jsx)("td",{children:(0,l.jsx)(a.A,{variant:"danger",onClick:()=>{return r=e.id,void t((0,s.dt)({id:r}));var r},children:"Remove From Cart"})})]},e.id)))})]}),(0,l.jsx)("div",{className:"total-price-container  ",children:(0,l.jsxs)("h3",{children:["Total Price: $",r]})})]})})}},4140:(e,t,r)=>{"use strict";r.d(t,{Am:()=>a,Ay:()=>d});var n=r(5043),i=r(579);const s=["as","disabled"];function a(e){let{tagName:t,disabled:r,href:n,target:i,rel:s,role:a,onClick:o,tabIndex:d=0,type:c}=e;t||(t=null!=n||null!=i||null!=s?"a":"button");const l={tagName:t};if("button"===t)return[{type:c||"button",disabled:r},l];const u=e=>{(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===t&&(n||(n="#"),r&&(n=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:r?void 0:d,href:n,target:"a"===t?i:void 0,"aria-disabled":r||void 0,rel:"a"===t?s:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},l]}const o=n.forwardRef(((e,t)=>{let{as:r,disabled:n}=e,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,s);const[d,{tagName:c}]=a(Object.assign({tagName:r,disabled:n},o));return(0,i.jsx)(c,Object.assign({},o,d,{ref:t}))}));o.displayName="Button";const d=o},4282:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(8139),i=r.n(n),s=r(5043),a=r(4140),o=r(7852),d=r(579);const c=s.forwardRef(((e,t)=>{let{as:r,bsPrefix:n,variant:s="primary",size:c,active:l=!1,disabled:u=!1,className:x,...h}=e;const p=(0,o.oU)(n,"btn"),[f,{tagName:v}]=(0,a.Am)({tagName:r,disabled:u,...h}),b=v;return(0,d.jsx)(b,{...f,...h,ref:t,disabled:u,className:i()(x,p,l&&"active",s&&`${p}-${s}`,c&&`${p}-${c}`,h.href&&u&&"disabled")})}));c.displayName="Button";const l=c},7852:(e,t,r)=>{"use strict";r.d(t,{Jm:()=>u,gy:()=>l,oU:()=>c});var n=r(5043);r(579);const i=["xxl","xl","lg","md","sm","xs"],s="xs",a=n.createContext({prefixes:{},breakpoints:i,minBreakpoint:s}),{Consumer:o,Provider:d}=a;function c(e,t){const{prefixes:r}=(0,n.useContext)(a);return e||r[t]||t}function l(){const{breakpoints:e}=(0,n.useContext)(a);return e}function u(){const{minBreakpoint:e}=(0,n.useContext)(a);return e}},8139:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,s(r)))}return e}function s(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=959.ad923e9f.chunk.js.map