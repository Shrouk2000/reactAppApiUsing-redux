/*! For license information please see 494.a2612a9e.chunk.js.LICENSE.txt */
(self.webpackChunklab3=self.webpackChunklab3||[]).push([[494],{1494:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z});var s=r(5043),a=r(6213),n=r(3216),o=r(4282),i=r(8139),c=r.n(i),l=r(7852),d=r(579);const f=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:s,as:a="div",...n}=e;return s=(0,l.oU)(s,"card-body"),(0,d.jsx)(a,{ref:t,className:c()(r,s),...n})}));f.displayName="CardBody";const u=f,m=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:s,as:a="div",...n}=e;return s=(0,l.oU)(s,"card-footer"),(0,d.jsx)(a,{ref:t,className:c()(r,s),...n})}));m.displayName="CardFooter";const p=m;var x=r(1778);const b=s.forwardRef(((e,t)=>{let{bsPrefix:r,className:a,as:n="div",...o}=e;const i=(0,l.oU)(r,"card-header"),f=(0,s.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,d.jsx)(x.A.Provider,{value:f,children:(0,d.jsx)(n,{ref:t,...o,className:c()(a,i)})})}));b.displayName="CardHeader";const N=b,y=s.forwardRef(((e,t)=>{let{bsPrefix:r,className:s,variant:a,as:n="img",...o}=e;const i=(0,l.oU)(r,"card-img");return(0,d.jsx)(n,{ref:t,className:c()(a?`${i}-${a}`:i,s),...o})}));y.displayName="CardImg";const v=y,g=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:s,as:a="div",...n}=e;return s=(0,l.oU)(s,"card-img-overlay"),(0,d.jsx)(a,{ref:t,className:c()(r,s),...n})}));g.displayName="CardImgOverlay";const h=g,j=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:s,as:a="a",...n}=e;return s=(0,l.oU)(s,"card-link"),(0,d.jsx)(a,{ref:t,className:c()(r,s),...n})}));j.displayName="CardLink";const w=j;var C=r(4488);const $=(0,C.A)("h6"),P=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:s,as:a=$,...n}=e;return s=(0,l.oU)(s,"card-subtitle"),(0,d.jsx)(a,{ref:t,className:c()(r,s),...n})}));P.displayName="CardSubtitle";const A=P,k=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:s,as:a="p",...n}=e;return s=(0,l.oU)(s,"card-text"),(0,d.jsx)(a,{ref:t,className:c()(r,s),...n})}));k.displayName="CardText";const R=k,U=(0,C.A)("h5"),S=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:s,as:a=U,...n}=e;return s=(0,l.oU)(s,"card-title"),(0,d.jsx)(a,{ref:t,className:c()(r,s),...n})}));S.displayName="CardTitle";const O=S,B=s.forwardRef(((e,t)=>{let{bsPrefix:r,className:s,bg:a,text:n,border:o,body:i=!1,children:f,as:m="div",...p}=e;const x=(0,l.oU)(r,"card");return(0,d.jsx)(m,{ref:t,...p,className:c()(s,x,a&&`bg-${a}`,n&&`text-${n}`,o&&`border-${o}`),children:i?(0,d.jsx)(u,{children:f}):f})}));B.displayName="Card";const T=Object.assign(B,{Img:v,Title:O,Subtitle:A,Body:u,Link:w,Text:R,Header:N,Footer:p,ImgOverlay:h});var I=r(3003),E=r(5587);const D=function(e){let{id:t,title:r,description:s,imgSrc:a,price:i}=e;const c=(0,n.Zp)(),l=(0,I.wA)(),f=(0,I.d4)((e=>e.cart.items)),u=f.some((e=>e.id===t));return(0,d.jsxs)(T,{style:{width:"20rem",cursor:"pointer",margin:"10px",marginTop:20,border:"none"},onClick:()=>{c(`/product/${t}`)},className:"mb-4",children:[(0,d.jsx)(T.Img,{style:{width:200,height:200,margin:"auto"},variant:"top",src:a,alt:r}),(0,d.jsxs)(T.Body,{children:[(0,d.jsx)(T.Title,{style:{height:"60px"},children:r}),(0,d.jsx)(T.Text,{style:{overflow:"hidden",height:"50px"},children:s}),(0,d.jsx)(o.A,{variant:"primary",onClick:e=>{e.stopPropagation(),c(`/product/${t}`)},children:"View Details"}),u?(0,d.jsx)(o.A,{variant:"danger",className:"m-2",onClick:e=>{e.stopPropagation(),f.some((e=>e.id===t))&&l((0,E.dt)({id:t}))},children:"Remove"}):(0,d.jsx)(o.A,{variant:"success",className:"m-2",onClick:e=>{e.stopPropagation(),l((0,E.bE)({id:t,title:r,description:s,imgSrc:a,price:i}))},children:"Add To Cart"})]})]})};var H=r(3519);const J=s.forwardRef(((e,t)=>{let{bsPrefix:r,className:s,as:a="div",...n}=e;const o=(0,l.oU)(r,"row"),i=(0,l.gy)(),f=(0,l.Jm)(),u=`${o}-cols`,m=[];return i.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const s=e!==f?`-${e}`:"";null!=r&&m.push(`${u}${s}-${r}`)})),(0,d.jsx)(a,{ref:t,...n,className:c()(s,o,...m)})}));J.displayName="Row";const L=J;var F=r(8602);const z=function(){const[e,t]=(0,s.useState)([]),[r,n]=(0,s.useState)(!0),[o,i]=(0,s.useState)(null);return(0,s.useEffect)((()=>{(async()=>{try{const e=await a.A.get("https://fakestoreapi.com/products");t(e.data)}catch(e){i(e.message)}finally{n(!1)}})()}),[]),r?(0,d.jsx)("p",{children:"Loading..."}):o?(0,d.jsxs)("p",{children:["Error: ",o]}):0===e.length?(0,d.jsx)("p",{children:"No products found"}):(0,d.jsx)(H.A,{children:(0,d.jsx)(L,{className:"justify-content-center",children:e.map((e=>(0,d.jsx)(F.A,{md:4,lg:3,className:"d-flex justify-content-center mb-4",children:(0,d.jsx)(D,{id:e.id,title:e.title,description:e.description,imgSrc:e.image,price:e.price})},e.id)))})})}},4140:(e,t,r)=>{"use strict";r.d(t,{Am:()=>o,Ay:()=>c});var s=r(5043),a=r(579);const n=["as","disabled"];function o(e){let{tagName:t,disabled:r,href:s,target:a,rel:n,role:o,onClick:i,tabIndex:c=0,type:l}=e;t||(t=null!=s||null!=a||null!=n?"a":"button");const d={tagName:t};if("button"===t)return[{type:l||"button",disabled:r},d];const f=e=>{(r||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),r?e.stopPropagation():null==i||i(e)};return"a"===t&&(s||(s="#"),r&&(s=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:r?void 0:c,href:s,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?n:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},d]}const i=s.forwardRef(((e,t)=>{let{as:r,disabled:s}=e,i=function(e,t){if(null==e)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;r[s]=e[s]}return r}(e,n);const[c,{tagName:l}]=o(Object.assign({tagName:r,disabled:s},i));return(0,a.jsx)(l,Object.assign({},i,c,{ref:t}))}));i.displayName="Button";const c=i},4282:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var s=r(8139),a=r.n(s),n=r(5043),o=r(4140),i=r(7852),c=r(579);const l=n.forwardRef(((e,t)=>{let{as:r,bsPrefix:s,variant:n="primary",size:l,active:d=!1,disabled:f=!1,className:u,...m}=e;const p=(0,i.oU)(s,"btn"),[x,{tagName:b}]=(0,o.Am)({tagName:r,disabled:f,...m}),N=b;return(0,c.jsx)(N,{...x,...m,ref:t,disabled:f,className:a()(u,p,d&&"active",n&&`${p}-${n}`,l&&`${p}-${l}`,m.href&&f&&"disabled")})}));l.displayName="Button";const d=l},1778:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});const s=r(5043).createContext(null);s.displayName="CardHeaderContext";const a=s},8602:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var s=r(8139),a=r.n(s),n=r(5043),o=r(7852),i=r(579);const c=n.forwardRef(((e,t)=>{const[{className:r,...s},{as:n="div",bsPrefix:c,spans:l}]=function(e){let{as:t,bsPrefix:r,className:s,...n}=e;r=(0,o.oU)(r,"col");const i=(0,o.gy)(),c=(0,o.Jm)(),l=[],d=[];return i.forEach((e=>{const t=n[e];let s,a,o;delete n[e],"object"===typeof t&&null!=t?({span:s,offset:a,order:o}=t):s=t;const i=e!==c?`-${e}`:"";s&&l.push(!0===s?`${r}${i}`:`${r}${i}-${s}`),null!=o&&d.push(`order${i}-${o}`),null!=a&&d.push(`offset${i}-${a}`)})),[{...n,className:a()(s,...l,...d)},{as:t,bsPrefix:r,spans:l}]}(e);return(0,i.jsx)(n,{...s,ref:t,className:a()(r,!l.length&&c)})}));c.displayName="Col";const l=c},3519:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var s=r(8139),a=r.n(s),n=r(5043),o=r(7852),i=r(579);const c=n.forwardRef(((e,t)=>{let{bsPrefix:r,fluid:s=!1,as:n="div",className:c,...l}=e;const d=(0,o.oU)(r,"container"),f="string"===typeof s?`-${s}`:"-fluid";return(0,i.jsx)(n,{ref:t,...l,className:a()(c,s?`${d}${f}`:d)})}));c.displayName="Container";const l=c},7852:(e,t,r)=>{"use strict";r.d(t,{Jm:()=>f,gy:()=>d,oU:()=>l});var s=r(5043);r(579);const a=["xxl","xl","lg","md","sm","xs"],n="xs",o=s.createContext({prefixes:{},breakpoints:a,minBreakpoint:n}),{Consumer:i,Provider:c}=o;function l(e,t){const{prefixes:r}=(0,s.useContext)(o);return e||r[t]||t}function d(){const{breakpoints:e}=(0,s.useContext)(o);return e}function f(){const{minBreakpoint:e}=(0,s.useContext)(o);return e}},4488:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(5043),a=r(8139),n=r.n(a),o=r(579);const i=e=>s.forwardRef(((t,r)=>(0,o.jsx)("div",{...t,ref:r,className:n()(t.className,e)})))},8139:(e,t)=>{var r;!function(){"use strict";var s={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,n(r)))}return e}function n(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)s.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=494.a2612a9e.chunk.js.map