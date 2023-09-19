import{c as n,b as t,M as o,p as s,U as r,_ as l}from"./framework-fce7c3d2.js";const d=n({__name:"TableRenderProps",setup(c){const e=t([{name:"columns",desc:"列表列配置",type:"TableColumn[]"},{name:"data",desc:"显示的数据",type:"array"},{name:"add",desc:"是否可以添加数据",type:"boolean",default:"false"},{name:"addText",desc:"添加数据按钮的文字",type:"string",default:"添加数据"},{name:"filterColumnCache",desc:"开启过滤列的缓存",type:["boolean","sessionStorage","localStorage"],default:"false"},{name:"filterColumnCacheKey",desc:"过滤列缓存的key",type:"string"},{name:"height",desc:"Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。",type:["string","number"]},{name:"max-height",desc:"Table 的最大高度。 合法的值为数字或者单位为 px 的高度。",type:["string","number"]},{name:"stripe",desc:"是否为斑马纹 table",type:"boolean",default:"false"},{name:"border",desc:"是否带有纵向边框",type:"boolean",default:"false"},{name:"fit",desc:"列的宽度是否自撑开",type:"boolean",default:"true"},{name:"show-header",desc:"是否显示表头",type:"boolean",default:"true"},{name:"highlight-current-row",desc:"是否要高亮当前行",type:"boolean",default:"false"},{name:"current-row-key",desc:"当前行的 key，只写属性",type:["string","number"]},{name:"row-key",desc:"行数据的 Key，用来优化 Table 的渲染； 在使用reserve-selection功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。",type:["string","function(row)"]},{name:"default-expand-all",desc:"是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效",type:"boolean",default:"false"},{name:"expand-row-keys",desc:"可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。",type:"array"},{name:"default-sort",desc:"默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序",type:"object"},{name:"span-method",desc:"合并行或列的计算方法",type:"function({ row, column, rowIndex, columnIndex })"}]);return(p,m)=>{const a=o("PropsTable");return s(),r(a,{columns:e},null,8,["columns"])}}}),i=l(d,[["__file","TableRenderProps.vue"]]);export{i as default};
