import{f as t}from"./app-1b1e42c6.js";import{c as u,r as e,h as i,M as c,p as l,q as m,N as d,z as _,_ as f}from"./framework-fce7c3d2.js";const b=u({__name:"FormRenderData",setup(v){const o=e({input:"input"}),a=e("input2"),n=e({input:"input3",input4:{input:"input4"}}),p=e([1,2,3,4,5]),s=i(()=>({model:o,items:{input:{label:"默认使用model",components:t({})},input2:{label:"ref数据",components:t({data:a})},input3:{label:"对象的属性",components:t({data:n.value,dataKey:"input"})},input4:{label:"对象的嵌套属性",components:t({data:n.value.input4,dataKey:"input"})},input5:{label:"数组元素",components:t({data:p.value,dataKey:"2"})}},labelWidth:160}));return(y,F)=>{const r=c("FormRender");return l(),m("div",null,[d(r,{options:_(s)},null,8,["options"])])}}}),k=f(b,[["__file","FormRenderData.vue"]]);export{k as default};