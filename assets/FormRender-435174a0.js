import"./app-d3fd86c5.js";import{c as o}from"./input-7370ff6e.js";import{c as i}from"./select-9a6e38a0.js";import{c as d}from"./datePicker-ad802011.js";import{c as b}from"./checkbox-d97f64f6.js";import{c as f}from"./radio-7412acf1.js";import{c as _}from"./inputNumber-ce53d861.js";import{c as h}from"./switch-cfac1799.js";import{c as r}from"./button-0ec1bf7c.js";import{c as k,r as n,h as v,j as a,M as c,p as x,U as R,V as C,N,z as w,_ as F}from"./framework-6b3c435d.js";const I=k({__name:"FormRender",setup(B){const l=n({input:"input",select:"",datePicker:"",switch:!0,radio:"1",checkbox:!0,inputNumber:0}),s=n(["default","primary","success","warning","danger","info"]),m=v(()=>({model:l,items:{input:{label:"Input 输入框",components:o({})},select:{label:"Select 选择器",components:i({options:[{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0},{label:"Group",options:[{label:"Group1",value:"3"},{label:"Group2",value:"4"}]}]})},datePicker:{label:"DatePicker 日期选择器",components:d({})},switch:{label:"Switch 开关",components:h({})},radio:{label:"Radio 单选框",components:f({options:[{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0}]})},checkbox:{label:"Checkbox 多选框",components:b({})},inputNumber:{label:"InputNumber 计数器",components:_({})},button:{label:"Button 按钮",components:r({content:"button"})},buttons:{label:"Button 按钮组",components:s.value.map((e,t)=>r({content:"button"+(t+1),type:e}))},render:{label:"render 自定义内容",render:()=>a("div","我是自定义内容")},renderColor:{label:"设置样式",components:o({placeholder:"300px的input",style:{width:"300px"}}),style:{background:"red"}},hideFormItem:{render:()=>a("div","不用el-form-item包裹的内容，一般用于分割线"),hideFormItem:!0}},labelWidth:160}));return(e,t)=>{const p=c("FormRender",!0),u=c("Card");return x(),R(u,null,{default:C(()=>[N(p,{options:w(m)},null,8,["options"])]),_:1})}}}),M=F(I,[["__file","FormRender.vue"]]);export{M as default};
