import{b as d}from"./app-ec54cee3.js";import{c as m,r as a,h as f,M as e,p as b,U as v,V as n,Q as s,N as l,z as h,t as R,_ as T}from"./framework-6b3c435d.js";const C={class:"row"},N={class:"row"},g=m({__name:"TableRender",setup(w){const{onSelectionChange:r}=d(),o=a([{name:"name",description:"description",managementGroupName:"managementGroupName"}]),t=a(),c=()=>{t.value.handle("toggleRowSelection",o.value[0])},p=f(()=>({data:o.value,columns:[{type:"selection"},{label:"模板名称",value:"name",fixed:!0},{label:"模板描述",value:"description",showTooltipWhenOverflow:!0},{label:"所属管理组",value:"managementGroupName"}],onSelectionChange:r}));return(x,k)=>{const i=e("TableRender",!0),u=e("el-button"),_=e("Card");return b(),v(_,null,{default:n(()=>[s("div",C,[l(i,{options:h(p),ref_key:"tableRef",ref:t},null,8,["options"])]),s("div",N,[l(u,{type:"primary",onClick:c},{default:n(()=>[R("选中第一行")]),_:1})])]),_:1})}}}),B=T(g,[["__file","TableRender.vue"]]);export{B as default};
