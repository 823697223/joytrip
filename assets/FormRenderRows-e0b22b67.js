import{e as n,f as c}from"./app-b45d2089.js";import{c as l}from"./datePicker-c5ff6555.js";import{c as s}from"./checkbox-17e7be1a.js";import{c as p}from"./radio-ddd53360.js";import{c as u}from"./inputNumber-79993d29.js";import{c as m}from"./switch-f4aa5a0c.js";import{c as i}from"./button-6ae1c42f.js";import{c as d,r as b,h as f,j as _,M as e,p as R,U as h,V as w,N as k,z as v,_ as x}from"./framework-6b3c435d.js";const C=d({__name:"FormRenderRows",setup(N){const t=b({input:"input",select:"",datePicker:"",switch:!0,radio:"1",checkbox:!0,inputNumber:0}),o=f(()=>({model:t,items:{input:{label:"Input 输入框",components:n({})},select:{label:"Select 选择器",components:c({options:[{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0},{label:"Group",options:[{label:"Group1",value:"3"},{label:"Group2",value:"4"}]}]})},datePicker:{label:"DatePicker 日期选择器",components:l({})},switch:{label:"Switch 开关",components:m({})},radio:{label:"Radio 单选框",components:p({options:[{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0}]})},checkbox:{label:"Checkbox 多选框",components:s({}),span:24},inputStyle:{label:"InputNumber 计数器",components:u({}),newRow:!0},button:{label:"Button 按钮",components:i({content:"button"}),newRow:!0},render:{label:"render 自定义内容",render:()=>_("div","我是自定义内容")}},labelWidth:160,row:2,gutter:20}));return(F,S)=>{const r=e("FormRender"),a=e("Card");return R(),h(a,null,{default:w(()=>[k(r,{options:v(o)},null,8,["options"])]),_:1})}}}),j=x(C,[["__file","FormRenderRows.vue"]]);export{j as default};
