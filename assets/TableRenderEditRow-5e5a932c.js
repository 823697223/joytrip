import{r as v}from"./app-7bb956f0.js";import{c as R,r as p,h as y,j as m,M as t,p as w,U as C,V as o,Q as d,N as r,z as N,t as u,_ as g}from"./framework-6b3c435d.js";const G={class:"row"},k={class:"row"},T=R({__name:"TableRenderEditRow",setup(x){const s=p([{name:"name",description:"description",managementGroupName:"managementGroup"},{name:"name",description:"description",managementGroupName:"managementGroup"},{name:"name",description:"description",managementGroupName:"managementGroup"}]),a=p(),l=e=>{a.value.editRow(s.value[0],e)},c=y(()=>({data:s.value,columns:[{type:"selection"},{label:"模板名称",value:"name",edit:{type:"input"}},{label:"模板描述",value:"description",edit:{type:"select",options:[{label:"1",value:"1"}]}},{label:"所属管理组",value:"managementGroupName",edit:{component:e=>v({data:e.row,dataKey:"managementGroupName"})}},{label:"操作",render:({row:e})=>[m(t("el-button"),{type:"primary",onClick:()=>{a.value.editRow(e,!0)}},()=>"编辑"),m(t("el-button"),{type:"primary",onClick:()=>{a.value.editRow(e,!1)}},()=>"保存")]}]}));return(e,n)=>{const _=t("TableRender"),i=t("el-button"),f=t("Card");return w(),C(f,null,{default:o(()=>[d("div",G,[r(_,{options:N(c),ref_key:"tableRef",ref:a},null,8,["options"])]),d("div",k,[r(i,{type:"primary",onClick:n[0]||(n[0]=b=>l(!0))},{default:o(()=>[u("编辑第一行")]),_:1}),r(i,{type:"primary",onClick:n[1]||(n[1]=b=>l(!1))},{default:o(()=>[u("保存第一行")]),_:1})])]),_:1})}}}),E=g(T,[["__file","TableRenderEditRow.vue"]]);export{E as default};
