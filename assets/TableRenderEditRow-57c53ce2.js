import{r as C,f as g,M as u}from"./app-db2246ef.js";import{c as N,r as c,h as k,j as _,M as t,p as G,U as T,V as n,Q as f,N as o,z as p,t as d,_ as x}from"./framework-6b3c435d.js";const V={class:"row"},B={class:"row"},E=N({__name:"TableRenderEditRow",setup(M){const{editRow:m,validate:v}=g(),b=async()=>{await v()?u.success("校验成功"):u.error("校验失败")},r=c([{name:"name",description:"description",managementGroupName:"managementGroup"},{name:"name",description:"description",managementGroupName:"managementGroup"},{name:"name",description:"description",managementGroupName:"managementGroup"}]),s=c(),y=k(()=>({data:r.value,columns:[{type:"selection"},{label:"模板名称",value:"name",edit:{type:"input",required:!0}},{label:"模板描述",value:"description",edit:{type:"select",options:[{label:"1",value:"1"}],validator:(e,a,l)=>{l()}}},{label:"所属管理组",value:"managementGroupName",edit:{render:e=>C({data:e.row,dataKey:"managementGroupName"})}},{label:"操作",render:({row:e})=>[_(t("el-button"),{type:"primary",onClick:()=>{s.value.editRow(e,!0)}},()=>"编辑"),_(t("el-button"),{type:"primary",onClick:()=>{s.value.editRow(e,!1)}},()=>"保存")]}]}));return(e,a)=>{const l=t("TableRender"),i=t("el-button"),R=t("Card");return G(),T(R,null,{default:n(()=>[f("div",V,[o(l,{options:p(y),ref_key:"tableRef",ref:s},null,8,["options"])]),f("div",B,[o(i,{type:"primary",onClick:a[0]||(a[0]=w=>p(m)(r.value[0],!0))},{default:n(()=>[d("编辑第一行")]),_:1}),o(i,{type:"primary",onClick:a[1]||(a[1]=w=>p(m)(r.value[0],!1))},{default:n(()=>[d("保存第一行")]),_:1}),o(i,{type:"primary",onClick:b},{default:n(()=>[d("校验表格")]),_:1})])]),_:1})}}}),j=x(E,[["__file","TableRenderEditRow.vue"]]);export{j as default};
