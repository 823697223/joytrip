import{n as _,o as u}from"./app-6b7dc03f.js";import{c as m,r as f,M as o,p as i,U as d,V as e,N as t,z as n,Q as C,t as s,_ as x}from"./framework-6b3c435d.js";const k=m({__name:"Step",setup(v){const p=f([{name:"第一步"},{name:"第二步"},{name:"第三步"}]),{next:r,prev:c}=u();return(y,S)=>{const a=o("el-button"),l=o("Card");return i(),d(l,null,{default:e(()=>[t(n(_),{style:{padding:"20px"},steps:p.value,ref:"stepRef"},null,8,["steps"]),C("div",null,[t(a,{type:"primary",onClick:n(c)},{default:e(()=>[s("上一步")]),_:1},8,["onClick"]),t(a,{type:"primary",onClick:n(r)},{default:e(()=>[s("下一步")]),_:1},8,["onClick"])])]),_:1})}}}),B=x(k,[["__file","Step.vue"]]);export{B as default};