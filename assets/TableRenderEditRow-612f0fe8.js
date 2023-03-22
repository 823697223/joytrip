import{r as G,f as x,M as p}from"./app-aeb1cdc8.js";import{c as T,r as u,h as E,j as o,M as n,p as V,U as A,V as r,Q as _,N as s,z as c,t as m,_ as B}from"./framework-6b3c435d.js";const M={class:"row"},h={class:"row"},$=T({__name:"TableRenderEditRow",setup(j){const{editRow:l,saveRow:f,cancelEditRow:b,addRow:v,delRow:g,validate:R}=x(),C=async()=>{await R()?p.success("校验成功"):p.error("校验失败")},d=u([{name:"name",description:"description",managementGroupName:"managementGroup"},{name:"name",description:"description",managementGroupName:"managementGroup"},{name:"name",description:"description",managementGroupName:"managementGroup"}]),y=u(),N=E(()=>({data:d.value,add:!0,onAdd(){v({name:"name",description:"description",managementGroupName:"managementGroupName"},!0)},onAddAfter(){console.log("添加了数据")},onEdit(e){console.log(e,"开始编辑")},onCancelEdit(e){console.log(e,"取消编辑")},onSave(e){console.log(e,"保存编辑")},onDel(){console.log("删除了数据")},columns:[{type:"selection"},{label:"模板名称",value:"name",edit:{type:"input",required:!0}},{label:"模板描述",value:"description",edit:{type:"select",options:[{label:"1",value:"1"}],validator:(e,t,a)=>{a()}}},{label:"所属管理组",value:"managementGroupName",edit:{render:e=>G({data:e.row,dataKey:"managementGroupName"})}},{label:"操作",render:({row:e,$index:t})=>{const{_edit:a}=e;return[a?o(n("text-button"),{onClick:()=>{b(e)}},()=>"取消"):o(n("text-button"),{onClick:()=>{l(e)}},()=>"编辑"),a?o(n("text-button"),{onClick:()=>{f(e)}},()=>"保存"):o(n("text-button"),{onClick:()=>{g(t)}},()=>"删除")]}}]}));return(e,t)=>{const a=n("TableRender"),i=n("el-button"),k=n("Card");return V(),A(k,null,{default:r(()=>[_("div",M,[s(a,{options:c(N),ref_key:"tableRef",ref:y},null,8,["options"])]),_("div",h,[s(i,{type:"primary",onClick:t[0]||(t[0]=w=>c(l)(d.value[0],!0))},{default:r(()=>[m("编辑第一行")]),_:1}),s(i,{type:"primary",onClick:t[1]||(t[1]=w=>c(l)(d.value[0],!1))},{default:r(()=>[m("保存第一行")]),_:1}),s(i,{type:"primary",onClick:C},{default:r(()=>[m("校验表格")]),_:1})])]),_:1})}}}),D=B($,[["__file","TableRenderEditRow.vue"]]);export{D as default};
