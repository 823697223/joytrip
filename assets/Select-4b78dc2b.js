import{c as x,r as s,b as y,M as _,p as C,q as N,Q as a,N as o,V as f,t as V,j as r,_ as B}from"./framework-fce7c3d2.js";const R={class:"row"},S={class:"row"},U={class:"row"},h={class:"row"},G={class:"row"},j=x({__name:"Select",setup(q){const c=s(""),p=s("select2"),i=s(""),v=s(""),n=y([{label:"Restaurant",value:"1"},{label:"Order No.",value:"2",disabled:!0},{label:"Group",options:[{label:"Group1",value:"3"},{label:"Group2",value:"4"}]}]),b=t=>r("div",[r("span",t.label),r("span","+"+t.value)]),d=s(),k=()=>{d.value.focus()},w=t=>{d.value.handle(t)};return(t,e)=>{const u=_("Select",!0),m=_("el-button");return C(),N("div",null,[a("div",R,[o(u,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l),options:n,placeholder:"请选择",ref_key:"selectRef",ref:d},null,8,["modelValue","options"])]),a("div",S,[o(m,{type:"primary",onClick:k},{default:f(()=>[V("点击获得焦点")]),_:1}),o(m,{type:"primary",onClick:e[1]||(e[1]=l=>w("focus"))},{default:f(()=>[V("使用通用方法-点击获得焦点")]),_:1})]),a("div",U,[o(u,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=l=>p.value=l),options:n,disabled:""},null,8,["modelValue","options"])]),a("div",h,[o(u,{modelValue:i.value,"onUpdate:modelValue":e[3]||(e[3]=l=>i.value=l),options:n,placeholder:"请选择",filterable:""},null,8,["modelValue","options"])]),a("div",G,[o(u,{modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=l=>v.value=l),options:n,placeholder:"请选择",optionsRender:b},null,8,["modelValue","options"])])])}}}),E=B(j,[["__file","Select.vue"]]);export{E as default};
