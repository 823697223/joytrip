import{v as C}from"./app-1ce78226.js";import{c as k,r as p,M as u,p as n,q as y,N as h,V as e,t as o,U as s,R as r,z as c,Q as x,_ as b}from"./framework-fce7c3d2.js";const B=x("div",{style:{"background-color":"red",height:"1000px"}},"111",-1),g=k({__name:"StepContainer",setup(N){const m=p({name:"detail",to:"/"}),_=p([{name:"第一步"},{name:"第二步"},{name:"第三步"}]),{next:l,prev:f}=C(),t=p(0),d=i=>{t.value=i};return(i,S)=>{const a=u("el-button"),v=u("StepContainer",!0);return n(),y("div",null,[h(v,{title:"后付发票申请",crumb:m.value,steps:_.value,onChange:d,style:{padding:"20px"},ref:"stepContainerRef",showBottom:t.value!==2},{"step-1":e(()=>[B]),"step-2":e(()=>[o("2")]),"step-3":e(()=>[o("3")]),bottom:e(()=>[t.value===0?(n(),s(a,{key:0,type:"info"},{default:e(()=>[o("取消")]),_:1})):r("v-if",!0),t.value===1?(n(),s(a,{key:1,type:"primary",onClick:c(f)},{default:e(()=>[o("上一步")]),_:1},8,["onClick"])):r("v-if",!0),t.value===0?(n(),s(a,{key:2,type:"primary",onClick:c(l)},{default:e(()=>[o("下一步")]),_:1},8,["onClick"])):r("v-if",!0),t.value===1?(n(),s(a,{key:3,type:"info",onClick:c(l)},{default:e(()=>[o("保存")]),_:1},8,["onClick"])):r("v-if",!0),t.value===1?(n(),s(a,{key:4,type:"primary",onClick:c(l)},{default:e(()=>[o("提交")]),_:1},8,["onClick"])):r("v-if",!0)]),_:1},8,["crumb","steps","showBottom"])])}}}),R=b(g,[["__file","StepContainer.vue"]]);export{R as default};
