import{c as _,a as l}from"./app-a009f681.js";import{c as p,r as d,h as u,M as e,p as m,U as f,V as n,N as t,z as C,_ as R}from"./framework-6b3c435d.js";const B=p({__name:"ConditionRender",setup(b){const o=d({input:"",select:""}),s=u(()=>({input:{label:"条件1",components:_({})},select:{label:"条件2",components:l({options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]})}}));return(h,v)=>{const c=e("ResetButton"),a=e("SearchButton"),r=e("ConditionRender",!0),i=e("Card");return m(),f(i,null,{default:n(()=>[t(r,{condition:o.value,items:C(s)},{btns:n(()=>[t(c),t(a)]),_:1},8,["condition","items"])]),_:1})}}}),k=R(B,[["__file","ConditionRender.vue"]]);export{k as default};