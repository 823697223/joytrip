import{g as s}from"./app-1ce78226.js";import{c as l,r,h as d,M as c,p,q as m,N as u,z as i,_}from"./framework-fce7c3d2.js";const f=l({__name:"TableRenderAdd",setup(b){const{onSelectionChange:n}=s(),e=r([]),a=()=>{e.value.push({name:"name",description:"description",managementGroupName:"managementGroupName"})},o=d(()=>({data:e.value,columns:[{type:"selection"},{label:"模板名称",value:"name",fixed:!0},{label:"模板描述",value:"description",showTooltipWhenOverflow:!0},{label:"所属管理组",value:"managementGroupName"}],add:!0,onAdd:a,onSelectionChange:n}));return(v,T)=>{const t=c("TableRender");return p(),m("div",null,[u(t,{options:i(o)},null,8,["options"])])}}}),N=_(f,[["__file","TableRenderAdd.vue"]]);export{N as default};
