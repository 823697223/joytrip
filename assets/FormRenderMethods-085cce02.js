import{c as a,b as n,M as s,p as r,U as t,_ as c}from"./framework-6b3c435d.js";const p=a({__name:"FormRenderMethods",setup(l){const e=n([{name:"validate",desc:"对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise",params:"Function(callback: Function(boolean, object))"},{name:"validateField",desc:"对部分表单字段进行校验的方法",params:"Function(props: array | string, callback: Function(errorMessage: string))"},{name:"resetFields",desc:"	对整个表单进行重置，将所有字段值重置为初始值并移除校验结果"},{name:"clearValidate",desc:"移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果",params:"Function(props: array | string)"}]);return(m,d)=>{const o=s("MethodsTable");return r(),t(o,{columns:e},null,8,["columns"])}}}),_=c(p,[["__file","FormRenderMethods.vue"]]);export{_ as default};
