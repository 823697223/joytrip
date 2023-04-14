import{f as k,g as F,E as a,i as R}from"./app-fc785ad9.js";import{c as h}from"./datePicker-2e88a15b.js";import{c as y,r as s,h as V,M as l,p as q,q as x,Q as n,N as t,z as C,V as c,t as i,_ as N}from"./framework-fce7c3d2.js";const P={class:"row"},g={class:"row"},w=y({__name:"FormRenderValidate",setup(B){const{validate:u,resetFields:d}=R(),p=s(),m=s({datePicker:""}),_=async()=>{if(!await u()){a.error("validate error");return}a.success("validate success")},f=()=>d(),v=V(()=>({model:m,items:{input:{label:"Input 输入框（使用required属性）",required:!0,components:k({})},select:{label:"Select 选择器（使用rules属性）",rules:[{required:!0,message:"请选择",blur:"change"}],components:F({options:[{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0},{label:"Group",options:[{label:"Group1",value:"3"},{label:"Group2",value:"4"}]}]})},datePicker:{label:"DatePicker 日期选择器（自定义validator校验器）",required:!0,validator(b,o,e){o||e("请选择日期"),e()},components:h({})}},labelPosition:"top"}));return(b,o)=>{const e=l("FormRender"),r=l("el-button");return q(),x("div",null,[n("div",P,[t(e,{options:C(v),ref_key:"formRef",ref:p},null,8,["options"])]),n("div",g,[t(r,{type:"primary",onClick:_},{default:c(()=>[i("校验表单")]),_:1}),t(r,{type:"primary",onClick:f},{default:c(()=>[i("重置表单")]),_:1})])])}}}),I=N(w,[["__file","FormRenderValidate.vue"]]);export{I as default};
