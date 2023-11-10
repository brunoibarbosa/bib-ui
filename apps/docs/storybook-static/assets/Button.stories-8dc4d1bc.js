import{c as q,s as H,b as h,j as E,F as G,l as J,n as r,C as l}from"./index-7d298888.js";import{_ as I}from"./extends-98964cd2.js";import{r as i}from"./index-1b03fe98.js";import"./index-4b095e7f.js";function K(e,o){typeof e=="function"?e(o):e!=null&&(e.current=o)}function M(...e){return o=>e.forEach(a=>K(a,o))}const R=i.forwardRef((e,o)=>{const{children:a,...c}=e,n=i.Children.toArray(a),d=n.find(Q);if(d){const s=d.props.children,u=n.map(b=>b===d?i.Children.count(s)>1?i.Children.only(null):i.isValidElement(s)?s.props.children:null:b);return i.createElement(x,I({},c,{ref:o}),i.isValidElement(s)?i.cloneElement(s,void 0,u):null)}return i.createElement(x,I({},c,{ref:o}),a)});R.displayName="Slot";const x=i.forwardRef((e,o)=>{const{children:a,...c}=e;return i.isValidElement(a)?i.cloneElement(a,{...X(c,a.props),ref:o?M(o,a.ref):a.ref}):i.Children.count(a)>1?i.Children.only(null):null});x.displayName="SlotClone";const Z=({children:e})=>i.createElement(i.Fragment,null,e);function Q(e){return i.isValidElement(e)&&e.type===Z}function X(e,o){const a={...o};for(const c in o){const n=e[c],d=o[c];/^on[A-Z]/.test(c)?n&&d?a[c]=(...u)=>{d(...u),n(...u)}:n&&(a[c]=n):c==="style"?a[c]={...n,...d}:c==="className"&&(a[c]=[n,d].filter(Boolean).join(" "))}return{...e,...a}}function Y(e,o){return Object.entries(e).filter(([a])=>!o.includes(a)).reduce((a,[c,n])=>Object.assign(Object.assign({},a),{[c]:n}),{})}function oo(e,o){return e.components[o]}const ro=q`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,t=H.span`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border-width: 2px;
  border-color: ${({theme:e})=>e.color("white")};
  border-top-color: transparent !important;
  animation: ${ro} 1s linear infinite;
`;var eo=globalThis&&globalThis.__rest||function(e,o){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&o.indexOf(c)<0&&(a[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(e);n<c.length;n++)o.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]]);return a};const O=i.forwardRef((e,o)=>{const a=Y(e,["fullWidth","shape","size","color","variant"]),{asChild:c,asIcon:n,startIcon:d,endIcon:s,children:u,isLoading:b,disabled:g}=a,w=eo(a,["asChild","asIcon","startIcon","endIcon","children","isLoading","disabled"]),p=c?R:"button",S=!g&&b?h(t,{}):d&&h("div",{children:d});return E(p,Object.assign({disabled:g},w,{ref:o,children:[S,b&&!n||!b?E(G,{children:[h(Z,{children:u}),s&&h("div",{children:s})]}):null]}))});O.displayName="Button";O.__docgenInfo={description:"",methods:[],displayName:"Button"};var co=globalThis&&globalThis.__rest||function(e,o){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&o.indexOf(c)<0&&(a[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(e);n<c.length;n++)o.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]]);return a};const $=e=>`0 0 0 2px ${l(e).alpha(.4).toString()}`,lo=H(O)(e=>{var{theme:o}=e,a=co(e,["theme"]);const c=oo(o,"Button"),n=J.merge(c==null?void 0:c.defaultProps,a),{fullWidth:d,isLoading:s,size:u,shape:b,color:g,asIcon:w,variant:p}=n,S=c!=null&&c.styleOverride?c.styleOverride(n,o):[];return[...r`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      white-space: nowrap;
      font-size: 0.875rem;
      font-weight: 600;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;

      &:focus-visible {
        outline: none;
        box-shadow: ${()=>{switch(g){case"orange":return $(o.color("orange",600));case"red":return $(o.color("red",600));case"green":return $(o.color("green",600));case"violet":return $(o.color("violet",600));case"yellow":return $(o.color("yellow",600));case"blue":return $(o.color("blue",600));case"black":return $(o.color("black",600));case"gray":return $(o.color("gray",600))}}};
      }

      // Disabled
      &:disabled {
        pointer-events: none;
        color: ${o.color("disabled","dark")};
      }

      // Full Width
      ${d&&r`
        width: 100%;
      `}

      // isLoading
  ${s&&r`
        opacity: 60%;
        &:disabled {
          opacity: 100%;
        }
        cursor: default;
        pointer-events: none;
      `}

  // Size
  ${()=>{switch(u){case"small":return r`
              height: 1.5rem;
              padding-left: 0.75rem;
              padding-right: 0.75rem;
              padding-top: 0.375rem;
              padding-bottom: 0.375rem;
            `;case"large":return r`
              height: 2.5rem;
              padding-left: 1.25rem;
              padding-right: 1.25rem;
              padding-top: 0.625rem;
              padding-bottom: 0.625rem;
            `;default:return r`
              height: 2rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            `}}}

  // Shape
  border-radius: ${()=>{switch(b){case"rounded":return"4px";case"circle":return"9999px";default:return 0}}};

      // asIcon & Size
      ${()=>{if(w)switch(u){case"small":return r`
                height: 1.5rem;
                width: 1.5rem;
                padding: 0.5rem;
              `;case"large":return r`
                height: 2.5rem;
                width: 2.5rem;
                padding: 0.625rem;
              `;default:return r`
                height: 2rem;
                width: 2rem;
                padding: 0.5rem;
              `}}}

      // Variant
        ${()=>{switch(p){case"transparent":return r`
              color: ${o.color("black","DEFAULT")};
              &:disabled {
                background-color: ${o.color("disabled","light")};
              }
            `;case"text":return r`
              color: ${o.color("black","DEFAULT")};
              &:disabled {
                background-color: ${o.color("transparent")};
              }
            `;case"link":return r`
              color: ${o.color("black","DEFAULT")};
              &:disabled {
                background-color: ${o.color("transparent")};
              }
              &:hover {
                text-decoration: underline;
              }
            `;case"outline":return r`
              color: ${o.color("black","DEFAULT")};
              border-width: 1px;
              &:disabled {
                border-color: ${o.color("disabled","main")};
                background-color: ${o.color("disabled","light")};
              }
            `;default:return r`
              color: ${o.color("white")};
              &:disabled {
                background-color: ${o.color("disabled","light")};
              }
            `}}}

// Color & Variant
  ${()=>{if(p==="outline")switch(g){case"orange":return r`
                ${t} {
                  border-color: ${o.color("orange",500)};
                }
                color: ${o.color("orange",500)};
                background-color: ${o.color("transparent")};
                border-color: ${o.color("orange",500)};
                &:hover {
                  color: ${o.color("white")};
                  background-color: ${o.color("orange",500)};
                }
                &:active {
                  border-color: ${o.color("orange",600)};
                  background-color: ${o.color("orange",600)};
                }
              `;case"red":return r`
                ${t} {
                  border-color: ${o.color("red",500)};
                }
                color: ${o.color("red",500)};
                background-color: ${o.color("transparent")};
                border-color: ${o.color("red",500)};
                &:hover {
                  color: ${o.color("white")};
                  background-color: ${o.color("red",500)};
                }
                &:active {
                  border-color: ${o.color("red",600)};
                  background-color: ${o.color("red",600)};
                }
              `;case"yellow":return r`
                ${t} {
                  border-color: ${o.color("yellow",500)};
                }
                color: ${o.color("yellow",500)};
                background-color: ${o.color("transparent")};
                border-color: ${o.color("yellow",500)};
                &:hover {
                  color: ${o.color("white")};
                  background-color: ${o.color("yellow",500)};
                }
                &:active {
                  border-color: ${o.color("yellow",600)};
                  background-color: ${o.color("yellow",600)};
                }
              `;case"green":return r`
                ${t} {
                  border-color: ${o.color("green",500)};
                }
                color: ${o.color("green",500)};
                background-color: ${o.color("transparent")};
                border-color: ${o.color("green",500)};
                &:hover {
                  color: ${o.color("white")};
                  background-color: ${o.color("green",500)};
                }
                &:active {
                  border-color: ${o.color("green",600)};
                  background-color: ${o.color("green",600)};
                }
              `;case"violet":return r`
                ${t} {
                  border-color: ${o.color("violet",500)};
                }
                color: ${o.color("violet",500)};
                background-color: ${o.color("transparent")};
                border-color: ${o.color("violet",500)};
                &:hover {
                  color: ${o.color("white")};
                  background-color: ${o.color("violet",500)};
                }
                &:active {
                  border-color: ${o.color("violet",600)};
                  background-color: ${o.color("violet",600)};
                }
              `;case"blue":return r`
                ${t} {
                  border-color: ${o.color("blue",500)};
                }
                color: ${o.color("blue",500)};
                background-color: ${o.color("transparent")};
                border-color: ${o.color("blue",500)};
                &:hover {
                  color: ${o.color("white")};
                  background-color: ${o.color("blue",500)};
                }
                &:active {
                  border-color: ${o.color("blue",600)};
                  background-color: ${o.color("blue",600)};
                }
              `;case"gray":return r`
                ${t} {
                  border-color: ${o.color("gray",500)};
                }
                color: ${o.color("gray",500)};
                background-color: ${o.color("transparent")};
                border-color: ${o.color("gray",500)};
                &:hover {
                  color: ${o.color("white")};
                  background-color: ${o.color("gray",500)};
                }
                &:active {
                  border-color: ${o.color("gray",600)};
                  background-color: ${o.color("gray",600)};
                }
              `;case"black":return r`
                ${t} {
                  border-color: ${o.color("black",500)};
                }
                color: ${o.color("black",500)};
                background-color: ${o.color("transparent")};
                border-color: ${o.color("black",500)};
                &:hover {
                  color: ${o.color("white")};
                  background-color: ${o.color("black",500)};
                }
                &:active {
                  border-color: ${o.color("black",600)};
                  background-color: ${o.color("black",600)};
                }
              `}else if(p==="link")switch(g){case"orange":return r`
                ${t} {
                  border-color: ${o.color("orange",600)};
                }
                color: ${o.color("orange",600)};
                background-color: ${o.color("transparent")};
                &:active {
                  color: ${o.color("orange",700)};
                }
              `;case"red":return r`
                ${t} {
                  border-color: ${o.color("red",600)};
                }
                color: ${o.color("red",600)};
                background-color: ${o.color("transparent")};
                &:active {
                  color: ${o.color("red",700)};
                }
              `;case"yellow":return r`
                ${t} {
                  border-color: ${o.color("yellow",600)};
                }
                color: ${o.color("yellow",600)};
                background-color: ${o.color("transparent")};
                &:active {
                  color: ${o.color("yellow",700)};
                }
              `;case"green":return r`
                ${t} {
                  border-color: ${o.color("green",600)};
                }
                color: ${o.color("green",600)};
                background-color: ${o.color("transparent")};
                &:active {
                  color: ${o.color("green",700)};
                }
              `;case"violet":return r`
                ${t} {
                  border-color: ${o.color("violet",600)};
                }
                color: ${o.color("violet",600)};
                background-color: ${o.color("transparent")};
                &:active {
                  color: ${o.color("violet",700)};
                }
              `;case"blue":return r`
                ${t} {
                  border-color: ${o.color("blue",600)};
                }
                color: ${o.color("blue",600)};
                background-color: ${o.color("transparent")};
                &:active {
                  color: ${o.color("blue",700)};
                }
              `;case"gray":return r`
                ${t} {
                  border-color: ${o.color("gray",600)};
                }
                color: ${o.color("gray",600)};
                background-color: ${o.color("transparent")};
                &:active {
                  color: ${o.color("gray",700)};
                }
              `;case"black":return r`
                ${t} {
                  border-color: ${o.color("black",600)};
                }
                color: ${o.color("black",800)};
                background-color: ${o.color("transparent")};
                &:active {
                  color: ${o.color("black",950)};
                }
              `}else if(p==="text")switch(g){case"orange":return r`
                ${t} {
                  border-color: ${o.color("orange",600)};
                }
                color: ${o.color("orange",600)};
                background-color: ${o.color("transparent")};
                &:hover {
                  background-color: ${l(o.color("orange",800)).alpha(.2).toString()};
                }
                &:active {
                  background-color: ${l(o.color("orange",800)).alpha(.3).toString()};
                }
              `;case"red":return r`
                ${t} {
                  border-color: ${o.color("red",600)};
                }
                color: ${o.color("red",600)};
                background-color: ${o.color("transparent")};
                &:hover {
                  background-color: ${l(o.color("red",800)).alpha(.2).toString()};
                }
                &:active {
                  background-color: ${l(o.color("red",800)).alpha(.3).toString()};
                }
              `;case"yellow":return r`
                ${t} {
                  border-color: ${o.color("yellow",600)};
                }
                color: ${o.color("yellow",600)};
                background-color: ${o.color("transparent")};
                &:hover {
                  background-color: ${l(o.color("yellow",600)).alpha(.2).toString()};
                }
                &:active {
                  background-color: ${l(o.color("yellow",600)).alpha(.3).toString()};
                }
              `;case"green":return r`
                ${t} {
                  border-color: ${o.color("green",600)};
                }
                color: ${o.color("green",600)};
                background-color: ${o.color("transparent")};
                &:hover {
                  background-color: ${l(o.color("green",800)).alpha(.2).toString()};
                }
                &:active {
                  background-color: ${l(o.color("green",800)).alpha(.3).toString()};
                }
              `;case"violet":return r`
                ${t} {
                  border-color: ${o.color("violet",600)};
                }
                color: ${o.color("violet",600)};
                background-color: ${o.color("transparent")};
                &:hover {
                  background-color: ${l(o.color("violet",800)).alpha(.2).toString()};
                }
                &:active {
                  background-color: ${l(o.color("violet",800)).alpha(.3).toString()};
                }
              `;case"blue":return r`
                ${t} {
                  border-color: ${o.color("blue",600)};
                }
                color: ${o.color("blue",600)};
                background-color: ${o.color("transparent")};
                &:hover {
                  background-color: ${l(o.color("blue",800)).alpha(.2).toString()};
                }
                &:active {
                  background-color: ${l(o.color("blue",800)).alpha(.3).toString()};
                }
              `;case"gray":return r`
                ${t} {
                  border-color: ${o.color("gray",600)};
                }
                color: ${o.color("gray",600)};
                background-color: ${o.color("transparent")};
                &:hover {
                  background-color: ${l(o.color("gray",800)).alpha(.2).toString()};
                }
                &:active {
                  background-color: ${l(o.color("gray",800)).alpha(.3).toString()};
                }
              `;case"black":return r`
                ${t} {
                  border-color: ${o.color("black",600)};
                }
                color: ${o.color("black",600)};
                background-color: ${o.color("transparent")};
                &:hover {
                  background-color: ${l(o.color("black",800)).alpha(.2).toString()};
                }
                &:active {
                  background-color: ${l(o.color("black",800)).alpha(.3).toString()};
                }
              `}else if(p==="transparent")switch(g){case"orange":return r`
                ${t} {
                  border-color: ${o.color("orange",600)};
                }
                color: ${o.color("orange",600)};
                background-color: ${l(o.color("orange",800)).alpha(.15).toString()};
                &:hover {
                  background-color: ${l(o.color("orange",800)).alpha(.3).toString()};
                }
                &:active {
                  background-color: ${l(o.color("orange",800)).alpha(.4).toString()};
                }
              `;case"red":return r`
                ${t} {
                  border-color: ${o.color("red",600)};
                }
                color: ${o.color("red",600)};
                background-color: ${l(o.color("red",800)).alpha(.15).toString()};
                &:hover {
                  background-color: ${l(o.color("red",800)).alpha(.3).toString()};
                }
                &:active {
                  background-color: ${l(o.color("red",800)).alpha(.4).toString()};
                }
              `;case"yellow":return r`
                ${t} {
                  border-color: ${o.color("yellow",600)};
                }
                color: ${o.color("yellow",600)};
                background-color: ${l(o.color("yellow",800)).alpha(.15).toString()};
                &:hover {
                  background-color: ${l(o.color("yellow",800)).alpha(.3).toString()};
                }
                &:active {
                  background-color: ${l(o.color("yellow",800)).alpha(.4).toString()};
                }
              `;case"green":return r`
                ${t} {
                  border-color: ${o.color("green",600)};
                }
                color: ${o.color("green",600)};
                background-color: ${l(o.color("green",800)).alpha(.15).toString()};
                &:hover {
                  background-color: ${l(o.color("green",800)).alpha(.3).toString()};
                }
                &:active {
                  background-color: ${l(o.color("green",800)).alpha(.4).toString()};
                }
              `;case"violet":return r`
                ${t} {
                  border-color: ${o.color("violet",600)};
                }
                color: ${o.color("violet",600)};
                background-color: ${l(o.color("violet",800)).alpha(.15).toString()};
                &:hover {
                  background-color: ${l(o.color("violet",800)).alpha(.3).toString()};
                }
                &:active {
                  background-color: ${l(o.color("violet",800)).alpha(.4).toString()};
                }
              `;case"blue":return r`
                ${t} {
                  border-color: ${o.color("blue",600)};
                }
                color: ${o.color("blue",600)};
                background-color: ${l(o.color("blue",800)).alpha(.15).toString()};
                &:hover {
                  background-color: ${l(o.color("blue",800)).alpha(.3).toString()};
                }
                &:active {
                  background-color: ${l(o.color("blue",800)).alpha(.4).toString()};
                }
              `;case"gray":return r`
                ${t} {
                  border-color: ${o.color("gray",600)};
                }
                color: ${o.color("gray",600)};
                background-color: ${l(o.color("gray",800)).alpha(.15).toString()};
                &:hover {
                  background-color: ${l(o.color("gray",800)).alpha(.3).toString()};
                }
                &:active {
                  background-color: ${l(o.color("gray",800)).alpha(.4).toString()};
                }
              `;case"black":return r`
                ${t} {
                  border-color: ${o.color("black",600)};
                }
                color: ${o.color("black",600)};
                background-color: ${l(o.color("black",800)).alpha(.15).toString()};
                &:hover {
                  background-color: ${l(o.color("black",800)).alpha(.3).toString()};
                }
                &:active {
                  background-color: ${l(o.color("black",800)).alpha(.4).toString()};
                }
              `}else switch(g){case"orange":return r`
                background-color: ${o.color("orange",500)};
                color: ${o.color("white")};
                &:hover {
                  background-color: ${o.color("orange",600)};
                }
                &:active {
                  background-color: ${o.color("orange",700)};
                }
              `;case"red":return r`
                background-color: ${o.color("red",500)};
                color: ${o.color("white")};
                &:hover {
                  background-color: ${o.color("red",600)};
                }
                &:active {
                  background-color: ${o.color("red",700)};
                }
              `;case"yellow":return r`
                background-color: ${o.color("yellow",500)};
                color: ${o.color("white")};
                &:hover {
                  background-color: ${o.color("yellow",600)};
                }
                &:active {
                  background-color: ${o.color("yellow",700)};
                }
              `;case"green":return r`
                background-color: ${o.color("green",600)};
                color: ${o.color("white")};
                &:hover {
                  background-color: ${o.color("green",700)};
                }
                &:active {
                  background-color: ${o.color("green",800)};
                }
              `;case"violet":return r`
                background-color: ${o.color("violet",500)};
                color: ${o.color("white")};
                &:hover {
                  background-color: ${o.color("violet",600)};
                }
                &:active {
                  background-color: ${o.color("violet",700)};
                }
              `;case"blue":return r`
                background-color: ${o.color("blue",600)};
                color: ${o.color("white")};
                &:hover {
                  background-color: ${o.color("blue",700)};
                }
                &:active {
                  background-color: ${o.color("blue",800)};
                }
              `;case"gray":return r`
                background-color: ${o.color("gray",600)};
                color: ${o.color("white")};
                &:hover {
                  background-color: ${o.color("gray",700)};
                }
                &:active {
                  background-color: ${o.color("gray",800)};
                }
              `;case"black":return r`
                background-color: ${o.color("black",800)};
                color: ${o.color("white")};
                &:hover {
                  background-color: ${o.color("black",900)};
                }
                &:active {
                  background-color: ${o.color("black",950)};
                }
              `}}}
    `,...S]}),so={title:"Components/Button",component:lo,tags:["autodocs"],args:{variant:"default",color:"orange",shape:"default",size:"default",asIcon:!1,disabled:!1,fullWidth:!1,isLoading:!1,startIcon:"",endIcon:"",children:"Button"},argTypes:{variant:{control:{type:"radio"},options:["default","transparent","text","link","outline"]},color:{control:{type:"radio"},options:["orange","red","yellow","green","violet","blue","gray","black"]},size:{control:{type:"radio"},options:["small","default","large"]},shape:{control:{type:"radio"},options:["default","rounded","circle"]},disabled:{defaultValue:!1},asIcon:{defaultValue:!1},fullWidth:{defaultValue:!1},isLoading:{defaultValue:!1},startIcon:{type:"string"},endIcon:{type:"string"},asChild:{table:{disable:!0}}}},k={args:{variant:"default"}},v={args:{variant:"transparent"}},f={args:{variant:"text"}},m={args:{variant:"link"}},y={args:{variant:"outline"}};var j,C,T;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(T=(C=k.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var L,_,P;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "transparent"
  }
}`,...(P=(_=v.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var V,z,B;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "text"
  }
}`,...(B=(z=f.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var F,A,D;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "link"
  }
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var N,U,W;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(W=(U=y.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const uo=["Default","Transparent","Text","Link","Outline"];export{k as Default,m as Link,y as Outline,f as Text,v as Transparent,uo as __namedExportsOrder,so as default};
//# sourceMappingURL=Button.stories-8dc4d1bc.js.map
