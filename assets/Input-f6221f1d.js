import{s as r}from"./app-ec54cee3.js";import{c as B,r as t,b as $,M as u,p as R,U as S,V as s,Q as a,N as o,t as y,z as i,_ as g}from"./framework-6b3c435d.js";const T={class:"row"},z={class:"row"},M={class:"row"},O={class:"row"},Q={class:"row"},j={class:"row"},q={class:"row"},A={class:"row"},D=B({__name:"Input",setup(E){const m=t(""),c=t(""),v=t(""),f=t(""),V=t(""),_=t(""),w=t(""),x=t(""),b=$([{label:"Restaurant",value:"1"},{label:"Order No.",value:"2"},{label:"Tel",value:"3"}]),d=t(),C=()=>{d.value.focus()},k=U=>{d.value.handle(U)};return(U,l)=>{const n=u("Input",!0),p=u("el-button"),I=u("Select"),N=u("Card");return R(),S(N,null,{default:s(()=>[a("div",T,[o(n,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value=e),ref_key:"inputRef",ref:d},null,8,["modelValue"])]),a("div",z,[o(p,{type:"primary",onClick:C},{default:s(()=>[y("点击获得焦点")]),_:1}),o(p,{type:"primary",onClick:l[1]||(l[1]=e=>k("focus"))},{default:s(()=>[y("使用通用方法-点击获得焦点")]),_:1})]),a("div",M,[o(n,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=e=>c.value=e),disabled:""},null,8,["modelValue"])]),a("div",O,[o(n,{modelValue:v.value,"onUpdate:modelValue":l[3]||(l[3]=e=>v.value=e),type:"password"},null,8,["modelValue"])]),a("div",Q,[o(n,{modelValue:f.value,"onUpdate:modelValue":l[4]||(l[4]=e=>f.value=e),type:"textarea"},null,8,["modelValue"])]),a("div",j,[o(n,{modelValue:V.value,"onUpdate:modelValue":l[5]||(l[5]=e=>V.value=e),formatter:e=>`$ ${e}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:e=>e.replace(/\$\s?|(,*)/g,"")},null,8,["modelValue","formatter","parser"])]),a("div",q,[o(n,{modelValue:_.value,"onUpdate:modelValue":l[6]||(l[6]=e=>_.value=e),"prefix-icon":i(r),"suffix-icon":i(r)},null,8,["modelValue","prefix-icon","suffix-icon"])]),a("div",A,[o(n,{modelValue:w.value,"onUpdate:modelValue":l[8]||(l[8]=e=>w.value=e)},{prepend:s(()=>[o(I,{modelValue:x.value,"onUpdate:modelValue":l[7]||(l[7]=e=>x.value=e),placeholder:"Select",options:b,style:{width:"115px"}},null,8,["modelValue","options"])]),append:s(()=>[o(p,{icon:i(r)},null,8,["icon"])]),_:1},8,["modelValue"])])]),_:1})}}}),H=g(D,[["__file","Input.vue"]]);export{H as default};
