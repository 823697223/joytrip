import{c as o,a as p,b as u}from"./app-1ce78226.js";import{c as i}from"./datePicker-2e54da4d.js";import{c as d}from"./checkbox-3187ccfa.js";import{c as b}from"./radio-74b9c50e.js";import{c as f}from"./inputNumber-aed7589a.js";import{c as h}from"./switch-8cd543f1.js";import{c as r}from"./button-c004e4d4.js";import{c as _,r as n,h as v,j as a,M as k,p as x,q as N,N as R,z as F,_ as I}from"./framework-fce7c3d2.js";const w=_({__name:"FormRender",setup(B){const c=n({input:"input",select:"",datePicker:"",switch:!0,radio:"1",checkbox:!0,inputNumber:0}),l=n(["default","primary","success","warning","danger","info"]),s=v(()=>({model:c,items:{input:{label:"Input 输入框",components:o({})},select:{label:"Select 选择器",components:p({options:[{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0},{label:"Group",options:[{label:"Group1",value:"3"},{label:"Group2",value:"4"}]}]})},datePicker:{label:"DatePicker 日期选择器",components:i({})},switch:{label:"Switch 开关",components:h({})},radio:{label:"Radio 单选框",components:b({options:[{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0}]})},checkbox:{label:"Checkbox 多选框",components:d({})},inputNumber:{label:"InputNumber 计数器",components:f({})},button:{label:"Button 按钮",components:r({content:"button"})},buttons:{label:"Button 按钮组",components:l.value.map((e,t)=>r({content:"button"+(t+1),type:e}))},render:{label:"render 自定义内容",render:()=>a("div","我是自定义内容")},hideFormItem:{render:()=>a("div","不用el-form-item包裹的内容，一般用于分割线"),hideFormItem:!0},line:{hideFormItem:!0,components:u({})},renderColor:{label:"设置样式",components:o({placeholder:"300px的input",style:{width:"300px"}}),style:{background:"red"}}},labelWidth:160}));return(e,t)=>{const m=k("FormRender",!0);return x(),N("div",null,[R(m,{options:F(s)},null,8,["options"])])}}}),j=I(w,[["__file","FormRender.vue"]]);export{j as default};
