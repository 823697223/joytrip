import{_ as n,p as s,q as a,a1 as t}from"./framework-6b3c435d.js";const e={},p=t(`<h1 id="objecttoarray" tabindex="-1"><a class="header-anchor" href="#objecttoarray" aria-hidden="true">#</a> objectToArray</h1><p>Object 转 Array</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">objectToArray</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数</p><ol><li><code>obj</code> 要转换的对象</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
	a<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
	b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	c<span class="token operator">:</span> <span class="token punctuation">{</span>
		d<span class="token operator">:</span> <span class="token punctuation">{</span>
			e<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	f<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
ObjectUtil<span class="token punctuation">.</span><span class="token function">objectToArray</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">/* =&gt; 
 [
	[&#39;a&#39;, &#39;1&#39;],
	[&#39;b&#39;, 2],
	[
		&#39;c&#39;,
		{
			d: {
				e: 3,
			},
		},
	],
	[&#39;f&#39;, [1, 2, 3]],
] */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(e,[["render",i],["__file","index.html.vue"]]);export{r as default};
