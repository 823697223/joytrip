import{i as r,j as a}from"./app-6fe966e5.js";import{c as n}from"./datePicker-3cdab62c.js";import{c}from"./checkbox-ef6d5a7b.js";import{c as l}from"./radio-d5377373.js";import{c as s}from"./inputNumber-12a6c914.js";import{c as p}from"./switch-302098b8.js";import{c as u}from"./button-b0223108.js";import{c as m,r as i,h as b,j as d,M as f,p as _,q as h,N as R,z as k,_ as w}from"./framework-fce7c3d2.js";const v=m({__name:"FormRenderRows",setup(x){const e=i({input:"input",select:"",datePicker:"",switch:!0,radio:"1",checkbox:!0,inputNumber:0}),o=b(()=>({model:e,items:{input:{label:"Input 输入框",components:r({})},select:{label:"Select 选择器",components:a({options:[{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0},{label:"Group",options:[{label:"Group1",value:"3"},{label:"Group2",value:"4"}]}]})},datePicker:{label:"DatePicker 日期选择器",components:n({})},switch:{label:"Switch 开关",components:p({})},radio:{label:"Radio 单选框",components:l({options:[{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0}]})},checkbox:{label:"Checkbox 多选框",components:c({}),span:24},inputStyle:{label:"InputNumber 计数器",components:s({}),newRow:!0},button:{label:"Button 按钮",components:u({content:"button"}),newRow:!0},render:{label:"render 自定义内容",render:()=>d("div","我是自定义内容")}},labelWidth:160,row:2,gutter:20}));return(N,B)=>{const t=f("FormRender");return _(),h("div",null,[R(t,{options:k(o)},null,8,["options"])])}}}),O=w(v,[["__file","FormRenderRows.vue"]]);export{O as default};
