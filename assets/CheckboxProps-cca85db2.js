import{c as a,b as o,M as s,p as t,U as c,_ as l}from"./framework-fce7c3d2.js";const r=a({__name:"CheckboxProps",setup(m){const e=o([{name:"value / v-model",desc:"绑定值",type:"enum",enum:"string / number / boolean"},{name:"options",desc:"checkbox组的选项",type:"CheckBoxOptions[]"},{name:"label",desc:"选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",type:"enum",enum:"string / number / boolean"},{name:"true-label",desc:"选中时的值",type:["string","number"]},{name:"false-label",desc:"没有选中时的值",type:["string","number"]},{name:"disabled",desc:"禁用",type:"boolean",default:"false"},{name:"border",desc:"是否显示边框",type:"boolean",default:"false"},{name:"size",desc:"Checkbox 的尺寸，仅在 border 为真时有效",type:"enum",enum:"'large' | 'default' | 'small'"},{name:"name",desc:"原生 name 属性",type:"string"},{name:"checked",desc:"当前是否勾选",type:"boolean",default:"false"},{name:"indeterminate",desc:"设置 indeterminate 状态，只负责样式控制",type:"boolean",default:"false"}]);return(p,d)=>{const n=s("PropsTable");return t(),c(n,{columns:e},null,8,["columns"])}}}),b=l(r,[["__file","CheckboxProps.vue"]]);export{b as default};