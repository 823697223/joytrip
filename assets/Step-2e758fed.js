import{k as _,l as u}from"./app-aeb1cdc8.js";import{c as m,r as f,M as s,p as i,U as d,V as e,N as t,z as a,Q as C,t as o,_ as k}from"./framework-6b3c435d.js";const x=m({__name:"Step",setup(v){const p=f([{name:"第一步"},{name:"第二步"},{name:"第三步"}]),{next:r,prev:c}=u();return(y,S)=>{const n=s("el-button"),l=s("Card");return i(),d(l,null,{default:e(()=>[t(a(_),{style:{padding:"20px"},steps:p.value,ref:"stepRef"},null,8,["steps"]),C("div",null,[t(n,{type:"primary",onClick:a(c)},{default:e(()=>[o("上一步")]),_:1},8,["onClick"]),t(n,{type:"primary",onClick:a(r)},{default:e(()=>[o("下一步")]),_:1},8,["onClick"])])]),_:1})}}}),B=k(x,[["__file","Step.vue"]]);export{B as default};