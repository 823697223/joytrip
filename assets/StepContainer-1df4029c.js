import{n as k}from"./app-aeb1cdc8.js";import{c as y,r as i,M as l,p as n,U as a,V as e,N as h,t as o,R as s,z as c,Q as x,_ as b}from"./framework-6b3c435d.js";const S=x("div",{style:{"background-color":"red",height:"1000px"}},"111",-1),g=y({__name:"StepContainer",setup(B){const _=i({name:"detail",to:"/"}),m=i([{name:"第一步"},{name:"第二步"},{name:"第三步"}]),{next:p,prev:f}=k(),t=i(0),C=u=>{t.value=u};return(u,N)=>{const r=l("el-button"),d=l("StepContainer",!0),v=l("Card");return n(),a(v,null,{default:e(()=>[h(d,{title:"后付发票申请",crumb:_.value,steps:m.value,onChange:C,style:{padding:"20px"},ref:"stepContainerRef",showBottom:t.value!==2},{"step-1":e(()=>[S]),"step-2":e(()=>[o("2")]),"step-3":e(()=>[o("3")]),bottom:e(()=>[t.value===0?(n(),a(r,{key:0,type:"info"},{default:e(()=>[o("取消")]),_:1})):s("v-if",!0),t.value===1?(n(),a(r,{key:1,type:"primary",onClick:c(f)},{default:e(()=>[o("上一步")]),_:1},8,["onClick"])):s("v-if",!0),t.value===0?(n(),a(r,{key:2,type:"primary",onClick:c(p)},{default:e(()=>[o("下一步")]),_:1},8,["onClick"])):s("v-if",!0),t.value===1?(n(),a(r,{key:3,type:"info",onClick:c(p)},{default:e(()=>[o("保存")]),_:1},8,["onClick"])):s("v-if",!0),t.value===1?(n(),a(r,{key:4,type:"primary",onClick:c(p)},{default:e(()=>[o("提交")]),_:1},8,["onClick"])):s("v-if",!0)]),_:1},8,["crumb","steps","showBottom"])]),_:1})}}}),R=b(g,[["__file","StepContainer.vue"]]);export{R as default};
