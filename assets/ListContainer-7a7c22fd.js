import{c as b,a as v}from"./app-b8b63f44.js";import{c as h,r as x,h as o,M as t,p as g,U as y,V as e,N as n,t as a,z as s,_ as B}from"./framework-6b3c435d.js";const L=h({__name:"ListContainer",setup(R){const c=x({input:"",select:""}),i=o(()=>({ticketNo:{label:"input",components:b({})},status:{label:"select",components:v({options:[]})}})),_=o(()=>({data:new Array(20).fill({name:"name",decs:"desc"}),columns:[{label:"属性名",value:"name"},{label:"说明",value:"desc"}]}));return(w,N)=>{const r=t("el-button"),l=t("ResetButton"),p=t("SearchButton"),d=t("ConditionRender"),u=t("TableRender"),m=t("Pagination"),f=t("ListContainer",!0),C=t("Card");return g(),y(C,{style:{height:"600px",overflow:"auto"}},{default:e(()=>[n(f,{title:"标题",shadow:"Title"},{"title-btns":e(()=>[n(r,{type:"primary"},{default:e(()=>[a("标题右侧按钮")]),_:1})]),condition:e(()=>[n(d,{condition:c.value,items:s(i)},{btns:e(()=>[n(l),n(p)]),_:1},8,["condition","items"])]),middle:e(()=>[a("搜索条件与列表之间插槽")]),page:e(()=>[n(m,{total:0,currentPage:1})]),default:e(()=>[n(u,{options:s(_)},null,8,["options"])]),_:1})]),_:1})}}});const P=B(L,[["__scopeId","data-v-39fb8515"],["__file","ListContainer.vue"]]);export{P as default};
