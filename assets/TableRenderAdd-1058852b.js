import{b as l}from"./app-ec54cee3.js";import{c as d,r as c,h as p,M as a,p as m,U as u,V as i,N as _,z as f,_ as b}from"./framework-6b3c435d.js";const v=d({__name:"TableRenderAdd",setup(h){const{onSelectionChange:n}=l(),e=c([]),o=()=>{e.value.push({name:"name",description:"description",managementGroupName:"managementGroupName"})},t=p(()=>({data:e.value,columns:[{type:"selection"},{label:"模板名称",value:"name",fixed:!0},{label:"模板描述",value:"description",showTooltipWhenOverflow:!0},{label:"所属管理组",value:"managementGroupName"}],add:!0,onAdd:o,onSelectionChange:n}));return(T,C)=>{const s=a("TableRender"),r=a("Card");return m(),u(r,null,{default:i(()=>[_(s,{options:f(t)},null,8,["options"])]),_:1})}}}),R=b(v,[["__file","TableRenderAdd.vue"]]);export{R as default};
