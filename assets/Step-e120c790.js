import{q as c,t as l}from"./app-1ce78226.js";import{c as _,r as m,M as i,p as u,q as f,N as e,z as t,Q as d,V as s,t as n,_ as k}from"./framework-fce7c3d2.js";const x=_({__name:"Step",setup(C){const a=m([{name:"第一步"},{name:"第二步"},{name:"第三步"}]),{next:p,prev:r}=l();return(v,y)=>{const o=i("el-button");return u(),f("div",null,[e(t(c),{style:{padding:"20px"},steps:a.value,ref:"stepRef"},null,8,["steps"]),d("div",null,[e(o,{type:"primary",onClick:t(r)},{default:s(()=>[n("上一步")]),_:1},8,["onClick"]),e(o,{type:"primary",onClick:t(p)},{default:s(()=>[n("下一步")]),_:1},8,["onClick"])])])}}}),S=k(x,[["__file","Step.vue"]]);export{S as default};