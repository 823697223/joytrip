import{_ as e,M as n,p as o,q as c,N as a,Q as s,t as l,a1 as u}from"./framework-6b3c435d.js";const i={},r=s("h1",{id:"pagination-分页",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pagination-分页","aria-hidden":"true"},"#"),l(" Pagination 分页")],-1),k=u(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>
			<span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span>
			<span class="token attr-name">:currentPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage<span class="token punctuation">&quot;</span></span>
			<span class="token attr-name">:currentChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentChange<span class="token punctuation">&quot;</span></span>
			<span class="token attr-name">:sizeChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sizeChange<span class="token punctuation">&quot;</span></span>
		<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Pagination</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePageList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@joytrip/vue3&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> list<span class="token punctuation">,</span> total<span class="token punctuation">,</span> currentPage<span class="token punctuation">,</span> condition<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> currentChange<span class="token punctuation">,</span> sizeChange <span class="token punctuation">}</span> <span class="token operator">=</span> usePageList<span class="token operator">&lt;</span>
	any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	object
<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">totalCount</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2>`,2);function d(v,g){const t=n("BasePagination"),p=n("BasePaginationProps");return o(),c("div",null,[r,a(t),k,a(p)])}const b=e(i,[["render",d],["__file","index.html.vue"]]);export{b as default};