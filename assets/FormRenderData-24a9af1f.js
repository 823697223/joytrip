import{c as t}from"./app-e1d92dd2.js";import{c as i,r as n,h as l,M as o,p as m,U as d,V as _,N as f,z as b,_ as v}from"./framework-6b3c435d.js";const C=i({__name:"FormRenderData",setup(F){const a=n({input:"input"}),p=n("input2"),e=n({input:"input3",input4:{input:"input4"}}),r=n([1,2,3,4,5]),s=l(()=>({model:a,items:{input:{label:"默认使用model",components:t({})},input2:{label:"ref数据",components:t({data:p})},input3:{label:"对象的属性",components:t({data:e.value,dataKey:"input"})},input4:{label:"对象的嵌套属性",components:t({data:e.value.input4,dataKey:"input"})},input5:{label:"数组元素",components:t({data:r.value,dataKey:"2"})}},labelWidth:160}));return(R,h)=>{const u=o("FormRender"),c=o("Card");return m(),d(c,null,{default:_(()=>[f(u,{options:b(s)},null,8,["options"])]),_:1})}}}),D=v(C,[["__file","FormRenderData.vue"]]);export{D as default};
