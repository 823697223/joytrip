import{F as i}from"./app-ea3934e6.js";import{c as p,r as a,h as b,M as n,p as u,q as c,N as e,V as d,t as f,z as o,R as _,_ as R}from"./framework-fce7c3d2.js";const T=p({__name:"TableRenderFilterColumns",setup(v){const l=a([{name:"name",description:"description",managementGroupName:"managementGroup"},{name:"name",description:"description",managementGroupName:"managementGroup"},{name:"name",description:"description",managementGroupName:"managementGroup"}]),t=a(),r=b(()=>({data:l.value,columns:[{label:"模板名称",value:"name"},{label:"模板描述",value:"description",showTooltipWhenOverflow:!0},{label:"所属管理组",value:"managementGroupName"}]}));return(C,g)=>{const m=n("el-button"),s=n("TableRender");return u(),c("div",null,[e(m,{type:"primary",id:"btn",style:{"margin-bottom":"10px"}},{default:d(()=>[f("过滤表格列")]),_:1}),e(s,{options:o(r),ref_key:"tableRef",ref:t},null,8,["options"]),e(o(i),{to:"#btn",tableRef:t.value},null,8,["tableRef"]),_(` 如果使用TableRender在子组件内，FilterTableColumns的tableRef传值看例子\r
        ListTable.vue:\r
            <TableRender :options="options" ref="table"> </TableRender>\r
\r
        <ListTable ref="tableRef"></ListTable>\r
		<FilterTableColumns to="#btn" :tableRef="tableRef && tableRef.table"></FilterTableColumns> `)])}}}),G=R(T,[["__file","TableRenderFilterColumns.vue"]]);export{G as default};