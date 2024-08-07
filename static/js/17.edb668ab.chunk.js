/*! For license information please see 17.edb668ab.chunk.js.LICENSE.txt */
(self.webpackChunklab3=self.webpackChunklab3||[]).push([[17],{7017:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>D});var s=a(5043),r=a(4282),n=a(8139),o=a.n(n),l=a(5173),i=a.n(l),c=a(579);const d={type:i().string,tooltip:i().bool,as:i().elementType},m=s.forwardRef(((e,t)=>{let{as:a="div",className:s,type:r="valid",tooltip:n=!1,...l}=e;return(0,c.jsx)(a,{...l,ref:t,className:o()(s,`${r}-${n?"tooltip":"feedback"}`)})}));m.displayName="Feedback",m.propTypes=d;const u=m,f=s.createContext({});var p=a(7852);const b=s.forwardRef(((e,t)=>{let{id:a,bsPrefix:r,className:n,type:l="checkbox",isValid:i=!1,isInvalid:d=!1,as:m="input",...u}=e;const{controlId:b}=(0,s.useContext)(f);return r=(0,p.oU)(r,"form-check-input"),(0,c.jsx)(m,{...u,ref:t,type:l,id:a||b,className:o()(n,r,i&&"is-valid",d&&"is-invalid")})}));b.displayName="FormCheckInput";const x=b,y=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,htmlFor:n,...l}=e;const{controlId:i}=(0,s.useContext)(f);return a=(0,p.oU)(a,"form-check-label"),(0,c.jsx)("label",{...l,ref:t,htmlFor:n||i,className:o()(r,a)})}));y.displayName="FormCheckLabel";const h=y;const v=s.forwardRef(((e,t)=>{let{id:a,bsPrefix:r,bsSwitchPrefix:n,inline:l=!1,reverse:i=!1,disabled:d=!1,isValid:m=!1,isInvalid:b=!1,feedbackTooltip:y=!1,feedback:v,feedbackType:N,className:g,style:w,title:j="",type:I="checkbox",label:P,children:$,as:k="input",...C}=e;r=(0,p.oU)(r,"form-check"),n=(0,p.oU)(n,"form-switch");const{controlId:F}=(0,s.useContext)(f),R=(0,s.useMemo)((()=>({controlId:a||F})),[F,a]),O=!$&&null!=P&&!1!==P||function(e,t){return s.Children.toArray(e).some((e=>s.isValidElement(e)&&e.type===t))}($,h),S=(0,c.jsx)(x,{...C,type:"switch"===I?"checkbox":I,ref:t,isValid:m,isInvalid:b,disabled:d,as:k});return(0,c.jsx)(f.Provider,{value:R,children:(0,c.jsx)("div",{style:w,className:o()(g,O&&r,l&&`${r}-inline`,i&&`${r}-reverse`,"switch"===I&&n),children:$||(0,c.jsxs)(c.Fragment,{children:[S,O&&(0,c.jsx)(h,{title:j,children:P}),v&&(0,c.jsx)(u,{type:N,tooltip:y,children:v})]})})})}));v.displayName="FormCheck";const N=Object.assign(v,{Input:x,Label:h});a(6440);const g=s.forwardRef(((e,t)=>{let{bsPrefix:a,type:r,size:n,htmlSize:l,id:i,className:d,isValid:m=!1,isInvalid:u=!1,plaintext:b,readOnly:x,as:y="input",...h}=e;const{controlId:v}=(0,s.useContext)(f);return a=(0,p.oU)(a,"form-control"),(0,c.jsx)(y,{...h,type:r,size:l,ref:t,readOnly:x,id:i||v,className:o()(d,b?`${a}-plaintext`:a,n&&`${a}-${n}`,"color"===r&&`${a}-color`,m&&"is-valid",u&&"is-invalid")})}));g.displayName="FormControl";const w=Object.assign(g,{Feedback:u}),j=s.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:r="div",...n}=e;return s=(0,p.oU)(s,"form-floating"),(0,c.jsx)(r,{ref:t,className:o()(a,s),...n})}));j.displayName="FormFloating";const I=j,P=s.forwardRef(((e,t)=>{let{controlId:a,as:r="div",...n}=e;const o=(0,s.useMemo)((()=>({controlId:a})),[a]);return(0,c.jsx)(f.Provider,{value:o,children:(0,c.jsx)(r,{...n,ref:t})})}));P.displayName="FormGroup";const $=P;var k=a(8602);const C=s.forwardRef(((e,t)=>{let{as:a="label",bsPrefix:r,column:n=!1,visuallyHidden:l=!1,className:i,htmlFor:d,...m}=e;const{controlId:u}=(0,s.useContext)(f);r=(0,p.oU)(r,"form-label");let b="col-form-label";"string"===typeof n&&(b=`${b} ${b}-${n}`);const x=o()(i,r,l&&"visually-hidden",n&&b);return d=d||u,n?(0,c.jsx)(k.A,{ref:t,as:"label",className:x,htmlFor:d,...m}):(0,c.jsx)(a,{ref:t,className:x,htmlFor:d,...m})}));C.displayName="FormLabel";const F=C,R=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,id:n,...l}=e;const{controlId:i}=(0,s.useContext)(f);return a=(0,p.oU)(a,"form-range"),(0,c.jsx)("input",{...l,type:"range",ref:t,className:o()(r,a),id:n||i})}));R.displayName="FormRange";const O=R,S=s.forwardRef(((e,t)=>{let{bsPrefix:a,size:r,htmlSize:n,className:l,isValid:i=!1,isInvalid:d=!1,id:m,...u}=e;const{controlId:b}=(0,s.useContext)(f);return a=(0,p.oU)(a,"form-select"),(0,c.jsx)("select",{...u,size:n,ref:t,className:o()(l,a,r&&`${a}-${r}`,i&&"is-valid",d&&"is-invalid"),id:m||b})}));S.displayName="FormSelect";const T=S,U=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:r="small",muted:n,...l}=e;return a=(0,p.oU)(a,"form-text"),(0,c.jsx)(r,{...l,ref:t,className:o()(s,a,n&&"text-muted")})}));U.displayName="FormText";const A=U,L=s.forwardRef(((e,t)=>(0,c.jsx)(N,{...e,ref:t,type:"switch"})));L.displayName="Switch";const _=Object.assign(L,{Input:N.Input,Label:N.Label}),z=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,children:r,controlId:n,label:l,...i}=e;return a=(0,p.oU)(a,"form-floating"),(0,c.jsxs)($,{ref:t,className:o()(s,a),controlId:n,...i,children:[r,(0,c.jsx)("label",{htmlFor:n,children:l})]})}));z.displayName="FloatingLabel";const E=z,M={_ref:i().any,validated:i().bool,as:i().elementType},V=s.forwardRef(((e,t)=>{let{className:a,validated:s,as:r="form",...n}=e;return(0,c.jsx)(r,{...n,ref:t,className:o()(a,s&&"was-validated")})}));V.displayName="Form",V.propTypes=M;const B=Object.assign(V,{Group:$,Control:w,Floating:I,Check:N,Switch:_,Label:F,Text:A,Range:O,Select:T,FloatingLabel:E});const D=function(){const[e,t]=(0,s.useState)({name:"",email:"",userName:"",password:"",confirmPassword:""}),[a,n]=(0,s.useState)({name:!1,email:!1,userName:!1,password:!1,confirmPassword:!1}),o=[{name:"name",type:"text",placeholder:"Name",validate:e=>/^[A-Za-z\s]+$/.test(e)&&e.length>=2,errorMessage:"Invalid Name. It must be at least 2 characters long."},{name:"email",type:"email",placeholder:"Enter email",validate:e=>e.length>7&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),errorMessage:"Invalid email."},{name:"userName",type:"text",placeholder:"Username",validate:e=>e.length>=5,errorMessage:"Invalid Username. It must be at least 5 characters long."},{name:"password",type:"password",placeholder:"Password",validate:e=>e.length>7&&/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(e),errorMessage:"Invalid Password. It must be at least 8 characters long and include a number and a special character."},{name:"confirmPassword",type:"password",placeholder:"Confirm Password",validate:t=>t===e.password,errorMessage:"Passwords do not match."}],l=(e,t)=>{const a=o.find((t=>t.name===e));return!a||a.validate(t)},i=e=>{const{name:a,value:s}=e.target;t((e=>({...e,[a]:s}))),n((e=>({...e,[a]:!l(a,s)})))};return(0,c.jsxs)(B,{className:"container w-50 p-5",onSubmit:t=>{t.preventDefault();const a=o.reduce(((t,a)=>{let{name:s}=a;return t[s]=!l(s,e[s]),t}),{});n(a),Object.values(a).includes(!0)?console.log("Form failed to submit"):console.log("Form submitted successfully")},children:[o.map((t=>{let{name:s,type:r,placeholder:n,errorMessage:o}=t;return(0,c.jsxs)(B.Group,{className:"mb-3",controlId:`formBasic${s}`,children:[(0,c.jsx)(B.Label,{className:"w-100 text-start",children:n}),(0,c.jsx)(B.Control,{type:r,name:s,placeholder:n,value:e[s],onChange:i,isInvalid:a[s]}),a[s]&&(0,c.jsx)(B.Text,{className:"text-danger text-start w-100 d-block",children:o})]},s)})),(0,c.jsx)(r.A,{variant:"primary",type:"submit",children:"Submit"})]})}},4140:(e,t,a)=>{"use strict";a.d(t,{Am:()=>o,Ay:()=>i});var s=a(5043),r=a(579);const n=["as","disabled"];function o(e){let{tagName:t,disabled:a,href:s,target:r,rel:n,role:o,onClick:l,tabIndex:i=0,type:c}=e;t||(t=null!=s||null!=r||null!=n?"a":"button");const d={tagName:t};if("button"===t)return[{type:c||"button",disabled:a},d];const m=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),a?e.stopPropagation():null==l||l(e)};return"a"===t&&(s||(s="#"),a&&(s=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:a?void 0:i,href:s,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?n:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const l=s.forwardRef(((e,t)=>{let{as:a,disabled:s}=e,l=function(e,t){if(null==e)return{};var a={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;a[s]=e[s]}return a}(e,n);const[i,{tagName:c}]=o(Object.assign({tagName:a,disabled:s},l));return(0,r.jsx)(c,Object.assign({},l,i,{ref:t}))}));l.displayName="Button";const i=l},1497:(e,t,a)=>{"use strict";var s=a(3218);function r(){}function n(){}n.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,n,o){if(o!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:r};return a.PropTypes=a,a}},5173:(e,t,a)=>{e.exports=a(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4282:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var s=a(8139),r=a.n(s),n=a(5043),o=a(4140),l=a(7852),i=a(579);const c=n.forwardRef(((e,t)=>{let{as:a,bsPrefix:s,variant:n="primary",size:c,active:d=!1,disabled:m=!1,className:u,...f}=e;const p=(0,l.oU)(s,"btn"),[b,{tagName:x}]=(0,o.Am)({tagName:a,disabled:m,...f}),y=x;return(0,i.jsx)(y,{...b,...f,ref:t,disabled:m,className:r()(u,p,d&&"active",n&&`${p}-${n}`,c&&`${p}-${c}`,f.href&&m&&"disabled")})}));c.displayName="Button";const d=c},8602:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var s=a(8139),r=a.n(s),n=a(5043),o=a(7852),l=a(579);const i=n.forwardRef(((e,t)=>{const[{className:a,...s},{as:n="div",bsPrefix:i,spans:c}]=function(e){let{as:t,bsPrefix:a,className:s,...n}=e;a=(0,o.oU)(a,"col");const l=(0,o.gy)(),i=(0,o.Jm)(),c=[],d=[];return l.forEach((e=>{const t=n[e];let s,r,o;delete n[e],"object"===typeof t&&null!=t?({span:s,offset:r,order:o}=t):s=t;const l=e!==i?`-${e}`:"";s&&c.push(!0===s?`${a}${l}`:`${a}${l}-${s}`),null!=o&&d.push(`order${l}-${o}`),null!=r&&d.push(`offset${l}-${r}`)})),[{...n,className:r()(s,...c,...d)},{as:t,bsPrefix:a,spans:c}]}(e);return(0,l.jsx)(n,{...s,ref:t,className:r()(a,!c.length&&i)})}));i.displayName="Col";const c=i},7852:(e,t,a)=>{"use strict";a.d(t,{Jm:()=>m,gy:()=>d,oU:()=>c});var s=a(5043);a(579);const r=["xxl","xl","lg","md","sm","xs"],n="xs",o=s.createContext({prefixes:{},breakpoints:r,minBreakpoint:n}),{Consumer:l,Provider:i}=o;function c(e,t){const{prefixes:a}=(0,s.useContext)(o);return e||a[t]||t}function d(){const{breakpoints:e}=(0,s.useContext)(o);return e}function m(){const{minBreakpoint:e}=(0,s.useContext)(o);return e}},6440:e=>{"use strict";var t=function(){};e.exports=t},8139:(e,t)=>{var a;!function(){"use strict";var s={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=o(e,n(a)))}return e}function n(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)s.call(e,a)&&e[a]&&(t=o(t,a));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);
//# sourceMappingURL=17.edb668ab.chunk.js.map