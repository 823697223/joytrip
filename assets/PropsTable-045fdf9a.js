import{S as i}from"./app-2aea7d28.js";import{c as p,h as u,j as t,M as n,p as c,U as m,z as f,_}from"./framework-6b3c435d.js";const d=p({__name:"PropsTable",props:{columns:null},setup(o){const a=o,l=u(()=>({data:a.columns,columns:[{label:"属性名",value:"name"},{label:"说明",value:"desc"},{label:"属性名",render(e){return e.row.type=Array.isArray(e.row.type)?e.row.type:[e.row.type],t("div",{style:{display:"flex","align-items":"center"}},e.row.type.map(r=>[t(i,{status:"info",text:r}),e.row.enum?t(n("el-tooltip"),{content:e.row.enum,effect:"light",trigger:"click"},()=>t("i",{class:"iconfont icon-Huge-icon_interface_outline_information",style:{"margin-top":"3px","margin-left":"3px",cursor:"pointer"}})):void 0]))}},{label:"默认值",render(e){return t("div",e.row.default||"—")}}]}));return(e,r)=>{const s=n("TableRender");return c(),m(s,{style:{"margin-top":"20px"},options:f(l)},null,8,["options"])}}}),g=_(d,[["__file","PropsTable.vue"]]);export{g as default};
