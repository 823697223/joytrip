import{c as k,a as R,E as n,u as C}from"./app-6b7dc03f.js";import{c as V}from"./datePicker-773a80a0.js";import{c as h,r as l,h as y,M as t,p as x,U as N,V as r,Q as c,N as o,z as P,t as i,_ as q}from"./framework-6b3c435d.js";const w={class:"row"},g={class:"row"},B=h({__name:"FormRenderValidate",setup(G){const{validate:u,resetFields:d}=C(),p=l(),m=l({datePicker:""}),_=async()=>{if(!await u()){n.error("validate error");return}n.success("validate success")},f=()=>d(),v=y(()=>({model:m,items:{input:{label:"Input 输入框（使用required属性）",required:!0,components:k({})},select:{label:"Select 选择器（使用rules属性）",rules:[{required:!0,message:"请选择",blur:"change"}],components:R({options:[{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0},{label:"Group",options:[{label:"Group1",value:"3"},{label:"Group2",value:"4"}]}]})},datePicker:{label:"DatePicker 日期选择器（自定义validator校验器）",required:!0,validator(b,a,e){a||e("请选择日期"),e()},components:V({})}},labelPosition:"top"}));return(b,a)=>{const e=t("FormRender"),s=t("el-button"),F=t("Card");return x(),N(F,null,{default:r(()=>[c("div",w,[o(e,{options:P(v),ref_key:"formRef",ref:p},null,8,["options"])]),c("div",g,[o(s,{type:"primary",onClick:_},{default:r(()=>[i("校验表单")]),_:1}),o(s,{type:"primary",onClick:f},{default:r(()=>[i("重置表单")]),_:1})])]),_:1})}}}),M=q(B,[["__file","FormRenderValidate.vue"]]);export{M as default};
