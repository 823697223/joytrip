import{B as s,C as o}from"./app-7bb956f0.js";import{j as n,M as a}from"./framework-6b3c435d.js";class t extends s{constructor(e){super(e),this.renderType="radio"}renderComponent(){return n(a(o.RADIO_GROUP),{...this.computedProps(),options:void 0},()=>(this.props.options||[]).map(e=>n(a(o.RADIO),{label:e.value,"true-label":e.trueLabel,"false-label":e.falseLabel,disabled:e.disabled,checked:e.checked},()=>e.label)))}}function d(r){return new t(r)}function u(r){return d(r).render()}export{d as c,u as r};
