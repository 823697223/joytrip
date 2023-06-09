import{c as n,b as a,M as r,p as s,U as o,_ as l}from"./framework-fce7c3d2.js";const c=n({__name:"TableRenderColumnProps",setup(m){const e=a([{name:"type",desc:"对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮",type:"string",enum:"[selection / index / expand]"},{name:"index",desc:"如果设置了 type=index，可以通过传递 index 属性来自定义索引",type:["number","function"]},{name:"label",desc:"显示的标题",type:"string"},{name:"column-key",desc:"column 的 key， column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件",type:"string"},{name:"value",desc:"字段名称 对应列内容的字段名",type:"string"},{name:"width",desc:"对应列的宽度",type:["string","number"]},{name:"min-width",desc:"对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列",type:["string","number"]},{name:"fixed",desc:"列是否固定在左侧或者右侧。 true 表示固定在左侧",type:"enum",enum:"true / 'left' / 'right'"},{name:"render-header",desc:"列标题 Label 区域渲染使用的 Function",type:"function({ column, $index })"},{name:"sortable",desc:"对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件",type:["boolean","string"]},{name:"sort-method",desc:"指定数据按照哪个属性进行排序，仅当sortable设置为true的时候有效。 应该如同 Array.sort 那样返回一个 Number",type:"function(a, b)"},{name:"sort-by",desc:"指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推",type:["function(row, index)","string","array"]},{name:"sort-orders",desc:"数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序",type:"array"},{name:"resizable",desc:"对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）",type:"boolean",default:"true"},{name:"formatter",desc:"用来格式化内容",type:"function(row, column, cellValue, index)"},{name:"show-overflow-tooltip",desc:"当内容过长被隐藏时显示 tooltip",type:"boolean"},{name:"align",desc:"对齐方式",type:"enum",enum:"left / center / right",default:"left"},{name:"header-align",desc:"表头对齐方式， 若不设置该项，则使用表格的对齐方式",type:"enum",enum:"left / center / right"},{name:"class-name",desc:"列的 className",type:"string"},{name:"label-class-name",desc:"当前列标题的自定义类名",type:"string"},{name:"selectable",desc:"仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选",type:"function(row, index)"},{name:"reserve-selection",desc:"仅对  type=selection 的列有效， 请注意， 需指定 row-key 来让这个功能生效。",type:"boolean",default:"false"},{name:"filters",desc:"数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。",type:"Array<{text: string, value: string}>"},{name:"filter-placement",desc:"过滤弹出框的定位",type:"string"},{name:"filter-multiple",desc:"数据过滤的选项是否多选",type:"boolean",default:"true"},{name:"filter-method",desc:"数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。",type:"function(value, row, column)"},{name:"filtered-value",desc:"选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。",type:"array"},{name:"edit",desc:"编辑当前行数据的选项",type:"EditRender"}]);return(i,d)=>{const t=r("PropsTable");return s(),o(t,{columns:e},null,8,["columns"])}}}),p=l(c,[["__file","TableRenderColumnProps.vue"]]);export{p as default};
